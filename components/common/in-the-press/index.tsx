import React, { useContext } from "react";
import styles from "./in-the-press.module.scss";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Label from "components/common/ui/label";
import Link from "next/link";
import { AppContext } from "lib/context";
import Heading from "../ui/heading";
import { inThePressStatic } from "lib/api/static-ancillary/inThePress";
import useTranslation from "next-translate/useTranslation";
import SellerCardSlider from "../best-seller-card-slider";
import { bestSellerIds, isDev } from "general-config";
import { useRouter } from "next/router";
import { LocaleType } from "lib/types/common";
import { getBrandKey } from "lib/utils/constants";

type SingleCardTypes = {
  imgLink?: string;
  cardLink?: string;
  buttonText?: string;
  cardTitle?: string;
  cardText?: string;
};

const InThePress = ({ locale }: any) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);

  const bannerImage = {
    imgUrl:
      "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/banner-inthepress.svg",
    altText: "Banner",
  };

  const cardsData = inThePressStatic?.[locale]?.contactUsCard;
  return (
    <div className={styles["inthepress-container"]}>
      <div className={styles["banner"]}>
        {width > desktopScreenSize && bannerImage?.imgUrl ? (
          <Image
            src={bannerImage?.imgUrl || "/"}
            alt={bannerImage?.altText || appState?.brand}
            width={1280}
            height={308}
            layout="responsive"
            objectFit="cover"
            quality={100}
            // unoptimized={isDev}
          />
        ) : null}
        {width < desktopScreenSize && bannerImage?.imgUrl ? (
          <Image
            src={bannerImage?.imgUrl || "/"}
            alt={bannerImage?.altText || appState?.brand}
            width={375}
            height={207}
            layout="responsive"
            objectFit="cover"
            quality={100}
            // unoptimized={isDev}
          />
        ) : null}
      </div>
      <div className={styles["content-wrapper"]}>
        <Heading element="h1" className={styles["heading"]}>
          {t("InThePress")}
        </Heading>
        <div className={styles["stories-wrapper"]}>
          {cardsData &&
            cardsData?.length > 0 &&
            cardsData?.map((content: any, index: number) => {
              const { cardLink, buttonText, cardTitle, cardText, imgLink } =
                content;
              return (
                <div key={index} className={styles["story-card"]}>
                  <div className={styles["card-img"]}>
                    {imgLink?.imgUrl ? (
                      <Image
                        src={imgLink?.imgUrl || "/"}
                        alt={imgLink?.altText || "Card Image"}
                        width={400}
                        height={width > desktopScreenSize ? 200 : 234}
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                        // unoptimized={isDev}
                      />
                    ) : null}
                  </div>
                  <div className={styles["link"]}>
                    <Link href={cardLink || "/"}>
                      <a>{buttonText}</a>
                    </Link>
                  </div>
                  <h2 className={styles["title"]}>{cardTitle}</h2>
                  <Label className={styles["text"]}>{cardText}</Label>
                </div>
              );
            })}
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

export default InThePress;
