import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import { tokens as token } from "general-config";
import { APITokensObj } from "lib/types/common";
const tokens: APITokensObj = token;

export const getAddressByCustomerId = async (id: number, region: string) => {
  try {
    const response = await Axios.get(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.ADDRESSES.GET_ADDRESS_BY_ID(
        id
      )}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error) {
    
    throw {
      hasError: true,
      response: error,
    };
  }
};

export const addNewAddress = async (payload: any, region: string) => {
  try {
    const response = await Axios.post(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.ADDRESSES.ADD_UPDATE_ADDRESS}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error) {
    
    throw {
      hasError: true,
      response: error,
    };
  }
};

export const updateAddress = async (payload: [], region: string) => {
  try {
    const response = await Axios.put(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.ADDRESSES.ADD_UPDATE_ADDRESS}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error) {
    
    throw {
      hasError: true,
      response: error,
    };
  }
};

export const deleteAddress = async (addressId: number, region: string) => {
  try {
    const response = await Axios.delete(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.ADDRESSES.DELETE_ADDRESS(
        addressId
      )}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return {
      hasError: false,
      response: response?.data?.data,
    };
  } catch (error) {
    
    throw {
      hasError: true,
      response: error,
    };
  }
};
