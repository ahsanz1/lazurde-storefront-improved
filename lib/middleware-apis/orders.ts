import { getCurrentDomain } from "general-config";
import { Regions } from "lib/types/common";

export const getAllOrders_FlowOMS = async (email: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/orders/getAllOrders`, {
        method: "post",
        body: JSON.stringify({ email }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const getBiggCOrder = async (orderId: number, region: any) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/orders/order`, {
        method: "post",
        body: JSON.stringify({ orderId, region }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const checkOrderStatusFlowOMS = async (
  orderId: number,
  email: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/orders/orderStatus`, {
        method: "post",
        body: JSON.stringify({ orderId, email }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};
