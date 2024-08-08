import Footer from "components/common/footer";
import Header from "components/common/header";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Configuration, Page, initialize } from "@bloomreach/spa-sdk";
import { GetServerSideProps } from "next";
import { BrComponent, BrPage, BrPageContext } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { BrPageData, PageProps } from "lib/types/common";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import HeaderSEO from "components/common/head";
import { getPageProps } from "lib/utils/pageLoadProps";
import BreadCrumbs from "components/common/ui/bread-crumbs";

interface ProductListingPageProps extends PageProps {
  configuration: Configuration;
  page: Page;
  locale: string;
  parentCategory: string;
  url: string;
  path: string;
  currentPage: number;
  host: string;
}

const BlogPage: FC<ProductListingPageProps> = ({
  configuration,
  page,
  locale,
  parentCategory,
  url,
  path,
  currentPage,
  host,
}) => {
  const [headerVisible, setHeaderVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHeaderVisible(true)
    }, 500);
    return () => setHeaderVisible(false)
  }, [])
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
        <HeaderSEO host={host} url={url} locale={locale} />
        <Header showStickyHeader={false} headerClass={"plp-header"} />

        <BrPageContext.Consumer>
          {(page: any) => {
            const findPage: BrPageData = page?.getDocument();
            const getPageData = findPage && findPage?.model?.data;
            const pageTitle = getPageData && getPageData?.subPageTitle;
            const parentBreadcrumb =
              getPageData && getPageData?.parentBreadcrumb;
            const parentLink = `/blog/${url.split("/")[2]}`;

            return (
              <>
                {headerVisible && (parentBreadcrumb || pageTitle) ? <BreadCrumbs
                  parent={parentBreadcrumb}
                  parentLink={parentLink}
                  child={pageTitle}
                  className="blog-breadcrumb"
                /> : null}

              </>
            );
          }}
        </BrPageContext.Consumer>

        <main
          id="content"
          tabIndex={-1}
          className={"plp-wrapper"}
          style={{ minHeight: "500px" }}
        >
          <BrComponent path="main">
            <BrComponent path="container" />
          </BrComponent>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
      </BrPage>
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
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
    configuration = buildConfiguration(path ?? "/", currentLocale);
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
