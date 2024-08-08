/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { translateText } from "lib/utils/reviews";
import Label from "components/common/ui/label";
import StarRating from "components/common/ui/star-ratings";
import { formateDate, reviewStarAvg } from "lib/utils/common";
import WriteAReview from "./write-review";
import ReviewTabs from "./review-tabs";
import Pagination from "components/common/ui/pagination";
import useTranslation from "next-translate/useTranslation";
import ReviewsLoader from "components/common/ui/skeletons/reviews";
import { getReviewsApi } from "lib/middleware-apis/reviews";
import Heading from "../ui/heading";
import Image from "next/image";
import { isDev } from "general-config";
interface ReviewsProps {
  setTotalRating?: Function;
  totalRating?: number;
  productData?: any;
  reviewsData?: any;
  initialProductData?: any;
  currentData?: any;
  setCurrentData?: Function;
  filterData?: any;
  setFilterData?: Function;
  fetchingReviews?: Function;
  setIsRatingError?: Function;
  isRatingError?: string;
}

const Reviews = ({
  productData = {},
  reviewsData,
  totalRating,
}: ReviewsProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [modalOpen, setModalOpen] = useState(false);
  const reviewWrapper = useRef<HTMLInputElement>();
  const initialProductData = reviewsData
  const [currentData, setCurrentData] = useState(reviewsData);
  const [filterData, setFilterData] = useState<any>([]);
  const reviewImagesRef = useRef(null);
  useEffect(() => {
    setFilterData("");
  }, [productData]);

  const onClose = () => {
    setModalOpen(false);
    document.documentElement.style.overflowY = "auto";
  };

  const filterReview = (val: any) => {
    const filtername = val?.label;
    if (filtername === "feature") {
      const _filterData =
        reviewsData &&
        reviewsData.length > 0 &&
        reviewsData.filter((data: any) => data?.review?.isFeatured === true);
      setFilterData(_filterData);
    }
    if (filtername === "recent") {
      setFilterData(reviewsData);
    }

    if (filtername === "highest") {
      const sortingArray = [...reviewsData];
      const highestReviewData =
        sortingArray &&
        sortingArray.length > 0 &&
        sortingArray.sort(
          (a: any, b: any) => b?.review?.rating - a?.review?.rating
        );
      highestReviewData && setFilterData([...highestReviewData]);
    }

    if (filtername === "lowest") {
      const sortingArray = [...reviewsData];
      const lowestReviewData =
        sortingArray &&
        sortingArray.length > 0 &&
        sortingArray.sort(
          (a: any, b: any) => a?.review?.rating - b?.review?.rating
        );
      lowestReviewData && setFilterData([...lowestReviewData]);
    }
  };

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

  return (
    <>
      {/* {isLoadingReviews && (
        <div className={`${styles["reviews-wrapper"]} ${styles["loader-div"]}`}>
          <ReviewsLoader />
        </div>
      )} */}
      {reviewsData && reviewsData?.length > 0 ? (
        <div className={styles["reviews-wrapper"]} ref={reviewWrapper}>
          <div className={styles["review-summary"]}>
            {reviewsData && reviewsData.length > 0 && (
              <Heading
                element="h2"
                testId="heading"
                className={styles["total-review-label"]}
              >
                {`${reviewsData?.length} ${t("customer reviews")}`}
              </Heading>
            )}
            <div className={styles["review-summary-stars"]}>
              <StarRating
                count={5}
                rating={totalRating}
                starWidth={16.67}
                starHeight={16.67}
                pointerEventsNone={true}
              />
              <Label
                className={styles["total-rating"]}
              >{`${totalRating?.toFixed(2)} ${t("rating")}`}</Label>
            </div>
          </div>
          <div className={styles["write-review-btn"]}>
            <button
              onClick={() => {
                setModalOpen(true);
                document.documentElement.style.overflowY = "hidden";
              }}
            >
              {t("write a review")}
            </button>
          </div>
          <ReviewTabs
            onClick={(e: any) => {
              filterReview(e);
            }}
          />

          <>
            <Pagination
              showPaginationCount={false}
              pKey={currentData}
              paginationClass={styles["div-pagination"]}
              defaultPageNumber={1}
              pageSize={10}
              totalSize={
                Array.isArray(filterData)
                  ? filterData?.length
                  : initialProductData?.length
              }
              dataArray={
                Array.isArray(filterData) ? filterData : initialProductData
              }
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
                  const uploadedImages = review?.imagesFileName?.split(",");
                  return (
                    <SingleReview
                      key={index}
                      index={index}
                      review={review}
                      uploadedImages={uploadedImages}
                    />
                  );
                })}
              </>
            </Pagination>
          </>
        </div>
      ) : null}

      <WriteAReview
        productData={productData}
        isOpened={modalOpen}
        onClose={onClose}
        reviewImagesRef={reviewImagesRef}
      />
    </>
  );
};

export default Reviews;

const SingleReview = ({
  index = 0,
  review = {},
  uploadedImages = [],
}: any): JSX.Element => {
  const { t } = useTranslation("common");
  const [reviewText, setReviewText] = useState(() => ({
    english: review?.body,
    arabic: "",
    lang: "en",
  }));

  useEffect(() => {
    if (review && Object.keys(review).length > 0) {
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

  return (
    <div className={styles["review"]} key={index}>
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
      <div className={styles["uploaded-img-wrapper"]}>
        {uploadedImages && uploadedImages.length > 0
          ? uploadedImages?.map((imgSrc: string, index: number) => {
              return (
                <>
                  {imgSrc ? (
                    <div className={styles["review-img"]} key={index}>
                      <Image
                        src={`https://s3-us-west-2.amazonaws.com/stamped.io/uploads/photos/${imgSrc}`}
                        alt="review-img"
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                        quality={100}
                        // unoptimized={isDev}
                      />
                    </div>
                  ) : null}
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};
