import React, { useState, useEffect, useContext, useRef, Ref } from "react";
import styles from "./pagination.module.scss";
import { ArrowLeft, ArrowRight } from "components/icons";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";

interface PaginationProps {
  pKey?: any;
  paginationClass?: string;
  defaultPageNumber?: number;
  pageSize: number;
  totalSize: number;
  onPageUp: Function;
  onPageDown: Function;
  dataArray: [];
  onInitialize?: Function;
  children?: JSX.Element;
  showPaginationCount?: boolean;
  controlDivClass?: string;
  shouldLoad?: any;
  extractProductData?: any;
}

const Pagination = ({
  pKey = "",
  paginationClass = "",
  controlDivClass = "",
  defaultPageNumber,
  pageSize,
  totalSize,
  onPageUp,
  onPageDown,
  dataArray,
  onInitialize,
  children,
  showPaginationCount = true,
  shouldLoad,
  extractProductData,
}: PaginationProps): JSX.Element => {
  const ifLessThanPageSize = totalSize < pageSize;
  const [currentPage, setCurrentPage] = useState(defaultPageNumber);
  const [showAll, setShowAll] = useState(false);
  const [hidePagination, setHidePagination] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [viewAllArray, setViewAllArray] = useState([]);
  const loadMoreTop: any = useRef(0);
  const scrollPosition = useRef(-1);
  const firstPageIndex = (currentPage - 1) * pageSize;
  if (firstPageIndex + pageSize > totalSize) {
    var lastPageIndex = totalSize;
  } else {
    var lastPageIndex =
      firstPageIndex + (ifLessThanPageSize ? totalSize : pageSize);
  }

  const isSingleItem = lastPageIndex === 1;
  const totalPages = Math.ceil(totalSize / pageSize);
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);

  const populateOnFirstLoad = (callBackFn: Function) => {
    const firstPageIndex = (defaultPageNumber - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const paginatedArray =
      dataArray &&
      Array.isArray(dataArray) &&
      dataArray?.slice(firstPageIndex, lastPageIndex);

    paginatedArray && callBackFn(paginatedArray);
    paginatedArray && setViewAllArray(paginatedArray);
  };

  const isPaginationRequired = () => {
    const numOfPages = totalSize / pageSize;
    return numOfPages <= 1;
  };

  useEffect(() => {
    if (loadMore && shouldLoad.current) {
      const viewAll = [
        ...viewAllArray,
        ...dataArray?.slice(viewAllArray?.length, viewAllArray?.length + 5),
      ];
      onInitialize(viewAll);
      setViewAllArray(viewAll);
      setLoadMore(false);
    }
  }, [loadMore]);

  const element =
    typeof document !== "undefined" && document.getElementById("load-more");
  loadMoreTop.current =
    typeof document !== "undefined" && element?.getBoundingClientRect();
  useEffect(() => {
    if (!showAll) return;
    let checkcheck = true;
    const scroller = () => {
      // loadMoreTop.current = rect.top
      scrollPosition.current = document.documentElement.scrollTop;
      if (shouldLoad.current) return;
      if (loadMoreTop.current.top - 200 < scrollPosition.current) {
        shouldLoad.current = true;

        setLoadMore((prev) => {
          return !prev;
        });
        checkcheck = false;
      }
    };
    document.documentElement.addEventListener("scroll", scroller);
    return () => {
      document.documentElement.removeEventListener("scroll", scroller);
    };
  }, [showAll]);

  useEffect(() => {
    setCurrentPage(defaultPageNumber);
    populateOnFirstLoad(onInitialize);
    setHidePagination(isPaginationRequired());
    setShowAll(false);
  }, [dataArray]);

  const pageDown = (callBackFn: Function) => {
    const pageNum = currentPage - 1;
    const firstPageIndex = (pageNum - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const paginatedArray =
      dataArray &&
      dataArray.length > 0 &&
      dataArray?.slice(firstPageIndex, lastPageIndex);
    setCurrentPage(pageNum);
    paginatedArray && callBackFn(paginatedArray);
  };

  const pageUp = (callBackFn: Function) => {
    const pageNum = currentPage + 1;
    const firstPageIndex = (pageNum - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const paginatedArray =
      dataArray &&
      dataArray.length > 0 &&
      dataArray?.slice(firstPageIndex, lastPageIndex);
    setCurrentPage(pageNum);
    paginatedArray && callBackFn(paginatedArray);
  };

  const viewAllData = (callBackFn: Function) => {
    setShowAll(true);
    const viewAll = [
      ...viewAllArray,
      ...dataArray?.slice(viewAllArray?.length, viewAllArray?.length + 5),
    ];
    onInitialize(viewAll);
    setViewAllArray(viewAll);
    // callBackFn(dataArray);
  };

  const pageCount =
    appState?.lang === "en"
      ? `${firstPageIndex + 1}-${lastPageIndex}`
      : `${lastPageIndex}-${firstPageIndex + 1}`;

  return (
    <div
      key={pKey}
      className={`${styles["main-pagination"]} ${paginationClass}`}
    >
      {showPaginationCount && (
        <div className={styles["div-view-count"]} data-hide={hidePagination}>
          <div className={styles["div-show-count"]}>
            {isSingleItem
              ? `${t("textShow")} ${totalSize} ${t("textOf")} ${totalSize}`
              : lastPageIndex === 0
              ? ""
              : showAll
              ? `${t("textShow")} ${totalSize} ${t("textOf")} ${totalSize}`
              : `${t("textShow")} ${pageCount} ${t("textOf")} ${totalSize}`}
          </div>
          <div className={styles["div-view-all"]} data-visible={!showAll}>
            <button
              onClick={() => {
                viewAllData(onInitialize);
              }}
            >
              {t("textViewAll")}
            </button>
          </div>
        </div>
      )}

      {children}

      <div
        className={`${styles["div-controls"]} ${controlDivClass}`}
        data-visible={!showAll}
        data-hide={hidePagination}
      >
        <div className={styles["div-left-arrow"]}>
          <button
            data-disabled={currentPage === 1}
            onClick={() => pageDown(onPageDown)}
          >
            <ArrowLeft fillOpacity={currentPage === 1 ? "0.4" : "1"} />
          </button>
        </div>
        <div className={styles["div-page-count"]}>
          <span>{currentPage}</span>
          <span>/</span>
          <span>{totalPages}</span>
        </div>
        <div className={styles["div-right-arrow"]}>
          <button
            data-disabled={currentPage === totalPages}
            onClick={() => pageUp(onPageUp)}
          >
            <ArrowRight
              fillOpacity={currentPage === totalPages ? "0.4" : "1"}
            />
          </button>
        </div>
      </div>
      <div
        id="load-more"
        style={{ position: "absolute", bottom: "0", opacity: "0" }}
      >
        LOAD MORE
      </div>
    </div>
  );
};

export default Pagination;
