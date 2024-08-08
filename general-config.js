export const getCurrentDomain = () => {
  return "/api";
};

export const getPixelEnv = () => {
  if (typeof window === "undefined") return;
  if (window.location.href.includes("localhost")) return "true";
  if (window.location.href.includes("dev")) return "true";
  if (window.location.href.includes("qa")) return "true";
  if (window.location.href.includes("uat")) return "true";
  return "false";
};

export const getBloomreachDomainKey = () => {
  if (typeof window === "undefined") return;
  if (window.location.href.includes("en-sa"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_SA;
  if (window.location.href.includes("ar-sa"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_SA;

  if (window.location.href.includes("en-ae"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_AE;
  if (window.location.href.includes("ar-ae"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_AE;

  if (window.location.href.includes("en-eg"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_EG;
  if (window.location.href.includes("ar-eg"))
    return process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_EG;
};

export const bloomreachDomainKeys = {
  "en-sa": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_SA,
  "ar-sa": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_SA,

  "en-ae": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_AE,
  "ar-ae": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_AE,

  "en-eg": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_EN_EG,
  "ar-eg": process.env.NEXT_PUBLIC_BR_DOMAIN_KEY_AR_EG,
};

export const getRegionBasedEnvVariables = () => {
  // DO NOT USE THIS FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  if (typeof window === "undefined") {
    const isDev = true;
    return {
      BC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_SA,
      BC_API_DOMAIN: process.env.NEXT_PUBLIC_API_PATH_SA,
      BC_HASH: process.env.NEXT_PUBLIC_BC_HASH_SA,
      BC_CHANNEL_ID: process.env.NEXT_PUBLIC_BC_CHANNEL_ID_SA,
      BC_GRAPHQL_API_DOMAIN: process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_SA,
      BC_GRAPHQL_CI_TOKEN: process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_SA,
      BC_GRAPHQL_API_TOKEN: isDev
        ? process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_SA
        : process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_SA,
      VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_KSA,
      VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_KSA,
      VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_KSA,
    };
  }
  const path = window?.location?.pathname?.split("/")[1]?.split("-")[1] || "sa";
  const isDev =
    window.location.href.includes("dev") ||
    window.location.href.includes("localhost");
  switch (path) {
    case "ae":
      return {
        BC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_UAE,
        BC_API_DOMAIN: process.env.NEXT_PUBLIC_API_PATH_UAE,
        BC_HASH: process.env.NEXT_PUBLIC_BC_HASH_UAE,
        BC_CHANNEL_ID: process.env.NEXT_PUBLIC_BC_CHANNEL_ID_UAE,
        BC_GRAPHQL_API_DOMAIN:
          process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_UAE,
        BC_GRAPHQL_CI_TOKEN: process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_UAE,
        BC_GRAPHQL_API_TOKEN: isDev
          ? process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_UAE
          : process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_UAE,
        VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_UAE,
        VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_UAE,
        VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_UAE,
      };

    case "eg":
      return {
        BC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_EG,
        BC_API_DOMAIN: process.env.NEXT_PUBLIC_API_PATH_EG,
        BC_HASH: process.env.NEXT_PUBLIC_BC_HASH_EG,
        BC_CHANNEL_ID: process.env.NEXT_PUBLIC_BC_CHANNEL_ID_EG,
        BC_GRAPHQL_API_DOMAIN: process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_EG,
        BC_GRAPHQL_CI_TOKEN: process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_EG,
        BC_GRAPHQL_API_TOKEN: isDev
          ? process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_EG
          : process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_EG,
        VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_EGP,
        VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_EGP,
        VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_EGP,
      };

    default:
      return {
        BC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_SA,
        BC_API_DOMAIN: process.env.NEXT_PUBLIC_API_PATH_SA,
        BC_HASH: process.env.NEXT_PUBLIC_BC_HASH_SA,
        BC_CHANNEL_ID: process.env.NEXT_PUBLIC_BC_CHANNEL_ID_SA,
        BC_GRAPHQL_API_DOMAIN: process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_SA,
        BC_GRAPHQL_CI_TOKEN: process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_SA,
        BC_GRAPHQL_API_TOKEN: isDev
          ? process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_SA
          : process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_SA,
        VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_KSA,
        VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_KSA,
        VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_KSA,
      };
  }
};

export const BR_CMS_DOMAIN = process.env.NEXT_PUBLIC_BR_CMS_DOMAIN;

export const BLOOMREACH_ACCOUNT_ID = process.env.NEXT_PUBLIC_BR_ACC_ID;

export const BC_GRAPHQL_API_DOMAIN_AE =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_UAE;
export const BC_GRAPHQL_API_DOMAIN_SA =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_SA;
export const BC_GRAPHQL_API_DOMAIN_EG =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_EG;

export const BS_API_METAFIELDS_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_METAFIELDS_API_ACCESS_TOKEN;

export const BC_GRAPHQL_CI_TOKEN_SA =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_SA;
export const BC_GRAPHQL_CI_TOKEN_AE =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_UAE;
export const BC_GRAPHQL_CI_TOKEN_EG =
  process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_EG;

export const isDev =
  typeof window !== "undefined"
    ? window?.location?.href?.includes("dev") ||
      window?.location?.href?.includes("localhost") ||
      window?.location?.href?.includes("qa") ||
      window?.location?.href?.includes("uat")
    : null;

const isTokenDev =
  typeof window !== "undefined"
    ? window?.location?.href?.includes("sf-dev") ||
      window?.location?.href?.includes("localhost")
    : null;

export const bestSellerIds = {
  lazurde: {
    "en-sa": process.env.NEXT_PUBLIC_BEST_SELLERS_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_BEST_SELLERS_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_BEST_SELLERS_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_BEST_SELLERS_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_BEST_SELLERS_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_BEST_SELLERS_AR_EG,
  },
  missl: {
    "en-sa": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_MISSL_BEST_SELLERS_AR_EG,
  },
};

export const customersAlsoBuyIds = {
  lazurde: {
    "en-sa": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_CUSTOEMRS_ALSO_BUY_AR_EG,
  },
  missl: {
    "en-sa": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_MISSL_CUSTOEMRS_ALSO_BUY_AR_EG,
  },
};

export const youWillAlsoBuyIds = {
  lazurde: {
    "en-sa": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_YOU_WILL_ALSO_LIKE_AR_EG,
  },
  missl: {
    "en-sa": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_MISSL_YOU_WILL_ALSO_LIKE_AR_EG,
  },
};

export const whatsTrending = {
  lazurde: {
    "en-sa": process.env.NEXT_PUBLIC_WHATS_TRENDING_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_WHATS_TRENDING_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_WHATS_TRENDING_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_WHATS_TRENDING_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_WHATS_TRENDING_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_WHATS_TRENDING_AR_EG,
  },
  missl: {
    "en-sa": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_EN_SA,
    "ar-sa": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_AR_SA,
    "en-ae": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_EN_AE,
    "ar-ae": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_AR_AE,
    "en-eg": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_EN_EG,
    "ar-eg": process.env.NEXT_PUBLIC_MISSL_WHATS_TRENDING_AR_EG,
  },
};

export const tokens = {
  sa: {
    BC_GRAPHQL_CI_TOKEN:
      process.env.BC_GRAPHQL_CI_TOKEN_SA ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_SA,
    BC_GRAPHQL_API_TOKEN: isTokenDev
      ? process.env.BC_GRAPHQL_API_TOKEN_SA ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_SA
      : process.env.BC_GRAPHQL_API_TOKEN_QA_SA ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_SA,
    BC_GRAPHQL_API_DOMAIN:
      process.env.BC_GRAPHQL_API_DOMAIN_SA ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_SA,
    BC_API_ACCESS_TOKEN:
      process.env.BC_API_ACCESS_TOKEN_SA ||
      process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_SA,
    BC_API_DOMAIN:
      process.env.BC_API_DOMAIN_SA || process.env.NEXT_PUBLIC_API_PATH_SA,
    BC_CHANNEL_ID:
      process.env.BC_CHANNEL_ID_SA || process.env.NEXT_PUBLIC_BC_CHANNEL_ID_SA,
    BC_CLIENT_ID:
      process.env.CLIENT_ID_SA || process.env.NEXT_PUBLIC_CLIENT_ID_SA,
    BC_CLIENT_SECRET:
      process.env.CLIENT_SECRET_SA || process.env.NEXT_PUBLIC_CLIENT_SECRET_SA,
    BC_STORE_URL:
      process.env.STORE_URL_SA || process.env.NEXT_PUBLIC_STORE_URL_SA,
    BC_STORE_HASH: process.env.BC_HASH_SA || process.env.NEXT_PUBLIC_BC_HASH_SA,
    VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_KSA,
    VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_KSA,
    VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_KSA,
  },
  ae: {
    BC_GRAPHQL_CI_TOKEN:
      process.env.BC_GRAPHQL_CI_TOKEN_UAE ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_UAE,
    BC_GRAPHQL_API_TOKEN: isTokenDev
      ? process.env.BC_GRAPHQL_API_TOKEN_AE ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_UAE
      : process.env.BC_GRAPHQL_API_TOKEN_QA_AE ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_UAE,
    BC_GRAPHQL_API_DOMAIN:
      process.env.BC_GRAPHQL_API_DOMAIN_AE ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_UAE,
    BC_API_ACCESS_TOKEN:
      process.env.BC_API_ACCESS_TOKEN_AE ||
      process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_UAE,
    BC_API_DOMAIN:
      process.env.BC_API_DOMAIN_AE || process.env.NEXT_PUBLIC_API_PATH_UAE,
    BC_CHANNEL_ID:
      process.env.BC_CHANNEL_ID_UAE ||
      process.env.NEXT_PUBLIC_BC_CHANNEL_ID_UAE,
    BC_CLIENT_ID:
      process.env.CLIENT_ID_AE || process.env.NEXT_PUBLIC_CLIENT_ID_AE,
    BC_CLIENT_SECRET:
      process.env.CLIENT_SECRET_AE || process.env.NEXT_PUBLIC_CLIENT_SECRET_AE,
    BC_STORE_URL:
      process.env.STORE_URL_AE || process.env.NEXT_PUBLIC_STORE_URL_AE,
    BC_STORE_HASH:
      process.env.BC_HASH_UAE || process.env.NEXT_PUBLIC_BC_HASH_UAE,
    VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_UAE,
    VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_UAE,
    VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_UAE,
  },
  eg: {
    BC_GRAPHQL_CI_TOKEN:
      process.env.BC_GRAPHQL_CI_TOKEN_EG ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_CI_TOKEN_EG,
    BC_GRAPHQL_API_TOKEN: isTokenDev
      ? process.env.BC_GRAPHQL_API_TOKEN_EG ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_EG
      : process.env.BC_GRAPHQL_API_TOKEN_QA_EG ||
        process.env.NEXT_PUBLIC_BC_GRAPHQL_API_TOKEN_QA_EG,
    BC_GRAPHQL_API_DOMAIN:
      process.env.BC_GRAPHQL_API_DOMAIN_EG ||
      process.env.NEXT_PUBLIC_BC_GRAPHQL_API_DOMAIN_EG,
    BC_API_ACCESS_TOKEN:
      process.env.BC_API_ACCESS_TOKEN_EG ||
      process.env.NEXT_PUBLIC_API_ACCESS_TOKEN_EG,
    BC_API_DOMAIN:
      process.env.BC_API_DOMAIN_EG || process.env.NEXT_PUBLIC_API_PATH_EG,
    BC_CHANNEL_ID:
      process.env.BC_CHANNEL_ID_EG || process.env.NEXT_PUBLIC_BC_CHANNEL_ID_EG,
    BC_CLIENT_ID:
      process.env.CLIENT_ID_EG || process.env.NEXT_PUBLIC_CLIENT_ID_EG,
    BC_CLIENT_SECRET:
      process.env.CLIENT_SECRET_EG || process.env.NEXT_PUBLIC_CLIENT_SECRET_EG,
    BC_STORE_URL:
      process.env.STORE_URL_EG || process.env.NEXT_PUBLIC_STORE_URL_EG,
    BC_STORE_HASH: process.env.BC_HASH_EG || process.env.NEXT_PUBLIC_BC_HASH_EG,
    VW_PROJECT_TOKEN: process.env.NEXT_PUBLIC_VW_PROJECT_TOKEN_EGP,
    VW_PUBLIC_KEY: process.env.NEXT_PUBLIC_VW_PUBLIC_KEY_EGP,
    VW_PRIVATE_KEY: process.env.NEXT_PUBLIC_VW_PRIVATE_KEY_EGP,
  },
};

export const KLAVIYO_API_DOMAIN = process.env.NEXT_PUBLIC_KLAVIYO_DOMAIN;
export const KLAVIYO_API_KEY =
  process.env.KLAVIYO_API_KEY || process.env.NEXT_PUBLIC_KLAVIYO_API_KEY;

export const BR_PRODUCT_SEARCH_DOMAIN =
  process.env.NEXT_PUBLIC_BR_PRODUCT_SEARCH_DOMAIN;
export const BR_GET_SUGGESTIONS = process.env.NEXT_PUBLIC_BR_GET_SUGGESTIONS;

export const BC_CHANNEL_ID = getRegionBasedEnvVariables().BC_CHANNEL_ID;

export const NEXT_PUBLIC_CHANNEL_SA = 12;
export const NEXT_PUBLIC_CHANNEL_UAE = 13;
export const NEXT_PUBLIC_CHANNEL_EG = 14;

export const EXTERNAL_DOMAIN =
  getCurrentDomain() || process.env.NEXT_PUBLIC_EXTERNAL_DOMAIN;

export const getRegionBasedReviewsEnvVariable = {
  sa: {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_STAMPED_USERNAME,
    PRIVATE_KEY: process.env.NEXT_PUBLIC_STAMPED_PASSWORD,
    STORE_HASH: process.env.NEXT_PUBLIC_STAMPED_STORE_HASH,
  },
  ae: {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_STAMPED_USERNAME_AE,
    PRIVATE_KEY: process.env.NEXT_PUBLIC_STAMPED_PASSWORD_AE,
    STORE_HASH: process.env.NEXT_PUBLIC_STAMPED_STORE_HASH_AE,
  },
  eg: {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_STAMPED_USERNAME_EG,
    PRIVATE_KEY: process.env.NEXT_PUBLIC_STAMPED_PASSWORD_EG,
    STORE_HASH: process.env.NEXT_PUBLIC_STAMPED_STORE_HASH_EG,
  },
};

export const GOOGLE_TRANSLATE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export const FLOW_OMS_PROMOTION_DOMAIN =
  process.env.NEXT_PUBLIC_FLOW_OMS_PROMOTION_DOMAIN;
export const FLOW_OMS_XAP_TOKEN = process.env.NEXT_PUBLIC_FLOW_OMS_XAP_TOKEN;
export const FLOW_OMS_DOMAIN = process.env.NEXT_PUBLIC_FLOW_OMS_DOMAIN;
export const FLOW_OMS_LZD_BRAND_ID =
  process.env.NEXT_PUBLIC_FLOW_OMS_LZD_BRAND_ID;
export const FLOW_OMS_PROD_BRAND_ID =
  process.env.NEXT_PUBLIC_FLOW_OMS_PROD_BRAND_ID;

const getFlowOmsBrandId = () => {
  if (typeof window === "undefined") return;
  const isSandboxEnv =
    window.location.href.includes("qa") ||
    window.location.href.includes("localhost");

  const FLOW_OMS_BRAND_ID = isSandboxEnv
    ? FLOW_OMS_LZD_BRAND_ID
    : FLOW_OMS_PROD_BRAND_ID;

  return FLOW_OMS_BRAND_ID;
};

export const FLOW_OMS_BRAND_ID = getFlowOmsBrandId() || FLOW_OMS_PROD_BRAND_ID;

export const CHECKOUT_DOMAIN =
  getCurrentDomain() || process.env.NEXT_PUBLIC_EU_SBX_CHECKOUT_V2_DOMAIN;
export const CHECKOUT_SECRET_KEY =
  process.env.CHECKOUT_SECRET_KEY ||
  process.env.NEXT_PUBLIC_CHECKOUT_SECRET_KEY;
export const CHECKOUT_PUBLIC_KEY = process.env.NEXT_PUBLIC_CHECKOUT_PUBLIC_KEY;

export const TABBY_MERCHANT_CODE_SA =
  process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE_SA;
export const TABBY_MERCHANT_CODE_AE =
  process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE_AE;
export const TABBY_MERCHANT_CODE_EG =
  process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE_EG;

export const TAMARA_CHECKOUT_DOMAIN =
  process.env.NEXT_PUBLIC_CHECKOUT_DOMAIN_SB;
export const TAMARA_CHECKOUT_SESSION =
  process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_SESSION;
export const TAMARA_GET_PAYMENT_TYPES_TOKEN =
  process.env.NEXT_PUBLIC_TAMARA_COUNTRY_TOKEN;

export const CHECKOUT_INSTRUMENT_DOMAIN =
  process.env.NEXT_PUBLIC_INSTRUMENT_DOMAIN;

export const LOCATION_ID_AE = process.env.NEXT_PUBLIC_LOCATION_ID_AE;
export const LOCATION_ID_SA = process.env.NEXT_PUBLIC_LOCATION_ID_SA;
export const LOCATION_ID_EG = process.env.NEXT_PUBLIC_LOCATION_ID_EG;

export const INSTAGRAM_APP_ID = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID;
export const INSTAGRAM_APP_SECRET =
  process.env.NEXT_PUBLIC_INSTAGRAM_APP_SECRET;
export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const LAZURDE_SA_PRICE_LIST =
  process.env.NEXT_PUBLIC_LAZURDE_SA_PRICE_LIST;
export const LAZURDE_UAE_PRICE_LIST =
  process.env.NEXT_PUBLIC_LAZURDE_UAE_PRICE_LIST;
export const LAZURDE_EG_PRICE_LIST =
  process.env.NEXT_PUBLIC_LAZURDE_EG_PRICE_LIST;
export const WAVES_SA_PRICE_LIST = process.env.NEXT_PUBLIC_WAVES_SA_PRICE_LIST;
export const MISSL_SA_PRICE_LIST = process.env.NEXT_PUBLIC_MISSL_SA_PRICE_LIST;
export const MISSL_UAE_PRICE_LIST =
  process.env.NEXT_PUBLIC_MISSL_UAE_PRICE_LIST;
export const MISSL_EG_PRICE_LIST = process.env.NEXT_PUBLIC_MISSL_EG_PRICE_LIST;

export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export const VALU_API_KEY = process.env.NEXT_PUBLIC_VALU_API_KEY;
export const VALU_API_DOMAIN = process.env.NEXT_PUBLIC_VALU_DOMAIN;
export const VALU_INTEGRATION_ID = process.env.NEXT_PUBLIC_VALU_INTEGRATION_ID;
export const VALU_IFRAME_ID = process.env.NEXT_PUBLIC_VALU_IFRAME_ID;

export const APPLE_PAY_MERCHANT_ID =
  process.env.NEXT_PUBLIC_APPLE_PAY_SBX_MERCHANT_ID;
export const APPLE_PAY_DOMAIN_DEV =
  process.env.NEXT_PUBLIC_APPLE_PAY_SBX_DOMAIN_DEV;
export const APPLE_PAY_DOMAIN_QA =
  process.env.NEXT_PUBLIC_APPLE_PAY_SBX_DOMAIN_QA;
export const APPLE_PAY_DOMAIN_UAT =
  process.env.NEXT_PUBLIC_APPLE_PAY_SBX_DOMAIN_UAT;
export const APPLE_PAY_SERVER_URL =
  process.env.NEXT_PUBLIC_APPLE_PAY_SERVER_URL;

export const CHECKOUT_COM_MW_URL_DEV =
  process.env.NEXT_PUBLIC_CHECKOUT_COM_MW_URL_DEV;
export const CHECKOUT_COM_MW_URL_STAGE =
  process.env.NEXT_PUBLIC_CHECKOUT_COM_MW_URL_STAGE;
export const CHECKOUT_COM_MW_URL_PROD =
  process.env.NEXT_PUBLIC_CHECKOUT_COM_MW_URL_PROD;

export const LAZURDE_KSA_CHANNEL_ID =
  process.env.NEXT_PUBLIC_LAZURDE_KSA_CHANNEL_ID;

export const HOTJAR_SITE_ID = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID;
export const HOTJAR_VERSION = process.env.NEXT_PUBLIC_HOTJAR_VERSION;

export const LAZURDE_ENV = process.env.NEXT_PUBLIC_ENV;

export const categoryIdByRegion = {
  sa: {
    root: Number(process.env.NEXT_PUBLIC_ROOT_SA),
    necklace: Number(process.env.NEXT_PUBLIC_NECKLACE_SA),
    rings: Number(process.env.NEXT_PUBLIC_RINGS_SA),
    earrings: Number(process.env.NEXT_PUBLIC_EARRINGS_SA),
    bracelets: Number(process.env.NEXT_PUBLIC_BRACELETS_SA),
    sets: Number(process.env.NEXT_PUBLIC_SETS_SA),
    gold: Number(process.env.NEXT_PUBLIC_GOLD_SA),
    gfml: Number(process.env.NEXT_PUBLIC_GF_ML_SA),
    gfmld: Number(process.env.NEXT_PUBLIC_GF_ML_D_SA),
    gfdiam: Number(process.env.NEXT_PUBLIC_GF_DIAM_SA),
    goldcoinsbars: Number(process.env.NEXT_PUBLIC_GOLD_COINS_BARS_SA),
    goldbar: Number(process.env.NEXT_PUBLIC_GOLD_BAR_SA),
    goldcoin: Number(process.env.NEXT_PUBLIC_GOLD_COIN_SA),
    diamgfksa: Number(process.env.NEXT_PUBLIC_DIAM_GF_KSA_SA),
    ingf: Number(process.env.NEXT_PUBLIC_IN_GF_SA),
    mlgfksa: Number(process.env.NEXT_PUBLIC_ML_GF_KSA_SA),
    shopallgfksa: Number(process.env.NEXT_PUBLIC_SHOPALL_GF_KSA_SA),
    wavesgf: Number(process.env.NEXT_PUBLIC_WAVES_GF_SA),
  },
  ae: {
    root: Number(process.env.NEXT_PUBLIC_ROOT_AE),
    necklace: Number(process.env.NEXT_PUBLIC_NECKLACE_AE),
    rings: Number(process.env.NEXT_PUBLIC_RINGS_AE),
    earrings: Number(process.env.NEXT_PUBLIC_EARRINGS_AE),
    bracelets: Number(process.env.NEXT_PUBLIC_BRACELETS_AE),
    sets: Number(process.env.NEXT_PUBLIC_SETS_AE),
    gold: Number(process.env.NEXT_PUBLIC_GOLD_AE),
    kids: Number(process.env.NEXT_PUBLIC_KIDS_AE),
    anklets: Number(process.env.NEXT_PUBLIC_ANKLETS_AE),
    gfml: Number(process.env.NEXT_PUBLIC_GF_ML_AE),
    gfmld: Number(process.env.NEXT_PUBLIC_GF_ML_D_AE),
    goldcoinsbars: Number(process.env.NEXT_PUBLIC_GOLD_COINS_BARS_AE),
    goldbar: Number(process.env.NEXT_PUBLIC_GOLD_BAR_AE),
    goldcoin: Number(process.env.NEXT_PUBLIC_GOLD_COIN_AE),
    diamgfksa: Number(process.env.NEXT_PUBLIC_DIAM_GF_KSA_AE),
    ingf: Number(process.env.NEXT_PUBLIC_IN_GF_AE),
    mlgfksa: Number(process.env.NEXT_PUBLIC_ML_GF_KSA_AE),
    shopallgfksa: Number(process.env.NEXT_PUBLIC_SHOPALL_GF_KSA_AE),
  },
  eg: {
    root: Number(process.env.NEXT_PUBLIC_ROOT_EG),
    necklace: Number(process.env.NEXT_PUBLIC_NECKLACE_EG),
    rings: Number(process.env.NEXT_PUBLIC_RINGS_EG),
    earrings: Number(process.env.NEXT_PUBLIC_EARRINGS_EG),
    bracelets: Number(process.env.NEXT_PUBLIC_BRACELETS_EG),
    sets: Number(process.env.NEXT_PUBLIC_SETS_EG),
    gold: Number(process.env.NEXT_PUBLIC_GOLD_EG),
    gfml: Number(process.env.NEXT_PUBLIC_GF_ML_EG),
    gfmld: Number(process.env.NEXT_PUBLIC_GF_ML_D_EG),
    gfdiam: Number(process.env.NEXT_PUBLIC_GF_DIAM_EG),
    goldcoinsbars: Number(process.env.NEXT_PUBLIC_GOLD_COINS_BARS_EG),
    goldbar: Number(process.env.NEXT_PUBLIC_GOLD_BAR_EG),
    goldcoin: Number(process.env.NEXT_PUBLIC_GOLD_COIN_EG),
    diamgfksa: Number(process.env.NEXT_PUBLIC_DIAM_GF_KSA_EG),
    ingf: Number(process.env.NEXT_PUBLIC_IN_GF_EG),
    mlgfksa: Number(process.env.NEXT_PUBLIC_ML_GF_KSA_EG),
    shopallgfksa: Number(process.env.NEXT_PUBLIC_SHOPALL_GF_KSA_EG),
    goldbyweight: Number(process.env.NEXT_PUBLIC_GOLD_BY_WEIGHT_EG),
    weddingband: Number(process.env.NEXT_PUBLIC_WEDDING_BAND_EG),
  },
};

export const GTM_KEY = process.env.NEXT_PUBLIC_GTM_KEY;

export const CRONITOR_CLIENT_KEY = process.env.NEXT_PUBLIC_CRONITOR_CLIENT_KEY;

export const FEEDBACK_SMTP_HOST = process.env.NEXT_PUBLIC_SMTP_HOST;
export const FEEDBACK_SMTP_PORT = process.env.NEXT_PUBLIC_SMTP_PORT;
export const FEEDBACK_FORM_SMTP_USER = process.env.NEXT_PUBLIC_SMTP_USER;
export const FEEDBACK_FORM_SMTP_PASSWORD =
  process.env.NEXT_PUBLIC_SMTP_PASSWORD;
