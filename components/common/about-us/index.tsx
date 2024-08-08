import React, { useContext } from "react";
import Image from "next/image";
import {
  AboutUsContentSectionTypes,
  ImageType,
  LocaleType,
} from "lib/types/common";
import styles from "./style.module.scss";
import ContentBlock from "./content-block";
import HeritageSlider from "./heritage-slider";
import Heading from "../ui/heading";
import { aboutUsStatic } from "lib/api/static-ancillary/aboutUs";
import useTranslation from "next-translate/useTranslation";
import SellerCardSlider from "../best-seller-card-slider";
import { bestSellerIds } from "general-config";
import { useRouter } from "next/router";
import { getBrandKey } from "lib/utils/constants";
import { AppContext } from "lib/context";

const AboutUs = ({ locale }: any): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const pageParams = aboutUsStatic?.[locale] || {};
  const {
    contentSectionOne = {},
    contentSectionTwo = {},
    contentSectionThree = {},
    sliderSection = {},
  } = pageParams;
  return (
    <>
      <div className={styles["main-wrapper"]}>
        <div className={styles["hero-banner-container"]}>
          <Image
            src={`https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/about-us-banner.svg`}
            layout="fill"
            objectFit="cover"
            alt={"Image"}
          />
          <div
            className={styles["banner-text-section"]}
            data-content-position={"Center"}
          >
            <Heading
              element="h1"
              className={styles["banner-text"]}
              data-testid="banner-text"
            >
              {t("lazurdeStory")}
            </Heading>
          </div>
        </div>
        <div className={styles["block-section"]}>
          <ContentBlock
            imageTwo={contentSectionOne?.imageLink}
            content={contentSectionOne?.titleContent?.content?.value}
            heading={contentSectionOne?.titleContent?.title}
            className="img-text-sec"
          />
        </div>
        <div className={styles["mid-section"]}>
          <div className={styles["mid-content"]}>
            <ContentBlock
              imageOne={contentSectionTwo?.imageLink}
              imageTwo={contentSectionTwo?.imageLinkTwo}
              content={contentSectionTwo?.titleContent?.content?.value}
              heading={contentSectionTwo?.titleContent?.title}
              className="img-text-sec"
              midSection={true}
            />
          </div>
        </div>
        <div>
          <HeritageSlider
            cards={sliderSection?.slider}
            sectionHeading={sliderSection?.sectionHeading}
            className="heritage-main"
          />
        </div>
        <div className={styles["block-section"]}>
          <ContentBlock
            imageTwo={contentSectionThree?.imageLink}
            content={contentSectionThree?.titleContent?.content?.value}
            heading={contentSectionThree?.titleContent?.title}
            className="img-text-sec"
            isReverse={true}
          />
        </div>
        <div className={styles["block-section"]}>
          <SellerCardSlider
            className={styles["best-seller-section"]}
            engagementid={
              bestSellerIds?.[
                getBrandKey(appState?.brandEN) as "lazurde" | "missl"
              ]?.[router?.locale as LocaleType]
            }
            heading={t("bestSellers")}
            buttonText={"Shop All"}
            buttonLink={"/jewelry"}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
