import { NextApiRequest, NextApiResponse } from "next";
import { updatePaymentInstrument } from "lib/api/payment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await updatePaymentInstrument(
      body?.instrumentId,
      body?.payload
    );
    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
}
