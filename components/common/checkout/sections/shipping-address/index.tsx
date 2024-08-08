import React, { useState, FC, useContext, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import AddressForm from "components/common/account-information/account-addresses/address-form";
import Tabs from "components/common/ui/tabs";
import CheckoutPostalAddress from "components/common/checkout-postal-address";
import Spinner from "components/common/ui/spinner";
// import ClickAndCollectSearch from "components/common/storeLocator/clickAndCollectSearch";
import { StoreLocatorXMProps } from "lib/types/common";
import styles from "./style.module.scss";

type ShippingSecProps = {
  addressData?: any;
  getAddressData?: any;
  formDatas?: any;
  setFormErrors?: any;
  formErrors?: any;
  isLoading?: boolean;
  setIsLoading?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
};

const ShippingSection: FC<ShippingSecProps> = ({
  addressData,
  getAddressData,
  formDatas,
  setFormErrors,
  formErrors,
  isLoading = false,
  setIsLoading,
  storeLocatorProps,
}) => {
  const [tabIndex, setTabIndex] = useState("0");
  const { t } = useTranslation("common");
  const heading = [t("deliveryAddress")];

  const renderSpinner = () => {
    return (
      <>
        <span className={styles["loading-add"]}>
          {t("loadingShippingAdd")}...{" "}
          <Spinner width={15} height={15} stroke={10} />
        </span>
      </>
    );
  };

  return (
    <>
      <div className={styles["shipping-column"]}>
        <div className={styles["bag-wrapper"]}>
          <span role="bag-heading" className={styles["main-heading"]}>
            {t("shippingAddress")}
          </span>
          <div role="tabs" className={styles["tabs-wrapper"]}>
            <Tabs
              headingArr={heading}
              contentArr={addressData}
              setSelectedTab={setTabIndex}
              className={styles["checkout-tabs"]}
              headingClassName={styles["tabs-heading"]}
            />
          </div>
          {tabIndex === "0" &&
            (isLoading ? (
              renderSpinner()
            ) : addressData?._id ? (
              <div className={styles["div-address-data"]}>
                <CheckoutPostalAddress
                  getAddressData={getAddressData}
                  contentArr={addressData}
                  renderSpinner={renderSpinner}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            ) : (
              <div className={styles["div-address-form"]}>
                <AddressForm
                  isOpen={true}
                  formDatas={formDatas}
                  setFormErrors={setFormErrors}
                  formErrors={formErrors}
                />
              </div>
            ))}

          {tabIndex === "1" && (
            <>
              {/* <div className={`${styles["div-click-and-collect"]}`}>
                          <ClickAndCollectSearch
                            storeLocatorData={storeLocatorProps}
                          ></ClickAndCollectSearch>
                          <div className={styles["collection-text"]}>
                            {t("collectionText")}
                          </div>
                        </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShippingSection;
