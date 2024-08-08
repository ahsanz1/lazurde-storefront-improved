import { getCurrentDomain } from "general-config";

export const getCheckoutData = async (id: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/checkout/discounts`, {
        method: "post",
        body: JSON.stringify({ id }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};