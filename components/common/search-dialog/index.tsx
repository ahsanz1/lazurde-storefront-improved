import React, { FC, useContext, useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import Input from "../ui/Input";
import CrossSmall from "components/icons/CrossSmall";
import { Search } from "components/icons";
import ProductCard from "../product-card/ProductCard";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { desktopScreenSize } from "lib/utils/common";
import { brandNames, currentBrandName, getBrandKey } from "lib/utils/constants";
import { ImageSet } from "@bloomreach/spa-sdk";
import { productSearchApi, searchSuggestionsAPI } from "lib/api/search";
// import { querySuggestions, searchSuggestions } from "./mock-data.js";
import { useQuery } from "@tanstack/react-query";
import { createPortal } from "react-dom";
import { fetchProductSku } from "lib/utils/product";
import {
  bloomreachDomainKeys,
  categoryIdByRegion,
  isDev,
} from "general-config";
import { LocaleType } from "lib/types/common";
import { getCookie } from "tiny-cookie";
import Spinner from "../ui/spinner";

interface SearchDialogProps {
  siteLogo?: ImageSet;
  siteLogoUrl?: string;
  popularSearchTerms?: string[];
  setOpenSearchDialog?: (val: boolean) => void;
  openSearchDialog?: boolean;
  showClone?: boolean;
}

const SearchDialog: FC<SearchDialogProps> = ({
  siteLogo,
  siteLogoUrl,
  setOpenSearchDialog,
  openSearchDialog,
  showClone,
  popularSearchTerms,
}): JSX.Element => {
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  // const [suggestedTerms, setSuggestedTerms] = useState([]);
  // const [suggestedProducts, setSuggestedProducts] = useState([]);
  const router = useRouter();
  const { t } = useTranslation("common");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const imageUrl = siteLogo?.getOriginal().getUrl() || "/";
  const imageAltText = siteLogo?.getOriginal().getName() || "";
  const [inputQuery, setInputQuery] = useState(null);
  const suggestTimer = useRef(null);
  const searchTerm = useRef(null);
  const portalRef = useRef(null);
  const [searchLoading, setSearchLoading] = useState(false)
  const catalogNames: any = bloomreachDomainKeys;
  const brandValue =
    getBrandKey(appState?.brand) === "lazurde"
      ? ""
      : `${currentBrandName("missl", appState?.lang).brand}`;
  const brandKey = brandValue ? `brand:"${brandValue}"` : "";
  const { data: popularSearchedProducts = {} } = useQuery(
    ["popularSearchedProducts", router?.locale, appState?.brand],
    () =>
      productSearchApi({
        searchType: "category",
        query: (categoryIdByRegion as any)?.[appState?.region]?.root,
        rows: 5,
        locale: router?.locale as LocaleType,
        facets: { brand: brandKey, featured: `isFeatured:"true"` },
        brUID: getCookie("_br_uid_2", (value: any) =>
          decodeURIComponent(value)
        ),
      }),
    { cacheTime: Infinity, staleTime: Infinity }
  );

  const { data } = useQuery(
    ["searchSuggestions", inputQuery],
    async ({ queryKey }) => {
      const searchResults = await searchSuggestionsAPI({
        query: queryKey[1],
        locale: appState?.currentLocale,
        brUID: getCookie("_br_uid_2", (value: any) =>
          decodeURIComponent(value)
        ),
      });
      const suggestedProducts =
        searchResults?.response?.suggestionGroups[0]?.searchSuggestions;
      const productIds = [];
      for (let index = 0; index < suggestedProducts.length; index++) {
        const product = suggestedProducts[index];
        productIds.push(Number(product?.pid));
      }
      const productData: any = await fetchProductSku(
        productIds,
        appState?.region
      );
      for (let index = 0; index < productData.length; index++) {
        const product = productData?.[index]?.node;
        const productIndex = suggestedProducts?.findIndex(
          (item: any) => Number(item?.pid) === product?.entityId
        );
        if (productIndex === -1) continue;
        suggestedProducts[productIndex].sku = product?.sku;
      }
      return searchResults;
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: inputQuery != null,
    }
  );

  const suggestedTerms = data?.response?.suggestionGroups[0]?.querySuggestions;
  const suggestedProducts =
    data?.response?.suggestionGroups[0]?.searchSuggestions;
  portalRef.current =
    typeof document != "undefined" &&
    document.querySelector("#search-dropdown");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    searchTerm.current = null;
    setInputQuery(null);
    setOpenSearchDialog(false);
  }, [router?.locale, router?.asPath]);

  useEffect(() => {
    if (openSearchDialog) {
      inputRef.current?.focus();
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    searchTerm.current = null;
    setInputQuery(null);
  }, [openSearchDialog]);

  const bloomreachSuggestEventPixel = (input: string, query: any) => {
    let searchData: any = {};
    searchData["aq"] = input;
    searchData["q"] = query;
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent(
        "suggest",
        "click",
        searchData,
        {},
        true
      );
  };
  const bloomreachSearchPixel = () => {
    var searchData: any = {};
    searchData["q"] = searchTerm.current;
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent(
        "suggest",
        "submit",
        searchData,
        {},
        true
      );
  };

  const handleSearch = (query: string) => {
    suggestTimer.current && clearTimeout(suggestTimer.current);
    searchTerm.current = query || null;
    suggestTimer.current = setTimeout(async () => {
      setInputQuery(query);
    }, 500);
    document.documentElement.className = "";
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    setSearchLoading(true)
    if (searchTerm.current && e.key == "Enter") {
      const splitTerm = searchTerm.current.split(" ");
      const joinTerm = splitTerm.join("-");

      router.events.on("routeChangeComplete", () => {
        setOpenSearchDialog(false);
        setSearchLoading(false)
      });

      inputRef.current.value = "";
      searchTerm.current = null;
      document.documentElement.className = "";
      const pathName =
        getBrandKey(appState?.brand) === "lazurde" ? "/s" : "/miss-l/s";
      router.push({
        pathname: pathName,
        query: {
          keyword: joinTerm,
        },
      });
      document.documentElement.className = "";
    }
  };

  const placeholderText = t("Shop");

  return (
    <>
      {portalRef.current
        ? createPortal(
          <>
            {width > desktopScreenSize && (
              <div
                className={styles["overlay"]}
                data-opened={openSearchDialog}
                onClick={() => {
                  setOpenSearchDialog(!openSearchDialog);
                  document.documentElement.className = "";
                }}
              ></div>
            )}
            {searchLoading ? <div className={styles["blur-overlay"]}>

              <Spinner width={40} height={40} color="Grey" stroke={6} className={styles["spinner"]} />
            </div> : null}
            <div
              className={`${styles["search-dialog"]} ${styles[`${getBrandKey(appState?.brandEN)}-search`]
                }
         ${!showClone ? styles["default"] : styles["clone-bar"]}`}
              data-opened={openSearchDialog}
            >
              <div className={styles["search-bar"]}>
                <div className={styles["brand-icon"]}>
                  {imageUrl ? (
                    <Link href={siteLogoUrl || ""}>
                      <a>
                        <Image
                          src={imageUrl || "/"}
                          width={152}
                          height={20}
                          alt={imageAltText}
                        // unoptimized={isDev}
                        />
                      </a>
                    </Link>
                  ) : null}
                </div>
                <div className={styles["search-bar-wrapper"]}>
                  <div
                    className={styles["search-input-div"]}
                    data-visible={
                      searchTerm.current != null &&
                      (suggestedTerms?.length > 0 ||
                        suggestedProducts?.length > 0)
                    }
                  >
                    <Input
                      showLabel={false}
                      inputContainerClass={styles["search-input-container"]}
                      divInputClass={styles["search-div-input"]}
                      className={styles["search-input"]}
                      placeHolder={`${placeholderText} ${appState?.brand}`}
                      onChange={(e) => handleSearch(e.target.value || "")}
                      handleSubmit={(e) => {
                        if (e.key == "Enter") {
                          searchTerm.current = inputRef.current.value;
                          bloomreachSearchPixel();
                          handleSubmit({ key: "Enter" });
                        }
                      }}
                      inputRef={inputRef}
                      inputIcon={
                        <Search
                          width="16"
                          height="16"
                          color="rgba(0, 0, 0, 0.4)"
                        />
                      }

                    ></Input>

                    <div
                      className={styles["div-search-dropdown"]}
                      data-visible={
                        searchTerm.current != null &&
                        (suggestedTerms?.length > 0 ||
                          suggestedProducts?.length > 0)
                      }
                    >
                      <ul
                        className={styles["div-query-suggestions"]}
                        key={suggestedTerms}
                      >
                        <div className={styles["query-heading"]}>
                          Did you mean
                        </div>
                        {suggestedTerms?.map(
                          (query: { query: string; displayText: string }) => {
                            return (
                              <>
                                <li
                                  onClick={() => {
                                    bloomreachSuggestEventPixel(
                                      searchTerm.current,
                                      query?.query
                                    );
                                    inputRef.current.value = query?.query;
                                    searchTerm.current = query?.query;
                                    handleSubmit({
                                      key: "Enter",
                                    });
                                  }}
                                >
                                  {query?.displayText}
                                </li>
                              </>
                            );
                          }
                        )}
                      </ul>
                      <div
                        className={styles["div-suggested-products"]}
                        key={suggestedProducts}
                      >
                        <div className={styles["query-heading"]}>
                          Suggested Products
                        </div>
                        <div className={styles["list-suggested-products"]}>
                          {suggestedProducts?.map(
                            (query: {
                              pid: number;
                              thumb_image: string;
                              title: string;
                              sku: string;
                              sale_price: number;
                              inventory_level: number;
                            }) => {
                              const currency =
                                appState?.region === "sa"
                                  ? "SAR"
                                  : appState?.region === "ae"
                                    ? "AED"
                                    : "EGP";
                              return (
                                <>
                                  <ProductCard
                                    wrapperClassName={
                                      styles["suggested-product"]
                                    }
                                    itemId={Number(query?.pid)}
                                    productCardImages={[query?.thumb_image]}
                                    title={query?.title}
                                    sku={query?.sku}
                                    basePrice={query?.sale_price}
                                    currency={currency}
                                    hasStock={
                                      query?.inventory_level &&
                                      Number(query?.inventory_level) > 0
                                    }
                                  ></ProductCard>
                                </>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["cross-icon"]}>
                    <CrossSmall
                      width="12"
                      height="12"
                      onClick={() => {
                        setOpenSearchDialog(false);
                        document.documentElement.className = "";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles["category-section"]}>
                {popularSearchTerms ? (
                  <div className={styles["popular-search-terms-div"]}>
                    <span className={styles["popular-search-terms-heading"]}>
                      {`${t("Popular Search Terms")}:`}
                    </span>
                    <ul className={styles["popular-search-terms-list"]}>
                      {popularSearchTerms?.map((term) => {
                        return (
                          <li
                            key={term}
                            onClick={() => {
                              inputRef.current.value = term;
                              searchTerm.current = term;
                              bloomreachSearchPixel();
                              handleSubmit({ key: "Enter" });
                            }}
                          >
                            {term}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
                <div className={styles["popular-search-products-div"]}>
                  <div className={styles["popular-search-products-heading"]}>
                    {t("Popular Search Products")}
                  </div>
                  <div
                    className={styles["popular-products"]}
                    data-testid="product-card"
                  >
                    {popularSearchedProducts?.response?.docs?.length > 0 &&
                      popularSearchedProducts?.response?.docs?.map(
                        (product: any) => {
                          const {
                            title = "",
                            product_sku,
                            pid,
                            price,
                            sale_price,
                            currency = "",
                            product_images = [],
                            inventory_level = 0,
                          } = product;

                          return (
                            <>
                              <ProductCard
                                key={pid}
                                index={pid}
                                item={product}
                                title={title}
                                sku={product_sku}
                                itemId={Number(pid)}
                                currency={currency}
                                basePrice={price}
                                salePrice={sale_price}
                                hasDiscount={sale_price != price || null}
                                productCardImages={product_images}
                                wrapperClassName={styles["product-card"]}
                                hasStock={
                                  inventory_level &&
                                  Number(inventory_level) > 0
                                }
                              />
                            </>
                          );
                        }
                      )}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </>,
          portalRef.current
        )
        : null}
    </>
  );
};

export default SearchDialog;
