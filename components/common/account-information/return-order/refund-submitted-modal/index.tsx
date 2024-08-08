import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Modal from "components/common/ui/modal";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import useTranslation from "next-translate/useTranslation";
interface RefundSubmittedModalProps {
  role?: string;
  isOpen?: boolean;
  onClose?: Function;
  modalHeight?: string;
  modalClassName?: string;
  heading?: string;
  content?: JSX.Element | string;
}

const RefundSubmittedModal = ({
  role = "",
  isOpen = false,
  onClose = () => {},
  modalHeight = "",
  modalClassName = "",
  heading = "",
  content,
}: RefundSubmittedModalProps): JSX.Element => {
  const { t } = useTranslation("common");

  const onCloseModal = () => {
    onClose && onClose();
  };

  return (
    <Modal
      modalBodyClassName={`${styles["refund-modal"]} ${styles[modalClassName]}`}
      divTopBar={styles["refund-top-bar"]}
      isOpened={isOpen}
      bgBluryModal={true}
      modalWidth="562px"
      modalHeight={modalHeight || "286px"}
      onClose={() => {
        onCloseModal();
      }}
      role={role}
    >
      <div className={styles["modal-content"]}>
        <Heading element="h3" testId="heading" className={styles["heading"]}>
          {heading}
        </Heading>
        <Label role="content" className={styles["refund-content"]}>
          {content}
        </Label>
        <div className={styles["close-refund-modal"]}>
          <Button
            buttonText={t("close")}
            buttonSize="lr"
            onClick={() => {
              onCloseModal();
            }}
            testId="close-modal-btn"
          />
        </div>
      </div>
    </Modal>
  );
};

export default RefundSubmittedModal;
