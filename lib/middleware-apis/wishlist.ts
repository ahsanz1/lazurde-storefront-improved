import { getCurrentDomain } from "general-config";

export const createWishlistGraphQL = async (customerId: number, region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/wishlists/createWishlist`, {
        method: "put",
        body: JSON.stringify({
          customerId,
          region
        }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const addWishlistItemsGraphQL = async (payload: any) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/wishlists/addWishlistItems`, {
        method: "put",
        body: JSON.stringify({
          data: payload,
        }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const deleteWishlistItemsGraphQL = async (payload: any) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/wishlists/deleteWishlistItems`, {
        method: "delete",
        body: JSON.stringify({
          data: payload,
        }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};