import React from "react";
import styles from "./style.module.scss";
import ProductCard from "../product-card/ProductCard";
import { ProductType } from "lib/types/product";
import useTranslation from "next-translate/useTranslation";
import Slider from "../ui/slider/slider";
import { SwiperSlide } from "swiper/react";
interface ShopTheLookProps {
  product: ProductType;
  host?: string;
}

const ShopTheLook = ({ product, host }: ShopTheLookProps) => {
  const { t } = useTranslation("common");

  const productHasStock = product?.relatedProducts?.edges?.filter(
    (item: any) => {
      return item?.node?.inventory?.isInStock === true;
    }
  );
  return (
    <>
      {productHasStock?.length > 0 && (
        <div className={styles["shopthelook-products_wrapper"]}>
          <div className={styles["shopthelook-heading"]}>
            {t("shopTheLook")}
          </div>
          <div
            className={styles["shopthelook-products-cards"]}
            data-testid="shopthelook-card"
          >
            <Slider
              desktopSlidePerView={5}
              mobileSlidePerView={1.349}
              navigation={true}
              scrollbar={true}
              className={`shopthelook-card-slider`}
            >
              <>
                {product?.relatedProducts?.edges?.length &&
                  product?.relatedProducts?.edges?.map(
                    (product: any, index: any) => {
                      const {
                        name,
                        defaultImage,
                        sku,
                        entityId,
                        inventory,
                        prices,
                        customFields,
                      } = product?.node;
                      const percentageDiscount =
                        ((prices?.basePrice?.value - prices?.salePrice?.value) /
                          prices?.basePrice?.value) *
                        100;
                      const brandNameArabic = customFields?.edges?.filter(
                        (field: any) => field?.node?.name === "Brand AR"
                      );
                      const ItemNameArabic = customFields?.edges?.filter(
                        (field: any) => field?.node?.name === "New Title AR"
                      );
                      return (
                        <>
                          {inventory?.isInStock && (
                            <SwiperSlide key={index}>
                              <ProductCard
                                key={entityId}
                                index={entityId}
                                item={product?.node}
                                title={name?.split("-")[1]?.trim()}
                                titleAr={ItemNameArabic?.[0]?.node?.value
                                  ?.split("-")[1]
                                  ?.trim()}
                                brandAr={brandNameArabic?.[0]?.node?.value}
                                sku={sku}
                                itemId={Number(entityId)}
                                shopTheLookImage={defaultImage}
                                isShopTheLook={true}
                                currency={prices?.price?.currencyCode}
                                basePrice={prices?.basePrice?.value}
                                salePrice={prices?.salePrice?.value}
                                hasDiscount={
                                  prices?.salePrice?.value
                                    ? prices?.salePrice?.value !=
                                      prices?.basePrice?.value
                                    : null
                                }
                                percentageDiscount={percentageDiscount}
                                wrapperClassName={styles["shopTheLook-card"]}
                                hasStock={inventory?.isInStock}
                                host={host}
                              />
                            </SwiperSlide>
                          )}
                        </>
                      );
                    }
                  )}
              </>
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopTheLook;
