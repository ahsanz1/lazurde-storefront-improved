import React, { FC, useEffect, useState } from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { GetStaticProps } from "next";
import HeaderSEO from "components/common/head";
import { useRouter } from "next/router";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import Error500 from "components/common/error-500";

export default function Custom500({ configuration, page, host }: any) {
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
    (async () => {
      const newPage = await initialize({
        path: router?.asPath,
        endpoint: endpoint,
        httpClient: axios,
      });
      setBrConfig({ path: router?.asPath, endpoint: endpoint });
      setBrPage(newPage);
    })();
  }, [router?.query?.token]);
  const mapping: any = {
    ...brComponentMapping,
    Footer: () => <Footer pageType={"other"} />,
  };

  return (
    <React.Fragment key={brConfig?.endpoint}>
      <BrPage
        configuration={{ ...brConfig, httpClient: axios }}
        mapping={mapping}
        page={brPage}
      >
        <HeaderSEO host={host} />
        <BloomreachOtherPixel pageTitle="500" pageType="other" />
        {/* <SkipToContentButton> */}
        <Header></Header>

        <main id="content" tabIndex={-1}>
          {/* <BrComponent path="main">
            <BrComponent path="container" />
          </BrComponent> */}
          <Error500/>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "ar-sa";
  let configuration = {};

  const pageProps = getPageProps({ header: "" });
  configuration = buildConfiguration("/500", currentLocale);
  let page = null;
  try {
    page = await initialize({
      ...configuration,
      httpClient: axios,
    });
    page = page?.toJSON();
  } catch (error) {}

  return {
    props: { configuration, page: page, host: pageProps?.host },
    revalidate: 3,
  };
};
