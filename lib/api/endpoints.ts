const ENDPOINTS = {
  CART: {
    ADD_ITEM_TO_CART: (cartId: string) =>
      `/v3/carts/${cartId}/items?include=redirect_urls`,
    GET_CART: (cartId: string) => `/v3/carts/${cartId}?include=redirect_urls`,
    DELETE_CART: (cartId: string) => `/v3/carts/${cartId}`,
    UPDATE_ITEM_OF_CART: (cartId: string, itemId: number) =>
      `/v3/carts/${cartId}/items/${itemId}?include=redirect_urls`,
    REMOVE_ITEM_FROM_CART: (cartId: string, itemId: number) =>
      `/v3/carts/${cartId}/items/${itemId}?include=redirect_urls`,
    CREATE_CART: "/v3/carts?include=redirect_urls",
    ADD_PROMO: (cartId: string, promoCode: string) =>
      `/v2/carts/${cartId}/promos/${promoCode}`,
    DELETE_PROMO: (cartId: string, promoCode: string) =>
      `/v2/carts/${cartId}/promo/${promoCode}`,
  },

  OMS: {
    CREATE_ORDER: "/api-order/orders",
    GET_ORDER: "/api-order/orders/user",
    GET_ORDER_TOKEN: "/refreshToken",
    GET_ORDER_STATUS: "/orderStatus",
    GET_ALL_SHIPPING_METHODS: "/api/v2/shipping/query",
    GET_SHIPPING_METHODS: "/api/v2/shipping/search",
    GET_ORDERS_HISTORY: "/api/v2/order/query",
    RETURNS: {
      RETURN_ORDER: "/api/v2/order/returns",
      RETURN_ORDER_ELIGIBILITY: (orderId: string | number) =>
        `/api/v2/order/returns?orderId=${orderId}`,
      GET_RETURN_POLICY: (configName: string) =>
        `/api/v2/configurations/tenant-config/RETURNS/name/${configName}`,

      GET_SHIPMENT_BY_QUERY: "/api/v2/shipment/query",
    },
  },

  FLOW_OMS: {
    RETURNS: {
      ORDER_STATUS: (orderId: string | number, email: string) =>
        `/orders/LZ-${orderId}/track?email=${email}`,

      RETURN_ORDER: (
        orderId: string | number,

        email: string
      ) => `/oe/rma/orders/LZ-${orderId}/rma_init?email=${email}`,
    },
    PROMOTIONS: {
      PROMO: (brandID: number | string) =>
        `/oe/promotions/details?brandId=${brandID}&pageNumber=1&pageSize=1`,
    },
    ORDERS: {
      GET_ALL_ORDERS: (
        emailId: string,
        phone: string,
        page: number | string,
        size: number | string,
        brandId: number | string
      ) =>
        `/oe/orders/crm_searchcompleteorders?email=${emailId}&phone=${phone}&page=${page}&size=${size}&brands=${brandId}`,
    },
  },

  ADDRESSES: {
    GET_ADDRESS_BY_ID: (entityId: number) =>
      `/v3/customers/addresses?customer_id:in=${entityId}`,
    ADD_UPDATE_ADDRESS: `/v3/customers/addresses`,
    DELETE_ADDRESS: (addressId: number) =>
      `/v3/customers/addresses?id:in=${addressId}`,
  },

  REVIEWS: {
    GET_REVIEWS: (storeHash: string | number, productId: string | number) =>
      `https://stamped.io/api/v2/${storeHash}/dashboard/reviews?search=${productId}&state=published`,

    GET_REVIEWS_By_EMAIL: (storeHash: string | number, userEmail: string) =>
      `https://stamped.io/api/v2/${storeHash}/dashboard/reviews?search=${userEmail}&state=published`,

    CREATE_REVIEW: (apikey: string | number, storeHash: string | number) =>
      `https://stamped.io/api/reviews3?apiKey=${apikey}&sId=${storeHash}`,

    TRANSLATE_REVIEWS:
      "https://translation.googleapis.com/language/translate/v2",
  },

  CHECKOUT: {
    CREATE_CUSTOMER: `/checkout/customer/createCustomer`,
    GET_CUSTOMER: (identifier: string) => `/customers/${identifier}`,
    UPDATE_CUSTOMER: (id: string) =>
      `/checkout/customer/updateCustomer?CustomerID=${id}`,
    GET_PAYMENT_TOKEN: `/tokens`,
    CREATE_PAYMENT_INSTRUMENT: `/instruments`,
    UPDATE_PAYMENT_INSTRUMENT: (id: string) => `/instruments/${id}`,
    TABBY_SESSION: `/tabby/checkoutSession`,
    CHECKOUT_SESSION: `/payments`,
  },

  INSTAGRAM: {
    GET_ACCESS_TOKEN: `https://api.instagram.com/oauth/access_token`,
    GET_LONGLIVE_TOKEN: (clientSecret: string | number, token: string) =>
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${clientSecret}&access_token=${token}`,
    FETCH_INSTAGRAM_DATA: (fields: any, token: string) =>
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`,
    FETCH_SINGLE_INTSA_POST_DATA: (
      postId: string | number,
      fields: any,
      token: string
    ) =>
      `https://graph.instagram.com/${postId}?fields=${fields}&access_token=${token}`,
  },

  GOOGLEMAPS: {
    GET_LOCATION_BY_ID: `https://maps.googleapis.com/maps/api/place/details/json`,
  },

  VALU: {
    GET_AUTH_TOKEN: `/api/auth/tokens`,
    ORDER_REGISTRATION: `/api/ecommerce/orders`,
    GET_PAYMENT_KEY: `/api/acceptance/payment_keys`,
  },

  APPLE_PAY: {
    VALIDATE_SESSION: "/validate-session",
    EXCHANGE_TOKEN: "/exchange-token",
  },

  BC_CUSTOMER: {
    CREATE_CUSTOMER: `/v3/customers`,
    CREATE_CUSTOMER_ATTRIBUTE: "/v3/customers/attributes",
    UPDATE_ATTRIBUTE_VALUES: `/v3/customers/attribute-values`,
    STORED_INSTRUMENTS: (customerId: number) =>
      `/v3/customers/${customerId}/stored-instruments`,
    GET_ATTRIBUTES_BY_CUSTOMER_ID: (id: number) =>
      `/v3/customers/attribute-values?customer_id:in=${id}`,
    GET_CUSTOMER_BY_ID: (id: string) => `/v3/customers?id:in=${id}`,
    GET_CUSTOMER_BY_EMAIL: `/v3/customers`,
  },

  BC: {
    PRODUCTS: {
      GET_ALL_PRODUCTS: `/v3/catalog/products`,
      GET_ALL_PRODUCTS_WITH_PAGINATION: (page: number) =>
        `/v3/catalog/products?limit=250&page=${page}`,
      GET_PRODUCTS: (productId: number) => `/v3/catalog/products/${productId}`,
      GET_SELECTED_PRODUCTS: (productIds: number) =>
        `/v3/catalog/products?id:in=${productIds}`,
      GET_META_FIELDS: (productId: number) =>
        `v3/catalog/products/${productId}/metafields`,
    },
    LOCATION: {
      GET_LOCATIONS: `/v3/inventory/locations`,
      GET_LOCATION_META: (locationId: number) =>
        `/v3/inventory/locations/${locationId}/metafields`,
    },
    ORDERS: {
      GET_ALL_ORDERS: "/v2/orders",
      GET_AN_ORDER: (orderId: number) => `/v2/orders/${orderId}`,
      GET_METAFIELDS: (orderId: number) => `/v3/orders/${orderId}/metafields`,
    },
    PROMOTIONS: {
      CREATE_PROMOTION: "/v3/promotions",
    },
    COUPONS: {
      CREATE_COUPON: (promotionId: number) =>
        `/v3/promotions/${promotionId}/codes`,
    },
    CHECKOUT: {
      GET_CHECKOUT_DETAILS: (checkoutID: string) =>
        `/v3/checkouts/${checkoutID}`,
    },
  },

  BR: {
    GET_SUGGESTIONS: `https://staging-suggest.dxpapi.com/api/v2/suggest/`,
  },

  ENGAGEMENT: {
    CUSTOMERS: (projectToken: string) =>
      `https://api.exponea.com/track/v2/projects/${projectToken}/batch`,
    OUTOFSTOCK: (projectToken: string) =>
      `https://api.exponea.com/track/v2/projects/${projectToken}/batch`,

    CUSTOMER_ATTRIBUTES: (projectToken: string) =>
      `https://api.exponea.com/data/v2/projects/${projectToken}/customers/attributes`,
  },

  NEXT_API: {
    CUSTOMER: {
      RESET_PASSWORD: "/api/customer/reset-password",
      UPDATE_CUSTOMER: "/api/customer/update-customer",
      VERIFICATION_EMAIL: "/api/customer/verify/verification-email",
    },
  },

  KLAVIYO: {
    EVENTS: "/api/events",
  },

  BOPIS: {
    GET_PRODUCT_INVENTORY_ACROSS_ALL_LOCATIONS: (productId: Number) =>
      `/v3/inventory/items?product_id:in=${productId}`,
    GET_PICKUP_METHODS: `/v3/pickup/methods`,
  },
};

export default ENDPOINTS;
