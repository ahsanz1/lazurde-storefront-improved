import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
// const Header = dynamic(() => import("components/common/header"));
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { initialize } from "@bloomreach/spa-sdk";
import { GetStaticProps } from "next";
import { BrComponent, BrPage, BrPageContext } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import HeaderSEO from "components/common/head";
import { useRouter } from "next/router";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachPixel from "components/common/bloomreach-pixel";
import { getPageProps } from "lib/utils/pageLoadProps";
import Header from "components/common/header";
// import Footer from "components/common/footer";

// import { ATCPayload, ATCUpdatePayload, CartObject } from "lib/types/cart";
// import { AppContext } from "lib/context";

// import { useCart } from "lib/utils/cart";

// import { fetchProduct } from "lib/utils/product";
// import { BC_CHANNEL_ID } from "general-config";
// import { getCartByCustomer } from "lib/middleware-apis/cart";
// import { changeLocaleFormat, desktopScreenSize } from "lib/utils/common";

import { RegionType } from "lib/types/common";
import Script from "next/script";
import {
  filterByHref,
  filterByDocuments,
  filterByImageSets,
  removeRedundantSizesFromImageSets,
} from "lib/utils/br-page-model";
import {
  BR_HP_REDUNDANT_DOCUMENTS,
  BR_HP_REDUNDANT_HREFS,
  BR_HP_REDUNDANT_IMAGE_SETS,
  getBrandKey,
} from "lib/utils/constants";
import { fetchBrPage } from "lib/api/bloomreach-content";
import { initialize } from "@bloomreach/spa-sdk";
// import useWindowSize from "lib/utils/useWindowSize";
// import HomeSkeleton from "components/common/ui/home-skeleton";
const Footer = dynamic(() => import("components/common/footer"));

const LazurdeHome: FC<any> = ({
  configuration,
  page,
  currentLocale,
  host,
  referer,
}) => {
  const router = useRouter();
  const [brPage, setBrPage] = useState(page);
  const [brConfig, setBrConfig] = useState(configuration);
  const [prevLocale, setPrevLocale] = useState(router?.locale);

  // const queryClient = useQueryClient();
  // const { addOrCreateCartMutation, updateCartMutation, removeCartMutation } =
  //   useCart();
  // const customer =
  //   typeof window !== "undefined" &&
  //   JSON.parse(window.localStorage.getItem("customer"));

  useEffect(() => {
    if (!router?.query?.token && router?.locale !== prevLocale) {
      setBrConfig({ ...configuration });
      setBrPage({ ...page });
      setPrevLocale(router.locale);
      return;
    }
  }, [router?.locale]);

  useEffect(() => {
    if (!router?.query?.token) {
      return null;
    }
    const endpoint: string = router?.query?.endpoint as string;
    const lang = endpoint.includes("---en") ? "en" : "ar";
    (async () => {
      const { initialize } = await import("@bloomreach/spa-sdk");
      const newPage = await initialize({
        path: router?.asPath,
        endpoint: endpoint,
        httpClient: axios,
      });

      // let filteredBrPage: any = null;
      // try {
      //   filteredBrPage = removeRedundantSizesFromImageSets(
      //     filterByHref(
      //       filterByImageSets(
      //         filterByDocuments(newPage, BR_HP_REDUNDANT_DOCUMENTS),
      //         BR_HP_REDUNDANT_IMAGE_SETS
      //       ),
      //       BR_HP_REDUNDANT_HREFS
      //     )
      //   );
      // } catch (error) {
      //   console.error("Error filtering BR Page: ", error);
      // }

      setBrConfig({ path: router?.asPath, endpoint: endpoint });
      setBrPage(newPage);
      document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    })();
  }, [router?.query?.token]);

  const region = router?.locale?.split("-")[1] as RegionType;

  /**
   * NOTE: possible fix for layout shift on mobile HP, commenting for now as
   * no layout shift was observed on staging env
   */

  // const langSelectorDisplaySaved =
  //   (typeof window !== "undefined" &&
  //     JSON.parse(window.localStorage.getItem("lang-selector-visible"))) ||
  //   false;

  // const MainContent = () => {
  //   return (
  //     <main
  //       id="content"
  //       tabIndex={-1}
  //       style={{
  //         height: `calc(100% - ${!langSelectorDisplaySaved ? "256px" : 0})`,
  //       }}
  //     >
  //       <BrComponent path="main">
  //         <BrComponent path="container" />
  //       </BrComponent>
  //     </main>
  //   );
  // };

  return (
    <React.Fragment key={brConfig?.endpoint}>
      {/* <HomeSkeleton/> */}
      <BrPage
        configuration={{ ...brConfig, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"homepage"} />,
        }}
        page={brPage}
      >
        <HeaderSEO
          scriptPageType={"home"}
          host={host}
          locale={currentLocale}
          url={""}
        >
          <>
            <Script
              id="hotjar-script"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:2502015,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            />
            {region === "sa" ? (
              <Script
                id="bambuser-script"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                  __html: `
              (function(d, t, i, w) {
                  window.__bfwId = w;
                  if (d.getElementById(i) && window._bfwInit) return window._bfwInit();
                  if (d.getElementById(i)) return;
                  var s, ss = d.getElementsByTagName(t)[0];
                  s = d.createElement(t); s.id = i;
                  s.src = 'https://lcx-widgets.bambuser.com/embed.js';
                  ss.parentNode.insertBefore(s, ss);
                })(document, 'script', 'bambuser-liveshopping-widget', 'bfvFO15cg6ZfuI8KX54M');`,
                }}
              />
            ) : null}
          </>
        </HeaderSEO>
        <BrPageContext.Consumer>
          {(contextPage: any) => {
            const seoContent = contextPage?.getDocument()?.getData();
            return (
              <BloomreachPixel
                pageTitle={seoContent?.title}
                pageType={"homepage"}
                referer={referer}
              />
            );
          }}
        </BrPageContext.Consumer>

        <>
          <Header></Header>
          {/* <MainContent /> */}
          <main id="content" tabIndex={-1}>
            <BrComponent path="main">
              <BrComponent path="container" />
            </BrComponent>
          </main>
          <BrComponent path="footer">
            <BrComponent path="container" />
          </BrComponent>
        </>
      </BrPage>
    </React.Fragment>
  );
};

export default LazurdeHome;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { locale } = context;
  const currentLocale = locale || "ar-sa";
  // const { referer = "" } = req?.headers || {};
  let configuration = {};
  configuration = buildConfiguration("/", currentLocale);
  const pageProps: any = getPageProps({ header: "" });
  let page = null;
  try {
    page = await initialize({
      ...configuration,
      httpClient: axios,
    });
    page = page?.toJSON();
  } catch (error) {
    console.log("Error initializing page: ", "/", error);
  }

  // page = await fetchBrPage(locale, "/");

  // const newLocale =
  //   currentLocale === "default"
  //     ? "ar-eg"
  //     : currentLocale === "ar"
  //       ? "ar-sa"
  //       : "en-sa";

  // page = await fetchBrPage(
  //   newLocale,
  //   "/"
  // );

  let filteredBrPage: any = null;

  try {
    filteredBrPage = removeRedundantSizesFromImageSets(
      filterByHref(
        filterByImageSets(
          filterByDocuments(page, BR_HP_REDUNDANT_DOCUMENTS),
          BR_HP_REDUNDANT_IMAGE_SETS
        ),
        BR_HP_REDUNDANT_HREFS
      )
    );
  } catch (error) {
    console.error("Error filtering BR Page: ", error);
  }

  return {
    props: {
      configuration,
      page: filteredBrPage || page,
      currentLocale: currentLocale,
      host: pageProps?.host || "",
      referer: `https://www.lazurde.com/${locale}`,
    },
    revalidate: 300,
  };
};
