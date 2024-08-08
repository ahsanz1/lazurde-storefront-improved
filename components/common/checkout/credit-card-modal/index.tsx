import React, { useState, FC, useContext, useEffect, useRef } from "react";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./cc-modal.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import Label from "components/common/ui/label";
import Spinner from "components/common/ui/spinner";
import PaymentModal from "components/common/account-information/account-payment-method/payment-modal";
import RadioButton from "components/common/ui/radio-button";
// import CardDetailsFrame from "components/common/account-information/account-payment-method/card-details-frame";
import { InstrumentProps, TokenProps } from "lib/types/common";
import {
  createNewCheckoutCustomer,
  getCheckoutPaymentToken,
} from "lib/api/payment";
import { createCheckoutPaymentInstrument, removeCheckoutPaymentInstrument, updateCheckoutPaymentInstrument } from "lib/middleware-apis/instruments";
import { getInstrumentsByCustomer } from "lib/middleware-apis/customers";


type formHeadingPayload = {
  title?: string;
  name?: string;
  cardNumber?: string;
  firstName?: string;
  lastName?: string;
  expDate?: string;
  expiry_month?: string;
  expiry_year?: string;
  cvv?: string;
  isDefault?: boolean;
};

interface NewPaymentMethodProps {
  paymentMethod: formHeadingPayload;
  isOpen?: boolean;
  setIsOpen?: Function;
  // isEditAddress: boolean;
  hideDefaultDelete: boolean;
  customerDetails: any;
  setCustomerDetails?: Function;
  defaultId: any;
  activePaymentMethod?: number;
  setActivePaymentMethod?: Function;
}

type PaymentPayload = {
  id?: string | number;
  title?: string;
  firstName?: string;
  lastName?: string;
  cardNumber?: string;
  expDate?: string;
  cvv?: string;
  checkbox?: boolean;
  default?: boolean;
  name?: string;
  token?: string;
};

const CreditCardModal: FC<NewPaymentMethodProps> = ({
  paymentMethod = {},
  isOpen = false,
  customerDetails,
  setIsOpen = () => {},
  setCustomerDetails = () => {},
  activePaymentMethod = 0,
  setActivePaymentMethod,
  // isEditAddress = false,
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const defaultId: any = useRef();
  const selectedPayment: any = useRef({});
  const [modalOpen, setModalOpen] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [active, setActive] = useState(activePaymentMethod);
  useEffect(() => {
    !modalOpen && setEditAddressModal(modalOpen);
  }, [modalOpen]);

  useEffect(() => {
    isOpen && setActive(activePaymentMethod);
  }, [isOpen]);

  const userInfo = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("user_info")
  );

  let userProfile = JSON.parse(
    typeof window !== "undefined" &&
      window.localStorage.getItem("individualInfo")
  );

  const getCustomerData = async () => {
    if (typeof window === undefined) return;

    if (!userInfo) return;

    if (!userProfile) {
      // userProfile = await fetchCustomerProfile(userInfo?.id);
    }

    if (!userProfile) return;

    const customerDetailPayload =
      userProfile?.additionalAttributes?.checkoutCustomerId ||
      userProfile?.email;

    const customer = await getInstrumentsByCustomer(customerDetailPayload);
    
    if (!customer) {
      setModalOpen(false);
      return;
    }

    defaultId.current = customer?.data?.default;
    setCustomerDetails(customer?.data);
    setModalOpen(false);
  };

  const createPaymentPayload = async (
    values: PaymentPayload,
    isDefault: string
  ) => {
    let customerId = "";
    if (!customerDetails?.id) {
      const payload = {
        email: userInfo?.email,
        name: values?.name,
      };
      const response = await createNewCheckoutCustomer(payload);
      customerId = response?.data?.id;

      const individualPayload = {
        partyType: "P",
        additionalAttributes: {
          ...userProfile?.additionalAttributes,
          checkoutCustomerId: customerId,
        },
      };
      // await updateIndividualUserProfile(userProfile?._id, individualPayload);
    } else {
      customerId = customerDetails?.id;
    }

    const instrumentApiPayload: InstrumentProps = {
      type: "token",
      token: values?.token,
      customer: {
        id: customerId,
        default: isDefault,
      },
      account_holder: {
        first_name: values?.name.split(" ")[0],
        last_name: values?.name.split(" ")[1],
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
        // id: customerId,
        default: values?.default,
      },
    };

    const response = await updateCheckoutPaymentInstrument(
      instrumentId,
      payload
    );
    if (response?.hasError) {
      return { hasError: response?.hasError, response: response?.error };
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
      <Modal
        divModalBody={`${styles["new-payment-modal"]} ${
          showDeleteDialog ? styles["delete-modal"] : ""
        }`}
        modalBodyClassName={styles["payment-modal-body"]}
        divTopBar={styles["modal-cross-icon"]}
        modalWidth={"562px"}
        modalHeight={showDeleteDialog ? "253px" : "619px"}
        isOpened={isOpen}
        onClose={() => {
          if (showDeleteDialog) {
            setShowDeleteDialog(false);
          } else {
            setIsOpen(false);
          }
        }}
        bgBluryModal={true}
      >
        <>
          <div className={styles["main-wrapper"]}>
            <div className={styles["main-heading"]}>Choose Payment Method</div>
            <div className={`${styles["wrapper-addresses"]}`}>
              {customerDetails?.instruments?.length > 0 ? (
                customerDetails?.instruments.map(
                  (paymentMethod: any, index: any) => {
                    if (paymentMethod?.expiry_month.toString().length == 1)
                      paymentMethod.expiry_month = `0${paymentMethod?.expiry_month}`;
                    return (
                      <>
                        <div
                          key={index}
                          role="addresses"
                          className={styles["div-address-single"]}
                          style={{
                            order:
                              customerDetails?.default === paymentMethod.id
                                ? "-1"
                                : index,
                          }}
                        >
                          <div className={styles["div-address-heading"]}>
                            <RadioButton
                              label={
                                customerDetails?.default === paymentMethod?.id
                                  ? t("defaultPaymentMethod")
                                  : paymentMethod?.scheme
                              }
                              checked={active == index}
                              onChange={() => {
                                setActive(index);
                              }}
                            />
                          </div>
                          <div className={styles["div-address-data"]}>
                            <div className={styles["div-left"]}>
                              <Label>{`${paymentMethod?.account_holder?.first_name} ${paymentMethod?.account_holder?.last_name}`}</Label>
                              <Label>{`****-****-****-${paymentMethod?.last4}`}</Label>
                              <Label>{`${paymentMethod?.expiry_month}/${paymentMethod?.expiry_year}`}</Label>
                              <Label>{`${paymentMethod?.scheme}`}</Label>
                            </div>
                            <div className={styles["div-right"]}>
                              <div
                                className={styles["div-edit-button"]}
                                data-testid={"edit-button"}
                                onClick={() => {
                                  selectedPayment.current = {
                                    ...paymentMethod,
                                    isDefault:
                                      customerDetails?.default ===
                                      paymentMethod?.id,
                                  };
                                  setEditAddressModal(true);
                                  setModalOpen(true);
                                }}
                              >
                                <Button
                                  buttonStyle="underline"
                                  buttonText={t("Edit")}
                                ></Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles["half-divider"]}
                          style={{
                            order:
                              customerDetails?.default === paymentMethod.id
                                ? "-1"
                                : index,
                          }}
                        >
                          <hr />
                        </div>
                      </>
                    );
                  }
                )
              ) : (
                <div
                  className={`${styles["div-address-single"]} ${styles["div-loader"]}`}
                >
                  <span>{t("loadingPaymentMethods")}</span>
                  <Spinner width={12} height={12} stroke={6}></Spinner>
                </div>
              )}
            </div>
            <div className={styles["div-btns"]}>
              <div
                role="addBtn"
                className={styles["div-add-button"]}
                onClick={() => {
                  setModalOpen(true);
                  // setIsOpen(false);
                }}
              >
                <Button
                  className={styles["add-payment-btn"]}
                  buttonStyle="underline"
                  buttonText={t("AddNewMethod")}
                  buttonSize={"lr"}
                ></Button>
              </div>
              <div
                role="saveBtn"
                className={styles["div-save-button"]}
                onClick={() => {
                  setActivePaymentMethod(active);
                  setIsOpen(false);
                }}
              >
                <Button
                  className={styles["save-payment-btn"]}
                  buttonStyle="black"
                  buttonText={t("Save")}
                  buttonSize={"lr"}
                ></Button>
              </div>
            </div>
          </div>
        </>
      </Modal>
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
        modalHeight={showDeleteDialog ? "253px" : "619px"}
      /> */}
    </>
  );
};

export default CreditCardModal;
