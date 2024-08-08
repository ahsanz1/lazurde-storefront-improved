import React from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";
import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetServerSideProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import HeaderSEO from "components/common/head";
import AccountSuccess from "components/common/checkout/account-success";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";

const AccountSuccessPage = ({ configuration, page, host, url, locale }: any) => {
  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"other"} />,
        }}
        page={page}
      >
        <HeaderSEO host={host} url={url} locale={locale} />
        <BloomreachOtherPixel pageTitle="Thank You" pageType="other" />
        {/* <SkipToContentButton> */}
        <Header></Header>

        <main id="content" tabIndex={-1}>
          {/* <BrComponent path="main">
              <BrComponent path="container"> */}
          <AccountSuccess />
          {/* </BrComponent>
            </BrComponent> */}
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>
    </>
  );
};

export default AccountSuccessPage;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req: request,
  resolvedUrl: path,
}) => {
  const currentLocale = locale || "ar-sa";
  let configuration = {};

  const pageProps = getPageProps({ header: request?.headers });
  configuration = buildConfiguration("/account-success", currentLocale);
  const page = await initialize({
    ...configuration,
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
