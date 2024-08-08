import React, { useEffect, useRef } from "react";
import {
  BLOOMREACH_ACCOUNT_ID,
  getBloomreachDomainKey,
  getPixelEnv,
} from "general-config";
import Script from "next/script";
import { v4 as uuidv4 } from "uuid";
import { getCookie } from "tiny-cookie";

const BloomreachProductPagePixel = ({ bloomReachProductPixel = {} }: any) => {
  const pixelEnv = getPixelEnv();
  const domainKey = getBloomreachDomainKey();
  const randomScriptId = Math.random() * (1000000 - 1) + 1;
  const scriptIdRef = useRef(randomScriptId);
  const scriptId = scriptIdRef?.current?.toString() || "";
  if (typeof window == "undefined") return null;
  const brData = {
    acct_id: BLOOMREACH_ACCOUNT_ID,
    ptype: "product",
    title: "Product Page",
    domain_key: domainKey,
    ...(pixelEnv === "true" && { test_data: pixelEnv }),
    prod_id: bloomReachProductPixel?.prod_id,
    prod_name: bloomReachProductPixel?.prod_name,
    sku: "",
    // ref:typeof document != "undefined" &&  getCookie("referer", (value: any) => decodeURIComponent(value)),
    ...(randomScriptId > 0 && { orig_ref_url: window.location.href }),
    // cookie2: typeof document != "undefined" && getCookie("_br_uid_2", (value: any) => decodeURIComponent(value)),
  };

  return (
    <>
      {brData && (
        <Script
          id={scriptId}
          strategy="lazyOnload"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var br_data = ${JSON.stringify(brData)};
            (function() {
              var brtrk = document.createElement('script');
              // console.log('Product Page View Pixel Triggered: ', ${scriptId})
              brtrk.type = 'text/javascript';
              brtrk.async = true;
              brtrk.src = "//cdn.brcdn.com/v1/br-trk-${brData?.acct_id}.js";
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(brtrk, s);
            })();
          `,
          }}
        />
      )}
    </>
  );
};

export default BloomreachProductPagePixel;
