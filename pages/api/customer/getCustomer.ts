import { getACustomerDetail } from "lib/utils/customer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);

    const response: any = await getACustomerDetail(
      body?.customerId,
      body?.region
    );
    res.send(response);
  } catch (error) {
    throw error
  }
}
