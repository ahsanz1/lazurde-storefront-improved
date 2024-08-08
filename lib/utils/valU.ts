import Axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import {
  VALU_API_DOMAIN,
  VALU_API_KEY,
  VALU_INTEGRATION_ID,
} from "general-config";

export const getValuApiKey = async () => {
  try {
    const response = await Axios.post(
      `${VALU_API_DOMAIN}${ENDPOINTS.VALU.GET_AUTH_TOKEN}`,
      { api_key: VALU_API_KEY }
    );
    return response;
  } catch (error: unknown) {
    
    console.log("Error while fecthing valU api keu");
  }
};

export const valuOrderRegistration = async ({
  authToken,
  amount = "4000",
  itemsPayload = [],
}: any) => {
  try {
    const response = await Axios.post(
      `${VALU_API_DOMAIN}${ENDPOINTS.VALU.ORDER_REGISTRATION}`,
      {
        auth_token: authToken,
        delivery_needed: "false",
        amount_cents: amount * 100,
        currency: "USD",
        items: itemsPayload,
      }
    );
    return response;
  } catch (error: unknown) {
    
    console.log("Error while fecthing valU api keu");
  }
};

export const getValuPaymentKey = async ({
  authToken,
  orderId,
  amount,
  billingData = {
    apartment: "803",
    email: "claudette09@exa.com",
    floor: "42",
    first_name: "Clifford",
    street: "Ethan Land",
    building: "8028",
    phone_number: "+86(8)9135210487",
    shipping_method: "PKG",
    postal_code: "01898",
    city: "Jaskolskiburgh",
    country: "CR",
    last_name: "Nicolas",
    state: "Utah",
  },
  currency = "EGP",
}: any) => {
  try {
    const response = await Axios.post(
      `${VALU_API_DOMAIN}${ENDPOINTS.VALU.GET_PAYMENT_KEY}`,
      {
        auth_token: authToken,
        amount_cents: amount * 100,
        expiration: 3600,
        order_id: orderId,
        billing_data: billingData,
        currency: currency,
        integration_id: VALU_INTEGRATION_ID,
        lock_order_when_paid: "false",
      }
    );
    return response;
  } catch (error: unknown) {
    
    console.log("Error while fecthing valU api keu");
  }
};
