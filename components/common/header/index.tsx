import React, {
  useContext,
  useEffect,
  useRef,
} from "react";
import { BrandNameTypes } from "lib/types/common";
import styles from "./Header.module.scss";
import { AppContext } from "lib/context";
import { currentBrandName } from "lib/utils/constants";
import { useRouter } from "next/router";
import { useCart } from "lib/utils/cart";
import { useCustomer } from "lib/middleware-apis/customers";
import { BrComponent } from "@bloomreach/react-sdk";
import { exponeaHeaderScripts } from "./functions";
import { useClearData } from "lib/utils/common";
import ToastWrapper from "../ui/toast/ToastWrapper";
import Script from "next/script";
import { deleteParam } from "../product-listing/functions";

const Header = ({
  showStickyHeader = true,
  headerClass = "",
}): JSX.Element => {
  const {
    appState,
    instaMiniCartStyle,
    saveAppState,
    sideBarChild,
    exponeaCookie,
    setExponeaCookie,
  } = useContext(AppContext);
  const router = useRouter();
  const mainDiv = useRef();
  const {
    useGetCustomerByGraphQl,
    useGetAttributesByCustomerId,
    useGetStoreAttributes,
  } = useCustomer();
  const { useGetCart } = useCart();
  const routerRegion =
    router?.locale?.split("-")[1];
  const { clearData } = useClearData();

  const {
    data: customerData,
    status: customerDataStatus,
  } = useGetCustomerByGraphQl({
    enabled:
      appState?.region === routerRegion,
  });

  const { data: storeAttributes } =
    useGetStoreAttributes({
      enabled:
        customerDataStatus ===
          "success" &&
        customerData?.entityId > 0,
    });

  const {
    status: customerAttrDataStatus,
  } = useGetAttributesByCustomerId({
    enabled:
      customerDataStatus === "success",
  });
  useGetCart({
    enabled:
      customerAttrDataStatus ===
      "success",
  });

  useEffect(() => {
    if (!mainDiv.current) return null;
    const header: any = mainDiv.current;

    var prevScrollpos = window.scrollY;
    function windowScrollFunc(): any {
      const filterBar: any =
        typeof document !== "undefined"
          ? document.querySelector(
              "#filter-bar"
            )
          : null;
      if (
        document.documentElement.style
          .overflowY === "hidden"
      )
        return null;
      var currentScrollPos =
        window.scrollY - 4;
      if (
        filterBar &&
        filterBar?.style.top ===
          "-100px"
      ) {
        const headerHeight = header
          ? header?.getBoundingClientRect()
              ?.height
          : 300;
        header.style.top = `-${headerHeight}px`;
        prevScrollpos =
          currentScrollPos;
        return;
      }
      if (
        prevScrollpos > currentScrollPos
      ) {
        header.style.opacity = "1";
        header.style.pointerEvents =
          "initial";
        header.style.zIndex =
          sideBarChild?.drawerOpen
            ? 21
            : 20;
        prevScrollpos =
          currentScrollPos;
        if (
          header?.classList.contains(
            "plp-header-visible"
          )
        ) {
          const siteNavBar =
            document.querySelector(
              "#sitenav-bar" as any
            );
          const userNavbar =
            document.querySelector(
              "#user-navbar" as any
            );
          const siteNavHeight =
            siteNavBar
              ? siteNavBar?.getBoundingClientRect()
                  ?.height
              : 67;
          const userNavbarHeight =
            userNavbar
              ? userNavbar?.getBoundingClientRect()
                  ?.height
              : 0;
          header.style.top = "0px";
          if (filterBar) {
            filterBar.style.top = `${
              siteNavHeight +
              userNavbarHeight -
              1
            }px`;
          }
          if (currentScrollPos < 100) {
            header.classList.remove(
              "plp-header-visible"
            );
          }
        }

        return;
      }
      if (
        prevScrollpos <=
          currentScrollPos &&
        currentScrollPos > 500 &&
        header.style.overflowY !=
          "hidden"
      ) {
        if (!showStickyHeader) {
          const headerHeight = header
            ? header?.getBoundingClientRect()
                ?.height
            : 300;
          header.style.top = `-${headerHeight}px`;
          if (filterBar) {
            filterBar.style.top = `0px`;
          }
          prevScrollpos =
            currentScrollPos;
          return;
        }
        header.style.opacity =
          sideBarChild?.miniCart
            ? 1
            : sideBarChild?.drawerOpen
            ? 1
            : 0;
        header.style.pointerEvents =
          "none";
        prevScrollpos =
          currentScrollPos;
        return;
      }
    }
    window.removeEventListener(
      "scroll",
      windowScrollFunc
    );
    window.addEventListener(
      "scroll",
      windowScrollFunc
    );
    return () => {
      window.removeEventListener(
        "scroll",
        () => null
      );
    };
  }, [mainDiv.current]);

  useEffect(() => {
    if (!mainDiv.current) return null;
    const header: any = mainDiv.current;
    if (sideBarChild?.drawerOpen) {
      header.style.zIndex = 21;
      header.style.opacity = 1;
      header.style.pointerEvents =
        "initial";
    }
  }, [sideBarChild?.drawerOpen]);

  useEffect(() => {
    const urlBrand: BrandNameTypes =
      router?.pathname?.includes(
        "miss-l"
      )
        ? "miss-l"
        : "lazurde";
    const currentBrand =
      currentBrandName(
        urlBrand,
        router.locale.split("-")[0] ||
          appState?.lang
      );

    if (
      appState?.region !== routerRegion
    )
      clearData(true);

    saveAppState({
      ...appState,
      brand: currentBrand?.brand,
      brandEN: currentBrand?.brandEN,
      lang:
        router.locale.split("-")[0] ||
        appState?.lang,
      region:
        router.locale.split("-")[1] ||
        appState?.region,
      locale:
        router.locale ||
        appState?.currentLocale,
    });

    const updateAppState = (
      check: string
    ) => {
      const currentLocale =
        check.split("/")[1];
      const currentBrand =
        currentBrandName(
          urlBrand,
          currentLocale.split("-")[0] ||
            appState?.lang
        );
      saveAppState({
        ...appState,
        brand: currentBrand?.brand,
        brandEN: currentBrand?.brandEN,
        lang:
          currentLocale.split("-")[0] ||
          appState?.lang,
        region:
          currentLocale.split("-")[1] ||
          appState?.region,
        locale:
          currentLocale ||
          appState?.currentLocale,
      });
    };
    router.events.on(
      "routeChangeComplete",
      updateAppState
    );
    return () => {
      router.events.off(
        "routeChangeComplete",
        updateAppState
      );
    };
  }, []);

  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(
    oneYearFromNow.getFullYear() + 1
  );

  const cookieOptions = {
    expires: oneYearFromNow,
    domain: "lazurde.com",
    path: "/",
  };

  useEffect(() => {
    if (
      appState?.currentLocale !==
      router?.locale
    ) {
      deleteParam(router);
      router.push(
        {
          query: { ...router.query },
        },
        undefined,
        {
          locale: router?.locale,
          scroll: true,
        }
      );
    }
    const lang =
      router?.locale?.split("-")[0];
    document.documentElement.dir =
      lang === "en" ? "ltr" : "rtl";
    const cookieString = `locale=${lang};expires=${cookieOptions.expires.toUTCString()};domain=${
      cookieOptions.domain
    };path=${cookieOptions.path}`;

    document.cookie = cookieString;
  }, [router?.locale]);

  useEffect(() => {
    setTimeout(() => {
      (window as any)?.exponea?.start({
        cookies: {
          retrieve_callback: (
            cookie: string
          ) => {
            setExponeaCookie({
              ...exponeaCookie,
              [appState?.region]:
                cookie,
            });
          },
        },
      });
    }, 0);
  }, [appState?.region]);

  return (
    <>
      {routerRegion ? (
        <Script
          id={`exponea-id-${routerRegion}`}
        >
          {
            exponeaHeaderScripts[
              routerRegion || "sa"
            ]
          }
        </Script>
      ) : null}
      <header
        className={`${
          styles["header-container"]
        } ${
          instaMiniCartStyle
            ? styles[
                "insta-minicart-style"
              ]
            : ""
        } ${headerClass}`}
        id={"main-header"}
        ref={mainDiv}
        style={{ height: "256px" }}
      >
        <BrComponent path="header">
          <BrComponent path="container" />
        </BrComponent>
      </header>
      <ToastWrapper />
    </>
  );
};

export default Header;
