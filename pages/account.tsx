import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/common/header"));
const Footer = dynamic(() => import("components/common/footer"));
import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetStaticProps } from "next";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
const AccountInformation = dynamic(
  () => import("components/common/account-information")
);
import { accountInformationData } from "lib/mock-data/data";
import HeaderSEO from "components/common/head";
import { useRouter } from "next/router";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";

const AccountPage: FC<any> = ({ configuration, page, host, locale }) => {
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

  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));
  if (!customer || customer?.entityId < 1) {
    typeof window !== "undefined" && router?.push("/");
    return null;
  }

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
      <HeaderSEO host={host} locale={locale} />
      <BloomreachOtherPixel pageTitle="Account" pageType="other" />
      {/* <SkipToContentButton> */}
      <Header></Header>

      <main id="content" tabIndex={-1}>
        <BrComponent path="main">
          <BrComponent path="container">
            <AccountInformation
              title={accountInformationData?.title}
              titleImage={accountInformationData?.titleImage}
              barCode={accountInformationData?.barCode}
              firstName={accountInformationData?.firstName}
              lastName={accountInformationData?.lastName}
              reviewText={accountInformationData?.reviewText}
              reviewImage={accountInformationData?.reviewImage}
              details={accountInformationData?.details}
            />
          </BrComponent>
        </BrComponent>
      </main>

      <BrComponent path="footer">
        <BrComponent path="container" />
      </BrComponent>
      {/* </SkipToContentButton> */}
    </BrPage>
    </React.Fragment>
  );
};

export default AccountPage;

// export const getServerSideProps: GetServerSideProps = async ({
//   locale,
//   req: request,
//   resolvedUrl: path,
// }) => {
//   const currentLocale = locale.split("-")[1] ? locale : "en-sa";
//   let configuration = {};

//   const pageProps = getPageProps({ header: request?.headers });
//   configuration = buildConfiguration("/account", currentLocale);
//   const page = await initialize({
//     ...configuration,
//     httpClient: axios,
//   });

//   return {
//     props: {
//       configuration,
//       page: page.toJSON(),
//       host: pageProps?.host,
//       locale: locale,
//       url: path.split("?")[0] || null,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const currentLocale = locale || "ar-sa";
  // const { referer = "" } = req?.headers || {};
  let configuration = {};
  configuration = buildConfiguration("/account", currentLocale);
  const pageProps = getPageProps({ header: "" });
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
      referer: `https://www.lazurde.com/${locale}/account`,
    },
  };
};
