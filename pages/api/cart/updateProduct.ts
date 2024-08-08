import { updateProductInCartApi } from "lib/utils/cart";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await updateProductInCartApi(
      body?.region,
      body?.cartId,
      body?.payload,
      body?.itemId,
      body?.item
    );
    res.send(response);
  } catch (error: any) {
    // res.status(400).json({
    //   message: (error as ErrorEvent).message,
    // });
    // throw error
    if (error?.error?.response?.status === 422) {
      res.status(422).send(JSON.stringify({ hasError: error?.hasError, status: 422, message: error?.error?.response?.data?.title }))
    } else {
      throw error;
    }
  }
}
