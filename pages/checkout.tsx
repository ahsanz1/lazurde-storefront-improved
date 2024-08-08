import React, { FC, useContext, useEffect, useState } from "react";
import { PageProps } from "lib/types/common";

import { useRouter } from "next/router";
import { useCart } from "lib/utils/cart";
import { useCustomer } from "lib/middleware-apis/customers";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";

const LoadCheckout = () => {
  const { useGetCart } = useCart();
  const { data, isLoading } = useGetCart();
  const router = useRouter();
  const { customerLoginJWT } = useCustomer();

  useEffect(() => {
    (async (): Promise<any> => {
      if (isLoading) return;
      const embeddedCheckoutUrl = data?.redirect_urls?.checkout_url;
      if (!embeddedCheckoutUrl) return null;
      const route = await customerLoginJWT(embeddedCheckoutUrl);
      router.push(route);
      // embedCheckout({
      //   url: route,
      //   containerId: "checkout-frame",
      //   onSignOut: () => {
      //     router.push(`/`);
      //   },
      // });
    })();
  }, [isLoading]);

  if (isLoading) {
    return <div>loading </div>;
  }

  return <div id="checkout-frame" />;
};

const CheckoutPage: FC<PageProps> = ({}) => {
  // const { fetchGlobalComponentsByChannelAndLocale } = useXMApiHooks();

  // useEffect(() => {
  //   (async () => {
  //     const globalComponents =
  //       (await fetchGlobalComponentsByChannelAndLocale());
  //     const globalObj = getGlobalProps(globalComponents, appState?.brandEN);
  //     setPageData(globalObj);
  //   })();
  // }, [appState?.lang]);

  return (
    <>
      <LoadCheckout />
      {/* <AppContentWrapper>
        <div
          className={"component-container"}
          style={{ background: "#f2f2f2" }}
        >
          <Checkout storeLocatorProps={pageData?.storeLocatorProps} />
        </div>
      </AppContentWrapper> */}
      <BloomreachOtherPixel pageTitle="Checkout" pageType="other" />
    </>
  );
};

export default CheckoutPage;
