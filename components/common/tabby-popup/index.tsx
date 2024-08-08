import React, { useContext, useEffect, useState } from "react";
import Script from "next/script";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import TamaraTabbySkeleton from "../ui/skeletons/tamara-tabby-skeleton";

const TabbyModal = ({
  productPricing,
}: {
  productPricing: { finalPrice: number; currency?: string };
}) => {
  const [loadScripts, setLoadScripts] = useState(false);
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const [add2ndTabbyScript, setAdd2ndTabbyScript] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadScripts(true);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        key={router?.locale?.split("-")?.[0] || appState?.region}
        id="TabbyPromo"
      ></div>
      {!loadScripts && <TamaraTabbySkeleton style={{ height: "97px" }} />}
      {loadScripts ? (
        <Script
          id={Math.random()?.toString()}
          src="https://checkout.tabby.ai/tabby-promo.js"
          strategy="lazyOnload"
          onLoad={() => {
            setAdd2ndTabbyScript(true);
          }}
        ></Script>
      ) : null}
      {add2ndTabbyScript && (
        <Script id={Math.random()?.toString()} strategy="lazyOnload">
          {`new TabbyPromo({
            selector: '#TabbyPromo',
            currency: '${appState?.region === "sa" ? "SAR" : "AED"}',
            price: ${productPricing},
            installmentsCount: 4,
            lang: '${router?.locale?.split("-")?.[0] || appState?.lang}',
            source: 'product',
            publicKey: 'pk_test_427f73ce-ebb9-4609-9c83-c12088518f50'
          });`}
        </Script>
      )}
    </>
  );
};

export default TabbyModal;
