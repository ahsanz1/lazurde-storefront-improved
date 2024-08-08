// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const nextTranslate = require("next-translate");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});
const { withSentryConfig } = require("@sentry/nextjs"); 

const moduleExports = {
  reactStrictMode: true,
  ...nextTranslate(),
  httpAgentOptions: {
    keepAlive: true,
  },
  usedExports: true,
  sideEffects: true,
  innerGraph: true,

  experimental: {
    scrollRestoration: true,
    // urlImports: [
    //   "https://unpkg.com/trillion-widget@0.25.0/build-lib/trillion-widget.js",
    //   "https://unpkg.com/trillion-viewer@0.25.0/build-lib/trillion-viewer.js",
    // ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cdn.lazurde.com",
      "cdn11.bigcommerce.com",
      "test-lazurde.bloomreach.io",
      "lazurde.bloomreach.io",
    ],
    unoptimized: true,
  },

  sentry: {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
      //Document-Policy header for all page for enabling sentry profiler
      {
        source: "/:path*",
        headers: [
          {
            key: "Document-Policy",
            value: "js-profiling",
          },
        ],
      },
    ];
  },

  // webpack: (config, { webpack }) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       __SENTRY_DEBUG__: false,
  //       __SENTRY_TRACING__: false,
  //       __RRWEB_EXCLUDE_IFRAME__: true,
  //       __RRWEB_EXCLUDE_SHADOW_DOM__: true,
  //       __SENTRY_EXCLUDE_REPLAY_WORKER__: true,
  //     })
  //   );
  //   console.log('NEXT CONFIG: ', config)
  //   return config;
  // },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

// Injected content via Sentry wizard below

module.exports = withSentryConfig(withBundleAnalyzer(moduleExports), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,
  org: "lazurde-storefront-7f",
  project: "lazurde",
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
});
