import { NextApiRequest, NextApiResponse } from "next";
import { createPaymentInstrument } from "lib/api/payment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await createPaymentInstrument(body?.payload);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
