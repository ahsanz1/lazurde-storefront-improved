import { tokens as token } from "general-config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppContext } from "lib/context";
import axios from "axios";
import {
  addWishlistItemsGraphQL,
  createWishlistGraphQL,
  deleteWishlistItemsGraphQL,
} from "lib/middleware-apis/wishlist";
import { useContext, useRef } from "react";
import { APITokensObj } from "lib/types/common";
import { getCurrentRegionName } from "./common";
import { engagementOutOfStock } from "lib/middleware-apis/customers";
import { onWishlistAddEvent } from "./datalayer-events";

const tokens: APITokensObj = token;

export const createWishlist = async (
  name?: string,
  isPublic?: boolean,
  customerId?: number,
  region?: string
) => {
  try {
    const headers = {
      "content-type": "application/json",
      "x-bc-customer-id": customerId,
      Authorization: `Bearer ${tokens[region].BC_GRAPHQL_CI_TOKEN}`,
    };
    const graphqlQuery = {
      query: `mutation Wishlist {
        wishlist {
          createWishlist(input: {name: "Wishlist", isPublic: true}) {
              result {
                name
                entityId
              }
          }
        }
      }`,
      variables: { name, isPublic },
    };
    const response = await axios({
      url: tokens[region].BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response?.data?.data?.wishlist;
  } catch (error: any) {
    console.log(error.message);

    return error;
  }
};

export const addWishlistItems = async (
  wishlist_id?: string,
  product_id?: boolean,
  customerId?: number,
  region?: string
) => {
  try {
    const headers = {
      "content-type": "application/json",
      "x-bc-customer-id": `${customerId}`,
      Authorization: `Bearer ${tokens[region].BC_GRAPHQL_CI_TOKEN}`,
    };
    const graphqlQuery = {
      query: `mutation Wishlist {
        wishlist {
          addWishlistItems(input: {entityId: ${wishlist_id}, items: [{
            productEntityId: ${product_id}
          }]}) {
              result {
                entityId
                name
                isPublic
                token
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
                        categories{
                          edges {
                            node {
                              entityId
                              name
                              path
                            }
                          }
                        }
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
    };
    const response = await axios({
      url: tokens[region].BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response?.data?.data?.wishlist;
  } catch (error: any) {
    console.log(error.message);

    return error;
  }
};

export const deleteWishlistItems = async (
  wishlist_id?: number | string,
  product_id?: boolean,
  customerId?: number,
  region?: string
) => {
  wishlist_id = Number(wishlist_id);
  try {
    const headers = {
      "content-type": "application/json",
      "x-bc-customer-id": `${customerId}`,
      Authorization: `Bearer ${tokens[region].BC_GRAPHQL_CI_TOKEN}`,
    };
    const graphqlQuery = {
      query: `mutation Wishlist (
      $wishlist_id: Int!
      $product_id: [Int!]!
    ) {
        wishlist {
          deleteWishlistItems(input: {entityId: $wishlist_id, itemEntityIds: $product_id}) {
            result {
              entityId
              name
              isPublic
              token
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
      variables: { product_id, wishlist_id },
    };
    const response = await axios({
      url: tokens[region].BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response?.data?.data?.wishlist;
  } catch (error: any) {
    console.log(error.message);

    throw error;
  }
};

export const useWishlist = () => {
  const { appState, exponeaCookie } = useContext(AppContext);
  const queryClient = useQueryClient();
  const lastUpdatedItem = useRef(null);
  const customerData: { email: string; entityId: number } =
    queryClient.getQueryData(["customerData"]);

  const wishListId: string = queryClient.getQueryData(["wishListID"]);

  const getwishlistId = async () => {
    const savedWIshlistId = queryClient.getQueryData(["wishListID"]);
    if (!savedWIshlistId) return null;
    return savedWIshlistId;
  };

  const createEngagementWishlistPayload = (
    wishlistData: any,
    lastUpdatedItem: any,
    customer: any,
    appState: any,
    exponeaCookie: any,
    action: "add" | "remove" | null
  ) => {
    if (!lastUpdatedItem) return;
    const itemSkus: string[] = [];
    let updatedItemIndex = null;

    let totalQuantity = 0;
    let totalPrice = 0;
    let totalDiscount = 0;
    let currency = "";

    const itemList =
      wishlistData?.edges.map((item: any, index: number) => {
        item = item?.node?.product;
        let title = item?.name
          ?.split(" - ")[1]
          ?.replace(/\s/g, "-")
          .toLocaleLowerCase();

        if (item?.entityId === lastUpdatedItem?.product_id) {
          updatedItemIndex = index;
        }
        totalQuantity = totalQuantity + 1;
        totalPrice = totalPrice + item?.prices?.price?.value;
        let imageUrl = item?.images?.edges?.[0]?.node?.url1280wide;
        const discount =
          Number(item?.prices?.basePrice?.value) -
          Number(item?.prices?.price?.value || 0);
        totalDiscount = totalDiscount + discount;
        currency = item?.prices?.price?.currencyCode;

        return {
          item_id: item?.sku,
          item_title: item?.name?.split(/- (.*)/s)?.[1]?.trim(),
          item_original_price: item?.prices?.basePrice?.value || "",
          item_sale_price: item?.prices?.salePrice?.value || "",
          item_discount: discount || "",
          item_price: item?.prices?.price?.value || "",
          item_url: `${window?.location?.origin}/p/${title}-sku-${item?.sku}`,
          item_image: imageUrl,
          total_price: item?.prices?.price?.value || "",
          discount_value: discount || "",
          quantity: 1,
        };
      }) || [];

    const items = itemList.splice(updatedItemIndex, 1);
    itemList.splice(0, 0, ...items);
    itemList.forEach((item: any) => itemSkus.push(item?.item_id));

    const customerData = customer?.email || exponeaCookie?.[appState?.region];
    const customerType = customer?.email ? "email_id" : "cookie";

    const payload = {
      commands: [
        {
          name: "customers/events",
          data: {
            customer_ids: {
              [customerType]: customerData,
            },
            event_type: "wishlist_update_backend",
            timestamp: Math.floor(Date.now() / 1000),
            properties: {
              email: customer?.email || "",
              cookie: customer?.email ? "" : exponeaCookie?.[appState?.region],
              action: action,
              domain: window?.location?.hostname,
              region: getCurrentRegionName(appState?.region),
              boutique: appState?.brand,
              language: appState?.lang,
              total_quantity: totalQuantity || "",
              total_price: totalPrice || "",
              total_discount_value: totalDiscount || "",
              currency: currency || "",
              item_ids: itemSkus || "",
              item_details: itemList || [],
              source_import: "bigcommerce_custom_api",
            },
          },
        },
      ],
    };
    engagementOutOfStock(payload, appState?.region);
  };

  const getwishlist = async () => {
    queryClient.getQueryData(["wishListID"]);
    const savedWIshlistData = queryClient.getQueryData(["getAllWishlistData"]);
    if (!savedWIshlistData) return null;
    return savedWIshlistData;
  };

  const addAnyItemToWishlist = async (
    wishlist_Id: string,
    id: string,
    customerId: number,
    region: string
  ) => {
    const addWishlistItemPayload = {
      wishListId: wishlist_Id,
      productId: id,
      customerId: customerId,
      region: region,
    };
    lastUpdatedItem.current = {
      item: { product_id: id },
      action: "add",
    };
    const added = await addWishlistItemsGraphQL(addWishlistItemPayload);
    const allWishListItems = added?.addWishlistItems?.result?.items?.edges;

    typeof window !== undefined &&
      window?.localStorage?.setItem(
        "all_wishlist_items",
        JSON.stringify(allWishListItems)
      );

    queryClient.setQueryData(["getAllWishlistData"], allWishListItems);
    onWishlistAddEvent(
      {
        wishListItems: added?.addWishlistItems?.result?.items?.edges,
        addedItemId: id,
      },
      customerData?.entityId
    );
    createEngagementWishlistPayload(
      added?.addWishlistItems?.result?.items,
      lastUpdatedItem?.current?.item,
      customerData,
      appState,
      exponeaCookie,
      lastUpdatedItem?.current?.action
    );
  };

  const deleteAnyItemToWishlist = async (
    itemId: string,
    customerId: number,
    region: string
  ) => {
    const deleteWishlistItemPayload = {
      wishListId: wishListId,
      productId: itemId,
      customerId: customerId,
      region: region,
    };
    lastUpdatedItem.current = {
      item: { product_id: itemId },
      action: "remove",
    };
    const deleted = await deleteWishlistItemsGraphQL(deleteWishlistItemPayload);
    const updatedWishListItems =
      deleted?.deleteWishlistItems?.result?.items?.edges;

    typeof window !== undefined &&
      window?.localStorage?.setItem(
        "all_wishlist_items",
        JSON.stringify(updatedWishListItems)
      );
    queryClient.setQueryData(["getAllWishlistData"], updatedWishListItems);
    createEngagementWishlistPayload(
      deleted?.deleteWishlistItems?.result?.items,
      lastUpdatedItem?.current?.item,
      customerData,
      appState,
      exponeaCookie,
      lastUpdatedItem?.current?.action
    );
  };

  const createNewWishlist = async (
    wishList_id: string,
    itemId: string,
    customerId: number,
    region: string
  ) => {
    if (!wishListId) {
      const wishListCreated = await createWishlistGraphQL(customerId, region);
      queryClient.setQueryData(
        ["wishListID"],
        wishListCreated?.createWishlist?.result?.entityId
      );
      window.localStorage.setItem(
        "WishList_ID",
        wishListCreated?.createWishlist?.result?.entityId
      );
      addAnyItemToWishlist(
        wishListCreated?.createWishlist?.result?.entityId,
        itemId,
        customerId,
        region
      );
    } else {
      addAnyItemToWishlist(wishList_id, itemId, customerId, region);
    }
  };

  const useGetWishlist = () => {
    return useQuery({
      queryKey: ["getAllWishlistData"],
      queryFn: getwishlist,
      cacheTime: Infinity,
      staleTime: Infinity,
    });
  };

  const useGetWishlistID = () => {
    return useQuery({
      queryKey: ["wishListID"],
      queryFn: getwishlistId,
      cacheTime: Infinity,
      staleTime: Infinity,
    });
  };

  const createWishlistMutation: any = useMutation(
    (values: { wishlist_id: string; itemId: string; customerId: number }) =>
      createNewWishlist(
        values?.wishlist_id,
        values?.itemId,
        values?.customerId,
        appState?.region
      )
  );

  const removeWishlistMutation: any = useMutation(
    (values: { itemId: string; customerId: number }) =>
      deleteAnyItemToWishlist(
        values?.itemId,
        values?.customerId,
        appState?.region
      )
  );

  return {
    useGetWishlist,
    useGetWishlistID,
    createWishlistMutation,
    removeWishlistMutation,
  };
};
