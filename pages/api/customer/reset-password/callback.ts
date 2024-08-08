import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import {
  getAllCustomerAttributes,
  getAttributesByCustomerId,
  getCustomerByEmail,
  sendKlaviyoEmail,
  updateCustomerApi,
  updateCustomerAttributesApi,
} from "lib/identity/cutomer";

type ExpireTokenType = {
  exp: number;
};

const EMAIL_SUCCESS_CODE = 202;

function getPasswordReset(req: NextApiRequest, res: NextApiResponse) {
  const { token, region, lang }: any = req.query;
  const expToken = jwt.decode(token) as ExpireTokenType;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const isTokenExpired = currentTimestamp > expToken?.exp;
  res.setHeader(
    "Set-Cookie",
    serialize(
      "reset_token",
      JSON.stringify({ token: token, isTokenExpired: !!isTokenExpired }),
      {
        sameSite: true,
        path: "/",
      }
    )
  );

  res.redirect(`/${lang}-${region}/sign-in`);

  // return res.redirect(
  //   `/${lang}-${region}?reset_pw=${isTokenExpired ? "false" : "true"}`
  // );
}

function decodePasswordResetToken(token: string) {
  const secret =
    process.env.JWT_SECRET_KEY || process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  const verified = jwt.verify(JSON.parse(token)?.token, secret);
  return verified;
}

async function sendResetPasswordSuccessEmail(req: NextApiRequest,
  { email, first_name }: any
) {
  const { region, lang }: any = req.body;
  const klaviyoPayload = {
    "data": {
      "type": "event",
      "attributes": {
        "properties": {
          "action": "Reset Password Success",
          "lang": region,
          "region": lang
        },
        "metric": {
          "data": {
            "type": "metric",
            "attributes": {
              "name": "Reset Password Success"
            }
          }
        },
        "profile": {
          "data": {
            "type": "profile",
            "attributes": {
              "properties": {},
              "email": email,
              "first_name": first_name
            }
          }
        },
        "time": new Date().toISOString(),
        "unique_id": new Date().getTime().toString(),
      }
    }
  }
  const emailStatus = await sendKlaviyoEmail(klaviyoPayload);
  if (emailStatus !== EMAIL_SUCCESS_CODE) {
    throw new Error("Could not send password reset success email!");
  }
  return emailStatus;
}

async function postPasswordReset(req: NextApiRequest, res: NextApiResponse) {
  const { region, password: newPassword } = req.body;
  const { reset_token: resetToken } = req.cookies;
  const decodedToken: any = decodePasswordResetToken(resetToken);

  try {
    const customer = await getCustomerByEmail(decodedToken.email, region); // important to use the email from the decoded token here. Also make sure you get the customer attributes
    if (customer.hasError)
      throw new Error("A customer with provided email does not exist!");

    const { response: attributes = [] } = await getAllCustomerAttributes(
      region
    );

    let ottAttribute = attributes.find(
      (attr: any) => attr.name === "ResetPW_OTT"
    );

    const customerAttributes = await getAttributesByCustomerId(
      customer?.response[0]?.id,
      region
    );
    if (customerAttributes.hasError)
      throw new Error(
        "Could not fetch attributes for customer with ID: ",
        customer?.response[0]?.id
      );
    const customerOtt = customerAttributes.response.find(
      (attribute: any) => attribute.attribute_id === ottAttribute?.id // The OTT id you saved earlier
    );

    if (customerOtt.attribute_value !== decodedToken.ott) {
      throw new Error("Invalid token");
    }

    /**
     * NOTE: If this is an old customer & is updating password 1st time after prompt from front-end,
     * update the customer notes along with the password to reflect that this old customer has fulfilled
     * the requirement of updating his password for the 1st time
     */

    const oldCustomer = customer?.response[0]?.notes === "old";

    try {
      await updateCustomerApi(
        [
          {
            id: decodedToken.id, // once again, use the id from the token
            authentication: {
              new_password: newPassword,
              force_password_reset: false, // here's the gotcha.
            },
            notes: oldCustomer
              ? "old-pw-updated"
              : customer?.response[0]?.notes,
          },
        ],
        region
      );
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }

    try {
      await updateCustomerAttributesApi(
        [
          {
            attribute_id: ottAttribute.id,
            value: "",
            customer_id: decodedToken.id,
          },
        ],
        region
      );
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }

    try {
      const sentStatus = await sendResetPasswordSuccessEmail(req, {
        ...customer?.response[0],
      });
      console.log("Reset Password Success Email Sent: ", sentStatus);
    } catch (err) {
      console.log("Reset PW Success Email Err: ", (err as any).message);
    }

    res.setHeader(
      "set-cookie",
      serialize("reset_token", "", {
        httpOnly: true,
        sameSite: true,
        maxAge: -1, // I had trouble getting Next.js to remove the cookie if I just set the max age. I had to also set an expiration date in the past.
        expires: new Date(0),
        path: "/",
      })
    );
    return res.status(200).send({ message: "success" });
  } catch (error) {
    res.setHeader(
      "set-cookie",
      serialize("reset_token", "", {
        httpOnly: true,
        sameSite: true,
        maxAge: -1, // I had trouble getting Next.js to remove the cookie if I just set the max age. I had to also set an expiration date in the past.
        expires: new Date(0),
        path: "/",
      })
    );
    return res.status(400).send({ message: (error as any).message });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const methods: any = {
    GET: () => getPasswordReset(req, res), // will be defined below
    POST: () => postPasswordReset(req, res), // will be defined below
    UNSUPPORTED: () => res.status(405).send({ message: "Unsupported Request" }), // You should set the Allow header here but I've cut it for brevity
  };
  const action = methods[req.method] || methods.UNSUPPORTED;
  return action();
}
