import {
  BrandNameTypes,
  CustomerAttributeNameTypes,
  CustomerAttributeTypes,
  XMComponent,
} from "./../types/common";
import {
  LOCATION_ID_SA,
  LAZURDE_SA_PRICE_LIST,
  LAZURDE_UAE_PRICE_LIST,
  LAZURDE_EG_PRICE_LIST,
  MISSL_SA_PRICE_LIST,
  MISSL_UAE_PRICE_LIST,
  MISSL_EG_PRICE_LIST,
  WAVES_SA_PRICE_LIST,
} from "general-config";
import { AppStateType, BrandType } from "lib/types/common";

export const brandNames: {
  lazurde: BrandType;
  missl: BrandType;
  "miss-l": BrandType;
  waves: BrandType;
  instyle: BrandType;
} = {
  lazurde: "L'azurde",
  missl: "Miss L'",
  "miss-l": "Miss L'",
  waves: "Waves",
  instyle: "Instyle",
};

export const brandNamesAR: { [key: string]: BrandType } = {
  lazurde: "لازوردى",
  missl: "مس أل",
  "miss-l": "مس أل",
  waves: "ويڤز",
  instyle: "إنستايل",
};

export const bloomReachChannelIds: { [key: string]: string } = {
  "en-sa": "lazurde-ksa---en",
  "ar-sa": "lazurde-ksa---ar",
  "en-ae": "lazurde-uae---en",
  "ar-ae": "lazurde-uae---ar",
  "en-eg": "lazurde-eg---en",
  "ar-eg": "lazurde-eg---ar",
};

export const currentBrandName = (brand: BrandNameTypes, lang: "en" | "ar") => {
  return {
    brand: lang === "ar" ? brandNamesAR?.[brand] : brandNames?.[brand],
    brandEN: brandNames?.[brand],
  };
};

export const getBrandKey = (brand: BrandType): BrandNameTypes => {
  if (
    brand?.localeCompare(brandNamesAR.lazurde) === 0 ||
    brand?.localeCompare(brandNames.lazurde) === 0
  )
    return "lazurde";
  if (
    brand?.localeCompare(brandNames.missl) === 0 ||
    brand?.localeCompare(brandNamesAR?.missl) === 0
  )
    return "missl";
  return "lazurde";
};

export const convertBrandName = (brand: BrandType, lang: "en" | "ar") => {
  if (lang === "en") {
    if (brand?.localeCompare(brandNamesAR.lazurde) === 0)
      return brandNames.lazurde;
    if (brand?.localeCompare(brandNamesAR?.missl) === 0)
      return brandNames.missl;
    if (brand?.localeCompare(brandNamesAR.waves) === 0) return brandNames.waves;
  }
  if (lang === "ar") {
    if (brand?.localeCompare(brandNames.lazurde) === 0)
      return brandNamesAR.lazurde;
    if (brand?.localeCompare(brandNames.missl) === 0)
      return brandNamesAR?.missl;
    if (brand?.localeCompare(brandNames.waves) === 0) return brandNamesAR.waves;
  }
  return brand;
};

export const getBrandByPriceListId = (priceList: string) => {
  if (
    priceList === LAZURDE_SA_PRICE_LIST ||
    priceList === LAZURDE_UAE_PRICE_LIST ||
    priceList === LAZURDE_EG_PRICE_LIST
  )
    return brandNames.lazurde;
  if (
    priceList === MISSL_SA_PRICE_LIST ||
    priceList === MISSL_UAE_PRICE_LIST ||
    priceList === MISSL_EG_PRICE_LIST
  )
    return brandNames.missl;
  if (priceList === WAVES_SA_PRICE_LIST) return brandNames.waves;
  return null;
};

export const DEFAULT_APP_STATE: AppStateType = {
  lang: "en",
  region: "sa",
  locale: "en-sa",
  brand: brandNames.lazurde,
  brandEN: brandNames.lazurde,
  locationNum: LOCATION_ID_SA,
};

export const getGlobalProps = (globalData: any, brand: string) => {
  let headerId = "";
  let storeLocatorId = "";
  switch (brand) {
    case brandNames?.lazurde:
      headerId = "lazurdeHeader";
      storeLocatorId = "lazurdeStores";
      break;
    case brandNames?.missl:
      headerId = "missLHeader";
      storeLocatorId = "missLStores";
      break;
    case brandNames?.waves:
      headerId = "wavesHeader";
      storeLocatorId = "wavesStores";
      break;

    default:
      break;
  }
  if (!globalData) return;
  if (Array.isArray(globalData) && globalData?.length < 1) return;

  const headerProps =
    (
      globalData?.find(
        (item: XMComponent) =>
          item?.id === "Header" && item?.params?.headerId === headerId
      ) || {}
    )?.params || {};
  const footerProps =
    (globalData?.find((item: XMComponent) => item?.id === "Footer") || {})
      ?.params || {};
  const storeLocatorProps =
    globalData?.flatMap((item: XMComponent): {} => {
      if (item?.id === "StoreLocator") {
        return item?.params;
      } else {
        return [];
      }
    }) || [];
  const brandSidebarProps =
    (globalData?.find((item: XMComponent) => item?.id === "BrandSideBar") || {})
      ?.params || {};

  return {
    globalData,
    headerProps,
    footerProps,
    storeLocatorProps,
    brandSidebarProps,
  };
};

export const customerAttributesIds: CustomerAttributeTypes = {
  customerTitle: 1,
  customerDateOfBirth: 2,
  customerAnniversaryDate: 3,
  customerNewsletterSubscription: 4,
  customerDefaultAddressId: 5,
  csutomerCartId: 7,
  ResetPWOTT: 11,
  customerGovernorate: 12,
  customerCity: 13,
  customerPostalCode: 14,
  isEmailVerified: 15,
  verificationEmailSent: 16,
  verificationEmailOTT: 17,
};

export const customerAttributesNames: CustomerAttributeNameTypes = {
  customerTitle: "title",
  customerDateOfBirth: "date_of_birth",
  customerAnniversaryDate: "anniversary_date",
  customerNewsletterSubscription: "isNewsletterSubscribed",
  customerDefaultAddressId: "Customer Default Address ID",
  csutomerCartId: "Cart ID",
  ResetPWOTT: "ResetPW_OTT",
  customerGovernorate: "My Detail Governorate",
  customerCity: "My Detail City",
  customerPostalCode: "My Detail Postal Code",
  isEmailVerified: "isEmailVerified",
  verificationEmailSent: "verificationEmailSent",
  verificationEmailOTT: "verificationEmailOTT",
  newsletterSubscriptionTimestamp: "newsletterSubscriptionTimestamp",
};

export const BR_HP_REDUNDANT_DOCUMENTS = [
  "lazurde-investor-relations",
  "store-locations",
  "contact-us",
  "about-us",
  "lazurde-policies",
  "order",
  "clarity",
  "carat",
  "brand-cards-document",
];
export const BR_HP_REDUNDANT_IMAGE_SETS = [
  "in-press.svg",
  "ir-home.svg",
  "fact-sheet.svg",
  "image-pdf.png",
  "prospectus.svg",
  "financial-information.svg",
  "stock-information.svg",
  "dividends.svg",
  "announcements.svg",
  "financial-calender.svg",
  "email-subscription.svg",
  "corporate-governance.svg",
  "contact-ir.svg",
  "post-one.png",
  "post-two.png",
  "post-three.png",
  "post-four.png",
  "brandOne.png",
  "brandTwo.png",
  "brandThree.png",
  "Lazurde Instyle.svg",
];

export const BR_HP_REDUNDANT_HREFS = [
  "/blog/diamond-buying-guide",
  "/miss-l",
  "/about-us",
];

export const BR_MISS_L_HP_REDUNDANT_DOCUMENTS = [
  ...BR_HP_REDUNDANT_DOCUMENTS,
  "home",
];

export const BR_MISS_L_HP_REDUNDANT_HREFS = BR_HP_REDUNDANT_HREFS.filter(
  (href) => href !== "/miss-l"
);

export const BR_MISS_L_PLP_REDUNDANT_DOCUMENTS = [
  "index",
  "home",
  ...BR_HP_REDUNDANT_DOCUMENTS,
];
export const BR_MISS_L_PLP_REDUNDANT_IMAGE_SETS = [
  ...BR_HP_REDUNDANT_IMAGE_SETS,
];

export const BR_MISSL_PDP_REDUNDANT_DOCUMENTS = [
  ...BR_MISS_L_PLP_REDUNDANT_DOCUMENTS,
];
export const BR_MISS_L_PDP_REDUNDANT_IMAGE_SETS = [
  ...BR_HP_REDUNDANT_IMAGE_SETS,
];

export const BR_PDP_REDUNDANT_DOCUMENTS = [
  "home",
  "index",
  ...BR_HP_REDUNDANT_DOCUMENTS,
];

export const BR_PDP_REDUNDANT_IMAGE_SETS = [...BR_HP_REDUNDANT_IMAGE_SETS];

/**
 * NOTE: Redundant translation namespaces removal is paused for now as it requires
 * careful removal of translation namespaces, creation of new namespaces with relevant content
 * only & loading those specific namespaces in across all pages in different components
 */

// export const HP_REDUNDANT_NAMESPACES = [
//   "SaudiGovernorate",
//   "UAEGovernorate",
//   "EgyptGovernorate",
//   "SaudiCityData",
// ];

export const findProducts: any = [{
  img: {
    mobileImgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/image-215.png",
    imgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/dropdown-menu-lazurde.jpg",
    altText: ""
  },
  logo: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/brands/lazurde-white.svg",
  ctaText: "Shop All",
  brand: "lazurde",
},
{
  img: {
    mobileImgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/image-216.png",
    imgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/dropdown-menu-miss-l.jpg",
    altText: ""
  },
  logo: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/brands/missl-white.png",
  ctaText: "Shop All",
  brand: "missl",
},
{
  img: {
    mobileImgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/image-217.png",
    imgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/dropdown-menu-waves.jpg",
    altText: ""
  },
  logo: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/brands/waves-white.svg",
  ctaText: "Shop All",
  brand: "waves",

},
{
  img: {
    mobileImgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/image-218.png",
    imgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/404-image/dropdown-menu-instyle.jpg",
    altText: ""
  },
  logo: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/brands/instyle-white.svg",
  ctaText: "Shop All",
  brand: "instyle",
},
]

export const error500Img = { imgUrl: "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/output-onlinepngtools.png", altText: "Error 500" }
