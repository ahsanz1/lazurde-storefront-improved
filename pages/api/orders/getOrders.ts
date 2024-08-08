import { NextApiRequest, NextApiResponse } from "next";
import { getOrdersByCustomerIdApi } from "lib/api/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await getOrdersByCustomerIdApi(
      body?.customerId,
      body?.region
    );
    res.send(response);
  } catch (error) {
    throw error;
  }
}
