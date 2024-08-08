import { getCurrentDomain } from "general-config";

export const createCartForCustomer = async (payload: {}, region: string) => {
  try {
    const response = await fetch(`${getCurrentDomain()}/cart/createCart`, {
      method: "post",
      body: JSON.stringify({ payload, region }),
    });
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getCartByCustomer = async (cartId: string, region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/cart/getCart`, {
        method: "post",
        body: JSON.stringify({ cartId, region }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const deleteExistingCart = async (cartId: string, region: string) => {
  try {
    const response = await fetch(`${getCurrentDomain()}/cart/deleteCart`, {
      method: "post",
      body: JSON.stringify({ cartId, region }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCustomerIdInCart = async (
  cartId: string,
  customerId: number,
  region: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/cart/updateCart`, {
        method: "post",
        body: JSON.stringify({ cartId, customerId, region }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const addProductToCart = async (
  cartId: string,
  payload: {},
  region: string,
  item: any
) => {
  try {
    const response = await fetch(`${getCurrentDomain()}/cart/addProduct`, {
      method: "post",
      body: JSON.stringify({ cartId, payload, region, item }),
    });
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const updateProductInCart = async (
  cartId: string,
  payload: {},
  itemId: string,
  region: string,
  item: any
) => {
  try {
    const response = await fetch(`${getCurrentDomain()}/cart/updateProduct`, {
      method: "post",
      body: JSON.stringify({ cartId, payload, itemId, region, item }),
    });

    if (!response?.ok) {
      throw await response.json();
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteProductInCart = async (
  cartId: string,
  itemId: string,
  region: string,
  item: any
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/cart/deleteProduct`, {
        method: "post",
        body: JSON.stringify({ cartId, itemId, region, item }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};
