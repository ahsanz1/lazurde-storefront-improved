import { BrandNameTypes } from "lib/types/common";
import { allLocales, breadCrumbs } from "lib/utils/common";
import { brandNames, brandNamesAR } from "lib/utils/constants";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

type MetaProps = {
  title: string;
  description: string;
  locale: string;
  url: string;
  path: string;
  currentPage: number;
  brand?: BrandNameTypes | null;
  host: string;
  parentCategory: string;
  childCategory?: string;
};

const PlpMetaTags = ({
  title = "",
  description = "",
  locale = "",
  url = "",
  path = "",
  currentPage = 1,
  brand = "lazurde",
  host,
  parentCategory,
  childCategory,
}: MetaProps): JSX.Element => {
  const modifiedTitle =
    Number(currentPage) > 1
      ? title?.replace("<number>", currentPage.toString())
      : title?.replace("Page <number> | ", "");
  const router = useRouter();
  const brandedLink = `${host}/${locale || router?.locale}`;
  const lang = locale?.split("-")[0];

  let modifiedUrl = url || router?.asPath;

  if (url?.includes("shop-all")) {
    let trimmedUrl = url?.replace("/shop-all", " ");
    if (trimmedUrl?.includes("gold"))
      trimmedUrl = trimmedUrl?.replace("gold", "gold-jewelry");
    if (trimmedUrl?.includes("diamond"))
      trimmedUrl = trimmedUrl?.replace("diamond", "diamond-jewelry");
    if (trimmedUrl?.includes("gift-occasions"))
      trimmedUrl = trimmedUrl?.replace("gift-occasions", "gifts-occasions");
    modifiedUrl = trimmedUrl;
  }

  const pageParam = currentPage > 1 ? `?page=${currentPage}` : "";
  const prevPage = currentPage > 2 ? `?page=${Number(currentPage) - 1}` : "";
  const hasNumber = /\d+/.test(url);

  const misslNoIndexTags = [
    "best-sellers",
    "new-in",
    "special-price",
    "yellow-gold",
    "white-gold",
    "rose-gold",
    "multicolor-gold",
    "colored-stones",
    "diamonds",
    "pearls",
    "under-500",
    "500-1000",
    "1000-2000",
    "2000-4000",
    "4000-above",
    "under-4000",
    "4000-6000",
    "6000-8000",
    "8000-10000",
    "10000-above",
  ];

  const excludedPathsAE = [
    "miss-l/jewelry/necklaces-pendants/charms",
    "miss-l/jewelry/necklaces-pendants/special-price",
    "miss-l/jewelry/necklaces-pendants/best-sellers",
    "miss-l/jewelry/necklaces-pendants/pendants",
    "miss-l/jewelry/necklaces-pendants/charms",
    "miss-l/jewelry/rings/white-gold",
    "miss-l/jewelry/rings/rose-gold",
    "miss-l/jewelry/rings/best-sellers",
    "miss-l/jewelry/rings/special-price",
    "miss-l/jewelry/rings/eternity",
    "miss-l/jewelry/bracelets-anklets/cuff",
    "miss-l/jewelry/bracelets-anklets/pearls",
    "miss-l/jewelry/bracelets-anklets/special-price",
    "miss-l/jewelry/earrings/chandelier",
    "miss-l/jewelry/earrings/special-price",
    "miss-l/jewelry/earrings/rose-gold",
    "miss-l/jewelry/earrings/multicolor-gold",
    "jewelry/rings/band",
    "gold/best-sellers",
    "love-engagement/solitaire-rings",
    "love-engagement/eternity-rings",
    "love-engagement/miss-l",
    "love-engagement/best-sellers",
    "love-engagement/white-gold",
    "love-engagement/diamonds",
    "love-engagement/colored-stones",
    "jewelry/coins-bars",
  ];

  const excludedPathsEG = [
    "gold/pearls",
    "fashion-jewelry/kids",
    "gift-occasions/kids",
    "jewelry/kids",
    "miss-l/jewelry/kids/necklaces-pendants",
    "miss-l/jewelry/kids/bracelets-anklets",
    "miss-l/jewelry/kids/earrings",
    "miss-l/jewelry/kids/shop-all",
    "miss-l/jewelry/kids/best-sellers",
    "miss-l/jewelry/kids/new-in",
    "miss-l/jewelry/kids/yellow-gold",
    "miss-l/jewelry/kids/colored-stones",
    "miss-l/jewelry/kids/pearls",
  ];

  const excludePaths_AE_EG = [
    "miss-l/jewelry/rings/band",
    "miss-l/jewelry/kids/rings",
    "miss-l/jewelry/kids/multicolor-gold",
    "gold/coins-bars",
    "diamond/sets",
    "gold/rose-gold",
    "gold/special-price",
    "waves",
    "fashion-jewelry/mens",
    "fashion-jewelry/gold-plated",
    "fashion-jewelry/sterling-silver",
    "lab-grown-diamonds/bracelets",
    "lab-grown-diamonds/best-sellers",
    "love-engagement/diamond-sets",
    "love-engagement/waves",
    "love-engagement/special-price",
    "love-engagement/rose-gold",
    "love-engagement/gold-plated",
    "gift-occasions/half-sets",
    "gift-occasions/mens",
    "gifts-occasions/waves",
    "gift-occasions/gold-plated",
    "gift-occasions/sterling-silver",
    "jewelry/half-sets",
    "jewelry/mens",
    "jewelry/gold-plated",
    "jewelry/sterling-silver",
    "gold/half-sets",
    "gift-occasions/coins-bars",
  ];

  const excludePaths_AE_KSA = [
    "gold/wedding-bands",
    "fashion-jewelry/sets",
    "love-engagement/wedding-bands",
    "miss-l/jewelry/rings/pearls",
    "miss-l/jewelry/bracelets-anklets/bangle",
    "miss-l/jewelry/earrings/clip-on",
  ];

  const excludedPath = [
    "/lazurde",
    "/gifts-occasions/lazurde",
    "/jewelry",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
    "/diamond/shop-all",
    "/gold/shop-all",
    "/lab-grown-diamonds/shop-all",
    "/love-engagement/shop-all",
    "/gift-occasions/shop-all",
    "/jewelry/shop-all",
    "/jewelry/miss-l",
    "/miss-l/jewelry/necklaces-pendants/shop-all",
    "/miss-l/jewelry/rings/shop-all",
    "/miss-l/jewelry/bracelets-anklets/shop-all",
    "/miss-l/jewelry/earrings/shop-all",
    "/miss-l/jewelry/shop-all",
  ];

  const misslAddNoIndex = misslNoIndexTags?.find((tag) => path?.includes(tag));
  const excludeUrls = excludedPath.some(
    (excluded_path) => path === excluded_path
  );

  const subDomain = [
    "https://checkout-sa.lazurde.com/",
    "https://lazurde-sf-qa.shopdev.co/",
  ];
  const excludeSubDomains = subDomain.some((domain) => host === domain);
  const excludeUrlAE = excludedPathsAE.some((path) => url?.includes(path));
  const excludeUrlEG = excludedPathsEG.some((path) => url?.includes(path));
  const excludeUrl_AE_EG = excludePaths_AE_EG.some((path) =>
    url?.includes(path)
  );
  const excludeUrl_AE_KSA = excludePaths_AE_KSA.some((path) =>
    url?.includes(path)
  );
  if (url.includes("lab-grown-diamonds") || excludeUrlAE) {
    const indexToRemove = allLocales.indexOf("en-ae");
    if (indexToRemove !== -1) {
      allLocales.splice(indexToRemove, 1);
    }
    const indexToRemoveAR = allLocales.indexOf("ar-ae");
    if (indexToRemoveAR !== -1) {
      allLocales.splice(indexToRemoveAR, 1);
    }
  }
  if (excludeUrlEG) {
    const indexToRemove = allLocales.indexOf("en-eg");
    if (indexToRemove !== -1) {
      allLocales.splice(indexToRemove, 1);
    }
    const indexToRemoveAR = allLocales.indexOf("ar-eg");
    if (indexToRemoveAR !== -1) {
      allLocales.splice(indexToRemoveAR, 1);
    }
  }
  if (excludeUrl_AE_EG) {
    const indexToRemove = allLocales.indexOf("en-ae");
    if (indexToRemove !== -1) {
      allLocales.splice(indexToRemove, 1);
    }
    const indexToRemoveAR = allLocales.indexOf("ar-ae");
    if (indexToRemoveAR !== -1) {
      allLocales.splice(indexToRemoveAR, 1);
    }
    const indexToRemoveEG = allLocales.indexOf("en-eg");
    if (indexToRemoveEG !== -1) {
      allLocales.splice(indexToRemoveEG, 1);
    }
    const indexToRemoveEGAR = allLocales.indexOf("ar-eg");
    if (indexToRemoveEGAR !== -1) {
      allLocales.splice(indexToRemoveEGAR, 1);
    }
  }
  if (excludeUrl_AE_KSA) {
    const indexToRemove = allLocales.indexOf("en-ae");
    if (indexToRemove !== -1) {
      allLocales.splice(indexToRemove, 1);
    }
    const indexToRemoveAR = allLocales.indexOf("ar-ae");
    if (indexToRemoveAR !== -1) {
      allLocales.splice(indexToRemoveAR, 1);
    }
    const indexToRemoveKSA = allLocales.indexOf("en-sa");
    if (indexToRemoveKSA !== -1) {
      allLocales.splice(indexToRemoveKSA, 1);
    }
    const indexToRemoveKSAAR = allLocales.indexOf("ar-sa");
    if (indexToRemoveKSAAR !== -1) {
      allLocales.splice(indexToRemoveKSAAR, 1);
    }
  }
  const completeUrl = `${brandedLink}${modifiedUrl}${pageParam}`;
  const updatedUrl = completeUrl.replace(/\/$/, "");
  const currentBrand =
    lang === "en" ? brandNames?.[brand] : brandNamesAR?.[brand];
  const brandLink =
    brand === "lazurde"
      ? `https://www.lazurde.com/${locale}`
      : `https://www.lazurde.com/${locale}/miss-l`;

  let missLbreadcrumb = "";
  let missLbreadcrumbChild = "";
  let breadCrumbLink = "";
  let breadCrumbChildLink = "";
  const rawParentBreadCrumb = router?.query?.category_parent as string;
  const rawChildBreadCrumb = router?.query?.category_child as string;

  const styledParentBreadCrumb = breadCrumbs?.[rawParentBreadCrumb]?.[lang];
  const styledChildBreadCrumb =
    rawChildBreadCrumb === "shop-all"
      ? breadCrumbs?.[rawChildBreadCrumb]?.[rawParentBreadCrumb]?.[lang]
      : breadCrumbs?.[rawChildBreadCrumb]?.[lang];

  if (brand === "miss-l") {
    missLbreadcrumb = `jewelry/${rawParentBreadCrumb}`;
    missLbreadcrumbChild = `jewelry/${rawParentBreadCrumb}/${rawChildBreadCrumb}`;
  } else {
    breadCrumbLink = `${breadCrumbs?.[rawParentBreadCrumb]?.link || "jewelry"}`;
    breadCrumbChildLink = `${
      breadCrumbs?.[rawParentBreadCrumb]?.childLink
        ? breadCrumbs?.[rawParentBreadCrumb]?.childLink
        : "jewelry"
    }/${rawChildBreadCrumb}`;
  }

  const parentBCLink = `${
    missLbreadcrumb || breadCrumbLink || rawParentBreadCrumb
  }`;
  const childBCLink = `${
    missLbreadcrumbChild || breadCrumbChildLink || rawChildBreadCrumb
  }`;

  const childCat = childCategory
    ? `{
        "@type": "ListItem",
        "position": "3",
        "name": "${styledChildBreadCrumb}",
        "item": "${brandLink}/${childBCLink}"
      }`
    : null;

  const parentCat = `{
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "name": "${currentBrand}",
        "item": "${brandLink}"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${styledParentBreadCrumb}",
        "item": "${brandLink}/${parentBCLink}"
      },
      ${childCat}
    ]
  }`;
  const _setURL = (
    url ? `${url}` : router?.asPath ? `${router?.asPath}` : null
  ).replace(/\/$/, "");
  return (
    <>
      {
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
      }
      <Head>
        <Script
          id="scroll-restoration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "auto"`,
          }}
        />
        <title>{modifiedTitle}</title>
        {/* <meta property="og:title" content={modifiedTitle} key="title" /> */}
        <meta name="description" content={description} />
        {currentPage > 1 && <meta name="robots" content="noindex, follow" />}
        {brand === "miss-l" && misslAddNoIndex && (
          <meta name="robots" content="noindex, follow" />
        )}
        {(path.includes("fashion-jewelry/") ||
          excludeUrls ||
          excludeSubDomains) && (
          <meta name="robots" content="noindex, follow" />
        )}

        <link rel="canonical" href={updatedUrl} />
        {currentPage > 1 && (
          <link rel="prev" href={`${brandedLink}${url}${prevPage}`} />
        )}
        <link
          rel="next"
          href={`${brandedLink}${url}?page=${Number(currentPage) + 1}`}
        />
      </Head>
      <Script
        id="parent-cat"
        strategy="lazyOnload"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${[parentCat]}`,
        }}
      />
    </>
  );
};

export default PlpMetaTags;
