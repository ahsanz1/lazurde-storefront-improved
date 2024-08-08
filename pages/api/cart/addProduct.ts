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
  } catch (error: any) {
    if (error?.response?.status === 422) {
      return res
        .status(422)
        .send({ status: 422, error: error?.response?.data?.title });
    }
    res.status(400).send(error);
  }
}
