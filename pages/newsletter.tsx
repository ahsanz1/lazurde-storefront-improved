import Header from "components/common/header";
import React, { FC } from "react";
import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetServerSideProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import HeaderSEO from "components/common/head";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import NewsletterSignup from "components/common/newsletter-signup";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";

const NewsletterPage: FC<any> = ({
  configuration,
  page,
  host,
  url,
  locale,
}) => {
  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={brComponentMapping}
        page={page}
      >
        <HeaderSEO host={host} url={url} locale={locale} />
        <BloomreachOtherPixel pageTitle="Newsletter" pageType="other" />
        {/* <SkipToContentButton> */}
        <Header></Header>

        <main id="content" tabIndex={-1}>
          <AnimationWrapper
            lazyLoadThreshold={0.1}
            animationName={"slide-up"}
            lazyLoad={true}
          >
            {/* <BrComponent path="main">
              <BrComponent path="container" />
            </BrComponent> */}
            <NewsletterSignup />
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

export default NewsletterPage;

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
    configuration = buildConfiguration(path ?? "/", currentLocale);
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
