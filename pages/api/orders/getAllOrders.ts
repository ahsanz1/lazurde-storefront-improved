import { NextApiRequest, NextApiResponse } from "next";
import { flowOMSOrders } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await flowOMSOrders(body?.email);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
