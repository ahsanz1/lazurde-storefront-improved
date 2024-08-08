import { BrandNameTypes } from "lib/types/common";
import { brandNames, brandNamesAR } from "lib/utils/constants";
import { getCategoryLink } from "../product-description/functions";
import Script from "next/script";

const ProductPageScripts = ({
  product,
  reviews = [],
  ratingAvg,
  locale,
  brand,
}: {
  scriptPageType: string;
  product: any;
  reviews: any;
  ratingAvg: number;
  locale: string;
  brand: BrandNameTypes;
}) => {
  // const router = useRouter();
  // if (scriptPageType != "Product") return null;
  const lang = locale?.split("-")[0];
  const reviewsScript = reviews?.map((review: any) => {
    const obj = `{
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": ${review?.review?.rating}
        },
        "author": {
          "@type": "Person",
          "name": ${review?.review?.author}
        },
        "datePublished": ${review?.review?.dateAdded},
        "reviewBody": ${review?.review?.body}
      }`;
    return obj;
  });

  // These filters would be changed when Rory correct the logic from bigCommerce.
  const categoryAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Category AR"
  );

  const subCategoryAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Sub Category AR"
  );

  const productNameAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );

  const descriptionAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Description AR"
  );

  const brandAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Brand AR"
  );

  const typeAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Type AR"
  );

  const categoryEN_L1 = product?.categories?.edges?.[1]?.node?.name;

  const currentBrand =
    lang === "en" ? brandNames?.[brand] : brandNamesAR?.[brand];

  const brandLink =
    brand === "lazurde"
      ? `https://www.lazurde.com/${locale}`
      : `https://www.lazurde.com/${locale}/miss-l`;

  const categoryLink = getCategoryLink(product);

  // const jewelryLink = `${brandLink}/${"jewelry"?.toLocaleLowerCase()}`;

  const formattedName = (product?.name?.split("-")[1] || "")
    .replace(/^[-\s]+/, "")
    .replace(/\s+/g, "-");
  const productUrl = `p/${formattedName?.replace(/\s+/g, "-")}-sku-${
    product?.sku
  }`;

  return (
    <>
      <Script
        strategy="lazyOnload"
        id={`${product?.sku}-product-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "${lang === "en" ? product?.name : productNameAR}",
            "image": "${product?.defaultImage?.url960wide}",
            "description": "${
              lang === "en" ? product?.description : descriptionAR
            }",
            "sku": "${product?.sku}",
            "brand": {
              "@type": "Brand",
              "name": "${
                lang === "en"
                  ? encodeURI(product?.brand?.name)
                  : encodeURI(brandAR)
              }"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "${product?.prices?.price?.currencyCode}",
              "price": "${product?.prices?.price?.value}",
              "availability": "${product?.hasStock}",
              "url": "https://www.lazurde.com/${locale}/${productUrl}",
              "itemCondition": "https://schema.org/NewCondition"
            }
            ${
              reviews?.length > 0
                ? `,
            ,"aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${ratingAvg}",
              "reviewCount": "${reviews?.length || ""}"
            },
            "review": [${reviewsScript}]
            `
                : ""
            }
          }`,
        }}
      />

      <Script
        strategy="lazyOnload"
        id={`${product?.sku}-breadcrumbs`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
           { "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": "1",
                "name": "${currentBrand}",
                "item": "${brandLink}"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "${lang === "ar" ? "مجوهرات" : "Jewelry"}",
                "item": "https://www.lazurde.com/${locale}/jewelry"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "${
                  lang === "ar" ? typeAR?.[0]?.node?.value : categoryEN_L1
                }",
                "item": "${brandLink}/${"jewelry"}/${categoryLink}"
              }
            ]
          }`,
        }}
      />

      <Script
        id={`${product?.sku}-view_item`}
        dangerouslySetInnerHTML={{
          __html: `
            gtag("event", "view_item", {
              currency: ${product?.prices?.price?.currencyCode},
              value: ${product?.prices?.price?.value},
              items: [
                {
                  item_id: ${product?.sku},
                  item_name: ${product?.name},
                  affiliation: "https://www.lazurde.com/${locale}",
                  index: 0,
                  item_brand: ${product?.brand?.name},
                  item_category: ${product?.categories?.edges?.[0]?.node?.name},
                  item_category2: ${product?.categories?.edges?.[1]?.node?.name},
                  item_category3: ${product?.categories?.edges?.[2]?.node?.name},
                  item_category4: ${product?.categories?.edges?.[3]?.node?.name},
                  item_category5: ${product?.categories?.edges?.[4]?.node?.name},
                  item_list_id: ${product?.entityId},
                  item_list_name: ${product?.name},
                  item_variant: ${product?.variants?.edges?.[0]?.node?.entityId},
                  price: ${product?.prices?.price?.value},
                  quantity: 1
                }
              ]
            });
          `,
        }}
      />
    </>
  );
};

export default ProductPageScripts;
