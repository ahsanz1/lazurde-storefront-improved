import React, { useState, useContext, useEffect } from "react";
import styles from "../style.module.scss";
import Label from "components/common/ui/label";
import Slider from "components/common/ui/slider/slider";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import { SwiperSlide } from "swiper/react";
import WriteAReview from "components/common/reviews/write-review";
import useTranslation from "next-translate/useTranslation";
import ReviewProductCard from "./card";
interface ProductWithOutReviewsProps {
  products?: any;
  reviewsData?: any;
}

const ProductWithOutReviews = ({
  products = [],
  reviewsData = [],
}: ProductWithOutReviewsProps): JSX.Element => {
  const [width] = useWindowSize();
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    productDetail: {},
  });
  const { t } = useTranslation("common");
  const staticData: any = t("accountReviewData", {}, { returnObjects: true });
  const [productsWithNoReview, setproductsWithNoReview] = useState([]);

  useEffect(() => {
    if (products) {
      const _product =
        products &&
        products?.length > 0 &&
        products?.filter((product: any) => {
          return !reviewsData?.find((review: any) => {
            return (
              String(review?.review?.productHandle) === String(product?.sku)
            );
          });
        });
      _product && setproductsWithNoReview(_product);
    }
  }, [reviewsData, products]);

  return (
    <>
      {productsWithNoReview && productsWithNoReview?.length > 0 ? (
        <div className={styles["product-without-review_wrapper"]}>
          <div>
            <Label className={styles["main-label"]}>
              {staticData?.yourNextReviewHeading}
            </Label>

            <Slider
              desktopSlidePerView={2}
              mobileSlidePerView={1.45}
              navigation={width > desktopScreenSize ? true : false}
              className={`account-review-slider`}
              hasScrollbar={false}
            >
              <>
                {productsWithNoReview &&
                  productsWithNoReview?.length > 0 &&
                  productsWithNoReview?.map((content: any, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <ReviewProductCard
                          product={content}
                          setModalInfo={setModalInfo}
                        />
                      </SwiperSlide>
                    );
                  })}
              </>
            </Slider>
          </div>
        </div>
      ) : null}

      <WriteAReview
        isOpened={modalInfo?.isOpen}
        onClose={() =>
          setModalInfo({
            isOpen: false,
            productDetail: {},
          })
        }
        productData={modalInfo?.productDetail}
      />
    </>
  );
};

export default ProductWithOutReviews;
