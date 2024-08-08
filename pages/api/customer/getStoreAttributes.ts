import { getAllCustomerAttributes } from "lib/identity/cutomer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);

    const response: any = await getAllCustomerAttributes(body?.region);
    res.setHeader('Cache-Control', 's-maxage=432000')
    res.send(response);
  } catch (error) {
    throw error;
  }
}
