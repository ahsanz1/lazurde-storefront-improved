import React, { FC } from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";

import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetStaticProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import HeaderSEO from "components/common/head";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import AuthForms from "components/common/auth-forms";
import { getPageProps } from "lib/utils/pageLoadProps";

const LazurdeHome: FC<any> = ({ configuration, page, currentLocale, host }) => {
  return (
    <BrPage
      configuration={{ ...configuration, httpClient: axios }}
      mapping={{
        ...brComponentMapping,
        Footer: () => <Footer pageType={"other"} />,
      }}
      page={page}
    >
      <HeaderSEO host={host} />

      <Header></Header>
      <main id="content" tabIndex={-1}>
        <AuthForms handleAuthModal={1} />
      </main>
      <BrComponent path="footer">
        <BrComponent path="container" />
      </BrComponent>
    </BrPage>
  );
};

export default LazurdeHome;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "ar-sa";
  let configuration = {};

  const pageProps = getPageProps({ header: "" });
  configuration = buildConfiguration("/sign-in", currentLocale);
  let page = null;
  try {
    page = await initialize({
      ...configuration,
      httpClient: axios,
    });
    page = page?.toJSON();
  } catch (error) {}

  return {
    props: {
      configuration,
      page: page,
      currentLocale: currentLocale,
      host: pageProps?.host || "",
      referer: `https://www.lazurde.com/${locale}`,
    },
  };
};
