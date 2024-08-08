import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./blog-card.module.scss";
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
import AnimationWrapper from "../ui/animation-wrapper";
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
  btnText?: string;
  sectionTwo?: boolean;
  btnLink?: string;
}

const BlogCards = ({
  cardImage,
  cardTitle,
  description = "",
  onClick,
  className = "",
  width = 10,
  height = 10,
  color = "#000000",
  id = "",
  cardHeading = "",
  cardUrl = "",
  btnText = "",
  btnLink = "",
  sectionTwo = false,
}: CardProps): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  router?.events?.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <>
      <AnimationWrapper
        animationName="slide-up"
        animationDelay="0.4s"
        lazyLoad={true}
      >
        <div
          id={id}
          className={`${styles[sectionTwo ? "shape" : "card"]}  ${
            styles[className]
          }`}
          onClick={() => {
            onClick && onClick();
          }}
          data-testid="click-div"
        >
          {/* <div className={styles["card-heading"]}> */}
          {cardHeading ? (
            <Label style={{ color: color }} className={styles["card-title"]}>
              {cardHeading}
            </Label>
          ) : null}
          {/* </div> */}
          <div className={styles["image-section"]}>
            <div
              style={{
                backgroundColor: cardImage?.url ? "" : "#eeeded",
                cursor: cardUrl ? "pointer" : "auto",
              }}
              className={styles["img-wrapper"]}
            >
              {cardUrl ? (
                <Link href={cardUrl}>
                  <Image
                    data-testid={"card-img"}
                    className={`${styles["card-image"]}`}
                    src={cardImage?.url || "/"}
                    alt={
                      cardTitle || cardImage?.altText || btnText || "Card Image"
                    }
                    title={
                      cardTitle || cardImage?.altText || btnText || "Card Image"
                    }
                    width={width}
                    height={height}
                    layout="responsive"
                    quality={100}
                  />
                </Link>
              ) : (
                <Image
                  data-testid={"card-img"}
                  className={`${styles["card-image"]}`}
                  src={cardImage?.url || "/"}
                  alt={
                    cardTitle || cardImage?.altText || btnText || "Card Image"
                  }
                  title={
                    cardTitle || cardImage?.altText || btnText || "Card Image"
                  }
                  width={width}
                  height={height}
                  layout="responsive"
                  quality={100}
                />
              )}
            </div>
          </div>

          <div className={styles["card-content"]}>
            {cardTitle ? (
              <Heading
                element={"h3"}
                style={{ color: color }}
                className={styles["card-title"]}
              >
                {cardTitle}
              </Heading>
            ) : null}
            <div key={Math.random()} className={styles["card-description"]}>
              <p
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></p>
            </div>
            {!sectionTwo && (
              <Button
                testId="blog-btn"
                buttonSize={"sm"}
                buttonText={btnText}
                isLoading={isLoading}
                buttonStyle="transparent"
                spinnerColor="Black"
                onClick={() => {
                  if (btnLink) {
                    setIsLoading(true);
                    router.push(btnLink);
                  }
                }}
                style={{
                  border: "none",
                  cursor: btnLink ? "pointer" : "auto",
                }}
              ></Button>
            )}
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
};
export default BlogCards;
