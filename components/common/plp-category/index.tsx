import React, { FC } from "react";
import Cards from "../card/index";
import styles from "./plp-category.module.scss";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import { BrProps } from "@bloomreach/react-sdk";
import { Component, ImageSet, Page, Reference } from "@bloomreach/spa-sdk";
import useWindowSize from "lib/utils/useWindowSize";
import Link from "next/link";
import { StaticBannerWithCardsData } from "lib/types/common";

type Card = {
  title?: string;
  image?: { imgUrl: string; altText: string };
  link?: string | Reference;
};

interface PLPCategoryProps extends BrProps {
  backgroundColor?: string;
  component?: Component;
  page?: Page;
  staticBannerData?: StaticBannerWithCardsData;
}

const PLPCategory: FC<PLPCategoryProps> = ({
  backgroundColor = "#fff",
  component,
  page,
  staticBannerData,
}) => {
  const [width] = useWindowSize();
  if (!staticBannerData) {
    var documentDesktop = component?.getModels()?.bannerDocumentDesktop;
    var documentMobile = component?.getModels()?.bannerDocumentMobile;
    var allData =
      documentDesktop && page?.getContent(documentDesktop)?.getData();
    if (width < desktopScreenSize && documentMobile) {
      allData = page?.getContent(documentMobile)?.getData();
    }
    var pageCategory: string = allData?.pageCategory;
    var bannerData: string = allData?.banner?.content?.value;
    var bannerTitle: string = allData?.banner?.title;
    var cards: Card[] | [] = allData?.categoryCards || [];
  }

  if (staticBannerData) {
    var pageCategory = staticBannerData?.pageCategory;
    var bannerData = staticBannerData?.bannerData;
    var bannerTitle = staticBannerData?.bannerTitle;
    var cards: Card[] | [] = staticBannerData?.cards || [];
  }

  if (!allData && !staticBannerData) {
    return null;
  }

  return (
    <div
      className={styles["plpCategory-container"]}
      style={{ backgroundColor: backgroundColor }}
      data-div-order="2"
    >
      <h1 className={` ${styles["plpCategory-category"]}`}>{pageCategory}</h1>
      <h2 className={` ${styles["plpCategory-title"]}`}>{bannerTitle}</h2>
      <p
        key={Math.random()}
        className={styles["plpCategory-text"]}
        dangerouslySetInnerHTML={{
          __html: bannerData,
        }}
      ></p>

      <div className={` ${styles["plpCategory-card"]}`}>
        {cards &&
          cards?.length > 0 &&
          cards?.map((card: Card, index: number) => {
            const { image, title, link } = card;
            const img = image?.imgUrl ? image : getBloomreachImg(page, image);
            const cardImage = {
              url: img?.imgUrl,
              altText: img?.altText,
            };
            const cardLink = (link && page?.getContent(link)?.getUrl()) || "/";
            return (
              <div key={index}>
                {/* <Link href={cardLink}>
                  <a> */}
                <Cards
                  cardUrl={cardLink}
                  width={desktopScreenSize ? 314 : 167.5}
                  height={desktopScreenSize ? 331 : 180.5}
                  className={`plp-card`}
                  cardImage={cardImage}
                  cardTitle={title}
                  key={index}
                />
                {/* </a>
                </Link> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PLPCategory;
