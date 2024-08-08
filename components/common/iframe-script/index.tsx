import React, { useRef, useEffect } from "react";
import Script from "next/script";

export const IframeScript = (refId: string) => {
  const scriptId = useRef(Math.random());

  useEffect(() => {
    return () => {
      const scripts = document.querySelectorAll("script");
      const arr = Array.from(scripts);
      const script = arr.find((a) => a.id == scriptId.current.toString());
      script && script.parentNode.removeChild(script);
    };
  }, [refId]);
  return (
    <Script
      id={scriptId.current.toString()}
      strategy="lazyOnload"
      type="text/javascript"
    >
      {`EurolandToolIntegrationObject.set("${refId}")`}
    </Script>
  );
};

export const IframToolScript = () => {
  return (
    <Script
      type="text/javascript"
      src="https://tools.euroland.com/tools/common/eurolandiframeautoheight/eurolandtoolsintegrationobject.js"
      strategy="beforeInteractive"
    ></Script>
  );
};
