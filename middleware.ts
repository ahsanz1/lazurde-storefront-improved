// import { sql } from "@vercel/postgres";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SEO_REDIRECT_DOMAIN = "https://www.lazurde.com";

const isOldPlatformURL = (sourceURL: String) => {
  return (
    sourceURL.includes("sa_en") ||
    sourceURL.includes("sa_ar") ||
    sourceURL.includes("ae_en") ||
    sourceURL.includes("ae_ar") ||
    sourceURL.includes("eg_en") ||
    sourceURL.includes("eg_ar") ||
    sourceURL.includes(".html")
  );
};

const misslGFOverride = (req: NextRequest) => {
  return NextResponse.redirect(
    `${SEO_REDIRECT_DOMAIN}/${req.nextUrl?.locale}/miss-l/jewelry/necklaces-pendants/shop-all`
  );
};

const lazurdeGFOverride = (req: NextRequest) => {
  if (req?.nextUrl?.locale.includes("eg")) {
    return NextResponse.redirect(
      `${SEO_REDIRECT_DOMAIN}/${req.nextUrl?.locale}/jewelry/shop-all`
    );
  } else {
    return NextResponse.redirect(
      `${SEO_REDIRECT_DOMAIN}/${req.nextUrl?.locale}/jewelry/best-sellers`
    );
  }
};

export async function middleware(req: NextRequest) {
  // console.log("SEO Redirects: Incoming URL -> ", req.url);
  // console.log("SEO Redirects: NEXT URL ->  ", req.nextUrl);

  const requestHeaders = new Headers(req.headers);

  // if (isOldPlatformURL(req.url)) {
  //   try {
  //     const pathnameTokens = req?.nextUrl?.pathname?.split("/") || [];
  //     let tableName = pathnameTokens.length > 0 ? pathnameTokens[1] : "";

  //     if (req?.url?.includes("missl.com")) {
  //       tableName = "missl_urls";
  //     }

  //     let decodedURIComponent = "";

  //     if (req?.nextUrl?.pathname?.includes("%")) {
  //       decodedURIComponent = decodeURIComponent(req.nextUrl.pathname);
  //     }

  //     let dbResult: any = {};

  //     switch (tableName) {
  //       case "sa_en": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM SA_EN WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "sa_ar": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM SA_AR WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "ae_en": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM AE_EN WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "ae_ar": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM AE_AR WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "eg_en": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM EG_EN WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "eg_ar": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM EG_AR WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       case "missl_urls": {
  //         dbResult =
  //           await sql`SELECT oldUrl,newUrl,recommendedStatusCode FROM MISSL_URLS WHERE oldUrl=${
  //             decodedURIComponent || req.nextUrl.pathname
  //           }`;
  //         break;
  //       }
  //       default: {
  //         console.log("SEO Redirects: Invalid table name");
  //       }
  //     }
  //     const { rows = [] } = dbResult;

  //     if (rows.length > 0) {
  //       const { newurl, recommendedstatuscode } = rows[0];
  //       if (newurl && recommendedstatuscode)
  //         return NextResponse.redirect(
  //           `${SEO_REDIRECT_DOMAIN}${newurl}`.toLowerCase(),
  //           recommendedstatuscode === 301 ? 308 : 301
  //         );
  //     } else throw new Error("SEO Redirects: No redirect URL found");
  //   } catch (error) {
  //     console.log("SEO Redirects: Error redirecting: ", error, req.nextUrl);
  //   }
  // }

  if (req?.url?.includes("missl.com")) {
    // console.log("SEO Redirects -> Redirecting MissL Root To Lazurde");

    if (req?.geo) {
      // if (req.geo?.country) {
      //   let resp = null;
      //   switch (req?.geo?.country) {
      //     case "SA":
      //       resp = NextResponse.redirect(
      //         `${SEO_REDIRECT_DOMAIN}/ar-sa/miss-l`.toLowerCase(),
      //         308
      //       );
      //       break;
      //     case "AE":
      //       resp = NextResponse.redirect(
      //         `${SEO_REDIRECT_DOMAIN}/ar-ae/miss-l`.toLowerCase(),
      //         308
      //       );
      //       break;
      //     case "EG":
      //       resp = NextResponse.redirect(
      //         `${SEO_REDIRECT_DOMAIN}/ar-eg/miss-l`.toLowerCase(),
      //         308
      //       );
      //       break;
      //     default:
      //       resp = NextResponse.redirect(
      //         `${SEO_REDIRECT_DOMAIN}/ar-eg/miss-l`.toLowerCase(),
      //         308
      //       );
      //   }
      //   return resp;
      // }
    }

    if (req?.nextUrl?.pathname === "/" || req?.nextUrl?.locale === "default") {
      return NextResponse.redirect(
        `${SEO_REDIRECT_DOMAIN}/ar-eg/miss-l`.toLowerCase(),
        307
      );
    }
  }

  //TEMPORARY REDIRECT FOR MISSL GOLD FRIDAY PLP
  // if (req?.url?.includes("/miss-l/gold-friday")) {
  //   return NextResponse.redirect(
  //     new URL(`/${req.nextUrl.locale}/miss-l/jewelry/gold-friday`, req.url)
  //   );
  // }
  /**********************************/

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "default") {
    let resp = null;

    if (req.cookies?.get("user_locale")) {
      resp = NextResponse.redirect(
        new URL(
          `/${req.cookies?.get("user_locale")}${req.nextUrl.pathname}${req.nextUrl.search
          }`,
          req.url
        )
      );
      resp?.cookies?.set("referer", requestHeaders?.get("referer"));
      return resp;
    }
    // console.log("MW - GEO IP: ", req, req?.geo);
    if (req?.geo) {
      // switch (req?.geo?.country) {
      //   case "SA":
      //     if (
      //       req?.url?.includes("/miss-l/gold-friday") ||
      //       req?.url?.includes("/miss-l/jewelry/gold-friday")
      //     ) {
      //       resp = misslGFOverride(req);
      //     } else {
      //       if (req?.url?.includes("/gold-friday"))
      //         resp = lazurdeGFOverride(req);
      //       else
      //         resp = NextResponse.redirect(
      //           new URL(
      //             `/ar-sa${req.nextUrl.pathname}${req.nextUrl.search}`,
      //             req.url
      //           )
      //         );
      //     }
      //     resp.cookies?.set("referer", requestHeaders?.get("referer"));
      //     break;
      //   case "AE":
      //     if (
      //       req?.url?.includes("/miss-l/gold-friday") ||
      //       req?.url?.includes("/miss-l/jewelry/gold-friday")
      //     ) {
      //       resp = misslGFOverride(req);
      //     } else {
      //       if (req?.url?.includes("/gold-friday"))
      //         resp = lazurdeGFOverride(req);
      //       else
      //         resp = NextResponse.redirect(
      //           new URL(
      //             `/en-ae${req.nextUrl.pathname}${req.nextUrl.search}`,
      //             req.url
      //           )
      //         );
      //     }
      //     resp.cookies?.set("referer", requestHeaders?.get("referer"));
      //     break;
      //   case "EG":
      //     if (
      //       req?.url?.includes("/miss-l/gold-friday") ||
      //       req?.url?.includes("/miss-l/jewelry/gold-friday")
      //     ) {
      //       resp = misslGFOverride(req);
      //     } else {
      //       if (req?.url?.includes("/gold-friday"))
      //         resp = lazurdeGFOverride(req);
      //       else
      //         resp = NextResponse.redirect(
      //           new URL(
      //             `/ar-eg${req.nextUrl.pathname}${req.nextUrl.search}`,
      //             req.url
      //           )
      //         );
      //     }
      //     resp.cookies?.set("referer", requestHeaders?.get("referer"));
      //     break;
      //   default:
      //     if (
      //       req?.url?.includes("/miss-l/gold-friday") ||
      //       req?.url?.includes("/miss-l/jewelry/gold-friday")
      //     ) {
      //       resp = misslGFOverride(req);
      //     } else {
      //       if (req?.url?.includes("/gold-friday"))
      //         resp = lazurdeGFOverride(req);
      //       else
      //         resp = NextResponse.redirect(
      //           new URL(
      //             `/ar-sa${req.nextUrl.pathname}${req.nextUrl.search}`,
      //             req.url
      //           )
      //         );
      //     }
      //     resp?.cookies?.set("referer", requestHeaders?.get("referer"));
      // }
    }

    // const locale = 'ar-eg'

    return NextResponse.redirect(
      new URL(`${SEO_REDIRECT_DOMAIN}`, req.url)
    )
    // return resp;
  } else {
    const locale = req?.nextUrl?.locale || "";
    let resp = null;
    resp = NextResponse.next();
    resp.cookies?.set("referer", requestHeaders?.get("referer"));
    // if (
    //   req?.url?.includes("/miss-l/gold-friday") ||
    //   req?.url?.includes("/miss-l/jewelry/gold-friday")
    // ) {
    //   resp = misslGFOverride(req);
    // } else {
    //   if (req?.url?.includes("/gold-friday")) resp = lazurdeGFOverride(req);
    // }
    return resp;
  }
}
