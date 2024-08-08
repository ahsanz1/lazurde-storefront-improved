import React, { FC, useContext, useState } from "react";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./index.module.scss";
import Button from "components/common/ui/button/index";
import useWindowSize from "lib/utils/useWindowSize";
import { SwiperSlide } from "swiper/react";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Slider from "components/common/ui/slider/slider";
import {
  checkMediaType,
  desktopScreenSize,
  getBloomreachImg,
  imageFallback,
} from "lib/utils/common";
import Heading from "../ui/heading";
import AnimationWrapper from "../ui/animation-wrapper";
import SkeletonImage from "../ui/skeleton-image";
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

const CollectionCard: FC<any> = ({
  collectionCard = [],
  component,
  page,
}: any): JSX.Element => {
  const [size] = useWindowSize();
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const { t } = useTranslation("common");
  const [buttonLoading, setButtonLoading] = useState(-1);
  const findContent = component && component?.getContent(page);
  const findProducts =
    (findContent && findContent?.productCard) || collectionCard;
  const sectionHeading = findContent && findContent?.categoryHeading;

  if (typeof window == undefined) return;
  const baseUrl =
    typeof window !== "undefined" &&
    `${window?.location.origin}/${router?.locale}`;

  return (
    <AnimationWrapper lazyLoad={true}>
      <div
        className={`${styles["collection-container"]} ${
          appState?.lang === "ar" && styles["arabic-card"]
        }`}
        style={{
          display: page?.isPreview() ? "block" : "flex",
          flexDirection: "column",
        }}
      >
        <Heading
          element="h2"
          data-testid="heading"
          className={styles["cards-heading"]}
        >
          {sectionHeading}
        </Heading>
        <div className={styles["collection-cards-wrapper"]}>
          {findProducts &&
            findProducts?.length > 0 &&
            findProducts?.map((content: any, index: any) => {
              const {
                cardContent,
                ctatext,
                ctalink,
                externalLink,
                isOpenInNewTab,
                titleRichText,
              } = content;

              const image =
                content?.imagelink &&
                getBloomreachImg(page, content?.imagelink);
              const mobileImage =
                content?.mobileImage &&
                getBloomreachImg(page, content?.mobileImage);
              const btnLink = ctalink && page?.getContent(ctalink)?.getUrl();
              const completeUrl = `${baseUrl}${btnLink}`;
              const img = size > desktopScreenSize ? image : mobileImage;
              return (
                <>
                  <AnimationWrapper lazyLoad={true}>
                    <div className={styles["collection-card"]} key={index}>
                      <div className={styles["image-section"]}>
                        <Image
                          key={index}
                          className={styles["collection-image"]}
                          src={img?.imgUrl || "/"}
                          alt={img?.altText || "Brand Card"}
                          width={size > desktopScreenSize ? 642 : 343}
                          height={size > desktopScreenSize ? 409 : 418}
                          layout="responsive"
                          placeholder="blur"
                          blurDataURL={imageFallback}
                          quality={100}
                          // // unoptimized={isDev}
                        />

                        {externalLink ? (
                          ctatext ? (
                            <Button
                              onClick={() => {
                                setButtonLoading(index);
                                if (externalLink) {
                                  if (isOpenInNewTab) {
                                    window.open(externalLink, "_blank");
                                  } else {
                                    router.push(externalLink);
                                  }
                                }
                              }}
                              buttonSize={
                                findProducts?.length > 1 ? "lr" : "xxl"
                              }
                              className={styles["collection-button"]}
                              buttonText={ctatext}
                              isLoading={index == buttonLoading}
                              isDisabled={buttonLoading !== -1}
                            />
                          ) : null
                        ) : ctatext ? (
                          <Button
                            onClick={() => {
                              setButtonLoading(index);
                              if (completeUrl) {
                                router.push(completeUrl);
                              }
                            }}
                            buttonSize={findProducts?.length > 1 ? "lr" : "xxl"}
                            className={styles["collection-button"]}
                            buttonText={ctatext}
                            isLoading={index == buttonLoading}
                            isDisabled={buttonLoading !== -1}
                          />
                        ) : null}
                      </div>
                      <div>
                        <Heading
                          element="h2"
                          className={styles["collection-title"]}
                        >
                          {cardContent?.title || titleRichText?.title}
                        </Heading>

                        <p
                          className={`${styles["collection-text"]}`}
                          key={Math.random()}
                          dangerouslySetInnerHTML={{
                            __html:
                              cardContent?.text ||
                              titleRichText?.content?.value,
                          }}
                        ></p>
                      </div>
                    </div>
                  </AnimationWrapper>
                </>
              );
            })}
        </div>
      </div>
    </AnimationWrapper>
  );
};
export default CollectionCard;
