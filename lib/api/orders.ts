import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import { Regions } from "lib/types/common";
import {
  tokens,
  FLOW_OMS_DOMAIN,
  BS_API_METAFIELDS_ACCESS_TOKEN,
  FLOW_OMS_XAP_TOKEN,
  FLOW_OMS_PROD_BRAND_ID,
  FLOW_OMS_BRAND_ID,
} from "general-config";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AppContext } from "lib/context";
import { useContext } from "react";
import { getAllOrders_FlowOMS } from "lib/middleware-apis/orders";

export const flowOMSOrders = async (email: string) => {
  try {
    const response = await Axios.get(
      `${FLOW_OMS_DOMAIN}${ENDPOINTS.FLOW_OMS.ORDERS.GET_ALL_ORDERS(
        encodeURIComponent(email),
        "n/a",
        1,
        100,
        FLOW_OMS_BRAND_ID
      )}`,
      {
        headers: {
          token: FLOW_OMS_XAP_TOKEN,
        },
      }
    );
    return response?.data;
  } catch (error: unknown) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const getAnOrder = async (orderId: number, region: Regions) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.ORDERS.GET_AN_ORDER(
        orderId
      )}`,
      {
        params: {
          channel_id: tokens[region].BC_CHANNEL_ID,
          include: "consignments.line_items",
        },
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || [];
  } catch (error) {
    throw error;
  }
};


export const updateBigCommerceOrder = async (orderId: number, region: Regions, payload: any) => {
  try {
    const response = await Axios.put(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.ORDERS.GET_AN_ORDER(
        orderId
      )}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || [];
  } catch (error) {
    throw error;
  }
};

export const getOrder_MetaFields = async (orderId: number, region: Regions) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.ORDERS.GET_METAFIELDS(
        orderId
      )}`,
      {
        params: {
          channel_id: tokens[region].BC_CHANNEL_ID,
          // include: "consignments.line_items",
        },
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": BS_API_METAFIELDS_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || [];
  } catch (error) {
    throw error;
  }
};

export const getOrdersByCustomerIdApi = async (
  customerId: number,
  region: Regions
) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.ORDERS.GET_ALL_ORDERS}`,
      {
        params: {
          customer_id: customerId,
          channel_id: tokens[region].BC_CHANNEL_ID,
          include: "consignments.line_items",
          sort: "date_created:desc",
        },
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || [];
  } catch (error) {
    throw error;
  }
};

export const getReturnedOrders = async (
  customerId: number,
  region: Regions
) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.ORDERS.GET_ALL_ORDERS}`,
      {
        params: {
          customer_id: customerId,
          channel_id: tokens[region].BC_CHANNEL_ID,
          include: "consignments.line_items",
          sort: "date_created:desc",
          status_id: 2,
        },
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || [];
  } catch (error) {
    throw error;
  }
};

export const flowOMS_OrderStatus = async (orderId: number, email: string) => {
  try {
    const response = await Axios.get(
      `${FLOW_OMS_DOMAIN}${ENDPOINTS.FLOW_OMS.RETURNS.ORDER_STATUS(
        orderId,
        email
      )}`
    );
    return response?.data;
  } catch (error: unknown) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const flowOMS_ReturnOrder = async (
  orderId: number,
  email: string,
  payload: any
) => {
  try {
    const response = await Axios.post(
      `${FLOW_OMS_DOMAIN}${ENDPOINTS.FLOW_OMS.RETURNS.RETURN_ORDER(
        orderId,

        encodeURIComponent(email)
      )}`,
      payload,
      {
        headers: {
          "x-brand-id": FLOW_OMS_BRAND_ID,
          token: FLOW_OMS_XAP_TOKEN,
        },
      }
    );
    return response?.data;
  } catch (error: unknown) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const useOrders = () => {
  const queryClient = useQueryClient();
  const { appState } = useContext(AppContext);

  const getOrdersByCustomerIdQuery = async () => {
    const customerData: { entityId: number; email: string } =
      queryClient.getQueryData(["customerData"]);
    if (customerData?.email) {
      const orders = await getAllOrders_FlowOMS(customerData?.email);
      return orders?.completeOrders;
    }
  };

  const getReturnOrdersQuery = async () => {
    const customerData: { entityId: number; email: string } =
      queryClient.getQueryData(["customerData"]);
    if (customerData?.email) {
      const returnedOrder = await getAllOrders_FlowOMS(customerData?.email);
      return returnedOrder?.completeOrders;
    }
  };

  const useGetOrders = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["customerOrders"], getOrdersByCustomerIdQuery, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  const useGetReturnOrders = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["returnOrders"], getReturnOrdersQuery, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  return {
    useGetOrders,
    useGetReturnOrders,
  };
};
