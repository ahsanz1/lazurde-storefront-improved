import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "lib/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorBoundary from "components/common/error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HOTJAR_SITE_ID, HOTJAR_VERSION } from "general-config";
import Script from "next/script";

function LazurdeApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const scrollToTop = () => {
      if (!window?.location?.href?.includes("page")) {
        document.documentElement.scrollTo(0, 0);
      }
      history.scrollRestoration = "auto";
    };

    document.documentElement.dir =
      router?.locale?.split("-")[0] === "en" ? "ltr" : "rtl";

    router.events.on("routeChangeComplete", scrollToTop);
    const timeoutId = setTimeout(async () => {
      const serviceWorker = (await import("../service-worker")).default;
      serviceWorker();
      const Hotjar = await (await import("@hotjar/browser")).default;
      Hotjar.init(Number(HOTJAR_SITE_ID), Number(HOTJAR_VERSION));
    }, 10000);

    return () => {
      router.events.off("routeChangeComplete", scrollToTop);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ContextProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
          <Script
            id="tangiblee-script"
            strategy="lazyOnload"
            src="https://cdn.tangiblee.com/integration/5.0/managed/lazurde.com/revision_1/variation_original/tangiblee-bundle.min.js"
          />
        </ErrorBoundary>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default LazurdeApp;
