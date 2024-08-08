import React, { useState, useContext, useRef, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "lib/utils/useWindowSize";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import Label from "components/common/ui/label";
import Slider from "components/common/ui/slider/slider";
import Button from "components/common/ui/button";
import { ImageType } from "lib/types/common";
import { AppContext } from "lib/context";
import { useCart } from "lib/utils/cart";
import { ATCPayload, CartItem } from "lib/types/cart";
import {
  changeLocaleFormat,
  checkMediaType,
  desktopScreenSize,
  setCookieOptionForCheckout,
} from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import WishList from "components/common/wishlist/index";
import { brandNames } from "lib/utils/constants";
import SizeChart from "../product-description/right-side-detail/size-selection";
import { BC_CHANNEL_ID, isDev } from "general-config";
import { useQueryClient } from "@tanstack/react-query";
import Heading from "../ui/heading";
import ContentLoader from "react-content-loader";
import { useCustomer } from "lib/middleware-apis/customers";
import {
  addItemEventFromPlp,
  onProductClickedEvent,
} from "lib/utils/datalayer-events";
import Link from "next/link";
import { setCookie } from "tiny-cookie";
import Spinner from "../ui/spinner";

interface ProductCardProps {
  item?: CartItem | { [key: string]: any };
  index?: number;
  title?: string;
  basePrice?: number | string;
  salePrice?: number | string;
  hasDiscount?: boolean;
  discount?: string;
  productCardImages?: string[];
  onlineExclusiveTag?: boolean;
  sku?: string;
  itemId?: number;
  priceListId?: string;
  currency?: string;
  wrapperClassName?: string;
  swipperClassName?: string;
  categoryName?: string;
  childCategory?: string;
  parentCategory?: string;
  showATC?: boolean;
  variants?: { node: { options: { edges: [] }; entityId: number } }[];
  colorName?: string;
  colorValue?: string;
  ribbons?: { [key: string]: { color: string; text: string } };
  hasStock?: boolean;
  host?: any;
  isShopTheLook?: boolean;
  shopTheLookImage?: { [key: string]: string };
  percentageDiscount?: number;
  brandAr?: string;
  titleAr?: string;
  lowStock?: boolean;
  productTag?: string;
}

const ProductCard = ({
  item = {},
  sku = "",
  itemId = null,
  priceListId = "",
  title = "",
  productCardImages = [],
  onlineExclusiveTag = false,
  index = 0,
  basePrice,
  salePrice,
  hasDiscount,
  currency = "",
  wrapperClassName,
  swipperClassName,
  showATC = true,
  variants = [],
  categoryName = "",
  childCategory = "",
  parentCategory = "",
  colorName = "",
  colorValue = "",
  ribbons = null,
  hasStock = false,
  host,
  shopTheLookImage = {},
  isShopTheLook = false,
  percentageDiscount = 0,
  brandAr = "",
  titleAr = "",
  lowStock = false,
  productTag = ""
}: ProductCardProps): JSX.Element => {
  const [width] = useWindowSize();
  const { appState, openDrawer, setOpenMiniCart, exponeaCookie, toast } =
    useContext(AppContext);
  const { addOrCreateCartMutation, createQuickBuyCartMutation } = useCart();
  const [fill, setFill] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const [outOfStockError, setOutOfStockError] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showSecond, setShowSecond] = useState("");
  const [quickButtonLoading, setQuickButtonLoading] = useState(false);
  const [showVariantDrawer, setShowVariantDrawer] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);
  const [isPdpLoading, setIsPdpLoading] = useState(false);
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const parentId = itemId;
  const hasVariantsOptions = useRef(
    variants[0]?.node?.options?.edges?.length > 0
  );
  const { customerLoginJWT } = useCustomer();
  const selectedVariantId = useRef(variants[0]?.node?.entityId);
  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));
  const { newIn = null, onlineExclusive = null } = ribbons || {
    newIn: null,
    onlineExclusive: null,
  };

  useEffect(() => {
    setOutOfStockError(false);
  }, [sku, priceListId]);

  if (isPdpLoading) {
    setTimeout(() => {
      setIsPdpLoading(false);
    }, 5000);
  }
  const handleAddToCart = async () => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${itemId}`,
        sku: `${sku}`,
      });
    setOutOfStockError(false);
    // const inventoryResponse = await getProductInventory(item?.sku || sku);

    // if (!inventoryResponse) {
    //   setButtonLoading(false);
    //   setShowVariantDrawer(false);
    //   return;
    // }

    // const itemPricingObject = item?.promotion;
    // const itemPrice = itemPricingObject?.price;
    // const discount = getDiscountType(itemPricingObject?.discount);

    // const payload: ATCPayload = {
    //   cartId: cartId,
    //   items: [
    //     {
    //       sku: item?.sku,
    //       itemId: item?.itemId,
    //       quantity: 1,
    //       priceListId: itemPricingObject?.priceList,
    //       price: {
    //         currency: itemPrice?.currency,
    //         amount: itemPrice?.base,
    //         discount: {
    //           discountAmount: discount?.discountAmount,
    //         },
    //       },
    //     },
    //   ],
    // };
    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: itemId,
        },
      ],
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };
    addOrCreateCartMutation.mutate(
      { payload, item: item },
      {
        onSuccess: async () => {
          !isShopTheLook &&
            (document.documentElement.style.overflowY = "hidden");
          width < desktopScreenSize && isShopTheLook
            ? toast(
              appState?.lang === "ar"
                ? "يتم إضافة المنتج إلى الحقيبة"
                : `Product is added to bag`
            )
            : openDrawer("miniCartTimeOut", true);
          width < desktopScreenSize && isShopTheLook
            ? setOpenMiniCart(false)
            : setOpenMiniCart(true);
          setButtonLoading(false);
          setShowVariantDrawer(false);
          addItemEventFromPlp(
            "add_to_cart",
            item,
            customerData?.entityId,
            parentCategory,
            childCategory
          );
        },
        onError: () => {
          setButtonLoading(false);
          setShowVariantDrawer(false);
          //   response?.code === "ITEM_OUT_OF_STOCK" && setOutOfStockError(true);
        },
      }
    );
  };

  const handleQuickBuy = async () => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${itemId}`,
        sku: `${sku}`,
      });
    setOutOfStockError(false);

    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: itemId,
        },
      ],
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };
    createQuickBuyCartMutation.mutate(
      { payload },
      {
        onSuccess: async (value) => {
          document.documentElement.style.overflowY = "hidden";
          // customerData?.entityId > 0
          //   ? router.push(await customerLoginJWT())
          //   : router.push("/checkout-form");
          addItemEventFromPlp(
            "add_to_cart",
            item,
            customerData?.entityId,
            parentCategory,
            childCategory
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
          setShowVariantDrawer(false);
        },
      }
    );
  };

  const misslBrand = router?.pathname?.includes("miss-l")

  const getSelectedSizeDetails = (item: CartItem | any) => {
    selectedVariantId.current = item;
  };

  // const splitTitle = title?.split(/- (.*)/s);
  // const titleInUrl =
  //   appState?.lang === "en"
  //     ? `${splitTitle?.[1]?.trim()}-sku-${encodeURIComponent(sku)}`
  //     : `${item?.title_en
  //         ?.split(/- (.*)/s)?.[1]
  //         ?.trim()}-sku-${encodeURIComponent(sku)}`;

  const currentLocale = router?.locale?.split("-")?.[0];
  const pdpTitle =
    currentLocale === "en" ? title : isShopTheLook ? title : item?.title_en;
  const originalTitle =
    isShopTheLook && appState?.lang === "ar" ? titleAr : title;
  const pdpUrl = `${pdpTitle
    ?.trim()
    ?.replace(/&/, "and")
    ?.split(" ")
    ?.join("-")
    .toLowerCase()}-sku-${encodeURIComponent(sku).toLocaleLowerCase()}`;

  const routeToPdp = () => {
    onProductClickedEvent(
      {
        ...item,
        parentCategory: parentCategory,
        childCategory: childCategory,
      },
      customerData?.entityId ? "" : exponeaCookie?.[appState?.region],
      customerData?.entityId || ""
    );
  };

  const returnPdpUrl = () => {
    switch (appState?.brandEN) {
      case brandNames?.missl:
        // router.push(`/miss-l/p/${pdpUrl}`);
        return `${host || "https://www.lazurde.com"}/${router?.locale
          }/miss-l/p/${pdpUrl}`;
        break;
      case brandNames.waves:
        // router.push(`/waves/p/${pdpUrl}`);
        return `${host || "https://www.lazurde.com"}/${router?.locale
          }/waves/p/${pdpUrl}`;
        break;
      default:
        // router.push(`/p/${pdpUrl}`);
        return `${host || "https://www.lazurde.com"}/${router?.locale
          }/p/${pdpUrl}`;
        break;
    }
  };
  let imageUrl = "";
  let imageUrl2 = "";
  let count = 0;

  const firstImage = productCardImages.find(image =>
    image.includes("1__")
  );
  const secondImage = productCardImages.find(image =>
    image.includes("2__")
  );
  const imagesToShow = [firstImage, secondImage].filter(image => image);

  return (
    <div
      className={`show-arrow-on-hover ${styles["product-card__wrapper"]} ${wrapperClassName}`}
      key={index}
    >
      {productTag && productTag !== "N/A" ?
        <div className={styles["product-card__product-tag"]} data-content-background={misslBrand}>
          <span className={styles["tag-text"]}>{productTag}</span>
        </div>
        : lowStock ?
          <div className={styles["product-card__product-tag"]} data-content-background={misslBrand}>
            <span className={styles["tag-text"]}>{t("onlyFewLeftTag")}</span>
          </div> : null}

      {width > desktopScreenSize ? <>
        <div
          className={`${styles["product-card__img-wrapper"]}`}
          onClick={() => {
            setIsPdpLoading(true);
          }}
        >
          <>
            {productCardImages && productCardImages.length > 0 ? (
              productCardImages?.map((data, index) => {
                const hasImage = productCardImages?.filter((image) =>
                  image?.includes("1__")
                );
                const _hasImage = productCardImages?.filter((image) =>
                  image?.includes("2__")
                );
                if (hasImage?.length < 1) {
                  imageUrl = data;
                }
                if (hasImage?.length > 0) {
                  imageUrl = hasImage?.[0];
                }
                if (_hasImage?.length > 0) {
                  imageUrl2 = _hasImage?.[0];
                }
                if (imageUrl && count > 0) return null;
                count = 1;
                return (
                  <>
                    <Link key={index} href={returnPdpUrl() || "/"}>
                      <a onClick={() => routeToPdp()}>
                        <SwiperSlide>
                          {imageUrl &&
                            (checkMediaType(imageUrl) === "video" ? (
                              <>
                                <video
                                  autoPlay={false}
                                  muted={true}
                                  loop={true}
                                  playsInline={true}
                                  height="100%"
                                  width="100%"
                                  controls={false}
                                >
                                  <source
                                    src={`${imageUrl}#t=0.1`}
                                    type="video/mp4"
                                  />
                                </video>
                              </>
                            ) : null)}
                          {imageUrl &&
                            (checkMediaType(imageUrl) === "img" ? (
                              <Image
                                src={imageUrl}
                                alt={title || "Product Image"}
                                title={title || "Product Image"}
                                width={width > desktopScreenSize ? 314 : 167.5}
                                height={width > desktopScreenSize ? 314 : 167.5}
                                layout="responsive"
                                className={styles["product-img"]}
                                quality={100}
                                onMouseOver={(e) => {
                                  showSecond
                                    ? setShowImg(true)
                                    : setShowSecond(imageUrl2);
                                }}
                                style={{
                                  transition: "opacity 0.3s ease",
                                }}
                              ></Image>
                            ) : null)}
                          {showSecond &&
                            (checkMediaType(imageUrl) === "img" ? (
                              <Image
                                src={showSecond}
                                alt={title || "Product Image"}
                                title={title || "Product Image"}
                                width={width > desktopScreenSize ? 314 : 167.5}
                                height={width > desktopScreenSize ? 314 : 167.5}
                                layout="fill"
                                className={styles["product-img"]}
                                style={{
                                  opacity: showImg ? 1 : 0,
                                  position: "absolute",
                                  inset: 0,
                                  transition: "opacity 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                  imgLoaded && setShowImg(true);
                                }}
                                onMouseLeave={(e) => setShowImg(false)}
                                quality={100}
                                onLoadingComplete={(img) => {
                                  setImgLoaded(true);
                                  setShowImg(true);
                                }}
                              ></Image>
                            ) : null)}
                          {!imageUrl ||
                            (imageUrl &&
                              checkMediaType(imageUrl) === "skeleton") ? (
                            <SkeletonImage routeToPdp={routeToPdp} />
                          ) : null}
                        </SwiperSlide>
                      </a>
                    </Link>
                  </>
                );
              })
            ) : isShopTheLook && shopTheLookImage?.urlOriginal ? (
              <Link key={index} href={returnPdpUrl() || "/"}>
                <a onClick={() => routeToPdp()}>
                    <Image
                      src={shopTheLookImage?.urlOriginal || "/"}
                      alt={"Product Image"}
                      title={title || "Product Image"}
                      width={width > desktopScreenSize ? 314 : 167.5}
                      height={width > desktopScreenSize ? 314 : 167.5}
                      layout="responsive"
                      className={styles["product-img"]}
                      quality={100}
                    ></Image>
                </a>
              </Link>
            ) : (
              <SkeletonImage routeToPdp={routeToPdp} />
            )}
          </>
          <Ribbon hasTag={onlineExclusiveTag} styling={onlineExclusive}></Ribbon>
          <Ribbon hasTag={false} styling={newIn}></Ribbon>
          {showATC && (
            <div
              className={`${styles["product-card__addtocart-btn"]} ${styles[isShopTheLook ? "product-card__shopTheLook" : ""]
                }`}
              data-loading={buttonLoading}
            >
              {hasVariantsOptions.current && (
                <div
                  className={styles["div-variant-drawer"]}
                  data-show-drawer={showVariantDrawer}
                >
                  <SizeChart
                    className={styles["product-listing-sizes"]}
                    productSizeArray={variants}
                    sizePopup={true}
                    categoryName={categoryName}
                    onSizeChange={getSelectedSizeDetails}
                    variantId={selectedVariantId.current}
                  />
                </div>
              )}
              {!hasStock ? (
                <div className={styles["div-out-of-stock"]}>
                  <span>{t("outOfStockk")}</span>
                </div>
              ) : (
                <>
                  <Button
                    buttonStyle="black"
                    buttonText={t("addToCart")}
                    buttonSize={`${isShopTheLook ? "md" : "sm"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!showVariantDrawer && hasVariantsOptions.current) {
                        setShowVariantDrawer(true);
                        return;
                      }
                      setButtonLoading(true);
                      handleAddToCart();
                    }}
                    isLoading={buttonLoading}
                    spinnerText={t("adding")}
                    spinnerSize={16}
                    spinnerWidth={6}
                    isDisabled={!hasStock}
                  />
                  {isShopTheLook ? null : (
                    <Button
                      buttonStyle="white"
                      buttonText={t("buyNow")}
                      buttonSize={"sm"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickButtonLoading(true);
                        handleQuickBuy();
                      }}
                      isLoading={quickButtonLoading}
                      spinnerText={t("buying")}
                      spinnerSize={16}
                      spinnerWidth={6}
                      spinnerColor="black"
                      isDisabled={!hasStock}
                    />
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </> : <>
        <div
          className={`${styles["product-card__img-wrapper"]}`}
          onClick={() => {
            setIsPdpLoading(true);
          }}
        >
          <Slider
            productSlider={true}
            desktopSlidePerView={1}
            mobileSlidePerView={1}
            scrollbar={false}
            navigation={true}
            pagination={true}
            className={`product-slider ${swipperClassName} ${onlineExclusiveTag
              ? "slider-navigation-up"
              : "slider-navigation-down"
              }`}
          >
            <>

              {imagesToShow && imagesToShow.length > 0 ? (
                imagesToShow?.map((data, index): any => {
                  return (
                    <>
                      <SwiperSlide
                      >
                        <Link key={index} href={returnPdpUrl() || "/"}>

                          <a onClick={() => routeToPdp()}>
                            {data &&
                              (checkMediaType(data) === "video" ? (
                                <>
                                  <video
                                    autoPlay={false}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    height="100%"
                                    width="100%"
                                    controls={false}
                                  >
                                    <source
                                      src={`${data}#t=0.1`}
                                      type="video/mp4"
                                    />
                                  </video>
                                </>
                              ) : null)}
                            <>
                              {(data &&
                                checkMediaType(data) === "img") ? (
                                <Image
                                  src={data}
                                  width={167.5}
                                  height={167.5}
                                  alt={title || "Product Image"}
                                  title={title || "Product Image"}
                                  layout="responsive"
                                  className={styles["product-img"]}
                                  quality={100}
                                />
                              ) : null}
                            </>
                            {!data ||
                              (data &&
                                checkMediaType(data) === "skeleton") ? (
                              <SkeletonImage routeToPdp={routeToPdp} />
                            ) : null}
                          </a>
                        </Link>
                      </SwiperSlide>
                    </>
                  );
                })
              ) : isShopTheLook && shopTheLookImage?.urlOriginal ? (
                <Link key={index} href={returnPdpUrl() || "/"}>
                  <a onClick={() => routeToPdp()}>
                      <Image
                        src={shopTheLookImage?.urlOriginal || "/"}
                        alt={"Product Image"}
                        title={title || "Product Image"}
                        width={width > desktopScreenSize ? 314 : 167.5}
                        height={width > desktopScreenSize ? 314 : 167.5}
                        layout="responsive"
                        className={styles["product-img"]}
                        quality={100}
                      ></Image>
                  </a>
                </Link>
              ) : (
                <SkeletonImage routeToPdp={routeToPdp} />
              )}
            </>
          </Slider>
          <Ribbon hasTag={onlineExclusiveTag} styling={onlineExclusive}></Ribbon>
          <Ribbon hasTag={false} styling={newIn}></Ribbon>
          {showATC && (
            <div
              className={`${styles["product-card__addtocart-btn"]} ${styles[isShopTheLook ? "product-card__shopTheLook" : ""]
                }`}
              data-loading={buttonLoading}
            >
              {hasVariantsOptions.current && (
                <div
                  className={styles["div-variant-drawer"]}
                  data-show-drawer={showVariantDrawer}
                >
                  <SizeChart
                    className={styles["product-listing-sizes"]}
                    productSizeArray={variants}
                    sizePopup={true}
                    categoryName={categoryName}
                    onSizeChange={getSelectedSizeDetails}
                    variantId={selectedVariantId.current}
                  />
                </div>
              )}
              {!hasStock ? (
                <div className={styles["div-out-of-stock"]}>
                  <span>{t("outOfStockk")}</span>
                </div>
              ) : (
                <>
                  <Button
                    buttonStyle="black"
                    buttonText={t("addToCart")}
                    buttonSize={`${isShopTheLook ? "md" : "sm"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!showVariantDrawer && hasVariantsOptions.current) {
                        setShowVariantDrawer(true);
                        return;
                      }
                      setButtonLoading(true);
                      handleAddToCart();
                    }}
                    isLoading={buttonLoading}
                    spinnerText={t("adding")}
                    spinnerSize={16}
                    spinnerWidth={6}
                    isDisabled={!hasStock}
                  />
                  {isShopTheLook ? null : (
                    <Button
                      buttonStyle="white"
                      buttonText={t("buyNow")}
                      buttonSize={"sm"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickButtonLoading(true);
                        handleQuickBuy();
                      }}
                      isLoading={quickButtonLoading}
                      spinnerText={t("buying")}
                      spinnerSize={16}
                      spinnerWidth={6}
                      spinnerColor="black"
                      isDisabled={!hasStock}
                    />
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </>}
      {item?.brand || item?.["اﻟﻌﻼﻣﺔ"] ? (
        <Label className={styles["product-card__brand"]}>
          {(appState?.lang === "en" ? item?.brand?.name : brandAr) ||
            item?.brand ||
            item?.["اﻟﻌﻼﻣﺔ"]}
        </Label>
      ) : null}
      <div>
        <Link href={returnPdpUrl() || "/"}>
          <a onClick={() => routeToPdp()}>
            <Heading
              element="div"
              className={styles["product-card__title"]}
              style={{
                cursor: "pointer",
              }}
            // onClick={() => {
            //   routeToPdp();
            // }}
            >
              {originalTitle?.trim()}
            </Heading>
          </a>
        </Link>

        {colorValue ? (
          <>
            <div className={styles["color-wrapper"]}>
              <div
                className={styles["color-div"]}
                style={{
                  background: `linear-gradient(to right, ${colorValue} 0%,#ffffff 100%)`,
                }}
              ></div>

              {colorName ? (
                <Label className={styles["color-name"]}>{colorName}</Label>
              ) : null}
            </div>
          </>
        ) : null}
        <div className={styles["product-card__price-wrapper"]}>
          {basePrice ? (
            <Label
              className={`${styles["product-card__price__base-price"]} ${hasDiscount ? styles["line-through"] : ""
                }`}
            >
              {`${currency} ${basePrice?.toLocaleString()}`}
            </Label>
          ) : null}
          {(item?.discount_percentage || percentageDiscount) > 0 ? (
            <Label className={styles["product-card__price-discount"]}>
              {`-${Math.round(
                item?.discount_percentage || percentageDiscount
              )}% off`}
            </Label>
          ) : null}
          {hasDiscount && salePrice ? (
            <Label className={styles["product-card__price__discounted-price"]}>
              {`${currency} ${salePrice?.toLocaleString()}`}
            </Label>
          ) : null}
        </div>
      </div>
      {outOfStockError && (
        <div className={styles["error-msg"]}>{t("outOfStock")}</div>
      )}
      {isShopTheLook ? null : (
        <div
          className={styles["product-card__wishlist-icon"]}
          onClick={() => {
            setFill(!fill);
          }}
        >
          <WishList
            sku={sku}
            itemId={parentId}
            className={styles["plp-wishlist-icon"]}
          />
        </div>
      )}
      {isPdpLoading && (
        <div className={styles["div-loading"]}>
          <Spinner height={50} width={50} stroke={4}></Spinner>
        </div>
      )}
    </div>
  );
};
export default ProductCard;

const Ribbon = ({
  hasTag,
  styling,
}: {
  hasTag: boolean;
  styling: { color: string; text: string };
}) => {
  if (!hasTag || !styling) return null;

  return (
    <Label
      className={`${styles["product-card__tag"]}`}
      style={{ background: styling?.color }}
    >
      {styling?.text}
    </Label>
  );
};

const SkeletonImage = ({ routeToPdp }: { routeToPdp: Function }) => {
  const [width] = useWindowSize();
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      animate={false}
      viewBox={`0 0 100% 200%`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ aspectRatio: width > desktopScreenSize ? "1/1.03" : "1/1.14" }}
      onClick={() => {
        routeToPdp();
      }}
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="200%" />
    </ContentLoader>
  );
};
