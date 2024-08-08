import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import {
  GOOGLE_TRANSLATE_API_KEY,
  getRegionBasedReviewsEnvVariable,
} from "general-config";
import { Regions } from "lib/types/common";

export const getReviews = async (
  productId: number | string,
  region: Regions
) => {
  try {
    const response = await Axios.get(
      `${ENDPOINTS.REVIEWS.GET_REVIEWS(
        getRegionBasedReviewsEnvVariable[region]?.STORE_HASH,
        productId
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-stamped-api-key":
            getRegionBasedReviewsEnvVariable[region]?.PRIVATE_KEY,
        },
        timeout: 2000,
      }
    );
    return response?.data;
  } catch (error) {
    
    throw error as Error;
  }
};

export const writeReview = async (payload?: any, region?: Regions) => {
  try {
    const apiKey = getRegionBasedReviewsEnvVariable[region]?.PUBLIC_KEY;
    const storeHash = getRegionBasedReviewsEnvVariable[region]?.STORE_HASH;
    const writeReview = await Axios.post(
      `${ENDPOINTS.REVIEWS.CREATE_REVIEW(apiKey, storeHash)}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-stamped-api-key":
            getRegionBasedReviewsEnvVariable[region]?.PRIVATE_KEY,
        },
      }
    );
    return {
      hasError: false,
      response: writeReview,
    };
  } catch (error: unknown) {
    
    return {
      hasError: true,
    };
  }
};

export const translateText = async (payload?: any, targetLang?: string) => {
  try {
    const translateReview = await Axios.post(
      `${ENDPOINTS.REVIEWS.TRANSLATE_REVIEWS}`,
      {},
      {
        params: {
          q: payload,
          target: targetLang || "en",
          key: GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );
    return {
      hasError: false,
      response: translateReview,
    };
  } catch (error: unknown) {
    
    return {
      hasError: true,
    };
  }
};
