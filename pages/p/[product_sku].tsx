import { fetchProduct } from "lib/utils/product";
import { GetServerSideProps } from "next";
import React, { FC, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/common/header"));
const Footer = dynamic(() => import("components/common/footer"));
const ProductDescription = dynamic(
  () => import("components/common/product-description")
);
import { getRegionName, reviewStarAvg } from "lib/utils/common";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { Configuration, Page, initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import HeaderSEO from "components/common/head";
import ProductPageScripts from "components/common/head/pdpScripts";
import { getReviews } from "lib/utils/reviews";
// import SkipToContentButton from "components/common/skip-content";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import BloomreachProductPagePixel from "components/common/bloomreach-pixel/product-page";
import { getPageProps } from "lib/utils/pageLoadProps";
import PdpSkeleton from "components/common/ui/pdp-skeleton";
import {
  filterByDocuments,
  filterByImageSets,
  removeRedundantSizesFromImageSets,
} from "lib/utils/br-page-model";
import {
  BR_PDP_REDUNDANT_DOCUMENTS,
  BR_PDP_REDUNDANT_IMAGE_SETS,
} from "lib/utils/constants";

interface ProductDescriptionPageProps {
  configuration: any;
  page: Page;
  sku: string;
  locale: string;
  url: string;
  product: any;
  reviewsData: any;
  host: string;
}

const LazurdeProductDescriptionPage: FC<ProductDescriptionPageProps> = ({
  configuration,
  page,
  sku,
  locale,
  url,
  product,
  host,
}) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const productNameAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );

  const engTitle =
    product?.name?.split(/- (.*)/s)?.length > 1
      ? product?.name?.split(/- (.*)/s)[1]
      : product?.name;
  const arabicTitle =
    productNameAR?.[0]?.node?.value?.split(/- (.*)/s)?.length > 1
      ? productNameAR?.[0]?.node?.value?.split(/- (.*)/s)[1]
      : productNameAR?.[0]?.node?.value;

  const productTitle =
    appState?.lang === "ar"
      ? arabicTitle || (engTitle === "Gift Card" && "كرت هدية")
      : engTitle;

  const bloomReachProductPixel = {
    ptype: "product",
    prod_id: product?.entityId,
    prod_name: productTitle,
    sku: product?.sku,
  };

  return (
    <React.Fragment key={configuration?.endpoint}>
      <PdpSkeleton />

      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"product"} />,
        }}
        page={page}
      >
        <HeaderSEO isPdp={true} host={host} url={url} locale={locale}>
          {product?.brand?.name === "Miss L'" && (
            <meta name="robots" content="noindex, follow" />
          )}
          <title>{`${productTitle} | ${appState?.brand} ${getRegionName(
            locale
          )}`}</title>
          <meta
            property="og:title"
            content={`${productTitle} | ${appState?.brand} ${getRegionName(
              locale
            )}`}
            key="title"
          />
          <meta
            name="description"
            content={`${t("Buy")} ${productTitle} ${t(
              "onlinein"
            )} ${getRegionName(locale)}. ${t("pdpSeoDesc")}`}
          />
          {/* <script
            async
            src="https://cdn.tangiblee.com/integration/3.1/managed/lazurde.com/revision_3/variation_original/tangiblee-bundle.min.js"
          ></script> */}
          {/* <script
            async
            src="https://cdn.tangiblee.com/integration/5.0/managed/lazurde.com/revision_1/variation_original/tangiblee-bundle.min.js"
          ></script> */}
        </HeaderSEO>
        {/* <SkipToContentButton> */}
        <Header />
        <BloomreachProductPagePixel
          bloomReachProductPixel={bloomReachProductPixel}
        />

        <main id="content" tabIndex={-1} style={{ minHeight: "1000px" }}>
          {/* <AnimationWrapper animationName={"slide-up"}> */}
          <BrComponent path="main">
            <BrComponent path="container" />
            {product?.sku && (
              <>
                <div key={product?.sku}>
                  <ProductDescription
                    product={product}
                    brand="lazurde"
                    locale={locale}
                    host={host}
                  ></ProductDescription>
                </div>
              </>
            )}
          </BrComponent>
          {/* </AnimationWrapper> */}
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>
    </React.Fragment>
  );
};

export default LazurdeProductDescriptionPage;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
  resolvedUrl: path,
  locale,
  query,
}) => {
  const pageProps = getPageProps({ header: request?.headers });
  path = decodeURIComponent(path);
  const { product_sku = "" }: any = query;
  const splitSku = product_sku?.split("sku");
  const currentSku = decodeURIComponent(splitSku?.[1]?.substring(1));
  const currentLocale = locale || "ar-sa";
  const region: any = locale?.split("-")[1];

  let configuration = {};

  try {
    if (query?.endpoint) {
      configuration = {
        path,
        endpoint: query?.endpoint,
      };
    } else {
      configuration = buildConfiguration(path ?? "/", currentLocale);
    }
  } catch (error) {
    console.log("PDP Testing -> Error building configuration: ", error);
  }

  const [page = null, productData = null]: any = await Promise.all([
    initialize({
      ...configuration,
      request,
      httpClient: axios,
    }),
    fetchProduct(currentSku, region),
  ]);

  if (!productData) {
    return {
      redirect: {
        destination: `/${locale}/jewelry`,
        permanent: true,
      },
    };
  }

  let productNameAR: any = [];
  let sortedImages: any = [];
  let newImagesArray: any = [];

  try {
    productNameAR = productData?.customFields?.edges?.filter(
      (brand: any) => brand?.node?.name === "New Title AR"
    );

    if (locale?.split("-")[0] === "ar") {
      if (productNameAR?.[0]?.node?.value?.split(/- (.*)/s)?.length > 1) {
        productData.newTitle =
          productNameAR?.[0]?.node?.value?.split(/- (.*)/s)[1];
      }
    } else {
      if (productData?.name?.split(/- (.*)/s)?.length > 1) {
        productData.newTitle = productData?.name?.split(/- (.*)/s)[1];
      }
    }

    productData?.images.edges?.forEach((image: any) => {
      sortedImages.push(image?.node?.altText);
    });
    sortedImages.sort();
    sortedImages?.forEach((text: string, index: number) => {
      const image = productData?.images.edges?.find(
        (initialImage: any) => initialImage?.node?.altText === text
      );
      newImagesArray[index] = {
        url: image,
        alt:
          index === 0
            ? productData?.newTitle || ""
            : `${productData?.newTitle || ""} - ${index + 1}`,
      };
    });
  } catch (error) {
    console.log(
      "PDP Testing -> Error processing product name & images: ",
      error
    );
  }

  const { model: pageModel = {} }: any = page || {};

  let filteredBrPage: any = null;
  try {
    filteredBrPage = removeRedundantSizesFromImageSets(
      filterByImageSets(
        filterByDocuments(pageModel, BR_PDP_REDUNDANT_DOCUMENTS),
        BR_PDP_REDUNDANT_IMAGE_SETS
      )
    );
  } catch (error) {
    console.error("Error filtering BR Page: ", path, error);
  }

  return {
    props: {
      configuration,
      page: filteredBrPage || page?.toJSON(),
      sku: currentSku,
      locale: locale,
      url: path.split("?")[0] || null,
      product: { ...productData, imagesArray: newImagesArray },
      host: pageProps?.host,
    },
  };
};
