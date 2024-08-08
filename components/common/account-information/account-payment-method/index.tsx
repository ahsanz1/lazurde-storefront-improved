import Label from "components/common/ui/label";
import { EditIcon, PaymentMethodIcon } from "components/icons";
import React, { useEffect, useContext, useState, useRef } from "react";
import styles from "./payment-method.module.scss";
import { AppContext } from "lib/context/index";
import Button from "components/common/ui/button";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { createNewCheckoutCustomer } from "lib/api/payment";
import { InstrumentProps, TokenProps } from "lib/types/common";
// import CardDetailsFrame from "./card-details-frame";
import ContentLoading from "components/common/ui/skeletons/content-loading";
import {
  createCheckoutPaymentInstrument,
  removeCheckoutPaymentInstrument,
  updateCheckoutPaymentInstrument,
} from "lib/middleware-apis/instruments";
import {
  updateCheckoutCustomer,
  storedInstruments,
} from "lib/middleware-apis/customers";

type PaymentPayload = {
  id?: string | number;
  title?: string;
  token?: string;
  name?: string;
  default?: boolean;
  firstName?: string;
  lastName?: string;
  cardNumber?: string;
  expDate?: string;
  cvv?: string;
  checkbox?: boolean;
};

const PaymentMethod = (): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<any>({
    instruments: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const selectedPayment: any = useRef({});
  const defaultId: any = useRef();
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));

  useEffect(() => {
    getCustomerData();
  }, [customerInfo?.email]);

  const getCustomerData = async () => {
    if (typeof window === undefined) return;
    const customerDetailPayload = customerInfo?.email || customerDetails?.id;
    const customer = await storedInstruments(
      customerInfo?.entityId,
      appState?.region
    );
    if (!customer) {
      setIsLoading(false);
      setModalOpen(false);
      return;
    }
    defaultId.current = customer?.response?.default;
    setCustomerDetails(customer?.response);
    setIsLoading(false);
    setModalOpen(false);
  };

  useEffect(() => {
    !modalOpen && setEditAddressModal(modalOpen);
  }, [modalOpen]);

  const createPaymentPayload = async (
    values: PaymentPayload,
    isDefault: string
  ) => {
    let customerId = "";
    if (!customerDetails?.id) {
      const payload = {
        email: customerInfo?.email,
        name: values?.name,
      };
      const response = await createNewCheckoutCustomer(payload);
      customerId = response?.data?.id;
    } else {
      customerId = customerDetails?.id;
    }

    const instrumentApiPayload: InstrumentProps = {
      type: "token",
      token: values?.token,
      account_holder: {
        first_name: values?.name.split(" ")[0],
        last_name: values?.name.split(" ")[1],
      },
      customer: {
        id: customerId,
        default: isDefault,
      },
    };

    const instrumentResponse = await createCheckoutPaymentInstrument(
      instrumentApiPayload
    );
    if (instrumentResponse?.hasError) {
      return {
        hasError: instrumentResponse?.hasError,
        response: instrumentResponse?.error,
      };
    }
    getCustomerData();
  };

  const updatePaymentMethod = async (values: PaymentPayload) => {
    const instrumentId = selectedPayment?.current?.id;
    const customerId = customerDetails?.id;

    const payload = {
      expiry_month: Number(values?.expDate?.split("/")[0]),
      expiry_year: Number(values?.expDate?.split("/")[1]),
      account_holder: {
        first_name: values?.firstName,
        last_name: values?.lastName,
      },
      customer: {
        id: customerId,
        default: values?.default,
      },
    };

    const response = await updateCheckoutPaymentInstrument(
      instrumentId,
      payload
    );
    if (response?.hasError) {
      return { hasError: response?.hasError, response: response?.error };
    } else {
      const updatedPayload: any = {
        default: instrumentId,
      };
      await updateCheckoutCustomer(customerId, updatedPayload);
    }
    getCustomerData();
  };

  const deletePaymentMethod = async () => {
    const instrumentId = selectedPayment?.current?.id;
    const response = await removeCheckoutPaymentInstrument(instrumentId);

    if (response) {
      getCustomerData();
    }
  };

  return (
    <>
      <div className={styles["wrapper-address-book"]}>
        <div className={styles["reviews-heading"]}>
          <div className={styles["div-heading-icon"]}>
            <PaymentMethodIcon />
          </div>
          <Label className={styles["label"]}>{t("PaymentMethods")}</Label>
          {customerDetails &&
          customerDetails?.length < 1 &&
          !isLoading &&
          width < desktopScreenSize ? (
            <div className={styles["div-message-mobile"]}>
              <p>{t("NoMethodMessage")}</p>
            </div>
          ) : null}
          {/* <div className={styles["div-add-address"]}>
            <Button
              buttonSize={"lr"}
              buttonText={t("AddNewMethod")}
              onClick={() => {
                setModalOpen(true);
              }}
            ></Button>
          </div> */}
        </div>
        {customerDetails &&
        customerDetails?.length < 1 &&
        !isLoading &&
        width > desktopScreenSize ? (
          <div className={styles["div-message"]}>
            <p>{t("NoMethodMessage")}</p>
          </div>
        ) : null}
      </div>

      <div className={`${styles["wrapper-addresses"]}`}>
        {customerDetails?.length > 0 ? (
          customerDetails?.map((paymentMethod: any, index: any) => {
            if (paymentMethod?.expiry_month.toString().length == 1)
              paymentMethod.expiry_month = `0${paymentMethod.expiry_month}`;
            return (
              <div
                key={index}
                className={styles["div-address-single"]}
                style={{
                  order: paymentMethod.is_default ? "-1" : index,
                }}
              >
                <div className={styles["div-address-heading"]}>
                  <Label>
                    {paymentMethod.is_default
                      ? t("defaultPaymentMethod")
                      : paymentMethod?.brand}
                  </Label>
                </div>
                <div className={styles["div-address-data"]}>
                  <div className={styles["div-left"]}>
                    {/* <Label>{`${
                      paymentMethod?.billing_address?.first_name || ""
                    } ${
                      paymentMethod?.billing_address?.last_name || ""
                    }`}</Label> */}
                    <Label>{`****-****-****-${paymentMethod?.last_4}`}</Label>
                    <Label>{`${paymentMethod?.expiry_month}/${paymentMethod?.expiry_year}`}</Label>
                    <Label>{`${paymentMethod?.brand}`}</Label>
                  </div>
                  {/* <div className={styles["div-right"]}>
                    <div
                      className={styles["div-edit-button"]}
                      data-testid={"edit-button"}
                      onClick={() => {
                        selectedPayment.current = {
                          ...paymentMethod,
                          isDefault: paymentMethod?.is_default,
                        };
                        setEditAddressModal(true);
                        setModalOpen(true);
                      }}
                    >
                      <Button
                        buttonStyle="underline"
                        buttonText={t("Edit")}
                      ></Button>
                      <div className={styles["div-edit-icon"]}>
                        <EditIcon />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })
        ) : isLoading ? (
          <div
            className={`${styles["div-address-single"]} ${styles["div-loader"]}`}
          >
            <ContentLoading />
          </div>
        ) : null}
      </div>
      {/* <CardDetailsFrame
        paymentMethod={selectedPayment.current}
        isOpened={modalOpen}
        instrumentCount={customerDetails?.instruments?.length === 1}
        setIsOpen={setModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        createPaymentPayload={createPaymentPayload}
        isCardDetailsEditForm={editAddressModal}
        deletePaymentMethod={deletePaymentMethod}
        updatePaymentMethod={updatePaymentMethod}
      /> */}
    </>
  );
};

export default PaymentMethod;
