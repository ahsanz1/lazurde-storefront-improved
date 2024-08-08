import crypto from "crypto";
import jwt from "jsonwebtoken";

import {
  createCustomerAttribute,
  getAllCustomerAttributes,
  getCustomerByEmail,
  sendKlaviyoEmail,
  updateCustomerAttributesApi,
} from "lib/identity/cutomer";
import { NextApiRequest, NextApiResponse } from "next";

const EMAIL_SUCCESS_CODE = 202;

const sha256Hash = (text: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return hash.digest("hex");
};

const upsertCustomerResetPWOTT = async (payload: any) => {
  const requestBody = {
    customer_id: payload.customerId,
    attribute_id: payload.OTT_ID, // the attribute id of the OTT attribute you created earlier
    value: payload.customerHash,
  };
  // send the above request body to PUT /customers/attribute-values
  try {
    const upsertOTTRes = await updateCustomerAttributesApi(
      [requestBody],
      payload.region
    );
    if (upsertOTTRes.hasError)
      throw new Error("Could not update customer with OTT value");
    return upsertOTTRes.response;
  } catch (error) {
    throw error;
  }
};

const generatePasswordResetToken = (
  customer: any,
  ott: string,
  region: string
) => {
  try {
    const secret = process.env.JWT_SECRET_KEY || process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    const token = jwt.sign(
      {
        email: customer.email,
        ott,
        id: customer.id,
        region,
      },
      secret,
      {
        expiresIn: "10m",
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, region, lang, currentDomain } = req.body;
    const customerRes = await getCustomerByEmail(email, region);

    if (customerRes.hasError)
      throw new Error("A customer with provided email does not exist!");

    const customer = customerRes?.response[0];
    /**
     * NOTE: fetch customer attributes that were created for all customers
     */
    const { response: attributes = [] } = await getAllCustomerAttributes(
      region
    );

    let ottAttribute = attributes.find(
      (attr: any) => attr.name === "ResetPW_OTT"
    );

    if (!ottAttribute) {
      const payload = [
        {
          name: "ResetPW_OTT",
          type: "string",
        },
      ];
      const createOTTattrRes = await createCustomerAttribute(payload, region);
      ottAttribute = createOTTattrRes?.response?.data[0];
    }

    const upsertOTTpayload = {
      customerId: customer.id,
      OTT_ID: ottAttribute.id,
      customerHash: sha256Hash(`${customer.email}${Date.now().toString()}`),
      region,
    };
    const upsertOTTRes = await upsertCustomerResetPWOTT(upsertOTTpayload);
    const pwResetToken = generatePasswordResetToken(
      customer,
      upsertOTTRes[0]?.attribute_value,
      region
    );

    const klaviyoPayload = {
      "data": {
        "type": "event",
        "attributes": {
          "properties": {
            "action": "Reset Password",
            "PasswordResetLink": `${currentDomain}/api/customer/reset-password/callback?token=${pwResetToken}&region=${region}&lang=${lang}`,
            "lang|lookup": lang,
            "region": region
          },
          "metric": {
            "data": {
              "type": "metric",
              "attributes": {
                "name": "Reset Password"
              }
            }
          },
          "profile": {
            "data": {
              "type": "profile",
              "attributes": {
                "properties": {},
                "email": customer?.email,
                "first_name": customer?.first_name
              }
            }
          },
          "time": new Date().toISOString(),
          "unique_id": new Date().getTime().toString(),
        }
      }
    }
    const emailStatus = await sendKlaviyoEmail(klaviyoPayload);
    if (emailStatus === EMAIL_SUCCESS_CODE) {
      res.status(200).json({
        emailSent: true,
      });
    } else {
      throw new Error("Could not send password reset email!");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: (error as any)?.message,
    });
  }
}
