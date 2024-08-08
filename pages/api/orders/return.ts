import { NextApiRequest, NextApiResponse } from "next";
import { flowOMS_ReturnOrder } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await flowOMS_ReturnOrder(
      body?.orderId,
      body?.email,
      body?.payload
    );
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}
