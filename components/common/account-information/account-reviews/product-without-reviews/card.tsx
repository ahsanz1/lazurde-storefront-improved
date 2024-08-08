import React, { useContext, useEffect, useState } from "react";
import styles from "../style.module.scss";
import Label from "components/common/ui/label";
import { desktopScreenSize, reviewStarAvg } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import Image from "next/image";
import Button from "components/common/ui/button";
import StarRating from "components/common/ui/star-ratings";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { getReviewsApi } from "lib/middleware-apis/reviews";
import { fetchProduct } from "lib/utils/product";
import { useQuery } from "@tanstack/react-query";

const ReviewProductCard = ({ product = {}, setModalInfo = () => {} }: any) => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const [reviewsData, setReviewsData] = useState([]);
  const [totalRating, setTotalRating] = useState(0);

  const { data: productData } = useQuery(
    [`singleProductData-${product?.sku}`],
    () => fetchProduct(product?.sku, appState?.region),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    getReviewsOfSingleProduct(productData);
  }, [productData]);

  const getReviewsOfSingleProduct = async (product: any) => {
    const response = await getReviewsApi(product?.entityId, appState?.region);
    response && setReviewsData(response?.results);
  };

  useEffect(() => {
    let ratings: any = [];
    reviewsData &&
      reviewsData.length > 0 &&
      reviewsData.forEach((element: any) => {
        return ratings.push(element?.review?.rating);
      });
    const ratingAvg = ratings && ratings.length > 0 && reviewStarAvg(ratings);
    ratingAvg && setTotalRating(ratingAvg);
  }, [reviewsData]);

  const brandNameAR = productData?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Brand AR"
  );
  const productNameAR = productData?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );

  return (
    <>
      <div className={styles["slide-content"]}>
        <div
          className={styles["img"]}
          style={{
            backgroundColor: "rgb(242, 242, 242)",
          }}
        >
          <Image
            src={productData?.defaultImage?.url1280wide || "/"}
            alt="product-img"
            width={width > desktopScreenSize ? 281 : 238.5}
            height={width > desktopScreenSize ? 267 : 227}
            layout="responsive"
            placeholder="empty"
          />
        </div>
        <div className={styles["brand-div"]}>
          {appState?.lang === "ar"
            ? brandNameAR?.[0]?.node?.value
            : product?.brand}
        </div>
        <Label className={styles["title"]}>
          {appState?.lang === "ar"
            ? productNameAR?.[0]?.node?.value?.split(/- (.*)/s)[1]
            : productData?.name?.split(/- (.*)/s)[1]}
        </Label>
        <div className={styles["rating-div"]}>
          <StarRating
            count={5}
            rating={totalRating}
            pointerEventsNone={true}
            starWidth={12.4}
            starHeight={12}
          />
          <Label className={styles["rating"]}>
            {reviewsData && reviewsData?.length > 0
              ? reviewsData?.length
              : null}
          </Label>
        </div>
        <Label className={styles["description"]}>
          {t("Help the community decide")}
        </Label>
        <div>
          <Button
            buttonSize="sm"
            buttonText={t("write review")}
            onClick={() => {
              setModalInfo({
                isOpen: true,
                productDetail: productData,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewProductCard;
