import React, { useEffect, useState, useContext } from "react";
import { LocationData } from "lib/types/common";
import Tabs from "../ui/tabs";
import GoogleMaps from "./google-map";
import StoreDetail from "./store-detail";
import StoreList from "./store-list";
import StoreSearch from "./store-search";
import styles from "./storeLocator.module.scss";
import StoreLocatorLoader from "../ui/skeletons/store-locator";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import Image from "next/image";
import Heading from "../ui/heading";
import { AppContext } from "lib/context";
import useWindowSize from "lib/utils/useWindowSize";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_TRANSLATE_API_KEY, isDev } from "general-config";
import { brandNames } from "lib/utils/constants";
import { useRouter } from "next/router";
import BreadCrumbs from "../ui/bread-crumbs";
import Script from "next/script";

type LatLngProps = {
  lat: number;
  lng: number;
};

const StoreLocator = ({ page, component }: any): JSX.Element => {
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const [size] = useWindowSize();
  const componentProps = component?.getParameters()?.location;
  const data = componentProps && page?.getContent(componentProps)?.getData();
  const { bannerData, storeLocation } = data;
  const { content = null, title = null, image = null } = bannerData || {};
  const desktopImg = getBloomreachImg(page, image);
  const bannerPosition =
    data?.bannerTextPosition?.bannertextPosition?.selectionValues;
  const initialTab = 0;
  const [tabHeadings, setTabHeadings] = useState([]);
  const [selectedTab, setSelectedTab] = useState<number>();
  const [selectedStore, setSelectedStore] = useState();
  const [searchedArray, setSearchedArray] = useState<LocationData[]>();
  const [active, setActive] = useState<LocationData>();
  const [stores, setStores] = useState<any>([]);
  const [selectedMapPosition, setSelectedMapPosition] = useState<LatLngProps>({
    lat: stores?.[tabHeadings?.[selectedTab]]?.latitude || 0,
    lng: stores?.[tabHeadings?.[selectedTab]]?.longitude || 0,
  });

  const [locationWithDistance, setLocationWithDistance] = useState([]);

  const groupedLocations = (locations: []) => {
    const groupedLocation: { [key: string]: [[key: string]] } = {};
    locations?.forEach((location: any, index) => {
      const { tabHeading } = location;
      const obj: any = {
        ...location,
        id: index,
        latitude: Number(location?.latitude),
        longitude: Number(location?.longitude),
      };
      if (tabHeading) {
        if (!groupedLocation?.[tabHeading]) {
          groupedLocation[tabHeading] = [obj];
        } else {
          const _loc: any = {
            ...location,
            id: index,
            latitude: Number(location?.latitude),
            longitude: Number(location?.longitude),
          };
          groupedLocation?.[tabHeading].push(_loc);
        }
      }
    });
    return groupedLocation;
  };

  useEffect(() => {
    let index = 0;
    if (
      appState?.brandEN === brandNames?.["miss-l"] ||
      router?.query?.brand === "miss-l"
    ) {
      tabHeadings?.find((heading, i) => {
        if (
          heading.toLowerCase().includes("miss") ||
          heading.toLowerCase().includes("مس أل")
        ) {
          index = i;
          return true;
        }
      });
    }
    setSelectedTab(() => index);
  }, [tabHeadings, appState?.brandEN]);

  useEffect(() => {
    storeLocation && setStores(groupedLocations(storeLocation));
    const tempHeadingArray = new Set();
    storeLocation?.map(
      (store: { tabHeading: string }) =>
        store?.tabHeading && tempHeadingArray?.add(store?.tabHeading)
    );

    tempHeadingArray && setTabHeadings(Array.from(tempHeadingArray));
  }, []);

  const locations = storeLocation?.map((store: any, index: number) => {
    if (index === 0) {
      return `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "L’azurde",
        "image": "",
        "description": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "${store?.locationAddress}",
          "addressLocality": "${store?.locationAddress}",
          "addressRegion": "${store?.locationAddress}",
          "postalCode": "",
          "addressCountry": "${store?.locationAddress}"
        },
        "openingHoursSpecification": [${store?.dayAndTime?.map(
          (dayTime: { day: string; time: string }) => {
            const openCloseTime = dayTime?.time?.split("-");
            return `{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "${dayTime?.day}",
              "opens": "${openCloseTime?.[0]}",
              "closes": "${openCloseTime?.[1]}"
            }`;
          }
        )}],
        "sameAs": [
          "https://www.facebook.com/lazurde",
          "https://www.instagram.com/lazurde/",
          "https://twitter.com/lazurde",
          "https://www.youtube.com/user/LazurdeJewelry"
        ]
      }`;
    }
  });

  return (
    <>
      <Script
        id="store-location"
        strategy="lazyOnload"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: locations[0],
        }}
      />
      <div key={selectedTab} className={styles["store-locator-wrapper"]}>
        {size > desktopScreenSize ? (
          <div className={styles["hero-banner-container"]}>
            <Image
              src={desktopImg?.imgUrl || "/"}
              width={1440}
              height={size > desktopScreenSize ? 347 : 308}
              layout="responsive"
              alt={desktopImg?.altText || appState?.brand}
              priority={false}
              quality={100}
              // unoptimized={isDev}
            />
            <div
              className={styles["banner-text-section"]}
              data-content-position={
                bannerPosition?.[0]?.key?.trim() || "Center"
              }
            >
              {title && (
                <Heading
                  element="h1"
                  className={styles["banner-text"]}
                  data-testid="banner-text"
                >
                  {title}
                </Heading>
              )}
            </div>
          </div>
        ) : null}

        <BreadCrumbs
          showBrand={true}
          isDangerouslySetInnerHTML={true}
          child={content?.value}
          className="store-locator"
        />

        {(locationWithDistance?.length < 1 ||
          !stores?.[tabHeadings?.[selectedTab]]) && (
          <>
            <div
              className={styles["loader-div"]}
              style={{
                backgroundColor: "#fff",
              }}
            >
              <StoreLocatorLoader />
            </div>
          </>
        )}
        <div className={styles["div-form-heading"]}>
          <h1 dangerouslySetInnerHTML={{ __html: content?.value }}></h1>
        </div>
        <div className={styles["main-store-locator"]}>
          <div className={styles["div-store-tabs"]}>
            <Tabs
              className={styles["store-locator-tabs"]}
              headingArr={tabHeadings}
              tabIndex={"0"}
              selectedTab={String(selectedTab)}
              setSelectedTab={setSelectedTab}
            ></Tabs>
          </div>
          <div className={styles["div-store-search"]}>
            <StoreSearch
              searchableArray={
                locationWithDistance || stores[tabHeadings[selectedTab]]
              }
              setSearchedArray={setSearchedArray}
              resetSearch={selectedTab}
            ></StoreSearch>
          </div>
          <div className={styles["div-store-list"]}>
            <StoreList
              setSelectedMapPosition={setSelectedMapPosition}
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
              active={active}
              setActive={setActive}
              hideSelect={true}
              locationData={
                searchedArray
                  ? searchedArray
                  : locationWithDistance || stores[tabHeadings[selectedTab]]
              }
            ></StoreList>
          </div>
          <div className={styles["div-store-map"]}>
            <LoadScript googleMapsApiKey={GOOGLE_TRANSLATE_API_KEY}>
              <GoogleMaps
                selectedMapPosition={selectedMapPosition}
                locationData={stores?.[tabHeadings?.[selectedTab]]}
                setLocationWithDistance={setLocationWithDistance}
              ></GoogleMaps>
            </LoadScript>
          </div>
          <div className={styles["div-store-details"]}>
            <StoreDetail selectedStore={active}></StoreDetail>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreLocator;
