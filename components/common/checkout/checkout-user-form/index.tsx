import React, { useState, FC, useContext, useEffect } from "react";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./checkout-user-form-modal.module.scss";
import Input from "components/common/ui/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { Calendar } from "components/icons";

type formHeadingPayload = {
  password?: string;
  confirmPassword?: string;
  dateOfBirth?: string;
  anniversaryDate?: string;
};

type paymentModalHeadingProps = {
  add: string;
  edit: string;
  delete: string;
};

interface NewPaymentMethodProps {
  paymentMethod?: formHeadingPayload;
  isOpen?: boolean;
  setIsOpen?: Function;
  isEditAddress?: boolean;
  createAddressPayload?: Function;
  updateAddress?: Function;
  deleteAddress?: Function;
  hideDefaultDelete?: boolean;
}

const CheckoutUserForm: FC<NewPaymentMethodProps> = ({
  paymentMethod = {},
  isOpen = false,
  setIsOpen = () => {},
  isEditAddress = false,
  createAddressPayload = () => {},
  updateAddress = () => {},
  // deleteAddress = () => {},
  // hideDefaultDelete = false,
}) => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");

  const paymentModalHeading: paymentModalHeadingProps = t(
    "paymentModalHeading",
    {},
    { returnObjects: true }
  );
  const checkoutUserFormHeadings: formHeadingPayload = t(
    "checkoutUseFormHeadings",
    {},
    { returnObjects: true }
  );

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(
       t("Enter first name")
    ),
    lastName: Yup.string().required(
       t("Enter last name")
    ),
    // title: Yup.string().required(
    //   appState?.lang === "en" ? "Select title" : "مطلوب"
    // ),
    cardNumber: Yup.string().required(
      t("Enter card number")
    ),
    expDate: Yup.string()
      .required("Enter expiration date")
      .matches(
        /^0[1-9]\/[0-9]{4}$|^1[0-2]\/[0-9]{4}$/g,
        t("expDateMatchError")
      ),
    cvv: Yup.string().required(t("cvvError")),
  });

  return (
    <>
      <div className={styles["wrapper-new-cc-form"]}>
        {isOpen ? (
          <Formik
            enableReinitialize
            // validateOnChange={false}
            initialValues={{
              password: isEditAddress
                ? paymentMethod?.password?.split(" ")[0]
                : "",
              confirmPassword: isEditAddress
                ? paymentMethod?.confirmPassword?.split(" ")[1]
                : "",
              dateOfBirth: isEditAddress
                ? paymentMethod?.dateOfBirth?.split(" ")[1]
                : "",
              anniversaryDate: isEditAddress
                ? paymentMethod?.anniversaryDate?.split(" ")[1]
                : "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setErrors, setSubmitting }) => {
              let response: { error_codes: string[] } = { error_codes: [] };
              if (isEditAddress) {
                response = updateAddress && (await updateAddress(values));
              } else {
                response =
                  createAddressPayload && (await createAddressPayload(values));
              }
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
                  <div className={styles["div-form"]}>
                    <div className={styles["div-form-input"]}>
                      <Input
                        role={"password"}
                        label={t(checkoutUserFormHeadings.password)}
                        name={"password"}
                        type={"password"}
                        value={values.password}
                        className={styles["address-input"]}
                        error={
                          errors.password && touched.password && errors.password
                        }
                        onChange={(e) => {
                          let newVal = e.target.value.replace(
                            /[^A-Za-z](?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/g,
                            ""
                          );
                          setFieldValue("password", newVal);
                        }}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className={styles["div-form-input"]}>
                      <Input
                        label={t(checkoutUserFormHeadings.confirmPassword)}
                        name={"confirmPassword"}
                        role={"confirmPassword"}
                        type={"password"}
                        value={values.confirmPassword}
                        className={styles["address-input"]}
                        error={
                          errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword
                        }
                        onChange={(e) => {
                          let newVal = e.target.value.replace(
                            /[^A-Za-z](?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/g,
                            ""
                          );
                          setFieldValue("confirmPassword", newVal);
                        }}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className={styles["div-form-input"]}>
                      <Input
                        divInputClass={styles["input-date-field"]}
                        role="dateOfBirth"
                        label={t(checkoutUserFormHeadings.dateOfBirth)}
                        name={"dateOfBirth"}
                        type={"date"}
                        inputIcon={<Calendar />}
                        placeHolder={"mm/dd/yyyy"}
                        value={values?.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className={styles["div-form-input"]}>
                      <Input
                        divInputClass={styles["input-date-field"]}
                        role="anniversaryDate"
                        label={t(checkoutUserFormHeadings.anniversaryDate)}
                        name={"anniversaryDate"}
                        type={"date"}
                        inputIcon={<Calendar />}
                        placeHolder={"mm/dd/yyyy"}
                        value={values?.anniversaryDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div  role="anniversaryNotice" className={styles["anniversary-field-note"]}>
                        We will be sending you gift vouchers on your
                        birthday/anniversary.
                      </div>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        ) : null}
      </div>
    </>
  );
};

export default CheckoutUserForm;
