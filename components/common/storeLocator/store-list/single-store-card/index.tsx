import React, { useEffect, useState } from "react";
import Button from "components/common/ui/button";
import {
  ChevronDown,
  Clock,
  EditIcon,
  GoogleMapIcon,
  MapPin,
} from "components/icons";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import styles from "components/common/storeLocator/store-list/single-store-card/single-store-card.module.scss";
import { LocationData } from "lib/types/common";
import StoreEmailPhone from "./storeEmailPhone";

interface SingleStoreCardProps {
  className?: string;
  index?: number;
  place: LocationData;
  selectedStore?: {
    [key: string]: { [key: string]: { [key: string]: Function } };
  };
  setSelectedStore?: Function;
  setSelectedMapPosition?: Function;
  isClickAndCollectCard?: boolean;
  onEdit?: Function;
  onSelect?: Function;
  onViewDetails?: Function;
  active?: { [key: string]: any };
  setActive?: Function;
  hideSelect?: boolean;
}

const SingleStoreCard = ({
  className = "",
  index = 0,
  place,
  selectedStore,
  setSelectedStore = () => {},
  setSelectedMapPosition = () => {},
  isClickAndCollectCard = false,
  onEdit = () => {},
  onViewDetails = () => {},
  active,
  setActive = () => {},
  hideSelect = false,
}: SingleStoreCardProps): JSX.Element => {
  const [mobileOpeningHours, setMobileOpeningHours] = useState(false);
  const [width] = useWindowSize();
  useEffect(() => {
    if (!selectedStore && index === 0) {
      setActive(place);
    }
    selectedStore && setActive(selectedStore);
  }, [selectedStore]);

  return (
    <div
      key={index}
      className={`${styles["div-store-list-single"]} ${className}`}
      data-selected={active?.id === place?.id}
    >
      <div className={styles["div-store-address-details"]}>
        <div
          className={styles["div-details"]}
          onClick={() => {
            setSelectedMapPosition({
              lat: place?.latitude,
              lng: place?.longitude,
            });
            setActive(place);
          }}
        >
          <div className={styles["div-heading"]}>
            <div className={styles["div-icon"]}>
              <MapPin color={"black"}></MapPin>
            </div>
            <h2 className={styles["store-name"]}>{place?.locationHeading}</h2>
          </div>

          <div className={styles["div-store-details"]}>
            <div className={styles["store-address"]}>
              {place?.locationAddress}
            </div>
            <div
              className={styles["store-address"]}
              data-display={isClickAndCollectCard}
            >
              <Button
                buttonStyle="underline"
                buttonSize="inline"
                buttonText={"View Map and Opening Hours"}
                onClick={(e) => {
                  onViewDetails();
                }}
              ></Button>
            </div>
            <div
              className={styles["div-button"]}
              data-hide={width > desktopScreenSize || hideSelect}
              data-display={!isClickAndCollectCard}
            >
              <Button
                className={styles["store-select"]}
                buttonStyle={"underline"}
                buttonText={"Select"}
                buttonSize={"fill"}
                onClick={() => {
                  setSelectedMapPosition({
                    lat: place?.latitude,
                    lng: place?.longitude,
                  });
                  setSelectedStore(place);
                  // onSelect();
                }}
              ></Button>
            </div>
          </div>
        </div>
        <div
          className={styles["store-info"]}
          data-display={!isClickAndCollectCard}
        >
          <div className={styles["distance"]}>{place?.distance}</div>
          <div
            className={styles["div-map-link"]}
            onClick={() => {
              if (!place?.locationUrl) return;
              window.open(place?.locationUrl, "_blank").focus();
            }}
          >
            <GoogleMapIcon></GoogleMapIcon>
          </div>

          <div
            className={styles["div-button"]}
            data-hide={width < desktopScreenSize || hideSelect}
          >
            <Button
              className={styles["store-select"]}
              buttonStyle={"underline"}
              buttonText={"Select"}
              buttonSize={"fill"}
              onClick={() => {
                // window.open(place.url, "_blank").focus();
                setSelectedMapPosition({
                  lat: place?.latitude,
                  lng: place?.longitude,
                });
                setSelectedStore(place);
                // onSelect();
              }}
            ></Button>
          </div>
          <div
            className={styles["div-chevron"]}
            data-hide={
              width > desktopScreenSize || place?.dayAndTime?.length < 1
            }
            data-show={mobileOpeningHours}
            onClick={() => {
              setMobileOpeningHours(!mobileOpeningHours);
            }}
          >
            <span>
              <ChevronDown></ChevronDown>
            </span>
          </div>
        </div>
        <div
          className={styles["store-info"]}
          data-display={isClickAndCollectCard}
        >
          <Button
            buttonStyle="underline"
            buttonText={"Change"}
            buttonSize={"inline"}
            onClick={() => {
              onEdit();
            }}
          ></Button>
        </div>
      </div>
      <StoreEmailPhone selectedStore={place} className={"mobile-only-info"} />
      <div
        className={styles["opening-hour-wrapper"]}
        data-show={mobileOpeningHours}
        data-display={!isClickAndCollectCard}
      >
        <div className={styles["div-heading"]}>
          {place?.openingHourHeading ? (
            <div className={styles["div-icon"]}>
              <Clock></Clock>
            </div>
          ) : null}
          <div className={styles["store-name"]}>
            {place?.openingHourHeading}
          </div>
        </div>
        <div className={styles["div-store-details"]}>
          {place?.dayAndTime &&
            place?.dayAndTime?.map(
              (openingInfo: { day: string; time: string }, index: number) => {
                const { day, time } = openingInfo;
                return (
                  <div key={index} className={styles["div-opening-hours"]}>
                    <div className={styles["div-days"]}>{day}</div>
                    <div className={styles["div-hours"]}>{time}</div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default SingleStoreCard;
