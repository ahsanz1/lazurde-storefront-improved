import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./index.module.scss";
import Button from "components/common/ui/button/index";
import { useRouter } from "next/router";
import {
  desktopScreenSize,
  getBloomreachImg,
  imageFallback,
} from "lib/utils/common";
import Heading from "../ui/heading";
import useWindowSize from "lib/utils/useWindowSize";
import Link from "next/link";
import AnimationWrapper from "../ui/animation-wrapper";
import { isDev } from "general-config";

interface CollectionCardTypes {
  collectionbutton?: string;
  collectiontitle?: string;
  collectiontext?: string;
  collectionImage?: ImageType;
  collectionImageKenaz?: ImageType;
  collectionImageMissl?: ImageType;
  collectionButtonLink?: string;
}

const PromotionCard: FC<any> = ({
  collectionCard = [],
  component,
  page,
}: any): JSX.Element => {
  const router = useRouter();
  const is404Page = router?.asPath === "/404";
  const [size] = useWindowSize();
  const [buttonLoading, setButtonLoading] = useState(-1);
  const findContent = component && component?.getContent(page);
  const findProducts =
    (findContent && findContent?.productCard) || collectionCard;

  const sectionHeading = findContent && findContent?.categoryHeading;
  let hasImage = false;
  if (
    Array.isArray(findProducts) &&
    findProducts?.length > 0 &&
    findProducts.some(
      (content) =>
        (size > desktopScreenSize && content?.imagelink) ||
        (size < desktopScreenSize && content?.mobileImage)
    )
  ) {
    hasImage = true;
  }

  const baseUrl =
    typeof window !== "undefined"
      ? `${window?.location.origin}/${router?.locale}`
      : "/en-sa/";

  return (
    <>
      <section
        className={`${styles[hasImage ? "collection-wrapper" : "no-data"]}`}
        style={{ backgroundColor: "bgColor" }}
      >
        {sectionHeading && (
          <Heading
            element="h2"
            testId={"testId"}
            className={styles["card-slider__section-heading"]}
          >
            {sectionHeading}
          </Heading>
        )}

        <div
          className={styles["blocks"]}
          data-card-gap={findProducts?.length}
          data-is-errorpage={is404Page}
        >
          {Array.isArray(findProducts) &&
            findProducts?.length > 0 &&
            findProducts?.map((content, index) => {
              const {
                cardContent,
                ctatext,
                ctalink,
                bannerTextPosition,
                externalLink,
                titleRichText,
              } = content;
              const image =
                content?.imagelink &&
                getBloomreachImg(page, content?.imagelink);
              const mobileImage =
                content?.mobileImage &&
                getBloomreachImg(page, content?.mobileImage);
              const innerImgLogo =
                content?.innerImg && getBloomreachImg(page, content?.innerImg);
              const btnLink = ctalink && page?.getContent(ctalink)?.getUrl();
              const completeUrl = `${baseUrl}${btnLink}`;
              const contentPosition =
                bannerTextPosition?.bannertextPosition?.selectionValues;
              const img = size > desktopScreenSize ? image : mobileImage;

              return (
                <>
                  <AnimationWrapper
                    externalClass={styles["promotion-anmi-wrapper"]}
                    lazyLoad={true}
                  >
                    <div className={styles["collection-block"]} key={index}>
                      <div
                        className={`${styles["image-section"]}`}
                        data-content-position={
                          contentPosition?.[0]?.key?.trim() || "Bottom Left"
                        }
                      >
                        <Image
                          key={index}
                          className={styles["image"]}
                          src={img?.imgUrl || "/"}
                          alt={img?.altText || "Collection Card"}
                          width={100}
                          height={445}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={imageFallback}
                          quality={100}
                          // unoptimized={isDev}
                        />

                        <div className={`${styles["collection-content"]}`}>
                          <div>
                            {(cardContent?.title || titleRichText?.title) && (
                              <Heading
                                element="h2"
                                className={styles["collection-title"]}
                                style={{
                                  marginBottom:
                                    cardContent?.text || titleRichText?.title
                                      ? "0px"
                                      : "16px",
                                }}
                              >
                                {cardContent?.title || titleRichText?.title}
                              </Heading>
                            )}
                            {innerImgLogo?.imgUrl ? (
                              <div className={styles["inner-logo-img"]}>
                                <Image
                                  key={index}
                                  src={innerImgLogo?.imgUrl || "/"}
                                  alt={
                                    innerImgLogo?.altText || "Collection Card"
                                  }
                                  width={150}
                                  height={100}
                                  layout="fixed"
                                  quality={100}
                                  // unoptimized={isDev}
                                />
                              </div>
                            ) : null}

                            {cardContent?.text && (
                              <p className={`${styles["collection-text"]}`}>
                                {cardContent?.text}
                              </p>
                            )}
                            {titleRichText?.content?.value && (
                              <p
                                key={Math.random()}
                                dangerouslySetInnerHTML={{
                                  __html: titleRichText?.content?.value,
                                }}
                              ></p>
                            )}

                            <Button
                              onClick={() => {
                                setButtonLoading(index);
                              }}
                              isDisabled={buttonLoading !== -1}
                              isLoading={index == buttonLoading}
                              buttonSize={
                                size > 1300 ? "lr" : size > 1023 ? "sm" : "lr"
                              }
                              className={styles["collection-button"]}
                              // buttonText={ctatext}
                            >
                              <Link href={externalLink || completeUrl || "/"}>
                                <a style={{ color: "white" }}>{ctatext}</a>
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimationWrapper>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};
export default PromotionCard;
