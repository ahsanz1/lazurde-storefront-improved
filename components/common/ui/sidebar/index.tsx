import React, { useContext, useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { BackArrow, Cross, CrossSmall } from "components/icons";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import AnimationWrapper from "../animation-wrapper";

const SideBar = ({
  isopend,
  onClose = () => {},
  closeMobileNavBar = () => {},
  children,
  sidebarHeight = "100vh",

}: any): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");

  return (
      <>
        <div
          data-opened={isopend}
          className={styles.sideBarWrapper}
          onClick={(event) => event.stopPropagation()}
          style={{
            height:
              width > desktopScreenSize
                ? isopend
                  ? sidebarHeight
                  : ""
                : "100%",
            // opacity: !isopend ? 0 : "",
            minHeight:
              width > desktopScreenSize ? (isopend ? "892px" : "") : "",
          }}
        >
          {width < desktopScreenSize ? (
            <div className={styles["close-menu-wrapper"]}>
              <div className={styles.closebtn}>
                <button>
                  <CrossSmall
                    onClick={() => {
                      onClose && onClose();
                      closeMobileNavBar && closeMobileNavBar();
                    }}
                  ></CrossSmall>
                </button>
              </div>
              <div
                onClick={() => {
                  onClose && onClose();
                }}
                className={styles["back-btn"]}
              >
                <BackArrow fill="#000000" opacity="0.6" />
                <span data-testid="back" className="c-opacity-60">
                  {t("back")}
                </span>
              </div>
            </div>
          ) : null}
          {isopend && (
            <AnimationWrapper
              animationName="slide-up"
              animationWrapperDivStyle={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {children}
            </AnimationWrapper>
          )}
        </div>
      </>
    )

};

export default SideBar;
