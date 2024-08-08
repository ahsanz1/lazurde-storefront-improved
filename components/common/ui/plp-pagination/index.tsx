import React, { useState, useEffect, useContext, useRef, Ref } from "react";
import styles from "./pagination.module.scss";
import { Cross } from "components/icons";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import Button from "../button";
import { useRouter } from "next/router";
import Spinner from "../spinner";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";

type SelectedFilterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};

interface PaginationProps {
  pKey?: any;
  paginationClass?: string;
  dataArray: any[];
  children?: JSX.Element;
  showPaginationCount?: boolean;
  isLoading?: boolean;
  controlDivClass?: string;
  hitsPerPage?: number;
  totalItemCount?: number;
  totalPages?: number;
  currentPage?: number;
  startIndex?: number;
  onPageChange?: Function;
  currentSortingValue?: string;
  selectedFilters?: SelectedFilterProps;
  currentItemCount?: number;
}

const PlpPagination = ({
  pKey = "",
  paginationClass = "",
  controlDivClass = "",
  children,
  showPaginationCount = true,
  hitsPerPage = 0,
  totalItemCount = 0,
  totalPages = 0,
  currentPage = 1,
  currentItemCount = 0,
  startIndex = 0,
  onPageChange = () => {},
  currentSortingValue = "",
  selectedFilters,
}: // isLoading,
PaginationProps): JSX.Element => {
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const ifLessThanPageSize = totalItemCount < hitsPerPage;
  const [showAll, setShowAll] = useState(router?.query?.hasOwnProperty("view-all"));
  const currentPageRef = useRef(Number(currentPage));
  const { t } = useTranslation("common");
  const [selectedFiltersArray, setSelectedFiltersArray] = useState([]);
  const containerRef: any = useRef("");
  const observer: any = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [isViewAllLoading, setIsViewAllLoading] = useState(false);
  const { pathname, query, asPath, locale } = router || {
    pathname: "",
    query: "",
    asPath: "",
  };
  const firstPageIndex = startIndex;
  if (firstPageIndex + hitsPerPage > totalItemCount) {
    var lastPageIndex = totalItemCount;
  } else {
    var lastPageIndex =
      firstPageIndex + (ifLessThanPageSize ? totalItemCount : hitsPerPage);
  }
  useEffect(() => {
    // if (currentPage === 1) {
    currentPageRef.current = Number(currentPage);
    // setShowAll(false);
    // }
    setIsLoading(false);
    setIsViewAllLoading(false);
  }, [currentPage]);

  const isSingleItem = currentItemCount >= totalItemCount;

  if (currentItemCount >= totalItemCount)
    containerRef.current && observer.current.unobserve(containerRef.current);

  const populateMoreItems = (item: any) => {
    if (!showAll) return;
    item.forEach(async (entry: any) => {
      if (entry?.isIntersecting) {
        await viewAllData();
        // containerRef.current &&
        //   observer.current.unobserve(containerRef.current);

        // containerRef.current =
        //   document.getElementById("loadMoreWrapper").lastElementChild;

        // containerRef.current && observer.current.observe(containerRef.current);
      }
    });
  };

  const extractFilters = (filters: SelectedFilterProps) => {
    const filterArray: { name: string; col: string; row: string }[] = [];
    for (const parentKey in filters) {
      const filter = filters[parentKey];
      const options = filter?.selectedOptions;
      for (const key in options) {
        const filter = options[key];

        filterArray?.push({ name: filter?.name, col: parentKey, row: key });
      }
    }
    setSelectedFiltersArray([...filterArray]);
  };

  const deleteSelectedFilter = (filter: { [key: string]: string }) => {
    const filterCopy = { ...selectedFilters };
    delete filterCopy?.[filter?.col]?.selectedOptions?.[filter?.row];
    if (Object.keys(filterCopy?.[filter?.col]?.selectedOptions)?.length < 1) {
      delete filterCopy?.[filter?.col];
    }
    onPageChange && onPageChange(filterCopy, currentSortingValue, 1);
  };

  useEffect(() => {
    if (!showAll) {
      containerRef.current && observer.current.unobserve(containerRef.current);
      containerRef.current = "";
      return;
    }

    if (!containerRef.current) {
      containerRef.current = document.querySelector("#loadMoreWrapper");
    }
    observer.current =
      containerRef.current &&
      new IntersectionObserver((entries) => populateMoreItems(entries), {
        threshold: 0.1,
      });
    containerRef.current && observer.current.observe(containerRef.current);

    return () => {
      // containerRef.current && observer.current.unobserve(containerRef.current);
    };
  }, [showAll]);

  useEffect(() => {
    setShowAll(isSingleItem);
  }, [isSingleItem]);

  useEffect(() => {
    extractFilters(selectedFilters);
    // setShowAll(false);
  }, [selectedFilters, currentSortingValue]);

  const viewAllData = async () => {
    currentPageRef.current = currentPageRef.current + 1;
    // await onPageChange(
    //   selectedFilters,
    //   currentSortingValue,
    //   currentPageRef.current
    // );
    setIsViewAllLoading(true);
    router.push(
      {
        query: {
          "view-all": "true",
          ...router.query,
          page: currentPageRef.current,
        },
      },
      undefined,
      { locale: locale, scroll: false }
    );
    return;
  };

  const pageCount = `${1}-${currentItemCount}`;

  const ViewAllBtn = () => {
    return (
      <div
        className={styles["div-view-all"]}
        data-visible={
          (isViewAllLoading == true || showAll == false) &&
          isSingleItem == false
        }
      >
        <Button
          isLoading={isViewAllLoading}
          spinnerText={t("loading")}
          spinnerColor="#000"
          buttonStyle={"underline"}
          buttonSize="inline"
          onClick={() => {
            // currentPageRef.current = currentPageRef.current + 1;

            // router.push(
            //   {
            //     query: { ...router.query, page: currentPageRef.current },
            //   },
            //   undefined,
            //   { locale: locale, scroll: false }
            // );

            // router.push(
            //   {
            //     pathname: String(
            //       `${router.asPath.split("?")[0]}?view-all`
            //     ),
            //   },
            //   undefined,
            //   { locale: locale}
            // );
            // if (window.history.replaceState) {
            //   const newURL = new URL(window.location.href);
            //   newURL.search = `?view-all`;
            //   window.history.replaceState(
            //     { path: newURL.href },
            //     "",
            //     newURL.href
            //   );
            // }
            setShowAll(true);
          }}
        >
          {t("textViewAll")}
        </Button>
      </div>
    );
  };

  return (
    <div className={`${styles["main-pagination"]} ${paginationClass}`}>
      <div className={`${styles["div-top-bar"]} `}>
        {showPaginationCount && width > desktopScreenSize ? (
          <div
            className={styles["div-view-count"]}
            data-hide={totalItemCount <= 0}
          >
            <div className={styles["div-show-count"]}>
              {isSingleItem
                ? `${t("textShow")} ${totalItemCount} ${t(
                    "textOf"
                  )} ${totalItemCount}`
                : lastPageIndex === 0
                ? ""
                : showAll
                ? `${t("textShow")} ${totalItemCount} ${t(
                    "textOf"
                  )} ${totalItemCount}`
                : `${t("textShow")} ${pageCount} ${t(
                    "textOf"
                  )} ${totalItemCount}`}
            </div>
            {/* {viewAllBtn()} */}
          </div>
        ) : null}

        {selectedFiltersArray && selectedFiltersArray?.length > 0 ? (
          <div style={{ overflowX: "auto", flex: 1 }}>
            <div className={styles["div-selected-filters"]}>
              {selectedFiltersArray?.map((filter, index) => {
                return (
                  <Button
                    key={index}
                    className={styles["filter-button"]}
                    buttonStyle="white"
                    buttonSize="inline"
                  >
                    <>
                      <span>
                        {filter?.name === "price" ? t("price") : filter?.name}
                      </span>
                      <Cross
                        width={"16px"}
                        height={"16px"}
                        onClick={() => {
                          deleteSelectedFilter(filter);
                        }}
                      />
                    </>
                  </Button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
      <>{children}</>
      <div
        id={"loadMoreWrapper"}
        className={`${styles["div-controls"]} ${controlDivClass}`}
        data-visible={!showAll}
        data-hide={totalItemCount <= 0}
      >
        <div className={`${styles["div-load-btn"]}`} data-hide={isSingleItem}>
          <Button
            buttonStyle="white"
            buttonSize="lr"
            buttonText={t("LoadMore")}
            hover={true}
            isLoading={isLoading}
            spinnerText={t("loading")}
            spinnerColor="#000"
            onClick={() => {
              currentPageRef.current = currentPageRef.current + 1;

              // onPageChange(
              //   selectedFilters,
              //   currentSortingValue,
              //   currentPageRef.current
              // );
              // if (window.history.replaceState) {
              //   const newURL = new URL(window.location.href);
              //   newURL.search = `?page=${currentPageRef.current}`;
              //   window.history.replaceState(
              //     { path: newURL.href },
              //     "",
              //     newURL.href
              //   );
              // }
              setIsLoading(true);
              router.push(
                {
                  query: { ...router.query, page: currentPageRef.current },
                },
                undefined,
                { locale: locale, scroll: false }
              );

              // router.replace(
              //   {
              //     pathname: router.asPath.split("?")[0],
              //     query: { page: currentPageRef.current },
              //   },
              //   undefined,
              //   { locale: locale, shallow: true, scroll: false }
              // );
            }}
          />
        </div>
        {isLoading ? (
          <div className={`${styles["div-view-all-spinner"]}`}>
            Loading... &nbsp; <Spinner />
          </div>
        ) : null}
        <div className={`${styles["div-progress-bar"]}`}>
          <div className={`${styles["outer-bar"]}`}>
            <div
              className={`${styles["inner-bar"]}`}
              style={{ width: `${(currentItemCount / totalItemCount) * 100}%` }}
            />
          </div>
        </div>
        <div className={styles["div-page-count"]}>
          <span>{`${t("textShow")} ${currentItemCount} ${t(
            "of"
          )} ${totalItemCount} ${t("product")}`}</span>
          {<ViewAllBtn />}
        </div>
      </div>
    </div>
  );
};

export default PlpPagination;
