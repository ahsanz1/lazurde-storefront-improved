import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./style.module.scss";
import { Bag, Heart, MenuIcon, Search } from "components/icons";
import Label from "components/common/ui/label";
import Link from "next/link";
// import MobileMenu from "./mobile-menu/mobile-menu";
import Image from "next/image";
import { MobileHeaderProps } from "lib/types/mobile-header";
// import SideBar from "components/common/ui/sidebar";
// import WishListSidebar from "components/common/minicart-wishlist-sidebars/wish-list";
// import MiniCart from "components/common/minicart-wishlist-sidebars/mini-cart";
// import AccountSidebar from "components/common/right-sidebars/account-sidebar";
import { AppContext } from "lib/context";
import useWindowSize from "lib/utils/useWindowSize";
import { getIconSize } from "lib/utils/common";
import { useQueryClient } from "@tanstack/react-query";
import { CartObject } from "lib/types/cart";
import { BrManageMenuButton } from "@bloomreach/react-sdk";
import { useRouter } from "next/router";
import { brandNames } from "lib/utils/constants";
import Spinner from "components/common/ui/spinner";
import dynamic from "next/dynamic";

const DynamicMobileMenu = dynamic(() => import("./mobile-menu/mobile-menu"), {
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

const MobileNavBar = ({
  headerId,
  brandSideBar,
  storeLocatorData,
  setOpenSearchDialog,
  siteLogoHeight = "100%",
  className,
  headerDiv,
  navMenu,
  brandImage,
  brandLink,
  showSideBar = true,
}: MobileHeaderProps): JSX.Element => {
  const router = useRouter();
  const [width] = useWindowSize();
  const {
    setOpenMiniCart,
    sideBarChild,
    openDrawer,
    appState,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useContext(AppContext);
  // const [menu, setMenu] = useState<Boolean>(false);
  const queryClient = useQueryClient();
  const cartData: CartObject = queryClient.getQueryData(["cartData"]);
  const timeOutRef: any = useRef();
  const [renderComponent, setRenderComponent] = useState(false);
  const [onClickLoading, setOnClickLoading] = useState(false);
  const [onClickLogoLoading, setOnClickLogoLoading] = useState(false);

  useEffect(() => {
    setRenderComponent(true);

    return () => {
      setRenderComponent(false);
    };
  }, []);

  useEffect(() => {
    if (sideBarChild.drawerOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else if (mobileMenuOpen) {
      setTimeout(() => {
        document.documentElement.style.overflowY = "hidden";
      }, 280);
    } else {
      setTimeout(() => {
        document.documentElement.style.overflowY = "auto";
      }, 280);
    }
  }, [sideBarChild?.drawerOpen, mobileMenuOpen]);

  useEffect(() => {
    if (sideBarChild?.miniCartTimeOut) {
      handleMiniCart();
      timeOutRef.current = setTimeout(() => {
        onSideBarClose();
        setOpenMiniCart(false);
      }, 3000);
    } else {
      timeOutRef.current && clearTimeout(timeOutRef.current);
    }
  }, [sideBarChild?.miniCartTimeOut]);

  const handleMiniCart = () => {
    openDrawer("miniCart", true);
  };

  const handleWishListCart = () => {
    openDrawer("wishlist", true);
  };

  const handleAccountSidebar = () => {
    openDrawer("account", true);
  };

  const onSideBarClose = () => {
    openDrawer();
  };

  const handleMenu = () => {
    // setMenu(!menu);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  router.events.on("routeChangeComplete", () => {
    setOnClickLoading(false);
    setOnClickLogoLoading(false);
  });

  const renderSiteLogo = () => {
    return (
      <div
        onClick={() => {
          setOnClickLogoLoading(true);
        }}
        className={`${styles["mobile-header__logo"]}
        }`}
        data-missl-logo={router.pathname.includes("/miss-l")}
      >
        <Link href={brandLink || "/"}>
          <a>
            {onClickLogoLoading ? (
              <Spinner width={20} height={20} stroke={4} />
            ) : (
              <>
                {brandImage?.getOriginal().getUrl() && (
                  <Image
                    src={brandImage?.getOriginal().getUrl() || "/"}
                    width={152}
                    height={siteLogoHeight || 31}
                    layout="fixed"
                    alt={brandImage?.getOriginal().getName()}
                  />
                )}
              </>
            )}
          </a>
        </Link>
      </div>
    );
  };

  const viewPortPercentage = (value: number) => {
    const _obj = {
      375: value || 0.04,
      400: value || 0.06,
    };
    return _obj;
  };

  return (
    renderComponent && (
      <>
        <div style={{ position: "relative" }}>
          <BrManageMenuButton menu={navMenu} />
        </div>
        <div
          id={"sitenav-bar"}
          className={` ${styles["mobile-header__wrapper"]} ${className}`}
        >
          <div className={styles["mobile-header__left"]}>
            <button onClick={handleMenu}>
              <MenuIcon
                width={Number(
                  getIconSize(
                    width,
                    16,
                    22,
                    viewPortPercentage(0.0534)
                  )?.toFixed()
                )}
                height={Number(
                  getIconSize(
                    width,
                    16,
                    22,
                    viewPortPercentage(0.0534)
                  )?.toFixed()
                )}
                color="#000000"
              />
            </button>
            <button onClick={() => setOpenSearchDialog(true)}>
              <Search
                width={getIconSize(
                  width,
                  17,
                  22,
                  viewPortPercentage(0.0534)
                )?.toFixed()}
                height={getIconSize(
                  width,
                  17,
                  22,
                  viewPortPercentage(0.0534)
                )?.toFixed()}
              />
            </button>
          </div>
          {renderSiteLogo()}
          <div className={styles["mobile-header__right"]}>
            <button onClick={() => handleWishListCart()}>
              <Heart
                width={getIconSize(
                  width,
                  20,
                  25,
                  viewPortPercentage(0.0534)
                )?.toFixed()}
                height={getIconSize(
                  width,
                  20,
                  25,
                  viewPortPercentage(0.0534)
                )?.toFixed()}
                fill="#000000"
                stroke="#000000"
              />
            </button>
            <button
              className={styles.minicart_btn}
              onClick={() => {
                // handleMiniCart()
                setOnClickLoading(true);
                router.push(
                  appState?.brandEN === brandNames?.missl
                    ? "/miss-l/cart"
                    : "/cart"
                );
              }}
            >
              {onClickLoading ? (
                <Spinner width={20} height={20} stroke={4} />
              ) : (
                <Bag
                  width={getIconSize(
                    width,
                    20,
                    25,
                    viewPortPercentage(0.0534)
                  )?.toFixed()}
                  height={getIconSize(
                    width,
                    20,
                    25,
                    viewPortPercentage(0.0534)
                  )?.toFixed()}
                  fill="#000000"
                  stroke="#000000"
                />
              )}

              {cartData?.totalCount > 0 ? (
                <div className={styles.rounded_counter}>
                  <Label>{cartData?.totalCount}</Label>
                </div>
              ) : null}
            </button>
          </div>
        </div>
        <DynamicMobileMenu
          active={mobileMenuOpen}
          closeMenu={closeMenu}
          siteLogo={renderSiteLogo}
          menuData={navMenu}
          headerId={headerId}
          brandSideBar={brandSideBar}
          handleAccountSidebar={handleAccountSidebar}
          storeLocatorData={storeLocatorData}
        />
        {/* <MobileMenu
          active={mobileMenuOpen}
          closeMenu={closeMenu}
          siteLogo={renderSiteLogo}
          menuData={navMenu}
          headerId={headerId}
          brandSideBar={brandSideBar}
          handleAccountSidebar={handleAccountSidebar}
          storeLocatorData={storeLocatorData}
        /> */}
        {showSideBar && (
          // <SideBar
          //   mobileMenuOpened={mobileMenuOpen}
          //   isopend={sideBarChild?.isRightSideOpen}
          //   onClose={onSideBarClose}
          //   closeMobileNavBar={closeMenu}
          // >
          //   {sideBarChild.wishlist ? (
          //     <WishListSidebar closeSideBar={() => openDrawer()} />
          //   ) : sideBarChild.miniCart ? (
          //     <MiniCart />
          //   ) : sideBarChild.account ? (
          //     <AccountSidebar closeSideBar={() => openDrawer()} />
          //   ) : null}
          // </SideBar>
          <DynamicSidebar
            mobileMenuOpened={mobileMenuOpen}
            isopend={sideBarChild?.isRightSideOpen}
            onClose={onSideBarClose}
            closeMobileNavBar={closeMenu}
          >
            {sideBarChild.wishlist ? (
              <DynamicWishlistSidebar closeSideBar={() => openDrawer()} />
            ) : // <WishListSidebar closeSideBar={() => openDrawer()} />
            sideBarChild.miniCart ? (
              <DynamicMiniCart />
            ) : // <MiniCart />
            sideBarChild.account ? (
              // <AccountSidebar closeSideBar={() => openDrawer()} />
              <DynamicAccountSidebar closeSideBar={() => openDrawer()} />
            ) : null}
          </DynamicSidebar>
        )}

        <div id="search-dropdown"></div>
      </>
    )
  );
};

export default MobileNavBar;
