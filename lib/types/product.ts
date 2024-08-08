type ProductAttributeType = {
  _id?: string;
  name: string;
  description: string;
  mapping: string;
  type: string;
  value: string;
};

export type ProductType = {
  brand?: { name: string };
  _id?: string;
  sku: string;
  newTitle?: string;
  itemId: number;
  name: string;
  priceListId?: string;
  Brand?: string;
  children: any[];
  type: string;
  status: boolean;
  bundleItems: any[];
  inventory: {
    isInStock?: boolean;
    aggregated?: {
      availableToSell?: number;
      warningLevel?: number;
    };
  };
  relatedProducts?: any;
  categories?: {
    edges?: { node?: { name?: string; id?: string; entityId?: string } }[];
  };
  customFields?: {
    edges?: { node?: { name?: string; value?: string } }[];
  };
  attributes: ProductAttributeType[];
  variants: any[];
  dependants: any[];
  priceList?: any;
  totalPrice?: any;
  isLocation?: string;
  hasStock?: Boolean;
  hasError?: boolean;
  images?: { edges?: { node?: { url640wide?: string; altText?: string } }[] };
  imagesArray?: {
    url: { node?: { [key: string]: string; altText?: string } };
    alt: string;
  }[];
  entityId?: number;
  prices?: {
    basePrice?: { currencyCode?: string; value?: number };
    price?: { currencyCode?: string; value?: number };
    salePrice?: any;
  };
};

type BCProdictInventoryType = {
  isInStock?: boolean;
  hasVariantInventory?: boolean;
};

type BCProductReviewSummaryType = {
  summationOfRatings: number;
  numberOfReviews: number;
};

type BCVariantsNodeType = {
  id: string;
  sku: string;
  entityId: number;
  inventory: { isInStock: boolean };
};

type BCProductNodeType = {
  node: BCVariantsNodeType;
};
type BCVariantsArrType = [BCProductNodeType];

type BCProductVariantsType = {
  edges: BCVariantsArrType;
};

type BCProductPriceType = {
  value: number;
  currencyCode: string;
};

type BCProductPricesType = {
  price: BCProductPriceType;
};

type wishlistNodeType = {
  entityId?: number;
  productEntityId?: number;
  product?: BCProductType;
};

export type avaiableItemsProps = {
  node: wishlistNodeType;
};

export type BCProductType = {
  id: string;
  entityId: number;
  name: string;
  sku: string;
  plainTextDescription: string;
  defaultImage: Object;
  images: Object;
  inventory: BCProdictInventoryType;
  isInStock: boolean;
  variants: BCProductVariantsType;
  reviewSummary: BCProductReviewSummaryType;
  prices: BCProductPricesType;
};
