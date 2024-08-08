import axios, { AxiosError } from "axios";
import {
  APPLE_PAY_DOMAIN_DEV,
  APPLE_PAY_DOMAIN_QA,
  APPLE_PAY_DOMAIN_UAT,
  APPLE_PAY_MERCHANT_ID,
  APPLE_PAY_SERVER_URL,
} from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import {
  AddShipToCartPayloadType,
  CheckoutConnectorType,
  CheckoutPayloadType,
  CheckoutPaymentMethodType,
  CurrencyType,
  ShippingDetailsPayloadType,
} from "lib/types/shipping-and-checkout";
import { CartItem } from "lib/types/cart";

export const createShippingDetails = async (
  payload: ShippingDetailsPayloadType,
  cartId: string
) => {
  try {
    // const createShippingDetailsRes = await axios.post(
    //   `${CART_DOMAIN}${ENDPOINTS.CART.CREATE_SHIPPING_DETAILS(cartId)}`,
    //   payload,
    //   {
    //     headers: { ...HEADERS.common, "x-api-key": CART_V2_X_API_KEY },
    //   }
    // );
    // return createShippingDetailsRes.data || null;
  } catch (error: any) {
    console.log(
      "Error creating shipping details for cart: ",
      (error as AxiosError).message
    );
    return {
      hasError: true,
      response: error?.response?.data,
    };
  }
};

export const addShippingDetailsToCartItems = async (
  payload: AddShipToCartPayloadType,
  cartId: string
) => {
  try {
    // const shipDetailsToCartItemsRes = await axios.patch(
    //   `${CART_DOMAIN}${ENDPOINTS.CART.ADD_SHIPPING_DETAILS_TO_CART_ITEMS(
    //     cartId
    //   )}`,
    //   payload,
    //   {
    //     headers: { ...HEADERS.common, "x-api-key": CART_V2_X_API_KEY },
    //   }
    // );
    // return shipDetailsToCartItemsRes.data || null;
  } catch (error: any) {
    console.log("Error performing checkout: ", (error as AxiosError).message);
    return error?.response?.data;
  }
};

export const performCheckout = async (payload: CheckoutPayloadType) => {
  try {
    // let auth = {};
    // const access_token = await getAuthToken();
    // if (access_token) {
    //   auth = {
    //     Authorization: access_token,
    //   };
    // }
    // const checkoutRes = await axios.post(
    //   `${CHECKOUT_DOMAIN}${ENDPOINTS.CART.CHECKOUT}`,
    //   payload,
    //   {
    //     headers: {
    //       ...HEADERS.common,
    //       "x-api-key": SHIPPING_X_API_KEY,
    //       "tenant-key": ACCOUNT,
    //       ...auth,
    //     },
    //   }
    // );
    // return checkoutRes.data || null;
  } catch (error: any) {
    console.log("Error performing checkout: ", (error as AxiosError).message);
    return {
      hasError: true,
      response: error.response,
    };
  }
};

export const generateCreateShippingPayload = (
  shippingMethod: any = {},
  cartData: any,
  address: any,
  setCheckoutProcessing: any
) => {
  let shippingDetails = JSON.parse(
    window.sessionStorage.getItem("shippingMethods")
  );
  shippingMethod = shippingDetails || shippingMethod;
  if (Object.keys(shippingMethod).length === 0) {
    setCheckoutProcessing(false);
    return;
  }

  const createShippingPayload = {
    shipMethod: {
      cost: {
        amount: shippingMethod?.cost,
        currency: cartData?.currency,
      },
      shipMethodId: shippingMethod?.shippingMethodId,
    },
    address,
    shipToType: "SHIP_TO_ADDRESS",
    taxCode: shippingMethod?.taxCode,
    pickup: false,
  };
  return createShippingPayload;
};

export const generateAddShippingToCartPayload = (
  cartItems: CartItem[] = [],
  cartId: string = "",
  shipToId: string = ""
) => {
  if (cartItems.length === 0 || !cartId || !shipToId) return;

  const mappedItems = cartItems.map((item: CartItem, idx: number) => ({
    itemId: item.itemId,
    lineItemId: item?.lineItemId,
    shipToId: shipToId,
  }));

  return { items: mappedItems };
};

export const generateCheckoutPayload = (
  cart: any = null,
  connector: string,
  paymentMethod: string,
  paymentMethodType: CheckoutPaymentMethodType = "",
  paymentToken: string = "",
  addressObj: any
) => {
  if (!cart || !paymentMethodType || !paymentToken) return;
  let userProfile = JSON.parse(window.localStorage.getItem("individualInfo"));

  const { shipTo = {} } = cart?.items[0];

  const checkoutPayload = {
    cartId: cart.cartId,
    customerEmail: userProfile?.email,
    customerName: {
      first: addressObj?.name?.first,
      middle: " ",
      last: addressObj?.name?.last,
    },
    customerPhoneNumber: {
      number: addressObj?.phone?.number,
      kind: addressObj?.phone?.kind,
    },
    paymentDetails: [
      {
        connectorName: connector as CheckoutConnectorType,
        paymentMethod: paymentMethod,
        paymentMethodType: paymentMethodType as CheckoutPaymentMethodType,
        paymentToken: paymentToken,
        amount: cart.totalAmount,
        currency: cart?.currency as CurrencyType,
        billToAddress: {
          ...addressObj,
          customerId: userProfile?.additionalAttributes?.checkoutCustomerId,
        },
      },
    ],
    estimatedTax: {
      itemsTaxes: (cart?.items || []).map((item: any, idx: number) => ({
        lineItemId: item?.lineItemId,
        amount: 0,
      })),
      shipToTaxes: [
        {
          shipToId: shipTo.shipToId,
          amount: 0,
        },
      ],
    },
    orderType: "WEB",
  };
  return checkoutPayload;
};

const getApplePayConfig = () => {
  if (typeof window === "undefined") return;
  if (window.location.hostname.includes("dev-lazurde"))
    return { domain: APPLE_PAY_DOMAIN_DEV };
  else if (window.location.hostname.includes("qa-lazurde"))
    return { domain: APPLE_PAY_DOMAIN_QA };
  else if (window.location.hostname.includes("uat-lazurde"))
    return { domain: APPLE_PAY_DOMAIN_UAT };
  return { domain: null };
};

export const beginApplePaySession = (
  countryCode: string,
  currencyCode: string,
  amount: string,
  address: any,
  performFabricCheckout: (address: any, token: string) => Promise<any>
) => {
  //@ts-ignore
  const applePaySession = new ApplePaySession(6, {
    countryCode: countryCode,
    currencyCode: currencyCode,
    supportedNetworks: ["visa", "masterCard", "amex", "discover"],
    merchantCapabilities: ["supports3DS"],
    total: { label: "Lazurde Jewelry", amount: amount },
  });
  applePaySession.begin();
  applePaySession.onvalidatemerchant = (validateEvent: any) => {
    let validationURL = validateEvent.validationURL;
    validateSession(validationURL, (merchantSession: any) => {
      applePaySession.completeMerchantValidation(merchantSession);
    });
  };

  applePaySession.oncancel = (e: any) => {
    console.log("Apple pay session cancelled: ", e);
  };

  /**
   * The onpaymentauthorized function must complete the payment and respond by calling completePayment before the 30 second timeout, after which a message appears stating that the payment could not be completed.
   */

  applePaySession.onpaymentauthorized = (paymentEvent: any) => {
    const applePaymentToken = paymentEvent.payment.token;
    // if (applePaymentToken) {
    //   //@ts-ignore
    //   applePaySession.completePayment(ApplePaySession.STATUS_SUCCESS);
    // } else {
    //   //@ts-ignore
    //   applePaySession.completePayment(ApplePaySession.STATUS_FAILURE);
    // }
    exchangeAppleTokenWithCheckoutToken(applePaymentToken).then(
      async (checkoutToken: any) => {
        if (checkoutToken) {
          // alert(checkoutToken)
          performFabricCheckout(address, checkoutToken.token)
            .then(() => {
              //@ts-ignore
              applePaySession.completePayment(ApplePaySession.STATUS_SUCCESS);
            })
            .catch((error) => {
              // alert(error);
              //@ts-ignore
              applePaySession.completePayment(ApplePaySession.STATUS_FAILURE);
            });
        } else {
          // alert('no checkout token')
          //@ts-ignore
          applePaySession.completePayment(ApplePaySession.STATUS_FAILURE);
        }
      }
    );
  };

  const validateSession = async (validationURL: string, callback: any) => {
    try {
      const sessionRes = await axios.post(
        `${APPLE_PAY_SERVER_URL}${ENDPOINTS.APPLE_PAY.VALIDATE_SESSION}`,
        {
          appleUrl: validationURL,
          merchantIdentifier: APPLE_PAY_MERCHANT_ID,
          domainName: getApplePayConfig().domain,
          displayName: "Lazurde Jewelry",
        }
      );
      callback(sessionRes.data);
    } catch (error) {
      console.log("Apple pay session validation failed: ", error);
    }
  };

  const exchangeAppleTokenWithCheckoutToken = async (
    applePaymentToken: string
  ) => {
    try {
      const tokenExchangeRes = await axios.post(
        `${APPLE_PAY_SERVER_URL}${ENDPOINTS.APPLE_PAY.EXCHANGE_TOKEN}`,
        {
          token: applePaymentToken,
          // currency: currencyCode,
          // amount: parseFloat(amount),
        }
      );
      return tokenExchangeRes.data;
    } catch (error) {
      console.log(
        "Could not exchange apple pay token with checkout.com token: ",
        error
      );
    }
  };

  return applePaySession;
};
