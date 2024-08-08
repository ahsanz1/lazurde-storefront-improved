import { NextApiRequest, NextApiResponse } from "next";
import { flowOMS_OrderStatus } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await flowOMS_OrderStatus(body?.orderId, body?.email);
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}
