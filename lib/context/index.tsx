import { AppStateType, LocaleType, navSideBar } from "lib/types/common";
import { getAppStateFromLocalStorage } from "lib/utils/common";
import { DEFAULT_APP_STATE } from "lib/utils/constants";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

export const AppContext = React.createContext<any>({});

const ContextProvider: FC = ({ children }) => {
  let defaultState: AppStateType = null;
  if (getAppStateFromLocalStorage()) {
    defaultState = getAppStateFromLocalStorage();
  } else {
    defaultState = DEFAULT_APP_STATE;
  }
  const [defaultValue, setDefaultValue] = useState({
    defaultMin: 0,
    defaultMax: 0,
  });

  const [appState, setAppState] = useState<AppStateType>(defaultState);
  const [cartId, setCartId] = useState(
    (typeof window !== "undefined" && window.localStorage.getItem("cartId")) ||
      null
  );
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [toastList, setToastList] = useState([]);
  const toast = (toastText: string) => {
    setToastList((prev) => [...prev, toastText]);
  };

  const [isSelfApiCalled, setIsSelfApiCalled] = useState(false);
  const [exponeaCookie, setExponeaCookie] = useState("");
  const [onHeaderLoad, setHeaderLoad] = useState(false);
  const router = useRouter();

  const saveAppState = ({
    lang,
    region,
    locale,
    brand,
    brandEN,
    locationNum,
  }: AppStateType) => {
    const currentLocale: LocaleType = locale || (router?.locale as LocaleType);
    window.localStorage.setItem(
      "app-state",
      JSON.stringify({
        lang,
        region,
        currentLocale,
        brand,
        brandEN,
        locationNum,
      })
    );
    // document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    document.cookie = `user_locale=${currentLocale}; path=/`;
    setAppState({
      lang,
      region,
      currentLocale,
      brand,
      brandEN,
      locationNum,
    });
  };

  const [isOldWebsiteUser, setIsOldWebsiteUser] = useState(false);
  const [priceListId, setPriceListId] = useState("100000");
  const [allWishListProducts, setAllWishListProducts] = useState(
    (typeof window !== "undefined" &&
      window?.localStorage?.getItem("wish_list_data") !== "undefined" &&
      JSON.parse(window.localStorage.getItem("wish_list_data"))?.items) ||
      []
  );
  const [openMiniCart, setOpenMiniCart] = useState(false);
  const [cartItemCounter, setCartItemCounter] = useState(
    (typeof window !== "undefined" &&
      window?.sessionStorage?.getItem("cartItem_counter")) ||
      0
  );
  const [instaMiniCartStyle, setInstaMiniCartStyle] = useState(false);
  const [instaTooltipHover, setInstaTooltipHover] = useState({
    index: 0,
    hover: false,
  });
  const [instaWishlistStyle, setInstaWishlistStyle] = useState(false);
  const [listTypeIdWishList, setListTypeIdWishList] = useState();
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [cartData, setCartData] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(window?.sessionStorage?.getItem("cartData"))) ||
      null
  );
  const [searchWrapperPosition, setSearchWrapperPosition] = useState({
    promo: false,
    langSelector: false,
  });
  const [savedRegion, setSavedRegion] = useState("");
  const [handleAuthModal, setHandleAuthModal] = useState({
    isCheckoutGuestUser: false,
    isModalopen: false,
    isSignInOpen: true,
    isSignUpOpen: false,
    isResetPasswordOpen: false,
    isUpdatePassModalOpen: false,
  });
  const [sideBarChild, setSideBarChild] = useState<navSideBar>({
    brandSideBar: false,
    account: false,
    wishlist: false,
    miniCart: false,
    miniCartTimeOut: false,
    language: false,
    isRightSideOpen: false,
    searchDrawer: false,
    drawerOpen: false,
  });

  const openDrawer = (drawerName?: string, value: boolean = false) => {
    setSideBarChild({
      brandSideBar: drawerName === "brandSideBar" ? value : false,
      account: drawerName === "account" ? value : false,
      wishlist: drawerName === "wishlist" ? value : false,
      miniCart:
        drawerName === "miniCart" || drawerName === "miniCartTimeOut"
          ? value
          : false,
      miniCartTimeOut: drawerName === "miniCartTimeOut" ? value : false,
      language: drawerName === "language" ? value : false,
      isRightSideOpen:
        drawerName !== "brandSideBar" && drawerName !== "search"
          ? value
          : false,
      searchDrawer: drawerName === "search" ? value : false,
      drawerOpen: value,
    });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        appState,
        saveAppState,
        priceListId,
        setPriceListId,
        allWishListProducts,
        setAllWishListProducts,
        searchWrapperPosition,
        setSearchWrapperPosition,
        openMiniCart,
        setOpenMiniCart,
        cartItemCounter,
        setCartItemCounter,
        cartId,
        setCartId,
        instaMiniCartStyle,
        setInstaMiniCartStyle,
        instaTooltipHover,
        setInstaTooltipHover,
        instaWishlistStyle,
        setInstaWishlistStyle,
        listTypeIdWishList,
        setListTypeIdWishList,
        mapModalOpen,
        setMapModalOpen,
        cartData,
        setCartData,
        savedRegion,
        setSavedRegion,
        promoDiscount,
        setPromoDiscount,
        isSelfApiCalled,
        setIsSelfApiCalled,
        handleAuthModal,
        setHandleAuthModal,
        sideBarChild,
        setSideBarChild,
        openDrawer,
        toast,
        toastList,
        setToastList,
        isOldWebsiteUser,
        setIsOldWebsiteUser,
        mobileMenuOpen,
        setMobileMenuOpen,
        exponeaCookie,
        setExponeaCookie,
        onHeaderLoad,
        setHeaderLoad,
        defaultValue,
        setDefaultValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
