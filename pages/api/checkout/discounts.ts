import { getBigCommerceCheckout } from "lib/utils/checkout";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await getBigCommerceCheckout(body?.id);
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}