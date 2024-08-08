import React, { FC, useContext, useState, useEffect } from "react";
import Footer from "components/common/footer";
import Header from "components/common/header";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { BrComponent, BrPage } from "@bloomreach/react-sdk";
import { buildConfiguration } from "lib/utils/buildConfiguration";
import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import TermCondtion from "components/common/terms-condition";
import HeaderSEO from "components/common/head";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brComponentMapping } from "lib/utils/brComponentMapping";
import { getPageProps } from "lib/utils/pageLoadProps";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";
import { seoForStaticPages } from "lib/utils/seoDataStaticPages";

const HelpCentrePages: FC<any> = ({
  globalObj,
  mainPageData,
  configuration,
  page,
  currentLocale,
  host,
  url,
  locale,
}) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [pageData, setPageData] = useState<any>(globalObj);
  const [helpCenterData, setHelpCenterData] = useState({});
  const [newData, setNewData] = useState<any>(mainPageData);

  useEffect(() => {
    const currComponent =
      newData &&
      newData?.length > 0 &&
      newData?.filter((comp: any) => comp?.id == "CustomerService");
    currComponent && setHelpCenterData(currComponent?.[0]?.params?.services);
  }, [mainPageData, pageData, newData, appState?.lang]);

  const mapping: any = {
    ...brComponentMapping,
    Footer: () => <Footer pageType={"other"} />,
  };

  const { help_centre_page_url } = router?.query;
  const isrefundReturnPage = help_centre_page_url === "refund-and-return";
  const { faq, returnRefundExchange } = seoForStaticPages(currentLocale);
  const lang = currentLocale?.split("-")[0];
  const currentSeoPage = isrefundReturnPage ? returnRefundExchange : faq;

  return (
    <>
      <BrPage
        configuration={{ ...configuration, httpClient: axios }}
        mapping={mapping}
        page={page}
      >
        <HeaderSEO
          host={host}
          staticSeoData={currentSeoPage?.[lang]}
          url={url}
          locale={locale}
        />
        <BloomreachOtherPixel
          pageTitle={`Help Centre/${router?.query?.["help_centre_page_url"]}`}
          pageType="other"
        />
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
            <TermCondtion locale={currentLocale} isHelpCenterPage={true} />
          </AnimationWrapper>
        </main>

        <BrComponent path="footer">
          <BrComponent path="container" />
        </BrComponent>
        {/* </SkipToContentButton> */}
      </BrPage>

      {/* <div className={"back-block"}>
        <button
          className={"button"}
          onClick={() => {
            setLoading(true);
            router.push("/contact-us");
          }}
        >
          {loading ? (
            <Spinner width={12} height={12} stroke={6} color={"white"} />
          ) : (
            <Image src={"/question.png"} width={20} height={20} alt="" />
          )}
          <p>{t("haveAQuestion")}</p>
        </button>
      </div> */}
    </>
  );
};

export default HelpCentrePages;

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
      currentLocale: currentLocale,
      host: pageProps?.host,
      locale: locale,
      url: path.split("?")[0] || null,
    },
  };
};
