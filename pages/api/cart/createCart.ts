import { NextApiRequest, NextApiResponse } from "next";
import { createCartForCustomerApi } from "lib/utils/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await createCartForCustomerApi(
      body?.region,
      body?.payload
    );
    res.send(response);
  } catch (error: any) {
    if (error?.response?.status === 422) {
      return res.status(422).send({status: 422, error: error?.response?.data?.title});
    }
    res.status(400).send(error);
  }
}
