import React, { FC, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/common/header"));
const Footer = dynamic(() => import("components/common/footer"));
import axios from "axios";
// import { initialize } from "@bloomreach/spa-sdk";
import { GetStaticProps } from "next";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { BrComponent, BrPage, BrPageContext } from "@bloomreach/react-sdk";
import HeaderSEO from "components/common/head";
import { useRouter } from "next/router";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachPixel from "components/common/bloomreach-pixel";
import { getPageProps } from "lib/utils/pageLoadProps";
import {
  filterByDocuments,
  filterByHref,
  filterByImageSets,
  removeRedundantSizesFromImageSets,
} from "lib/utils/br-page-model";
import {
  BR_HP_REDUNDANT_IMAGE_SETS,
  BR_MISS_L_HP_REDUNDANT_DOCUMENTS,
  BR_MISS_L_HP_REDUNDANT_HREFS,
} from "lib/utils/constants";
import { fetchBrPage } from "lib/api/bloomreach-content";
import { initialize } from "@bloomreach/spa-sdk";

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

  useEffect(() => {
    if (!router?.query?.token) {
      setBrConfig({ ...configuration });
      setBrPage({ ...page });
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
      setBrConfig({ path: router?.asPath, endpoint: endpoint });
      setBrPage(newPage);
      document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    })();
  }, [router?.query?.token]);

  // useEffect(() => {
  //   (async () => {
  //     // // if (!globalComponentsError?.hasError) return;
  //     const globalComponents =
  //       (await fetchGlobalComponentsByChannelAndLocale()) || pageData;
  //     const globalObj = getGlobalProps(globalComponents, appState?.brandEN);
  //     setPageData(globalObj);
  //   })();

  //   (async () => {
  //     // // if (!pageComponentsError?.hasError) return;
  //     const xmData =
  //       (await fetchAllLivePagesByChannelAndLocale(
  //         getLivePagesChannelId(appState?.brandEN, appState?.region),
  //         "/home"
  //       )) || [];
  //     xmData && xmData?.length > 0 && setCurrentPageDetail([...xmData]);
  //   })();
  // }, [appState?.region, appState?.lang]);

  return (
    <React.Fragment key={brConfig?.endpoint}>
      <BrPage
        configuration={{ ...brConfig, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"homepage"} />,
        }}
        page={brPage}
      >
        <HeaderSEO host={host} locale={currentLocale}>
          <>
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-00K2VB42E7"
            ></script> */}
            {/* <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-00K2VB42E7')`,
              }}
            ></script> */}
            {/* <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PKR36LZZ');`}</script> */}
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
        {/* <SkipToContentButton> */}
        <Header></Header>

        <main id="content" tabIndex={-1}>
          <BrComponent path="main">
            <BrComponent path="container" />
            <BrComponent path="instagram" />
          </BrComponent>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>
      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PKR36LZZ"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        ></iframe>
      </noscript> */}
    </React.Fragment>
  );
};

export default LazurdeHome;

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const currentLocale = locale || "ar-sa";
  // const { referer = "" } = req?.headers || {};
  let configuration = {};
  configuration = buildConfiguration("/miss-l", currentLocale);
  const pageProps = getPageProps({ header: "" });
  let page = null;
  try {
    page = await initialize({
      ...configuration,
      httpClient: axios,
    });
    page = page?.toJSON();
  } catch (error) {
    console.log("Error initializing page: ", "/miss-l", error);
  }
  
  // page = await fetchBrPage(currentLocale, "/miss-l");

  // const newLocale =
  //     currentLocale === "default"
  //       ? "ar-eg"
  //       : currentLocale === "ar"
  //       ? "ar-sa"
  //       : "en-sa";

  //   page = await fetchBrPage(
  //     newLocale,
  //     "/miss-l"
  //   );

  let filteredBrPage: any = null;
  try {
    filteredBrPage = removeRedundantSizesFromImageSets(
      filterByHref(
        filterByImageSets(
          filterByDocuments(page, BR_MISS_L_HP_REDUNDANT_DOCUMENTS),
          BR_HP_REDUNDANT_IMAGE_SETS
        ),
        BR_MISS_L_HP_REDUNDANT_HREFS
      )
    );
  } catch (error) {
    console.error("Error filtering BR Page: ", "/miss-l", error);
  }

  return {
    props: {
      configuration,
      page: filteredBrPage || page,
      currentLocale: currentLocale,
      host: pageProps?.host || "",
      referer: `https://www.lazurde.com/${locale}/miss-l`,
    },
    revalidate: 300,
  };
};

// export const getServerSideProps: GetServerSideProps = async ({
//   req: request,
//   res: response,
//   resolvedUrl: path,
//   locale,
//   query,
// }) => {
//   const pageProps = getPageProps({ header: request?.headers });
//   const currentLocale = locale.split("-")[1] ? locale : "en-sa";
//   const { referer = "" } = request?.headers || {};
//   let configuration = {};
//   if (query?.endpoint) {
//     configuration = {
//       path,
//       endpoint: query?.endpoint,
//     };
//   } else {
//     configuration = buildConfiguration(path ?? "/", currentLocale);
//   }
//   const page = await initialize({
//     ...configuration,
//     request,
//     httpClient: axios,
//   });

//   return {
//     props: {
//       configuration,
//       page: page.toJSON(),
//       referer,
//       host: pageProps?.host,
//       url: path.split("?")[0] || null,
//     },
//   };
// };
