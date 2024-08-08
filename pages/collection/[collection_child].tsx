import Footer from "components/common/footer";
import Header from "components/common/header";
import React, { FC } from "react";
import axios from "axios";
import { initialize } from "@bloomreach/spa-sdk";
import { GetServerSideProps } from "next";
import {
  BrComponent,
  BrComponentContext,
  BrPage,
  BrPageContext,
} from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";

import { LocaleType, ProductListingPageProps } from "lib/types/common";

import PlpMetaTags from "components/common/ui/meta/plpMetaTags";
import AnimationWrapper from "components/common/ui/animation-wrapper";

import { brComponentMapping } from "lib/utils/brComponentMapping";
import { getPageProps } from "lib/utils/pageLoadProps";
import { generatePlpPageData } from "components/common/product-listing/functions";
import Banner from "components/common/banner";
import PLPCategory from "components/common/plp-category";
import ProductListing from "components/common/product-listing";
import AccordionContent from "components/common/accordion-content";
import { plpList } from "lib/static-plps/plps";

const PlpCollectionPage: FC<ProductListingPageProps> = ({
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
}) => {
  const staticPlpData = JSON.parse(plpData);
  const scriptId = Math.random() * (1000000 - 1) + 1;
  // console.log("PAGE FILTERS IN API", JSON.parse(productData)?.eqFacetsArray);
  // console.log("USER FILTERS IN API", JSON.parse(productData)?.selectedFilters);
  // console.log("FEED API RESPONSE", JSON.parse(productData));

  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={{
          ...brComponentMapping,
          Footer: () => <Footer pageType={"category"} />,
        }}
        page={page}
      >
        <BrPageContext.Consumer>
          {(contextPage: any) => {
            const seoContent = contextPage?.getDocument()?.getData();
            return (
              <PlpMetaTags
                title={seoContent?.title}
                description={seoContent?.seometadescription}
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
        <Header showStickyHeader={false} headerClass={"plp-header"} />
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
            animationName={"slide-up"}
            animationWrapperDivStyle={{ overflow: "visible" }}
          >
            <BrComponent path="main">
              {isFromCMS ? (
                <>
                  {path.includes("lab-grown-diamonds") ? (
                    <>
                      <BrComponent path="container" />
                    </>
                  ) : (
                    <>
                      <BrComponent path="container">
                        <BrComponent>
                          <BrComponentContext.Consumer>
                            {(component) => (
                              <>
                                {component.getName().includes("grid") && (
                                  <ProductListing
                                    productData={JSON.parse(productData)}
                                    scriptId={scriptId}
                                    host={host}
                                  />
                                )}
                              </>
                            )}
                          </BrComponentContext.Consumer>
                        </BrComponent>
                      </BrComponent>
                    </>
                  )}
                </>
              ) : (
                <>
                  {staticPlpData?.banner ? (
                    <Banner staticBannerData={staticPlpData?.banner} />
                  ) : null}
                  {staticPlpData?.bannerWithcards ? (
                    <PLPCategory
                      staticBannerData={staticPlpData?.bannerWithcards}
                    />
                  ) : null}
                  {staticPlpData?.plpComponent ? (
                    <ProductListing
                      staticData={staticPlpData?.plpComponent}
                      seo={staticPlpData?.seo}
                      productData={JSON.parse(productData)}
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
    </>
  );
};

export default PlpCollectionPage;

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
  return await generatePlpPageData({
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
      isCollection: true,
      url: path.split("?")[0] || null,
      host: pageProps?.host,
    },
  });
};
