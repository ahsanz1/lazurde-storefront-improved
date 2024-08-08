import React, { FC, useEffect, useState } from "react";
import { PageProps } from "lib/types/common";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import Header from "components/common/header";
import Footer from "components/common/footer";
import HeaderSEO from "components/common/head";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import { getPageProps } from "lib/utils/pageLoadProps";
import { useRouter } from "next/router";

const StoreLocations: FC<PageProps> = ({
  configuration,
  page,
  host,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

  return (
    <React.Fragment key={brConfig?.endpoint}>
      <BrPage
        configuration={{ ...brConfig, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"other"} />,
        }}
        page={brPage}
      >
        <HeaderSEO host={host} locale={locale}></HeaderSEO>
        {/* <SkipToContentButton> */}
        <Header></Header>

        <main id="content" tabIndex={-1}>
          <AnimationWrapper
            animationName={"slide-up"}
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
    </React.Fragment>
  );
};

export default StoreLocations;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
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
      path ?? "/miss-l/store-locations",
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

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const currentLocale = locale || "ar-sa";
//   let configuration = {};

//   const pageProps = getPageProps({ header: "" });
//   configuration = buildConfiguration("/miss-l/store-locations", currentLocale);
//   let page = null;
//   try {
//     page = await initialize({
//       ...configuration,
//       httpClient: axios,
//     });
//     page = page?.toJSON();
//   } catch (error) {}

//   return {
//     props: {
//       configuration,
//       page: page,
//       locale: currentLocale,
//       host: pageProps?.host || "",
//       referer: `https://www.lazurde.com/${locale}/miss-l/store-locations`,
//     },
//   };
// };
