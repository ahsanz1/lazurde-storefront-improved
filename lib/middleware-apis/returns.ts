import { getCurrentDomain } from "general-config";

export const returnOrderFlowOMS = async (
  orderId: number,
  email: string,
  payload: {}
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/orders/return`, {
        method: "post",
        body: JSON.stringify({ orderId, email, payload }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};
