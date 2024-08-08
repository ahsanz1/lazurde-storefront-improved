import { BrProps } from "@bloomreach/react-sdk";
import { Configuration, Page } from "@bloomreach/spa-sdk";
export type XMComponent = {
  id: string;
  params: { [key: string]: string };
};

export type Regions = "sa" | "ae" | "eg";

export interface ProductListingPageProps extends PageProps {
  configuration: Configuration;
  page: Page;
  locale: string;
  parentCategory: string;
  childCategory: string;
  searchTerm: string;
  url: string;
  path: string;
  currentPage: number;
  plpData: string;
  isFromCMS: boolean;
  referer: string;
  host: string;
  productData: any;
  isCollection: boolean;
  isPreview?: boolean;
}

export type navSideBar = {
  brandSideBar: boolean;
  account: boolean;
  wishlist: boolean;
  miniCart: boolean;
  miniCartTimeOut: boolean;
  language: boolean;
  isRightSideOpen: boolean;
  searchDrawer: boolean;
  drawerOpen: boolean;
};

export type ErrorObject = {
  code?: string | number;
  message: string;
  response?: {
    code?: string;
    status?: string | number;
    data?: any;
  };
};

export interface ImageType {
  url?: string;
  altText?: string;
}

type NavLinks = {
  url: string;
  linkText: string;
};

export type BrandArrType = {
  url?: string;
  altText?: string;
  label?: string;
  labelUrl?: string;
  brandImg?: string;
};

type HeaderProps = {
  headerId?: string;
  siteNavBar?: [];
  siteLogo?: ImageType;
  arabicSiteLogo?: ImageType;
  siteLogoUrl?: string;
  navLinks?: NavLinks[];
  brandImage?: ImageType;
  promoTitle?: string;
  promoLinkText?: string;
  mobilePromoLinkText?: string;
  promoLink?: string;
  promoBackground?: string;
  storeLocatorProps?: any;
};

export type StoreLocatorXMProps = {
  lazurdeStoresArray: [];
  misslStoresArray: [];
  wavesStoresArray: [];
  brandName: string;
};

export type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

export type BrandSidebarProps = {
  mainImg: ImageType;
  mainTitle: string;
  logoArr: { logoImg: ImageType }[];
  brandArr: BrandArrType[];
};

type FooterLinksType = {
  linkHeading: string;
  links: { url: string; text: string }[];
};

type iconsObjType = {
  link: string;
  icon: ImageType;
};
interface footerLogoProp {
  url: string;
  altText: string;
}

export interface FooterProps extends BrProps {
  footerLinks?: FooterLinksType[] | [];
  heading?: string;
  subHeading?: string;
  linkLabel?: string;
  linkUrl?: string;
  subscriptionText?: string;
  socialIconText?: string;
  socialLinks?: iconsObjType[];
  footerLogo?: footerLogoProp;
  footerLogoLink?: string;
  paymentLinks?: iconsObjType[];
  pageType?: string;
  pageTitle?: string;
}

export interface PageProps {
  headerProps: HeaderProps;
  headerArray: [];
  footerProps: FooterProps;
  brandSidebarProps: BrandSidebarProps;
  pageComponents?: XMComponent[];
  storeLocatorProps?: StoreLocatorXMProps[];
  globalData?: {};
  globalObj?: { [key: string]: any };
  pageDetail?: XMComponent[];
  defaultPage?: { [key: string]: [] };
  pageUrl?: string;
  menuData?: any;
  mainPageData?: any;
  pageComponentsError?: { hasError: boolean; error: string };
  globalComponentsError?: { hasError: boolean; error: string };
  configuration: any;
  page: any;
  host?: string;
}
export type BrandType =
  | `L'azurde`
  | `Miss L'`
  | `Waves`
  | "Instyle"
  | "لازوردى"
  | "مس أل"
  | "ويڤز"
  | "إنستايل";

export type BrandNameTypes =
  | "lazurde"
  | "missl"
  | "miss-l"
  | "waves"
  | "instyle";

export type LangType = "en" | "ar";
export type RegionType = "sa" | "ae" | "eg";
export type LocaleType =
  | "en-sa"
  | "en-ae"
  | "en-eg"
  | "ar-sa"
  | "ar-ae"
  | "ar-eg";

export type AppStateType = {
  brand: BrandType;
  brandEN: BrandType;
  locale?: LocaleType;
  currentLocale?: LocaleType;
  lang: LangType;
  region: RegionType;
  locationNum: number | string;
};

export type CheckoutCustomerProps = {
  email: string;
  name: string;
  phone?: {
    number: string;
    country_code: string;
  };
  metadata?: {
    coupon_code?: string;
    partner_id?: number;
  };
};

export type TokenProps = {
  type: "card";
  number: string;
  expiry_month: number;
  expiry_year: number;
  name: string;
  cvv: string;
  billing_address?: {
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    zip: string;
    country: "SA" | "EG" | "AE";
  };
  phone?: {
    number: string;
    country_code: string;
  };
};

export type InstrumentProps = {
  type: "token";
  token: string;
  account_holder?: {
    first_name?: string;
    last_name?: string;
    billing_address?: {
      address_line1: string;
      address_line2: string;
      city: string;
      state: string;
      zip: string;
      country: "SA" | "EG" | "AE";
    };
    phone?: {
      country_code: string;
      number: string;
    };
  };
  customer: {
    id: string;
    phone?: {
      country_code: string;
      number: string;
    };
    default?: boolean | string;
  };
};

export type UpdateInstrumentProps = {
  expiry_month?: number;
  expiry_year?: number;
  name?: string;
  account_holder?: {
    first_name?: string;
    last_name?: string;
    billing_address?: {
      address_line1: string;
      address_line2: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    phone?: {
      country_code: string;
      number: string;
    };
  };
  customer?: {
    id?: string;
    default: boolean;
  };
};

export type returnOrderModalTypes = {
  isCourierCollection?: boolean;
  isStoreDropOff?: boolean;
  isGiftCard?: boolean;
  isTabbyModal?: boolean;
  isPaypalModal?: boolean;
  isCodModal?: boolean;
};

type DiscountsObj = {
  discountAmount: number;
  discounts: {
    amount: number;
    priority: number;
    promoCode: string;
    promoId: string;
    promoTitle: string;
    quantity: number;
    stackable: boolean;
    type: string;
    unit: string;
    value: number;
  };
};

export interface CartItemObject {
  sku?: string;
  name?: string;
  brand?: string;
  entityId?: number;
  quantity?: number;
  id?: string;
  product_id?: number;
  variant_id?: number;
  isAvailable?: boolean;
  coupon_amount?: number;
  coupons?: [];
  discount_amount?: number;
  discounts?: [];
  extended_list_price?: number;
  extended_sale_price?: number;
  image_url?: string;
  is_mutable?: boolean;
  is_require_shipping?: boolean;
  list_price?: number;
  original_price?: number;
  parent_id?: number;
  sale_price?: number;
  taxable?: boolean;
  url?: string;
  hasInventory?: boolean;
  inventoryCount?: number;
  locationNumber?: string;
  inventoryObj?: any;
  isAvailableInRegion?: boolean;
  product?: any;
  outOfStock?: number | boolean;
  exceedingQuantity?: boolean;
}

export type FormDataProps = {
  current: {
    address: string | undefined;
    city: string | undefined;
    country: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    governorate: string | undefined;
    lastName: string | undefined;
    phoneNumber: string | undefined;
    postalCode: string | undefined;
    title: string | undefined;
  };
};

export type LocationData = {
  id: number;
  code: string;
  label: string;
  description: string;
  managed_by_external_source: boolean;
  type_id: string;
  enabled: boolean;
  operating_hours: {
    [key: string]: { open: string; opening: string; closing: string };
  };
  time_zone: string;
  created_at: string;
  updated_at: string;
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    geo_coordinates: {
      latitude: number;
      longitude: number;
    };
    country_code: string;
  };
  storefront_visibility: boolean;
  special_hours: [];
  tabTitle: string;
  distance: string;
  latitude?: number;
  longitude?: number;
  locationHeading?: string;
  locationAddress?: string;
  openingHourHeading?: string;
  dayAndTime?: [];
  locationUrl?: string;
};

export type APITokensObj = {
  [key: string]: {
    BC_GRAPHQL_CI_TOKEN?: string;
    BC_GRAPHQL_API_DOMAIN?: string;
    BC_API_ACCESS_TOKEN?: string;
    BC_API_DOMAIN?: string;
    BC_GRAPHQL_API_TOKEN?: string;
    BC_CHANNEL_ID?: string;
  };
};

export type CustomerType = {
  entityId: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  wishlist: any;
};

export interface CustomerAttributeTypes {
  customerTitle: Number;
  customerDateOfBirth: Number;
  customerAnniversaryDate: Number;
  customerNewsletterSubscription: Number;
  customerDefaultAddressId: Number;
  csutomerCartId: Number;
  customerGovernorate: Number;
  customerCity: Number;
  customerPostalCode: Number;
  ResetPWOTT: Number;
  isEmailVerified: Number;
  verificationEmailSent: Number;
  verificationEmailOTT: Number;
}
export interface CustomerAttributeNameTypes {
  customerTitle: string;
  customerDateOfBirth: string;
  customerAnniversaryDate: string;
  customerNewsletterSubscription: string;
  customerDefaultAddressId: string;
  csutomerCartId: string;
  customerGovernorate: string;
  customerCity: string;
  customerPostalCode: string;
  ResetPWOTT: string;
  isEmailVerified: string;
  verificationEmailSent: string;
  verificationEmailOTT: string;
  newsletterSubscriptionTimestamp: string;
}

export interface AboutUsContentSectionTypes {
  imageLink?: string;
  imageLinkTwo?: string;
  titleContent?: { content?: { value?: string }; title?: string };
}

interface brPageProp {
  name?: string;
  displayName?: string;
  seometadescription?: string;
  title?: string;
  localeString?: string;
  contentType?: string;
  id?: string;
  pageType?: string;
  subPageTitle?: string;
  parentBreadcrumb?: string;
}

interface brPageModel {
  data: brPageProp;
}

export type BrPageData = {
  model: brPageModel;
};

export type StaticBannerData = {
  bannerData?: string;
  bannerTitle?: string;
  contentPosition?: string;
  contentWidth?: string;
  titleColor?: string;
  titleSize?: number;
  titleSizeMobile?: number;
  contentSize?: number;
  contentSizeMobile?: number;
  imageDesktop?: {
    imgUrl: string;
    altText: string;
  };
  imageMobile?: {
    imgUrl: string;
    altText: string;
  };
};

export type StaticBannerWithCardsData = {
  pageCategory: string;
  bannerData: string;
  bannerTitle: string;
  cards: {
    image: { imgUrl: string; altText: string };
    title: string;
    link: string;
  }[];
};

export type StaticPlpData = {
  categoryId?: number;
  facets?: { [key: string]: { selectionValues: [{ label: string }] } };
  ribbons?: {
    onlineExclusive: { color: string; text: string };
    newIn: { color: string; text: string };
  };
  bubbleLinks?: { link: string; linkText: string }[];
  collectionImages?: string[];
};

type contentSectionTypes = {
  text?: { value: string };
  content?: { value: string };
}[];

type schema = {
  q: string;
  a: string;
}[];

export type SingleRegionPlpData = {
  [key in BrandNameTypes]?: {
    [key: string]: {
      banner?: StaticBannerData;
      bannerWithcards?: StaticBannerWithCardsData;
      plpComponent?: StaticPlpData;
      dynamicID?: string;
      seo?: { title: string; description: string };
      contentSection?: contentSectionTypes;
      schema?: schema;
      children?: {
        [key: string]: {
          seo?: { title: string; description: string };
          banner?: StaticBannerData;
          bannerWithcards?: StaticBannerWithCardsData;
          plpComponent: StaticPlpData;
          dynamicID?: string;
          contentSection?: contentSectionTypes;
          schema?: schema;
        };
      };
    };
  };
};

export type StaticPlpsObject = {
  [key in LocaleType]: SingleRegionPlpData;
};
