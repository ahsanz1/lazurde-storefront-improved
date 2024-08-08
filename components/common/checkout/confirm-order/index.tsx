import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Label from "components/common/ui/label";
import CheckoutUserForm from "../checkout-user-form";
import CheckBox from "components/common/ui/checkbox";
import { useRouter } from "next/router";
import Button from "components/common/ui/button";

const ConfirmOrder = ({
  loginUser = false,
  shippingAddress = [],
  formData = {
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    phoneNumber: "",
    governorate: "",
    postalCode: "",
    address: "",
  },
  paymentType = {
    creditCard: false,
    valUPay: false,
    tamaraPay: false,
    tabbyPay: false,
    cashOnDelivery: false,
  },
}): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const router = useRouter();
  const { push } = useRouter() || { push: () => {} };

  let type = "";

  if (paymentType?.creditCard) {
    type = "Credit Card";
  } else if (paymentType?.valUPay) {
    type = "valU";
  } else if (paymentType?.tamaraPay) {
    type = "Tamara";
  } else if (paymentType?.tabbyPay) {
    type = "Tabby";
  } else if (paymentType?.cashOnDelivery) {
    type = "COD";
  }

  return (
    <>
      <div className={styles["confirm-wrapper"]}>
        <span role="main-heading" className={styles["main-heading"]}>
          {t("orderConfirmMain")}
        </span>

        <div className={styles["order-details"]}>
          <div className={styles["order-num"]}>{t("order")}#:1234566</div>
          <div className={styles["order-msg"]}>{t("receiptNotice")}</div>
        </div>

        <div className={styles["div-main"]}>
          <div className={styles["div-left"]}>
            <div className={styles["tab-address-heading"]}>
              {t("shippingTo")}
            </div>
            {loginUser ? (
              <>
                {shippingAddress?.map((data: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      {data?.isDefault && (
                        <>
                          {" "}
                          <Label>{`${data?.additionalAttributes?.firstName} ${data?.additionalAttributes?.lastName}`}</Label>
                          <Label>{`${data.addressLine1}`}</Label>
                          <Label>{`${data.city}, ${data.state}, ${data.postalCode}`}</Label>
                          <Label>{`${data.country}`}</Label>
                          <Label>{`T: ${data?.additionalAttributes?.phoneNumber}`}</Label>{" "}
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <>
                <Label>{`${formData?.firstName} ${formData?.lastName}`}</Label>
                <Label>{`${formData?.address}`}</Label>
                <Label>{`${formData?.city}, ${formData?.governorate}, ${formData?.postalCode}`}</Label>
                <Label>{`${formData?.country}`}</Label>
                <Label>{`T: ${formData?.phoneNumber}`}</Label>
              </>
            )}

            <div className={styles["delivery-est"]}>
              {t("estimatedDelivery")}
            </div>
          </div>
          <div className={styles["div-right"]}>
            <div className={styles["purchase-heading"]}>
              {t("purchaseWith")}
            </div>
            <div className={styles["payment-method"]}>{type}</div>
          </div>
        </div>
      </div>

      {loginUser ? (
        <>
          {" "}
          <div
            className={styles["save-wrapper"]}
            style={{
              marginTop: width > desktopScreenSize ? "8px" : "",
            }}
          >
            <span role="main-heading" className={styles["main-heading"]}>
              {t("whatNext")}
            </span>
            <div className={styles["main-points"]}>
              <ul className={styles["order-steps"]}>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className={styles["checkout-btns"]}>
              <Button
                testId={"homePageBtn"}
                buttonSize={"xl"}
                buttonText={t("GoHomePageBtnText")}
                onClick={() => {
                  push("/");
                }}
              ></Button>

              <Button
                testId={"accPageBtn"}
                buttonSize={"xl"}
                buttonStyle={"white"}
                buttonText={t("accountPage")}
                onClick={() => {
                  push("/account");
                }}
              ></Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            className={styles["save-wrapper"]}
            style={{
              marginTop: width > desktopScreenSize ? "8px" : "",
            }}
          >
            <span role="main-heading" className={styles["main-heading"]}>
              {t("savedDetails")}
            </span>

            <div className={styles["main-points"]}>
              <ul className={styles["order-steps"]}>
                <li>{t("managePaymentPreference")}</li>
                <li>{t("createAddressBook")}</li>
                <li>{t("orderStatusView")}</li>
              </ul>
            </div>

            <div className={styles["div-main"]}>
              <CheckoutUserForm isOpen={true} />
            </div>
            <Button
              buttonSize="xl"
              buttonText={t("createAccBtn")}
              className={styles["create-acc-btn"]}
              onClick={() => {
                router.push("/account-success");
              }}
            ></Button>
            <div className={styles["div-checkbox-main"]}>
              <div className={styles["div-checkbox-data"]}>
                <CheckBox
                  className={styles["check-box"]}
                  name={"checkbox"}
                  defaultChecked={true}
                />
                <div className={styles["check-box"]}>
                  <div>{t("signUpText")}</div>
                </div>
              </div>
              <div className={styles["div-checkbox-data"]}>
                <CheckBox
                  className={styles["check-box"]}
                  name={"checkbox"}
                  defaultChecked={true}
                />
                <div className={styles["check-box"]}>
                  <div>{t("savePaymentDetails")}</div>
                </div>
              </div>
            </div>
            <div className={styles["privacy-note"]}>
              {t("personal data")}
              <span className={styles["privacy-note-click"]} onClick={() => {}}>
                {t("Privacy Notice Here.")}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmOrder;
