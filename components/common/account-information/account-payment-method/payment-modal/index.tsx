import React, { useState, FC, useContext, useEffect } from "react";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./payment-modal.module.scss";
import Input from "components/common/ui/Input";
// import Select from "components/common/ui/select";
import CheckBox from "components/common/ui/checkbox";
import useWindowSize from "lib/utils/useWindowSize";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import CvvIcon from "components/icons/CvvIcon";
import ToolTip from "components/common/ui/tooltip";
import { desktopScreenSize } from "lib/utils/common";

type formHeadingPayload = {
  title?: string;
  name?: string;
  cardNumber?: string;
  creditCardNumber?: string;
  firstName?: string;
  lastName?: string;
  expDate?: string;
  expiry_month?: string;
  expiry_year?: string;
  cvv?: string;
  isDefault?: boolean;
};

type paymentModalHeadingProps = {
  add: string;
  edit: string;
  delete: string;
};

interface NewPaymentMethodProps {
  paymentMethod: formHeadingPayload;
  isOpen?: boolean;
  setIsOpen?: Function;
  isEditAddress: boolean;
  createAddressPayload: Function;
  updateAddress: Function;
  deleteAddress: Function;
  hideDefaultDelete: boolean;
}

const titleOptions = [
  {
    label: "Mr",
    value: "Mr",
  },
  {
    label: "Mrs",
    value: "Mrs",
  },
];

const PaymentModal: FC<NewPaymentMethodProps> = ({
  paymentMethod = {},
  isOpen = false,
  setIsOpen = () => {},
  isEditAddress = false,
  createAddressPayload = () => {},
  updateAddress = () => {},
  deleteAddress = () => {},
  hideDefaultDelete = false,
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [width] = useWindowSize();

  const paymentModalHeading: paymentModalHeadingProps = t(
    "paymentModalHeading",
    {},
    { returnObjects: true }
  );
  const paymentFormHeadings: formHeadingPayload = t(
    "paymentFormHeadings",
    {},
    { returnObjects: true }
  );

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(t("Enter first name")),
    lastName: Yup.string().required(t("Enter last name")),
    // title: Yup.string().required(
    //   appState?.lang === "en" ? "Select title" : "مطلوب"
    // ),
    cardNumber: Yup.string().required(t("Enter card number")),
    expDate: Yup.string()
      .required(t("Enter expiration date"))
      .matches(
        /^0[1-9]\/[0-9]{4}$|^1[0-2]\/[0-9]{4}$/g,
        t("expDateMatchError")
      ),
    cvv: Yup.string().required(t("cvvError")),
  });

  useEffect(() => {
    isOpen && setShowDeleteDialog(false);
  }, [isOpen]);

  useEffect(() => {
    setButtonLoading(false);
  }, []);

  return (
    <Modal
      modalBodyClassName={`${styles["new-address-modal"]} ${
        showDeleteDialog ? styles["delete-modal"] : ""
      }`}
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
        <div
          className={styles["wrapper-new-address-form"]}
          data-show-data={!showDeleteDialog}
        >
          <div className={styles["div-form-heading"]}>
            <h2>
              {isEditAddress
                ? paymentModalHeading.edit
                : paymentModalHeading.add}
            </h2>
          </div>
          {isOpen ? (
            <Formik
              enableReinitialize
              // validateOnChange={false}
              initialValues={{
                title:
                  (isEditAddress
                    ? paymentMethod.title
                    : titleOptions[0].value) || "Mr",
                firstName: isEditAddress
                  ? paymentMethod?.name?.split(" ")[0]
                  : "",
                lastName: isEditAddress
                  ? paymentMethod?.name?.split(" ")[1]
                  : "",
                cardNumber: isEditAddress ? "111" : "",
                expDate: isEditAddress
                  ? `${paymentMethod.expiry_month}/${paymentMethod.expiry_year}`
                  : "",
                cvv: isEditAddress ? "111" : "",
                checkbox: isEditAddress ? paymentMethod.isDefault : false,
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { setErrors, setSubmitting }) => {
                setButtonLoading(true);
                let response: { hasError: boolean; response: []; error: [] } = {
                  hasError: false,
                  response: [],
                  error: [],
                };
                if (isEditAddress) {
                  response = updateAddress && (await updateAddress(values));
                } else {
                  response =
                    createAddressPayload &&
                    (await createAddressPayload(values));
                }

                if (response?.hasError) {
                  let errorObj = {};
                  response?.response?.map((error: string) => {
                    switch (error) {
                      case "card_number_invalid":
                        errorObj = {
                          ...errorObj,
                          ["cardNumber"]: t("Invalid card number"),
                        };
                        break;
                      case "card_expired":
                        errorObj = {
                          ...errorObj,
                          ["expDate"]: t("Card has expired"),
                        };

                        break;
                      case "card_expiry_year_invalid":
                        errorObj = {
                          ...errorObj,
                          ["expDate"]: t("Invalid expiry date"),
                        };

                        break;
                      case "cvv_invalid":
                        errorObj = { ...errorObj, ["cvv"]: t("Invalid cvv") };
                        break;

                      default:
                        break;
                    }
                    setErrors({ ...errorObj });
                  });
                  setButtonLoading(false);
                  setSubmitting(false);

                  return;
                }
                setButtonLoading(false);
                setSubmitting(false);
                setIsOpen(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }: any) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className={styles["container-form"]}>
                      <div className={styles["div-top"]}>
                        {/* <div>
                          <Select
                            showLabel={true}
                            label={t(paymentFormHeadings.title)}
                            name={"title"}
                            options={titleOptions}
                            defaultValue={values.title}
                            error={errors.title}
                            onChange={(value: { value: string }) => {
                              setFieldValue("title", value.value);
                            }}
                          ></Select>
                        </div> */}
                        <div className={styles["div-two-columns"]}>
                          <Input
                            role={"firstName"}
                            label={t(paymentFormHeadings.firstName)}
                            name={"firstName"}
                            value={values.firstName}
                            className={styles["address-input"]}
                            error={
                              errors.firstName &&
                              touched.firstName &&
                              errors.firstName
                            }
                            onChange={(e) => {
                              let newVal = e.target.value.replace(
                                /[^A-Za-z]/g,
                                ""
                              );
                              setFieldValue("firstName", newVal);
                            }}
                            onBlur={handleBlur}
                          />

                          <Input
                            label={t(paymentFormHeadings.lastName)}
                            name={"lastName"}
                            role={"lastName"}
                            value={values.lastName}
                            className={styles["address-input"]}
                            error={
                              errors.lastName &&
                              touched.lastName &&
                              errors.lastName
                            }
                            onChange={(e) => {
                              let newVal = e.target.value.replace(
                                /[^A-Za-z]/g,
                                ""
                              );
                              setFieldValue("lastName", newVal);
                            }}
                            onBlur={handleBlur}
                          />
                        </div>
                        {!isEditAddress ? (
                          <div>
                            <Input
                              label={t(
                                width > desktopScreenSize
                                  ? paymentFormHeadings.cardNumber
                                  : paymentFormHeadings.creditCardNumber
                              )}
                              value={values.cardNumber}
                              name={"cardNumber"}
                              role={"cardNumber"}
                              className={styles["address-input"]}
                              placeHolder={"****-****-****-****"}
                              error={
                                errors.cardNumber &&
                                touched.cardNumber &&
                                errors.cardNumber
                              }
                              onChange={(e) => {
                                let newVal = e.target.value.replace(
                                  /[^0-9]/g,
                                  ""
                                );

                                let changedVal = newVal;
                                if (newVal.length > 4) {
                                  changedVal = `${newVal.substring(
                                    0,
                                    4
                                  )}-${newVal.substring(4)}`;
                                }
                                if (newVal.length > 8) {
                                  changedVal = `${newVal.substring(
                                    0,
                                    4
                                  )}-${newVal.substring(
                                    4,
                                    8
                                  )}-${newVal.substring(8)}`;
                                }
                                if (newVal.length > 12) {
                                  changedVal = `${newVal.substring(
                                    0,
                                    4
                                  )}-${newVal.substring(
                                    4,
                                    8
                                  )}-${newVal.substring(
                                    8,
                                    12
                                  )}-${newVal.substring(12)}`;
                                }
                                if (newVal.length >= 16) {
                                  changedVal = `${newVal.substring(
                                    0,
                                    4
                                  )}-${newVal.substring(
                                    4,
                                    8
                                  )}-${newVal.substring(
                                    8,
                                    12
                                  )}-${newVal.substring(12, 16)}`;
                                }

                                setFieldValue("cardNumber", changedVal);
                                // handleChange(e);
                              }}
                              onBlur={handleBlur}
                            />
                          </div>
                        ) : null}

                        <div className={styles["div-two-columns"]}>
                          <div className={styles["div-cvv"]}>
                            <Input
                              label={t(paymentFormHeadings.expDate)}
                              name={"expDate"}
                              role={"expDate"}
                              value={values.expDate}
                              placeHolder={"MM/YYYY"}
                              className={styles["address-input"]}
                              error={
                                errors.expDate &&
                                touched.expDate &&
                                errors.expDate
                              }
                              onChange={(e) => {
                                let newVal = e.target.value.replace(
                                  /[^0-9 \/]/g,
                                  ""
                                );
                                if (newVal.length === 3) {
                                  newVal = newVal.replace(/\//, "");
                                  newVal = `${newVal.slice(
                                    0,
                                    2
                                  )}/${newVal.slice(2)}`;
                                }
                                const match = newVal.match(
                                  /^0$|^0[1-9]$|^0[1-9]\/$|^0[1-9]\/[0-9]{0,4}$|^1$|^1[0-2]$|^1[0-2]\/$|^1[0-2]\/[0-9]{0,4}$/
                                );
                                if (newVal && match === null) return;
                                setFieldValue("expDate", newVal);
                              }}
                              onBlur={handleBlur}
                            />
                          </div>
                          {!isEditAddress ? (
                            <div className={styles["div-cvv"]}>
                              <Input
                                label={t(paymentFormHeadings.cvv)}
                                name={"cvv"}
                                role={"cvv"}
                                value={values.cvv}
                                placeHolder={"***"}
                                className={styles["address-input"]}
                                error={errors.cvv && touched.cvv && errors.cvv}
                                onChange={(e) => {
                                  const newVal = e.target.value
                                    .replace(/[^0-9]/g, "")
                                    .substring(0, 3);

                                  e.target.value = newVal;
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                inputIcon={<CvvIcon />}
                                data-hide-field={isEditAddress}
                              />
                              <Button
                                buttonStyle="underline"
                                buttonText={t("whatIsThis")}
                                onClick={() => {
                                  // setShowDeleteDialog(true);
                                }}
                                id={"div-cvv"}
                              ></Button>
                              <ToolTip
                                parentId={"div-cvv"}
                                text={t("cvvToolTip")}
                                desktopHeight={160}
                                desktopWidth={253}
                                mobileWidth={171}
                                mobileHeight={178}
                              ></ToolTip>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className={styles["div-bottom"]}>
                        <div className={styles["div-checkbox"]}>
                          <CheckBox
                            className={styles["main-checkbox"]}
                            name={"checkbox"}
                            defaultChecked={values.checkbox}
                            label={t("CheckBoxPayment")}
                            onChange={(value) => {
                              setFieldValue("checkbox", value);
                            }}
                          />
                        </div>
                        <div className={styles["div-button"]}>
                          {isEditAddress ? (
                            <>
                              {!hideDefaultDelete ? (
                                <Button
                                  testId={"showDelete"}
                                  buttonSize={"xsm"}
                                  buttonStyle="underline"
                                  buttonText={t("Delete")}
                                  onClick={() => {
                                    setShowDeleteDialog(true);
                                  }}
                                ></Button>
                              ) : null}
                              <Button
                                testId={"editButton"}
                                type="submit"
                                buttonSize={"lr"}
                                buttonText={t("Save")}
                                isLoading={buttonLoading}
                                spinnerSize={24}
                                spinnerColor={"#fff"}
                              ></Button>
                            </>
                          ) : (
                            <Button
                              testId={"addButton"}
                              type="submit"
                              buttonSize={"lr"}
                              buttonText={t("Add")}
                              isLoading={buttonLoading}
                              spinnerSize={24}
                              spinnerColor={"#fff"}
                              onClick={() => {
                                setTimeout(() => {
                                  const errorList =
                                    document.getElementsByClassName(
                                      "div-error-msg"
                                    );

                                  errorList &&
                                    errorList.length > 0 &&
                                    errorList?.[0]?.parentElement?.scrollIntoView(
                                      {
                                        behavior: "smooth",
                                      }
                                    );
                                }, 300);
                              }}
                            ></Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          ) : null}
        </div>

        {/* DELETE POPUP  */}
        <div
          className={`${styles["wrapper-new-address-form"]} ${styles["delete-popup"]}`}
          data-show-data={showDeleteDialog}
        >
          <div className={styles["div-form-heading"]}>
            <h2>{paymentModalHeading.delete}</h2>
          </div>
          <div className={styles["container-form"]}>
            <div className={`${styles["div-top"]} ${styles["delete-form"]}`}>
              <div className={styles["message-text"]}>
                {t("DeletePaymentMessage")}
              </div>
            </div>
            <div className={`${styles["div-bottom"]} ${styles["delete-form"]}`}>
              <div className={styles["div-button"]}>
                <>
                  <Button
                    testId={"cancelDelete"}
                    buttonSize={"xsm"}
                    buttonStyle="underline"
                    buttonText={t("Cancel")}
                    onClick={() => {
                      setShowDeleteDialog(false);
                    }}
                  ></Button>
                  <Button
                    testId={"acceptDelete"}
                    buttonSize={"lr"}
                    buttonText={t("Delete")}
                    onClick={() => {
                      deleteAddress && deleteAddress();
                      setIsOpen(false);
                    }}
                  ></Button>
                </>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default PaymentModal;
