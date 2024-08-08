import Axios from "axios";
import { tokens } from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import { ATCPayload, ATCUpdatePayload, CartObject } from "lib/types/cart";
import {
  addProductToCart,
  createCartForCustomer,
  deleteExistingCart,
  deleteProductInCart,
  getCartByCustomer,
  updateCustomerIdInCart,
  updateProductInCart,
} from "lib/middleware-apis/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { APITokensObj } from "lib/types/common";
import { useContext, useRef } from "react";
import { AppContext } from "lib/context";
import {
  engagementOutOfStock,
  getAttributesByCustomerId,
  updateCustomerAttributeValues,
} from "lib/middleware-apis/customers";
import useTranslation from "next-translate/useTranslation";
import { getCheckoutData } from "lib/middleware-apis/checkout";
import { getCurrentRegionName } from "./common";
import { fetchAllProducts } from "./product";

const token: APITokensObj = tokens;

export const createCartForCustomerApi = async (
  region: string,
  payload?: ATCPayload
) => {
  try {
    const response = await Axios.post(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.CREATE_CART}`,
      { ...payload, channel_id: token[region].BC_CHANNEL_ID },
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const getCartByCartIdApi = async (cartId: string, region: string) => {
  try {
    const response = await Axios.get(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.GET_CART(cartId)}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const deleteExistingCartApi = async (cartId: string, region: string) => {
  try {
    const response = await Axios.delete(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.DELETE_CART(cartId)}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const updateCustomerIdInCartApi = async (
  cartId: string,
  customerId: number,
  region: string
) => {
  try {
    const response = await Axios.put(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.GET_CART(cartId)}`,
      { customer_id: customerId },
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw {
      hasError: true,
      code: error?.response?.data?.code,
    };
  }
};

export const addProductToCartApi = async (
  region: string,
  cartId?: string,
  payload?: ATCPayload,
  item?: any
) => {
  try {
    const atcResponse = await Axios.post(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.ADD_ITEM_TO_CART(
        cartId
      )}`,
      { ...payload, channel_id: token[region].BC_CHANNEL_ID },
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    // console.log(`Logging Service -> Add Product To Cart`);
    // console.log("Payload -> ", JSON.stringify(payload));
    // console.log("Response -> ", JSON.stringify(atcResponse?.data?.data));

    return {
      hasError: false,
      response: atcResponse?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const updateProductInCartApi = async (
  region: string,
  cartId?: string,
  payload?: ATCPayload,
  itemId?: number,
  item?: any
) => {
  try {
    const response = await Axios.put(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.UPDATE_ITEM_OF_CART(
        cartId,
        itemId
      )}`,
      { ...payload, channel_id: token[region].BC_CHANNEL_ID },
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    // console.log("Logging Service -> Cart Updated");
    // console.log("Payload -> ", JSON.stringify(payload));
    // console.log("ItemId", JSON.stringify(response?.data?.data));

    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw {
      hasError: true,
      error: error,
    };
  }
};

export const deleteProductInCartApi = async (
  cartId: string,
  itemId: number,
  region: string,
  item: any
) => {
  try {
    // const payload = ;
    const response = await Axios.delete(
      `${token[region].BC_API_DOMAIN}${ENDPOINTS.CART.REMOVE_ITEM_FROM_CART(
        cartId,
        itemId
      )}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );

    // console.log("Logging Service -> Product Deleted From Cart");
    // console.log("ItemId -> ", itemId);
    // console.log("Response -> ", response?.data?.data);

    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw {
      hasError: true,
      code: error?.response?.data?.code,
    };
  }
};

const createEngagementCartPayload = (
  cartData: CartObject,
  lastUpdatedItem: any,
  customer: any,
  count: number,
  appState: any,
  exponeaCookie: any,
  action: "add" | "update" | "remove" | null
) => {
  if (!lastUpdatedItem) return;
  const itemSkus: string[] = [];
  let updatedItemIndex = null;

  const itemList =
    cartData?.line_items?.physical_items?.map((item, index) => {
      let title = item?.name
        ?.split(" - ")[1]
        ?.replace(/\s/g, "-")
        .toLocaleLowerCase();

      if (item?.product_id === lastUpdatedItem?.product_id) {
        updatedItemIndex = index;
      }

      return {
        item_id: item?.sku,
        item_title: item?.name?.split(/- (.*)/s)?.[1]?.trim(),
        item_original_price: item?.original_price,
        item_sale_price: item?.sale_price,
        item_discount: item?.discount_amount,
        item_price: item?.list_price,
        item_url: `${window?.location?.origin}/p/${title}-sku-${item?.sku}`,
        item_image: item?.image_url,
        total_price: item?.extended_list_price,
        discount_value: item?.discount_amount,
        quantity: item?.quantity,
      };
    }) || [];

  const items = itemList.splice(updatedItemIndex, 1);
  itemList.splice(0, 0, ...items);
  itemList.forEach((item: any) => itemSkus.push(item?.item_id));

  const customerData = customer?.email || exponeaCookie?.[appState?.region];
  const customerType = customer?.email ? "email_id" : "cookie";

  const payload = {
    commands: [
      {
        name: "customers/events",
        data: {
          customer_ids: {
            [customerType]: customerData,
          },
          event_type: "cart_update_backend",
          timestamp: Math.floor(Date.now() / 1000),
          properties: {
            email: customer?.email || "",
            cookie: customer?.email ? "" : exponeaCookie?.[appState?.region],
            action: action,
            domain: window?.location?.hostname,
            region: getCurrentRegionName(
              cartData?.locale?.split("-")[1].toLocaleLowerCase() ||
                appState?.region
            ),
            boutique: appState?.brand,
            language: cartData?.locale?.split("-")[0] || appState?.lang,
            total_quantity: count || "",
            total_price: cartData?.cart_amount || "",
            total_discount_value: cartData?.discount_amount || "",
            currency: cartData?.currency?.code || "",
            item_ids: itemSkus || "",
            item_details: itemList || [],
            source_import: "bigcommerce_custom_api",
          },
        },
      },
    ],
  };

  engagementOutOfStock(payload, appState?.region);
};

export const useCart = () => {
  const { t } = useTranslation("common");
  const lastUpdatedItem = useRef(null);

  const queryClient = useQueryClient();
  const cartData: CartObject = queryClient.getQueryData(["cartData"]);
  const customerAttrData: {
    response: any[];
  } = queryClient.getQueryData(["customerAttrData"]);

  const customerHasCartId = customerAttrData?.response?.find(
    (attr: { attribute_id: number }) => attr?.attribute_id === 7
  );

  let storedId =
    customerHasCartId?.attribute_value ||
    cartData?.id ||
    (typeof window !== "undefined" ? sessionStorage?.getItem("cartId") : null);

  const cartId = storedId;

  const { appState, toast, exponeaCookie } = useContext(AppContext);

  const checkCartInventory = async (cartData: CartObject) => {
    const skusArray: any = cartData?.line_items?.physical_items?.map((item) =>
      Number(item?.product_id)
    );
    const currItemsData = await fetchAllProducts(skusArray, appState?.region);
    const currentItems = cartData?.line_items?.physical_items;

    const updatedItems = currentItems?.map((item, index) => {
      const cartItem =
        currItemsData &&
        currItemsData?.find(
          (cartItem: any) => item?.product_id === cartItem?.node?.entityId
        );

      const availableToSell =
        cartItem?.node?.inventory?.aggregated?.availableToSell;

      return {
        ...item,
        hasStock: cartItem?.node?.inventory?.isInStock,
        exceedingQuantity: item?.quantity > availableToSell,
      };
    });

    const updatedMiniCartData: any = { ...cartData };
    updatedMiniCartData.line_items.physical_items = updatedItems;
    queryClient.setQueryData(["cartData"], updatedMiniCartData);

    const outOfStockItems = updatedItems?.filter(
      (item) => item?.exceedingQuantity === true
    );

    return outOfStockItems;
  };

  const getProductsDetailOfCartItems = async (cartData: CartObject) => {
    const skusArray: any = cartData?.line_items?.physical_items?.map((item) =>
      Number(item?.product_id)
    );
    const currItemsData = await fetchAllProducts(skusArray, appState?.region);
    return currItemsData || [];
  };

  const getAllDetails = () => {
    const cartData: CartObject = queryClient.getQueryData(["cartData"]);
    const customerData: { entityId: number } = queryClient.getQueryData([
      "customerData",
    ]);
    const customerAttrData: any = queryClient.getQueryData([
      "customerAttrData",
    ]);
    const customerHasCartId = customerAttrData?.find(
      (attr: { attribute_id: number }) => attr?.attribute_id === 7
    );
    const localeCartId =
      typeof window !== "undefined" ? sessionStorage?.getItem("cartId") : null;
    let storedId =
      customerHasCartId?.attribute_value ?? cartData?.id ?? localeCartId;
    const cartId = storedId;

    return {
      cartData,
      customerData,
      customerAttrData,
      cartId,
    };
  };

  const saveCartDetails = async (cartData: any) => {
    const { customerData } = getAllDetails();
    if (!cartData) {
      queryClient.setQueryData(["cartData"], []);
      sessionStorage.removeItem("cartId");

      if (!customerData?.entityId) return;
      const attributesPayload: any = [
        {
          attribute_id: 7,
          value: "",
          customer_id: customerData?.entityId,
        },
      ];

      await updateCustomerAttributeValues(attributesPayload, appState?.region);
      const customerAttr = await getAttributesByCustomerId(
        customerData?.entityId,
        appState?.region
      );
      queryClient.setQueryData(["customerAttrData"], customerAttr?.response);
      return;
    }
    if (cartData?.id) {
      queryClient.setQueryData(["cartData"], cartData);
      sessionStorage.setItem("cartId", cartData?.id);
      if (!customerData?.entityId) return;
      const attributesPayload: any = [
        {
          attribute_id: 7,
          value: cartData?.id,
          customer_id: customerData?.entityId,
        },
      ];
      if (customerHasCartId?.attribute_value !== cartData?.id) {
        await updateCustomerAttributeValues(
          attributesPayload,
          appState?.region
        );
        const customerAttr = await getAttributesByCustomerId(
          customerData?.entityId,
          appState?.region
        );
        queryClient.setQueryData(["customerAttrData"], customerAttr?.response);
      }
    }
  };

  const processCartData = async (cartData: any) => {
    const { customerData } = getAllDetails();

    if (cartData?.response) {
      const count = cartData?.response?.line_items?.physical_items?.reduce(
        (accumulator: number, currentValue: { quantity: number }) =>
          accumulator + currentValue?.quantity,
        0
      );
      createEngagementCartPayload(
        cartData?.response,
        lastUpdatedItem.current?.item,
        customerData,
        count,
        appState,
        exponeaCookie,
        lastUpdatedItem.current?.action
      );
      const modifiedData = { ...cartData?.response, totalCount: count };
      const checkoutData = await getCheckoutData(modifiedData?.id);
      const mergedWithCheckoutData = {
        ...modifiedData,
        VAT_Tax: Math.round(checkoutData?.tax_total),
        SubTotal_Ex_TAX: Math.round(checkoutData?.subtotal_ex_tax),
      };
      saveCartDetails(mergedWithCheckoutData);
      return mergedWithCheckoutData;
    } else {
      createEngagementCartPayload(
        null,
        lastUpdatedItem.current?.item,
        customerData,
        0,
        appState,
        exponeaCookie,
        lastUpdatedItem.current?.action
      );
      saveCartDetails(null);
      return null;
    }
  };

  const addPromotion = async (
    cartId: string,
    promoCode: string
  ): Promise<any> => {};

  const removePromotion = async (
    cartId: string,
    promoVal: string
  ): Promise<any> => {};

  const addProductToCartById = async (payload: ATCPayload, item: any) => {
    const cartData = await addProductToCart(
      cartId,
      payload,
      appState?.region,
      item
    );

    if (cartData?.hasError) return cartData;
    return await processCartData(cartData);
  };

  const addOrCreateCart = async (payload: ATCPayload, item: any) => {
    let cartData = { hasError: true };
    lastUpdatedItem.current = {
      item: payload?.line_items?.[0] || payload?.line_item,
      action: "add",
    };
    try {
      if (cartId) {
        cartData = await addProductToCart(
          cartId,
          payload,
          appState?.region,
          item
        );
      } else {
        cartData = await createCartForCustomer(payload, appState?.region);
      }
    } catch (error) {
      throw error;
    }
    if (cartData?.hasError) return cartData;
    const audio = new Audio("/audio/atc-pop.mp3");
    audio.play();
    return processCartData(cartData);
  };

  const createCartForQuickBuy = async (payload: ATCPayload) => {
    let cartData: any = { hasError: true, response: null };
    lastUpdatedItem.current = {
      item: payload?.line_items?.[0] || payload?.line_item,
      action: "add",
    };
    try {
      cartData = await createCartForCustomer(payload, appState?.region);
    } catch (error) {
      throw error;
    }
    return cartData?.response;
  };

  const deleteCart = async () => {
    const { cartId } = getAllDetails();
    if (!cartId) return null;
    try {
      const cartData = await deleteExistingCart(cartId, appState?.region);
      return await processCartData(cartData);
    } catch (error) {
      throw error;
    }
  };

  const getCartByCartId = async () => {
    const { cartId } = getAllDetails();
    if (!cartId) return null;
    lastUpdatedItem.current = { item: null };
    try {
      const cartData = await getCartByCustomer(cartId, appState?.region);
      return await processCartData(cartData);
    } catch (error) {
      return await processCartData(cartData);
    }
  };

  const getInitialCartByCartId = async (cartId: string) => {
    if (!cartId) return null;
    lastUpdatedItem.current = { item: null };
    try {
      const cartData = await getCartByCustomer(cartId, appState?.region);
      return await processCartData(cartData);
    } catch (error) {
      return await processCartData(cartData);
    }
  };

  const updateCustomerInCart = async (customerId: number) => {
    if (!cartId) return;
    lastUpdatedItem.current = { item: 0, action: "update" };
    if (customerId == 0) return await processCartData(null);

    const cartData = await updateCustomerIdInCart(
      cartId,
      customerId,
      appState?.region
    );

    if (cartData?.hasError) return cartData;
    return await processCartData(cartData);
  };

  const updateItemOfCart = async (
    payload: ATCUpdatePayload,
    itemId: string,
    item: any
  ) => {
    lastUpdatedItem.current = { item: payload?.line_item, action: "update" };
    try {
      const cartData = await updateProductInCart(
        cartId,
        payload,
        itemId,
        appState?.region,
        item
      );
      if (cartData?.hasError) return cartData;
      return await processCartData(cartData);
    } catch (error) {
      throw error;
    }
  };

  const removeItemFromCart = async (itemId: string, item: any) => {
    lastUpdatedItem.current = {
      item: { product_id: itemId },
      action: "remove",
    };
    const cartData = await deleteProductInCart(
      cartId,
      itemId,
      appState?.region,
      item
    );

    if (cartData?.hasError) return cartData;
    return await processCartData(cartData);
  };

  const useGetCart = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["cartData"], getCartByCartId, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  const addOrCreateCartMutation = useMutation(
    (values: { payload: ATCPayload; item: any }) =>
      addOrCreateCart(values?.payload, values?.item),
    {
      onError: async (error) => {
        toast(t("quantityExceeds"));
      },
    }
  );

  const createQuickBuyCartMutation = useMutation(
    (values: { payload: ATCPayload }) => createCartForQuickBuy(values?.payload)
  );

  const deleteCartMutation = useMutation(() => deleteCart());

  const updateCartMutation = useMutation(
    (values: { payload: ATCUpdatePayload; itemId: string; item: any }) => {
      try {
        return updateItemOfCart(values?.payload, values?.itemId, values?.item);
      } catch (error) {
        throw error;
      }
    }
  );

  const removeCartMutation = useMutation(
    (values: { itemId: string; item: any }) =>
      removeItemFromCart(values?.itemId, values?.item)
  );

  const updateCustomerInCartMutation = useMutation(
    (values: { customerId: number }) => updateCustomerInCart(values?.customerId)
  );

  return {
    addOrCreateCart,
    addProductToCartById,
    getCartByCartId,
    getInitialCartByCartId,
    updateCustomerInCart,
    updateItemOfCart,
    removeItemFromCart,
    addPromotion,
    removePromotion,
    checkCartInventory,
    useGetCart,
    addOrCreateCartMutation,
    deleteCartMutation,
    updateCartMutation,
    removeCartMutation,
    updateCustomerInCartMutation,
    createQuickBuyCartMutation,
    getProductsDetailOfCartItems,
  };
};
