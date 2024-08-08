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

const HomeSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;
  const responsiveWidth = "100%";
  const responsiveHeight = Number(isDesktop ? "100%" : "450");
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
              <MobileNavBar showSideBar={false} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"100%"}
                  height={300}
                  viewBox={`0 0 ${responsiveWidth} ${responsiveHeight}`}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ padding: "10px" }}
                >
                  <rect x="0" y="50" rx="4" ry="4" width="100%" height={300} />
                </ContentLoader>
                <PlpListSkeleton count={2}></PlpListSkeleton>
              </div>
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
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "60px",
                    marginBottom: "60px",
                  }}
                >
                  <ContentLoader
                    speed={2}
                    width={"100%"}
                    height={750}
                    viewBox={`0 0 ${responsiveWidth} ${responsiveHeight}`}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ padding: "20px" }}
                  >
                    <rect x="40%" y="0" rx="3" ry="3" width="300" height="6" />
                    <rect x="0" y="20" rx="4" ry="4" width="100%" height="9" />
                    <rect
                      x="0"
                      y="50"
                      rx="4"
                      ry="4"
                      width="100%"
                      height={isDesktop ? 750 : 200}
                    />
                  </ContentLoader>
                </div>
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default HomeSkeleton;
