import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import Input from "components/common/ui/Input";
import Select from "components/common/ui/select";
import { MyDetailIcon, EditPencil, Calendar } from "components/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "components/common/ui/button";
import EditPasswordDetails from "./edit-password-modal/edit-password-modal";
import VerifyPhoneDetails from "./Edit-phone-modal/verify-phone-modal";
import {
  findCustomerAttribute,
  getStoreAttributeId,
  inputDateFormat,
  phoneFormat,
} from "lib/utils/common";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomer } from "lib/middleware-apis/customers";
import { APITokensObj } from "lib/types/common";
import { tokens as token } from "general-config";
import { customerAttributesNames } from "lib/utils/constants";
import { attributesValue } from "./functions";

type optionProps = { label?: string; value?: string | number };

const MyDetails = ({ myDetailsData = {} }: any): JSX.Element => {
  const tokens: APITokensObj = token;
  const { t } = useTranslation("common");
  const countryOptions: optionProps[] = t(
    "countryOptions",
    {},
    { returnObjects: true }
  );
  const SaudiGovernorate: optionProps[] = t(
    "SaudiGovernorate",
    {},
    { returnObjects: true }
  );
  const UAEGovernorate: optionProps[] = t(
    "UAEGovernorate",
    {},
    { returnObjects: true }
  );
  const EgyptGovernorate: optionProps[] = t(
    "EgyptGovernorate",
    {},
    { returnObjects: true }
  );
  const SaudiCityData: { [key: string]: optionProps[] } = t(
    "SaudiCityData",
    {},
    { returnObjects: true }
  );
  const titleOptions: optionProps[] = t(
    "titleOptions",
    {},
    { returnObjects: true }
  );

  const { useGetStoreAttributes } = useCustomer();
  const errors: any = t("errorMessage", {}, { returnObjects: true });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const DetailsSchema = Yup.object().shape({
    firstName: Yup.string().required(errors?.name),
    lastName: Yup.string().required(errors?.name),
    email: Yup.string().email(errors?.email).required(errors?.email),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, errors?.phone)
      .required(errors?.phone),
    dateOfBirth: Yup.string(),
    postalCode: Yup.string(),
  });

  const queryClient = useQueryClient();
  const { data: storeAttributes } = useGetStoreAttributes();

  const { appState } = useContext(AppContext);
  const [isReadOnlyInput, setIsReadOnlyInput] = useState({
    email: true,
    firtsName: true,
    lastName: true,
    password: true,
    phoneNumber: true,
    dateOfBirth: true,
    postalCode: true,
  });
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);
  const [editPhoneModal, setEditPhoneModal] = useState(false);
  const [governorateData, setGovernorateData] = useState([]);
  const [cityData, setCityData] = useState<optionProps[]>([]);
  const {
    updateCustomerMutation,
    updateCustomerAttributesMutation,
    useGetCustomerByGraphQl,
    useGetAttributesByCustomerId,
  } = useCustomer();

  const { data: customerAttributes, refetch: rfetchAttributes } =
    useGetAttributesByCustomerId();
  const { data: customerData } = useGetCustomerByGraphQl();
  const cityAttrId = getStoreAttributeId(
    storeAttributes,
    customerAttributesNames?.customerCity
  );
  const countryAttrId = getStoreAttributeId(
    storeAttributes,
    customerAttributesNames?.customerGovernorate
  );
  const customerGovValue = findCustomerAttribute(customerAttributes, countryAttrId);
  const customerCityValue = findCustomerAttribute(customerAttributes, cityAttrId);
  const attrData = customerAttributes && attributesValue(customerAttributes);

  const getSelectedGovernorate = (country: string) => {
    switch (country) {
      case "SA":
        return SaudiGovernorate;
      case "AE":
        return UAEGovernorate;
      case "EG":
        return EgyptGovernorate;
      default:
        break;
    }
  };

  const submitUserInfo = async (values: any) => {
    const payload: any = [
      {
        id: customerData?.entityId,
        email: String(values?.email),
        first_name: String(values?.firstName),
        last_name: String(values?.lastName),
        phone: phoneFormat(String(values?.phoneNumber)),
        origin_channel_id: Number(tokens[appState?.region].BC_CHANNEL_ID),
        channel_ids: [Number(tokens[appState?.region].BC_CHANNEL_ID)],
      },
    ];

    const attributesPayload: any = [
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerTitle
        ),
        value: String(values?.title),
        customer_id: customerData?.entityId,
      },
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerDateOfBirth
        ),
        value: String(values?.dateOfBirth || attrData?.currentDob),
        customer_id: customerData?.entityId,
      },
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerGovernorate
        ),
        value: String(values?.governorate),
        customer_id: customerData?.entityId,
      },
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerCity
        ),
        value: String(values?.city),
        customer_id: customerData?.entityId,
      },
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerPostalCode
        ),
        value: String(values?.postalCode),
        customer_id: customerData?.entityId,
      },
    ];

    updateCustomerMutation.mutate(payload, {
      onSuccess: (data) => {
        updateCustomerAttributesMutation.mutate(attributesPayload, {
          onSuccess: () => {
            rfetchAttributes();
          },
        });
        if (!data?.hasError) {
          const { response = [] } = data;
          const updatedCustomerData = {
            ...customerData,
            email: response?.[0]?.email,
            firstName: response?.[0]?.first_name,
            lastName: response?.[0]?.last_name,
            phone: response?.[0]?.phone,
          };
          typeof window !== undefined &&
            window.localStorage.setItem(
              "customer",
              JSON.stringify(updatedCustomerData)
            );
          queryClient.setQueryData(["customerData"], updatedCustomerData);
          if (isReadOnlyInput?.phoneNumber === false) {
            setEditPhoneModal(true);
          }
          setIsReadOnlyInput({
            email: true,
            firtsName: true,
            lastName: true,
            password: true,
            phoneNumber: true,
            dateOfBirth: true,
            postalCode: true,
          });
        }
      },
      onError: (error) => {
        console.log("on error", error);
      },
    });
  };

  const isSavingDetail =
    updateCustomerAttributesMutation?.isLoading ||
    updateCustomerMutation?.isLoading;

  return (
    <>
      <>
        <div className={styles["account-mydetails-container"]}>
          <div className={styles["account-mydetails-heading-section"]}>
            <div role="detailicon" className={styles["account-mydetails-icon"]}>
              <MyDetailIcon />
            </div>
            <div
              data-testid="heading"
              className={styles["account-mydetails-heading"]}
            >
              {t("MyDetails")}
            </div>
          </div>
          <div className={styles["account-mydetails-content-section"]}>
            <Formik
              enableReinitialize
              initialValues={{
                firstName: customerData?.firstName || "",
                lastName: customerData?.lastName || "",
                email: customerData?.email || "",
                password: "",
                dateOfBirth:
                  (attrData?.currentDob &&
                    inputDateFormat(attrData?.currentDob)) ||
                  "",
                title: attrData?.title || titleOptions?.[0]?.value,
                country: countryOptions?.[0].value,
                governorate:
                  attrData?.currentGov || governorateData?.[0]?.value,
                city: attrData?.currentCity || cityData?.[0]?.value,
                postalCode: attrData?.currentPostalCode || "",
                phoneNumber: phoneFormat(customerData?.phone) || "",
              }}
              validationSchema={DetailsSchema}
              onSubmit={(values, { setSubmitting }) => {
                submitUserInfo(values);
                setSubmitting(false);
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
                  <form
                    onSubmit={handleSubmit}
                    className={styles["container-form"]}
                  >
                    {" "}
                    <div aria-label="titlelabel">
                      <Select
                        role="title"
                        showLabel={true}
                        label={t("Title")}
                        className={styles["select"]}
                        name={"title"}
                        options={titleOptions}
                        defaultValue={
                          attrData?.title || titleOptions?.[0]?.value
                        }
                        onChange={(value: { value: string }) => {
                          setFieldValue("title", value.value);
                        }}
                        readOnly={true}
                        showIcon={false}
                      ></Select>
                    </div>
                    <div
                      className={styles["Input_container"]}
                      aria-label="emaillabel"
                    >
                      <Input
                        role="email"
                        label={t("Email")}
                        name={"email"}
                        type={"email"}
                        className={styles["input-pblock-null"]}
                        value={values?.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly={true}
                      />
                    </div>
                    <div className={styles["error-msg"]}>
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div
                      className={styles["input_dev_flex"]}
                      aria-label="fnamelabel"
                    >
                      <Input
                        role="fname"
                        label={t("firstName")}
                        name={"firstName"}
                        type={"text"}
                        className={`${styles["input-pblock-null"]}`}
                        value={values?.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly={true}
                      />
                    </div>
                    <div className={styles["error-msg"]}>
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                    <div
                      className={styles["input_dev_flex"]}
                      aria-label="lnamelabel"
                    >
                      <Input
                        role="lname"
                        label={t("lastName")}
                        name={"lastName"}
                        type={"text"}
                        className={`${styles["input-pblock-null"]}`}
                        value={values?.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly={true}
                      />
                    </div>
                    <div className={styles["error-msg"]}>
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <div className={styles["Password"]}>
                      <div
                        aria-label="passwordlabell"
                        className={styles["input_dev_flex"]}
                      >
                        <Input
                          role="password"
                          label={t("Password")}
                          className={`${
                            styles[isReadOnlyInput.password ? "grey_color" : ""]
                          } ${styles["input-pblock-null"]}`}
                          placeHolder="........"
                          name={"password"}
                          type={"password"}
                          value={"........"}
                          readOnly={isReadOnlyInput.password}
                          // onChange={(e) => handleChangeFieldData(e)}
                        />
                        <div
                          className={
                            styles[
                              appState?.lang == "en"
                                ? "edit_div"
                                : "arabic_edit_div"
                            ]
                          }
                        >
                          <button
                            data-testid="editpassword"
                            type="button"
                            onClick={() => setIsOpenPasswordModal(true)}
                          >
                            {t("Edit")}
                          </button>
                        </div>
                        <div className={styles["account-edit-icon"]}>
                          <EditPencil />
                        </div>
                      </div>
                    </div>
                    <div className={styles["phone_number"]}>
                      <div
                        aria-label="phonelabel"
                        className={styles["input_dev_flex"]}
                      >
                        <Input
                          role="phone"
                          label={t("phoneNumber")}
                          className={`${
                            styles[
                              isReadOnlyInput.phoneNumber ? "grey_color" : ""
                            ]
                          } ${styles["input-pblock-null"]}`}
                          countryCodeClassname={
                            styles[
                              isReadOnlyInput.phoneNumber ? "grey_color" : ""
                            ]
                          }
                          name={"phoneNumber"}
                          type={"number"}
                          value={values?.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          readOnly={isReadOnlyInput.phoneNumber}
                          isLoading={isSavingDetail}
                          style={{
                            marginTop: "-1px",
                          }}
                        />

                        <div
                          className={
                            styles[
                              appState?.lang == "en"
                                ? "edit_div"
                                : "arabic_edit_div"
                            ]
                          }
                        >
                          <button
                            role="editphone"
                            type="button"
                            onClick={() => {
                              setIsReadOnlyInput({
                                ...isReadOnlyInput,
                                phoneNumber: false,
                              });
                            }}
                            //  onClick={openModalPhone}
                          >
                            {t("Edit")}
                          </button>
                        </div>
                        <div className={styles["account-edit-icon"]}>
                          <EditPencil />
                        </div>
                      </div>
                      <div className={styles["error-msg"]}>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                      </div>
                    </div>
                    <div
                      className={`${styles["input_dev_flex"]} ${styles["dob-input-wrapper"]}`}
                      aria-label="doblabel"
                    >
                      <Input
                        setFieldValue={setFieldValue}
                        role="dob"
                        label={t("dateOfBirth")}
                        name={"dateOfBirth"}
                        type={"date"}
                        divInputClass={styles["dob-div-input"]}
                        value={
                          values?.dateOfBirth ||
                          (attrData && attrData?.currentDob)
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly={attrData?.currentDob ? true : false}
                        inputIconClassName={styles["dateofbirth-input-icon"]}
                        inputIcon={
                          attrData?.currentDob ? null : (
                            <Calendar
                              width="20px"
                              height="20px"
                              fill="rgba(0,0,0,0.5)"
                            />
                          )
                        }
                      />
                    </div>
                    <div className={styles["error-msg"]}>
                      {errors.dateOfBirth &&
                        touched.dateOfBirth &&
                        errors.dateOfBirth}
                    </div>
                    <div aria-label="countrylabel">
                      <Select
                        readOnly={true}
                        showIcon={false}
                        role="country"
                        showLabel={true}
                        label={t("Country")}
                        name={"country"}
                        className={styles["select"]}
                        options={countryOptions}
                        defaultValue={
                          appState?.region?.toUpperCase() ||
                          countryOptions?.[0].value
                        }
                        onInitialize={(value: { value: string }) => {
                          setGovernorateData(
                            getSelectedGovernorate(value.value)
                          );
                          setFieldValue("country", value.value);
                        }}
                        onChange={(value: { value: string }) => {
                          setFieldValue("country", value.value);
                          setGovernorateData(
                            getSelectedGovernorate(value.value)
                          );
                        }}
                      ></Select>
                    </div>
                    <div
                      aria-label="Governoratelabel"
                    >
                      <Select
                        role="governorate"
                        showLabel={true}
                        label={t("Governorate")}
                        className={styles["select"]}
                        name={"governorate"}
                        options={governorateData}
                        hasSearch={true}
                        defaultValue={
                          customerGovValue?.attribute_value || governorateData?.[0]?.value
                        }
                        onInitialize={(option: { value: string }) => {
                          setCityData(SaudiCityData[option?.value]);
                          setFieldValue("governorate", option?.value);
                        }}
                        onChange={(option: { value: string }) => {
                          setCityData(SaudiCityData[option?.value]);
                          setFieldValue("governorate", option?.value);
                        }}
                      ></Select>
                    </div>
                    <div
                      aria-label="citylabel"
                    >
                      <Select
                        role="city"
                        showLabel={true}
                        label={t("city")}
                        name={"city"}
                        hasSearch={true}
                        className={styles["select"]}
                        options={cityData}
                        defaultValue={
                          customerCityValue?.attribute_value || cityData?.[0]?.value
                        }
                        onInitialize={(value: { value: string }) => {
                          setFieldValue("city", value.value);
                        }}
                        onChange={(value: { value: string }) => {
                          setFieldValue("city", value.value);
                        }}
                      ></Select>
                    </div>
                    <div
                      className={styles["input_dev_flex"]}
                      aria-label="Postallabel"
                    >
                      <Input
                        role="postal"
                        label={t("PostalCode")}
                        name={"postalCode"}
                        type={"number"}
                        className={`${
                          styles[isReadOnlyInput.postalCode ? "grey_color" : ""]
                        } ${styles["input-pblock-null"]}`}
                        value={
                          values?.postalCode || attrData?.currentPostalCode
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly={isReadOnlyInput.postalCode}
                        isLoading={isSavingDetail}
                      />

                      <div
                        className={
                          styles[
                            appState?.lang == "en"
                              ? "edit_div"
                              : "arabic_edit_div"
                          ]
                        }
                      >
                        <button
                          role="editpostalcode"
                          type="button"
                          onClick={() => {
                            setIsReadOnlyInput({
                              ...isReadOnlyInput,
                              postalCode: false,
                            });
                          }}
                        >
                          {t("Edit")}
                        </button>
                      </div>
                      <div className={styles["account-edit-icon"]}>
                        <EditPencil />
                      </div>
                    </div>
                    <div className={styles["error-msg"]}>
                      {errors.postalCode &&
                        touched.postalCode &&
                        errors.postalCode}
                    </div>
                    <div className={styles["button-dev"]}>
                      <Button
                        testId="save"
                        className={
                          styles[
                            `${
                              appState?.lang == "en"
                                ? "button-size"
                                : "arabic_button-size"
                            }`
                          ]
                        }
                        type="submit"
                        buttonText={t("Save")}
                        isLoading={isSavingDetail}
                      ></Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </>

      <EditPasswordDetails
        isOpenPasswordModal={isOpenPasswordModal}
        closeModal={() => setIsOpenPasswordModal(false)}
      />
      <VerifyPhoneDetails
        editPhoneModal={editPhoneModal}
        setEditPhoneModal={setEditPhoneModal}
      />
    </>
  );
};

export default MyDetails;
