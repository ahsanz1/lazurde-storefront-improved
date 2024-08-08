import { deleteWishlistItems } from "lib/utils/wishlist";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    const body = JSON.parse(req.body);
    const response: any = await deleteWishlistItems(
      body?.data?.wishListId,
      body?.data?.productId,
      body?.data?.customerId,
      body?.data?.region
      );
      res.send(response);
    } catch (error) {
      throw error
    }
}
