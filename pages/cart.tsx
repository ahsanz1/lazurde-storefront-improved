import React, { FC, useEffect, useState } from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { Configuration, Page, initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import Cart from "components/common/cart";
import { GetStaticProps } from "next";
import HeaderSEO from "components/common/head";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import { useRouter } from "next/router";

const CartPage: FC<any> = ({ configuration, page, host, locale }) => {
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
        <HeaderSEO host={host} locale={locale} />
        <BloomreachOtherPixel pageTitle="Cart" pageType="other" />
        {/* <SkipToContentButton> */}
        <Header />

        <main id="content" tabIndex={-1}>
          <AnimationWrapper
            lazyLoadThreshold={0.1}
            animationName={"slide-up"}
            lazyLoad={true}
          >
            <BrComponent path="main">
              <BrComponent path="container" />
              <div
                className={"component-container"}
                style={{ background: "#f2f2f2" }}
              >
                <Cart />
              </div>
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

export default CartPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const allProducts: ProductType[] = await fetchAllProducts(1, 50);
//   let randomlyFilteredProducts: ProductType[] = [];
//   for (let i = 0; i < 5; i++) {
//     if (Math.random() > 0.5) {
//       randomlyFilteredProducts.push(allProducts?.[i]);
//     }
//   }
//   const paths = randomlyFilteredProducts.map((product: ProductType) => ({
//     params: {
//       product_sku: product?.sku,
//     },
//   }));

//   return { paths, fallback: "blocking" };
// };
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
//     configuration = buildConfiguration(path ?? "/cart", currentLocale);
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
  configuration = buildConfiguration("/cart", currentLocale);
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
      referer: `https://www.lazurde.com/${locale}/cart`,
    },
  };
};
