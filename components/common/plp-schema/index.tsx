import React, { useContext } from "react";
import {
  BrComponentContext,
  BrPageContext,
  BrProps,
} from "@bloomreach/react-sdk";
import Script from "next/script";

const PlpSchema = () => {
  const page: any = useContext(BrPageContext);
  const component: any = useContext(BrComponentContext);
  const plpShcemaFaqs = component?.getContent(page)?.faqQuestionAnswer;

  return (
    <>
      {plpShcemaFaqs ? (
        <Script
          id="faq-schema"
          strategy="lazyOnload"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        
        ${plpShcemaFaqs?.map((faq: any) => {
          return `{
            "@type": "Question",
            "name": "${faq?.question}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${faq?.answer}"
            }
          }`;
        })}
      ]}`,
          }}
        />
      ) : null}
    </>
  );
};

export default PlpSchema;
