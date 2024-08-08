import React, { useState, useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import Input from "components/common/ui/Input";
import Button from "components/common/ui/button";
import useWindowSize from "lib/utils/useWindowSize";
import Modal from "components/common/ui/modal";

interface PhoneDetailsProps {
  editPhoneModal?: boolean;
  setEditPhoneModal?: Function;
  modalClassName?: string;
}

const VerifyPhoneDetails = ({
  editPhoneModal,
  setEditPhoneModal,
  modalClassName,
}: PhoneDetailsProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [size] = useWindowSize();

  return (
    <Modal
      modalBodyClassName={` ${styles["edit-phone-modal"]} ${modalClassName} `}
      modalWidth={"562px"}
      modalHeight={"619px"}
      isOpened={editPhoneModal}
      onClose={() => {
        setEditPhoneModal(false);
      }}
      bgBluryModal={true}
      modalAnimation="none"
    >
      <div>
        <div className={styles["phone_main"]}>
          <div className={styles["phone_main_section"]}>
            <div role="Heading">
              <p className={styles["phone_reset"]}>{t("verify")}</p>
              <p className={styles["phone_reset_para"]}>{t("security")}</p>
            </div>
            <form className={styles["sigin-form"]}>
              <div className={styles["div-phone-input"]}>
                <Input
                  inputContainerClass={styles["input-wrapper"]}
                  label={t("phoneNumberr")}
                  name={"phoneNumber"}
                  type={"number"}
                  value={""}
                  onChange={() => {}}
                />
                <Button
                  className={styles["send-button"]}
                  type="submit"
                  buttonText={size > 768 ? t("sendCode") : t("send")}
                ></Button>
              </div>
              <div className={styles["div-phone-input"]}>
                <Input
                  label={t("EnterCode")}
                  placeHolder={t("EnterCode")}
                  name={"code"}
                  type={"text"}
                  value={""}
                  onChange={() => {}}
                />
              </div>
              <p className={styles["information_para"]}>
                {t("verifyInformation")}
              </p>
              <div className={styles["Checkbox"]}>
                <Input
                  inputContainerClass={styles["input-wrapper"]}
                  divInputClass={styles["phone_checkbox_div"]}
                  label={""}
                  name={"agreeCheckbox"}
                  type={"checkbox"}
                  value={""}
                />
                <p>{t("agree")}</p>
              </div>
              <div
                data-testid="continue"
                className={styles["div-submit-button"]}
              >
                <Button
                  className={styles["submit-button"]}
                  type={"submit"}
                  buttonText={t("Continue")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default VerifyPhoneDetails;
