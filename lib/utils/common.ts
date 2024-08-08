import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useLayoutEffect } from "react";
import {
  TABBY_MERCHANT_CODE_AE,
  TABBY_MERCHANT_CODE_EG,
  TABBY_MERCHANT_CODE_SA,
} from "general-config";

import { brandNames, brandNamesAR } from "./constants";

export const desktopScreenSize = 1023.5;
export const mobileScreenSize = 767;

export const imageFallback =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89B8AAukB8/71MdcAAAAASUVORK5CYII=";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const getAppStateFromLocalStorage = () => {
  const appState =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("app-state"));
  return appState;
};

export const getStoreAttributeId = (
  storeAttributes: any[],
  attributeName: string
) => {
  if (!storeAttributes) return null;
  const attribute = storeAttributes?.find(
    (attribute) => attribute?.name === attributeName
  );
  return attribute?.id;
};

const dateOptions: any = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
export const formateDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("en-US", dateOptions);

export const reviewStarAvg = (arr: any) => {
  const sum = arr?.reduce((acc: never, cur: never) => acc + cur);
  const average = sum / arr.length;
  return average;
};

export const slashFormatDate = (date: any) => {
  const _date = new Date(date);
  const year = _date?.getFullYear();
  let month: any = _date?.getMonth() + 1;
  let day: any = _date?.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${month}/${day}`;
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const orderFormatDate = (date: any) => {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + 3);
  const newDateFormatted = _date.toDateString();
  const newDate = new Date(newDateFormatted);

  const month = monthNames[newDate?.getMonth()];
  const year = newDate?.getFullYear();
  let day = newDate?.getDate();
  let _day = days[newDate?.getDay()];
  let dayString = "";

  if (day == 1) {
    dayString = `${day}st`;
  } else if (day == 2) {
    dayString = `${day}nd`;
  } else if (day == 3) {
    dayString = `${day}rd`;
  } else {
    dayString = `${day}th`;
  }

  return `${_day}, ${month} ${dayString}, ${year}`;
};

export const taxInvoiceOrderDate = (date: any) => {
  const _date = new Date(date);
  const month = monthNames[_date?.getMonth()];
  const year = _date?.getFullYear();
  let day = _date?.getDate();
  let _day = days[_date?.getDay()];
  let dayString = "";

  if (day == 1) {
    dayString = `${day}`;
  } else if (day == 2) {
    dayString = `${day}`;
  } else if (day == 3) {
    dayString = `${day}`;
  } else {
    dayString = `${day}`;
  }

  return `${_day} ${dayString}, ${month} ${year}`;
};

export const orderDeliverDate = (date: any) => {
  const _date = new Date(date);
  const month = monthNames[_date?.getMonth()];
  const year = _date?.getFullYear();
  let day: any = _date?.getDate();

  if (day < 10) {
    day = "0" + day;
  }

  return `${month?.slice(0, 3)} ${day}, ${year}`;
};

export const updateOrderDate = (date: any) => {
  const _date = new Date(date);
  let _day: any = _date?.getDate();
  let _month: any = _date.getMonth() + 1;
  const _year = _date?.getFullYear();
  let _hours = _date?.getUTCHours();
  const _minutes = _date?.getUTCMinutes();
  const _seconds = _date?.getUTCSeconds();
  let amPm = _hours >= 12 ? "PM" : "AM";
  _hours = _hours % 12;
  _hours = _hours ? _hours : 12;

  if (_day < 10) {
    _day = "0" + _day;
  }
  if (_month < 10) {
    _month = "0" + _month;
  }

  return `${_day}/${_month}/${_year}, ${_hours}:${_minutes}:${_seconds} ${amPm}`;
};

export const updateOrderDateWithOutTime = (date: any) => {
  const _date = new Date(date);
  const _day = _date?.getDate();
  const _month = _date?.getMonth() + 1;
  const _year = _date?.getFullYear();

  return `${_day}/${_month}/${_year}`;
};

export const checkMediaType = (media: string): string => {
  // const mediaSrc = media.url;
  if (!media) return null;
  const types = new Map([
    ["jpg", "img"],
    ["png", "img"],
    ["webp", "img"],
    ["gif", "img"],
    ["mp4", "video"],
    ["3gp", "video"],
  ]);
  const url = new URL(media || "/");
  // const extension = url.pathname.split(".")[1];
  // const element = document.createElement(types.get(extension)) OLD
  // return types.get(extension);
  if (url.toString()?.toLocaleLowerCase().includes("jpg")) return "img";
  if (url.toString()?.toLocaleLowerCase().includes("png")) return "img";
  if (url.toString()?.toLocaleLowerCase().includes("webp")) return "img";
  if (url.toString()?.toLocaleLowerCase().includes("gif")) return "img";
  if (url.toString()?.toLocaleLowerCase().includes("mp4")) return "img";
  if (url.toString()?.toLocaleLowerCase().includes("3gp")) return "img";
  return "skeleton";
};

export const getCurrentBrandId = (brand: string) => {
  if (brand === brandNames.lazurde || brand === brandNamesAR?.lazurde)
    return "lazurdeHeader";
  if (brand === brandNames.missl || brand === brandNamesAR?.missl)
    return "missLHeader";
  if (brand === brandNames.waves || brand === brandNamesAR?.waves)
    return "wavesHeader";
  return "lazurdeHeader";
};
export const inputDateFormat = (date: any) => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  let month: any = _date.getMonth() + 1;
  let day: any = _date.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${year}-${month}-${day}`;
};

export const allLocales = [
  "en-sa",
  "en-ae",
  "en-eg",
  "ar-sa",
  "ar-ae",
  "ar-eg",
];

export const getTabbyMerchartCode = (currency: string) => {
  switch (currency) {
    case "SAR":
      return TABBY_MERCHANT_CODE_SA;
    case "AED":
      return TABBY_MERCHANT_CODE_AE;
    case "EGP":
      return TABBY_MERCHANT_CODE_EG;
    default:
      return TABBY_MERCHANT_CODE_SA;
  }
};

export const getRegionName = (local: string) => {
  switch (local) {
    case "en-ae":
      return "UAE";
    case "en-sa":
      return "KSA";
    case "en-eg":
      return "Egypt";
    case "ar-ae":
      return "الإمارات";
    case "ar-sa":
      return "السعودية";
    case "ar-eg":
      return "مصر";
    default:
      return "KSA";
  }
};

export const getLocales = (locale: string) => {
  switch (locale) {
    case "en":
      return "en-GB";
    case "ar":
      return "ar-SA";

    default:
      return "en-GB";
  }
};

export const getCurrency = (region: string) => {
  switch (region) {
    case "sa":
      return "SAR";
    case "ae":
      return "AED";
    case "eg":
      return "EGP";
    default:
      return "SAR";
  }
};

export const getPhoneNumberPrefix = (region: string) => {
  switch (region) {
    case "sa":
      return "+966";
    case "eg":
      return "+20";
    case "ae":
      return "+971";
    default:
      return "+966";
  }
};

export const changeLocaleFormat = (locale: String) => {
  switch (locale) {
    case "en-sa":
      return "en-SA";
    case "en-ae":
      return "en-AE";
    case "en-eg":
      return "en-EG";
    case "ar-sa":
      return "ar-SA";
    case "ar-ae":
      return "ar-AE";
    case "ar-eg":
      return "ar-EG";
    default:
      return "en-SA";
  }
};

export const getIconSize = (
  screenWidth: number,
  minVal: number,
  maxVal: number,
  mediaQuery: any
) => {
  let currenWidth = 0;
  Object.keys(mediaQuery)?.forEach((key) => {
    if (screenWidth >= Number(key)) {
      currenWidth = mediaQuery?.[key];
    }
  });
  if (currenWidth) {
    let currentSize = Number(screenWidth) * Number(currenWidth);
    if (currentSize <= minVal) return minVal;
    if (currentSize >= maxVal) return maxVal;
    return currentSize;
  }
  let currentSize = Number(screenWidth) * Number(currenWidth);
  if (currentSize <= minVal) return minVal;
  if (currentSize >= maxVal) return maxVal;
  return currentSize;
};

export const findCustomerAttribute = (arr: any, attributeId: Number) => {
  const obj = arr?.find(
    (item: { attribute_id: Number }) =>
      Number(item?.attribute_id) === Number(attributeId)
  );
  return obj;
};

export const useClearData = () => {
  const queryClient = useQueryClient();

  const clearData = (
    removeCustomer = true
  ): ((removeCustomer?: boolean) => null) => {
    //REMOVE QUERY DATA FOR CART/WISHLIST
    queryClient.removeQueries([
      "getWishlistProduct",
      "getAllWishlistData",
      "cartData",
      "wishListID",
      "popularSearchedProducts",
      "storeAttributes",
    ]);
    // queryClient.resetQueries(["popularSearchedProducts"]);

    removeCustomer && queryClient.setQueryData(["cartData"], () => null);
    removeCustomer && queryClient.setQueryData(["getAllWishlistData"], null);
    removeCustomer && queryClient.setQueryData(["wishListID"], null);
    removeCustomer && queryClient.setQueryData(["customerOrders"], null);

    //REMOVE LOCALSTOAGE
    window.localStorage.setItem("all_wishlist_items", JSON.stringify([]));
    window.localStorage.removeItem("WishList_ID");
    // queryClient.clear();

    //REMOVE CUSTOMER
    removeCustomer &&
      window.localStorage.setItem("customer", JSON.stringify({ entityId: 0 }));
    removeCustomer &&
      queryClient.setQueryData(["customerData"], () => {
        return { entityId: 0 };
      });
    removeCustomer && queryClient.removeQueries(["customerAttrData"]);

    sessionStorage.clear();
    return null;
  };

  return {
    clearData,
  };
};

export const phoneFormat = (phoneNumber: string) => {
  const firstNum = phoneNumber?.slice(0, 1);
  const phone = firstNum === "0" ? phoneNumber?.slice(1) : phoneNumber;
  return phone;
};

export const getBloomreachImg = (
  page: any,
  imgRef: string | { imgUrl: string; altText: string }
) => {
  const imageRef = page && page?.getContent(imgRef);
  const imgUrl: string = !!imageRef && imageRef?.getOriginal()?.getUrl();
  const altText: string = imageRef && imageRef?.model?.data?.description;
  const image = {
    imgUrl: imgUrl,
    altText: altText,
  };
  return image;
};

export const redirectToCurrentBrand = (brand: string) => {
  const redriectBreadCrumbs =
    brand === brandNames?.missl
      ? "/miss-l"
      : brand === brandNames.waves
      ? "/waves"
      : "/";
  return redriectBreadCrumbs;
};

export const getCurrentRegionName = (region: string) => {
  switch (region) {
    case "ae":
      return "uae";
    case "sa":
      return "ksa";
    case "eg":
      return "egy";
    default:
      return "ksa";
  }
};

export const breadCrumbs: any = {
  diamond: {
    en: "Diamond Jewelry",
    ar: "ألماس",
    link: "diamond-jewelry",
    childLink: "diamond",
  },
  "diamond-jewelry": {
    en: "Diamond Jewelry",
    ar: "ألماس",
    link: "diamond-jewelry",
    childLink: "diamond",
  },
  gold: {
    en: "Gold Jewelry",
    ar: "ذهب",
    link: "gold-jewelry",
    childLink: "gold",
  },
  "gold-jewelry": { en: "Gold Jewelry", ar: "ذهب", link: "gold-jewelry" },
  "fashion-jewelry": {
    en: "Fashion Jewelry",
    ar: "مجوهرات  عصرية",
    link: "fashion-jewelry",
    childLink: "fashion-jewelry",
  },
  "love-engagement": {
    en: "Love & Engagement",
    ar: "زفاف وخطوبة",
    link: "love-engagement",
    childLink: "love-engagement",
  },
  "gift-occasions": {
    en: "Gifts & Occasions",
    ar: "هدايا ومناسبات",
    link: "gifts-occasions",
    childLink: "gifts-occasions",
  },
  "gifts-occasions": {
    en: "Gifts & Occasions",
    ar: "هدايا ومناسبات",
    link: "gifts-occasions",
    childLink: "gifts-occasions",
  },
  "lab-grown-diamonds": {
    en: "Lab Grown Diamonds",
    ar: "ألماس مختبرات",
    link: "lab-grown-diamonds",
    childLink: "lab-grown-diamonds",
  },
  valentine: {
    en: "Valentine",
    ar: "مجموعة الحب",
    link: "valentine",
  },
  ramadan: {
    en: "Ramadan",
    ar: "رمضان",
    link: "ramadan",
  },
  "mothers-day": {
    en: "Mothers Day",
    ar: "عيد الام",
    link: "mothers-day",
  },
  "engagement-rings": {
    en: "Engagament Rings",
    ar: "دبل خطوبة",
    link: "engagement-rings",
  },
  "18k-gold": {
    en: "18K Gold",
    ar: "ذهب عيار ١٨",
    link: "18k-gold",
  },
  "21k-gold": {
    en: "21K Gold",
    ar: "ذهب عيار ٢١",
    link: "21k-gold",
  },
  "necklaces-pendants": { en: "Necklaces & Pendants", ar: "سلاسل و دلايات" },
  jewelry: { en: "Shop All Jewelry", ar: "تسوق كل المجوهرات" },
  rings: { en: "Rings", ar: "خواتم" },
  bracelets: { en: "Bracelets", ar: "أساور" },
  "bracelets-anklets": { en: "Bracelets & Anklets", ar: "أساور وخلاخيل" },
  earrings: { en: "Earrings", ar: "أقراط" },
  sets: { en: "Sets", ar: "أطقم" },
  "best-sellers": { en: "Best Sellers", ar: "الاكثر مبيعا" },
  "new-in": { en: "New In", ar: "وصل حديثا" },
  "special-price": { en: "Special Price", ar: "أسعار خاصة" },
  "yellow-gold": { en: "Yellow Gold", ar: "ذهب أصفر" },
  "white-gold": { en: "White Gold", ar: "ذهب أبيض" },
  "rose-gold": { en: "Rose Gold", ar: "ذهب وردي" },
  "multicolor-gold": { en: "Multicolor", ar: "متعدد الألوان" },
  "half-sets": { en: "Half Sets", ar: "نصف طقم" },
  "coins-bars": { en: "Gold Coins & Bars", ar: "عملات ذهبية وسبائك" },
  "colored-stones": { en: "Colored Stones", ar: "أحجار ملونة" },
  pearls: { en: "Pearls", ar: "لؤلؤ" },
  essentials: { en: "Essentials", ar: "مجوهراتك الأساسية" },
  kids: { en: "Kids Jewelry", ar: "مجوهرات للأطفال" },
  mens: { en: "Men's Jewelry", ar: "إكسسوارات للرجال" },
  "gold-plated": { en: "Gold Plated", ar: "مطلي ذهب" },
  "sterling-silver": { en: "Sterling Silver", ar: "فضة استرليني" },
  diamonds: { en: "Diamonds", ar: "ألماس" },
  "twin-rings": { en: "Twins", ar: "توينز" },
  "solitaire-rings": { en: "Solitaire Rings", ar: "خواتم سوليتير" },
  "eternity-rings": { en: "Eternity Rings", ar: "خواتم إتيرنتى" },
  "gold-sets": { en: "Gold Sets", ar: "أطقم ذهب" },
  "diamond-sets": { en: "Diamond Sets", ar: "أطقم ألماس" },
  "pendants-chain": { en: "Pendant with Chain", ar: "سلاسل ودلايات" },
  pendants: { en: "Pendants", ar: "دلاية" },
  layered: { en: "Layered", ar: "سلاسل طبقات" },
  chains: { en: "Chains", ar: "سلاسل" },
  charms: { en: "Charms", ar: "دلايات أشكال" },
  choker: { en: "Choker", ar: "تشوكر" },
  statement: { en: "Statement", ar: "خواتم ستيتمنت" },
  band: { en: "Band", ar: "عريض" },
  "two-headed": { en: "Two-Headed", ar: "خواتم برأس مزدوجة " },
  eternity: { en: "Eternity", ar: "خواتم إتيرنتى" },
  chain: { en: "Chain", ar: "أساور سلسلة" },
  // cuff: { en: "Cuff", ar: "أساور مفتوحة" },
  bangle: { en: "Bangle", ar: "أسورة" },
  charm: { en: "Charm", ar: "تشارم" },
  stud: { en: "Stud", ar: "أقراط صغيرة" },
  chandelier: { en: "Chandelier", ar: "أقراط متدلية طويلة" },
  hoop: { en: "Hoop", ar: "أقراط دائرية" },
  drop: { en: "Drop", ar: "أقراط متدلية" },
  "clip-on": { en: "Clip-On", ar: "كليب" },
  cuff: { en: "Cuff", ar: "مفتوح" },
  "wedding-bands": { en: "Wedding Bands", ar: "تسوق كل الذهب" },
  lazurde: { en: "L'azurde", ar: "لازوردي" },
  instyle: { en: "Instyle", ar: "إنستايل" },
  "miss-l": { en: "Miss L'", ar: "مس أل" },
  waves: { en: "Waves", ar: "ويفز" },
  "under-500": { en: "Under 500", ar: "أقل من 500" },
  "500-1000": { en: "500 to 1,000", ar: "من 500 الى 1,000" },
  "1000-2000": { en: "1,000 to 2,000", ar: "من 1,000 الى 2,000" },
  "under-2000": { en: "Under 2,000", ar: "أقل من 2,000" },
  "2000-4000": { en: "2,000 to 4,000", ar: "من 2,000 الى 4,000" },
  "under-4000": { en: "Under 4,000", ar: "أقل من 4,000" },
  "4000-8000": { en: "4,000 to 8,000", ar: "من 4,000 الى 8,000" },
  "4000-6000": { en: "4,000 to 6,000", ar: "من 4,000 الى 6,000" },
  "under-6000": { en: "Under 6,000", ar: "أقل من 6,000" },
  "6000-8000": { en: "6,000 to 8,000", ar: "من 6,000 الى 8,000" },
  "6000-10000": { en: "6,000 to 10,000", ar: "من 6,000 الى 10,000" },
  "under-30000": { en: "Under 30,000", ar: "أقل من 30,000" },
  "30000-50000": { en: "30,000 to 50,000", ar: "من 30,000 الى 50,000" },
  "50000-above": { en: "50,000 Above", ar: "من 50,000 وأكثر" },
  "8000-10000": { en: "8,000 to 10,000", ar: "من 8,000 الى 10,000" },
  "10000-above": { en: "10,000 Above", ar: "من 10,000 وأكثر" },
  "4000-above": { en: "4000 Above", ar: "من 4,000 وأكثر" },
  "shop-all": {
    diamond: { en: "Shop All Diamonds", ar: "مختبرات" },
    gold: { en: "Shop All Gold", ar: "تسوق كل الذهب" },
    "fashion-jewelry": {
      en: "Shop All Fashion Jewelry",
      ar: "تسوق الكل",
    },
    "gift-occasions": {
      en: "Shop All Gifts",
      ar: "تسوق الكل",
    },
    jewelry: {
      en: "Shop All Jewelry",
      ar: "تسوق الكل",
    },
    "love-engagement": {
      en: "Shop All Engagement",
      ar: "تسوق في كل الخواتم وأطقم الزفاف",
    },
    "necklaces-pendants": {
      en: "Shop All Necklaces & Pendants",
      ar: "تسوق كل السلاسل و الدلايات",
    },
    rings: {
      en: "Shop All Rings",
      ar: "تسوق كل الخواتم",
    },
    "bracelets-anklets": {
      en: "Shop All Bracelets & Anklets",
      ar: "تسوق أساور و خلاخيل",
    },
    earrings: {
      en: "Shop All Earrings",
      ar: "تسوق كل الأقراط",
    },
    kids: {
      en: "Shop All Kids",
      ar: "تسوق كل مجوهرات الأطفال",
    },
    "lab-grown-diamonds": {
      en: "Shop All Lab Grown Diamonds",
      ar: "تسوق كل ألماس المختبرات",
    },
    // "love-engagement": {
    //   en: "Shop All Engagement",
    //   ar: "تسوق في كل الخواتم وأطقم الزفاف",
    // },
  },
};

export const setCookieOptionForCheckout = () => {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  const cookieOptions = {
    expires: oneYearFromNow,
    domain: "lazurde.com",
    path: "/",
  };

  return cookieOptions;
};

export const getOnlyNumber = (string: string) => {
  return Number(string?.match(/(\d+\.\d+|\d+)/g));
};

export const reasonOptions: any = [
  {
    label: "No longer needed",
    value: "No longer needed",
  },
  {
    label: "Inaccurate website description",
    value: "Inaccurate website description",
  },
  {
    label: "Bought by mistake",
    value: "Bought by mistake",
  },
  {
    label: "Better price available",
    value: "Better price available",
  },
  {
    label: "Product damaged",
    value: "Product damaged",
  },
  {
    label: "Item arrived too late",
    value: "Item arrived too late",
  },
  {
    label: "Wrong item was sent",
    value: "Wrong item was sent",
  },
  {
    label: "Received extra item I didn’t buy",
    value: "Received extra item I didn’t buy",
  },
  {
    label: "Didn’t approve Purchase",
    value: "Didn’t approve Purchase",
  },
];

export const reasonOptionsAR: any = [
  {
    label: "لم تعد هناك حاجة",
    value: "No longer needed",
  },
  {
    label: "وصف المنتج غير دقيق على للموقع",
    value: "Inaccurate website description",
  },
  {
    label: "اشترىت بالخطأ",
    value: "Bought by mistake",
  },
  {
    label: "أفضل سعر متاح",
    value: "Better price available",
  },
  {
    label: "المنتج تالف",
    value: "Product damaged",
  },
  {
    label: "وصل المنتح متأخرا جدًا",
    value: "Item arrived too late",
  },
  {
    label: "تم إرسال منتج خاطئ",
    value: "Wrong item was sent",
  },
  {
    label: "لقد استلمت منتج إضافي لم أشتريه",
    value: "Received extra item I didn’t buy",
  },
  {
    label: "لم أوافق على الشراء",
    value: "Didn’t approve Purchase",
  },
];

export const getPhoneLimit = (region: string) => {
  switch (region) {
    case "ae":
      return 9;
    case "sa":
      return 9;
    case "eg":
      return 10;
    default:
      return 9;
  }
};
