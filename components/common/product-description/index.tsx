import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import ProductDetail from "./product-detail";
import ImageSection from "./image-section";
import { ProductType } from "lib/types/product";
import RightSideDetail from "./right-side-detail";
import Reviews from "components/common/reviews/index";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import Link from "next/link";
import { brandNames, getBrandKey } from "lib/utils/constants";
import SellerCardSlider from "../best-seller-card-slider";
import {
  bestSellerIds,
  customersAlsoBuyIds,
  youWillAlsoBuyIds,
} from "general-config";
import { BrandNameTypes, LocaleType } from "lib/types/common";
import { useRouter } from "next/router";
import { productViewEvent } from "lib/utils/datalayer-events";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AnimationWrapper from "../ui/animation-wrapper";
import { getBrandLink, getCategoryLink, getJewelryLink } from "./functions";
import ShopTheLook from "../ShopTheLook";
import { getReviewsApi } from "lib/middleware-apis/reviews";
import { reviewStarAvg } from "lib/utils/common";
import ProductPageScripts from "../head/pdpScripts";

interface ProductDescriptionProps {
  product: ProductType;
  reviewsData?: any;
  totalRating?: number;
  host?: string;
  brand?: BrandNameTypes;
  locale?: string;
}

const ProductDescription = ({
  product,
  locale,
  brand,
  host,
}: ProductDescriptionProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  // const [prodArray, setProdArray] = useState<ProductType | any>([]);
  // const [imageArray, setImageArray] = useState<any>([]);
  // const [link, setLink] = useState("");
  const [engagementID, setEngagementID] = useState("");
  const [engagementId, setEngagementId] = useState("");
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const router = useRouter();

  let reviews: any = [];
  let ratings: any = [];
  let ratingAvg: any = 0;

  const { data } = useQuery({
    queryKey: ["productReviews"],
    queryFn: () => getReviewsApi(product?.entityId, appState?.region),
  });

  if (data) {
    const { results = [] } = data;
    reviews = [...results];
    ratings = reviews.map((r: any) => r.review.rating);
    if (ratings.length > 0) ratingAvg = reviewStarAvg(ratings);
  }

  product.hasStock = product?.inventory?.isInStock;

  // useEffect(() => {
  //   const getID: any =
  //     customersAlsoBuyIds?.[
  //       getBrandKey(appState?.brandEN) as "lazurde" | "missl"
  //     ]?.[router?.locale as LocaleType];
  //   setEngagementID(getID);
  //   const getId: any =
  //     youWillAlsoBuyIds?.[
  //       getBrandKey(appState?.brandEN) as "lazurde" | "missl"
  //     ]?.[router?.locale as LocaleType];
  //   setEngagementId(getId);
  //   // if (router?.locale?.split("-")[0] === "ar") {
  //   //   if (productNameAR?.[0]?.node?.value?.split(/- (.*)/s)?.length > 1) {
  //   //     product.name = productNameAR?.[0]?.node?.value?.split(/- (.*)/s)[1];
  //   //   }
  //   // } else {
  //   //   if (product?.name?.split(/- (.*)/s)?.length > 1) {
  //   //     product.name = product?.name?.split(/- (.*)/s)[1];
  //   //   }
  //   // }
  // }, [router.locale]);

  const customersAlsoBuyRecId: any =
    customersAlsoBuyIds?.[
      getBrandKey(appState?.brandEN) as "lazurde" | "missl"
    ]?.[router?.locale as LocaleType];

  const youMayAlsoLikeRecId: any =
    youWillAlsoBuyIds?.[
      getBrandKey(appState?.brandEN) as "lazurde" | "missl"
    ]?.[router?.locale as LocaleType];

  const brandNameAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Brand AR"
  );

  const typeAR = product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Type AR"
  );
  const categoryEN_L1 = product?.categories?.edges?.[1]?.node?.name;
  const categoryLink = getCategoryLink(product);

  const jewelryLink = getJewelryLink(
    appState?.brandEN,
    brandNames,
    categoryLink
  );

  // useEffect(() => {
  //   const redirectBreadcrumbs = getBrandLink(appState?.brandEN, brandNames);
  //   redirectBreadcrumbs && setLink(redirectBreadcrumbs);
  // }, [appState?.brandEN]);

  const redirectBreadcrumbs = getBrandLink(appState?.brandEN, brandNames);
  const link = redirectBreadcrumbs || "";

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    productViewEvent(product, customerData?.entityId, appState);
  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   // setProdArray([product]);
  //   // setImageArray(product?.imagesArray);
  // }, [product]);

  // useEffect(() => {
  //   productViewEvent(product, customerData?.entityId, appState);
  // }, [product, customerData?.entityId]);

  return (
    <>
      <ProductPageScripts
        scriptPageType="Product"
        reviews={reviews}
        product={product}
        ratingAvg={ratingAvg}
        locale={locale}
        brand={brand}
      />
      <div className={styles["product-description-wrapper"]}>
        <div className={styles["product-desc-breadcrumb"]}>
          <Link href={link} prefetch={false}>
            <a className={styles["link"]}>{appState?.brand}</a>
          </Link>
          <div className={styles["divider"]}>/</div>

          <Link href={jewelryLink} prefetch={false}>
            <a className={styles["link"]}>
              {appState?.lang === "ar"
                ? "مجوهرات"
                : "jewelry".toLocaleLowerCase()}
            </a>
          </Link>

          {categoryEN_L1 && (
            <>
              <div className={styles["divider"]}>/</div>
              <Link
                href={`${
                  link === "/" ? "" : link
                }/${"jewelry"}/${categoryLink}`}
                prefetch={false}
              >
                <a className={styles["link"]}>
                  {appState?.lang === "ar" ? (
                    <>{typeAR?.[0]?.node?.value}</>
                  ) : (
                    <>{categoryEN_L1}</>
                  )}
                </a>
              </Link>
            </>
          )}
          <div className={styles["divider"]}>/</div>

          <p className={styles["link"]}>{product?.newTitle}</p>
        </div>
        <div className={styles["upper-section"]}>
          <div className={styles["left-side"]}>
            <ImageSection
              imageArray={product?.imagesArray}
              title={product?.newTitle}
              sku={product?.sku}
            ></ImageSection>
          </div>
          <div className={styles["right-side"]}>
            <AnimationWrapper animationDelay="0.4s">
              <RightSideDetail
                productData={[product]}
                productChildren={product?.children}
                totalRating={ratingAvg}
                item={product}
              />
            </AnimationWrapper>
          </div>
        </div>

        <div className={styles["product-feature-detail"]}>
          <AnimationWrapper animationDelay="0.4s" lazyLoad={true}>
            <ProductDetail productData={product} />
          </AnimationWrapper>
        </div>

        <div className={styles["pdp-bottom-section"]}>
          <div className={styles["block-section"]}>
            {product?.relatedProducts?.edges?.length > 0 && (
              <ShopTheLook product={product} host={host} />
            )}
          </div>

          {product?.relatedProducts?.edges?.length === 0 && (
            <SellerCardSlider
              engagementid={customersAlsoBuyRecId}
              heading={t("CustomerAlsoBuy")}
              items={{ [product?.sku]: 1 }}
              className={styles["pdp-cusalsobuy-sec"]}
            />
          )}

          <SellerCardSlider
            engagementid={youMayAlsoLikeRecId}
            heading={t("YouMayAlsoLike")}
            items={{ [product?.sku]: 1 }}
            className={styles["pdp-youmayalsolike-sec"]}
          />
          <AnimationWrapper animationDelay="0.4s" lazyLoad={true}>
            <Reviews
              totalRating={ratingAvg}
              productData={product}
              reviewsData={reviews}
            />
          </AnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
