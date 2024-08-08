import { AppStateType } from "lib/types/common";
import { ProductType } from "lib/types/product";
import { getCurrentRegionName, getOnlyNumber } from "./common";

export const onWishlistAddEvent = (wishlistData: any, userId: number) => {
  (window as any).dataLayer = (window as any)?.dataLayer || [];

  var item: any = wishlistData?.wishListItems?.find(
    (item: any) => item?.node?.productEntityId === wishlistData?.addedItemId
  )?.node?.product;

  const categoryOne = item?.categories?.edges?.[1]?.node?.name;
  const categoryTwo = item?.categories?.edges?.[2]?.node?.name;

  (window as any)?.dataLayer.push({
    event: "add_to_wishlist",
    userId: userId || "",
    ecommerce: {
      items: [
        {
          item_name: item?.name,
          item_id: item?.sku,
          price: String(item?.prices?.price?.value),
          item_brand: item?.brand?.name,
          item_category: categoryOne,
          item_category2: categoryOne
            ? `${categoryOne}/${categoryTwo}`
            : categoryTwo,
          quantity: "1",
        },
      ],
    },
  });
};

export const onProductClickedEvent = (
  item: any,
  cookie: string = "",
  userId = ""
) => {
  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: "select_item", // name of the event. In this case, it always must be select_item
    userId: userId || "",
    ecommerce: {
      items: [
        {
          item_name: item?.title,
          item_id: item?.product_sku,
          price: String(item?.price),
          item_brand: item?.brand,
          item_category: item?.parentCategory,
          item_category2: item?.parentCategory
            ? `${item?.parentCategory}/${item?.childCategory}`
            : item?.childCategory,
          quantity: "1",
        },
      ],
    },
  });
};

export const viewCategoryEvent = (
  currentProductData: any,
  paginationData: any,
  appState: AppStateType,
  userId: string
) => {
  const item_ids = currentProductData?.map(
    (item: { product_sku: string }) => item?.product_sku
  );

  const categoryOne = paginationData?.parentBreadcrumb;
  const categoryTwo = paginationData?.childBreachCrumb;
  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: "view_category",
    userId: userId || "",
    ecommerce: {
      items: [
        {
          region: getCurrentRegionName(appState?.region),
          boutique: appState?.brand,
          language: appState?.lang,
          category_title: categoryTwo ? categoryTwo : categoryOne,
          category_path: `${categoryOne} ${
            categoryTwo ? `> ${categoryTwo}` : ""
          }`,
          item_category: categoryOne,
          item_category2: categoryTwo,
          item_ids: item_ids || [],
        },
      ],
    },
  });
};

export const productViewEvent = (
  product: ProductType,
  userId: string,
  appState: AppStateType
) => {
  const {
    collection,
    description,
    metalCaret,
    metalColor,
    diamondCaretOnly,
    diamondCutShapeOnly,
    diamondAttributes,
    metalAttributes,
    stoneCaretOnly,
    stoneCutShapeOnly,
    stone,
    stoneAttributes,
    sizeOnly,
    size_bracelet,
    size_chain,
    size_earring,
    size_pendant,
    size_ring,
  } = getProductData(appState, product);

  const categoryOne = product?.categories?.edges?.[1]?.node?.name;
  const categoryTwo = product?.categories?.edges?.[2]?.node?.name;
  const image = product?.images?.edges?.[0]?.node?.url640wide;
  const price = product?.prices;
  const percentageDiscount =
    Number(price?.basePrice?.value) - Number(price?.salePrice?.value);
  const in_stock = product?.inventory?.aggregated?.availableToSell;
  const categoryIds = product?.categories?.edges
    ?.slice(1)
    .map((item: any) => item?.node?.entityId);

  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: "view_item",
    userId: userId || "",
    ecommerce: {
      items: [
        {
          item_name: product?.newTitle,
          item_id: product?.sku,
          price: product?.prices?.salePrice?.value,
          item_brand: product?.brand?.name,
          item_category: categoryOne,
          item_category2: categoryOne
            ? `${categoryOne}/${categoryTwo}`
            : categoryTwo,
          quantity: "1",
          region: getCurrentRegionName(appState?.region),
          boutique: product?.brand?.name,
          category_path: `${categoryOne} ${
            categoryTwo ? `> ${categoryTwo}` : ""
          }`,
          image: image,
          currency: price?.price?.currencyCode,
          in_stock: in_stock || null,
          original_price: price?.basePrice?.value || null,
          sale_price: price?.salePrice?.value || null,
          discount: percentageDiscount || null,
          total_price: price?.salePrice?.value || null,
          language: appState?.lang,
          expected_delivery: "",
          category_ids: categoryIds || [],
          collection: collection || "",
          description: description || "",
          diamond_attributes: diamondAttributes || [],
          diamond_carat: getOnlyNumber(diamondCaretOnly) || null,
          diamond_cut: diamondCutShapeOnly || null,
          metal_attributes: metalAttributes || [],
          metal_carat: getOnlyNumber(metalCaret) || null,
          metal_color: metalColor || "",
          size: sizeOnly || null,
          size_bracelet: size_bracelet || null,
          size_chain: size_chain || null,
          size_earring: size_earring || null,
          size_pendant: size_pendant || null,
          size_ring: size_ring || null,
          stone_attributes: stoneAttributes || [],
          stone_carat: getOnlyNumber(stoneCaretOnly) || null,
          stone_color: stone || "",
          stone_cut: stoneCutShapeOnly || "",
        },
      ],
    },
  });
};

export const addOrRemoveItemEvent = (
  eventname: string,
  product: ProductType | any,
  userId: string,
  quantity?: number
) => {
  const categoryOne = product?.categories?.edges?.[1]?.node?.name;
  const categoryTwo = product?.categories?.edges?.[2]?.node?.name;
  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: eventname,
    userId: userId || "",
    ecommerce: {
      items: [
        {
          item_name: product?.name?.split(/- (.*)/s)?.[1],
          item_id: product?.sku || product?.product_sku,
          price: product?.prices?.basePrice?.value || product?.sale_price,
          item_brand: product?.brand?.name || "",
          item_category: categoryOne || "",
          item_category2: categoryOne
            ? `${categoryOne}/${categoryTwo}`
            : categoryTwo || "",
          quantity: quantity ? quantity : 1,
        },
      ],
    },
  });
};

export const addItemEventFromPlp = (
  eventname: string,
  product: ProductType | any,
  userId: string,
  parentCategory: string,
  childCategory: string
) => {
  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: eventname,
    userId: userId || "",
    ecommerce: {
      items: [
        {
          item_name: product?.title || "",
          item_id: product?.product_sku || "",
          price: product?.price || "",
          item_brand: product?.brand || "",
          item_category: parentCategory || "",
          item_category2: parentCategory
            ? `${parentCategory}/${childCategory}`
            : childCategory || "",
          quantity: 1,
        },
      ],
    },
  });
};

export const viewCartEvent = (items: any, userId: string) => {
  const itemsToMap = items?.map((item: any) => {
    const categoryOne = item?.categories?.edges?.[1]?.node?.name;
    const categoryTwo = item?.categories?.edges?.[2]?.node?.name;
    const itemObj = {
      item_name: item?.name?.split(/- (.*)/s)?.[1],
      item_id: item?.sku,
      price: item?.sale_price,
      item_brand: item?.brand,
      item_category: categoryOne,
      item_category2: categoryOne
        ? `${categoryOne}/${categoryTwo}`
        : categoryTwo || "",
      quantity: item?.quantity,
    };
    return itemObj;
  });

  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: "view_cart",
    userId: userId || "",
    ecommerce: {
      items: itemsToMap || [],
    },
  });
};

export const signUpSignInEvent = (
  eventName: string,
  userId: string,
  method?: string
) => {
  (window as any).dataLayer = (window as any)?.dataLayer || [];
  (window as any)?.dataLayer.push({
    event: eventName,
    userId: userId || "",
    ...(method && { method: method }),
  });
};

const getProductData = (appState: any, item: any) => {
  let customFieldObj: any = {};
  item?.customFields?.edges?.forEach((field: any) => {
    customFieldObj = {
      ...customFieldObj,
      [field.node.name]: field.node.value,
    };
  });

  const collection =
    appState?.lang === "en"
      ? customFieldObj?.Collection
      : customFieldObj?.["Collection AR"];

  const description =
    appState?.lang === "en"
      ? item?.description
      : customFieldObj?.["New Description AR"];

  const metalCaret =
    appState?.lang === "en"
      ? customFieldObj?.["Metal Karat"]
      : customFieldObj?.["Metal Karat AR"];

  const metalColor =
    appState?.lang === "en"
      ? customFieldObj?.["Metal Color"]
      : customFieldObj?.["Metal Color AR"];

  const diamondCaretOnly =
    appState?.lang === "en"
      ? customFieldObj?.["Diamond Carat ONLY"]
      : customFieldObj?.["Diamond Carat ONLY AR"];

  const diamondCutShapeOnly =
    appState?.lang === "en"
      ? customFieldObj?.["Diamond Cut/Shape ONLY"]
      : customFieldObj?.["Diamond Cut/Shape ONLY AR"];

  let diamondAttributes = [];
  diamondCaretOnly && diamondAttributes.push(diamondCaretOnly);
  diamondCutShapeOnly && diamondAttributes.push(diamondCutShapeOnly);

  let metalAttributes = [];
  metalCaret && metalAttributes.push(metalCaret);
  metalColor && metalAttributes.push(metalColor);

  const stoneCaretOnly =
    appState?.lang === "en"
      ? customFieldObj?.["Stone Carat ONLY"]
      : customFieldObj?.["Stone Carat ONLY AR"] ||
        customFieldObj?.["Stone Carat ONLY"];

  const stoneCutShapeOnly =
    appState?.lang === "en"
      ? customFieldObj?.["Stone Cut/Shape ONLY"]
      : customFieldObj?.["Stone Cut/Shape ONLY AR"];

  const stone =
    appState?.lang === "en"
      ? customFieldObj?.["Stone"]
      : customFieldObj?.["Stone AR"];

  let stoneAttributes: any = [];
  stoneCaretOnly && stoneAttributes?.push(stoneCaretOnly);
  stoneCutShapeOnly && stoneAttributes?.push(stoneCutShapeOnly);
  stone && stoneAttributes?.push(stone);

  const sizeOnly =
    getOnlyNumber(customFieldObj?.["Bracelet Length"]) ||
    getOnlyNumber(customFieldObj?.["Chain Length"]) ||
    getOnlyNumber(customFieldObj?.["Earring Length"]) ||
    getOnlyNumber(customFieldObj?.["Pendant Length"]) ||
    getOnlyNumber(customFieldObj?.["Ring Size"]);

  const size_bracelet =
    getOnlyNumber(customFieldObj?.["Bracelet Length"]) || null;
  const size_chain = getOnlyNumber(customFieldObj?.["Chain Length"]) || null;
  const size_earring =
    getOnlyNumber(customFieldObj?.["Earring Length"]) || null;
  const size_pendant =
    getOnlyNumber(customFieldObj?.["Pendant Length"]) || null;
  const size_ring = getOnlyNumber(customFieldObj?.["Ring Size"]) || null;

  return {
    collection,
    description,
    metalCaret,
    metalColor,
    diamondCaretOnly,
    diamondCutShapeOnly,
    diamondAttributes,
    metalAttributes,
    stoneCaretOnly,
    stoneCutShapeOnly,
    stone,
    stoneAttributes,
    sizeOnly,
    size_bracelet,
    size_chain,
    size_earring,
    size_pendant,
    size_ring,
  };
};

export const homePageBanner = (
  eventName: string,
  promotionName: any,
  promotionID: any,
  creativeName: any,
  creativeSlot: any
) => {
  (window as any).dataLayer = (window as any)?.dataLayer || [];

  (window as any)?.dataLayer.push({
    event: eventName,
    promotion_name: promotionName,
    promotion_id: promotionID,
    creative_name: creativeName,
    creative_slot: creativeSlot,
  });
};
