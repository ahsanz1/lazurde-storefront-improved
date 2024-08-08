import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./right-side-detail.module.scss";
import WriteAReview from "components/common/reviews/write-review";
import Button from "components/common/ui/button";
import Label from "components/common/ui/label";
import StarRating from "components/common/ui/star-ratings";
import ButtonATC from "components/common/ui/button-add-to-cart";
import SubDetail from "./sub-detail";
import WishList from "components/common/wishlist";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import {
  ATCPayload,
  ATCUpdatePayload,
  CartItem,
  CartObject,
} from "lib/types/cart";
import { useCart } from "lib/utils/cart";
import { useQueryClient } from "@tanstack/react-query";
import Modal from "components/common/ui/modal";
import NotifyMeForm from "components/common/notify-me-form";
import {
  changeLocaleFormat,
  setCookieOptionForCheckout,
  useIsomorphicLayoutEffect,
} from "lib/utils/common";
import { useRouter } from "next/router";
import ItemNotAvailableTag from "components/common/ui/item-not-availabletag";
import PpdLoader from "components/common/ui/skeletons/pdp";
import { BC_CHANNEL_ID } from "general-config";
import Heading from "components/common/ui/heading";
import { useCustomer } from "lib/middleware-apis/customers";
// import TabbyModal from "components/common/tabby-popup";
// import TamaraModal from "components/common/tamara-popup";
import Image from "next/image";
import { addOrRemoveItemEvent } from "lib/utils/datalayer-events";
import { setCookie } from "tiny-cookie";
import { jewelryExists } from "components/common/check-jewelry-exist";
// import VariantsByPrice from "./price-selection";
import { fetchProduct } from "lib/utils/product";
// import BambuserPopup from "components/common/bambuser-popup";
import dynamic from "next/dynamic";

const DynamicTabbyModal = dynamic(
  () => import("components/common/tabby-popup"),
  {
    ssr: false,
  }
);

const DynamicTamaraModal = dynamic(
  () => import("components/common/tamara-popup"),
  {
    ssr: false,
  }
);

const DynamicBambuserPopup = dynamic(
  () => import("components/common/bambuser-popup"),
  { ssr: false }
);

type ProductProps = {
  Size?: number;
  Color?: string;
  sku?: string;
  itemId?: string;
  hasStock?: Boolean;
};
interface RightSideDetailProps {
  onSizeChange?: Function;
  itemId?: string | number;
  productChildren?: ProductProps[];
  totalRating?: number;
  onColorChange?: Function;
  productData?: any;
  priceListId?: string;
  setIsloading?: Function;
  item?: any;
}

const RightSideDetail = ({
  productChildren = [],
  totalRating = 0,
  productData = [],
  item = {},
}: RightSideDetailProps): JSX.Element => {
  const {
    addOrCreateCartMutation,
    updateCartMutation,
    createQuickBuyCartMutation,
    useGetCart,
  } = useCart();
  const productDataCopy = useRef(
    productChildren?.length > 0 ? productChildren : productData
  ).current;
  const allProductPrices = useRef([]);
  const { openDrawer, appState } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [quantityCounter, setQuantityCounter] = useState(0);
  const [itemID, setItemID] = useState("");
  const [selectedItem, setSelectedItem] = useState(productDataCopy[0]);
  selectedItem.hasStock = productDataCopy?.[0]?.inventory?.isInStock;
  const [isLoadingData, setIsloadingData] = useState<boolean>(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [quickButtonLoading, setQuickButtonLoading] = useState(false);
  const [isItemAvailableInRegion, setIsItemAvailableInRegion] = useState(true);
  // const [variantPrice, setVariantPrice] = useState(0);
  const { customerLoginJWT } = useCustomer();
  const { t } = useTranslation("common");
  const { data: currentCartData = {} } = useGetCart({
    enabled: false,
  });

  // Hardcoded jewelryId. To work properly here should be productId or sku of a product which is equal sku field in trillion dashboard
  // const jewelryId = productData[0].sku;
  const jewelryId = "lazurde-earrings";

  //Checking if jewelryId exist in trillion database
  const [isJewelryExist, setJewelryExist] = useState<boolean>(false);
  useEffect(() => {
    jewelryExists(jewelryId).then((response) => {
      setJewelryExist(response);
    });
  }, []);

  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const cartData: CartObject =
    queryClient.getQueryData(["cartData"]) || currentCartData;
  const router = useRouter();
  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));

  const variants = productData[0]?.variants?.edges || [];
  // const hasVariantsOptions = useRef(
  //   variants[0]?.node?.options?.edges?.length > 0
  // );
  // const hasVariantsOptions = variants[0]?.node?.options?.edges?.length > 0;
  const selectedVariantId = useRef(0);

  useEffect(() => {
    const productMatch = cartData?.line_items?.physical_items?.filter(
      (item: any) => {
        return item?.product_id === productData[0].entityId;
      }
    );
    setItemID(productMatch?.[0]?.id);
    if (productMatch?.[0]?.quantity > 0) {
      setQuantityCounter(productMatch?.[0]?.quantity);
    } else {
      setQuantityCounter(0);
    }
  }, [cartData?.line_items?.physical_items, productData?.[0]]);

  useEffect(() => {
    variants?.map(async (variant: any) => {
      const varSku = variant?.node?.sku;
      const variantDetails = await fetchProduct(varSku, appState?.region);

      if (
        Number(item?.prices?.basePrice?.value) ===
        Number(variantDetails?.prices?.price?.value)
      ) {
        const getObj = variantDetails?.variants?.edges?.find(
          (val: any) => val?.node?.sku === variantDetails?.sku
        );
        selectedVariantId.current = getObj?.node?.entityId;
      }
    });
  }, [variants]);

  useIsomorphicLayoutEffect(() => {
    if (productDataCopy?.length < 1) return;
    productDataCopy.map(
      (item: { hasStock: boolean }) => delete item?.["hasStock"]
    );

    allProductPrices.current = [];
    // getProductSku(productDataCopy?.[0]);
  }, []);

  useIsomorphicLayoutEffect(() => {
    getProductSku(selectedItem);
    // if (!isItemAvailableInRegion) {
    // }
  }, [productData]);

  const onSizeChange = (item: any) => {
    selectedVariantId.current = item;
    getProductSku(item);
  };

  const productBrandAR = productData?.[0]?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "Brand AR"
  );

  const productArabicAR = productData?.[0]?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );

  const getProductSku = async (productItem: CartItem) => {
    setIsloadingData(false);

    // if (productDataCopy?.length < 1) return;
    // let skuType = "";
    // if (Number(productItem?.Size) > -1) skuType = "sizeOnly";

    // if (selectedColor?.color)
    //   skuType = skuType === "sizeOnly" ? "sizeAndColor" : "colorOnly";

    // const item = productDataCopy?.find((item: ProductProps) => {
    //   let selectedSku = false;
    //   switch (skuType) {
    //     case "sizeOnly":
    //       selectedSku = Number(item?.Size) === Number(productItem?.Size);
    //       break;
    //     case "colorOnly":
    //       selectedSku = item?.Color === selectedColor?.color;
    //       break;
    //     case "sizeAndColor":
    //       selectedSku =
    //         Number(item?.Size) === Number(productItem?.Size) &&
    //         item.Color === selectedColor?.color;
    //       break;
    //     default:
    //       selectedSku = true;
    //       break;
    //   }
    //   return selectedSku;
    // });

    // if (!item) return;

    // await getSelectedPrice(item || productDataCopy[0]);
    // await getProductInventory(item || productDataCopy[0]);

    // setSelectedItem({ ...item });
    // setIsloadingData(false);
    // for (let index = 0; index < productDataCopy?.length; index++) {
    //   if (index === 0) continue;
    //   if (productDataCopy[index]?.hasOwnProperty("hasStock")) continue;
    //   const remainigItem = productDataCopy[index];
    //   await getProductInventory(remainigItem);
    // }
    // return item;
  };
  const getProductPricing = (className?: string) => {
    const percentageDiscount =
      ((item?.prices?.basePrice?.value - item?.prices?.salePrice?.value) /
        item?.prices?.basePrice?.value) *
      100;
    const hadDifferentSale =
      percentageDiscount &&
      item?.prices?.salePrice?.value != item?.prices?.basePrice?.value;
    return (
      <>
        <div className={`${styles[className]} ${styles["price-wrapper"]}`}>
          <div className={styles["price-inner-div"]}>
            {item?.prices?.basePrice ? (
              <Label
                className={`${styles["base-price"]} ${
                  hadDifferentSale ? styles["line-through"] : ""
                }`}
              >
                {/* {`${item?.prices?.price?.currencyCode} ${
                  hasVariantsOptions && variantPrice > 0
                    ? variantPrice?.toLocaleString()
                    : item?.prices?.basePrice?.value.toLocaleString()
                }`} */}
                {`${
                  item?.prices?.price?.currencyCode
                } ${item?.prices?.basePrice?.value.toLocaleString()}`}
              </Label>
            ) : null}
            {percentageDiscount ? (
              <Label className={styles["discount"]}>
                {`${Math.round(percentageDiscount)}% ${t("off")}`}
              </Label>
            ) : null}
          </div>
          {hadDifferentSale ? (
            <div>
              <Label className={styles["final-price"]}>
                {`${
                  item?.prices?.price?.currencyCode
                } ${item?.prices?.salePrice?.value?.toLocaleString()}`}
              </Label>
            </div>
          ) : null}
        </div>
      </>
    );
  };

  const handleQuickBuy = async () => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${productData[0].entityId}`,
        sku: `${productData[0].sku}`,
      });
    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: productData[0].entityId,
          // variant_id: selectedVariantId.current,
        },
      ],
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };
    createQuickBuyCartMutation.mutate(
      { payload },
      {
        onSuccess: async (value) => {
          // customerData?.entityId > 0
          //   ? router.push(await customerLoginJWT())
          //   : router.push("/checkout-form");
          // setQuickButtonLoading(false);
          addOrRemoveItemEvent(
            "add_to_cart",
            productData[0],
            customerData?.entityId
          );
          setCookie(
            "refferForCheckout",
            JSON.stringify(router?.asPath),
            setCookieOptionForCheckout()
          );
          router.push(
            await customerLoginJWT(value?.redirect_urls?.checkout_url)
          );
        },
        onError: () => {
          setQuickButtonLoading(false);
        },
      }
    );
  };

  const handleChange = async (value: number) => {
    const payload: ATCUpdatePayload = {
      line_item: {
        quantity: value ? Number(value) : 1,
        product_id: productData[0].entityId,
        // variant_id: selectedVariantId.current,
      },
      channel_id: BC_CHANNEL_ID,
    };
    updateCartMutation.mutate(
      {
        payload: payload,
        itemId: itemID,
        item: productData[0],
      },
      {
        onSuccess: () => {
          openDrawer("miniCartTimeOut", true);
          setQuantityCounter(quantityCounter - 1);
          addOrRemoveItemEvent(
            "remove_from_cart",
            productData[0],
            customerData?.entityId,
            quantityCounter - 1
          );
        },
        onError: () => {},
      }
    );
  };

  const handleAddToCart = async () => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${productData[0].entityId}`,
        sku: `${productData[0].sku}`,
      });

    setIsAddingToCart(true);

    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: productData[0].entityId,
          // variant_id: selectedVariantId.current,
        },
      ],
      channel_id: BC_CHANNEL_ID,
      locale: changeLocaleFormat(appState?.currentLocale),
    };

    addOrCreateCartMutation.mutate(
      { payload, item: productData[0] },
      {
        onSuccess: (data) => {
          setItemID(data?.line_items?.physical_items?.[0]?.id);
          setQuantityCounter(data?.line_items?.physical_items?.[0]?.quantity);
          openDrawer("miniCartTimeOut", true);
          setIsAddingToCart(false);
          setQuantityCounter(quantityCounter + 1);
          addOrRemoveItemEvent(
            "add_to_cart",
            productData[0],
            customerData?.entityId,
            quantityCounter + 1
          );
        },
        onError: () => {
          setIsAddingToCart(false);
        },
      }
    );
  };

  const notAvailabletag = (check: boolean, content: any) => {
    return (
      <>
        {check ? (
          <div className={styles["collection-and-outofstock"]}>
            <Label className={styles["collection-tag"]}>
              <>
                {/* {appState?.lang == "en" ? `Collection` : t("pdpTag-arabic")} */}
              </>
            </Label>
            <Label className={styles["outofstock-tag"]}>{content}</Label>
          </div>
        ) : null}
      </>
    );
  };

  const paymentIcons = getPaymentIcons(appState?.region);
  return (
    <div className={styles["container"]}>
      {isLoadingData && (
        <div className={styles["right-side-loader"]}>
          <PpdLoader />
        </div>
      )}
      <div className={styles["detail"]}>
        {notAvailabletag(
          isItemAvailableInRegion && selectedItem?.hasStock === false,
          t("outOfStockkk")
        )}

        <div className={styles["show-tag"]}>
          {appState?.lang === "ar" && productBrandAR?.[0]?.node?.value ? (
            <>
              <Label className={styles["category"]}>
                {productBrandAR?.[0]?.node?.value}
              </Label>
            </>
          ) : appState?.lang === "en" && productData?.[0]?.brand?.name ? (
            <>
              <Label className={styles["category"]}>
                {productData?.[0]?.brand?.name}
              </Label>
            </>
          ) : null}
        </div>

        <Heading element="h1" className={styles["title"]}>
          {/* {productData?.[0]?.newTitle ||
            (appState?.lang === "ar" && item?.name === "Gift Card"
              ? "كرت هدية"
              : item?.name)} */}
          {productData?.[0]?.newTitle}
        </Heading>
        <div className={styles["review-section"]}>
          <div className={styles["wishlist-icon"]}>
            <WishList itemId={item?.entityId} />
          </div>
          <div className={styles["rating-stars"]}>
            <StarRating
              count={5}
              rating={totalRating}
              pointerEventsNone={true}
            />
          </div>
          <div className={styles["write-review-btn"]}>
            <Button
              onClick={() => setModalOpen(true)}
              className={styles["btn"]}
            >
              {t("write a review")}
            </Button>
          </div>
        </div>
      </div>
      {getProductPricing()}

      {isItemAvailableInRegion ? (
        <>
          {/* <ColorSelection
            productData={productDataCopy}
            productSizeArray={productDataCopy}
            // onColorChange={onColorChange}
            // selectedSize={selectedSize}
            // selectedColor={selectedColor}
            // setSelectedColor={setSelectedColor}
          /> */}
          {/* {hasVariantsOptions.current ? (
            <SizeChart
              productSizeArray={variants}
              // onSizeChange={onSizeChange}
              // setSelectedSize={setSelectedSize}
              // selectedSize={selectedSize}
              onSizeChange={onSizeChange}
              variantId={selectedVariantId.current}
            />
          ) : null} */}

          {/* {hasVariantsOptions ? (
            <VariantsByPrice
              variantsArray={variants}
              onPriceChange={onSizeChange}
              variantId={selectedVariantId.current}
              setVariantPrice={setVariantPrice}
              variantPrice={variantPrice}
            />
          ) : null} */}

          <div key={router?.locale?.split("-")?.[0] || appState?.lang}>
            {appState?.region !== "eg" && (
              <>
                {appState?.region !== "ae" ? (
                  <DynamicTamaraModal
                    productPricing={item?.prices?.price?.value}
                  />
                ) : null}
                {item?.prices?.price?.value < 5000 && (
                  <DynamicTabbyModal
                    productPricing={item?.prices?.price?.value}
                  />
                )}
              </>
            )}
          </div>

          <div className={styles["div-cart-buttons"]}>
            <div className={styles["buy-buttons"]}>
              {selectedItem?.hasStock ? (
                <>
                  {/* Button added to open a trillion widget page in new tab for try-on if jewelry exist in trillion database */}
                  {/* {isJewelryExist && (
                    <Link
                      href={{
                        pathname: "/arwidget",
                        query: { jewelryId: jewelryId },
                      }}
                    >
                      <a target={"_blank"} rel="noopener noreferrer">
                        <Button
                          buttonText={t("Try on in AR")}
                          buttonSize={"fill"}
                        />
                      </a>
                    </Link>
                  )} */}
                  <ButtonATC
                    onClick={() => {
                      handleAddToCart();
                    }}
                    buttonSize={"fill"}
                    buttonText={t("addToCart")}
                    showCounter={true}
                    quantityCounter={quantityCounter}
                    setQuantityCounter={setQuantityCounter}
                    // hasVariantsOptions={hasVariantsOptions}
                    updateQuantity={handleChange}
                    itemID={itemID}
                    handleQuantity={handleAddToCart}
                    isLoading={isAddingToCart || updateCartMutation?.isLoading}
                    spinnerText={t(isAddingToCart ? "adding" : "removing")}
                    spinnerSize={16}
                    productName={
                      appState?.lang === "en"
                        ? productData?.[0]?.name
                        : productArabicAR?.[0]?.node?.value
                    }
                    item={item}
                    productPricing={getProductPricing}
                  />
                  <Button
                    className={styles["buy-now-button"]}
                    buttonStyle="white"
                    buttonText={t("buyNow")}
                    buttonSize={"fill"}
                    onClick={() => {
                      setQuickButtonLoading(true);
                      handleQuickBuy();
                    }}
                    isLoading={quickButtonLoading}
                    spinnerText={t("buying")}
                    spinnerSize={16}
                    spinnerWidth={6}
                    spinnerColor="black"
                  />
                </>
              ) : (
                <Button
                  className={styles["book-apt-btn"]}
                  buttonSize={"fill"}
                  buttonText={t("notifyMeWhenAvailable")}
                  buttonStyle="black"
                  onClick={() => {
                    setNotifyModalOpen(true);
                  }}
                ></Button>
              )}
              {(appState?.region === "sa" &&
                item?.sku === "ajp11585"?.toUpperCase()) ||
              item?.sku === "aje11432"?.toUpperCase() ||
              item?.sku === "ajp11585a"?.toUpperCase() ||
              item?.sku === "ajp11588"?.toUpperCase() ||
              item?.sku === "ajp11586"?.toUpperCase() ||
              item?.sku === "ajn02611"?.toUpperCase() ||
              item?.sku === "ajp11510a"?.toUpperCase() ||
              item?.sku === "moo0002clsbb"?.toUpperCase() ||
              item?.sku === "moo0004clsbb"?.toUpperCase() ||
              item?.sku === "moo0002risbb"?.toUpperCase() ||
              item?.sku === "moo0002brsbb"?.toUpperCase() ||
              item?.sku === "lrg50065"?.toUpperCase() ||
              item?.sku === "lne50062"?.toUpperCase() ||
              item?.sku === "lne50063"?.toUpperCase() ||
              item?.sku === "lea50063"?.toUpperCase() ? (
                // <BambuserPopup
                //   key={appState?.lang}
                //   className={styles["join-show-btn"]}
                //   scriptId={"3"}
                //   bId={"2zrx94lfpgtQlBG1FwTd"}
                //   pdpBtn={true}
                // />
                <DynamicBambuserPopup
                  key={appState?.lang}
                  className={styles["join-show-btn"]}
                  scriptId={"3"}
                  bId={"2zrx94lfpgtQlBG1FwTd"}
                  pdpBtn={true}
                />
              ) : null}
            </div>
            {/* <BambuserOneToOne
              className={styles["book-apt-btn"]}
              scriptId={`start-one-to-one`}
              bId={BAMBUSER_OTO_ORG_ID}
              queueID={""}
              pdpBtn={false}
            /> */}

            {/* <BambuserPopup
              key={appState?.lang}
              className={styles["join-show-btn"]}
              scriptId={"3"}
              bId={"Q1VOfcPYUko8ye4foLJ9"}
              pdpBtn={true}
            /> */}

            {paymentIcons && paymentIcons?.length > 0 ? (
              <div
                className={`${styles["payment-icons"]} ${
                  styles[
                    appState?.region === "eg" || appState?.region === "ae"
                      ? "space-between"
                      : ""
                  ]
                }`}
              >
                {paymentIcons?.map((img, index) => {
                  return (
                    <Image
                      key={index}
                      src={img?.imgUrl || "/"}
                      alt={img?.altText}
                      layout="fixed"
                      width={img?.width || 50}
                      height={img?.height || 17}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
          <div>
            <SubDetail
              isStockAvailable={selectedItem?.hasStock}
              productPricing={item?.prices?.price?.value}
            />
          </div>
          <WriteAReview
            isOpened={modalOpen}
            onClose={() => setModalOpen(false)}
            productData={productData[0]}
          />
        </>
      ) : (
        <>
          <ItemNotAvailableTag />
          <div className={styles.divider}></div>
        </>
      )}

      <Modal
        isOpened={notifyModalOpen}
        onClose={() => setNotifyModalOpen(false)}
        className={styles["notifyme-modal"]}
        modalBodyClassName={styles["notifyme-modal-content"]}
        bgBluryModal={true}
        modalWidth="562px"
        modalHeight="381px"
      >
        <NotifyMeForm
          item={item}
          isOpened={notifyModalOpen}
          setIsOpen={setNotifyModalOpen}
        />
      </Modal>
    </div>
  );
};
export default RightSideDetail;

const getPaymentIcons = (region: string) => {
  const paymentIcons = [
    region !== "ae" && {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/mada-pdp.svg",
      altText: "mada",
      width: 51,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/visa-pdp.svg",
      altText: "visa",
      width: 52,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/mastercard-pdp.svg",
      altText: "mastercard",
      width: 23,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/tabby-pdp.svg",
      altText: "tabby",
      width: 42,
    },
    region !== "ae" && {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/tamara-small.png",
      altText: "tamara",
      width: 51,
    },

    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/apple-paya-pdp.svg",
      altText: "apple-pay",
      width: 43,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/google_pay_logo.svg",
      altText: "google-pay",
      width: 36,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/amex-pdp.svg",
      altText: "amex",
      width: 28,
      height: 20,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/cod-pdp.svg",
      altText: "cod",
      width: 28,
      height: 20,
    },
  ]?.filter(Boolean);

  const egyptIcons = [
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/visa-pdp.svg",
      altText: "visa",
      width: 52,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/mastercard-pdp.svg",
      altText: "mastercard",
      width: 23,
    },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/valu_logo.svg",
      altText: "valu",
      width: 76,
    },
    // {
    //   imgUrl:
    //     "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/premium_card_logo.svg",
    //   altText: "premium-card",
    //   width: 30,
    //   height: 20,
    // },
    // {
    //   imgUrl:
    //     "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/google_pay_logo.svg",
    //   altText: "google-pay",
    //   width: 36,
    // },
    {
      imgUrl:
        "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/payment-icons/cod-pdp.svg",
      altText: "cod",
      width: 28,
      height: 20,
    },
  ];

  return region === "eg" ? egyptIcons : paymentIcons;
};
