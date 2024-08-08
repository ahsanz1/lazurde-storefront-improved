import React, { FC, useContext, useState, useEffect } from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";
import { PageProps, XMComponent } from "lib/types/common";

import Head from "next/head";
import AppContentWrapper from "../components/common/app-content-wrapper";
import { AppContext } from "lib/context";
import InstagramPageDetail from "components/common/instagram-flow/instagram-page-detail";
import { brandNames, getGlobalProps } from "lib/utils/constants";
import { getCurrentBrandId, getLocales } from "lib/utils/common";
import InstaTokenFlow from "components/common/instagram-flow/insta-generatetoken-flow";
import { LAZURDE_KSA_CHANNEL_ID } from "general-config";

const LazurdeHome: FC<PageProps> = ({
  headerProps,
  headerArray,
  brandSidebarProps,
  footerProps,
  pageComponents,
  globalObj,
  storeLocatorProps,
  menuData = [],
}) => {
  const authToken =
    typeof window !== "undefined" &&
    window.localStorage.getItem("instagram_access_token");
  const { appState } = useContext(AppContext);
  const [pageData, setPageData] = useState<any>(globalObj);

  // useEffect(() => {
  //   (async () => {
  //     const globalComponents =
  //       (await fetchGlobalComponentsByChannelAndLocale());
  //     const globalObj = getGlobalProps(globalComponents, appState?.brandEN);
  //     setPageData(globalObj);
  //   })();
  // }, [appState?.lang]);

  return (
    <>
      <Head>
        <title>
          L&apos;azurde | Luxury Jewelry, Gifts &amp; Accessories |
          L&apos;AZURDE
        </title>
      </Head>
      <Header
        {...pageData?.headerProps}
        brandSidebarProps={pageData?.brandSidebarProps}
        storeLocatorProps={pageData?.storeLocatorProps}
        defaultMenuData={menuData}
      ></Header>
      <AppContentWrapper>
        <div className={"component-container"}>
          <InstaTokenFlow />
        </div>
      </AppContentWrapper>
      <Footer {...pageData?.footerProps}></Footer>
    </>
  );
};

export default LazurdeHome;

// export async function getStaticProps(context: any) {
//   const currentLocale = getLocales(context.locale.split("-")[0]);
//   const pageData = await processPageData({
//     locale: currentLocale,
//     brand: brandNames.lazurde,
//     channelId: LAZURDE_KSA_CHANNEL_ID,
//   });

//   return {
//     props: pageData,
//     revalidate: 5,
//   };
// }
