import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./card.module.scss";
import Label from "components/common/ui/label";
import StarRating from "../ui/star-ratings";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import Heading from "../ui/heading";
import { getCurrency, changeLocaleFormat } from "lib/utils/common";
import { useRouter } from "next/router";
import Link from "next/link";
import { BC_CHANNEL_ID, isDev } from "general-config";
import Button from "../ui/button";
import { ATCPayload } from "lib/types/cart";
import { useCart } from "lib/utils/cart";
import { addItemEventFromPlp } from "lib/utils/datalayer-events";
import Spinner from "../ui/spinner";
interface CardProps {
  variants?: any;
  cardImage?: any;
  cardTitle?: string | JSX.Element;
  className?: string;
  onClick?: Function;
  width?: number | string;
  height?: number | string;
  color?: string;
  favIconSrc?: ImageType;
  description?: string;
  bambuserBtn?: boolean;
  bambuserBtnBody?: JSX.Element | string;
  cardHeading?: string;
  id?: string;
  reviews?: any;
  prices?: any;
  tag?: boolean;
  isInThePress?: boolean;
  isAboutUs?: boolean;
  cardUrl?: string;
}

const Cards = ({
  variants = [],
  cardImage,
  cardTitle,
  description = "",
  onClick,
  className = "",
  width = 10,
  height = 10,
  color = "#000000",
  favIconSrc,
  id = "",
  bambuserBtn = false,
  bambuserBtnBody = null,
  cardHeading = "",
  reviews = {},
  prices = {},
  tag = false,
  isInThePress = false,
  isAboutUs = false,
  cardUrl = "",
}: CardProps): JSX.Element => {
  const { appState, openDrawer, setOpenMiniCart } = useContext(AppContext);
  const { t } = useTranslation("common");
  const priceTitleDivAdjustment = isAboutUs || isInThePress;
  const router = useRouter();
  const [isImgLoading, setIsImgLoading] = useState(false);
  const DescriptionLabel = () => {
    return (
      <>
        {description ? (
          <Heading
            element="h3"
            style={{ color: color }}
            className={styles["card-description"]}
          >
            {description}
          </Heading>
        ) : null}
        {reviewDiv()}
      </>
    );
  };

  const reviewDiv = () => {
    return reviews?.starCount > 0 ? (
      <>
        <div className={styles["review-section"]}>
          <span className={styles["review-stars"]}>
            <StarRating
              count={reviews?.starCount}
              rating={reviews?.reviewCounts}
              pointerEventsNone={true}
              starWidth={12.4}
              starHeight={12}
            />
          </span>
          <span className={styles["review-count"]}>
            {reviews?.ratingCounts > 0 && reviews?.ratingCounts}
          </span>
        </div>
      </>
    ) : null;
  };
  if (isImgLoading) {
    setTimeout(() => {
      setIsImgLoading(false);
    }, 5000);
  }
  const hadDifferentSale =
    prices?.discount && prices?.salePrice != prices?.basePrice;
  return (
    <>
      <div
        id={id}
        className={`${styles["card"]}  ${styles[className]}`}
        onClick={() => {
          setIsImgLoading(true);
          onClick && onClick();
        }}
        data-testid="click-div"
      >
        <div className={styles["card-heading"]}>
          {cardHeading ? (
            <Label style={{ color: color }} className={styles["card-title"]}>
              {cardHeading}
            </Label>
          ) : null}
        </div>
        <div className={styles["image-section"]}>
          <div
            style={{
              backgroundColor: cardImage?.url ? "" : "#eeeded",
            }}
            className={styles["img-wrapper"]}
          >
            {cardUrl ? (
              <Link href={cardUrl}>
                <a>
                  <Image
                    data-testid={"card-img"}
                    className={`${styles["card-image"]}`}
                    src={cardImage?.url || "/"}
                    alt={description || cardImage?.altText || "Card Image"}
                    title={description || cardImage?.altText || "Card Image"}
                    width={width}
                    height={height}
                    layout="responsive"
                    quality={100}
                  // onClick={() => {
                  //   router?.push(cardUrl && cardUrl);
                  // }}
                  // // unoptimized={isDev}
                  />
                </a>
              </Link>
            ) : (
              <Image
                data-testid={"card-img"}
                className={`${styles["card-image"]}`}
                src={cardImage?.url || "/"}
                alt={description || cardTitle || cardImage?.altText || "Card Image"}
                title={description || cardTitle || cardImage?.altText || "Card Image"}
                width={width}
                height={height}
                layout="responsive"
                quality={100}
              // // unoptimized={isDev}
              />
            )}

            {bambuserBtn ? (
              <div
                data-testid="bambuser-body"
                className={styles["img-btn"]}
                onClick={() => {
                  document.documentElement.style.overflowY = "auto!important";
                }}
              >
                {bambuserBtnBody}
              </div>
            ) : null}
          </div>
          {/* {cardImage?.url && tag ? (
            <Label className={styles.exclusive_tag}>
              {t("onlineExclusiveTag").toUpperCase()}
            </Label>
          ) : null} */}
        </div>

        <div className={styles["card-content"]}>
          {cardTitle ? (
            <Heading
              element="div"
              style={{ color: color }}
              className={styles["card-title"]}
            >
              {cardTitle}
            </Heading>
          ) : null}
          {
            <Link href={cardUrl || ""}>
              <a>
                <DescriptionLabel />
              </a>
            </Link>
          }
          {prices?.basePrice ? (
            <div className={styles["card-title"]}>
              <span className={styles[hadDifferentSale ? "line-through" : ""]}>
                {prices?.basePrice && getCurrency(appState?.region)}{" "}
                {prices?.basePrice.toLocaleString()}{" "}
              </span>
              {hadDifferentSale ? (
                <>
                  <span>{prices?.discount && `-${prices?.discount}`} </span>
                  <span className={styles["sale_price"]}>
                    {prices?.salePrice > 0 && getCurrency(appState?.region)}{" "}
                    {prices?.salePrice.toLocaleString()}
                  </span>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
        {isImgLoading && (
          <div className={styles["div-loading"]}>
            <Spinner></Spinner>
          </div>
        )}
      </div>
    </>
  );
};
export default Cards;
