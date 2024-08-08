import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import { INSTAGRAM_APP_SECRET } from "general-config";

export const getAccessToken = async (payload: any) => {
  try {
    const response = await Axios.post(
      `${ENDPOINTS.INSTAGRAM.GET_ACCESS_TOKEN}`,
      payload
    );
    return response;
  } catch (error: unknown) {
    
  }
};

export const getLongLiveAccessToken = async (userId: any, token: string) => {
  try {
    const response = await Axios.get(
      `${ENDPOINTS.INSTAGRAM.GET_LONGLIVE_TOKEN(INSTAGRAM_APP_SECRET, token)}`
    );
    window.localStorage.setItem(
      "instagram_access_token",
      response?.data?.access_token
    );
    return response;
  } catch (error: unknown) {
    
  }
};

export const fetchInstaData = async (fields: any, token: string) => {
  try {
    const response = await Axios.get(
      `${ENDPOINTS.INSTAGRAM.FETCH_INSTAGRAM_DATA(fields, token)}`
    );
    return response;
  } catch (error: unknown) {
    
  }
};

export const fetchSinglePostInstaData = async (
  postId: string | number,
  fields: any,
  token: string
) => {
  try {
    const response = await Axios.get(
      `${ENDPOINTS.INSTAGRAM.FETCH_SINGLE_INTSA_POST_DATA(
        postId,
        fields,
        token
      )}`
    );
    return response;
  } catch (error: unknown) {
    
  }
};
