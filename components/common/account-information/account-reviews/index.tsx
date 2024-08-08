/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, useContext } from "react";
import Label from "components/common/ui/label";
import styles from "./style.module.scss";
import { ReviewIcon } from "components/icons";
import { translateText } from "lib/utils/reviews";
import { desktopScreenSize, formateDate } from "lib/utils/common";
import Pagination from "components/common/ui/pagination";
import StarRating from "components/common/ui/star-ratings";
import useWindowSize from "lib/utils/useWindowSize";
import ProductWithOutReviews from "./product-without-reviews/index";
import useTranslation from "next-translate/useTranslation";
import { useOrders } from "lib/api/orders";
import YetToReviewCard from "components/common/ui/skeletons/yet-to-review-card";
import SingleReviewLoader from "components/common/ui/skeletons/single-review";
import { getReviewsApi } from "lib/middleware-apis/reviews";
import { useCustomer } from "lib/middleware-apis/customers";
import Image from "next/image";
import { AppContext } from "lib/context";

const UserReviews = (): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [size] = useWindowSize();
  const { t } = useTranslation("common");
  const reviewWrapper = useRef<HTMLInputElement>();
  const [initialProductData, setInitialProductData] = useState<any>([]);
  const [currentData, setCurrentData] = useState([]);
  const [reviewsData, setReviewsData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [isloadingYetToReview, setIsloadingYetToReview] = useState(false);
  const [renderCom, setRenderCom] = useState(false);
  const [ordersItem, setOrdersItem] = useState([]);
  const { useGetOrders } = useOrders();
  const { useGetCustomerByGraphQl } = useCustomer();
  const { data: customerData } = useGetCustomerByGraphQl({ enabled: false });
  const { data: ordersDetail, isLoading: isLoadingOrders } = useGetOrders({
    enabled: customerData?.entityId > 0 || false,
  });
  const staticData: any = t("accountReviewData", {}, { returnObjects: true });

  const activeOrders =
    ordersDetail?.length > 0 &&
    ordersDetail?.filter(
      (item: any) =>
        item?.order?.region.slice(0, 2).toLowerCase() === appState?.region
    );

  const scrollToTop = () => {
    const header = document.getElementById("main-header");
    const headerHeight = header?.getBoundingClientRect().height;
    const elementTop = reviewWrapper?.current.offsetTop;
    document.documentElement.scroll({
      top: elementTop - headerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setRenderCom(true);
    document.documentElement.scrollTo(0, 0);
    setFilterData("");

    return () => {
      setRenderCom(false);
    };
  }, []);

  useEffect(() => {
    getOrderItems();
  }, [ordersDetail]);

  useEffect(() => {
    customerData && fetchingReviews(customerData?.email);
  }, [customerData]);

  const getOrderItems = async () => {
    let allOrdersItem: any = new Set();
    const uniqueSKUs = new Set();
    activeOrders &&
      activeOrders?.length > 0 &&
      activeOrders?.forEach((singleOrder: any) => {
        const lineItems = singleOrder?.order?.ordersItems;
        if (lineItems) {
          lineItems?.forEach((item: any) => {
            const sku = item?.sku;
            if (!uniqueSKUs.has(sku)) {
              uniqueSKUs.add(sku);
              allOrdersItem.add(item);
            }
          });
        }
      });
    let newArr: any = [];
    allOrdersItem &&
      setOrdersItem(newArr?.concat(...Array.from(allOrdersItem)));
  };

  const fetchingReviews = async (email: string) => {
    setIsloadingYetToReview(true);
    const response = await getReviewsApi(email, appState?.region);
    response && setReviewsData(response?.results);
    response && setInitialProductData(response?.results);
    response && setCurrentData(response?.results);
    setIsloadingYetToReview(false);
  };

  return (
    <>
      {renderCom && (
        <div className={styles["account-review-wrapper"]}>
          <div className={styles["reviews-heading"]}>
            <ReviewIcon />
            <Label className={styles["label"]}>
              {staticData?.myReviewHeading}
            </Label>
          </div>

          {isloadingYetToReview || isLoadingOrders ? (
            <>
              <div className="account-loader-div padding mb-8">
                <YetToReviewCard />
              </div>
              <div className="account-loader-div padding">
                <SingleReviewLoader />
              </div>
            </>
          ) : (
            <>
              <ProductWithOutReviews
                products={ordersItem}
                reviewsData={reviewsData}
              />
              {reviewsData && reviewsData?.length > 0 ? (
                <>
                  <div
                    className={styles["reviews-heading"]}
                    ref={reviewWrapper}
                  >
                    <ReviewIcon />
                    <Label className={styles["label"]}>
                      {staticData?.myPastReviews}
                    </Label>
                  </div>
                  <div className={styles["past-reviews"]}>
                    <Pagination
                      showPaginationCount={false}
                      pKey={currentData}
                      paginationClass={styles["review-pagination"]}
                      controlDivClass={styles["review-pagination-control"]}
                      defaultPageNumber={1}
                      pageSize={3}
                      totalSize={initialProductData?.length}
                      dataArray={initialProductData}
                      onInitialize={(slicedArray: []) => {
                        setCurrentData(slicedArray);
                      }}
                      onPageUp={(slicedArray: []) => {
                        scrollToTop();
                        setCurrentData(slicedArray);
                      }}
                      onPageDown={(slicedArray: []) => {
                        scrollToTop();
                        setCurrentData(slicedArray);
                      }}
                    >
                      <>
                        {currentData?.map((reviews: any, index: number) => {
                          const { review = {}, customer = {} } = reviews;
                          return (
                            <SingleReview
                              key={index}
                              index={index}
                              review={review}
                            />
                          );
                        })}
                      </>
                    </Pagination>
                  </div>
                </>
              ) : null}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserReviews;

const SingleReview = ({ index = 0, review = {} }: any): JSX.Element => {
  const { t } = useTranslation("common");
  const [size] = useWindowSize();
  const [reviewText, setReviewText] = useState({
    english: review?.body,
    arabic: "",
    lang: "en",
  });

  useEffect(() => {
    if (review && Object.keys(review)?.length > 0) {
      setReviewText({
        english: review?.body,
        arabic: "",
        lang: "en",
      });
    }
  }, [review]);

  const handleReviewsTranslation = async (text: string, lang: string) => {
    const res = await translateText(text, lang);
    if (res.hasError === false) {
      setReviewText({
        ...reviewText,
        arabic: res?.response?.data?.data?.translations[0]?.translatedText,
        lang: "ar",
      });
    } else {
      console.log("review translate err");
    }
  };

  const handleTranslate = async () => {
    if (reviewText.arabic == "" || reviewText.english == "") {
      const response = await translateText(review?.body);
      const detectLang = await response?.response?.data?.data?.translations[0]
        ?.detectedSourceLanguage;
      handleReviewsTranslation(review?.body, detectLang !== "ar" ? "ar" : "en");
      return;
    }
    if (reviewText.lang === "ar") {
      setReviewText({
        ...reviewText,
        lang: "en",
      });
    } else {
      setReviewText({
        ...reviewText,
        lang: "ar",
      });
    }
  };

  const productTitle =
    review?.productTitle?.split(/- (.*)/s)?.length > 1
      ? review?.productTitle?.split(/- (.*)/s)?.[1]
      : review?.productTitle;

  return (
    <div className={styles["review"]} key={index}>
      {review?.productImageUrl ? (
        <div className={styles["review-img"]}>
          <Image
            src={review?.productImageUrl?.replace(/"/g, "") || "/"}
            alt="review-img"
            width={size > desktopScreenSize ? "100%" : 327}
            height={size > desktopScreenSize ? "100%" : 327}
            layout="responsive"
          />
        </div>
      ) : null}
      <Label className={styles["product-title"]}>{productTitle}</Label>

      <Label className={styles["customer-name"]}>
        {review?.author?.replace(/"/g, "")}
      </Label>
      <div
        className={styles["review-rating"]}
        style={{
          pointerEvents: "none",
        }}
      >
        <StarRating
          count={5}
          rating={review?.rating?.toFixed(2)}
          pointerEventsNone={true}
          starWidth={12}
          starHeight={12}
        />
      </div>
      <Label className={styles["review-content"]}>
        <>{reviewText.lang === "en" ? reviewText.english : reviewText.arabic}</>
      </Label>
      <div className={styles["translate-btn"]}>
        <button
          key={index}
          onClick={() => {
            handleTranslate();
          }}
        >
          {reviewText.lang === "en"
            ? t("translateToArabic")
            : t("translateToEnglish")}
        </button>
      </div>
      <Label className={styles["date"]}>{formateDate(review?.dateAdded)}</Label>
    </div>
  );
};
