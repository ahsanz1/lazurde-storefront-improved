import { NextApiRequest, NextApiResponse } from "next";
import { getAnOrder } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await getAnOrder(body?.orderId, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
