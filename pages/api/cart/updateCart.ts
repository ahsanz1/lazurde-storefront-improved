import { updateCustomerIdInCartApi } from "lib/utils/cart";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await updateCustomerIdInCartApi(
      body?.cartId,
      body?.customerId,
      body?.region
    );
    res.send(response);
  } catch (error) {
    // res.status(400).json({
    //   message: (error as ErrorEvent).message,
    // });
    throw error;
  }
}
