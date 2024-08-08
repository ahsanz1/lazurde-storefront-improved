import { type } from "os";
import { Price } from "./rtpe";

export type CartObject = {
  id?: string;
  customer_id?: number;
  channel_id?: number;
  email?: string;
  currency?: {
    code?: string;
  };
  tax_included?: boolean;
  base_amount?: number;
  discount_amount?: number;
  cart_amount?: number;
  coupons?: [];
  discounts?: { id?: string; discount_amount?: number }[];
  line_items?: {
    physical_items?: [
      {
        id?: string;
        parent_id?: number;
        variant_id?: number;
        product_id?: number;
        sku?: string;
        name?: string;
        url?: string;
        quantity?: number;
        taxable?: boolean;
        image_url?: string;
        discounts?: [];
        coupons?: [];
        discount_amount?: number;
        coupon_amount?: number;
        original_price?: number;
        list_price?: number;
        sale_price?: number;
        extended_list_price?: number;
        extended_sale_price?: number;
        is_require_shipping?: boolean;
        is_mutable?: boolean;
      }
    ];
    digital_items?: [];
    gift_certificates?: [];
    custom_items?: [];
  };
  locale?: string;
  totalCount?: number;
  redirect_urls?: {
    checkout_url: string;
    embedded_checkout_url: string;
  };
};

export type CartItem = {
  sku: string;
  itemId: string | number;
  entityId: number;
  brand?: string;
  اﻟﻌﻼﻣﺔ?: string;
  quantity?: number;
  priceListId?: string | number;
  price?: Price;
  prices?: Price;
  lineItemId?: number;
  promotion?: {
    price: { currency: string; base: number; totalPrice: number };
    priceList: string;
    discount: [];
  };
  Size?: string;
  discount_percentage?: number;
  title_en?: string;
};

export type ATCPayload = {
  customer_id: number;
  line_items?: { quantity: number; product_id: number; variant_id?: number }[];
  line_item?: { quantity: number; product_id: number; variant_id?: number };
  channel_id: string;
  locale: "en-SA" | "en-AE" | "en-EG" | "ar-SA" | "ar-AE" | "ar-EG";
};

export type ATCUpdatePayload = {
  line_item: { quantity: number; product_id: number; variant_id?: number };
  channel_id: string;
};
