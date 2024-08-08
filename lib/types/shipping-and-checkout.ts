export type CheckoutConnectorType = "checkout" | "tabby";
export type CheckoutPaymentMethodType = string;
export type CurrencyType = "USD" | "EGP" | "SAR" | "AED";
export type ShippingDetailsPayloadType = {
  shipMethod: {
    shipMethodId: number;
    cost: {
      amount: number;
      currency: string;
    };
  };
  address: {
    street1: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    kind: string;
    phone: {
      number: string;
      kind: string;
    };
  };
  shipToType: string;
};

type AddShipToCartItemType = {
  itemId: string | number;
  lineItemId: number;
  shipToId: string;
};

export type AddShipToCartPayloadType = {
  items: AddShipToCartItemType[];
};

type CheckoutPaymentDetailsType = {
  connectorName: CheckoutConnectorType;
  paymentMethod: CheckoutPaymentMethodType;
  paymentToken: string;
  amount: number;
  currency: CurrencyType;
  billToAddress: {
    name: {
      first: string;
      last: string;
    };
    phone: {
      number: string;
      kind: string;
    };
    email: string;
    street1: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    customerId: string;
  };
};

 type CheckoutItemsTaxesType = {
  lineItemId: number;
  amount: number;
};

 type CheckoutShipToTaxesType = {
  shipToId: string;
  amount: number;
};

export type CheckoutPayloadType = {
  cartId: string;
  customerEmail: string;
  paymentDetails: CheckoutPaymentDetailsType[];
  estimatedTax: {
    itemsTaxes: CheckoutItemsTaxesType[];
    shipToTaxes: CheckoutShipToTaxesType[];
  };
};
