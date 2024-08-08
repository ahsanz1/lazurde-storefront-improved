import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import {
  getAllCustomerAttributes,
  getAttributesByCustomerId,
  updateCustomerAttributesApi,
} from "lib/identity/cutomer";
import { customerAttributesNames } from "lib/utils/constants";
import { getStoreAttributeId } from "lib/utils/common";
import { serialize } from "cookie";
import { welcomeEmailApi } from "components/common/auth-forms/signup-form/function";

function decodeEmailVerificationToken(token: string) {
  const secret =
    process.env.JWT_SECRET_KEY || process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  const verified = jwt.verify(token, secret);
  return verified;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token, region, lang }: any = req.query;
  try {
    const decodedToken: any = decodeEmailVerificationToken(token);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const isTokenExpired = currentTimestamp > decodedToken?.exp ? true : false;
    const storeAttributes = await getAllCustomerAttributes(region);
    if (!isTokenExpired) {
      const customerAttributes = await getAttributesByCustomerId(
        decodedToken?.id,
        region
      );
      if (customerAttributes?.hasError)
        throw new Error(
          "Could not fetch attributes for customer with ID: ",
          decodedToken?.id
        );

      const isEmailVerified = customerAttributes?.response?.find(
        (attribute: any) =>
          attribute?.attribute_id ===
          getStoreAttributeId(
            storeAttributes?.response,
            customerAttributesNames?.isEmailVerified
          )
      );

      if (isEmailVerified?.attribute_value == "1") {
        return res.redirect(`/${lang}-${region}/`);
      }

      const verificationEmailOTT = customerAttributes?.response?.find(
        (attribute: any) =>
          attribute?.attribute_id ===
          getStoreAttributeId(
            storeAttributes?.response,
            customerAttributesNames?.verificationEmailOTT
          )
      );

      if (verificationEmailOTT?.attribute_value !== decodedToken?.ott) {
        throw new Error("Invalid token");
      }

      await updateCustomerAttributesApi(
        [
          {
            attribute_id: getStoreAttributeId(
              storeAttributes?.response,
              customerAttributesNames?.isEmailVerified
            ),
            value: String(1),
            customer_id: decodedToken?.id,
          },
        ],
        region
      );
    }
    if (region === "eg") {
      await welcomeEmailApi(decodedToken, region, lang);
    }

    // res.setHeader(
    //   "set-cookie",
    //   serialize("email_verification_token", String(token), {
    //     httpOnly: true,
    //     sameSite: true,
    //     path: "/",
    //   })
    // );
    res.setHeader(
      "Set-Cookie",
      serialize(
        "email-verification",
        JSON.stringify({
          emailTokenValid: isTokenExpired ? false : true,
          openLogin: true,
        }),
        { path: "/" }
      )
    );
    // res.redirect(
    //   `/${lang}-${region}?openLogin=true&email=${
    //     decodedToken?.email
    //   }&emailTokenValid=${isTokenExpired ? "false" : "true"}`
    // );
    res.redirect(`/${lang}-${region}/sign-in`);
  } catch (error) {
    res.setHeader(
      "Set-Cookie",
      serialize(
        "email-verification",
        JSON.stringify({
          emailTokenValid: false,
          openLogin: true,
          jwtToken: token,
        }),
        { path: "/" }
      )
    );
    // res.redirect(
    //   `/${lang}-${region}?openLogin=true&emailTokenValid=false&jwtToken=${token}`
    // );
    res.redirect(`/${lang}-${region}/sign-in`);
  }
}
