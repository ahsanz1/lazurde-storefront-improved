import React, { FC, useEffect, useRef, useState } from "react";
import { LocaleType, ProductListingPageProps } from "lib/types/common";
import { GetServerSideProps } from "next";
import Header from "components/common/header";

import Footer from "components/common/footer";

import AnimationWrapper from "components/common/ui/animation-wrapper";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";

import ProductListing from "components/common/product-listing";
import HeaderSEO from "components/common/head";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachSearchPagePixel from "components/common/bloomreach-pixel/search-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import { generatePlpPageData } from "components/common/product-listing/functions";
import { plpList } from "lib/static-plps/plps";

const SearchPage: FC<ProductListingPageProps> = ({
  configuration,
  page,
  searchTerm,
  referer,
  host,
  productData,
  plpData = null,
}) => {
  const [scriptId, setScriptId] = useState(Math.random() * (1000000 - 1) + 1);
  const searchTermRef = useRef(searchTerm);
  const staticPlpData = JSON.parse(plpData);

  useEffect(() => {
    if (searchTermRef.current != searchTerm) {
      setScriptId(Math.random() * (1000000 - 1) + 1);
      searchTermRef.current = searchTerm;
    }
  }, [searchTerm]);
  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"search"} />,
        }}
        page={page}
      >
        <HeaderSEO host={host} />
        <Header showStickyHeader={false} headerClass={"plp-header"} />
        {/* <script
            async
            src="https://cdn.tangiblee.com/integration/3.1/managed/lazurde.com/revision_4/variation_original/tangiblee-bundle.min.js"
          ></script> */}
        {/* <script
          async
          src="https://cdn.tangiblee.com/integration/5.0/managed/lazurde.com/revision_1/variation_original/tangiblee-bundle.min.js"
        ></script> */}

        <main>
          <AnimationWrapper
            animationName={"slide-up"}
            animationWrapperDivStyle={{ overflow: "visible" }}
          >
            <ProductListing
              searchTerm={searchTerm?.replaceAll("-", " ")}
              referer={referer}
              seo={staticPlpData?.seo}
              productData={JSON.parse(productData)}
              host={host}
            />
          </AnimationWrapper>
        </main>
        {scriptId > 0 && (
          <BloomreachSearchPagePixel
            search_term={searchTerm}
            referer={referer}
            scriptId={scriptId}
          />
        )}
        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
      </BrPage>
    </>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
  resolvedUrl: path,
  locale,
  query,
}) => {
  const pageProps = getPageProps({ header: request?.headers });
  const currentLocale = locale.split("-")[1] ? locale : "en-sa";
  const { referer = "" } = request?.headers || {};
  let plpComponent = null;
  let page = null;
  let isFromCMS = false;
  let configuration = {};

  if (query?.endpoint) {
    configuration = {
      path,
      endpoint: query?.endpoint,
    };
  } else {
    configuration = buildConfiguration(path ?? "/miss-l/s", currentLocale);
  }

  page = await initialize({
    ...configuration,
    request,
    httpClient: axios,
  });

  return await generatePlpPageData({
    component: plpComponent,
    page,
    path,
    query,
    locale: currentLocale as LocaleType,
    configuration,
    brand: "missl",
    staticPlps: plpList,
    brUID: request?.cookies?.["_br_uid_2"] || null,
    pageProps: {
      ...pageProps,
      isFromCMS,
      isCollection: false,
    },
  });
};
