import { APITokensObj } from "./../types/common";
import Axios from "axios";
import {
  KLAVIYO_API_DOMAIN,
  KLAVIYO_API_KEY,
  tokens as token,
} from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import axios from "axios";

const tokens: APITokensObj = token;

export const createCustomerApi = async (payload: any, region: string) => {
  try {
    const response = await Axios.post(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC_CUSTOMER.CREATE_CUSTOMER}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error?.response?.data || error,
    };
  }
};

export const updateCustomerApi = async (payload?: any, region?: string) => {
  try {
    const response = await Axios.put(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC_CUSTOMER.CREATE_CUSTOMER}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: response?.data?.data.length > 0 ? false : true,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const updateCustomerAttributesApi = async (
  payload?: any,
  region?: string
) => {
  try {
    const response = await Axios.put(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC_CUSTOMER.UPDATE_ATTRIBUTE_VALUES}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: response?.data?.data.length > 0 ? false : true,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const getAttributesByCustomerId = async (id: number, region: string) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN
      }${ENDPOINTS.BC_CUSTOMER.GET_ATTRIBUTES_BY_CUSTOMER_ID(id)}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: response?.data?.data.length > 0 ? false : true,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const getCustomerById = async (id: string, region: string) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN
      }${ENDPOINTS.BC_CUSTOMER.GET_CUSTOMER_BY_ID(id)}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
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

export const getCustomerByEmail = async (email: string, region: string) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN
      }${ENDPOINTS.BC_CUSTOMER.GET_CUSTOMER_BY_EMAIL}`,
      {
        params: {
          "email:in": email
        },
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: response?.data?.data.length > 0 ? false : true,
      response: response?.data?.data,
    };
  } catch (error: any) {
    throw error;
  }
};

export const getAllCustomerAttributes = async (region: string) => {
  try {
    const allAttrRes = await axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC_CUSTOMER.CREATE_CUSTOMER_ATTRIBUTE}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: allAttrRes?.data?.data,
    };
  } catch (error) {
    throw error;
  }
};

export const createCustomerAttribute = async (payload: any, region: string) => {
  try {
    const createAttrRes = await axios.post(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC_CUSTOMER.CREATE_CUSTOMER_ATTRIBUTE}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: createAttrRes.data,
    };
  } catch (error) {
    throw error;
  }
};

export const sendKlaviyoEmail = async (payload: any) => {
  try {
    const klaviyoEmailRes = await axios.post(
      `${KLAVIYO_API_DOMAIN}${ENDPOINTS.KLAVIYO.EVENTS}`,
      payload,
      {
        headers: {
          Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
          revision: "2024-05-15",
        },
      }
    );
    return klaviyoEmailRes.status;
  } catch (error) {
    throw error;
  }
};

export const getStoredInstruments = async (
  customerId: number,
  region: string
) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN
      }${ENDPOINTS.BC_CUSTOMER.STORED_INSTRUMENTS(customerId)}`,

      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data,
    };
  } catch (error: any) {
    
    return {
      hasError: true,
      response: error?.response?.data || error,
      error: error,
    };
  }
};
