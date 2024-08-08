import React, { useContext, useState, useEffect } from "react";
import Script from "next/script";
import { AppContext } from "lib/context";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import TamaraTabbySkeleton from "../ui/skeletons/tamara-tabby-skeleton";

const TamaraModal = ({
  productPricing,
}: {
  productPricing: { finalPrice: number; currency: string };
}) => {
  const [loadScripts, setLoadScripts] = useState(false);
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const [add2ndTamaraScript, setAdd2ndTamaraScript] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadScripts(true);
    }, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        key={router?.locale?.split("-")?.[0] || appState?.lang}
        className={`tamara-product-widget ${styles["pdp-tamara"]} clamp-fontsize`}
        data-lang={router?.locale?.split("-")?.[0] || appState?.lang}
        data-price={`${productPricing}`}
        data-currency={`${appState?.region === "sa" ? "SAR" : "AED"}`}
        data-country-code="SA"
        data-color-type="default"
        data-show-border="false"
        data-payment-type="installment"
        data-number-of-installments="3"
        data-disable-installment="false"
        data-disable-paylater="true"
        data-installment-maximum-amount="4000"
      ></div>

      {!loadScripts && (
        <TamaraTabbySkeleton style={{ marginBlock: "20px", height: "101px" }} />
      )}

      {loadScripts ? (
        <Script
          id={Math.random()?.toString()}
          src="https://cdn.tamara.co/widget/product-widget.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            setAdd2ndTamaraScript(true);
          }}
        ></Script>
      ) : null}
      {add2ndTamaraScript && (
        <Script id={Math.random()?.toString()} strategy="lazyOnload">
          {`if (window.TamaraProductWidget) {
              window.TamaraProductWidget.init({ lang: '${
                router?.locale?.split("-")?.[0] || appState?.lang
              }', })
              window.TamaraProductWidget.render()
            }`}
        </Script>
      )}
    </>
  );
};

export default TamaraModal;
