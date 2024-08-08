import React, { FC, useState, useContext } from "react";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import styles from "./style.module.scss";
import Whatsapp from "components/icons/Whatsapp";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import FeedbackPopUp from "../feedback-popup";
import { CategoryProps } from ".";

const ContactUsCard = ({
  cardTitle,
  cardText,
  buttonText,
  phone,
  vatNumber,
  crNumber,
  email,
  show_whatsapp_btn,
  phoneHeading,
}: CategoryProps) => {
  const [width] = useWindowSize();
  const router = useRouter();
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);

  const redirectWhatsApp = (number: string | number) => {
    return width > desktopScreenSize
      ? `https://web.whatsapp.com/send?phone=${number}`
      : `https://wa.me/${number}`;
  };

  const handleWhatsAppClick = (whatsappNum: string) => {
    if (appState?.region == "sa") {
      router.push(redirectWhatsApp(whatsappNum));
    } else if (appState?.region == "ae") {
      router.push(redirectWhatsApp(whatsappNum));
    } else {
      router.push(redirectWhatsApp(whatsappNum));
    }
  };

  return (
    <>
      <div
        className={styles["category-section"]}
        style={{
          backgroundColor:
            width > desktopScreenSize
              ? "rgba(0, 0, 0, 0.05)"
              : "rgba(0, 0, 0, 0.02)",
        }}
      >
        <h2 className={styles["category-title"]}>{cardTitle}</h2>
        <Label className={styles["category-text"]}>{cardText}</Label>
        {email && <Label className={styles["category-details"]}>{email}</Label>}
        <div className={styles["category-number"]}>
          {phoneHeading ? (
            <>
              <div className={styles["phone-with-heading"]}>
                <span className={styles["phone-heading"]}>{phoneHeading}</span>
                <span className={styles["phone"]}>{phone}</span>
              </div>
            </>
          ) : phone ? (
            <Label className={styles["category-number"]}>{phone}</Label>
          ) : null}
          {vatNumber && (
            <Label className={styles["category-number"]}>{vatNumber}</Label>
          )}
          {crNumber && (
            <Label className={styles["category-number"]}>{crNumber}</Label>
          )}
        </div>
        {show_whatsapp_btn && (
          <div
            className={styles["category-imageBlock"]}
            onClick={() => {
              handleWhatsAppClick(phone);
            }}
          >
            <Whatsapp />
            <Label className={styles["category-imageText"]}>{"WhatsApp"}</Label>
          </div>
        )}
        {buttonText && (
          <Button
            onClick={() => setModalOpen(true)}
            className={styles["category-button"]}
          >
            {buttonText}
          </Button>
        )}
      </div>
      <FeedbackPopUp
        heading={t("sendFeedbackHeading")}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ContactUsCard;
