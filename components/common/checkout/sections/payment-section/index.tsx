import React, { useState, FC, useContext, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
// import ClickAndCollectSearch from "components/common/storeLocator/clickAndCollectSearch";
import { StoreLocatorXMProps } from "lib/types/common";
import styles from "./style.module.scss";
import Image from "next/image";
import RadioButton from "components/common/ui/radio-button";
import CheckBox from "components/common/ui/checkbox";
import TabbyCard from "components/common/tabby-popup/tabby-card";
import CreditCardModal from "../../credit-card-modal";
import Button from "components/common/ui/button";
import Label from "components/common/ui/label";
import { AppContext } from "lib/context";
import { beginApplePaySession } from "lib/utils/shipping-and-checkout";
import CodIcon from "components/icons/Cod";
import { AppleButton, TabbyIcon } from "components/icons";
import MadaIcon from "components/icons/Mada";
import MasterCardIcon from "components/icons/Mastercard";
import VisaIcon from "components/icons/Visa";
import { useRouter } from "next/router";
import { APPLE_PAY_MERCHANT_ID } from "general-config";
import { useCustomer } from "lib/middleware-apis/customers";

type PaymentSectionProps = {
  addressData?: any;
  getAddressData?: any;
  formDatas?: any;
  isLoading?: boolean;
  setIsLoading?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
  customerDetails?: any;
  setCustomerDetails?: Function;
  selectedPaymentType?: any;
  setSelectedPaymentType?: any;
  performFabricCheckout?: any;
  selectedShippingMethod?: any;
  tabbyEnabled?: boolean;
  selectedPaymentInstrument?: any;
  setFormErrors: any;
  setApplePay?: Function;
};

const PaymentSection: FC<PaymentSectionProps> = ({
  storeLocatorProps,
  performFabricCheckout,
  selectedPaymentType,
  setSelectedPaymentType,
  customerDetails = {},
  setCustomerDetails = () => {},
  selectedShippingMethod,
  tabbyEnabled = false,
  selectedPaymentInstrument,
  addressData,
  formDatas,
  setFormErrors,
  setApplePay,
  isLoading,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation("common");
  const { appState, cartData } = useContext(AppContext);
  const { push } = useRouter() || { push: () => {} };
  const { selectedPayment, defaultId }: any = useRef({});
  const [showApplePayBtn, setShowApplePayBtn] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState(0);
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const isLoginUser = customerData?.entityId > 0 ? true : false;

  useEffect(() => {
    console.log("merchat", APPLE_PAY_MERCHANT_ID);
    if (
      APPLE_PAY_MERCHANT_ID &&
      //@ts-ignore
      window &&
      //@ts-ignore
      window.ApplePaySession &&
      //@ts-ignore
      ApplePaySession.canMakePaymentsWithActiveCard(APPLE_PAY_MERCHANT_ID)
    ) {
      setShowApplePayBtn(true);
    }
  }, []);

  const paymentTypes = {
    creditLabel: t("CreditCard"),
    creditImages: [
      {
        url: <VisaIcon width="45px" height="15px" />,
        altText: "Image1",
      },
      {
        url: <MasterCardIcon width="27px" height="17px" />,
        altText: "Image1",
      },
      {
        url: appState?.region !== "eg" && (
          <MadaIcon width="51px" height="17px" />
        ),
        altText: "Image1",
      },
    ],

    tabbyLabel: t("PayInInstallements"),
    tabbyImages: [
      {
        url: <TabbyIcon width="48px" height="19px" />,
        altText: "Image1",
      },
    ],

    valULabel: t("PayInInstallements"),
    valUImages: [{}],
    valUImg: {
      url: "/valu.png",
      altText: "Image1",
      width: "33px",
      height: "19px",
    },

    tamaraLabel: t("PayInInstallements"),
    tamaraImages: [{}],
    tamaraImg: {
      url: "/tamara.png",
      altText: "Image1",
      width: "33px",
      height: "19px",
    },

    cashLabel: t("CashOnDelivery"),
    cashImages: [
      {
        url: <CodIcon width="42px" height="17px" />,
        altText: "Image1",
      },
    ],
  };

  const validateForms = () => {
    const checkError: any = {
      address: (
        addressData?._id
          ? addressData?.addressLine1
          : formDatas?.current?.address
      )
        ? ""
        : "Enter your address",
      firstName: (
        addressData?._id
          ? addressData?.additionalAttributes?.firstName
          : formDatas?.current?.firstName
      )
        ? ""
        : "Enter your first name",
      lastName: (
        addressData?._id
          ? addressData?.additionalAttributes?.lastName
          : formDatas?.current?.lastName
      )
        ? ""
        : "Enter your last name",
      postalCode: (
        addressData?._id
          ? addressData?.postalCode
          : formDatas?.current?.postalCode
      )
        ? ""
        : "Enter postal code",
      email: formDatas?.current?.email ? "" : "Enter your email ",
      phoneNumber: formDatas?.current?.phoneNumber
        ? ""
        : "Enter your contact number",
    };

    setTimeout(() => {
      const errorList = document.getElementsByClassName("div-error-msg");

      errorList &&
        errorList.length > 0 &&
        errorList?.[0]?.parentElement?.scrollIntoView({
          behavior: "smooth",
        });
    }, 300);

    let errors = 0;

    for (const key in checkError) {
      if (checkError[key]) {
        errors = errors + 1;
      }
    }

    if (errors > 0) {
      setFormErrors(checkError);
      return false;
    }
    return true;
  };

  const addressObj = {
    street1: addressData?._id
      ? addressData?.addressLine1
      : formDatas?.current?.address || "",
    city: addressData?._id ? addressData?.city : formDatas?.current?.city,
    state: addressData?._id
      ? addressData?.state
      : formDatas?.current?.governorate,
    country: addressData?._id
      ? addressData?.country
      : formDatas?.current?.country,
    zipCode: addressData?._id
      ? addressData?.postalCode
      : formDatas?.current?.postalCode || "",
    email: formDatas?.current?.email || "",
    kind: "shipping",
    name: {
      first: addressData?._id
        ? addressData?.additionalAttributes?.firstName
        : formDatas?.current?.firstName || "",
      last: addressData?._id
        ? addressData?.additionalAttributes?.lastName
        : formDatas?.current?.lastName || "",
    },
    phone: {
      number: formDatas?.current?.phoneNumber || "",
      kind: "MOBILE",
    },
  };

  return (
    <>
      <div className={styles["bag-wrapper"]}>
        <span role="main-heading" className={styles["main-heading"]}>
          {t("paymant")}
        </span>
        <div className={styles["payment-box"]}>
          {/* <div className={styles["half-divider"]}>
            <hr />
            <span role="continueTexts" data-divider={true}>
              {t("continueWith")}
            </span>
            <hr />
          </div> */}
          {/* <div className={styles["external-btns"]}> */}
          {/* <button
              role="appleBtn"
              onClick={() => {
                push("/checkout");
              }}
              className={styles["apple-pay-btn"]}
            >
              <AppleButton />
            </button> */}
          {showApplePayBtn && (
            <div
              className={styles["apple-pay-button"]}
              onClick={() => {
                setApplePay(true);
                validateForms() &&
                  beginApplePaySession(
                    "US",
                    "USD",
                    cartData?.totalAmount + selectedShippingMethod?.cost,
                    addressObj,
                    performFabricCheckout
                  );
              }}
            ></div>
          )}
          {/* <button
              role="paypalBtn"
              onClick={() => {
                push("/checkout");
              }}
              className={styles["paypal-btn"]}
            >
              <Image
                src={"/paypal-logo.png"}
                alt="paypal-image"
                width={174}
                height={40}
                quality={100}
              />
            </button> */}
          {/* </div> */}
          {/* <div className={styles["half-divider-inc"]}>
            <hr />
            <span role="continueText" data-divider={true}>
              {appState?.lang === "en" ? "Or" : "أو"}
            </span>
            <hr />
          </div> */}
          <div role="creditLabel" className={styles["radio-box-payment"]}>
            <RadioButton
              name="radio-group"
              label={paymentTypes?.creditLabel}
              multipleIcons={paymentTypes?.creditImages}
              checked={selectedPaymentType?.creditCard}
              iconsClassName={styles["checkout-multi-icons"]}
              onChange={() => {
                setSelectedPaymentType({
                  creditCard: true,
                  tabbyPay: false,
                  valUPay: false,
                  tamaraPay: false,
                  cashOnDelivery: false,
                });
              }}
            />

            <>
              {/* {selectedPaymentType?.creditCard ? (
                // isLoading ? (
                //   renderSpinner()
                // ) : // Commented due to enable credit card form with the mock data
                customerDetails?.instruments?.length > 0 ? (
                  customerDetails?.instruments?.map(
                    (instrument: any, index: number) => {
                      if (activePaymentMethod !== index) {
                        return null;
                      }
                      selectedPaymentInstrument.current["instrument"] =
                        instrument;
                      return (
                        <div className={styles["div-cc-data"]} key={index}>
                          <div className={styles["div-left"]}>
                            <Label className={styles["div-cc-heading"]}>
                              {t("defaultPaymentMethod")}
                            </Label>
                            <Label>{`${
                              instrument?.account_holder?.first_name || ""
                            } ${
                              instrument?.account_holder?.last_name || ""
                            }`}</Label>
                            <Label>{`****-****-****-${instrument?.last4}`}</Label>
                            <Label>{`${instrument?.expiry_month}/${instrument?.expiry_year}`}</Label>
                            <Label>{`${instrument?.scheme}`}</Label>
                          </div>
                          <div className={styles["div-right"]}>
                            <div
                              role="paymentModal"
                              className={styles["div-edit-button"]}
                              onClick={() => {
                                setOpenModal(true);
                              }}
                            >
                              <Button
                                buttonStyle="underline"
                                buttonText={t("Change")}
                                buttonSize={"xsm"}
                              ></Button>
                            </div>
                          </div>
                          <CreditCardModal
                            paymentMethod={selectedPayment?.current}
                            isOpen={openModal}
                            setIsOpen={setOpenModal}
                            customerDetails={customerDetails}
                            setCustomerDetails={setCustomerDetails}
                            defaultId={defaultId}
                            activePaymentMethod={activePaymentMethod}
                            setActivePaymentMethod={setActivePaymentMethod}
                            hideDefaultDelete={
                              customerDetails?.instruments?.length > 1 &&
                              selectedPayment?.current?.isDefault
                            }
                          />
                        </div>
                      );
                    }
                  )
                ) : (
                  <CCForm
                    isOpen={true}
                    isLoginUser={isLoginUser}
                    selectedPaymentInstrument={selectedPaymentInstrument}
                  />
                )
              ) : null} */}
            </>
            {<hr className={styles["horizontal-divider"]} />}
          </div>
          {tabbyEnabled ? (
            <div
              role="tabbyLabel"
              className={styles["radio-box-payment"]}
              data-region={appState?.region === "eg"}
            >
              <RadioButton
                name="radio-group"
                label={paymentTypes?.tabbyLabel}
                multipleIcons={paymentTypes?.tabbyImages}
                checked={selectedPaymentType?.tabbyPay}
                onChange={() => {
                  setSelectedPaymentType({
                    creditCard: false,
                    tabbyPay: true,
                    valUPay: false,
                    tamaraPay: false,
                    cashOnDelivery: false,
                  });
                }}
              />
              {selectedPaymentType?.tabbyPay && (
                <div className={styles["div-cc-data"]}>
                  <TabbyCard />
                  {/* {t("dataUnavailable")} */}
                </div>
              )}
              {
                <hr
                  className={styles["horizontal-divider"]}
                  data-region={appState?.region === "ae"}
                />
              }
            </div>
          ) : null}

          {/* valU will be enbaled in phase 2 */}

          {/* <div
            role="valuLabel"
            className={styles["radio-box-payment"]}
            data-region={appState?.region === "sa" || appState?.region === "ae"}
          >
            <RadioButton
              name="radio-group"
              label={paymentTypes?.valULabel}
              icon={paymentTypes?.valUImg}
              checked={selectedPaymentType?.valUPay}
              onChange={() => {
                setSelectedPaymentType({
                  creditCard: false,
                  tabbyPay: false,
                  valUPay: true, 
                  tamaraPay: false,
                  cashOnDelivery: false,
                });
              }}
            />
            {selectedPaymentType?.valUPay && (
              <div className={styles["div-cc-data"]}>
                <CheckBox
                  className={styles["payment-checkbox"]}
                  name={"checkbox"}
                  defaultChecked={true}
                />
                <div className={styles["link-box"]}>
                  <div
                    onClick={() => {
                      // setCustomiseMsg(true);
                    }}
                  >
                    {t("acceptTermsCondition")}
                  </div>
                </div>
              </div>
            )}
            <hr className={styles["horizontal-divider"]} />
          </div> */}
          <div
            role="tamaraLabel"
            className={styles["radio-box-payment"]}
            data-region={appState?.region === "eg" || appState?.region === "ae"}
          >
            <RadioButton
              name="radio-group"
              label={paymentTypes?.tamaraLabel}
              icon={paymentTypes?.tamaraImg}
              checked={selectedPaymentType?.tamaraPay}
              onChange={() => {
                setSelectedPaymentType({
                  creditCard: false,
                  tabbyPay: false,
                  valUPay: false,
                  tamaraPay: true,
                  cashOnDelivery: false,
                });
              }}
            />
            {selectedPaymentType?.tamaraPay && (
              <div className={styles["div-cc-data"]}>
                <CheckBox
                  className={styles["payment-checkbox"]}
                  name={"checkbox"}
                  defaultChecked={true}
                />
                <div className={styles["link-box"]}>
                  <div
                    onClick={() => {
                      // setCustomiseMsg(true);
                    }}
                  >
                    {t("acceptTermsCondition")}
                  </div>
                </div>
              </div>
            )}
            <hr className={styles["horizontal-divider"]} />
          </div>

          <>
            <div
              role="cashLabel"
              className={styles["radio-box-payment"]}
              data-region={appState?.region === "ae"}
            >
              <RadioButton
                name="radio-group"
                label={paymentTypes?.cashLabel}
                multipleIcons={paymentTypes?.cashImages}
                checked={selectedPaymentType?.cashOnDelivery}
                onChange={() => {
                  setSelectedPaymentType({
                    creditCard: false,
                    tabbyPay: false,
                    valUPay: false,
                    tamaraPay: false,
                    cashOnDelivery: true,
                  });
                }}
              />
              {selectedPaymentType?.cashOnDelivery && (
                <div className={styles["div-cod-notice"]}>
                  <div className={styles["error-notice"]}>
                    <Image width={20} height={20} src={"/help.png"} alt="" />
                    <p>{t("CODNote")}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default PaymentSection;
