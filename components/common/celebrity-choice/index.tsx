import React, { FC, useContext } from "react";
import { ImageType, LocaleType } from "lib/types/common";
import styles from "./celebrity-choice.module.scss";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import Heading from "../ui/heading";
import { celebrityChoiceStatic } from "lib/api/static-ancillary/celebrityChoice";
import SellerCardSlider from "../best-seller-card-slider";
import { bestSellerIds } from "general-config";
import { useRouter } from "next/router";
import { getBrandKey } from "lib/utils/constants";

interface CelebritiesProps {
  celebrityImage?: ImageType | { url: ""; altText: "" };
  celebritySign?: ImageType | { url: ""; altText: "" };
}
interface CelebrityChoiceProps {
  page: any;
  component: any;
}

const CelebrityChoice: FC<any> = ({ page, component, locale }: any) => {
  const { t } = useTranslation("common");
  const [size] = useWindowSize();
  const { appState } = useContext(AppContext);
  const router = useRouter();

  const findData = celebrityChoiceStatic?.[locale];
  const bannerHeading = findData && findData?.banner?.title;
  const findBanner = findData && findData?.banner?.image;
  const celebritiesData = findData?.contentWithLinks;
  const findContent = findData && findData?.contentSection;
  const contentGet = findContent && findContent?.titleContent;

  return (
    <div className={styles["celebrity-container"]}>
      <div className={styles["banner-heading-container"]}>
        {findBanner?.imgUrl ? (
          <Image
            src={findBanner?.imgUrl || "/"}
            alt={findBanner?.altText || appState?.brand}
            width={size > desktopScreenSize ? 1280 : 375}
            height={size > desktopScreenSize ? 376 : 200}
            layout="responsive"
            objectFit="cover"
          />
        ) : null}
        <div className={styles["heading-div"]} data-content-position={"Center"}>
          <Heading element="h1" className={styles["banner-heading"]}>
            {bannerHeading}
          </Heading>
        </div>
      </div>
      <div className={styles["celebrities-wrapper"]}>
        {celebritiesData &&
          celebritiesData.length > 0 &&
          celebritiesData?.map((celeb: any, index: number) => {
            const celebRef = celeb && celeb?.image;
            const celebSignRef = celeb && celeb?.imageLink;

            return (
              <div key={index} className={styles["celebrity-card"]}>
                {celebRef?.imgUrl ? (
                  <Image
                    src={celebRef?.imgUrl}
                    alt={celebRef?.altText || "Celebrity Image"}
                    width={size > desktopScreenSize ? 421 : 343}
                    height={size > desktopScreenSize ? 416 : 302}
                  />
                ) : null}
                {celebSignRef?.imgUrl ? (
                  <Image
                    src={celebSignRef?.imgUrl}
                    alt={celeb?.celebritySign?.altText}
                    width={244}
                    height={113}
                  />
                ) : null}
              </div>
            );
          })}
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["details-wrapper"]}>
        <div className={styles["details-heading"]}>
          <Heading element="h2">{contentGet?.title}</Heading>
        </div>
        <div className={styles["details-description"]}>
          {
            <p
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html: contentGet?.content?.value,
              }}
            ></p>
          }
          {contentGet?.title && (
            <button className={styles["shop-all-btn"]}>
              {findContent?.linkText || t("shopAll")}
            </button>
          )}
        </div>
      </div>
      <SellerCardSlider
        engagementid={
          bestSellerIds?.[
            getBrandKey(appState?.brandEN) as "lazurde" | "missl"
          ]?.[router?.locale as LocaleType]
        }
      />
    </div>
  );
};

export default CelebrityChoice;
