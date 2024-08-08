import { ProductType } from "lib/types/product";

export const getCategoryLink = (product: ProductType) => {
  const categoryLink = (
    product?.categories?.edges?.[1]?.node?.name === "Jewelry Sets"
      ? "sets"
      : product?.categories?.edges?.[1]?.node?.name
  )
  ?.replace("&", "")
  ?.replace(" ", "-")
  ?.replace(/ /g, "")
    ?.toLocaleLowerCase();

  return categoryLink?.toLowerCase() === "bracelets"
    ? "bracelets-anklets"
    : categoryLink;
};

export const getJewelryLink = (
  brand: any,
  brandNames: any,
  categoryLink: any
) => {
  return `/${"jewelry"?.toLocaleLowerCase()}`;
};

export const getBrandLink = (brand: any, brandNames: any) => {
  const redirectBreadcrumbs =
    brand === brandNames?.missl
      ? "/miss-l"
      : brand === brandNames.waves
      ? "/waves"
      : "/";
  return redirectBreadcrumbs;
};
