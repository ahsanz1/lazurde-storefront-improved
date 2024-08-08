import React, { useEffect, useState, useContext, FC } from "react";
import { AppContext } from "lib/context";
import { StoreLocatorXMProps } from "lib/types/common";
import styles from "./clickAndCollect.module.scss";
import Splash from "components/common/ui/splash";
import Tabs from "components/common/ui/tabs";
import StoreSearch from "../store-search";
import StoreList from "../store-list";
import StoreDetail from "../store-detail";
import useTranslation from "next-translate/useTranslation";

type LatLngProps = {
  lat: number;
  lng: number;
};

interface StoreLocatorProps {
  storeLocatorData?: StoreLocatorXMProps[];
  setStoreDetails?: Function;
  viewStoreDetails?: boolean;
  searchInputValue?: string;
  setSelectedStoreData?: Function;
  mapModalOpen?: boolean;
  setMapModalOpen?: Function;
}

const ClickAndCollect: FC<StoreLocatorProps> = ({
  storeLocatorData = [],
  searchInputValue = "",
  setSelectedStoreData = () => {},
  viewStoreDetails = false,
  mapModalOpen,
  setMapModalOpen,
}): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [placeDetails, setPlaceDetails] = useState<{ [key: string]: any[] }>(
    {}
  );
  const { t } = useTranslation("common");
  const [tabHeadings, setTabHeadings] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedBrandStoreIds, setSelectedBrandStoreIds] = useState<string[]>(
    []
  );
  const [selectedMapPosition, setSelectedMapPosition] = useState<LatLngProps>({
    lat: 0,
    lng: 0,
  });
  const [selectedStore, setSelectedStore] = useState();
  const [searchedArray, setSearchedArray] = useState<
    | {
        [key: string]: { [key: string]: { [key: string]: Function } };
      }[]
    | undefined
  >();
  const [splashLoading, setSplashLoading] = useState(false);
  const [active, setActive] = useState(placeDetails?.[0]);

  const extractStoreLocatorRegion = (region: "sa" | "ae" | "eg") => {
    setSplashLoading(true);
    let storeRegionId: "saStores" | "uaeStores" | "egStores" | "" = "";
    switch (region) {
      case "sa":
        storeRegionId = "saStores";
        break;

      case "ae":
        storeRegionId = "uaeStores";
        break;

      case "eg":
        storeRegionId = "egStores";
        break;

      default:
        storeRegionId = "saStores";
        break;
    }
    const matchedStores =
      storeLocatorData &&
      storeLocatorData?.find((item) => item.brandName === storeRegionId);
    return matchedStores;
  };

  const extractAllStoreLocatorData = (storeData: any) => {
    setSplashLoading(true);
    if (!storeData) return;
    const allStoresArray: string[] = [];
    Object.keys(storeData)?.map((storeId: any) => {
      if (
        storeId === "lazurdeStoresArray" ||
        storeId === "misslStoresArray" ||
        storeId === "wavesStoresArray"
      )
        storeData?.[storeId]?.map((storeListObj: { storeList: [] }) => {
          allStoresArray.push(...storeListObj?.storeList);
        });
    });

    return allStoresArray;
  };

  const getStoresCloseToUser = (stores: any[]) => {
    const radius: number = 100000;
    const closeByStores = stores
      ?.filter(
        (store) => store?.rows?.[0]?.elements?.[0]?.distance?.value <= radius
      )
      .sort((a, b): any => {
        if (
          a?.rows?.[0]?.elements?.[0]?.distance?.value <
          b?.rows?.[0]?.elements?.[0]?.distance?.value
        ) {
          return -1;
        } else {
          return 1;
        }
      });
    closeByStores &&
      setPlaceDetails((prev) => {
        return { ...prev, [selectedTab]: closeByStores };
      });
  };

  useEffect(() => {
    const tempHeadingArray: string[] = ["Close To You", "All Stores"];
    setTabHeadings(tempHeadingArray);
  }, []);

  useEffect(() => {
    // if (selectedTab === "0") {
    //   getStoresCloseToUser(placeDetails?.["1"]);
    //   setSearchedArray(undefined);
    //   return;
    // }
    let matchedStores: StoreLocatorXMProps = extractStoreLocatorRegion(
      appState?.region
    );
    let storeDataArray: any[] = extractAllStoreLocatorData(matchedStores);

    if (!storeDataArray || storeDataArray?.length < 1) {
      storeDataArray = [];
    }

    const tempStoreIdArray: string[] = [];
    storeDataArray?.map((storeListObj: { placeId: string }) => {
      storeListObj?.placeId && tempStoreIdArray.push(storeListObj?.placeId);
    });

    setSelectedBrandStoreIds(tempStoreIdArray);
    setSearchedArray(undefined);
  }, [selectedTab]);

  useEffect(() => {
    if (selectedStore) {
      setSelectedStoreData && setSelectedStoreData(selectedStore);
      setMapModalOpen(false);
    }
  }, [selectedStore]);

  // const onSelect = () => {
  //   selectedStore &&
  //   setSelectedStoreData &&
  //   setSelectedStoreData(selectedStore);
  // }

  return (
    <>
      {Object.keys(placeDetails).length < 1 && (
        <Splash isLoading={splashLoading}></Splash>
      )}
      <div className={styles["div-form-heading"]}>
        <h2>
          {viewStoreDetails
            ? t("Collection Point Details")
            : t("Find a Collection Point")}
        </h2>
      </div>
      <div
        className={styles["main-store-locator"]}
        data-display={!viewStoreDetails}
      >
        <div
          className={styles["div-store-search"]}
          data-display={!viewStoreDetails}
        >
          <StoreSearch
            searchableArray={placeDetails?.[selectedTab]}
            defaultValue={searchInputValue}
            setSearchedArray={setSearchedArray}
            resetSearch={selectedTab}
            mapModalOpen={mapModalOpen}
          ></StoreSearch>
        </div>
        <div
          className={styles["div-store-tabs"]}
          data-hide={tabHeadings.length < 1}
          data-display={!viewStoreDetails}
        >
          <Tabs
            className={styles["store-locator-tabs"]}
            headingArr={tabHeadings}
            setSelectedTab={setSelectedTab}
            selectedTab={String(selectedTab)}
            tabIndex={"1"}
          />
        </div>
        <div
          className={styles["div-store-list"]}
          data-display={!viewStoreDetails}
        >
          <StoreList
            // placeDetails={
            //   searchedArray ? searchedArray : placeDetails?.[selectedTab]
            // }
            setSelectedMapPosition={setSelectedMapPosition}
            selectedStore={selectedStore}
            setSelectedStore={setSelectedStore}
            // onSelect={onSelect}
            mapModalOpen={mapModalOpen}
            active={active}
            setActive={setActive}
          ></StoreList>
        </div>
        <div
          className={styles["div-store-map"]}
          data-display={viewStoreDetails}
        >
          {/* <GoogleMaps
            // placeIds={selectedBrandStoreIds}
            // selectedTab={selectedTab}
            // placeDetails={placeDetails}
            // setPlaceDetails={setPlaceDetails}
            selectedMapPosition={selectedMapPosition}
            // setSplashLoading={setSplashLoading}
          ></GoogleMaps> */}
        </div>
        <div
          className={styles["div-store-details"]}
          data-display={!viewStoreDetails}
        >
          <StoreDetail selectedStore={active}></StoreDetail>
        </div>
      </div>
    </>
  );
};

export default ClickAndCollect;
