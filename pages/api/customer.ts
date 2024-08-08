import { NextApiRequest, NextApiResponse } from "next";
import { getCustomer } from "lib/api/payment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await getCustomer(body?.identifier);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
