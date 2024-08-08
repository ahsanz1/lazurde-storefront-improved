import { createWishlist } from "lib/utils/wishlist";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const response: any = await createWishlist("Wishlist", true, body?.customerId, body?.region);
  res.send(response);
}
