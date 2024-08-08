import { getCustomerByEmail } from "lib/identity/cutomer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response: any = await getCustomerByEmail(
      body?.customerEmail,
      body?.region
    );
    res.send(response);
  } catch (error) {
    throw error;
  }
}
