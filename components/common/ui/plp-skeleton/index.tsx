import MobileNavBar from "components/common/header/mobile-navbar";
import useWindowSize from "lib/utils/useWindowSize";
import React, { useEffect, useState } from "react";
import { desktopScreenSize } from "lib/utils/common";
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
import PlpListSkeleton from "../skeletons/plp-list";
import ContentLoader from "react-content-loader";

const PlpSkeleton = () => {
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
              {/* <MobileNavBar showSideBar={false} /> */}
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "60px",
                    marginBottom: "10px",
                  }}
                >
                  <ContentLoader viewBox="0 0 778 116" width={350} height={116}>
                    <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
                    <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
                    <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
                    <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
                    <rect
                      x="29"
                      y="116"
                      rx="0"
                      ry="0"
                      width="749"
                      height="32"
                    />
                  </ContentLoader>
                </div>
              <PlpListSkeleton count={1}></PlpListSkeleton>
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
              <div style={{ paddingLeft: "100px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "120px",
                    marginBottom: "60px",
                  }}
                >
                  <ContentLoader viewBox="0 0 778 116" width={778} height={116}>
                    <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
                    <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
                    <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
                    <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
                    <rect
                      x="29"
                      y="116"
                      rx="0"
                      ry="0"
                      width="749"
                      height="32"
                    />
                  </ContentLoader>
                </div>
                <PlpListSkeleton count={8}></PlpListSkeleton>
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default PlpSkeleton;
