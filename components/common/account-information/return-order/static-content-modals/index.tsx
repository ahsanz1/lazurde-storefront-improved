import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import RefundSubmittedModal from "../refund-submitted-modal";
import { returnOrderModalTypes } from "lib/types/common";
import useTranslation from "next-translate/useTranslation";

interface ReturnOrderStaticModalsProps {
  setIsModalOpen?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setIsStaticContentModal?: Function;
  setMyReturnComponentActive?: Function;
  returnAmount?: { price: number | string; currency: string };
  paymentDetail?: any;
}

const ReturnOrderStaticModals = ({
  setIsModalOpen,
  isStaticContentModal,
  setIsStaticContentModal,
  setMyReturnComponentActive,
  returnAmount,
  paymentDetail = {},
}: ReturnOrderStaticModalsProps): JSX.Element => {
  const { t } = useTranslation("common");
  const onCloseModal = () => {
    setIsStaticContentModal({
      isCourierCollection: false,
      isStoreDropOff: false,
    });
    setMyReturnComponentActive();
    setIsModalOpen(false);
  };

  // const _returnAmount = `${
  //   returnAmount?.price > 0 ? returnAmount?.currency : ""
  // } ${returnAmount?.price > 0 ? returnAmount?.price : ""}`;

  const _returnAmount = "Payment";

  return (
    <>
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isStoreDropOff}
        onClose={() => {
          onCloseModal();
        }}
        role={"isStoreDropOffonCloseModal"}
        modalClassName={"store-dropoff"}
        heading={t("modalHeading")}
        content={
          <>
            {t("storeDropOfModalContent")}
            {` your payment ${t("pricenote")}.`}
          </>
        }
      />
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isCourierCollection}
        onClose={() => {
          onCloseModal();
        }}
        role={"isCourierCollectiononCloseModal"}
        modalHeight="290px"
        modalClassName={"courier-submit"}
        heading={t("modalHeading")}
        content={
          <>
            {t("courierModalContent")}
            <span className={styles["price-note"]}>
              {` ${_returnAmount} ${t("pricenote")}.`}
            </span>
          </>
        }
      />
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isGiftCard}
        onClose={() => {
          onCloseModal();
        }}
        role={"isGiftCardonCloseModal"}
        modalHeight="308px"
        modalClassName={"gift-card"}
        heading={t("modalHeading")}
        content={
          <>
            {t("courierModalContent")}
            <span className={styles["price-note"]}>
              {` ${_returnAmount} ${t("pricenote")} ****-****-****-${
                paymentDetail && paymentDetail?.last4
              }.`}
            </span>
          </>
        }
      />
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isTabbyModal}
        onClose={() => {
          onCloseModal();
        }}
        role={"isTabbyModalonCloseModal"}
        modalHeight="308px"
        modalClassName={"tabby"}
        heading={t("modalHeading")}
        content={
          <>
            {t("tabbyModalContent")}
            <span className={styles["price-note"]}>
              {` ${_returnAmount} ${t("pricenote")} ****-****-****-${
                paymentDetail && paymentDetail?.last4
              }.`}
            </span>
          </>
        }
      />
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isPaypalModal}
        onClose={() => {
          onCloseModal();
        }}
        role={"isPaypalModalonCloseModal"}
        modalHeight="308px"
        modalClassName={"paypal"}
        heading={t("modalHeading")}
        content={
          <>
            {t("paypalModalConten")}
            <span className={styles["price-note"]}>
              {` ${_returnAmount} ${t("pricenote")} ****-****-****-${
                paymentDetail && paymentDetail?.last4
              }.`}
            </span>
          </>
        }
      />
      <RefundSubmittedModal
        isOpen={isStaticContentModal?.isCodModal}
        onClose={() => {
          onCloseModal();
        }}
        role={"isCodModalonCloseModal"}
        modalHeight="308px"
        modalClassName={"cod"}
        heading={t("modalHeading")}
        content={
          <>
            {t("codModalContent")}
            <span className={styles["price-note"]}>
              {` ${_returnAmount} ${t("pricenote")} ****-****-****-${
                paymentDetail && paymentDetail?.last4
              }.`}
            </span>
          </>
        }
      />
    </>
  );
};

export default ReturnOrderStaticModals;
