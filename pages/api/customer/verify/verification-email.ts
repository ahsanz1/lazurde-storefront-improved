import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { customerAttributesNames } from "lib/utils/constants";
import {
  getAllCustomerAttributes,
  sendKlaviyoEmail,
  updateCustomerAttributesApi,
} from "lib/identity/cutomer";
import { getStoreAttributeId } from "lib/utils/common";

const EMAIL_SUCCESS_CODE = 202;

const sha256Hash = (text: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return hash.digest("hex");
};

const generateEmailVerificationToken = (
  customerId: Number,
  email: string,
  ott: string,
  region: string,
  first_name: string,
  lang: string
) => {
  try {
    const secret = process.env.JWT_SECRET_KEY || process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    const token = jwt.sign(
      {
        email,
        ott,
        id: customerId,
        region,
        first_name,
        lang,
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
    const { region, currentDomain, customerId, email, first_name, lang } =
      req.body;

    const customerHash = sha256Hash(`${email}${Date.now().toString()}`);
    const storeAttributes = await getAllCustomerAttributes(region);

    const upsertVerificationOTTpayload = {
      customer_id: customerId,
      attribute_id: getStoreAttributeId(
        storeAttributes?.response,
        customerAttributesNames?.verificationEmailOTT
      ), // the attribute id of the OTT attribute you created earlier
      value: customerHash,
    };

    const upsertVerificationOTTRes = await updateCustomerAttributesApi(
      [upsertVerificationOTTpayload],
      region
    );
    if (upsertVerificationOTTRes.hasError)
      throw new Error("Could not update customer with OTT value");

    const emailVerificationToken = generateEmailVerificationToken(
      customerId,
      email,
      upsertVerificationOTTRes.response[0]?.attribute_value,
      region,
      first_name,
      lang
    );

    const verificationEmailPayload = {
      "data": {
        "type": "event",
        "attributes": {
          "properties": {
            "action": "Email Verification",
            "emailVerificationLink": `${currentDomain}/api/customer/verify?token=${emailVerificationToken}&region=${region}&lang=${lang}`,
            "lang": lang,
            "region": region
          },
          "metric": {
            "data": {
              "type": "metric",
              "attributes": {
                "name": "Email Verification"
              }
            }
          },
          "profile": {
            "data": {
              "type": "profile",
              "attributes": {
                "properties": {},
                "email": email,
                "first_name": first_name,
              }
            }
          },
          "time": new Date().toISOString(),
          "unique_id": new Date().getTime().toString(),
        }
      }
    }

    const emailStatus = await sendKlaviyoEmail(verificationEmailPayload);
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
