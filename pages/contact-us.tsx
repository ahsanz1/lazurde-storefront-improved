import React, { FC, useEffect, useState } from "react";
import { PageProps } from "lib/types/common";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import Header from "components/common/header";
import Footer from "components/common/footer";
import HeaderSEO from "components/common/head";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import { seoForStaticPages } from "lib/utils/seoDataStaticPages";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicHelpCategory = dynamic(
  () => import("components/common/help-category")
);

const ContactUs: FC<PageProps> = ({
  configuration,
  page,
  host,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { contactUs } = seoForStaticPages(locale);
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
          staticSeoData={contactUs?.[lang]}
          locale={locale}
        />
        <BloomreachOtherPixel pageTitle="Contact Us" pageType="other" />
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
            <DynamicHelpCategory locale={locale} />
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

export default ContactUs;

// export const getServerSideProps: GetServerSideProps = async ({
//   req: request,
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
//       currentLocale,
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
  configuration = buildConfiguration("/contact-us", currentLocale);
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
      referer: `https://www.lazurde.com/${locale}/contact-us`,
    },
  };
};
