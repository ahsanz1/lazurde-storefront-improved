import { NextApiRequest, NextApiResponse } from "next";
import { removePaymentInstrument } from "lib/api/payment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await removePaymentInstrument(body?.instrumentId);
    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
}
