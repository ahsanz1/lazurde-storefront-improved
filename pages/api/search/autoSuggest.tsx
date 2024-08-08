import { NextApiRequest, NextApiResponse } from "next";
import { addProductToCartApi } from "lib/utils/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await addProductToCartApi(
      body?.region,
      body?.cartId,
      body?.payload,
      body?.item
    );
    res.status(200).send(response);
  } catch (error) {
    // res.status(400).json({
    //   message: (error as ErrorEvent).message,
    // });
    throw error;
  }
}
