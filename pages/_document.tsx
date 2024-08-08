/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { GTM_KEY } from "general-config";

class LazurdeDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale;
    return { ...initialProps, locale };
  }
  render() {
    return (
      <Html>
        <Head>
          <>
            {/* <script
              async
              src="https://cdn.tangiblee.com/integration/5.0/managed/lazurde.com/revision_1/variation_original/tangiblee-bundle.min.js"
            ></script> */}
            <script
              defer={true}
              dangerouslySetInnerHTML={{
                __html: `(function (w, d, s, l, i) {
                setTimeout(() => {
                  w[l] = w[l] || [];
                  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                  var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                }, 10000);
              })(window, document, "script", "dataLayer", "${GTM_KEY}");`,
              }}
            ></script>
          </>

          {/* <style
            dangerouslySetInnerHTML={{
              __html: `</style>
              <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
              media="print"
              onload="this.media = 'all'"
            />
            <style>`,
            }}
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>
              <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
              media="print"
              onload="this.media = 'all'"
            />
            <style>`,
            }}
          ></style>

          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
              rel="stylesheet"
              type="text/css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript> */}
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_KEY}`}
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            ></iframe>
          </noscript>
          <Main />
          <div id="portal" />
          <iframe id="logout-frame" hidden />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LazurdeDocument;
