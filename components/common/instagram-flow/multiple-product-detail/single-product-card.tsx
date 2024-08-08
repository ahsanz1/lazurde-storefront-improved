import React, { useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import styles from "./style.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { useCart } from "lib/utils/cart";
import { ATCPayload } from "lib/types/cart";
import { changeLocaleFormat, desktopScreenSize } from "lib/utils/common";
import WishList from "components/common/wishlist/index";
import { BC_CHANNEL_ID } from "general-config";
import { useQueryClient } from "@tanstack/react-query";

const SingleProductCard = ({
  index,
  data,
  productData = {},
}: any): JSX.Element => {
  const {
    openDrawer,
    setOpenMiniCart,
    setInstaMiniCartStyle,
    setInstaTooltipHover,
    instaWishlistStyle,
  } = useContext(AppContext);
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const { addOrCreateCartMutation } = useCart();
  const [fill, setFill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl =
    productData?.defaultImage?.url640wide ||
    productData?.images?.edges?.[0]?.node?.url640wide;
  const queryClient = useQueryClient();
  const customer: any = queryClient.getQueryData(["customerData"]);

  const getProductPricing = () => {
    if (!productData?.prices?.price?.value) return;
    return (
      <>
        <div className={styles["price-wrapper"]}>
          {/* {productPricing?.base ? (
            <Label
              className={`${styles["base-price"]} ${
                productPricing?.discountAmount !== "0"
                  ? styles["line-through"]
                  : ""
              }`}
            >
              {`${productPricing?.currency} ${
                productPricing?.base && productPricing?.base?.toLocaleString()
              }`}
            </Label>
          ) : null}
          {productPricing?.discountAmount !== "0" ? (
            <Label className={styles["discount"]}>
              {`${productPricing?.discountFormatted} ${t("off")}`}
            </Label>
          ) : null}
          {productPricing?.finalPrice &&
          productPricing?.discountAmount !== "0" ? (
            <Label className={styles["final-price"]}>
              {`${productPricing?.currency} ${
                productPricing?.finalPrice &&
                productPricing?.finalPrice?.toLocaleString()
              }`}
            </Label>
          ) : null} */}
          <Label className={styles["final-price"]}>
            {`${
              productData?.prices?.price?.currencyCode
            } ${productData?.prices?.price?.value.toLocaleString()}`}
          </Label>
        </div>
      </>
    );
  };

  const handleAddToCart = async (data: any) => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${productData?.entityId}`,
        sku: `${productData?.sku}`,
      });
    setIsLoading(true);
    if (!productData?.inventory?.isInStock) {
      setIsLoading(false);
      return;
    }
    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: productData?.entityId,
        },
      ],
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };
    addOrCreateCartMutation.mutate(
      { payload, item: productData },
      {
        onSuccess: () => {
          setIsLoading(false);
          setInstaMiniCartStyle(true);
          setOpenMiniCart(true);
          openDrawer("miniCartTimeOut", true);
          setTimeout(() => {
            setInstaMiniCartStyle(false);
            setOpenMiniCart(false);
          }, 3000);
          setIsLoading(false);
        },
        onError: () => {
          setInstaMiniCartStyle(false);
          setOpenMiniCart(false);
          //   response?.code === "ITEM_OUT_OF_STOCK" && setOutOfStockError(true);
        },
      }
    );
  };

  return (
    <div
      key={index}
      className={`show-arrow-on-hover ${styles["insta-product-card"]}`}
      onMouseEnter={() => {
        setInstaTooltipHover({
          index: index,
          hover: true,
        });
      }}
      onMouseLeave={() => {
        setInstaTooltipHover({
          index: index,
          hover: false,
        });
      }}
    >
      <div className={styles.img_wrapper}>
        <div
          className={`${styles["wishlist-icon"]} ${
            instaWishlistStyle ? styles["set-zindex"] : ""
          }`}
          onClick={() => setFill(!fill)}
        >
          <WishList itemId={productData?.entityId} />
        </div>
        {/* <Slider
          productSlider={true}
          desktopSlidePerView={1}
          mobileSlidePerView={1}
          scrollbar={false}
          navigation={true}
          pagination={true}
          className={`insta-product-slider`}
        >
          <>
            {productCardImages &&
              productCardImages.length > 0 &&
              productCardImages?.map((data: any, index: number) => {
                const imageUrl = data?.url;
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "100% !important",
                    }}
                  >
                    {imageUrl && (
                      <Image
                        src={data?.url}
                        alt={data?.altText}
                        width={width > desktopScreenSize ? 201 : 167}
                        height={width > desktopScreenSize ? 194 : 166}
                        layout="responsive"
                        className={styles["product-img"]}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
          </>
        </Slider> */}
        <Image
          src={imageUrl || "/"}
          alt={"product img"}
          width={width > desktopScreenSize ? 201 : 167}
          height={width > desktopScreenSize ? 194 : 166}
          layout="responsive"
          className={styles["product-img"]}
        />
      </div>
      <div className={styles.content}>
        <Label className={styles.title}>{productData?.name}</Label>
        {getProductPricing()}
        <div className={styles.addtobtn} data-loading={isLoading}>
          <Button
            buttonSize="sm"
            buttonText={t("addToCart")}
            onClick={() => {
              handleAddToCart(data);
            }}
            isLoading={isLoading}
            spinnerText={t("adding")}
            spinnerSize={16}
            spinnerWidth={6}
          />
        </div>
        {!productData?.inventory?.isInStock && (
          <div className={styles["error-msg"]}>{t("outOfStock")}</div>
        )}
      </div>
    </div>
  );
};

export default SingleProductCard;
