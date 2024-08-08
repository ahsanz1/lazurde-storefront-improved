import Header from "components/common/header";
import Footer from "components/common/footer";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetStaticProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import HeaderSEO from "components/common/head";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import { seoForStaticPages } from "lib/utils/seoDataStaticPages";
import { useRouter } from "next/router";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import dynamic from "next/dynamic";

const DynamicTermsAndConditions = dynamic(
  () => import("components/common/terms-condition")
);

const LazurdePolicies: FC<any> = ({ configuration, page, host, locale }) => {
  const { warrentyTermCondition } = seoForStaticPages(locale);
  const lang = locale?.split("-")[0];

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
        <HeaderSEO
          host={host}
          staticSeoData={warrentyTermCondition?.[lang]}
          locale={locale}
        />
        <BloomreachOtherPixel pageTitle="Policies" pageType="other" />
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
            <DynamicTermsAndConditions
              locale={locale}
              isLazurdePolicies={true}
            />
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

export default LazurdePolicies;

// export const getServerSideProps: GetServerSideProps = async ({
//   req: request,
//   res: response,
//   resolvedUrl: path,
//   locale,
//   query,
// }) => {
//   const pageProps = getPageProps({ header: request?.headers });
//   const currentLocale = locale.split("-")[1] ? locale : "en-sa";
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
//       currentLocale: currentLocale,
//       host: pageProps?.host,
//       locale: locale,
//       url: path.split("?")[0] || null,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "ar-sa";
  let configuration = {};

  const pageProps = getPageProps({ header: "" });
  configuration = buildConfiguration("/lazurde-policies", currentLocale);
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
      locale: currentLocale,
      host: pageProps?.host || "",
      referer: `https://www.lazurde.com/${locale}/lazurde-policies`,
    },
  };
};
