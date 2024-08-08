import Footer from "components/common/footer";
import Header from "components/common/header";
import React, { FC } from "react";
import axios from "axios";
import { Configuration, Page, initialize } from "@bloomreach/spa-sdk";
import { GetServerSideProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";

import { PageProps } from "lib/types/common";

import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import HeaderSEO from "components/common/head";
import { getPageProps } from "lib/utils/pageLoadProps";

interface ProductListingPageProps extends PageProps {
  configuration: Configuration;
  page: Page;
  locale: string;
  parentCategory: string;
  url: string;
  path: string;
  currentPage: number;
  host: string;
}

const PlpCollectionPage: FC<ProductListingPageProps> = ({
  configuration,
  page,
  locale,
  parentCategory,
  url,
  path,
  currentPage,
  host,
}) => {
  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"category"} />,
        }}
        page={page}
      >
        <HeaderSEO host={host} url={url} locale={locale} />
        {/* <SkipToContentButton> */}
        <Header showStickyHeader={false} headerClass={"plp-header"} />

        <main id="content" tabIndex={-1} className={"plp-wrapper"} style={{minHeight: "500px"}}>
          <AnimationWrapper
            lazyLoadThreshold={0.1}
            animationName={"slide-up"}
            lazyLoad={true}
            animationWrapperDivStyle={{ overflow: "visible" }}
          >
            <BrComponent path="main">
              <BrComponent path="container" />
            </BrComponent>
          </AnimationWrapper>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>
    </>
  );
};

export default PlpCollectionPage;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
  resolvedUrl: path,
  locale,
  query,
}) => {
  const pageProps = getPageProps({ header: request?.headers });
  const currentLocale = locale.split("-")[1] ? locale : "en-sa";
  let configuration = {};
  if (query?.endpoint) {
    configuration = {
      path,
      endpoint: query?.endpoint,
    };
  } else {
    configuration = buildConfiguration(
      path ?? "/collection/index",
      currentLocale
    );
  }
  const page = await initialize({
    ...configuration,
    request,
    httpClient: axios,
  });

  return {
    props: {
      configuration,
      page: page.toJSON(),
      host: pageProps?.host,
      locale: locale,
      url: path.split("?")[0] || null,
    },
  };
};
