import React, { useState, FC, useContext, useEffect } from "react";
import styles from "./contact-info-form-modal.module.scss";
import Input from "components/common/ui/Input";
import Select from "components/common/ui/select";
import useWindowSize from "lib/utils/useWindowSize";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";

interface addressPayload {
  _id?: number;
  globalAddressId?: number;
  type: "M" | "E" | "P" | string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  county?: string;
  city?: string;
  state?: string;
  zipCode?: number;
  postalCode?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  isDefault?: string;
  groupId?: string;
  additionalAttributes?: { [key: string]: string | number };
}

type formHeadingPayload = {
  NickName?: string;
  Title?: string;
  FirstName?: string;
  LastName?: string;
  StreetAddress?: string;
  City?: string;
  Governorate?: string;
  Country?: string;
  PostalCode?: string;
  phoneNumber?: string;
};

type addressBookHeadingProps = {
  add: string;
  edit: string;
  delete: string;
};

interface NewAddressModalProps {
  addressMain?: addressPayload;
  isOpen?: boolean;
  setIsOpen?: Function;
  isEditAddress?: boolean;
  createAddressPayload?: Function;
  updateAddress?: Function;
  deleteAddress?: Function;
  hideDefaultDelete?: boolean;
  formDatas?: any;
  formErrors?: any;
  setFormErrors?: any;
}

const ContactInfoForm: FC<NewAddressModalProps> = ({
  addressMain = {},
  isOpen = false,
  setIsOpen = () => {},
  isEditAddress = false,
  createAddressPayload = () => {},
  updateAddress = () => {},
  formDatas,
  formErrors,
  setFormErrors,
  deleteAddress = () => {},
  hideDefaultDelete = false,
}): JSX.Element => {
  const [width] = useWindowSize();
  const [governorateData, setGovernorateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const { t } = useTranslation("common");

  const addressBookHeading: addressBookHeadingProps = t(
    "addressBookHeading",
    {},
    { returnObjects: true }
  );
  const formHeadings: formHeadingPayload = t(
    "formHeadings",
    {},
    { returnObjects: true }
  );

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Enter valid email")),
    phoneNumber: Yup.string()
      .required(t("Enter phone number"))
      .matches(phoneRegExp, t("Phone number is not valid")),
  });

  const userInfo: { email: string; primaryContact: string } = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("user_info")
  );

  const savedFormData =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("form_data"));

  //   useEffect(() => {
  //     isOpen && setShowDeleteDialog(false);
  //   }, [isOpen]);

  return (
    <>
      <div className={styles["wrapper-new-address-form"]}>
        {isOpen ? (
          <Formik
            // enableReinitialize
            initialValues={{
              email: userInfo?.email || savedFormData?.email,
              phoneNumber:
                userInfo?.primaryContact || savedFormData?.phone?.number,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (isEditAddress) {
                updateAddress &&
                  updateAddress({ ...values, id: addressMain?._id });
              } else {
                createAddressPayload && createAddressPayload(values);
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
              if (formDatas) {
                formDatas.current = { ...formDatas?.current, ...values };
              }
              return (
                <form onSubmit={handleSubmit}>
                  <div className={styles["container-form"]}>
                    <div className={styles["div-top"]}>
                      <div className={styles["field-input"]}>
                        <div>
                          <Input
                            label={t("Email")}
                            name={"email"}
                            value={values.email}
                            className={styles["address-input"]}
                            error={
                              (errors.email && touched.email && errors.email) ||
                              formErrors?.email
                            }
                            onChange={(e) => {
                              handleChange(e);
                              setFormErrors({ ...formErrors, email: "" });
                            }}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <div className={styles["field-input"]}>
                        <Input
                          label={t(formHeadings?.phoneNumber)}
                          name={"phoneNumber"}
                          role={"phoneNumber"}
                          value={values.phoneNumber}
                          className={styles["address-input"]}
                          error={
                            (errors.phoneNumber &&
                              touched.phoneNumber &&
                              errors.phoneNumber) ||
                            formErrors?.phoneNumber
                          }
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors({ ...formErrors, phoneNumber: "" });
                          }}
                          onBlur={handleBlur}
                        />
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

export default ContactInfoForm;
