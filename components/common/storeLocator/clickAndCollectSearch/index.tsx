import React, { useEffect, useState, FC, useRef } from "react";
import { Libraries, StoreLocatorXMProps } from "lib/types/common";
import styles from "./clickAndCollectSearch.module.scss";
import StoreSearch from "../store-search";
import Button from "components/common/ui/button";
import Modal from "components/common/ui/modal";
import SingleStoreCard from "../store-list/single-store-card";
import useTranslation from "next-translate/useTranslation";

interface StoreLocatorProps {
  storeLocatorData?: StoreLocatorXMProps[];
}

const ClickAndCollectSearch: FC<StoreLocatorProps> = ({
  storeLocatorData,
}): JSX.Element => {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [selectedStoreData, setSelectedStoreData] = useState();
  const [searchInputValue, setSearchInputValue] = useState();
  const [viewStoreDetails, setViewStoreDetails] = useState(false);
  const gMapLibs = useRef<Libraries>(["places"]);
  const { t } = useTranslation("common");
  const onSearch = () => {
    setMapModalOpen(true);
  };

  useEffect(() => {
    viewStoreDetails && setMapModalOpen(true);
  }, [viewStoreDetails]);

  useEffect(() => {
    viewStoreDetails && setMapModalOpen(true);
  }, [searchInputValue]);

  useEffect(() => {
    !mapModalOpen && setSearchInputValue(undefined);
    !mapModalOpen && setViewStoreDetails(false);
  }, [mapModalOpen]);

  return (
    <>
      <h3 className={styles["click-and-collect-heading"]}>
        {t("Find a Collection Point")}
      </h3>
      {!selectedStoreData ? (
        <>
          <StoreSearch
            setSearchInputValue={setSearchInputValue}
            onSearch={onSearch}
            placeHolder={t("Input Address")}
          ></StoreSearch>
          <Button
            buttonStyle="underline"
            buttonSize="inline"
            buttonText={t("View All Stores")}
            onClick={() => {
              setMapModalOpen(true);
            }}
          />
        </>
      ) : (
        <SingleStoreCard
          place={selectedStoreData}
          isClickAndCollectCard={true}
          className={styles["click-and-collect-single"]}
          onEdit={() => {
            setMapModalOpen(true);
          }}
          onViewDetails={() => {
            setViewStoreDetails(true);
          }}
        ></SingleStoreCard>
      )}
      <Modal
        className={`${styles["store-locator-modal-main"]} ${
          styles[viewStoreDetails ? "details-modal" : ""]
        }`}
        overlayClass={styles["store-locator-overlay"]}
        modalBodyClassName={styles["store-locator-modal-body"]}
        isOpened={mapModalOpen}
        bgBluryModal={true}
        divModalBody={styles["store-locator-inner-body"]}
        onClose={() => {
          setMapModalOpen(false);
        }}
      >
        <>
          {/* <LoadScript
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          // libraries={gMapLibs.current}
        >
          <ClickAndCollect
            storeLocatorData={storeLocatorData}
            searchInputValue={searchInputValue}
            setSelectedStoreData={setSelectedStoreData}
            viewStoreDetails={viewStoreDetails}
            mapModalOpen={mapModalOpen}
            setMapModalOpen={setMapModalOpen}
          ></ClickAndCollect>
        </LoadScript> */}
        </>
      </Modal>
    </>
  );
};

export default ClickAndCollectSearch;
