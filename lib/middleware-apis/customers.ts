import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  BC_CHANNEL_ID,
  getCurrentDomain,
  tokens as token,
} from "general-config";
import { AppContext } from "lib/context";
import { CartObject } from "lib/types/cart";
import { APITokensObj, RegionType, Regions } from "lib/types/common";
import { useCart } from "lib/utils/cart";
import { getStoreAttributeId, useClearData } from "lib/utils/common";
import { customerAttributesNames } from "lib/utils/constants";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { IframeHTMLAttributes, useContext, useState } from "react";

const tokens: APITokensObj = token;

export const generateCouponCode = async (payload: any) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/customer/new-customer`, {
        method: "post",
        body: JSON.stringify({ payload }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const createPromotion_BigC = async (payload: any, region: Regions) => {
  try {
    return await (
      await fetch(
        `${getCurrentDomain()}/customer/new-customer/createPromotion`,
        {
          method: "post",
          body: JSON.stringify({ payload, region }),
        }
      )
    ).json();
  } catch (error) {
    throw error;
  }
};

export const createCoupon_BigC = async (
  promotionId: number,
  region: Regions,
  payload: any
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/customer/new-customer/createCoupon`, {
        method: "post",
        body: JSON.stringify({ promotionId, region, payload }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const engagementOutOfStock = async (payload: {}, region: RegionType) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/engagement-customer/customer-event`, {
        method: "post",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const updateEngagementCustomer = async (
  payload: {},
  region: RegionType
) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/engagement-customer`, {
        method: "post",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const engagementCustomerAttr = async (
  payload: {},
  region: RegionType
) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/engagement-customer/attributes`, {
        method: "post",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const storedInstruments = async (customerId: number, region: string) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/get-instruments`, {
        method: "post",
        body: JSON.stringify({ customerId, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

const getLoginUrl = async ({ region, redirectUrl, customerId }: any) => {
  try {
    const response = await (
      await fetch(`${getCurrentDomain()}/customer/jwt`, {
        method: "post",
        body: JSON.stringify({
          data: redirectUrl,
          region: region,
          customerId: customerId,
        }),
      })
    ).json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getInstrumentsByCustomer = async (identifier: string) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/checkout-customer/customer`, {
        method: "post",
        body: JSON.stringify({ identifier }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const updateCheckoutCustomer = async (
  identifier: string,
  payload: string
) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/checkout-customer/updateCustomer`, {
        method: "post",
        body: JSON.stringify({ identifier, payload }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

const createCustomer = async (payload: [], region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/customers`, {
        method: "post",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const getACustomerGraphQL = async (
  customerId: number,
  region: string
) => {
  try {
    const response = await fetch(`${getCurrentDomain()}/customer/getCustomer`, {
      method: "put",
      body: JSON.stringify({
        customerId,
        region,
      }),
    });
    if (!response?.ok) {
      throw response;
    }
    return await response.json();
  } catch (error: any) {
    throw error;
  }
};

const updateCustomer = async (payload: [], region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/update-customer`, {
        method: "put",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const updateCustomerAttributeValues = async (
  payload: [],
  region: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/update-attribute-values`, {
        method: "put",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

const getAllStoreAttributesMW = async (region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/customer/getStoreAttributes`, {
        method: "post",
        body: JSON.stringify({ region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const getAttributesByCustomerId = async (id: number, region: string) => {
  try {
    if (!id) return;
    return await (
      await fetch(`${getCurrentDomain()}/v3/getAttributesByCustomerId`, {
        method: "post",
        body: JSON.stringify({ id, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const getCustomerByEmail = async (
  customerEmail: string,
  region: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/customer/getCustomerByEmail`, {
        method: "post",
        body: JSON.stringify({ customerEmail, region }),
      })
    ).json();
  } catch (error: any) {
    throw error;
  }
};

export const customerLogin = async (
  email: string,
  password: string,
  region: string
) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${tokens[region].BC_GRAPHQL_API_TOKEN}`,
    };
    const graphqlQuery = {
      query: `mutation login(
        $email: String!,
        $password: String!
      ) {
        login(
          email: $email,
          password: $password
        ) {
          result
          customer {
            entityId
            email
            firstName
            lastName
            phone
            wishlists {
              edges {
                node {
                  name
                  entityId
                  items {
                    edges {
                      node {
                        entityId
                        productEntityId
                        product {
                          id
                          entityId
                          name
                          sku
                          plainTextDescription
                          defaultImage {
                            ...ImageFields
                          }
                          images {
                            edges {
                              node {
                                ...ImageFields
                              }
                            }
                          }
                          inventory {
                            isInStock
                            hasVariantInventory
                            aggregated {
                              availableToSell
                              warningLevel
                            }
                          }
                          customFields {
                            edges {
                              node {
                                entityId
                                name
                                value
                              }
                            }
                          }
                          variants {
                            edges {
                              node {
                              id
                              sku
                              entityId
                              prices {
                                price {
                                  ...MoneyFields
                                }
                              }
                              inventory {
                                isInStock
                                aggregated {
                                  availableToSell
                                  warningLevel
                                }
                              }
                              options {
                                edges {
                                  node {
                                    entityId
                                    displayName
                                  }
                                }
                              }
                            }
                          }
                        }
                        reviewSummary {
                          summationOfRatings
                          numberOfReviews
                        }
                        prices (includeTax: true) {
                          price {
                            ...MoneyFields
                          }
                          salePrice{
                            ...MoneyFields
                          }
                          basePrice{
                            ...MoneyFields
                          }
                        }
                        brand {
                          name
                        }
                       }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      fragment ImageFields on Image {
        url320wide: url(width: 320)
        url640wide: url(width: 640)
        url960wide: url(width: 960)
        url1280wide: url(width: 1280)
        altText
      }
      fragment MoneyFields on Money {
        value
        currencyCode
      }`,
      variables: { email, password },
    };
    const response = await axios({
      url: tokens[region].BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const useCustomer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const queryClient = useQueryClient();
  const { clearData } = useClearData();
  const routerRegion = router?.locale?.split("-")[1];
  const customerDataStored =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("customer") || "null")
      : null;
  const customerData: any =
    queryClient.getQueryData(["customerData"]) || customerDataStored;
  const customerAttrData: any = queryClient.getQueryData(["customerAttrData"]);
  const { appState, setHandleAuthModal, toast } = useContext(AppContext);
  const { updateCustomerInCartMutation, getInitialCartByCartId } = useCart();

  const saveCustomerData = async (customerData: any) => {
    queryClient.setQueryData(["customerData"], customerData);
    const wishListID = customerData?.wishlists?.edges?.[0]?.node?.entityId;
    const wishListItems =
      customerData?.wishlists?.edges?.[0]?.node?.items?.edges;

    queryClient.setQueryData(["getAllWishlistData"], wishListItems);
    queryClient.setQueryData(["wishListID"], wishListID);

    if (typeof window == undefined) return;

    window.localStorage.setItem("WishList_ID", JSON.stringify(wishListID));
    window.localStorage.setItem("customer", JSON.stringify(customerData));

    window.localStorage.setItem(
      "all_wishlist_items",
      JSON.stringify(wishListItems)
    );
  };

  const customerLoginJWT = async (redirectUrl: string = null) => {
    const cartData: CartObject = queryClient.getQueryData(["cartData"]);
    const url = redirectUrl || cartData?.redirect_urls?.checkout_url;
    let customerId = customerData?.entityId;
    if (!customerId)
      customerId =
        (typeof window !== "undefined" &&
          JSON.parse(window.localStorage.getItem("customer"))?.entityId) ||
        0;
    if (customerId === 0 || !customerId) {
      return url;
    }
    const resp = await getLoginUrl({
      region: appState?.region,
      customerId: customerId,
      redirectUrl: url,
    });
    return resp?.data;
  };

  const customerLogout = async () => {
    clearData();
    const logooutFrame: IframeHTMLAttributes<any> =
      document.querySelector("#logout-frame");
    logooutFrame.src = `https://checkout-${appState?.region}.lazurde.com/login.php?action=logout`;
  };

  const createCustomerMutation = useMutation((values: []) =>
    createCustomer(values, appState?.region)
  );

  const updateCustomerMutation = useMutation((payload: []) =>
    updateCustomer(payload, appState?.region)
  );

  const logInMutation = useMutation(
    async (
      values: {
        email?: string;
        password?: string;
        isLogin?: boolean;
        isRedirectToCheckout?: boolean;
      } = {}
    ) => {
      const {
        email = null,
        password = null,
        isLogin = false,
        isRedirectToCheckout = false,
      } = values;
      // try {
      const loginData = await customerLogin(email, password, appState?.region);

      if (!loginData) return null;
      const isError = loginData?.errors?.length > 0;
      if (isError) {
        toast(t("invalidCredentials"));
        throw true;
      }

      const storeAttributes: any = queryClient.getQueryData([
        "storeAttributes",
        appState?.region,
      ]);

      const customerData = loginData?.data?.login?.customer;
      let customerAttr = customerAttrData || {};
      try {
        customerAttr = await getAttributesByCustomerId(
          customerData?.entityId,
          appState?.region
        );
      } catch (error) {
        throw true;
      }
      queryClient.setQueryData(["customerAttrData"], customerAttr?.response);

      const verificationEmailSentAttr = customerAttr?.response?.find(
        (attribute: any) =>
          attribute.attribute_id ===
          getStoreAttributeId(
            storeAttributes,
            customerAttributesNames?.verificationEmailSent
          )
      );

      const isEmailVerifiedAttr = customerAttr?.response?.find(
        (attribute: any) =>
          attribute?.attribute_id ===
          getStoreAttributeId(
            storeAttributes,
            customerAttributesNames?.isEmailVerified
          )
      );
      if (
        verificationEmailSentAttr?.attribute_value !==
        isEmailVerifiedAttr?.attribute_value
      ) {
        /**
         * NOTE: Customer has not verified his email, cant be allowed to sign in
         */
        toast(t("verifyEmail"));

        throw true;
      } else {
        saveCustomerData(customerData);
      }

      const customerHasCartId = customerAttr?.response?.find(
        (attr: { attribute_id: number }) => attr?.attribute_id === 7
      );

      if (!customerHasCartId?.attribute_value) {
        updateCustomerInCartMutation?.mutate({
          customerId: customerData?.entityId,
        });
      } else {
        getInitialCartByCartId(customerHasCartId?.attribute_value);
      }

      setHandleAuthModal({
        isCheckoutGuestUser: false,
        isModalopen: false,
        isSignInOpen: false,
        isSignUpOpen: false,
        isResetPasswordOpen: false,
        isUpdatePassModalOpen: false,
      });
      if (isRedirectToCheckout) {
        const cartData = await getInitialCartByCartId(
          customerHasCartId?.attribute_value
        );
        router.push(cartData?.redirect_urls?.checkout_url);
      }
      return customerData;
      // } catch (error: any) {
      //   toast("emailDoesnotExist");
      //   throw error;
      // }
    }
  );

  const logoutMutation = useMutation(() => {
    updateCustomerInCartMutation?.mutate({ customerId: 0 });
    return customerLogout();
  });

  const updateCustomerAttributesMutation = useMutation((payload: []) =>
    updateCustomerAttributeValues(payload, appState?.region)
  );

  const getAttributes = async () => {
    if (!customerData?.entityId) return null;
    const response = await getAttributesByCustomerId(
      customerData?.entityId,
      appState?.region
    );
    return response?.response;
  };

  const getStoreAttributes = async () => {
    const response = await getAllStoreAttributesMW(appState?.region);
    return response?.response;
  };

  const useGetAttributesByCustomerId = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["customerAttrData"], getAttributes, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  const useGetStoreAttributes = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["storeAttributes", appState?.region], getStoreAttributes, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  const getCustomerByGraphQl = async () => {
    if (!customerData?.entityId) return null;
    if (appState?.region !== routerRegion) return null;
    try {
      const _customerData = await getACustomerGraphQL(
        customerData?.entityId,
        appState?.region
      );
      saveCustomerData(_customerData);
      return _customerData;
    } catch (error) {
      clearData(true);
      return null;
    }
  };

  const useCustomerByEmail = () => {
    return useQuery(["customerData"], getCustomerByGraphQl, {
      cacheTime: Infinity,
      staleTime: Infinity,
    });
  };

  const useGetCustomerByGraphQl = (
    props: { cacheTime?: number; staleTime?: number; enabled?: boolean } = {}
  ) => {
    const {
      cacheTime = Infinity,
      staleTime = Infinity,
      enabled = true,
    } = props;
    return useQuery(["customerData"], getCustomerByGraphQl, {
      cacheTime: cacheTime,
      staleTime: staleTime,
      enabled: enabled,
    });
  };

  return {
    customerLoginJWT,
    customerLogout,
    logInMutation,
    logoutMutation,
    createCustomerMutation,
    updateCustomerMutation,
    updateCustomerAttributesMutation,
    useGetAttributesByCustomerId,
    useGetCustomerByGraphQl,
    getAttributes,
    useGetStoreAttributes,
    useCustomerByEmail,
  };
};
