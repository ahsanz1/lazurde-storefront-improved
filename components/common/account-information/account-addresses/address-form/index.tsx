import React, { useState, FC, useContext, useEffect } from "react";
import styles from "./address-form-modal.module.scss";
import Input from "components/common/ui/Input";
import Select from "components/common/ui/select";
import useWindowSize from "lib/utils/useWindowSize";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import {
  titleOptions,
  SaudiGovernorate,
  UAEGovernorate,
  EgyptGovernorate,
  SaudiCityData,
} from "./data";
import { OptionProps } from "lib/types/mobile-header";

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
  Title?: string;
  FirstName?: string;
  LastName?: string;
  StreetAddress?: string;
  City?: string;
  Governorate?: string;
  Country?: string;
  PostalCode?: string;
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
  setFormErrors?: any;
  formErrors?: any;
}

const AddressForm: FC<NewAddressModalProps> = ({
  addressMain = {},
  isOpen = false,
  setIsOpen = () => {},
  isEditAddress = false,
  createAddressPayload = () => {},
  updateAddress = () => {},
  deleteAddress = () => {},
  hideDefaultDelete = false,
  formDatas,
  setFormErrors,
  formErrors,
}): JSX.Element => {
  const [width] = useWindowSize();
  const [governorateData, setGovernorateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");

  type optionProps = { label?: string; value?: string | number };

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
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(t("Enter first name")),
    lastName: Yup.string().required(t("Enter last name")),
    address: Yup.string().required(t("Enter address")),
    title: Yup.string().required(t("Select title")),
    city: Yup.string().required(t("Enter city")),
    governorate: Yup.string().required(
      appState?.region !== "sa" ? t("Select governorate") : t("Area")
    ),
    country: Yup.string().required(t("Select country")),
    postalCode: Yup.string().required(t("Enter postal code")),
  });

  //   useEffect(() => {
  //     isOpen && setShowDeleteDialog(false);
  //   }, [isOpen]);

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

  const regionReleatedCountry = () => {
    if (appState?.region === "sa") {
      return countryOptions[0].value;
    }

    if (appState?.region === "ae") {
      return countryOptions[1].value;
    }

    if (appState?.region === "eg") {
      return countryOptions[2].value;
    }
  };

  const savedFormData =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("form_data"));
  return (
    <>
      <div className={styles["wrapper-new-address-form"]}>
        {isOpen ? (
          <Formik
            // enableReinitialize
            initialValues={{
              firstName: isEditAddress
                ? addressMain?.additionalAttributes?.first
                : savedFormData?.name?.first,
              lastName: isEditAddress
                ? addressMain?.additionalAttributes?.lastName
                : savedFormData?.name?.last,
              title: isEditAddress
                ? addressMain?.additionalAttributes?.title
                : titleOptions[0]?.value,
              city: isEditAddress ? addressMain?.city : cityData?.[0]?.value,
              country: isEditAddress
                ? addressMain?.country
                : countryOptions[0].value,
              postalCode: isEditAddress
                ? addressMain?.postalCode
                : savedFormData?.zipCode,
              governorate: isEditAddress
                ? addressMain?.state
                : governorateData[0]?.value,
              address: isEditAddress
                ? addressMain?.addressLine1
                : savedFormData?.street1,
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
                      <div>
                        <Select
                          showLabel={true}
                          label={t(formHeadings.Title)}
                          name={"title"}
                          role={"titleField"}
                          options={titleOptions}
                          defaultValue={values.title}
                          error={errors.title}
                          onChange={(value: { value: string }) => {
                            setFieldValue("title", value.value);
                          }}
                        ></Select>
                      </div>

                      <Input
                        label={t(formHeadings.FirstName)}
                        name={"firstName"}
                        role={"firstName"}
                        value={values.firstName}
                        className={styles["address-input"]}
                        error={
                          (errors.firstName &&
                            touched.firstName &&
                            errors.firstName) ||
                          formErrors?.firstName
                        }
                        onChange={(e) => {
                          handleChange(e);
                          setFormErrors({ ...formErrors, firstName: "" });
                        }}
                        onBlur={handleBlur}
                      />

                      <Input
                        label={t(formHeadings.LastName)}
                        name={"lastName"}
                        role={"lastName"}
                        value={values.lastName}
                        className={styles["address-input"]}
                        error={
                          (errors.lastName &&
                            touched.lastName &&
                            errors.lastName) ||
                          formErrors?.lastName
                        }
                        onChange={(e) => {
                          handleChange(e);
                          setFormErrors({ ...formErrors, lastName: "" });
                        }}
                        onBlur={handleBlur}
                      />
                      <div>
                        <Input
                          label={t(formHeadings.StreetAddress)}
                          name={"address"}
                          role={"address"}
                          value={values.address}
                          className={styles["address-input"]}
                          error={
                            (errors.address &&
                              touched.address &&
                              errors.address) ||
                            formErrors?.address
                          }
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors({ ...formErrors, address: "" });
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <Select
                          showLabel={true}
                          label={t(formHeadings.Country)}
                          name={"country"}
                          role={"country"}
                          options={countryOptions}
                          defaultValue={
                            isEditAddress
                              ? addressMain?.country
                              : regionReleatedCountry()
                          }
                          error={errors.country}
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
                      <div className={styles["div-two-columns"]}>
                        <Select
                          showLabel={true}
                          label={t(formHeadings.Governorate)}
                          name={"governorate"}
                          role={"governorate"}
                          options={governorateData}
                          hasSearch={true}
                          defaultValue={
                            isEditAddress
                              ? addressMain?.state
                              : governorateData[0]?.value
                          }
                          error={errors.governorate}
                          onInitialize={(option: { value: string }) => {
                            setCityData(SaudiCityData[option?.value]);
                            setFieldValue("governorate", option?.value);
                          }}
                          onChange={(option: { value: string }) => {
                            setCityData(SaudiCityData[option?.value]);
                            setFieldValue("governorate", option?.value);
                          }}
                        ></Select>
                        <Select
                          showLabel={true}
                          label={t(formHeadings.City)}
                          name={"city"}
                          role={"city"}
                          options={cityData}
                          hasSearch={true}
                          defaultValue={
                            isEditAddress
                              ? addressMain?.city
                              : cityData?.[0]?.value
                          }
                          error={errors.city}
                          onInitialize={(value: { value: string }) => {
                            setFieldValue("city", value.value);
                          }}
                          onChange={(value: { value: string }) => {
                            setFieldValue("city", value.value);
                          }}
                        ></Select>
                      </div>
                      <div>
                        <Input
                          label={t(formHeadings.PostalCode)}
                          name={"postalCode"}
                          role={"postalCode"}
                          value={values.postalCode}
                          className={styles["address-input"]}
                          error={
                            (errors.postalCode &&
                              touched.postalCode &&
                              errors.postalCode) ||
                            formErrors?.postalCode
                          }
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors({ ...formErrors, postalCode: "" });
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

export default AddressForm;
