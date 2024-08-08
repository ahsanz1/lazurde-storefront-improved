/* eslint-disable @next/next/no-sync-scripts */
import React, { useContext } from "react";
import Script from "next/script";
import { AppContext } from "lib/context";
import styles from "./tabby-card.module.scss";

const TabbyCard = ({}) => {
  const { appState, cartData } = useContext(AppContext);

  return (
    <>
      <div className={styles["tabby-wrapper"]}>
        <div
          key={appState?.region}
          className={styles["tabby-card"]}
          id="tabbyCard"
        ></div>
        <Script
          id={"1"}
          src="https://checkout.tabby.ai/tabby-card.js"
          strategy="lazyOnload"
        ></Script>

        <Script strategy="lazyOnload" id={Math.random().toLocaleString()}>
          {`setTimeout(() => {
          new TabbyCard({
           selector: '#tabbyCard', 
              currency: '${cartData?.currency}',
              lang: '${appState?.lang}',
              price: ${cartData?.totalAmount},
              size: 'wide',
              theme: 'black', 
              header: false
  });
        }, 500)`}
        </Script>
      </div>
    </>
  );
};

export default TabbyCard;
