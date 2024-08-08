import React, { FC, useState, useContext, useEffect } from "react";
import styles from "./promo-bar.module.scss";
import Link from "next/link";
import { AppContext } from "lib/context";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize, useIsomorphicLayoutEffect } from "lib/utils/common";
import { BrProps } from "@bloomreach/react-sdk";
import { useRouter } from "next/router";
import MiniPromotionTimer from "components/common/promotion-timer/miniPromoTime";
import { useQueryClient } from "@tanstack/react-query";
interface PromoBarProps extends BrProps {
  // title: string;
  // linkText: string;
  // mobileLinkText: string;
  // link: string;
  // bgColor: string;
}

const PromoBar: FC<PromoBarProps> = ({ component, page }): JSX.Element => {
  const [isClosed, setIsClosed] = useState(true);
  const [promotionTimer, setPromotionTimer] = useState(true);
  const [headerRender, setHeaderRender] = useState(null);
  const { setSearchWrapperPosition } = useContext(AppContext);
  const router = useRouter();

  const [width] = useWindowSize();

  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);

  const componentProps = component && component?.getProperties();

  // const url =
  //   componentProps?.textLink &&
  //   page?.getContent(componentProps?.textLink)?.getUrl();
  const dynamicText =
    width > desktopScreenSize
      ? componentProps?.textForLink
      : componentProps?.mobileText;

  useIsomorphicLayoutEffect(() => {
    setIsClosed(
      typeof window !== "undefined"
        ? JSON.parse(window.sessionStorage.getItem("promo-bar-visible"))
        : false
    );
    setSearchWrapperPosition({
      promo: false,
      langSelector: false,
    });
  }, [router?.locale]);

  useEffect(() => {
    setTimeout(() => {
      const desktopeHaderLoad = typeof document !== "undefined" && document.querySelector("#user-navbar");
      const mobileHeaderLoad = typeof document !== "undefined" && document.querySelector("#sitenav-bar")
      if (width > desktopScreenSize) {
        setHeaderRender(desktopeHaderLoad)
      } else if (width < desktopScreenSize) {
        setHeaderRender(mobileHeaderLoad)
      } else {
        setHeaderRender(null)
      }
    }, 1000);
  }, [width]);

  let promotion = 0;

  if (typeof Storage !== "undefined") {
    if (sessionStorage.getItem("Promotion") === null) {
      window.sessionStorage.removeItem("Promotion");
    } else {
      promotion = JSON.parse(window.sessionStorage.getItem("Promotion"));
    }
  }

  const flashTimeFromCms = componentProps?.flashTimer;

  const handleCountdownComplete = () => {
    setPromotionTimer(false);
  };

  const showPromoBar =
    componentProps?.textSimple ||
    dynamicText ||
    (flashTimeFromCms && promotionTimer);

  return (
    <div
      id={"promo-bar"}
      className={styles["promobar"]}
      data-visible={isClosed}
      data-testid="promo-div"
      style={{
        backgroundColor: headerRender && showPromoBar ? componentProps?.backgroundColor : "White",
        display: showPromoBar && headerRender ? "flex" : "none",
        height: "40px",
      }}
    >
      <div style={{ color: headerRender ? "Black" : "White" }} className={styles["title"]} data-testid="test-title">
        {flashTimeFromCms && promotionTimer ? (
          <div className={styles["text-with-timer"]}>
            <span
              className={
                styles[componentProps?.textWithFlashTimer ? "timer-text" : ""]
              }
            >
              {componentProps?.textWithFlashTimer}
            </span>
            <MiniPromotionTimer
              timeUTC={flashTimeFromCms}
              handleCountdownComplete={handleCountdownComplete}
            />
          </div>
        ) : (
          <>
            {componentProps?.textSimple}
            {/* <Link href={url || "/"} locale={router?.locale}>
              <a className={styles["link-text"]}>
                <span data-testid="link-text">{dynamicText}</span>
              </a>
            </Link> */}

            {!customerData || customerData?.entityId == 0 ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/sign-up");
                }}
              >
                <a className={styles["link-text"]}>
                  <span style={{ color: headerRender ? "Black" : "White" }} data-testid="link-text">{dynamicText}</span>
                </a>
              </a>
            ) : (
              <Link href={"/account"}>
                <a
                  onClick={() => {
                    router.push("/account");
                  }}
                >
                  <a className={styles["link-text"]}>
                    <span style={{ color: headerRender ? "Black" : "White" }} data-testid="link-text">{dynamicText}</span>
                  </a>
                </a>
              </Link>
            )}
          </>
        )}
      </div>
      {/* <Button
        className={styles["closeButton"]}
        role="button"
        type="button"
        onClick={() => {
          setIsClosed(true);
          typeof window !== "undefined" &&
            window.sessionStorage.setItem("promo-bar-visible", "true");
          setSearchWrapperPosition({
            promo: true,
            langSelector: false,
          });
        }}
      >
        <Cross width={"20px"} height={"20px"} />
      </Button> */}
    </div>
  );
};

export default PromoBar;
