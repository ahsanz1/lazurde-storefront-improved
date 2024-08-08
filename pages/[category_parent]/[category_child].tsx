import React, { FC } from "react";
import dynamic from "next/dynamic";
import { LocaleType, ProductListingPageProps } from "lib/types/common";
import { GetServerSideProps } from "next";
const Header = dynamic(() => import("components/common/header"));
const Footer = dynamic(() => import("components/common/footer"));
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { BrComponent, BrPage, BrPageContext } from "@bloomreach/react-sdk";
const PLPCategory = dynamic(() => import("components/common/plp-category"));
const Banner = dynamic(() => import("components/common/banner"));
const ProductListing = dynamic(
  () => import("components/common/product-listing")
);
import PlpMetaTags from "components/common/ui/meta/plpMetaTags";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import { getPageProps } from "lib/utils/pageLoadProps";
import { generatePlpPageData } from "components/common/product-listing/functions";
import { plpList } from "lib/static-plps/plps";
import PlpSkeleton from "components/common/ui/plp-skeleton";
import {
  filterByDocuments,
  filterByHref,
  filterByImageSets,
  removeRedundantSizesFromImageSets,
} from "lib/utils/br-page-model";
import {
  BR_HP_REDUNDANT_DOCUMENTS,
  BR_HP_REDUNDANT_HREFS,
  BR_HP_REDUNDANT_IMAGE_SETS,
} from "lib/utils/constants";
import Script from "next/script";
const AccordionContent = dynamic(
  () => import("components/common/accordion-content")
);

const LazurdeProductListingPage: FC<ProductListingPageProps> = ({
  configuration,
  page,
  locale,
  parentCategory,
  childCategory,
  url,
  path,
  currentPage,
  plpData = null,
  isFromCMS,
  referer,
  host,
  productData,
  isPreview,
}) => {
  const staticPlpData = plpData ? JSON.parse(plpData) : "";
  const scriptId = Math.random() * (1000000 - 1) + 1;
  if (productData) {
    // console.log("PAGE FILTERS IN API", JSON.parse(productData)?.eqFacetsArray);
    // console.log(
    //   "USER FILTERS IN API",
    //   JSON.parse(productData)?.selectedFilters
    // );
    // console.log("FEED API RESPONSE", JSON.parse(productData));
  }
  return (
    <>
      <PlpSkeleton></PlpSkeleton>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"category"} />,
          "Product Grid": () => (
            <ProductListing
              productData={productData ? JSON.parse(productData) : null}
              scriptId={scriptId}
              host={host}
            />
          ),
        }}
        page={page}
      >
        <BrPageContext.Consumer>
          {(contextPage: any) => {
            const seoContent = contextPage?.getDocument()?.getData();
            return (
              <PlpMetaTags
                title={seoContent?.title || staticPlpData?.seo?.title}
                description={
                  seoContent?.seometadescription ||
                  staticPlpData?.seo?.description
                }
                locale={locale}
                path={path}
                url={url}
                currentPage={currentPage}
                host={host}
                parentCategory={parentCategory}
                childCategory={childCategory}
              />
            );
          }}
        </BrPageContext.Consumer>
        {/* <SkipToContentButton> */}
        <Header showStickyHeader={false} headerClass="plp-header" />
        {/* <script
            async
            src="https://cdn.tangiblee.com/integration/3.1/managed/lazurde.com/revision_4/variation_original/tangiblee-bundle.min.js"
          ></script> */}
        {/* <script
          async
          src="https://cdn.tangiblee.com/integration/5.0/managed/lazurde.com/revision_1/variation_original/tangiblee-bundle.min.js"
        ></script> */}

        <main
          id="content"
          tabIndex={-1}
          className={"plp-wrapper"}
          style={{ minHeight: "500px" }}
        >
          <AnimationWrapper
            className="product-listing"
            animationName={"slide-up"}
            animationWrapperDivStyle={{ overflow: "visible" }}
          >
            <BrComponent path="main">
              {isPreview || isFromCMS ? (
                <BrComponent path="container" />
              ) : (
                <>
                  {staticPlpData?.banner ? (
                    <Banner staticBannerData={staticPlpData?.banner}></Banner>
                  ) : null}
                  {staticPlpData?.bannerWithcards ? (
                    <PLPCategory
                      staticBannerData={staticPlpData?.bannerWithcards}
                    ></PLPCategory>
                  ) : null}
                  {staticPlpData?.plpComponent ? (
                    <ProductListing
                      staticData={staticPlpData?.plpComponent}
                      referer={referer}
                      seo={staticPlpData?.seo}
                      productData={JSON.parse(productData)}
                      scriptId={scriptId}
                      host={host}
                    />
                  ) : null}
                  {staticPlpData?.contentSection &&
                  staticPlpData?.contentSection?.length > 0 &&
                  staticPlpData?.contentSection?.[0]?.text?.value ? (
                    <AccordionContent
                      staticContent={staticPlpData?.contentSection}
                      externalStyles={{ order: 4 }}
                    />
                  ) : null}
                </>
              )}
            </BrComponent>
          </AnimationWrapper>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>

      {staticPlpData?.schema ? (
        <Script
          id="faq-page-schema"
          strategy="lazyOnload"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        
        ${staticPlpData?.schema?.map((faq: any) => {
          return `{
            "@type": "Question",
            "name": "${faq?.q}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${faq?.a}"
            }
          }`;
        })}
      ]}`,
          }}
        />
      ) : null}
    </>
  );
};

export default LazurdeProductListingPage;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
  resolvedUrl: path,
  locale,
  query,
}) => {
  const pageProps = getPageProps({ header: request?.headers });
  const currentLocale = locale.split("-")[1] ? locale : "en-sa";
  let plpComponent = null;
  let page = null;
  let isFromCMS = false;
  let configuration = {};

  if (query?.endpoint) {
    configuration = {
      path,
      endpoint: query?.endpoint,
    };
  } else {
    configuration = buildConfiguration(path ?? "/", currentLocale);
  }

  page = await initialize({
    ...configuration,
    request,
    httpClient: axios,
  });

  if (page?.isPreview()) {
    return {
      props: {
        configuration,
        page: page.toJSON(),
        locale: locale,
        parentCategory: query?.category_parent,
        childCategory: query?.category_child,
        url: path.split("?")[0] || null,
        path: path,
        currentPage: query?.page || 1,
        plpData: null,
        isFromCMS: true,
        referer: pageProps?.referer,
        host: pageProps?.host,
        isPreview: true,
      },
    };
  }

  page
    ?.getComponent()
    ?.getChildren()
    .find((component) => {
      if (component?.getName() === "main") {
        component?.getChildren()?.find((component) => {
          if (component?.getName() === "container") {
            component?.getChildren()?.find((component: any) => {
              if (component?.getLabel() === "Product Grid") {
                plpComponent = component;
                isFromCMS = true;
              }
            });
          }
        });
      }
    });

  const { model: pageModel = {} }: any = page;

  let filteredBrPage: any = null;
  try {
    filteredBrPage = removeRedundantSizesFromImageSets(
      filterByHref(
        filterByImageSets(
          filterByDocuments(pageModel, BR_HP_REDUNDANT_DOCUMENTS),
          BR_HP_REDUNDANT_IMAGE_SETS
        ),
        BR_HP_REDUNDANT_HREFS
      )
    );
  } catch (error) {
    console.error("Error filtering BR Page: ", path, error);
  }

  let generatedPlpPageData = await generatePlpPageData({
    component: plpComponent,
    page,
    path,
    query,
    locale: currentLocale as LocaleType,
    configuration,
    brand: "lazurde",
    staticPlps: plpList,
    brUID: request?.cookies?.["_br_uid_2"] || null,
    pageProps: {
      ...pageProps,
      isFromCMS,
      isCollection: false,
      host: pageProps?.host,
      url: path.split("?")[0] || null,
    },
  });

  generatedPlpPageData = {
    ...generatedPlpPageData,
    props: {
      ...generatedPlpPageData.props,
      page: filteredBrPage || page.toJSON(),
    },
  };

  return generatedPlpPageData;
};
