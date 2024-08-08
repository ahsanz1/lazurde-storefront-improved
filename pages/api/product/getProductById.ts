import { fetchBCProductsREST } from "lib/utils/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body);
    const response = await fetchBCProductsREST(body?.productId);
    res.send(response);
  } catch (error) {
    console.log("Error fetching price: ", error);
    res.status(400).json({
      message: (error as ErrorEvent).message,
    });
  }
}
