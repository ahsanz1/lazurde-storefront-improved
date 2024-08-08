/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext } from "react";
import styles from "./banner.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import { desktopScreenSize, mobileScreenSize } from "lib/utils/common";
import { BrProps } from "@bloomreach/react-sdk";
import { getBloomreachImg } from "lib/utils/common";
import Image from "next/image";
import { useRouter } from "next/router";
import { StaticBannerData } from "lib/types/common";
import ParagraphWithMoreLess from "../content-show-hide";
import { isDev } from "general-config";

interface BannerProps extends BrProps {
  bgColor?: string;
  staticBannerData?: StaticBannerData;
}

const Banner: FC<BannerProps> = ({
  staticBannerData = null,
  bgColor = "",
  component,
  page,
}) => {

  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const router = useRouter();
  if (!staticBannerData) {
    const documentDesktop = component?.getModels()?.bannerDocumentDesktop;
    const documentMobile = component?.getModels()?.bannerDocumentMobile;
    var allData =
      documentDesktop && page?.getContent(documentDesktop)?.getData();
    if (width < desktopScreenSize && documentMobile) {
      allData = documentMobile && page?.getContent(documentMobile)?.getData();
    }
    var bannerData: string = allData && allData?.content?.value;
    var bannerTitle: string = allData && allData?.title;

    var contentPosition: string = allData?.titlePosition;
    var contentColor: string = allData?.textColor;
    var titleSize: number = allData?.titleSize;
    var titleSizeMobile: number = allData?.titleSizeMobile;
    var contentSize: number = allData?.contentSize;
    var contentSizeMobile: number = allData?.contentSizeMobile;
    var bannerPositionArray = allData?.bannerTextPosition?.selectionValues;
    var bannerPosition: string = bannerPositionArray?.[0]?.key?.trim();

    var image = getBloomreachImg(page, allData?.image) || {
      imgUrl: "",
      altText: "",
    };
  }
  if (staticBannerData) {
    var bannerData = staticBannerData?.bannerData;
    var bannerTitle = staticBannerData?.bannerTitle;

    var contentColor = staticBannerData?.titleColor;
    var titleSize = staticBannerData?.titleSize;
    var titleSizeMobile = staticBannerData?.titleSizeMobile;
    var contentSize = staticBannerData?.contentSize;
    var contentSizeMobile = staticBannerData?.contentSizeMobile;
    var bannerPosition = staticBannerData?.contentPosition;
    var contentWidth = staticBannerData?.contentWidth;
    var image = staticBannerData?.imageDesktop || {
      imgUrl: "",
      altText: "",
    };
    if (width < desktopScreenSize && staticBannerData?.imageMobile) {
      image = staticBannerData?.imageMobile || {
        imgUrl: "",
        altText: "",
      };
    }
  }

  if (!allData && !staticBannerData) {
    return null;
  }
  const isPLPCollection = router?.query?.category_child === "collections";
  return (
    <div
      className={styles["banner-container"]}
      style={{ backgroundColor: "" || bgColor }}
      data-div-order="2"
    >
      {image?.imgUrl ? (
        <div
          className={`${
            styles[
              isPLPCollection ? "plp-collection-banner" : "banner-image-section"
            ]
          } ${appState?.lang == "ar" && styles["arabic-layout"]}`}
        >
          <Image
            className={`${styles["banner-image"]}`}
            src={image?.imgUrl}
            layout="fill"
            alt={image?.altText || `${appState?.brand} ${bannerTitle}`}
            quality={100}
            // // unoptimized={isDev}
          />
        </div>
      ) : null}
      {bannerData ? (
        <div
          className={`${styles["banner-text-section"]} ${
            styles[image?.imgUrl ? "p-absolute" : "p-static"]
          }`}
          style={{
            textAlign: (contentPosition as CanvasTextAlign) || "start",
          }}
          data-content-position={bannerPosition || "Top Left"}
        >
          <div
            style={{
              width: "inherit",
            }}
          >
            <h1
              className={styles["banner-title"]}
              style={{
                color: contentColor || "black",
                fontSize:
                  width > desktopScreenSize
                    ? `${titleSize}px` || "32px"
                    : `${titleSizeMobile}px` || "24px",
              }}
            >
              {bannerTitle}
            </h1>
            <ParagraphWithMoreLess
              text={bannerData}
              textLength={width > desktopScreenSize ? 231 : 86}
              key={Math.random()}
              className={styles["banner-text"]}
              style={{
                color: contentColor || "black",
                width:
                  width > desktopScreenSize ? contentWidth || "initial" : "",
                fontSize:
                  width > desktopScreenSize
                    ? `${contentSize}px` || "18px"
                    : `${contentSizeMobile}px` || "13px",
              }}
            />
          </div>
        </div>
      ) : bannerTitle ? (
        <div
          className={`${styles["banner-text-section"]} ${
            styles[image?.imgUrl ? "p-absolute" : "p-static"]
          }`}
          style={{
            textAlign: (contentPosition as CanvasTextAlign) || "start",
          }}
        >
          <h1
            className={`${styles["banner-title"]} ${styles["title-only"]}`}
            style={{
              color: contentColor || "black",
              fontSize:
                width > desktopScreenSize
                  ? `${titleSize}px` || "32px"
                  : `${titleSizeMobile}px` || "24px",
            }}
          >
            {bannerTitle}
          </h1>
        </div>
      ) : null}
    </div>
  );
};
export default Banner;
