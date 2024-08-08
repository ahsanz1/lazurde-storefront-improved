import {
  createBigCommerceCoupon,
} from "lib/api/createCoupon";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await createBigCommerceCoupon(
      body?.promotionId,
      body?.region,
      body?.payload
    );
    res.send(response);
  } catch (error) {
    throw error;
  }
}
