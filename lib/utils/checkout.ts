import axios from "axios";
import { getRegionBasedEnvVariables } from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";

export const getBigCommerceCheckout = async (id: string) => {
  try {
    const checkoutResponse = await axios.get(
      `${
        getRegionBasedEnvVariables().BC_API_DOMAIN
      }${ENDPOINTS.BC.CHECKOUT.GET_CHECKOUT_DETAILS(id)}`,
      {
        headers: HEADERS.bcRestApis,
      }
    );
    return checkoutResponse?.data?.data;
  } catch (error) {
    return {
      hasError: true,
      error: error,
    };
  }
};
