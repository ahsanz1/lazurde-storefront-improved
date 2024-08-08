import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import {
  CHECKOUT_DOMAIN,
  CHECKOUT_SECRET_KEY,
  CHECKOUT_PUBLIC_KEY,
  EXTERNAL_DOMAIN,
  TAMARA_CHECKOUT_DOMAIN,
  CHECKOUT_INSTRUMENT_DOMAIN,
} from "general-config";
import {
  InstrumentProps,
  TokenProps,
  UpdateInstrumentProps,
  CheckoutCustomerProps,
} from "lib/types/common";

export const createNewCheckoutCustomer = async (
  payload: CheckoutCustomerProps
): Promise<any> => {
  try {
    // const { domain } = getMiddlewareConfig();
    // const accessToken = await mwAuthTokenHelper();
    // const response = await Axios.post(
    //   `${domain}${ENDPOINTS.CHECKOUT.CREATE_CUSTOMER}`,
    //   {
    //     ...payload,
    //   },
    //   {
    //     headers: { Authorization: `${accessToken}` },
    //   }
    // );
    // return response;
  } catch (error) {
    console.log("ERRORCHECK", error);
  }
};

export const getCheckoutPaymentToken = async (payload: TokenProps) => {
  try {
    const response = await Axios.post(
      `${CHECKOUT_DOMAIN}${ENDPOINTS.CHECKOUT.GET_PAYMENT_TOKEN}`,
      {
        ...payload,
      },
      {
        headers: { Authorization: `${CHECKOUT_PUBLIC_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error?.response?.data,
      error: error?.response?.data.error_codes,
    };
  }
};

export const createPaymentInstrument = async (payload: InstrumentProps) => {
  try {
    const response = await Axios.post(
      `${CHECKOUT_INSTRUMENT_DOMAIN}${ENDPOINTS.CHECKOUT.CREATE_PAYMENT_INSTRUMENT}`,
      {
        ...payload,
      },
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const getCustomer = async (identifier: string) => {
  try {
    const response = await Axios.get(
      `${CHECKOUT_INSTRUMENT_DOMAIN}${ENDPOINTS.CHECKOUT.GET_CUSTOMER(
        identifier
      )}`,
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const updateCustomer = async (
  identifier: string,
  payload: UpdateInstrumentProps
) => {
  try {
    const response = await Axios.patch(
      `${CHECKOUT_INSTRUMENT_DOMAIN}${ENDPOINTS.CHECKOUT.GET_CUSTOMER(
        identifier
      )}`,
      {
        ...payload,
      },
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error,
      error: error,
    };
  }
};

export const updatePaymentInstrument = async (
  instrumentId: string,
  payload: UpdateInstrumentProps
) => {
  try {
    const response = await Axios.patch(
      `${CHECKOUT_INSTRUMENT_DOMAIN}${ENDPOINTS.CHECKOUT.UPDATE_PAYMENT_INSTRUMENT(
        instrumentId
      )}`,
      {
        ...payload,
      },
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error?.response?.data,
      error: error?.response?.data?.message?.error_codes,
    };
  }
};

export const removePaymentInstrument = async (instrumentId: string) => {
  try {
    const response = await Axios.delete(
      `${CHECKOUT_INSTRUMENT_DOMAIN}${ENDPOINTS.CHECKOUT.UPDATE_PAYMENT_INSTRUMENT(
        instrumentId
      )}`,
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return {
      hasError: false,
      response: response?.data,
      error: [],
    };
  } catch (error: any) {
    return {
      hasError: true,
      response: error?.response?.data,
      error: error?.response?.data?.message?.error_codes,
    };
  }
};

export const paymentWithTabby = async (token = "", tabbyData = {}) => {
  try {
    const response = await Axios.post(
      `${EXTERNAL_DOMAIN}${ENDPOINTS.CHECKOUT.TABBY_SESSION}`,
      {
        ...tabbyData,
      },
      {
        headers: { Authorization: token },
      }
    );
    return response?.data;
  } catch (error: any) {
    return {
      hasError: true,
      response: error,
    };
  }
};

export const tamaraCheckoutSession = async (data = {}) => {
  try {
    const response = await Axios.post(
      `${TAMARA_CHECKOUT_DOMAIN}${ENDPOINTS.CHECKOUT.CHECKOUT_SESSION}`,
      {
        ...data,
      },
      {
        headers: { Authorization: `Bearer ${CHECKOUT_SECRET_KEY}` },
      }
    );
    return response?.data;
  } catch (error: any) {
    return {
      hasError: true,
      response: error,
    };
  }
};
