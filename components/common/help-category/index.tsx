import React, { useContext } from "react";
import Label from "components/common/ui/label";
import Image from "next/image";
import styles from "./style.module.scss";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import ContactUsCard from "./contact-us-card";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { contactCards } from "lib/api/static-ancillary/contactUs";
import { isDev } from "general-config";

export type CategoryProps = {
  cardTitle: string;
  cardText: string;
  buttonText: string;
  phone: string;
  vatNumber: string;
  crNumber?: string;
  email?: string;
  show_whatsapp_btn?: boolean;
  phoneHeading?: string;
};

const HelpCategory = ({ locale }: any) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();

  const bannerImgDesktop = {
    imgUrl:
      "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/contact-us/contact-us---desktop.jpg",
  };

  const bannerImgMobile = {
    imgUrl:
      "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/contact-us/contact-us---mobile-at-3x.jpg",
  };

  const bannerImg = {
    imgUrl:
      width > desktopScreenSize
        ? bannerImgDesktop?.imgUrl
        : bannerImgMobile?.imgUrl,
    altText: "Banner",
  };
  const contactUsCards = contactCards?.[locale];

  return (
    <>
      <div className={styles["category-container"]}>
        {bannerImg?.imgUrl && (
          <Image
            className={styles["category-mainImage"]}
            src={bannerImg?.imgUrl || "/"}
            alt={bannerImg?.altText || appState?.brand}
            layout="responsive"
            width={width > desktopScreenSize ? 1280 : 375}
            height={width > desktopScreenSize ? 308 : 120}
            // unoptimized={isDev}
          />
        )}
        <h1 className={styles["contact-heading"]}>{t("Contact Us ")}</h1>
        <div className={styles["category-block"]}>
          {contactUsCards &&
            contactUsCards?.length > 0 &&
            contactUsCards
              ?.filter(
                (card: { hideThisBlock: boolean }) => !card?.hideThisBlock
              )
              ?.map((category: any, index: number) => {
                const {
                  cardTitle,
                  cardText,
                  buttonText,
                  phone,
                  vatNumber,
                  crNumber,
                  email,
                  phoneHeading,
                  show_whatsapp_btn,
                } = category;
                return (
                  <ContactUsCard
                    key={index}
                    cardTitle={cardTitle}
                    cardText={cardText}
                    buttonText={buttonText}
                    phone={phone}
                    phoneHeading={phoneHeading}
                    vatNumber={vatNumber}
                    crNumber={crNumber}
                    email={email}
                    show_whatsapp_btn={show_whatsapp_btn}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default HelpCategory;
