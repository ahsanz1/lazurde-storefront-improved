import Label from "components/common/ui/label";
import { AddressBookIcon, EditIcon } from "components/icons";
import React, { useEffect, useState, useRef, useContext } from "react";
import styles from "./address.module.scss";
import Button from "components/common/ui/button";
import NewAddressModal from "./new-address-modal";
import { desktopScreenSize, getStoreAttributeId } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import ContentLoading from "components/common/ui/skeletons/content-loading";
import {
  AddressPayload,
  FormAddressPayload,
  MainAddressProps,
  UpdateAddressPayload,
} from "lib/types/address";
import {
  getCustomerAddress,
  useCustomerAddresses,
} from "lib/middleware-apis/addresses";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCustomer } from "lib/middleware-apis/customers";
import { customerAttributesNames } from "lib/utils/constants";
import { AppContext } from "lib/context";

const AddressBook = (): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    updateCustomerAttributesMutation,
    useGetAttributesByCustomerId,
    useCustomerByEmail,
  } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const [modalOpen, setModalOpen] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const selectedAddress: any = useRef({});
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const {
    getCustomerAddresses,
    addCustomerAddressMutation,
    updateCustomerAddressMutation,
    deleteCustomerAddressMutation,
  } = useCustomerAddresses();
  const {
    data: customerAddress,
    refetch: refetchAddresses,
    isLoading: isAddressLoading,
  } = useQuery(["customerAddress"], getCustomerAddresses);
  const [addressData, setAddressdata] = useState(customerAddress?.response);
  const {
    data: attributesData,
    refetch: refetchAttributes,
    isLoading: isLoadingAttributes,
  } = useGetAttributesByCustomerId();
  const defaultAddress: { attribute_value: string } = attributesData?.find(
    (attr: { attribute_id: number }) => attr?.attribute_id === 5
  );
  const storeAttributes: any = queryClient.getQueryData([
    "storeAttributes",
    appState?.region,
  ]);

  useEffect(() => {
    !modalOpen && setEditAddressModal(modalOpen);
  }, [modalOpen]);

  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));

  const customerAdd = async () => {
    const data: any = queryClient.getQueryData(["customerAddress"]);
    setAddressdata(data?.response);
    if (!data) {
      const res = await getCustomerAddress(
        customerInfo?.entityId,
        appState?.region
      );
      setAddressdata(res?.response);
    }
  };
  useEffect(() => {
    customerAdd();
  }, [customerAddress]);

  const createAddressPayload = async (values: FormAddressPayload) => {
    const payload: [AddressPayload] = [
      {
        company: String(values?.nickName),
        first_name: String(values?.firstName),
        last_name: String(values?.lastName),
        address1: String(values?.address),
        city: String(values?.city),
        state_or_province: String(values?.governorate),
        postal_code: String(values?.postalCode),
        country_code: String(values?.country),
        phone: String(values?.phoneNumber),
        customer_id: customerData?.entityId,
      },
    ];
    addCustomerAddressMutation?.mutate(payload, {
      onSuccess: (data) => {
        const { response, hasError } = data;
        if (!hasError && response?.length > 0) {
          const { id: addressId } = response?.[0];
          const attributesPayload: any = [
            {
              attribute_id: getStoreAttributeId(
                storeAttributes,
                customerAttributesNames?.customerDefaultAddressId
              ),
              value:
                addressData?.length < 1 ||
                (String(values?.checkbox) === "true" && addressData?.length > 0)
                  ? String(addressId)
                  : String(defaultAddress?.attribute_value),
              customer_id: customerData?.entityId,
            },
          ];

          updateCustomerAttributesMutation.mutate(attributesPayload, {
            onSuccess: () => {
              refetchAttributes();
            },
          });
        }

        queryClient.setQueryData(["customerAddress"], data);
        refetchAddresses();
        setModalOpen(false);
      },
      onError: (error) => {
        console.log("onError", error);
      },
    });
  };
  const updateAddress = async (
    values: FormAddressPayload,
    addressId: number
  ) => {
    const payload: [UpdateAddressPayload] = [
      {
        company: String(values?.nickName),
        id: Number(addressId),
        first_name: String(values?.firstName),
        last_name: String(values?.lastName),
        address1: String(values?.address),
        city: String(values?.city),
        state_or_province: String(values?.governorate),
        postal_code: String(values?.postalCode),
        country_code: String(values?.country),
        phone: String(values?.phoneNumber),
      },
    ];
    const attributesPayload: any = [
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerDefaultAddressId
        ),
        value:
          String(values?.checkbox) === "true"
            ? String(addressId)
            : String(addressData?.[0]?.id),
        customer_id: customerData?.entityId,
      },
    ];
    updateCustomerAddressMutation?.mutate(payload, {
      onSuccess: (data) => {
        refetchAddresses();
        refetchAttributes();
        String(values?.checkbox) === "true" &&
          updateCustomerAttributesMutation.mutate(attributesPayload, {
            onSuccess: () => {
              refetchAddresses();
              refetchAttributes();
            },
          });
        queryClient.setQueryData(["customerAddress"], data);
        setAddressdata(customerAddress?.response);
        setModalOpen(false);
      },
      onError: (error) => {
        setModalOpen(false);
        console.log("onError", error);
      },
    });
  };

  const deleteAddress = async (addressId: number) => {
    deleteCustomerAddressMutation?.mutate(addressId, {
      onSuccess: () => {
        refetchAddresses();
        setModalOpen(false);
      },
      onError: (error) => {
        console.log("onError", error);
      },
    });
  };

  return (
    <>
      <div className={styles["wrapper-address-book"]}>
        <div className={styles["address-heading"]}>
          <div className={styles["address-icon"]}>
            <AddressBookIcon />
          </div>
          <Label className={styles["label"]}>{t("AddressBook")}</Label>
          {addressData?.length < 1 &&
          !isAddressLoading &&
          width < desktopScreenSize ? (
            <div className={styles["div-message-mobile"]}>
              <p>{t("noAddressesMessage")}</p>
            </div>
          ) : null}
          <div className={styles["div-add-address"]}>
            <Button
              testId={"addNewButton"}
              buttonSize={"lr"}
              buttonText={t("AddNewAddress")}
              onClick={() => {
                setModalOpen(true);
              }}
            ></Button>
          </div>
        </div>
        {addressData?.length < 1 &&
        !isAddressLoading &&
        width > desktopScreenSize ? (
          <div className={styles["div-message"]}>
            <p>{t("noAddressesMessage")}</p>
          </div>
        ) : null}
      </div>

      <div className={styles["wrapper-addresses"]}>
        {!isAddressLoading && addressData?.length > 0 ? (
          addressData.map((address: MainAddressProps, index: number) => {
            return (
              <div
                key={index}
                className={styles["div-address-single"]}
                style={{
                  order:
                    Number(address?.id) ===
                    Number(defaultAddress?.attribute_value)
                      ? "-1"
                      : index,
                }}
              >
                <div className={styles["div-address-heading"]}>
                  <Label>
                    {Number(address?.id) ===
                    Number(defaultAddress?.attribute_value)
                      ? t("defaultShippingAdd")
                      : address?.company}
                  </Label>
                </div>
                <div className={styles["div-address-data"]}>
                  <div className={styles["div-left"]}>
                    <Label>{`${address?.first_name} ${address?.last_name}`}</Label>
                    <Label>{`${address?.address1}`}</Label>
                    <Label>{`${address?.city}, ${address?.state_or_province}, ${address?.postal_code}`}</Label>
                    <Label>{`${address?.country}`}</Label>
                    <Label>{`T: ${address?.phone}`}</Label>
                  </div>
                  <div className={styles["div-right"]}>
                    <div
                      className={styles["div-edit-button"]}
                      data-testid={"edit-button"}
                      onClick={() => {
                        selectedAddress.current = address;
                        setEditAddressModal(true);
                        setModalOpen(true);
                      }}
                    >
                      <Button
                        buttonStyle="underline"
                        buttonText={t("Edit")}
                      ></Button>
                      <div>
                        {width > desktopScreenSize ? <EditIcon /> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : isAddressLoading ? (
          <div
            className={`${styles["div-address-single"]} ${styles["div-loader"]}`}
          >
            <ContentLoading />
          </div>
        ) : null}
      </div>
      <NewAddressModal
        addressMainData={selectedAddress.current}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        isEditAddress={editAddressModal}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        isSubmittingForm={
          addCustomerAddressMutation?.isLoading ||
          updateCustomerAddressMutation?.isLoading ||
          deleteCustomerAddressMutation?.isLoading
        }
        refetchAttributes={refetchAttributes}
        isLoadingAttributes={isLoadingAttributes}
        defaultAddress={defaultAddress}
        hasAddresses={addressData?.length > 0 ? true : false}
      ></NewAddressModal>
    </>
  );
};

export default AddressBook;
