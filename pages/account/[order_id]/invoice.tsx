import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import HeaderSEO from "components/common/head";
import { getPageProps } from "lib/utils/pageLoadProps";
import dynamic from "next/dynamic";

const DynamicOrderInvoice = dynamic(
  () => import("components/common/order-invoice"),
  { ssr: false }
);

const InvoiceView: any = () => {
  const pageProps = getPageProps({ header: "" });

  if (typeof window === "undefined") return null;

  return (
    <>
      <HeaderSEO host={pageProps?.host} />
      {/* {order && ( */}
      <BlobProvider document={<DynamicOrderInvoice />}>
        {({ blob, url, loading, error }) => {
          return (
            <>
              <iframe src={url} title="Invoice" className="iframe-container" />
              <style>{`
        .iframe-container {
          width: 100vw; 
          height: 100vh;
          border: none; 
        }
      `}</style>
            </>
          );
        }}
      </BlobProvider>
      {/* )} */}
    </>
  );
};

export default InvoiceView;
