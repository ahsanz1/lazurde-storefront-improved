import Axios from "axios";
import { getRegionBasedEnvVariables, tokens } from "general-config";
import { ProductType } from "lib/types/product";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import { APITokensObj, ErrorObject } from "lib/types/common";
import axios from "axios";

const token: APITokensObj = tokens;
export const fetchAllProducts = async (entityIds?: any, region?: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${token[region].BC_GRAPHQL_API_TOKEN}`,
    };
    const graphqlQuery = {
      query: ` query paginateProducts(
        $entityIds: [Int!] = []
        $pageSize: Int = 20
        $cursor: String
      ) {
        site {
          products (entityIds: $entityIds, first: $pageSize, after:$cursor) {
            pageInfo {
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                sku
                entityId
                name
                prices(includeTax: true) {
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
                categories {
                  edges {
                    node {
                      id,
                      entityId,
                      name,
                    }
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
                  edges {node {
                    id
                    sku
                    entityId
                    prices {
                      price {
                        ...MoneyFields
                      }
                    }
                    options {
                      edges {
                        node {
                          entityId
                          displayName
                          values {
                            edges {
                              node {
                                entityId
                                label
                              }
                            }
                          }
                        }
                      }
                    }
                    inventory {
                      isInStock
                      aggregated {
                        availableToSell
                        warningLevel
                      }
                    }
                    productOptions {
                      edges{
                        node{
                          entityId
                          displayName
                          isRequired
                          isVariantOption
                        }
                      }
                    }
                  
                  }}
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
        url1440wide: url(width: 1440)
        altText
      }

      fragment MoneyFields on Money {
        value
        currencyCode
      }

      `,

      variables: { entityIds: entityIds },
    };
    const response = await axios({
      url: token[region]?.BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response.data.data.site.products.edges;
  } catch (error: any) {
    console.log(error.message);

    return false;
  }
};

export const fetchProduct = async (sku: any, region: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${token[region]?.BC_GRAPHQL_API_TOKEN}`,
    };
    const graphqlQuery = {
      query: ` query productById(
        $sku: String
      ) {
        site {
          product(sku: $sku) {
            id
            entityId
            name
            sku
            plainTextDescription
            description
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
            categories {
              edges{
                node {
                  id
                  entityId
                  name
                  path
                }
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
            metafields(namespace: "product Attributes") {
              edges {
                node {
                  entityId
                  id
                  key
                  value
                }
              } 
            }
            variants {
              edges {node {
                id
                sku
                entityId
                prices {
                  price {
                    ...MoneyFields
                  }
                }
                options {
                  edges {
                    node {
                      entityId
                      displayName
                      values {
                        edges {
                          node {
                            entityId
                            label
                          }
                        }
                      }
                    }
                  }
                }
                inventory {
                  isInStock
                  aggregated {
                    availableToSell
                    warningLevel
                  }
                }
                productOptions {
                  edges {
                    node {
                      entityId
                      displayName
                      isRequired
                      ... on CheckboxOption {
                        checkedByDefault
                      }
                      ... on MultipleChoiceOption {
                        values {
                          edges {
                            node {
                              entityId
                              label
                              isDefault
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }}
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
            relatedProducts {
              edges {
                node {
                  entityId
                  sku
                  name
                  id
                  inventory {
                    isInStock
                    hasVariantInventory
                  }
                  brand {
                    name
                  }
                  customFields {
                    edges {
                      node {
                        name
                        value
                      }
                    }
                  }
                  defaultImage {
                    ...ImageFields
                    altText
                    isDefault
                    url(width: 10, height: 10)
                    urlOriginal
                  }
                  description
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
        url1440wide: url(width: 1440)
        altText
      }
      
      fragment MoneyFields on Money {
        value
        currencyCode
      }`,
      variables: { sku: sku },
    };
    const response = await axios({
      url: token[region]?.BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response?.data?.data?.site?.product;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const fetchProductSku = async (id: number[], region: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${token[region]?.BC_GRAPHQL_API_TOKEN}`,
    };
    const graphqlQuery = {
      query: ` query productsById(
        $id: [Int!]
      ) {
        site {
          products(entityIds: $id) {
            edges {
              node {
                entityId
                name
                sku
              }
            }
          }
        }
      }
   `,
      variables: { id: id },
    };
    const response = await axios({
      url: token[region]?.BC_GRAPHQL_API_DOMAIN,
      method: "POST",
      headers: headers,
      data: graphqlQuery,
    });
    return response.data.data.site.products.edges;
  } catch (error: any) {
    throw error;
  }
};

export const fetchMultipleProductsBySku = async (sku: any, locale?: string) => {
  try {
    // const productResponse = await Axios.get(
    //   `${COPILOT_DOMAIN}${ENDPOINTS.COPILOT.PIM.FETCH_PRODUCT_BY_SKU(sku)}`,
    //   {
    //     headers: HEADERS.common,
    //     params: {
    //       locale: locale,
    //     },
    //   }
    // );
    // return (productResponse as any) || null;
    return null as any;
  } catch (error) {
    console.log("Error fetching product", (error as ErrorObject).message);
  }
  return null;
};

export const fetchBCProductsREST = async (productId: number) => {
  try {
    const productResponse = await Axios.get(
      `${
        getRegionBasedEnvVariables().BC_API_DOMAIN
      }${ENDPOINTS.BC.PRODUCTS.GET_PRODUCTS(productId)}`,
      {
        headers: HEADERS.bcRestApis,
      }
    );
    return (productResponse as any)?.data;
  } catch (error) {
    console.log("Error fetching product", (error as ErrorObject).message);
    return {
      hasError: true,
    };
  }
};

export const fetchAllProductsRESTWithPagination = async (
  page: number,
  region: string
) => {
  try {
    const productResponse = await Axios.get(
      `${
        (tokens as any)[region]?.BC_API_DOMAIN
      }${ENDPOINTS.BC.PRODUCTS.GET_ALL_PRODUCTS_WITH_PAGINATION(page)}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": (tokens as any)[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    return (productResponse as any)?.data;
  } catch (error) {
    console.log("Error fetching product", (error as ErrorObject).message);
    return {
      hasError: true,
    };
  }
};

export const fetchSelectedProductsREST = async (ids: number) => {
  try {
    const productResponse = await Axios.get(
      `${
        getRegionBasedEnvVariables().BC_API_DOMAIN
      }${ENDPOINTS.BC.PRODUCTS.GET_SELECTED_PRODUCTS(ids)}`,
      {
        headers: HEADERS.bcRestApis,
      }
    );
    return (productResponse as any)?.data?.data;
  } catch (error) {
    console.log("Error fetching product", (error as ErrorObject).message);
    return {
      hasError: true,
    };
  }
};

export const fetchProductMetaFields = async (id: number) => {
  try {
    const productResponse = await Axios.get(
      `${
        getRegionBasedEnvVariables().BC_API_DOMAIN
      }${ENDPOINTS.BC.PRODUCTS.GET_META_FIELDS(id)}`,
      {
        headers: HEADERS.bcRestApis,
      }
    );
    return (productResponse as any)?.data?.data;
  } catch (error) {
    console.log("Error fetching product", (error as ErrorObject).message);
    return {
      hasError: true,
    };
  }
};
