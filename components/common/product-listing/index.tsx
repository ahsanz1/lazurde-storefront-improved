/* eslint-disable @next/next/no-img-element */
import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import ProductCard from "components/common/product-card/ProductCard";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import BreadCrumbs from "components/common/ui/bread-crumbs";
import PlpPagination from "../ui/plp-pagination";
import FilterBarMain from "../filter-bar";
import SearchResultsInfo from "../search-results-info";
import {
  BrComponentContext,
  BrPageContext,
  BrProps,
} from "@bloomreach/react-sdk";
import { Page, Reference } from "@bloomreach/spa-sdk";
import Link from "next/link";

import {
  createFacetFiltersString,
  createFilterData,
  deleteParam,
  extractCmsFacets,
  getAllProducts,
  getBestSellerData,
  getFacetValues,
  getPagination,
  getSortingType,
} from "./functions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../ui/button";
import { useRouter } from "next/router";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { breadCrumbs, desktopScreenSize } from "lib/utils/common";
import { AppContext } from "lib/context";
import { BrandType, LocaleType, StaticPlpData } from "lib/types/common";
import { getBrandKey } from "lib/utils/constants";
import {
  bestSellerIds,
  categoryIdByRegion,
  customersAlsoBuyIds,
  isDev,
} from "general-config";
import { engagementCustomerAttr } from "lib/middleware-apis/customers";
import BloomreachCategoryPagePixel from "../bloomreach-pixel/category-page";
import SellerCardSlider from "../best-seller-card-slider";
import { viewCategoryEvent } from "lib/utils/datalayer-events";
import { CartObject } from "lib/types/cart";
import Script from "next/script";

type ApiResponseProps = {
  category_map: {};
  facet_counts: {
    facet_fields: {};
  };
  stats: { stats_fields: { price: {} } };
  response: {
    docs: [];
    numFound: number;
    start: number;
  };
};

type SelectedFilterProps = {
  [key: string]: {
    name: string;
    selectedOptions: {
      [key: string | number]: {
        selected: boolean;
        name: string;
        value: string | string[];
      };
    };
  };
};

interface ProductListingProps extends BrProps {
  categoryName?: string;
  filterList?: any;
  showBreadcrumb?: boolean;
  searchTerm?: string;
  facets?: { [key: string]: {} };
  bcProducts?: any[];
  component?: any;
  staticData?: StaticPlpData;
  page?: Page;
  referer?: string;
  seo?: { [key: string]: string };
  scriptId?: number;
  productData: any;
  host?: any;
  staticPlps?: any;
}

const ProductListing = ({
  categoryName = "",
  showBreadcrumb = true,
  searchTerm = "",
  // page,
  // component,
  staticData = null,
  referer,
  seo,
  productData,
  scriptId,
  host,
  staticPlps,
}: ProductListingProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState, sideBarChild, exponeaCookie } = useContext(AppContext);
  const listingWrapper = useRef<HTMLInputElement>();
  const [filteredListData, setFilteredListData] = useState<any>(
    productData?.filters
  );
  const filteredListDataRef = useRef<any>(productData?.filters);
  const [currentProductData, setCurrentProductData] = useState(
    productData?.response?.docs
  );
  const [completeApiResponse, setCompleteApiResponse] = useState<any>({});
  const [emptyProductData, setEmptyProductData] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(
    productData?.selectedFilters || {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasFilteredData, setHasFilteredData] = useState(false);
  const [totalSelectedFilterCount, setTotalSelectedFilterCount] = useState(
    productData?.pagination?.totalItemCount
  );
  const [currentSortingValue, setCurrentSortingValue] = useState<any>("");
  const router = useRouter();
  const [size] = useWindowSize();
  let childCategoryName = router?.query?.["category_child"] as string;
  const parentCategoryName = router?.query?.["category_parent"] as string;
  const queryClient = useQueryClient();
  const customer: any = queryClient.getQueryData(["customerData"]);

  const routerRegion = router?.locale?.split("-")[1];
  const observerRef = useRef(null);
  const observer = useRef(null);
  const headerRef = useRef(null);
  const filterBar = useRef(null);
  const page: any = useContext(BrPageContext);
  const component: any = useContext(BrComponentContext);
  let searchParams =
    typeof window != "undefined" && new URL(window.location.href).searchParams;
  // const searchParams = new URL(window.location).searchParams;
  let currentPage =
    searchParams && searchParams?.has("page")
      ? Number(searchParams?.get("page"))
      : 1;
  const [paginationData, setPaginationData] = useState<any>({
    ...productData?.pagination,
  });
  let query: string = String((categoryIdByRegion as any)?.[routerRegion]?.root);
  let categoryId: number | string = null;
  let facets: any = {};
  let bubbleLinks = [];
  let ribbons: {
    [key: string]: {
      color: string;
      text: string;
    };
  } = null;

  useEffect(() => {
    if ((childCategoryName || parentCategoryName) === "best-sellers") return;
    setPaginationData({
      ...productData?.pagination,
    });
  }, [router?.query?.page]);

  headerRef.current =
    !headerRef.current && typeof document !== "undefined"
      ? document.querySelector("#main-header")
      : headerRef.current;

  useEffect(() => {
    if (!headerRef.current) return null;
    const headerHeight = headerRef.current
      ? headerRef.current?.getBoundingClientRect()?.height
      : 300;
    if (!headerRef.current.classList.contains("plp-header-visible")) {
      headerRef.current.style.top = `-${headerHeight}px`;
    }
  }, [headerRef.current]);

  useEffect(() => {
    if (!headerRef.current) return null;
    const headerHeight = headerRef.current
      ? headerRef.current?.getBoundingClientRect()?.height
      : 300;

    const userNavbar = document.querySelector("#user-navbar" as any);
    if (headerRef.current.classList.contains("plp-header-visible")) {
      if (sideBarChild?.drawerOpen) {
        if (userNavbar) {
          userNavbar.style.display = "flex";
          headerRef.current.style.top = "0px";
        }
      } else {
        if (userNavbar) {
          // userNavbar.style.display = "none";
          // headerRef.current.style.top = `-${headerHeight}px`;
        }
      }
    } else {
      if (sideBarChild?.drawerOpen) {
        headerRef.current.style.top = "0px";
        if (userNavbar) {
          userNavbar.style.display = "flex";
        }
        // headerRef.current.classList.add("plp-header-visible");
      } else {
        // headerRef.current.classList.remove("plp-header-visible");

        headerRef.current.style.top = `-${headerHeight}px`;
      }
    }
  }, [sideBarChild?.drawerOpen]);

  useEffect(() => {
    if (!observerRef.current) return;
    observer.current = new IntersectionObserver(
      (entries) => animateBars(entries),
      {
        threshold: 0.1,
      }
    );
    observerRef.current && observer.current.observe(observerRef.current);
    // window.addEventListener("scroll", (() => {

    // }));

    return () => {
      // containerRef.current && observer.current.unobserve(containerRef.current);
    };
  }, [observerRef.current]);

  let enabledDefaultSorting = false;

  if (
    routerRegion === "sa" &&
    ((childCategoryName === undefined && parentCategoryName === "shop-all") ||
      (childCategoryName === undefined && parentCategoryName === "jewelry") ||
      (childCategoryName === undefined && parentCategoryName === "instyle") ||
      (childCategoryName === undefined && parentCategoryName === "diamond-jewelry") ||
      (childCategoryName === "shop-all" && parentCategoryName === "diamond") ||
      (childCategoryName === undefined &&
        parentCategoryName === "gold-jewelry"))
  ) {
    enabledDefaultSorting = true;
  }

  const animateBars = (observerDiv: any): any => {
    if (window.scrollY === 0) return;
    filterBar.current =
      typeof document !== "undefined"
        ? document.querySelector("#filter-bar")
        : filterBar.current;
    headerRef.current =
      typeof document !== "undefined"
        ? document.querySelector("#main-header")
        : headerRef.current;

    if (!headerRef.current || !filterBar.current) return null;
    filterBar.current.style.transition = "top 0.23s ease";
    const promoBar = document.querySelector("#promo-bar" as any);
    const langBar = document.querySelector("#navbar-lang" as any);

    observerDiv.forEach(async (entry: any) => {
      const headerHeight = headerRef.current
        ? headerRef.current?.getBoundingClientRect()?.height
        : 300;

      if (entry?.isIntersecting) {
        headerRef.current.style.transition = "top 0.1s ease";
        if (promoBar) promoBar.style.display = "flex";
        if (langBar) langBar.style.display = "flex";
        headerRef.current.classList.remove("plp-header-visible");
        filterBar.current.style.top = "-100px";
      } else {
        headerRef.current.style.transition = "top 0.23s ease";
        setTimeout(() => {
          headerRef.current.classList.add("plp-header-visible");
        }, 0);
        if (promoBar) promoBar.style.display = "none";
        if (langBar) langBar.style.display = "none";
        filterBar.current.style.top = `0px`;
      }
    });
  };

  if (!staticData && !searchTerm) {
    bubbleLinks = component?.getContent(page)?.bubbleLinks || [];
    const ribbonsRef = component?.getContent(page)?.ribbons || {};
    const ribbonData = ribbonsRef && page?.getContent(ribbonsRef);
    ribbons = ribbonData && ribbonData?.getData();
    const plpCollectionImages = component?.getContent(page)?.collectionImages;
    var collectionImagesArray: string[] =
      plpCollectionImages &&
      plpCollectionImages.map((imagesRef: any) => {
        const findImageLink: any = imagesRef && page?.getContent(imagesRef);
        const imageLink =
          findImageLink && findImageLink?.getOriginal()?.getUrl();
        return imageLink;
      });
  }

  if (staticData) {
    bubbleLinks = staticData?.bubbleLinks;
    ribbons = staticData?.ribbons;
    var collectionImagesArray: string[] = staticData?.collectionImages;
  }

  if (searchTerm) {
    childCategoryName = "search";
  }

  const {
    data: bestSellerData,
    isLoading: isBestSellerLoading,
    isFetched,
  } = useQuery(
    [
      "plpBestSellerData",
      router?.locale,
      router?.query?.category_parent,
      router?.query?.category_child,
    ],
    async () => {
      const customerData: any = queryClient.getQueryData(["customerData"]);
      const id = customerData?.email ? "email_id" : "cookie";
      const recommendationPayload = {
        customer_ids: {
          [id]: customerData?.email || exponeaCookie?.[appState?.region],
        },
        attributes: [
          {
            type: "recommendation",
            id: bestSellerIds?.[
              getBrandKey(appState?.brandEN) as "lazurde" | "missl"
            ]?.[router?.locale as LocaleType],
            fillWithRandom: false,
            size: 500,
          },
        ],
      };
      const resp = await engagementCustomerAttr(
        recommendationPayload,
        appState?.region
      );
      return resp;
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      enabled:
        (childCategoryName || parentCategoryName) === "best-sellers" &&
        ((queryClient.getQueryData(["customerData"]) as any)?.email ??
          exponeaCookie?.[appState?.region]) !== undefined,
    }
  );

  // let eqFacetsArray: any = {};
  // eqFacetsArray = extractCmsFacets(facetState?.filters, facetState?.string);
  useLayoutEffect(() => {
    if ((childCategoryName || parentCategoryName) === "best-sellers") return;

    setEmptyProductData(productData?.response?.docs?.length === 0);
    setCurrentProductData(productData?.response?.docs);
    setFilteredListData(productData?.filters);
    filteredListDataRef.current = productData?.filters;
    setPaginationData(productData?.pagination);
  }, [productData]);

  useLayoutEffect(() => {
    if ((childCategoryName || parentCategoryName) !== "best-sellers") return;
    if (!isFetched) return;

    if (
      !bestSellerData?.response?.results?.[0]?.success ||
      bestSellerData?.response?.results?.[0]?.value?.length < 1
    ) {
      setEmptyProductData(true);
      return;
    }

    const _parentCategory =
      staticPlps?.[router?.locale]?.[appState?.brandEN]?.[parentCategoryName]
        ?.plpComponent ||
      staticPlps?.[router?.locale]?.[appState?.brandEN]?.[
        parentCategoryName?.split("-")[0]
      ]?.plpComponent;

    const _childCategory =
      staticPlps?.[router?.locale]?.[appState?.brandEN]?.[parentCategoryName]
        ?.children?.[childCategoryName]?.plpComponent ||
      staticPlps?.[router?.locale]?.[appState?.brandEN]?.[
        parentCategoryName?.split("-")[0]
      ]?.children?.[childCategoryName]?.plpComponent;

    if (bestSellerData?.response?.results?.[0]?.value?.length > 0) {
      (async () => {
        const bestSellerSkus = await getBestSellerData(bestSellerData);

        const eqFacetsArray = await extractCmsFacets(
          {
            ...productData?.initialData?.facetState?.filters,
            ...bestSellerSkus,
          },
          productData?.initialData?.facetState?.string
        );
        productData = {
          ...productData,
          eqFacetsArray: eqFacetsArray,
        };
        const filteredData = createFacetFiltersString(
          productData?.selectedFilters || ""
        );

        const selectedFacetValues = getFacetValues(
          facets?.filters,
          selectedFilters
        );
        const pageNum = Number(router?.query?.page) || 1;

        // const currentData =
        //   queryClient?.getQueryData<ApiResponseProps>([
        //     "productList",
        //     query,
        //     ...selectedFacetValues,
        //     router.locale,
        //     appState?.brand,
        //     productData?.eqFacetsArray,
        //   ])?.response?.docs || [];
        queryClient?.fetchQuery(
          [
            "productList",
            query,
            ...selectedFacetValues,
            router.locale,
            appState?.brand,
            productData?.eqFacetsArray,
          ],
          async () => {
            const newData: ApiResponseProps = await getAllProducts({
              // searchTerm: searchTerm,
              query: searchTerm || _childCategory || _parentCategory || query,
              sorting:
                appState?.region === "ae" || enabledDefaultSorting
                  ? getSortingType(productData?.sortingValue)
                  : getSortingType(productData?.sortingValue || "best_seller"),
              facets: filteredData,
              eqFacets: productData?.eqFacetsArray,
              // pageNum: Math.abs(pageNum - 1) * paginationData?.hitsPerPage,
              pageNum: 0,
              rows: Number(pageNum * 20),
              locale: router.locale,
              childCategoryName: childCategoryName,
            });
            let data = { ...newData };
            if (pageNum > 1) {
              data = {
                ...newData,
                response: {
                  ...newData?.response,
                  docs: [...newData?.response?.docs],
                },
              };
            }
            setPlpData({ apiResponse: data });

            return data;
          }
        );
        // updateProductArray({}, currentSortingValue, 1);
      })();
    }
  }, [isFetched, router?.asPath]);

  useEffect(() => {
    // if (typeof window != "undefined") {
    //   const newURL = new URL(window.location.href);
    //   let searchParams = newURL.searchParams;
    //   let currentPage =
    //     searchParams && searchParams?.has("page")
    //       ? Number(searchParams?.get("page"))
    //       : 1;
    //   if (
    //     currentPage !== 1 ||
    //     (searchParams && searchParams?.has("view-all"))
    //   ) {
    //     newURL.search = ``;
    //     window.history.replaceState({ path: newURL.href }, "", newURL.href);
    //     currentPage = 1;
    //   }
    // }
    // setFilteredListData([]);
    // filteredListDataRef.current = [];
    const selectedFacetValues = getFacetValues(
      facets?.filters,
      selectedFilters
    );
    setSelectedFilters(productData?.selectedFilters);
    // let totalCount = 0;

    // const currentSelectedFilters = productData?.selectedFilters || {};
    // for (let index = 0; index < currentSelectedFilters?.length; index++) {
    //   const filterTitle = currentSelectedFilters?.[index];
    //   const count =
    //     filterTitle &&
    //     Object.keys(productData?.selectedFilters[filterTitle]?.selectedOptions)
    //       ?.length;

    //   totalCount = Number(totalCount) + Number(count);
    // }
    setTotalSelectedFilterCount(selectedFacetValues?.length);
    setCurrentSortingValue(productData?.sortingValue);

    // setPaginationData({
    //   hitsPerPage: 20,
    //   totalItemCount: 0,
    //   totalPageCount: 0,
    //   currentPage: 1,
    //   startIndex: 0,
    //   currentItemCount: 20,
    // });

    // if (staticData) {
    //   getStaticData();
    // }

    queryClient?.setQueryData(
      [
        "productList",
        query,
        ...selectedFacetValues,
        router.locale,
        appState?.brand,
        productData?.eqFacetsArray,
      ],
      productData
    );
  }, [router?.asPath]);

  useEffect(() => {
    // scrollToTop(listingWrapper);
    // document.documentElement.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   setPlpData({ apiResponse: data });
  // }, [data]);

  const getEveryNthValue = (arr: any, nth: any) => {
    const result = [];

    for (let index = 0; index < arr.length; index += nth) {
      result.push(arr[index]);
    }

    return result;
  };

  const mySet1 = new Set();
  currentProductData?.forEach((element: any, index: number) => {
    let indexSet = index % currentProductData?.length;
    mySet1?.add(indexSet);
  });

  const myAllSet = Array.from(mySet1);
  const getNthValue = getEveryNthValue(myAllSet, 3);

  const odds = collectionImagesArray?.filter(
    (imgs: string, index: number) => imgs && index % 2 === 1
  );
  const oddsIndex = getNthValue?.filter(
    (imgs: string, index: number) => imgs && index % 2 === 1
  );

  const evens = collectionImagesArray?.filter(
    (imgs: string, index: number) => imgs && index % 2 === 0
  );
  const evensIndex = getNthValue?.filter((imgs: string, index: number) =>
    imgs && size > desktopScreenSize ? index % 2 === 0 : index % 2 === 0
  );

  const getNthValueMobile = getEveryNthValue(myAllSet, 2);
  const productAdjust = getNthValueMobile.slice(1);

  const indexOne = productAdjust?.indexOf(1);

  if (indexOne !== -1) {
    productAdjust[indexOne] = 0;
  }

  const newArr = productAdjust.map((num) => num + 1);
  const updatedArr = getEveryNthValue(newArr, 2);

  const responsiveProducts =
    size > desktopScreenSize
      ? paginationData?.currentPage
      : paginationData?.currentPage + 3;

  const setPlpData = ({
    apiResponse,
  }: {
    apiResponse: ApiResponseProps;
    setFilterData?: boolean;
  }): (() => null) => {
    if (!apiResponse) {
      setEmptyProductData(true);
      return null;
    }

    if (apiResponse?.response?.docs?.length < 1) {
      setEmptyProductData(true);
      // setFilteredListData([]);
    } else {
      setEmptyProductData(false);
    }

    if (apiResponse?.response?.docs?.length > 0) {
      const filteredData = createFilterData({
        facets: apiResponse?.facet_counts?.facet_fields,
        priceRange: apiResponse?.stats?.stats_fields?.price,
        locale: router?.locale,
        brand: appState?.brandEN,
      });

      setFilteredListData(filteredData);
      filteredListDataRef.current = filteredData;
    }

    let missLbreadcrumb = "";

    // const parentBCLink = router?.asPath?.split("?")[0].split("/")[1];
    const rawParentBreadCrumb = router?.query?.category_parent as string;
    const rawChildBreadCrumb = router?.query?.category_child as string;
    if (router?.pathname?.split("/")[1] === "miss-l") {
      missLbreadcrumb = `/miss-l/${
        router?.pathname?.split("/")[2]
      }/${rawParentBreadCrumb}`;
    }
    const styledParentBreadCrumb =
      breadCrumbs?.[rawParentBreadCrumb]?.[appState?.lang];
    const styledChildBreadCrumb =
      rawChildBreadCrumb === "shop-all"
        ? breadCrumbs?.[rawChildBreadCrumb]?.[rawParentBreadCrumb]?.[
            appState?.lang
          ]
        : breadCrumbs?.[rawChildBreadCrumb]?.[appState?.lang];

    const parentBCLink = `/${router?.locale}/${
      missLbreadcrumb ||
      breadCrumbs?.[rawParentBreadCrumb]?.link ||
      rawParentBreadCrumb
    }`;

    setPaginationData({
      ...getPagination({
        totalCount: apiResponse?.response?.numFound,
        startIndex: apiResponse?.response?.start,
        currentPage: Number(router?.query?.page),
      }),
      parentBreadcrumb: styledParentBreadCrumb || "",
      parentBCLink: parentBCLink,
      childBreachCrumb: styledChildBreadCrumb || "",
    });
    setCurrentProductData([...apiResponse?.response?.docs]);
    setCompleteApiResponse({ ...apiResponse });
    setIsLoading(false);
  };

  const updateProductArray = async (
    filters: SelectedFilterProps,
    sortingValue: string = currentSortingValue,
    pageNum: number = currentPage
  ) => {
    setIsLoading(true);
    currentPage = pageNum;
    setCurrentSortingValue(sortingValue);
    if (Object.keys(filters)?.length < 1) {
      setHasFilteredData(false);
      setTotalSelectedFilterCount(0);
    } else {
      setHasFilteredData(true);
    }
    let totalCount = 0;
    let facetsArray: any = {};
    // let eqFacetsArray: any = {};
    // eqFacetsArray = await extractCmsFacets(
    //   facetState?.filters,
    //   facetState?.string
    // );

    // const selectedFacetValues = getFacetValues(
    //   facets?.filters,
    //   selectedFilters
    // );
    facetsArray = createFacetFiltersString(filters);

    for (let index = 0; index < Object.keys(filters)?.length; index++) {
      const filterTitle = Object.keys(filters)?.[index];
      const count =
        filterTitle &&
        Object.keys(filters[filterTitle]?.selectedOptions)?.length;

      totalCount = Number(totalCount) + Number(count);
    }

    const generateFilterParams = (filters: any) => {
      let filterString = {};
      for (const index in filters) {
        const filterObj = filters[index];
        let allOptions = "";
        for (const key in filterObj?.selectedOptions) {
          const selectedFilter = filterObj?.selectedOptions[key];
          allOptions = allOptions
            ? `${allOptions}|${selectedFilter?.name}:${selectedFilter?.value}`
            : `${selectedFilter?.name}:${selectedFilter?.value}`;
        }
        filterString = {
          ...filterString,
          [filterObj.name.toLowerCase()]: allOptions,
        };
        // filterString = filterString
        //   ? `${filterString}&${filterObj?.name?.toLowerCase()}=${allOptions}`
        //   : `${filterObj?.name?.toLowerCase()}=${allOptions}`;
      }
      return filterString;
    };
    const paramFilters = generateFilterParams(filters);
    setTotalSelectedFilterCount(totalCount);
    setSelectedFilters(filters);
    deleteParam(router);
    router.push(
      {
        query: { ...router.query, ...paramFilters, sort: sortingValue },
      },
      undefined,
      { locale: router?.locale, scroll: true }
    );

    // const currentData =
    //   queryClient?.getQueryData<ApiResponseProps>([
    //     "productList",
    //     query,
    //     ...selectedFacetValues,
    //     router.locale,
    //     appState?.brand,
    //     productData?.eqFacetsArray,
    //   ])?.response?.docs || [];

    // queryClient?.fetchQuery(
    //   [
    //     "productList",
    //     query,
    //     ...selectedFacetValues,
    //     router.locale,
    //     appState?.brand,
    //     productData?.eqFacetsArray,
    //   ],
    //   async () => {
    //     const newData: ApiResponseProps = await getAllProducts({
    //       // searchTerm: searchTerm,
    //       query: searchTerm || "*",
    //       sorting: getSortingType(sortingValue),
    //       facets: facetsArray,
    //       eqFacets: productData?.eqFacetsArray,
    //       pageNum: Math.abs(pageNum - 1) * paginationData?.hitsPerPage,
    //       locale: router.locale,
    //       childCategoryName: childCategoryName,
    //     });
    //     let data = { ...newData };
    //     if (pageNum > 1) {
    //       data = {
    //         ...newData,
    //         response: {
    //           ...newData?.response,
    //           docs: [...currentData, ...newData?.response?.docs],
    //         },
    //       };
    //     }
    //     setPlpData({ apiResponse: data });

    //     return data;
    //   }
    // );
  };

  // const brCategoryStaticFilters = staticData?.facets?.filters;
  // const brCategoryStaticSelectionValues =
  //   (brCategoryStaticFilters as any)?.categoryFacet?.selectionValues || [];

  // const { label: brCat = "" } =
  //   brCategoryStaticSelectionValues.length > 0
  //     ? brCategoryStaticSelectionValues[0]
  //     : {};
  const typedCategoryIdByRegion: any = categoryIdByRegion;
  let brCatId = null;
  let brCat = productData?.initialData?.query;
  // brCatId = typedCategoryIdByRegion[routerRegion][brCat.toLowerCase()];

  // const filtersLengthRef = useRef(totalSelectedFilterCount);
  // if (filtersLengthRef.current !== totalSelectedFilterCount) {
  //   scriptIdRef.current = Math.random() * (1000000 - 1) + 1;
  //   filtersLengthRef.current = totalSelectedFilterCount;
  // }

  const scriptIdRef = useRef(Math.random() * (1000000 - 1) + 1);
  const catObj = typedCategoryIdByRegion[routerRegion];
  const catName = Object.keys(catObj).find((key) => catObj[key] === brCat);
  scriptIdRef.current = scriptId;

  useEffect(() => {
    viewCategoryEvent(
      currentProductData,
      paginationData,
      appState,
      customer?.entityId
    );
  }, [currentProductData]);

  return (
    <>
      {brCat && catName && (
        <BloomreachCategoryPagePixel
          cat={catName}
          cat_id={brCat}
          pageTitle={
            (page as any)?.getDocument()?.getData()?.title || seo?.title
          }
          defaultValueIfNoCatValue={
            facets?.collectionFacet?.selectionValues?.[0]?.label
          }
          referer={referer}
          scriptIdRef={scriptIdRef}
        />
      )}
      {showBreadcrumb && (
        <BreadCrumbs
          parent={paginationData?.parentBreadcrumb}
          parentLink={paginationData?.parentBCLink}
          child={paginationData?.childBreachCrumb || searchTerm}
        />
      )}
      <SearchResultsInfo
        searchTerm={searchTerm}
        totalItems={Number(paginationData?.totalItemCount)}
        hasFilteredData={hasFilteredData}
        isEmptyArray={emptyProductData}
        isLoading={isLoading}
      />
      {completeApiResponse &&
      completeApiResponse?.hasOwnProperty("did_you_mean") &&
      completeApiResponse?.did_you_mean?.length > 0 ? (
        <div
          className={styles["wrapper-did-you-mean"]}
          style={{
            padding: "10px 0px 0px 80px",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          {`Did you mean: `}
          <Link
            href={`/s?brand=${appState?.brand}&keyword=${completeApiResponse?.did_you_mean[0]}`}
          >
            <a>{completeApiResponse?.did_you_mean[0]}</a>
          </Link>
        </div>
      ) : null}
      {searchTerm && !isLoading && currentProductData?.length < 1 ? (
        <>
          {appState?.brandEN !== "Instyle" && (
            <>
              <SellerCardSlider
                engagementid={
                  customersAlsoBuyIds?.[
                    getBrandKey(appState?.brandEN) as "lazurde" | "missl"
                  ]?.[router?.locale as LocaleType]
                }
                heading={t("YouMayAlsoLike")}
              />
            </>
          )}
        </>
      ) : (
        <div
          ref={listingWrapper}
          className={styles["product-listing__wrapper"]}
          data-hide={
            searchTerm && !isLoading && !hasFilteredData && emptyProductData
          }
          data-div-order="3"
        >
          {/* {showBreadcrumb && (
          <BreadCrumbs
            parent={paginationData?.parentBreadcrumb}
            parentLink={paginationData?.parentBCLink}
            child={paginationData?.childBreachCrumb || searchTerm}
          />
        )} */}

          <PlpPagination
            paginationClass={styles["div-pagination"]}
            hitsPerPage={paginationData?.hitsPerPage}
            totalItemCount={paginationData?.totalItemCount}
            totalPages={paginationData?.totalPageCount}
            currentPage={Number(paginationData?.currentPage)}
            currentItemCount={paginationData?.currentItemCount}
            startIndex={paginationData?.startIndex}
            dataArray={currentProductData}
            currentSortingValue={currentSortingValue}
            selectedFilters={selectedFilters}
            onPageChange={updateProductArray}
            isLoading={isLoading}
          >
            <>
              {bubbleLinks?.length > 0 && bubbleLinks?.[0]?.linkText ? (
                <div style={{ overflowX: "auto" }}>
                  <div className={styles["recommendation-bubbles"]}>
                    {bubbleLinks?.map(
                      (bubble: { link: Reference; linkText: string }) => {
                        const { link, linkText } = bubble;
                        const linkUrl =
                          typeof link === "string" || link instanceof String
                            ? (link as any)
                            : page?.getContent(link)?.getUrl();
                        return (
                          <Button
                            className={styles["bubble"]}
                            key={linkText}
                            buttonStyle="white"
                            hover={true}
                          >
                            <Link href={linkUrl || "/"}>
                              <a>{linkText}</a>
                            </Link>
                          </Button>
                        );
                      }
                    )}
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <FilterBarMain
                currentSortingValue={currentSortingValue}
                setCurrentSortingValue={setCurrentSortingValue}
                updateProductArray={updateProductArray}
                filterList={filteredListData}
                hasFilteredData={hasFilteredData}
                selectedFilters={selectedFilters}
                totalSelectedFilterCount={totalSelectedFilterCount}
                defaultSorting={enabledDefaultSorting}
              />

              <div ref={observerRef} style={{}} />

              <div
                className={styles["product-listing__cards"]}
                id="cards-wrapper"
              >
                {Array.isArray(currentProductData) &&
                  currentProductData?.map((product, index) => {
                    const {
                      title = "",
                      pid,
                      price,
                      sale_price,
                      currency = "",
                      variants = {},
                      product_sku = "",
                      product_images = [],
                      inventory_level = 0,
                      discount_percentage = 0,
                      product_tag,
                      product_tag_ar,
                    }: any = product;
                    return (
                      <>
                        <ProductCard
                          key={pid}
                          index={pid}
                          item={product}
                          title={title}
                          sku={product_sku}
                          itemId={Number(pid)}
                          variants={variants?.edges}
                          categoryName={categoryName}
                          childCategory={childCategoryName}
                          parentCategory={parentCategoryName}
                          currency={currency}
                          basePrice={price}
                          salePrice={sale_price}
                          host={host}
                          productTag={
                            appState?.lang === "ar"
                              ? product_tag_ar
                              : product_tag
                          }
                          hasDiscount={
                            (discount_percentage && sale_price != price) || null
                          }
                          productCardImages={product_images}
                          ribbons={ribbons}
                          hasStock={
                            inventory_level && Number(inventory_level) > 0
                          }
                          lowStock={
                            (inventory_level && Number(inventory_level)) < 2
                          }
                          wrapperClassName={styles["fade-in"]}
                        />
                        {paginationData?.totalItemCount > 7 ? (
                          <>
                            {size > desktopScreenSize ? (
                              <>
                                {evens?.length > 0
                                  ? evens?.map(
                                      (evenImg: string, index: number) => {
                                        return (
                                          <>
                                            {index < responsiveProducts && (
                                              <div
                                                className={
                                                  styles["product-column"]
                                                }
                                                style={{
                                                  gridRowStart:
                                                    size > desktopScreenSize
                                                      ? evensIndex[index] + 2
                                                      : evensIndex[index] + 3,
                                                  gridRowEnd:
                                                    size > desktopScreenSize
                                                      ? evensIndex[index] + 4
                                                      : evensIndex[index] + 5,
                                                  gridColumnStart:
                                                    size > desktopScreenSize
                                                      ? 3
                                                      : 1,
                                                  gridColumnEnd:
                                                    size > desktopScreenSize
                                                      ? 5
                                                      : 3,
                                                }}
                                              >
                                                <Image
                                                  src={evenImg}
                                                  width={550}
                                                  height={650}
                                                  alt={"images"}
                                                  layout="responsive"
                                                  quality={100}
                                                  // unoptimized={isDev}
                                                ></Image>
                                              </div>
                                            )}
                                          </>
                                        );
                                      }
                                    )
                                  : null}

                                {odds?.length > 0
                                  ? odds?.map(
                                      (oddImg: string, index: number) => {
                                        return (
                                          <>
                                            {index < responsiveProducts && (
                                              <div
                                                className={
                                                  styles["product-column"]
                                                }
                                                style={{
                                                  gridRowStart:
                                                    size > desktopScreenSize
                                                      ? oddsIndex[index] + 2
                                                      : oddsIndex[index] + 4,
                                                  gridRowEnd:
                                                    size > desktopScreenSize
                                                      ? oddsIndex[index] + 4
                                                      : oddsIndex[index] + 6,
                                                  gridColumnStart:
                                                    size > desktopScreenSize
                                                      ? 1
                                                      : 1,
                                                  gridColumnEnd:
                                                    size > desktopScreenSize
                                                      ? 3
                                                      : 3,
                                                }}
                                              >
                                                <Image
                                                  src={oddImg}
                                                  width={550}
                                                  height={650}
                                                  alt={"images"}
                                                  layout="responsive"
                                                  quality={100}
                                                  // unoptimized={isDev}
                                                ></Image>
                                              </div>
                                            )}
                                          </>
                                        );
                                      }
                                    )
                                  : null}
                              </>
                            ) : (
                              <>
                                {collectionImagesArray?.length > 0
                                  ? collectionImagesArray?.map(
                                      (img: string, index: number) => {
                                        return (
                                          <>
                                            {index < responsiveProducts && (
                                              <div
                                                key={index}
                                                className={
                                                  styles["product-column"]
                                                }
                                                style={{
                                                  gridRowStart:
                                                    updatedArr[index],
                                                  gridRowEnd:
                                                    updatedArr[index] + 2,
                                                  gridColumnStart: 1,
                                                  gridColumnEnd: 3,
                                                }}
                                              >
                                                <Image
                                                  src={img}
                                                  width={550}
                                                  height={650}
                                                  alt={"images"}
                                                  layout="responsive"
                                                  quality={100}
                                                  // unoptimized={isDev}
                                                ></Image>
                                              </div>
                                            )}
                                          </>
                                        );
                                      }
                                    )
                                  : null}
                              </>
                            )}
                          </>
                        ) : null}
                      </>
                    );
                  })}

                {/* {!emptyProductData && isLoading && (
                  <div
                    className={`${styles["product-listing__cards"]} ${styles["fade-in"]}`}
                  >
                    <PlpListSkeleton count={8}></PlpListSkeleton>
                  </div>
                  // <div className={styles["div-loading"]}>
                  //   <span>{t("loading")}</span>
                  //   <Spinner width={15} height={15}></Spinner>
                  // </div>
                )} */}
                {emptyProductData && (
                  <div className={styles["div-no-items"]}>
                    <span>{t("no items found")}</span>
                  </div>
                )}
              </div>
            </>
          </PlpPagination>
        </div>
      )}
      <Script
        id="bambuser-shopping-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                (function(d, t, i, w) {
                    window.__bfwId = w;
                    if (d.getElementById(i) && window.__bfwInit) return window.__bfwInit();
                    if (d.getElementById(i)) return;
                    var s, ss = d.getElementsByTagName(t)[0];
                    s = d.createElement(t); s.id = i;
                    s.src = 'https://lcx-widgets.bambuser.com/embed.js';
                    ss.parentNode.insertBefore(s, ss);
                  })(document, 'script', 'bambuser-liveshopping-widget', 'bfvFO15cg6ZfuI8KX54M');`,
        }}
      />
    </>
  );
};

export default ProductListing;
