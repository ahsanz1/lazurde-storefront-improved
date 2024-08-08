import React, { FC, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import RadioButton from "components/common/ui/radio-button";
import styles from "./style.module.scss";
import Spinner from "components/common/ui/spinner";
import { orderDeliverDate } from "lib/utils/common";

type ShippingMethodProps = {
  selectedShippingMethod?: any;
  currency?: number;
  setShippingMethodCheck?: Function;
};

const ShippingMethod: FC<ShippingMethodProps> = ({
  selectedShippingMethod,
  currency,
  setShippingMethodCheck,
}) => {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (!selectedShippingMethod?.description || !selectedShippingMethod?.name) {
      setShippingMethodCheck(true);
    } else {
      setShippingMethodCheck(false);
    }
  }, [selectedShippingMethod]);

  let minDate: any = new Date();
  minDate.setDate(minDate.getDate() + selectedShippingMethod?.minimumDays);

  if (/fri/i.test(minDate)) {
    minDate.setDate(minDate.getDate() + 1);
  }
  const minimumDate = orderDeliverDate(minDate);

  let maxDate: any = new Date();
  maxDate.setDate(maxDate.getDate() + selectedShippingMethod?.maximumDays);

  if (/fri/i.test(maxDate)) {
    maxDate.setDate(maxDate.getDate() + 1);
  }
  const maximumDate = orderDeliverDate(maxDate);
  return (
    <>
      {!selectedShippingMethod?.description ? (
        <div className={`${styles["bag-wrapper"]} ${styles["loading-div"]}`}>
          <span>{t("Shipping details aren't available")}</span>
          {/* <Spinner width={16} height={16}></Spinner> */}
        </div>
      ) : (
        <>
          <div className={styles["bag-wrapper"]}>
            <span role="main-headings" className={styles["main-heading"]}>
              {t("shippingMethod")}
            </span>
            <div className={styles["radio-box"]}>
              <RadioButton
                label={
                  `${selectedShippingMethod?.name?.split(" ")[0] || ""} (${
                    selectedShippingMethod?.description
                  })` || ""
                }
                description={`${t(
                  "Estimated Delivery"
                )}: ${minimumDate} - ${maximumDate}`}
                checked={true}
              />
              <div className={styles["price-opt"]}>
                {selectedShippingMethod?.cost === 0
                  ? t("Free")
                  : `${currency} ${selectedShippingMethod?.cost}`}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShippingMethod;
