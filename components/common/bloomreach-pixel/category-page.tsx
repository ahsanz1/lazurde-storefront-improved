import React, { useEffect, useRef } from "react";
import {
  BLOOMREACH_ACCOUNT_ID,
  getBloomreachDomainKey,
  getPixelEnv,
} from "general-config";
import Script from "next/script";
import { v4 as uuidv4 } from "uuid";
import { getCookie } from "tiny-cookie";

const BloomreachCategoryPagePixel = ({
  cat_id = "",
  cat,
  pageTitle,
  defaultValueIfNoCatValue,
  referer = "",
  scriptIdRef,
}: any) => {
  const pixelEnv = getPixelEnv();
  const domainKey = getBloomreachDomainKey();
  const scriptId = scriptIdRef.current;
  if (typeof window == "undefined") return null;

  const brData = {
    acct_id: BLOOMREACH_ACCOUNT_ID,
    ptype: "category",
    title: pageTitle || "Category Page",
    domain_key: domainKey,
    ...(pixelEnv === "true" && { test_data: pixelEnv }),
    cat_id: cat_id || defaultValueIfNoCatValue,
    cat: cat || defaultValueIfNoCatValue,
    // ref: typeof document != "undefined" && getCookie("referer", (value: any) => decodeURIComponent(value)),
    ...(scriptId > 0 && { orig_ref_url: window.location.href }),
    // cookie2:
    //   typeof document != "undefined" &&
    //   getCookie("_br_uid_2", (value: any) => decodeURIComponent(value)),
  };

  /**
   * NOTE: scriptId > 0 means there was a filter change & we need to fire the pixel again
   * with virtual page view pixel values
   */
  return (
    <>
      <Script
        key={scriptId}
        id={`${cat_id}-${scriptId}}`}
        strategy="lazyOnload"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var br_data = ${JSON.stringify(brData)};
            (function() {
              var brtrk = document.createElement('script');

              brtrk.type = 'text/javascript';
              brtrk.async = true;
              brtrk.src = "//cdn.brcdn.com/v1/br-trk-${brData?.acct_id}.js";
              var s = document.getElementsByTagName('script')[0];

              s.parentNode.insertBefore(brtrk, s);
            })();
          `,
        }}
      />
    </>
  );
};

export default BloomreachCategoryPagePixel;
