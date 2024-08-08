import { updateCustomerApi } from "lib/identity/cutomer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { payload = {}, region = "" } = req.body;
    const updateCustomerAPIres = await updateCustomerApi(payload, region);
    res.status(200).send({
      hasError: updateCustomerAPIres.hasError,
      response: updateCustomerAPIres.response,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).send("Failed to update password");
  }
}
