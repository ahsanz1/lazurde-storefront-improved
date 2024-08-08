import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import Label from "components/common/ui/label";
import Button from "../ui/button";
import useTranslation from "next-translate/useTranslation";

// import {
//   addNewAddress,
//   deleteUserAddress,
//   updateUserAddress,
// } from "lib/utils/addresses";
import NewAddressModal from "components/common/account-information/account-addresses/new-address-modal";

type CheckoutPostalProps = {
  className?: string;
  content?: any;
  headingArr?: string[] | undefined;
  data?: any;
  contentArr?: any;
  getAddressData?: Function;
  setSelectedTab?: Function;
  renderSpinner?: Function;
  loginUser?: boolean;
  isLoading?: boolean;
  setIsLoading?: Function;
};

interface FormAddressPayload {
  id?: string | number;
  name?: string;
  nickName?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  governorate?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  isDefault?: string;
  checkbox?: string;
}
interface AddressPayload {
  _id?: number;
  globalAddressId?: number;
  type: "M" | "E" | "P";
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
  additionalAttributes?: {};
}

const CheckoutPostalAddress = ({
  contentArr,
  getAddressData,
  renderSpinner,
  isLoading,
  setIsLoading,
}: CheckoutPostalProps): JSX.Element => {
  const selectedAddress: any = useRef({});
  const { t } = useTranslation("common");
  const [modalOpen, setModalOpen] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  let userProfile =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("individualInfo"));
  const createAddressPayload = async (values: FormAddressPayload) => {
    const payload: AddressPayload = {
      type: "M",
      addressLine1: values?.address,
      city: values?.city,
      country: values?.country,
      postalCode: values?.postalCode,
      state: values?.governorate,
      isDefault: values?.checkbox,
      additionalAttributes: {
        nickName: values?.nickName,
        title: values?.title,
        firstName: values?.firstName,
        lastName: values?.lastName,
        phoneNumber: values?.phoneNumber,
      },
    };

    // const response = await addNewAddress(userProfile?._id, payload);
    getAddressData();
  };

  const updateAddress = async (values: FormAddressPayload) => {
    const payload: AddressPayload = {
      type: "M",
      addressLine1: values?.address,
      city: values?.city,
      country: values?.country,
      postalCode: values?.postalCode,
      state: values?.governorate,
      isDefault: values?.checkbox,
      additionalAttributes: {
        nickName: values?.nickName,
        title: values?.title,
        firstName: values?.firstName,
        lastName: values?.lastName,
        phoneNumber: values?.phoneNumber,
      },
    };

    // const response = await updateUserAddress(
    //   userProfile?._id,
    //   values?.id,
    //   payload
    // );
    getAddressData();
  };

  const deleteAddress = async () => {
    // const response = await deleteUserAddress(
    //   userProfile?._id,
    //   selectedAddress?.current?._id
    // );
    getAddressData();
  };
  return (
    <>
      {contentArr?._id && (
        <>
          <div className={styles["div-left"]}>
            <div role="addHeading" className={styles["tab-address-heading"]}>
              {t("defaultShippingAdd")}
            </div>
            {!isLoading ? (
              <>
                <Label>{`${contentArr?.additionalAttributes?.firstName} ${contentArr?.additionalAttributes?.lastName}`}</Label>
                <Label>{`${contentArr?.addressLine1}`}</Label>
                <Label>{`${contentArr?.city}, ${contentArr?.state}, ${contentArr?.postalCode}`}</Label>
                <Label>{`${contentArr?.country}`}</Label>
                <Label>{`T: ${contentArr?.additionalAttributes?.phoneNumber}`}</Label>
              </>
            ) : (
              renderSpinner()
            )}
          </div>
          <div className={styles["div-right"]}>
            <div
              role="editBtn"
              className={styles["div-edit-button"]}
              onClick={() => {
                selectedAddress.current = contentArr;
                setEditAddressModal(true);
                setModalOpen(true);
              }}
            >
              <Button buttonStyle="underline" buttonText={t("Change")}></Button>
            </div>
          </div>
        </>
      )}

      <NewAddressModal
        addressMainData={selectedAddress.current}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        isEditAddress={true}
        createAddressPayload={createAddressPayload}
        setIsLoading={setIsLoading}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        hideDefaultDelete={contentArr && selectedAddress?.current?.isDefault}
        className={styles["checkout-address-modal"]}
      ></NewAddressModal>
    </>
  );
};
export default CheckoutPostalAddress;
