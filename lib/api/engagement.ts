import Axios from "axios";
import ENDPOINTS from "./endpoints";
import { tokens } from "general-config";
import { RegionType } from "lib/types/common";

export const engagementCustomer = async (
  payload: {},
  region: RegionType = "sa"
) => {
  // const publicKey = getRegionBasedEnvVariables().VW_PUBLIC_KEY;
  // const privateKey = getRegionBasedEnvVariables().VW_PRIVATE_KEY;
  const publicKey = tokens[region].VW_PUBLIC_KEY;
  const privateKey = tokens[region].VW_PRIVATE_KEY;
  const combinedKeys = `${publicKey}:${privateKey}`;
  const encodedToken = btoa(combinedKeys);
  try {
    const response = await Axios.post(
      `${ENDPOINTS.ENGAGEMENT.CUSTOMERS(tokens[region]?.VW_PROJECT_TOKEN)}`,
      {
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedToken}`,
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

export const engagementOutOfStock = async (
  payload: {},
  region: RegionType = "sa"
) => {
  // const publicKey = getRegionBasedEnvVariables().VW_PUBLIC_KEY;
  // const privateKey = getRegionBasedEnvVariables().VW_PRIVATE_KEY;
  const publicKey = tokens[region]?.VW_PUBLIC_KEY;
  const privateKey = tokens[region]?.VW_PRIVATE_KEY;
  const combinedKeys = `${publicKey}:${privateKey}`;
  const encodedToken = btoa(combinedKeys);
  try {
    const response = await Axios.post(
      `${ENDPOINTS.ENGAGEMENT.OUTOFSTOCK(tokens[region]?.VW_PROJECT_TOKEN)}`,
      {
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedToken}`,
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

export const engagementCustomerAttributes = async (
  payload: {},
  region: RegionType = "sa"
) => {
  const publicKey = tokens[region]?.VW_PUBLIC_KEY;
  const privateKey = tokens[region]?.VW_PRIVATE_KEY;
  const combinedKeys = `${publicKey}:${privateKey}`;
  const encodedToken = btoa(combinedKeys);
  try {
    const response = await Axios.post(
      `${ENDPOINTS.ENGAGEMENT.CUSTOMER_ATTRIBUTES(
        tokens[region]?.VW_PROJECT_TOKEN
      )}`,
      {
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedToken}`,
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
