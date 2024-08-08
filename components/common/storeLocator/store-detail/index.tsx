import Button from "components/common/ui/button";
import { Clock, GoogleMapIcon, MapPin } from "components/icons";
import styles from "../store-detail/store-detail.module.scss";
import React from "react";
import StoreEmailPhone from "../store-list/single-store-card/storeEmailPhone";

interface StoreDetailsProps {
  selectedStore: { [key: string]: any };
}

const StoreDetail = ({ selectedStore }: StoreDetailsProps) => {
  return (
    <>
      <div
        className={styles["store-detail-main"]}
        data-show-details={selectedStore}
      >
        <div className={styles["div-left"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["div-heading"]}>
              <div className={styles["div-icon"]}>
                <MapPin color={"black"}></MapPin>
              </div>
              <div className={styles["store-name"]}>
                {selectedStore?.locationHeading}
              </div>
            </div>
            <div className={styles["div-store-details"]}>
              <div className={styles["distance"]}>
                {selectedStore?.distance}
              </div>
              <div className={styles["div-map-link"]}>
                <GoogleMapIcon
                  onClick={() => {
                    if (!selectedStore?.locationUrl) return;
                    window.open(selectedStore?.locationUrl, "_blank").focus();
                  }}
                ></GoogleMapIcon>
              </div>
              <div className={styles["store-address"]}>
                {selectedStore?.locationAddress}
              </div>

              <StoreEmailPhone selectedStore={selectedStore} />
            </div>
          </div>
        </div>
        <div
          className={styles["div-right"]}
          data-hide={!selectedStore?.hasOwnProperty("dayAndTime")}
        >
          <div className={styles["wrapper"]}>
            <div className={styles["div-heading"]}>
              {selectedStore?.openingHourHeading ? (
                <div className={styles["div-icon"]}>
                  <Clock></Clock>
                </div>
              ) : null}
              <div className={styles["store-name"]}>
                {selectedStore?.openingHourHeading}
              </div>
            </div>
            <div className={styles["div-store-details"]}>
              {selectedStore?.dayAndTime &&
                selectedStore?.dayAndTime?.map(
                  (day: { day: string; time: string }, index: number) => {
                    return (
                      <div key={index} className={styles["div-opening-hours"]}>
                        <div className={styles["div-days"]}>{day?.day}</div>
                        <div className={styles["div-hours"]}>{day?.time}</div>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreDetail;
