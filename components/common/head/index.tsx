import { BrPageContext } from "@bloomreach/react-sdk";
import Head from "next/head";
import { useRouter } from "next/router";
import HomePageScripts from "./homeScripts";
import { allLocales } from "lib/utils/common";

interface HeaderSeoType {
  scriptPageType?: string;
  children?: any;
  isPdp?: boolean;
  host: string;
  locale?: string;
  url?: string;
  staticSeoData?: {
    title?: string;
    seometadescription?: string;
  };
}

const HeaderSEO = ({
  scriptPageType = "",
  children,
  isPdp = false,
  host,
  locale = "",
  url = "",
  staticSeoData,
}: HeaderSeoType) => {
  const router = useRouter();

  const brandedLink = `${host}/${locale || router?.locale}`;
  const completeUrl = `${brandedLink}${url || router?.asPath}`;
  const updatedUrl = completeUrl.replace(/\/$/, "");
  const _setURL = (
    url ? `${url}` : router?.asPath ? `${router?.asPath}` : null
  ).replace(/\/$/, "");

  return (
    <BrPageContext.Consumer>
      {(contextPage: any) => {
        const seoContent =
          contextPage?.getDocument()?.getData() || staticSeoData;

        return (
          <>
            {isPdp ? null : (
              <>
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"en-sa"}
                  href={`${host}/en-sa${_setURL}`}
                />
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"ar-sa"}
                  href={`${host}/ar-sa${_setURL}`}
                />
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"en-ae"}
                  href={`${host}/en-ae${_setURL}`}
                />
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"ar-ae"}
                  href={`${host}/ar-ae${_setURL}`}
                />
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"en-eg"}
                  href={`${host}/en-eg${_setURL}`}
                />
                <link
                  key={updatedUrl}
                  rel="alternate"
                  hrefLang={"ar-eg"}
                  href={`${host}/ar-eg${_setURL}`}
                />
              </>
            )}
            <Head>
              <link rel="canonical" href={updatedUrl} />

              {!isPdp ? (
                <>
                  <title>{seoContent?.title}</title>
                  <meta
                    name="description"
                    content={seoContent?.seometadescription}
                  />
                </>
              ) : null}
              {children}
            </Head>
            <HomePageScripts
              scriptPageType={scriptPageType}
              description={seoContent?.seometadescription}
              locale={locale}
            />
          </>
        );
      }}
    </BrPageContext.Consumer>
  );
};

export default HeaderSEO;
