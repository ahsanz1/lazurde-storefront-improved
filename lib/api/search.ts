import Axios from "axios";
import {
  BR_GET_SUGGESTIONS,
  BR_PRODUCT_SEARCH_DOMAIN,
  LAZURDE_ENV,
  bloomreachDomainKeys,
} from "general-config";
import { LocaleType } from "lib/types/common";

type SearchApiProps = {
  searchType?: string;
  query?: string | number | any;
  sorting?: string;
  start?: number;
  rows?: number;
  facets?: any;
  eqFacets?: any;
  locale?: LocaleType;
  childCategoryName?: string;
  brand?: string;
  brUID?: string;
  parentCategoryName?: string;
};

export const productSearchApi = async ({
  searchType,
  query = "",
  sorting = "",
  start = 0,
  rows = 20,
  facets = [],
  eqFacets = [],
  locale = "en-sa",
  childCategoryName = "",
  parentCategoryName = "",
  brUID,
}: SearchApiProps) => {
  const urlParams: any = new URLSearchParams();
  if (eqFacets?.and && Object.keys(eqFacets?.and)?.length > 0) {
    for (const key in eqFacets?.and) {
      const element = eqFacets?.and[key];
      if (!element) continue;
      if (key === "priceFacet") {
        let hasPriceFilter = false;
        if (facets && Object.keys(facets)?.length > 0) {
          for (const filter in facets) {
            if (facets[filter]?.includes("price")) {
              hasPriceFilter = true;
              break;
            }
          }
        }
        !hasPriceFilter && urlParams?.append("fq", element);
        continue;
      }
      if (key === "newInFacet") {
        urlParams?.append("fq", element);
        continue;
      }
      urlParams?.append("efq", element);
    }
  }
  eqFacets?.or && urlParams?.append("efq", eqFacets?.or);
  if (facets && Object.keys(facets)?.length > 0) {
    for (const key in facets) {
      const element = facets[key];
      if (!element) continue;
      urlParams?.append("fq", element);
    }
  }
  if (childCategoryName !== "search") {
    if (
      (childCategoryName && childCategoryName === "special-price") ||
      (parentCategoryName && parentCategoryName === "special-price")
    ) {
      urlParams?.append("efq", `product_discontinued:("true")`);
      urlParams?.append("fq", `inventory_level:[1 TO *]`);
    } else {
      urlParams?.append("efq", `-product_discontinued:("true")`);
    }

    // console.log("URL Params: ", urlParams, childCategoryName);
  }
  if (childCategoryName === "search") {
    urlParams?.append(
      "efq",
      `-product_discontinued:("true") OR (product_discontinued:("true") AND -inventory_level:(0))`
    );
    // urlParams?.append("fq", `inventory_level:[1 TO *]`);
  }
  let validationRule = null;
  if (
    (locale !== "ar-sa" && locale !== "en-sa") ||
    searchType == "keyword" ||
    query == 29911 ||
    query == 72 ||
    query == "" ||
    query?.facets ||
    childCategoryName === "best-sellers" ||
    parentCategoryName === "best-sellers"
  ) {
    validationRule = false;
  } else {
    validationRule = true;
  }

  urlParams?.append("account_id", "7235");
  urlParams?.append("auth_key", "6eurr1krs75crcb0");
  urlParams?.append("domain_key", bloomreachDomainKeys[locale]);
  urlParams?.append("_br_uid_2", brUID);
  urlParams?.append("url", "https://www.lazurde.com");
  urlParams?.append("ref_url", "");
  urlParams?.append("request_id", "");
  urlParams?.append("request_type", "search");
  urlParams?.append("search_type", searchType);
  urlParams?.append("rows", rows);
  urlParams?.append("stats.field", "price");
  urlParams?.append("start", start);
  urlParams?.append("q", query);
  LAZURDE_ENV == "true" &&
    validationRule &&
    urlParams?.append("category_type", "dynamic");
  urlParams?.append(
    "fl",
    `pid,title,price,base_price,sale_price,currency,brand,thumb_image,discount_amount,discount_percentage,product_images,product_sku, title_en, inventory_level,date_created,product_category,category, isFeatured, product_tag, product_tag_ar`
  );
  urlParams?.append("sort", sorting);
  // urlParams?.append("query.spellcorrect", "off")
  let logData = [];
  for (const [key, value] of urlParams.entries()) {
    if (key === "sort") {
      if (!value) continue;
    }
    if (key === "fq" || key === "efq") {
      logData.push(`${key}=${value}`);
    }
  }
  // console.log("FACETS USED IN API", query, logData);
  try {
    const response = await Axios.get(
      `${BR_PRODUCT_SEARCH_DOMAIN}/api/v1/core/`,
      {
        params: urlParams,
        paramsSerializer: (params) => {
          let result = "";
          for (const [key, value] of params.entries()) {
            if (key === "sort") {
              result += `${key}=${value}&`;
              continue;
            }
            result += `${key}=${encodeURIComponent(value)}&`;
          }
          return result;
        },
      }
    );
    return response?.data;
  } catch (error: any) {
    return {
      hasError: true,
      response: error?.response?.data || error,
      error: error,
    };
    // throw error;
  }
};

export const searchSuggestionsAPI = async ({
  query,
  locale = "en-sa",
  brUID,
}: SearchApiProps) => {
  try {
    const response = await Axios.get(`${BR_GET_SUGGESTIONS}`, {
      params: {
        account_id: "7235",
        auth_key: "6eurr1krs75crcb0",
        catalog_views: `${bloomreachDomainKeys[locale]}`,
        _br_uid_2: brUID,
        url: "https://www.lazurde.com",
        request_type: "suggest",
        q: query,
      },
    });

    return {
      hasError: false,
      response: response?.data,
    };
  } catch (error: any) {
    throw {
      hasError: true,
      code: error,
    };
  }
};
