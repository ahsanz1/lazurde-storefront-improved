import React from "react";
import AppContentWrapper from "../components/common/app-content-wrapper";
import Head from "next/head";
import CheckoutGuestUserAuthForm from "components/common/checkout-guestuser-form";
import AnimationWrapper from "components/common/ui/animation-wrapper";

export default function CheckoutForm() {
  return (
    <>
      {/* <HeaderSEO host={} /> */}
      <Head>
        <title>
          L&apos;azurde | Luxury Jewelry, Gifts &amp; Accessories |
          L&apos;AZURDE
        </title>
      </Head>
      <AppContentWrapper>
        <AnimationWrapper lazyLoadThreshold={0.1} animationName="slide-up">
          <CheckoutGuestUserAuthForm />
        </AnimationWrapper>
      </AppContentWrapper>
    </>
  );
}
