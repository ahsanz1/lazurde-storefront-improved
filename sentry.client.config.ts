// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.05,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 0.01,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.001,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    // Sentry.replayIntegration({
    //   // Additional Replay configuration goes in here, for example:
    //   maskAllText: true,
    //   blockAllMedia: true,
    // }),
    new Sentry.BrowserProfilingIntegration(),
  ],

  profilesSampleRate: 0.05,

  ignoreErrors: [
    "Can't find variable: fbq",
    "fbq is not defined",
    "Service Worker script execution timed out",
    "Failed to register a ServiceWorker for scope",
    "HTMLDivElement is not a constructor",
    "Can't find variable: _AutofillCallbackHandler",
    "Invariant: attempted to hard navigate to the same URL",
    "TabbyPromo is not a constructor",
    "No identifiers allowed directly after numeric literal",
    "Script https://www.lazurde.com/service-worker.js load failed",
    "EurolandToolIntegrationObject",
    "TabbyPromo is not defined",
    "Java bridge method invocation error",
    "undefined is not an object (evaluating '__gCrWeb.instantSearch.clearHighlight')",
    "TypeError: undefined is not an object (evaluating '__gCrWeb.instantSearch.setIOSParameters')",
    "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",
    "null is not an object (evaluating 'i.insertAdjacentElement')",
    "Cannot read properties of undefined (reading 'domInteractive')",
    "Event `Event` (type=error) captured as promise rejection",
    "undefined is not an object (evaluating 's.ctaTitle')",
    "Load failed",
    "Failed to fetch",
    "undefined is not an object (evaluating 'a.L')",
    "NetworkError: Load failed",
    "AbortError: The operation was aborted.",
    "null is not an object",
    "Failed to read the 'contentDocument' property from 'HTMLIFrameElement': Blocked a frame with origin",
    "Non-Error promise rejection captured with value: undefined",
    "Cannot read properties of null (reading 'querySelector')",
    "Cannot read properties of null (reading 'src')",
    "Internal error",
    "[object Response]",
    "Cannot destructure property 'position' of 'e' as it is undefined.",
    "Cannot read property 'domInteractive' of undefined",
    "Java object is gone",
  ],
  denyUrls: [
    "https://www.tiktok.com/",
    "http://m.facebook.com/",
    "https://m.facebook.com/",
    "http://instagram.com/",
  ],
});
