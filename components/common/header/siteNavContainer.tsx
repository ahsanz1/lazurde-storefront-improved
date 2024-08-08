import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const SiteNavBar = dynamic(() => import("./site-navbar"));
import { desktopScreenSize, getCurrentBrandId } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
// import SearchDialog from "../search-dialog";
import { BrComponentContext, BrPageContext } from "@bloomreach/react-sdk";
import { Menu as BrMenu, ImageSet, isMenu } from "@bloomreach/spa-sdk";
import LangSelector from "./navbar-lang-selector";
const MobileNavBar = dynamic(() => import("./mobile-navbar"));

import { AppContext } from "lib/context";

const DynamicSearchDialog = dynamic(() => import("../search-dialog"), {
  ssr: false,
});

const SiteNavContainer = () => {
  const [width] = useWindowSize();
  const { appState, openDrawer, sideBarChild } = useContext(AppContext);
  const [openSearchDailog, setOpenSearchDialog] = useState(false);
  const component = React.useContext(BrComponentContext);
  const page = React.useContext(BrPageContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  const {
    menu: menuRef,
    brandLink: brandLinkRef,
    brandImage: brandImageRef,
    popularSearchTerms: popularSearchTermsRef,
  } = component?.getModels();
  const menu = menuRef && page?.getContent<BrMenu>(menuRef);
  const brandImage = brandImageRef && page?.getContent<ImageSet>(brandImageRef);
  const brandLinkObj = brandLinkRef && page?.getContent(brandLinkRef);
  const brandLink = brandLinkObj && brandLinkObj.getUrl();
  const popularSearchTerms =
    popularSearchTermsRef &&
    page?.getContent(popularSearchTermsRef)?.getData()?.popularSearchTerms;

  useEffect(() => {
    openDrawer("search", openSearchDailog);
    if (!openSearchDailog) {
      document.documentElement.style.overflowY = "auto";
    }
  }, [openSearchDailog]);

  useEffect(() => {
    if (!sideBarChild?.searchDrawer) {
      setOpenSearchDialog(false);
    }
  }, [sideBarChild?.searchDrawer]);

  useEffect(() => {
    component && setHasLoaded(true);
  }, [component]);

  if (!isMenu(menu) || !hasLoaded) {
    // return (
    //   <>
    //     <PpdLoader></PpdLoader>
    //   </>
    // );
    return null;
  }

  // if(!) return null;

  return (
    <>
      <LangSelector />
      {width < desktopScreenSize ? (
        <MobileNavBar
          navMenu={menu}
          brandImage={brandImage}
          brandLink={brandLink}
          setOpenSearchDialog={setOpenSearchDialog}
          headerId={getCurrentBrandId(appState?.brandEN)}
        />
      ) : (
        <SiteNavBar
          menu={menu}
          brandImage={brandImage}
          brandLink={brandLink}
          setOpenSearchDialog={setOpenSearchDialog}
        />
      )}

      {/* <SearchDialog
        siteLogo={brandImage}
        siteLogoUrl={brandLink}
        setOpenSearchDialog={setOpenSearchDialog}
        openSearchDialog={openSearchDailog}
        popularSearchTerms={popularSearchTerms}
        showClone={false}
      /> */}
      <DynamicSearchDialog
        siteLogo={brandImage}
        siteLogoUrl={brandLink}
        setOpenSearchDialog={setOpenSearchDialog}
        openSearchDialog={openSearchDailog}
        popularSearchTerms={popularSearchTerms}
        showClone={false}
      />
    </>
  );
};

export default SiteNavContainer;
