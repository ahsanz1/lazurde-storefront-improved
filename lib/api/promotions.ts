import {
  FLOW_OMS_DOMAIN,
  FLOW_OMS_LZD_BRAND_ID,
  FLOW_OMS_XAP_TOKEN,
} from "general-config";
import ENDPOINTS from "./endpoints";
import Axios from "axios";

export const flowOMSPromotion = async () => {
  try {
    const response = await Axios.get(
      `${FLOW_OMS_DOMAIN}${ENDPOINTS.FLOW_OMS.PROMOTIONS.PROMO(FLOW_OMS_LZD_BRAND_ID)}`,
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
