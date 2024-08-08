import React, { useContext, useState, useRef } from "react";
import styles from "../insta-post-modal/style.module.scss";
import Image from "next/image";
import { changeLocaleFormat, desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import Label from "components/common/ui/label";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import Button from "components/common/ui/button";
import { ATCPayload } from "lib/types/cart";
import { useCart } from "lib/utils/cart";
import WishList from "components/common/wishlist/index";
import PpdLoader from "components/common/ui/skeletons/pdp";
import { BC_CHANNEL_ID } from "general-config";
import { useQueryClient } from "@tanstack/react-query";

type postData = {
  id?: string | number;
  caption?: string;
  media_type?: string;
  media_url?: string;
  timestamp?: string;
  username?: string;
};

interface InstaPostModalProps {
  isOpen?: boolean;
  onClose?: Function;
  postData?: postData;
  singleProductData?: any;
  isLoading?: boolean;
  priceListId?: string | number;
  multiPleProductDetail?: boolean;
  multipleProducts?: any;
  setNotifyModalOpen?: Function;
}

const SingleProductDetail = ({
  singleProductData = [],
  setNotifyModalOpen,
}: InstaPostModalProps): JSX.Element => {
  const { addOrCreateCartMutation } = useCart();
  const productData = singleProductData?.[0];
  const { openDrawer, setInstaMiniCartStyle, setOpenMiniCart } =
    useContext(AppContext);
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [fill, setFill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
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
              {`${productPricing?.currency}${
                productPricing?.base && productPricing?.base.toLocaleString()
              }`}
            </Label>
          ) : null}
          {productPricing?.discountAmount !== "0" ? (
            <Label className={styles["discount"]}>
              {`-${productPricing?.discountFormatted}`}
            </Label>
          ) : null}
          {productPricing?.finalPrice &&
          productPricing?.discountFormatted !== "0" ? (
            <Label className={styles["final-price"]}>
              {`${productPricing?.currency} ${
                productPricing?.finalPrice &&
                productPricing?.finalPrice.toLocaleString()
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

  const handleAddToCart = async () => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${productData?.entityId}`,
        sku: `${productData?.sku}`,
      });
    setIsLoading(true);
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
          openDrawer("miniCartTimeOut", true);
          setOpenMiniCart(true);
          setTimeout(() => {
            setInstaMiniCartStyle(false);
            setOpenMiniCart(false);
          }, 3000);
        },
        onError: () => {
          setInstaMiniCartStyle(false);
          setOpenMiniCart(false);
          //   response?.code === "ITEM_OUT_OF_STOCK" &&
          //     setSelectedItem({ ...selectedItem, hasStock: false });
        },
      }
    );
  };

  return (
    <>
      {isLoadingDetail ? (
        <div
          style={{
            height: width > desktopScreenSize ? "100%" : "400px",
          }}
        >
          <PpdLoader />
        </div>
      ) : (
        <>
          {Object.keys(productData)?.length > 0 ? (
            <>
              <div className={styles.product_img}>
                <div
                  className={styles["wishlist-icon"]}
                  onClick={() => setFill(!fill)}
                  role="wishlist"
                >
                  <WishList itemId={productData?.entityId} />
                </div>
                <Image
                  src={imageUrl || "/"}
                  alt={"product image"}
                  width={width > desktopScreenSize ? 407 : 343}
                  height={width > desktopScreenSize ? 306 : 308}
                  layout="responsive"
                />
                {/* {productData?.["Online Exclusive"] ? (
                  <Label className={styles.exclusive_tag}>
                    {t("onlineExclusiveTag")}
                  </Label>
                ) : null} */}
              </div>
              <div className={styles.product_detail}>
                <div className={styles["title-div"]}>
                  <Label className={styles.title} role="title">
                    {productData?.name}
                  </Label>
                  {productData?.inventory?.isInStock === false ? (
                    <Label className={styles["outofstock-tag"]}>
                      {t("outOfStock")}
                    </Label>
                  ) : null}
                </div>
                {getProductPricing()}
                <Label className={styles.content} role="description">
                  {productData?.plainTextDescription}
                </Label>
                <div className={styles.addtocart_btn}>
                  {productData?.inventory?.isInStock ? (
                    <Button
                      buttonSize="sm"
                      buttonText={t("addToCart")}
                      onClick={() => {
                        handleAddToCart();
                      }}
                      testId="addtocart"
                      isLoading={isLoading}
                      spinnerText={t("adding")}
                      spinnerSize={16}
                      spinnerWidth={6}
                      isDisabled={isLoading}
                    />
                  ) : (
                    <Button
                      className={styles["book-apt-btn"]}
                      buttonSize={"xl"}
                      buttonText={t("notifyMeWhenAvailable")}
                      buttonStyle="black"
                      testId="notifyMemodalBtn"
                      onClick={() => {
                        setNotifyModalOpen && setNotifyModalOpen(true);
                      }}
                      style={{
                        width: "217px",
                        height: "40px",
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles["no-item-found"]}>
                <Label>{t("noItemFound")}</Label>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SingleProductDetail;
