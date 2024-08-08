import React, { useEffect } from "react";
import styles from "../store-list/store-list.module.scss";
import SingleStoreCard from "./single-store-card";
import useTranslation from "next-translate/useTranslation";
import { LocationData } from "lib/types/common";

interface StoreListProps {
  setSelectedMapPosition?: Function;
  selectedStore?: {
    [key: string]: { [key: string]: { [key: string]: Function } };
  };
  setSelectedStore?: Function;
  onSelect?: Function;
  mapModalOpen?: boolean;
  active?: { [key: string]: any };
  setActive?: Function;
  hideSelect?: boolean;
  locationData?: LocationData[];
}

const StoreList = ({
  setSelectedMapPosition,
  selectedStore,
  setSelectedStore,
  onSelect = () => {},
  active,
  setActive = () => {},
  hideSelect = false,
  locationData,
}: StoreListProps) => {
  const { t } = useTranslation("common");
  useEffect(() => {
    if (locationData?.length < 1) {
      setSelectedStore && setSelectedStore(false);
      return;
    }
    setSelectedMapPosition &&
      setSelectedMapPosition({
        lat: Number(locationData?.[0]?.latitude),
        lng: Number(locationData?.[0]?.longitude),
      });

    setActive(locationData?.[0]);
  }, [locationData]);

  return (
    <>
      <div className={styles["store-list-main"]}>
        {locationData &&
          locationData?.length > 0 &&
          locationData?.map((place: any, index: number) => {
            return (
              <>
                <SingleStoreCard
                  place={place}
                  index={index}
                  selectedStore={selectedStore}
                  setSelectedStore={setSelectedStore}
                  setSelectedMapPosition={setSelectedMapPosition}
                  onSelect={onSelect}
                  setActive={setActive}
                  active={active}
                  hideSelect={hideSelect}
                ></SingleStoreCard>
              </>
            );
          })}
        {locationData && locationData?.length < 1 && (
          <div>{t("No stores found")}</div>
        )}
      </div>
    </>
  );
};

export default StoreList;
