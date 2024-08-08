import { NextApiRequest, NextApiResponse } from "next";
import { getOrder_MetaFields } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await getOrder_MetaFields(body?.orderId, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
