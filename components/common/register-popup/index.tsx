import React, { useState, FC, useContext } from "react";
import Image from "next/image";
import Label from "components/common/ui/label/index";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./register-popup.module.scss";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
interface RegisterModalProps {
  modalImage?: { url?: string; altText?: string };
  modalTitle?: string;
  modalText?: string;
  modalButton?: string;
  isOpen?: boolean;
  onClose?: Function;
  modalWidth?: string;
  modalHeight?: string;
}

const RegisterModal: FC<RegisterModalProps> = ({
  isOpen = false,
  modalImage = {},
  modalTitle = "",
  modalText = "",
  modalWidth = "600px",
  modalHeight = "400px",
  onClose,
}) => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const router = useRouter();
  const { handleAuthModal, setHandleAuthModal } = useContext(AppContext);

  return (
    <Modal
      className={`${styles["register-modal"]} ${
        styles[handleAuthModal?.isModalopen ? "set-zindex" : ""]
      }`}
      modalBodyClassName={styles["register-modal-body"]}
      divModalBody={styles["register-modal-content"]}
      divTopBar={styles["register-modal-top-bar"]}
      overlayClass={styles["register-modal-overlay"]}
      modalWidth={modalWidth}
      modalHeight={modalHeight}
      bgBluryModal={true}
      isOpened={isOpen}
      onClose={() => {
        onClose && onClose();
      }}
    >
      <div className={styles["register-container"]}>
        {modalImage && (
          <div className={styles["img"]}>
            <Image
              className={styles["modal-image"]}
              src={modalImage?.url || "/modal.png"}
              alt={modalImage?.altText || "modal image"}
              width={width > desktopScreenSize ? 300 : 300}
              height={width > desktopScreenSize ? 400 : 400}
              layout="responsive"
            />
          </div>
        )}
        <div className={styles["register-text-section"]}>
          {modalTitle ? (
            <Label className={styles["modal-title"]}>{modalTitle}</Label>
          ) : null}
          {modalText ? (
            <Label className={styles["modal-text"]}>{modalText}</Label>
          ) : null}
          <div className={styles["auth-btns"]}>
            <Button
              buttonSize="lr"
              buttonText={t("signUp")}
              onClick={() => {
                router.push("/sign-up");
                onClose();
              }}
            />
            <Button
              buttonText={t("signIn")}
              buttonStyle="underline"
              className={styles.signin_btn}
              onClick={() => {
                router.push("/sign-in");
              }}
              style={{
                width: "fit-content",
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default RegisterModal;
