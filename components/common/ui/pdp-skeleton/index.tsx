import MobileNavBar from "components/common/header/mobile-navbar";
import useWindowSize from "lib/utils/useWindowSize";
import React, { useEffect, useState } from "react";
import PdpLoaderMobile from "../skeletons/pdp-mobile";
import { desktopScreenSize } from "lib/utils/common";
import PpdLoader from "../skeletons/pdp";
import {
  Bag,
  Divider,
  Globe,
  Heart,
  LazurdeLogo,
  MapPin,
  MisslLogo,
  User,
} from "components/icons";
import styles from "./style.module.scss";

const PdpSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [width] = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={!isLoading ? "loader-fade-out" : ""}
      style={{
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        background: "white",
        zIndex: "100000",
      }}
    >
      {width > 0 ? (
        <>
          <div
            style={{
              width: "100%",
              height: "40px",
              background: "rgb(241, 233, 219)",
            }}
          ></div>
          {width < desktopScreenSize ? (
            <>
              {/* <MobileNavBar showSideBar={false}/> */}
              <PdpLoaderMobile></PdpLoaderMobile>
            </>
          ) : (
            <>
              <div className={styles["user-navbar"]} data-testid="product-card">
                <div className={styles["left_div"]}>
                  <div id={"wrapper"} className={styles["wrapper_brands"]}>
                    <div
                      id={"lazurde"}
                      className={`${styles["brand-tab"]} ${styles["lazurde"]}`}
                    >
                      <LazurdeLogo
                        width={103}
                        height={40}
                        fill={"white"}
                      ></LazurdeLogo>
                    </div>
                    <div
                      id={"missl"}
                      className={`${styles["brand-tab"]} ${styles["missl"]}`}
                    >
                      <MisslLogo
                        width={103}
                        height={40}
                        fill={"white"}
                      ></MisslLogo>
                    </div>
                  </div>
                </div>
                <div className={styles["right_div"]}>
                  {/* {appState?.region === "ae" ? null : (
                    <div className={styles["link"]}>
                      <MapPin />
                    </div>
                  )} */}

                  <div className={styles["link"]}>
                    <Globe />
                  </div>

                  <div className={styles["link"]}>
                    <User />
                  </div>

                  <div className={styles["link"]}>
                    <Heart />
                  </div>

                  <div className={styles["divider"]}>
                    <Divider />
                  </div>

                  <div className={`${styles["link"]} ${styles.minicart_link}`}>
                    <Bag />
                  </div>
                </div>
              </div>
              <PpdLoader></PpdLoader>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default PdpSkeleton;
