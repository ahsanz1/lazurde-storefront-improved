import { productSearchApi } from "lib/api/search";
import {
  BrandNameTypes,
  BrandType,
  LocaleType,
} from "./../../../lib/types/common";
import { RefObject } from "react";
import { currentBrandName, getBrandKey } from "lib/utils/constants";
import { breadCrumbs } from "lib/utils/common";
import { LAZURDE_ENV, categoryIdByRegion } from "general-config";

export const getAllProducts = async ({
  searchTerm = false,
  query = "",
  sorting = getSortingType(""),
  pageNum = 0,
  rows = 20,
  eqFacets = [],
  facets = [],
  locale = "en-sa",
  childCategoryName = "",
  parentCategoryName = "",
  brUID = null,
}) => {
  const response = await productSearchApi({
    searchType: searchTerm ? "keyword" : "category",
    query: query,
    sorting: sorting,
    start: pageNum,
    rows: rows,
    facets: facets,
    eqFacets: eqFacets,
    locale: locale as LocaleType,
    childCategoryName: childCategoryName,
    parentCategoryName: parentCategoryName,
    brUID,
  });
  return response;
};

const categoryToArabicKey: any = {
  "Necklaces & Pendants": "سلاسل و دلايات",
  Earrings: "اقراط",
  Rings: "خواتم",
  Bracelets: "اساور",
  Anklets: "خلاخل",
  "Jewelry Sets": "اطقم مجوهرات",
  Gold: "ذهب",
  "Kid's Jewelry": "مجوهرات للأطفال",
  // "Capsules": "ذهب",
  "Lab Grown Diamonds": "ألماس مختبرات ",
  Statement: "ستيتمنت",
  Eternity: "إتيرنتى",
  Band: "عريض",
  "Two-headed": "برأس مزدوجة",
  "Pendant with chain": "دلاية مع سلسلة",
  Layered: "طبقات",
  "Nose Pins": "دبوس أنف",
  "Gold Coins & Bars": "عملات ذهبية وسبائك",
  // "All Diamonds": "كلّ المجوهرات",
  Chain: "سلسلة",
  Charms: "دلاية أشكال",
  Hoop: "دائرى",
  Drop: "متدلى",
  Stud: "صغير",
  Cuff: "مفتوح",
  Bangle: "أسورة",
  Tennis: "تنس",
  Choker: "تشوكر",
  Pendant: "دلاية",
  Chandelier: "متدلى طويل",
  "Clip on": "كليب",
  "Full Set": "طقم كامل",
  Twins: "توينز",
  "Half Set": "نصف طقم",
  "Wedding Band": "دبلة زفاف",
  "Gold Bar": "عملة ذهب",
  Solitaire: "سوليتير",
};

const filterKeysToEnglish: any = {
  brand: "Brand",
  category: "Category",
  type: "Type",
  metal_color: "Color",
  metal_karat: "Gold Karat",
  collection: "Collection",
  stone: "Gemstone",
  price: "Price",
};

const filterKeysToArabic: any = {
  brand: "العلامة التجارية",
  category: "الفئة",
  type: "النوع",
  metal_color: "اللون",
  metal_karat: "قيراط الذهب",
  collection: "التشكيلة",
  stone: "أحجار كريمة",
  price: "السعر",
};

const filterArabicKeysToKeys: any = {
  "العلامة التجارية": "brand",
  الفئة: "category",
  النوع: "type",
  اللون: "metal_color",
  "قيراط الذهب": "metal_karat",
  التشكيلة: "collection",
  "أحجار كريمة": "stone",
  السعر: "price",
};

const filterEnglishToKeys: any = {
  Brand: "brand",
  Category: "category",
  Type: "type",
  Color: "metal_color",
  "Gold Karat": "metal_karat",
  Collection: "collection",
  Gemstone: "stone",
  Price: "price",
};

const filterIndex: any = {
  brand: 0,
  category: 1,
  type: 2,
  metal_color: 3,
  color: 3,
  metal_karat: 4,
  "gold karat": 4,
  collection: 5,
  stone: 6,
  gemstone: 6,
  price: 7,
};

export const createFilterData = ({
  facets = {},
  locale = "en-sa",
  priceRange = "",
  brand,
}: any) => {
  const filteredData = [];

  for (const key in facets) {
    const facet = facets[key];
    let facetObject = {};

    if (facet?.length < 2 || (key === "category" && facet?.length < 3)) {
      filteredData[filterIndex?.[key]] = {
        filterName: locale.includes("en")
          ? filterKeysToEnglish[key]
          : filterKeysToArabic[key],
        filterOptions: [],
      };
      continue;
    }

    if (key === "category") {
      facet.forEach(
        (category: { cat_name: string; cat_id: number }, index: number) => {
          if (category?.cat_name === "Capsules") facet.splice(index, 1);
        }
      );
    }

    let hasMulticolored = false;
    // if (key === "type" && brand.localeCompare("Miss L'") === 0) continue;
    if (
      key === "brand" ||
      key === "type" ||
      key === "metal_color" ||
      key === "metal_karat" ||
      key === "stone" ||
      key === "collection"
    ) {
      const optionsArray: { [key: string]: string }[] = [];
      facet?.forEach((option: { name: string }) => {
        if (
          key === "metal_color" &&
          (option?.name?.includes("&") ||
            option?.name?.includes("ذهب أصفر وأبيض") ||
            option?.name?.includes("ذهب أصفر ووردى") ||
            option?.name?.includes("ذهب أبيض ووردى") ||
            option?.name?.includes("ذهب أصفر أبيض ووردى"))
        ) {
          if (hasMulticolored) return;
          hasMulticolored = true;
          return;
        }
        optionsArray.push({
          optionName: option?.name,
          value: option?.name,
        });
      });
      if (key === "metal_color" && hasMulticolored) {
        optionsArray.push({
          optionName: locale.includes("en") ? "Multicolored" : "متعدد الألوان",
          value: locale.includes("en") ? "Multicolored" : "متعدد الألوان",
        });
      }
      if (key === "stone") {
        facets["diamonds"]?.forEach((option: { name: string }) => {
          optionsArray.push({
            optionName: option?.name,
            value: option?.name,
          });
        });
      }
      facetObject = {
        filterName: locale.includes("en")
          ? filterKeysToEnglish[key]
          : filterKeysToArabic[key],
        filterOptions: optionsArray.sort((a, b) =>
          a.value.toUpperCase() < b.value.toUpperCase()
            ? 1
            : a.value.toUpperCase() > b.value.toUpperCase()
            ? -1
            : 0
        ),
      };
      filteredData[filterIndex?.[key]] = facetObject;
    }
    if (key === "category") {
      const optionsArray: { [key: string]: string | number }[] = [];
      facet.forEach((category: { cat_name: string; cat_id: number }) => {
        if (category?.cat_name?.toLowerCase() === "root") return;
        if (category?.cat_name?.toLowerCase() === "celebrity diamonds") return;
        if (category?.cat_name?.toLowerCase() === "celebrity collection")
          return;
        if (category?.cat_name?.toLowerCase() === "wild flowers") return;
        if (category?.cat_name?.toLowerCase() === "gf diam") return;
        if (category?.cat_name?.toLowerCase() === "gf ml") return;
        if (category?.cat_name?.toLowerCase() === "gf ml d") return;
        if (category?.cat_name?.toLowerCase() === "diamonds hidden") return;
        if (category?.cat_name?.toLowerCase() === "gold hidden") return;
        if (category?.cat_name?.toLowerCase() === "instyle hidden") return;
        if (category?.cat_name?.toLowerCase() === "ml aqua") return;
        if (category?.cat_name?.toLowerCase() === "peter lam") return;
        if (category?.cat_name?.toLowerCase() === "capsules") return;
        if (category?.cat_name?.toLowerCase() === "diam gf ksa") return;
        if (category?.cat_name?.toLowerCase() === "in gf") return;
        if (category?.cat_name?.toLowerCase() === "waves gf") return;
        if (category?.cat_name?.toLowerCase() === "shop all gf ksa") return;
        if (category?.cat_name?.toLowerCase() === "ml gf ksa") return;
        if (category?.cat_name?.toLowerCase() === "ml 4 elements") return;
        if (category?.cat_name?.toLowerCase() === "ml best selling") return;
        if (category?.cat_name?.toLowerCase() === "egy bs") return;
        if (category?.cat_name?.toLowerCase() === "ml bs ksa") return;
        if (category?.cat_name?.toLowerCase() === "gold by weight") return;
        if (category?.cat_name?.toLowerCase() === "ml vl eg") return;
        if (category?.cat_name?.toLowerCase() === "ml vl ku") return;
        if (category?.cat_name?.toLowerCase() === "laz vl eg") return;
        if (category?.cat_name?.toLowerCase() === "laz vl ku") return;
        if (category?.cat_name?.toLowerCase() === "dream big") return;
        if (category?.cat_name?.toLowerCase() === "new collection") return;
        if (category?.cat_name?.toLowerCase() === "all diamonds") return;
        if (category?.cat_name?.toLowerCase() === "summer sale ksa") return;
        if (category?.cat_name?.toLowerCase() === "ml summer sale") return;
        if (category?.cat_name?.toLowerCase() === "ml summer sale ksa") return;
        if (category?.cat_name?.toLowerCase() === "eid offers") return;
        if (category?.cat_name?.toLowerCase() === "eid offers lazurde") return;
        if (category?.cat_name?.toLowerCase() === "summer sale") return;

        //REMOVE THIS FIX FOR DUPLICATE CATEGORIES ONCE ITS FIXED FROM FEED
        if (
          optionsArray?.find(
            (selectedCat) => selectedCat?.optionName === category?.cat_name
          )
        )
          return;
        optionsArray.push({
          optionName: locale?.includes("en")
            ? category?.cat_name
            : categoryToArabicKey[category?.cat_name],
          value: category?.cat_id,
        });
      });
      if (key === "category" && optionsArray?.length < 2) {
        filteredData[filterIndex?.[key]] = {
          filterName: locale.includes("en")
            ? filterKeysToEnglish[key]
            : filterKeysToArabic[key],
          filterOptions: [],
        };
        continue;
      }
      facetObject = {
        filterName: locale.includes("en")
          ? filterKeysToEnglish[key]
          : filterKeysToArabic[key],
        filterOptions: optionsArray.sort((a, b) =>
          a.value < b.value ? 1 : a.value > b.value ? -1 : 0
        ),
      };
      filteredData[filterIndex?.[key]] = facetObject;
    }
  }

  let facetObject = {};

  const optionsArray: { [key: string]: string }[] = [];
  optionsArray.push(
    {
      optionName: "min",
      value: priceRange?.min,
    },
    {
      optionName: "max",
      value: priceRange?.max,
    }
  );
  facetObject = {
    filterName: locale.includes("en")
      ? filterKeysToEnglish["price"]
      : filterKeysToArabic["price"],
    filterOptions: optionsArray,
  };
  filteredData[filterIndex?.["price"]] = facetObject;

  return filteredData;
};

export const getSortingType = (sortingValue: string) => {
  switch (sortingValue) {
    case "alpha":
      return "title+asc";
    case "price-desc":
      return "sale_price+desc,price+desc";
    case "price-asc":
      return "sale_price+asc,price+asc";
    case "best_seller":
      return "best_seller+desc";
    case "biggest_saving":
      return "discount_amount+desc";
    case "new_in":
      return "date_created+desc";
    case "most_viewed":
      return "";
    default:
      return "";
  }
};

export const createFacetFiltersString = (selectedFilters: any = {}) => {
  let params: any = {};
  if (!selectedFilters || Object.keys(selectedFilters).length === 0)
    return null;
  for (const key in selectedFilters) {
    const element = selectedFilters[key];
    let optionString = "";
    let diamondString = "";
    const selectedOptions = element?.selectedOptions;

    for (const key in selectedOptions) {
      const option = selectedOptions[key];
      if (option?.selected) {
        if (option?.value === "Diamonds" || option?.value === "ألماس") {
          diamondString = String(option?.value);
          continue;
        }
        if (option?.value === "Multicolored") {
          option.value = `Yellow & White Gold" OR "Yellow & Rose Gold" OR "White & Rose Gold" OR "Yellow White & Rose Gold`;
        }
        if (option?.value === "متعدد الألوان") {
          option.value = `ذهب أصفر وأبيض" OR "ذهب أصفر ووردى" OR "ذهب أبيض ووردى" OR "ذهب أصفر أبيض ووردى`;
        }
        if (optionString) {
          optionString = `${optionString}" OR "${option?.value}`;
        } else {
          optionString = `${option?.value}`;
        }
      }
    }

    // if (facetFilterString) {
    //     facetFilterString = `${facetFilterString} AND ${element?.name}:(${optionString})`;
    // } else {
    //     facetFilterString = `${element?.name}:(${optionString})`;
    // }
    if (diamondString) {
      params["diamonds"] = `diamonds:"${diamondString}"`;
    }
    if (!optionString) continue;
    if (element?.name === "اﻟﻔﺋﺔ") {
      // params.push({ fq: `category:"${optionString}"` });
      params["category"] = `category:"${optionString}"`;
    } else if (element?.name === "price") {
      // params.append("fq", `${element?.name}:${optionString}`)
      // params.push({ fq: `${element?.name}:${optionString}` });
      params[element?.name] = `${element?.name}:${optionString}`;
    } else {
      // params.append("fq", `${element?.name}:"${optionString}"`)
      // params.push({
      //   fq: `${
      //     filterEnglishKeys[element?.name] || element?.name
      //   }:"${optionString}"`,
      // });
      params[
        filterArabicKeysToKeys[element?.name] ||
          filterEnglishToKeys[element?.name]
      ] = `${
        filterArabicKeysToKeys[element?.name] ||
        filterEnglishToKeys[element?.name]
      }:"${optionString}"`;
    }
  }
  return params;
};

const facetKeyArray = [
  { name: "categoryFacet", facet: "category" },
  { name: "metalFacet", facet: "metal" },
  { name: "metalKaratFacet", facet: "metal_karat" },
  { name: "metalColorFacet", facet: "metal_color" },
  { name: "diamondFacet", facet: "diamonds" },
  { name: "brandFacet", facet: "brand" },
  { name: "typeFacet", facet: "type" },
  { name: "priceFacet", facet: "price" },
  { name: "collectionFacet", facet: "collection" },
  { name: "stoneFacet", facet: "stone" },
  { name: "skuFacet", facet: "product_sku" },
  { name: "capsuleFacet", facet: "capsule_type" },
  { name: "newInFacet", facet: "date_created" },
];
const facetKeyObj: any = {
  categoryFacet: "category",
  metalFacet: "metal",
  metalKaratFacet: "metal_karat",
  metalColorFacet: "metal_color",
  diamondFacet: "diamonds",
  brandFacet: "brand",
  typeFacet: "type",
  priceFacet: "price",
  collectionFacet: "collection",
  stoneFacet: "stone",
  skuFacet: "product_sku",
  capsuleFacet: "capsule_type",
  newInFacet: "date_created",
};

export const extractCmsFacets = async (andFacets: any, orFacets: any) => {
  let andFormat: any = {};

  for (const facetType of facetKeyArray) {
    const { name, facet } = facetType;
    const facetArray = andFacets?.[name]?.selectionValues;
    if (!facetArray) continue;
    if (andFacets?.hasOwnProperty(name) && facetArray[0]?.label) {
      let facetValues = "";
      for (const option of facetArray) {
        if (facetValues) {
          facetValues = `${facetValues}" OR "${String(option?.label)}`;
        } else {
          facetValues = `${String(option?.label)}`;
        }
      }

      if (name === "priceFacet" || name === "newInFacet") {
        andFormat[name] = `${facet}:${facetValues}`;
        continue;
      }
      andFormat[name] = `${facet}:("${facetValues}")`;
    }
  }
  return { and: { ...andFormat }, or: orFacets };
};

export const getFacetValues = (facets: any, selectedFilters: any) => {
  const facetValueArray = [];
  for (const facetType of facetKeyArray) {
    const { name, facet } = facetType;
    const facetArray = facets?.[name]?.selectionValues;
    if (!facetArray) continue;
    if (facets?.hasOwnProperty(name) && facetArray[0]?.label) {
      for (const key in facetArray) {
        const option = facetArray[key];
        facetValueArray?.push(option?.label);
      }
    }
  }
  for (const key in selectedFilters) {
    const selectedOptions = selectedFilters[key]?.selectedOptions;

    for (const key in selectedOptions) {
      const option = selectedOptions[key];
      if (option?.selected) {
        facetValueArray?.push(option?.value);
      }
    }
  }

  return facetValueArray;
};

export const getPagination = ({
  totalCount = 0,
  startIndex = 0,
  currentPage = null,
}) => {
  const hitsPerPage = 20;

  const totalPageCount = Math.ceil(totalCount / hitsPerPage);
  const currentPageRef = currentPage || Number(startIndex / hitsPerPage) + 1;
  const currentItemCount =
    totalCount <= Number(currentPageRef) * hitsPerPage
      ? totalCount
      : Number(currentPageRef * hitsPerPage);
  return {
    hitsPerPage: hitsPerPage,
    totalItemCount: totalCount,
    totalPageCount: totalPageCount,
    currentPage: currentPageRef,
    startIndex: currentItemCount,
    nextIndex: currentItemCount + hitsPerPage,
    currentItemCount: currentItemCount,
  };
};

export const scrollToTop = (
  listingWrapper: RefObject<{ offsetTop: number }>
) => {
  const header = document.getElementById("main-header");
  const headerHeight = header.getBoundingClientRect().height;
  const elementTop = listingWrapper?.current?.offsetTop;
  document.documentElement.scroll({
    top: elementTop - headerHeight,
    left: 0,
    behavior: "smooth",
  });
};

export const getBestSellerData = async (bestSellerData: any) => {
  if (bestSellerData?.response?.results?.length < 1) return {};
  const bestSellerArray = bestSellerData?.response?.results?.[0]?.value;
  const bestSellerSkusArray = bestSellerArray?.map((item: any) => {
    return { label: `${item?.product_id}` };
  });
  const bestSellerFacets = {
    skuFacet: {
      selectionValues: bestSellerSkusArray,
    },
  };
  return bestSellerFacets;
};

const setSearchBrand = (searchTerm: string, brand: string) => {
  if (!searchTerm) return {};
  const queryBrand = getBrandKey(brand as BrandType) === "missl" ? brand : "";
  return {
    brandFacet: {
      selectionValues: [{ label: `${queryBrand}` }],
    },
  };
};

const noStaticData = async ({
  component,
  page,
  searchTerm = false,
  bestSellerData = false,
  brand,
  region,
}: any) => {
  const categoryIdUnParsed = component?.getContent(page)?.categoryId || "";

  const facetArray = [];
  for (let index = 0; index < categoryIdUnParsed.length; index++) {
    const element = categoryIdUnParsed[index]
      ? JSON.parse(categoryIdUnParsed[index])
      : {};
    facetArray?.push({ key: "", label: element?.categoryid });
  }
  const categoryFacet = {
    categoryFacet: {
      sourceName: "category",
      selectionValues: facetArray,
    },
  };
  const query = searchTerm || (categoryIdByRegion as any)?.[region]?.root;
  let facets = null;
  const facetKey = component?.getContent(page)
    ? Object.keys(component?.getContent(page))?.find((key) =>
        key?.includes("facet")
      ) || null
    : null;
  const facetObject = facetKey ? component?.getContent(page)[facetKey] : [];
  let structerdFacetObject = {};
  for (const key in facetObject) {
    const facet = facetObject[key];
    const selectedFacets = [];
    if (Array?.isArray(facet) && facet?.length > 0) {
      for (const facetData of facet) {
        for (const key in facetData) {
          const innerFacet = facetData[key];
          if (typeof innerFacet !== "object") continue;
          selectedFacets.push({
            label: innerFacet?.selectionValues[0]?.label,
          });
        }
      }
      structerdFacetObject = {
        ...structerdFacetObject,
        [key]: {
          selectionValues: selectedFacets,
        },
      };
    }
  }
  facets = {
    filters: {
      ...structerdFacetObject,
      ...categoryFacet,
    },
    string: "",
  };

  const bestSellerSkus = await getBestSellerData(bestSellerData);
  const searchBrand = setSearchBrand(searchTerm, brand);

  return {
    facetState: {
      filters: { ...facets?.filters, ...bestSellerSkus, ...searchBrand },
      string: facets?.string,
    },
    query: query,
    facets: facets,
  };
  // setFacetState({
  //   filters: { ...facets?.filters, ...bestSellerSkus, ...searchBrand },
  //   string: facets?.string,
  // });
};

const getStaticData = async ({
  staticData = {},
  searchTerm = false,
  bestSellerData = false,
  brand,
  region,
}: any) => {
  const categoryId = staticData?.categoryId || "";
  const facets = staticData?.facets;
  let currentCategoryId = null;
  facets?.filters?.categoryFacet?.selectionValues?.forEach((facet: any) => {
    if (typeof facet?.label !== "string") return;
    facet.label = (categoryIdByRegion as any)?.[region]?.[facet?.label];
  });
  const bestSellerSkus = await getBestSellerData(bestSellerData);
  const searchBrand = setSearchBrand(searchTerm, brand);
  // setFacetState({
  //   filters: { ...facets?.filters, ...bestSellerSkus, ...searchBrand },
  //   string: facets?.string,
  // });
  currentCategoryId =
    facets?.filters?.categoryFacet?.selectionValues?.[0]?.label;
  const query =
    searchTerm ||
    currentCategoryId ||
    (categoryIdByRegion as any)?.[region]?.root;
  return {
    facetState: {
      filters: { ...facets?.filters, ...bestSellerSkus, ...searchBrand },
      string: facets?.string,
    },
    query: query,
    categorydId: categoryId,
  };
};

const getPaginationData = ({ plpData, path, routeQuery, locale }: any) => {
  const rawParentBreadCrumb = routeQuery?.category_parent as string;
  const rawChildBreadCrumb = routeQuery?.category_child as string;
  const lang = locale?.split("-")[0];
  const region = locale.split("-")[1];
  let missLbreadcrumb = "";
  if (path.split("/")[1] === "miss-l") {
    missLbreadcrumb = `/miss-l/${path.split("/")[2]}/${rawParentBreadCrumb}`;
  }
  const styledParentBreadCrumb = breadCrumbs?.[rawParentBreadCrumb]?.[lang];
  const styledChildBreadCrumb =
    rawChildBreadCrumb === "shop-all"
      ? breadCrumbs?.[rawChildBreadCrumb]?.[rawParentBreadCrumb]?.[lang]
      : breadCrumbs?.[rawChildBreadCrumb]?.[lang];

  const parentBCLink = `/${locale}/${
    missLbreadcrumb ||
    breadCrumbs?.[rawParentBreadCrumb]?.link ||
    rawParentBreadCrumb
  }`;

  return {
    ...getPagination({
      totalCount: plpData?.response?.numFound,
      startIndex: plpData?.response?.start,
    }),
    parentBreadcrumb: styledParentBreadCrumb || "",
    parentBCLink: parentBCLink,
    childBreachCrumb: styledChildBreadCrumb || "",
  };
};

export const generatePlpPageData = async ({
  component,
  page,
  path,
  query,
  locale,
  brand = "lazurde",
  configuration,
  pageProps,
  staticPlps,
  brUID,
}: {
  component: any;
  page: any;
  path: any;
  query: any;
  brand: BrandNameTypes;
  locale: LocaleType;
  configuration: any;
  staticPlps: any;
  pageProps: any;
  brUID: string | null;
}): Promise<any> => {
  let eqFacetsArray: any = {};
  let initialData: any = {};
  const region = locale?.split("-")?.[1];
  const lang = locale?.split("-")?.[0] as "en" | "ar";
  const brandName = currentBrandName(brand, lang)?.brand;
  const parent_category = (query?.category_parent as string) || "";
  const child_category = (query?.category_child as string) || "";
  const searchTerm = query?.keyword || "";
  let staticData = null;
  let isFromCMS = pageProps?.isFromCMS;
  const isCollection = pageProps?.isCollection;

  const convertParamsToFilters = (query: any, lang: string) => {
    let selectedFilters: any = {};
    for (const key in query) {
      const translatedKey = lang === "en" ? key : filterArabicKeysToKeys[key];
      if (
        key === "brand" ||
        key === "type" ||
        key === "color" ||
        key === "gold karat" ||
        key === "gemstone" ||
        key === "category" ||
        key === "price" ||
        key === "collection" ||
        key === "العلامة التجارية" ||
        key === "الفئة" ||
        key === "النوع" ||
        key === "اللون" ||
        key === "قيراط الذهب" ||
        key === "التشكيلة" ||
        key === "أحجار كريمة" ||
        key === "السعر"
      ) {
        const paramValue = decodeURIComponent(query[key]);
        const splitOptions = paramValue?.split("|");
        let selectedOptions = {};

        splitOptions?.forEach((option) => {
          const name = option?.split(":")[0];
          const value = option?.split(":")[1];
          selectedOptions = {
            ...selectedOptions,
            [name]: {
              selected: true,
              name: name,
              value: value,
            },
          };
        });
        const capitalizedString = key
          ?.split(" ")
          ?.map((word) => word.replace(/^./, word[0].toUpperCase()))
          .join(" ");
        selectedFilters = {
          ...selectedFilters,
          [filterIndex[translatedKey]]: {
            name: lang === "en" ? capitalizedString : key,
            selectedOptions: {
              ...selectedFilters?.[filterIndex[translatedKey]]?.selectedOptions,
              ...selectedOptions,
            },
          },
        };
      }
    }
    return selectedFilters;
  };

  const selectedFilters = convertParamsToFilters(query, lang);
  const filteredData = createFacetFiltersString(selectedFilters);

  const dynamicPLPs = LAZURDE_ENV == "true" &&
    staticPlps?.[locale]?.[brand]?.[parent_category]?.dynamicID

  if (dynamicPLPs) {
    isFromCMS = false
  }

  if (isFromCMS) {
    initialData = await noStaticData({
      component,
      page,
      brand: brandName,
      searchTerm,
      region: region,
    });
  }

  if (!isFromCMS) {
    if (child_category) {
      staticData =
        staticPlps?.[locale]?.[brand]?.[parent_category]?.children?.[
          child_category
        ];
    } else {
      staticData = staticPlps?.[locale]?.[brand]?.[parent_category];
    }

    initialData = await getStaticData({
      staticData: staticData?.plpComponent,
      brand: brandName,
      region: region,
      searchTerm,
    });
  }

  eqFacetsArray = await extractCmsFacets(
    initialData?.facetState?.filters,
    initialData?.facetState?.string
  );

  const _parentCategory =
    (LAZURDE_ENV == "true" &&
      staticPlps?.[locale]?.[brand]?.[parent_category]?.dynamicID) ||
    (LAZURDE_ENV == "true" &&
      staticPlps?.[locale]?.[brand]?.[parent_category?.split("-")[0]]
        ?.dynamicID) ||
    null;

  const _childCategory =
    (LAZURDE_ENV == "true" &&
      staticPlps?.[locale]?.[brand]?.[parent_category]?.children?.[
        child_category
      ]?.dynamicID) ||
    (LAZURDE_ENV == "true" &&
      staticPlps?.[locale]?.[brand]?.[parent_category?.split("-")[0]]
        ?.children?.[child_category]?.dynamicID) ||
    null;

  const activeStaticPlps = _childCategory || _parentCategory;
  
  let enabledDefaultSorting = false;

  if (region === "sa" && (child_category === "" && parent_category === "shop-all" || child_category === "" && parent_category === "jewelry" || child_category === "" && parent_category === "instyle" || child_category === "" && parent_category === "gold-jewelry")) {
    enabledDefaultSorting = true
  }

  let productData: any = {};
  if (!path?.includes("best-sellers")) {
    const pageNum = query?.page - 1 || 0;
    let pageData = null;
    for (let index = 0; index <= pageNum; index++) {
      pageData = await getAllProducts({
        query:
          searchTerm ||
          (LAZURDE_ENV == "true" &&
            _childCategory !== null &&
            _childCategory) ||
          (LAZURDE_ENV == "true" &&
            _parentCategory !== null &&
            _parentCategory) ||
          (categoryIdByRegion as any)?.[region]?.root,
        searchTerm: searchTerm ? true : false,
        sorting:
          region === "ae" || enabledDefaultSorting
            ? getSortingType(query?.sort)
            : getSortingType(query?.sort || "best_seller"),
        facets: filteredData,
        eqFacets: !activeStaticPlps && eqFacetsArray,
        pageNum: 20 * index,
        locale: locale,
        childCategoryName: searchTerm ? "search" : query?.category_child,
        parentCategoryName: searchTerm ? "search" : query?.category_parent,
        brUID,
      });
      if (index == 0) {
        productData = pageData;
      }
      if (index > 0) {
        productData = {
          ...pageData,
          response: {
            ...pageData?.response,
            docs: [...productData?.response?.docs, ...pageData?.response?.docs],
          },
        };
      }
    }
  }

  const paginationData = getPaginationData({
    plpData: productData,
    path,
    routeQuery: query,
    locale: locale,
  });

  const fitlers = createFilterData({
    facets: productData?.facet_counts?.facet_fields,
    priceRange: productData?.stats?.stats_fields?.price,
    locale: locale,
    brand: brandName,
  });

  if (!searchTerm && !isFromCMS && (!staticData || !staticData?.plpComponent)) {
    if (child_category && child_category !== `shop-all`) {
      return {
        redirect: {
          destination:
            parent_category === "blog"
              ? brand === "miss-l"
                ? `/${locale}/miss-l/jewelry/shop-all`
                : `/${locale}/jewelry`
              : brand === "miss-l"
              ? `/${locale}/miss-l/jewelry${parent_category}/shop-all`
              : `/${locale}/${parent_category}/shop-all`,
          permanent: false,
        },
      };
    }
    return {
      notFound: true,
    };
  }

  return {
    props: {
      configuration,
      page: page.toJSON(),
      locale: locale,
      parentCategory: query?.category_parent || "",
      childCategory: query?.category_child || "",
      url: path.split("?")[0] || null,
      path: path,
      currentPage: query?.page || 1,
      plpData: staticData ? JSON.stringify(staticData) : null,
      isFromCMS: isFromCMS,
      referer: pageProps?.referer,
      host: pageProps?.host,
      isCollection,
      searchTerm,
      isPreview: false,
      productData: JSON.stringify({
        ...productData,
        pagination: paginationData,
        filters: fitlers,
        selectedFilters: selectedFilters,
        eqFacetsArray,
        initialData,
        sortingValue: query?.sort,
      }),
    },
  };
};

export const deleteParam = (router: any) => {
  delete router.query?.["brand"];
  delete router.query?.["type"];
  delete router.query?.["color"];
  delete router.query?.["gold karat"];
  delete router.query?.["gemstone"];
  delete router.query?.["category"];
  delete router.query?.["price"];
  delete router.query?.["collection"];
  delete router.query?.["page"];
  delete router.query?.["العلامة التجارية"];
  delete router.query?.["الفئة"];
  delete router.query?.["النوع"];
  delete router.query?.["اللون"];
  delete router.query?.["قيراط الذهب"];
  delete router.query?.["التشكيلة"];
  delete router.query?.["أحجار كريمة"];
  delete router.query?.["السعر"];
};
