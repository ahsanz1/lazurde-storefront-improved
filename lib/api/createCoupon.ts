import Axios from "axios";
import { tokens } from "general-config";
import ENDPOINTS from "./endpoints";
import { Regions } from "lib/types/common";
import HEADERS from "./headers";

export const createBigCommercePromotion = async (
  payload: any,
  region: Regions
) => {
  try {
    const response = await Axios.post(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.PROMOTIONS.CREATE_PROMOTION}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || {};
  } catch (error) {
    throw error;
  }
};

export const createBigCommerceCoupon = async (
  promotionId: number,
  region: Regions,
  payload: any
) => {
  try {
    const response = await Axios.post(
      `${tokens[region].BC_API_DOMAIN}${ENDPOINTS.BC.COUPONS.CREATE_COUPON(
        promotionId
      )}`,
      payload,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": tokens[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return response?.data || {};
  } catch (error) {
    throw error;
  }
};
