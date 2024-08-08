import { deleteProductInCartApi } from "lib/utils/cart";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);
    const response = await deleteProductInCartApi(body?.cartId, body?.itemId, body?.region, body?.item);
    res.send(response);
  } catch (error) {
    // res.status(400).json({
    //   message: (error as ErrorEvent).message,
    // });
    throw error
  }
}
