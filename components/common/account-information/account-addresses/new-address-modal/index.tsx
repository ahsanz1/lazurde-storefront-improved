import React, { useState, FC, useContext, useEffect } from "react";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./new-address-modal.module.scss";
import Input from "components/common/ui/Input";
import Select from "components/common/ui/select";
import CheckBox from "components/common/ui/checkbox";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import {
  MainAddressProps,
  NewAddressModalProps,
  addressBookHeadingProps,
  formHeadingPayload,
  optionProps,
} from "lib/types/address";
import Label from "components/common/ui/label";

const NewAddressModal: FC<NewAddressModalProps> = ({
  addressMainData,
  isOpen = false,
  setIsOpen = () => {},
  isEditAddress = false,
  createAddressPayload = () => {},
  updateAddress = () => {},
  deleteAddress = () => {},
  className = "",
  isSubmittingForm = false,
  refetchAttributes = () => {},
  isLoadingAttributes = false,
  defaultAddress = {},
  hasAddresses = false,
}): JSX.Element => {
  const [width] = useWindowSize();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [governorateData, setGovernorateData] = useState([]);
  const [cityData, setCityData] = useState<optionProps[]>([]);
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const addressMain: MainAddressProps =
    addressMainData && Object.keys(addressMainData)?.length > 0
      ? addressMainData
      : {};

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
    nickName: Yup.string().required(t("Enter nick name")),
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
    phoneNumber: Yup.string()
      .required(t("Enter phone number"))
      .matches(phoneRegExp, t("Phone number is not valid")),
  });

  useEffect(() => {
    isOpen && setShowDeleteDialog(false);
    refetchAttributes();
  }, [isOpen]);

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

  const isDefaultAddress =
    !isLoadingAttributes &&
    Number(defaultAddress?.attribute_value) === addressMain?.id;

  return (
    <Modal
      modalBodyClassName={`${styles["new-address-modal"]} ${className} ${
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
      modalAnimation="none"
    >
      <>
        <div
          key={`${isOpen}`}
          className={styles["wrapper-new-address-form"]}
          data-show-data={!showDeleteDialog}
        >
          <div className={styles["div-form-heading"]}>
            <h2>
              {isEditAddress ? addressBookHeading.edit : addressBookHeading.add}
            </h2>
          </div>
          {isOpen && !isLoadingAttributes && addressMain ? (
            <Formik
              initialValues={{
                nickName: isEditAddress ? addressMain?.company : "",
                firstName: isEditAddress ? addressMain?.first_name : "",
                lastName: isEditAddress ? addressMain?.last_name : "",
                title: isEditAddress
                  ? addressMain?.title || titleOptions?.[0]?.value
                  : titleOptions?.[0]?.value,
                city: isEditAddress ? addressMain?.city : cityData?.[0]?.value,
                country: isEditAddress
                  ? addressMain && addressMain?.country_code
                  : countryOptions?.[0].value,
                postalCode: isEditAddress ? addressMain?.postal_code : "",
                governorate: isEditAddress
                  ? addressMain?.state_or_province
                  : governorateData?.[0]?.value,
                address: isEditAddress ? addressMain?.address1 : "",
                checkbox: isEditAddress ? isDefaultAddress : false,
                phoneNumber: isEditAddress ? addressMain?.phone : "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                if (isEditAddress) {
                  updateAddress && updateAddress(values, addressMain?.id);
                } else {
                  createAddressPayload && createAddressPayload(values);
                }
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
                  <form onSubmit={handleSubmit}>
                    <div className={styles["container-form"]}>
                      <div className={styles["div-top"]}>
                        <div>
                          <Input
                            label={t(formHeadings.NickName)}
                            name={"nickName"}
                            role={"nickName"}
                            value={values.nickName}
                            className={styles["address-input"]}
                            error={
                              errors.nickName &&
                              touched.nickName &&
                              errors.nickName
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div>
                          <Select
                            showLabel={true}
                            label={t(formHeadings.Title)}
                            name={"title"}
                            role={"titleField"}
                            options={titleOptions}
                            defaultValue={values?.title}
                            error={
                              errors.title && touched.title && errors.title
                            }
                            onChange={(value: { value: string }) => {
                              setFieldValue("title", value.value);
                            }}
                          ></Select>
                        </div>
                        <div
                          className={
                            width > desktopScreenSize
                              ? styles["div-two-columns"]
                              : styles["div-gap"]
                          }
                        >
                          <Input
                            label={t(formHeadings.FirstName)}
                            name={"firstName"}
                            role={"firstName"}
                            value={values.firstName}
                            className={styles["address-input"]}
                            error={
                              errors.firstName &&
                              touched.firstName &&
                              errors.firstName
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          <Input
                            label={t(formHeadings.LastName)}
                            name={"lastName"}
                            role={"lastName"}
                            value={values.lastName}
                            className={styles["address-input"]}
                            error={
                              errors.lastName &&
                              touched.lastName &&
                              errors.lastName
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div>
                          <Input
                            label={t(formHeadings.StreetAddress)}
                            name={"address"}
                            role={"address"}
                            value={values.address}
                            className={styles["address-input"]}
                            error={
                              errors.address &&
                              touched.address &&
                              errors.address
                            }
                            onChange={handleChange}
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
                                ? addressMain?.country_code
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
                            label={t(
                              appState?.region !== "sa"
                                ? formHeadings.Governorate
                                : t(formHeadings?.City)
                            )}
                            hasSearch={true}
                            name={"governorate"}
                            role={"governorate"}
                            options={governorateData}
                            defaultValue={
                              isEditAddress
                                ? addressMain?.state_or_province
                                : governorateData?.[0]?.value
                            }
                            error={errors.governorate}
                            onInitialize={(option: { value: number }) => {
                              setCityData(SaudiCityData[option?.value]);
                              setFieldValue("governorate", option?.value);
                            }}
                            onChange={(option: { value: number }) => {
                              setCityData(SaudiCityData[option?.value]);
                              setFieldValue("governorate", option?.value);
                            }}
                          ></Select>
                          <Select
                            showLabel={true}
                            label={t(
                              appState?.region !== "sa"
                                ? formHeadings.City
                                : t(formHeadings?.Area)
                            )}
                            name={"city"}
                            role={"city"}
                            hasSearch={true}
                            options={cityData}
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
                              errors.postalCode &&
                              touched.postalCode &&
                              errors.postalCode
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div>
                          <Input
                            type="number"
                            label={t(formHeadings?.phoneNumber)}
                            name={"phoneNumber"}
                            role={"phoneNumber"}
                            value={values.phoneNumber}
                            className={styles["address-input"]}
                            error={
                              errors.phoneNumber &&
                              touched.phoneNumber &&
                              errors.phoneNumber
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <div className={styles["div-bottom"]}>
                        <div className={styles["div-checkbox"]}>
                          {!hasAddresses ? (
                            <Label>
                              This address will be your default address
                            </Label>
                          ) : (
                            <CheckBox
                              className={styles["main-checkbox"]}
                              name={"checkbox"}
                              defaultChecked={values.checkbox}
                              label={t("CheckBoxShipping")}
                              onChange={(value) => {
                                setFieldValue("checkbox", value);
                              }}
                            />
                          )}
                        </div>
                        <div className={styles["div-button"]}>
                          {isEditAddress ? (
                            <>
                              {!isDefaultAddress ? (
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
                                testId={"saveButton"}
                                type="submit"
                                buttonSize={"lr"}
                                buttonText={t("Save")}
                                isLoading={isSubmittingForm}
                              ></Button>
                            </>
                          ) : (
                            <Button
                              testId={"addButton"}
                              type="submit"
                              buttonSize={"lr"}
                              buttonText={t("Add")}
                              isLoading={isSubmittingForm}
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
            <h2>{addressBookHeading.delete}</h2>
          </div>
          <div className={styles["container-form"]}>
            <div className={`${styles["div-top"]} ${styles["delete-form"]}`}>
              <div className={styles["message-text"]}>
                {t("DeleteAddressMessage")}
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
                    isLoading={isSubmittingForm}
                    onClick={() => {
                      deleteAddress && deleteAddress(addressMain?.id);
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

export default NewAddressModal;
