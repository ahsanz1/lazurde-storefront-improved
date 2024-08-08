import { NextApiRequest, NextApiResponse } from "next";
import { updateCustomer } from "lib/api/payment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await updateCustomer(body?.identifier, body?.payload);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
