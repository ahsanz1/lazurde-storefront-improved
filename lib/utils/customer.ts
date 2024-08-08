import axios from "axios";
import {
  BC_GRAPHQL_API_DOMAIN_SA,
  BC_GRAPHQL_API_DOMAIN_AE,
  BC_GRAPHQL_API_DOMAIN_EG,
  BC_GRAPHQL_CI_TOKEN_SA,
  BC_GRAPHQL_CI_TOKEN_AE,
  BC_GRAPHQL_CI_TOKEN_EG,
} from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import { APITokensObj } from "lib/types/common";

const tokens: APITokensObj = {
  sa: {
    BC_GRAPHQL_CI_TOKEN: BC_GRAPHQL_CI_TOKEN_SA,
    BC_GRAPHQL_API_DOMAIN: BC_GRAPHQL_API_DOMAIN_SA,
  },
  ae: {
    BC_GRAPHQL_CI_TOKEN: BC_GRAPHQL_CI_TOKEN_AE,
    BC_GRAPHQL_API_DOMAIN: BC_GRAPHQL_API_DOMAIN_AE,
  },
  eg: {
    BC_GRAPHQL_CI_TOKEN: BC_GRAPHQL_CI_TOKEN_EG,
    BC_GRAPHQL_API_DOMAIN: BC_GRAPHQL_API_DOMAIN_EG,
  },
};

export const getACustomerDetail = async (
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
      query: `query Customer {
          customer {
            entityId
            company
            customerGroupId
            email
            firstName
            lastName
            notes
            phone
            taxExemptCategory
            addressCount
            attributeCount
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
    return response?.data?.data?.customer;
  } catch (error: any) {
    throw error;
  }
};

export const sendVerificationEmail = async (payload: any) => {
  try {
    const response = await axios.post(
      ENDPOINTS.NEXT_API.CUSTOMER.VERIFICATION_EMAIL,
      payload
    );
    return response.data;
  } catch (error) {
    console.log("Error sending verification email: ", error);
  }
};
