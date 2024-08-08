import React, { FC, useState, useEffect, useContext, useRef } from "react";
import styles from "./user-navbar.module.scss";
import {
  Bag,
  Heart,
  MapPin,
  Divider,
  Globe,
  User,
  LazurdeLogo,
  MisslLogo,
} from "components/icons";
// import BrandSidebar from "./brand-sidebar";
import {
  BrandSidebarProps,
  BrandType,
  StoreLocatorXMProps,
} from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import { desktopScreenSize } from "lib/utils/common";
// import SideBar from "components/common/ui/sidebar";
// import AccountSidebar from "components/common/right-sidebars/account-sidebar";
// import WishListSidebar from "components/common/minicart-wishlist-sidebars/wish-list";
// import MiniCart from "components/common/minicart-wishlist-sidebars/mini-cart";
// import LanguageSideBar from "components/common/right-sidebars/language-sidebar";
import Label from "components/common/ui/label";
import { useCustomer } from "lib/middleware-apis/customers";
import { useCart } from "lib/utils/cart";
import { brandNames, getBrandKey } from "lib/utils/constants";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Spinner from "components/common/ui/spinner";
import dynamic from "next/dynamic";

const DynamicBrandSidebar = dynamic(() => import("./brand-sidebar"), {
  ssr: false,
});
const DynamicSidebar = dynamic(() => import("components/common/ui/sidebar"), {
  ssr: false,
});
const DynamicAccountSidebar = dynamic(
  () => import("components/common/right-sidebars/account-sidebar"),
  { ssr: false }
);
const DynamicWishlistSidebar = dynamic(
  () => import("components/common/minicart-wishlist-sidebars/wish-list"),
  { ssr: false }
);
const DynamicMiniCart = dynamic(
  () => import("components/common/minicart-wishlist-sidebars/mini-cart"),
  { ssr: false }
);
const DynamicLanguageSidebar = dynamic(
  () => import("components/common/right-sidebars/language-sidebar"),
  { ssr: false }
);

const UserNavBar: FC<{
  id?: string;
  brandSideBar?: BrandSidebarProps | {};
  storeLocatorData?: StoreLocatorXMProps;
}> = ({ id = "user-navbar", brandSideBar }): JSX.Element => {
  const {
    appState,
    instaMiniCartStyle,
    sideBarChild,
    openDrawer,
    setOpenMiniCart,
    openMiniCart,
    onHeaderLoad,
    setHeaderLoad,
  } = useContext(AppContext);
  const [width] = useWindowSize();
  const [miniCartFromBbagBtn, setMiniCartFromBbagBtn] = useState(false);
  const timeOutRef: any = useRef();
  const { useCustomerByEmail } = useCustomer();
  const { useGetCart } = useCart();
  const { data: cartData } = useGetCart({ enabled: false });
  const { data: customerData } = useCustomerByEmail();
  const isLoginUser = customerData?.entityId > 0 ? true : false;
  const router = useRouter();
  const { t } = useTranslation("common");
  const [onClickLoading, setOnClickLoading] = useState(false);
  const misslClass = appState?.lang === "en" ? "missl" : "misslAr";
  const lazurdeClass = appState?.lang === "en" ? "lazurde" : "lazurdeAr";
  const [activeTab, setActiveTab] = useState(
    getBrandKey(appState?.brandEN) === "lazurde" ? lazurdeClass : misslClass
  );
  const timerRef = useRef(null);
  const lazurde: any =
    typeof document !== "undefined" && document.querySelector("#lazurde");
  const missl: any =
    typeof document !== "undefined" && document.querySelector("#missl");

  useEffect(() => {
    setActiveTab(
      getBrandKey(appState?.brandEN) === "lazurde" ? lazurdeClass : misslClass
    );
  }, [router?.locale]);

  useEffect(() => {
    if (!lazurde && !missl) return null;
    lazurde?.addEventListener("animationend", () => {
      setHeaderLoad(true);
    });
  }, [lazurde]);

  useEffect(() => {
    let timeoutRef: any = "";
    if (sideBarChild?.isRightSideOpen || sideBarChild?.brandSideBar) {
      timeoutRef && clearTimeout(timeoutRef);
      document.documentElement.style.overflowY = "hidden";
    } else {
      timeoutRef && clearTimeout(timeoutRef);
      timeoutRef = setTimeout(() => {
        document.documentElement.style.overflowY = "auto";
      }, 400);
    }
  }, [sideBarChild?.isRightSideOpen, sideBarChild?.brandSideBar]);

  useEffect(() => {
    if (openMiniCart) {
      setTimeout(() => {
        setOpenMiniCart(false);
        openDrawer();
        setMiniCartFromBbagBtn(false);
      }, 3000);
    } else {
      timeOutRef.current && clearTimeout(timeOutRef.current);
    }
  }, [openMiniCart]);

  const timeout = useRef(null);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (activeTab === misslClass && !router.pathname.includes("/miss-l"))
        router.push("/miss-l");
      if (activeTab === lazurdeClass && router.pathname.includes("/miss-l"))
        router.push("/");
    }, 500);
  }, [activeTab]);

  router.events.on("routeChangeComplete", () => {
    setOnClickLoading(false);
  });

  return (
    <div
      id={id || "user-navbar"}
      className={styles["user-navbar"]}
      data-testid="product-card"
    >
      <div className={styles["left_div"]}>
        <div
          id={"wrapper"}
          className={styles["wrapper_brands"]}
          data-active={activeTab}
        >
          <div
            id={"lazurde"}
            className={`${styles["brand-tab"]} ${styles["lazurde"]} ${
              onHeaderLoad ? "" : `${styles["fade-in"]}`
            }`}
            data-active={activeTab === "lazurde" || activeTab === "lazurdeAr"}
            onClick={() => {
              if (activeTab === lazurdeClass) return;
              const wrapper: any = document.querySelector("#wrapper");
              wrapper?.classList.remove(styles[misslClass]);
              wrapper?.classList.add(styles[lazurdeClass]);
              setActiveTab(lazurdeClass);
            }}
          >
            <LazurdeLogo width={103} height={40} fill={"white"}></LazurdeLogo>
          </div>
          <div
            id={"missl"}
            className={`${styles["brand-tab"]} ${styles["missl"]} ${
              onHeaderLoad ? "" : `${styles["fade-in"]}`
            }`}
            data-active={activeTab === "missl" || activeTab === "misslAr"}
            onClick={() => {
              if (activeTab === misslClass) return;
              const wrapper: any = document.querySelector("#wrapper");
              wrapper?.classList.remove(styles[lazurdeClass]);
              wrapper?.classList.add(styles[misslClass]);
              setActiveTab(misslClass);
            }}
          >
            <MisslLogo width={103} height={40} fill={"white"}></MisslLogo>
          </div>
        </div>
      </div>
      <div className={styles["right_div"]}>
        {appState?.region === "ae" ? null : (
          <div
            className={styles["link"]}
            onClick={() => {
              router.push(
                appState?.brandEN === brandNames?.missl
                  ? "/miss-l/store-locations"
                  : "/store-locations"
              );
            }}
          >
            <MapPin />
          </div>
        )}

        <div
          className={styles["link"]}
          onClick={() => openDrawer("language", true)}
        >
          <Globe />
        </div>

        <div
          className={styles["link"]}
          onClick={() => openDrawer("account", true)}
        >
          <User />
        </div>

        {isLoginUser && width > desktopScreenSize ? (
          <div className={styles["link"]}>
            <Label className={styles.name}>
              {`  ${t("Hi")}${" "}${customerData?.firstName}`}
            </Label>
          </div>
        ) : null}

        <div
          className={styles["link"]}
          onClick={() => openDrawer("wishlist", true)}
        >
          <Heart />
        </div>

        <div className={styles["divider"]}>
          <Divider />
        </div>

        <div
          className={`${styles["link"]} ${styles.minicart_link}`}
          onPointerEnter={() => {
            timerRef.current = setTimeout(() => {
              openDrawer("miniCart", true);
              setMiniCartFromBbagBtn(true);
            }, 500);
          }}
          onClick={(e) => {
            setOnClickLoading(true);
            e.preventDefault();
            router.push(
              appState?.brandEN === brandNames?.missl ? "/miss-l/cart" : "/cart"
            );
          }}
          onPointerLeave={() => clearTimeout(timerRef.current)}
        >
          {onClickLoading ? <Spinner color="White" /> : <Bag />}
          {cartData?.totalCount > 0 ? (
            <div className={styles.rounded_counter}>
              <Label>{cartData?.totalCount}</Label>
            </div>
          ) : null}
        </div>
      </div>
      {width > desktopScreenSize && (
        <div
          role={"overlay"}
          className={styles["overlay"]}
          data-opened={
            sideBarChild?.brandSideBar || sideBarChild?.isRightSideOpen
          }
          onClick={() => {
            openDrawer();
            setMiniCartFromBbagBtn(false);
          }}
        ></div>
      )}
      {/* <BrandSidebar
        {...brandSideBar}
        isOpened={sideBarChild?.brandSideBar}
        setIsOpened={(value: boolean) => openDrawer()}
      /> */}
      <DynamicBrandSidebar
        {...brandSideBar}
        isOpened={sideBarChild?.brandSideBar}
        setIsOpened={(value: boolean) => openDrawer()}
      />

      <div
        className={styles["rightside-drawer"]}
        data-opened={sideBarChild?.isRightSideOpen}
        onClick={() => openDrawer()}
      >
        <DynamicSidebar
          isopend={sideBarChild?.isRightSideOpen}
          onClick={(event: any) => {
            event.stopPropagation();
          }}
          sidebarHeight={"100%"}
        >
          {sideBarChild.account ? (
            <DynamicAccountSidebar
              closeSideBar={() => {
                openDrawer();
              }}
            />
          ) : sideBarChild.wishlist ? (
            <DynamicWishlistSidebar closeSideBar={() => openDrawer()} />
          ) : sideBarChild.language ? (
            <DynamicLanguageSidebar
              closeSideBar={() => openDrawer("language", false)}
            />
          ) : null}
        </DynamicSidebar>
      </div>
      <div
        className={`${styles["rightside-drawer"]} ${
          sideBarChild.miniCart ? styles.minicart_drawer : ""
        } ${instaMiniCartStyle ? styles["top-zero"] : ""} ${
          !miniCartFromBbagBtn && sideBarChild.miniCart
            ? styles.open_minicart
            : ""
        }`}
        data-opened={sideBarChild?.miniCart}
        onClick={() => {
          openDrawer("miniCart", !sideBarChild?.miniCart);
          setMiniCartFromBbagBtn(false);
        }}
        // onPointerEnter={() => {
        //   openDrawer("miniCart", true);
        // }}
        // onPointerLeave={() => openDrawer()
      >
        <DynamicSidebar
          isopend={sideBarChild.miniCart}
          onClick={(event: any) => {
            event.stopPropagation();
          }}
          sidebarHeight={"100%"}
          onPointerEnter={() => () => {
            openDrawer("miniCart", true);
          }}
        >
          <DynamicMiniCart />
        </DynamicSidebar>
      </div>
      <div
        id="search-dropdown"
        style={{
          position: "absolute",
          top: "100%",
          zIndex: 2,
          bottom: "100%",
          left: 0,
          right: 0,
        }}
      ></div>
    </div>
  );
};

export default UserNavBar;
