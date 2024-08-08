import React, { useEffect, useState, useContext } from "react";
import styles from "./cart.module.scss";
import { useCart } from "lib/utils/cart";
import { Bag, CrossSmall } from "components/icons";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import {
  changeLocaleFormat,
  desktopScreenSize,
  setCookieOptionForCheckout,
} from "lib/utils/common";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartItemObject, LocaleType } from "lib/types/common";
import { BC_CHANNEL_ID, youWillAlsoBuyIds } from "general-config";
import Button from "../ui/button";
import { ATCPayload, ATCUpdatePayload } from "lib/types/cart";
import CartItem from "../cart-item";
import { useQueryClient } from "@tanstack/react-query";
import { useWishlist } from "lib/utils/wishlist";
import { BCProductType, avaiableItemsProps } from "lib/types/product";
import Spinner from "../ui/spinner";
import { AppContext } from "lib/context";
import { useCustomer } from "lib/middleware-apis/customers";
import Head from "next/head";
import { fetchAllProducts, fetchProduct } from "lib/utils/product";
import SellerCardSlider from "../best-seller-card-slider";
import {
  addOrRemoveItemEvent,
  viewCartEvent,
} from "lib/utils/datalayer-events";
import { getBrandKey } from "lib/utils/constants";
import { setCookie } from "tiny-cookie";
import Script from "next/script";

const Cart = (): JSX.Element => {
  const { appState, allWishListProducts, toast } = useContext(AppContext);
  const {
    addOrCreateCartMutation,
    updateCartMutation,
    removeCartMutation,
    useGetCart,
    deleteCartMutation,
    checkCartInventory,
    getProductsDetailOfCartItems,
  } = useCart();
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deletingWishList, setDeletingWishList] = useState(false);
  const { data: currentCartData = {}, isLoading: isLoadingCart } = useGetCart({
    enabled: false,
  });
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const { useGetWishlist, removeWishlistMutation } = useWishlist();
  const { data: storedWishlistData }: any = useGetWishlist();
  const [addingItems, setAddingItems] = useState(false);
  const [addAllToBagShow, setAddAllToBagShow] = useState("");
  const [outOfStock, setOutOfStock] = useState(null);
  const { customerLoginJWT } = useCustomer();
  const [currentProductsDetail, setCurrentProductsDetail] = useState([]);

  // useEffect(() => {
  //   if (
  //     APPLE_PAY_MERCHANT_ID &&
  //     //@ts-ignore
  //     window &&
  //     //@ts-ignore
  //     window.ApplePaySession &&
  //     //@ts-ignore
  //     ApplePaySession.canMakePaymentsWithActiveCard(APPLE_PAY_MERCHANT_ID)
  //   ) {
  //     setShowApplePayBtn(true);
  //   }
  // }, []);
  const handleChange = async (value: number, item: CartItemObject) => {
    // let payload = {
    //   cartId: currentCartData?.cartId || null,
    //   items: [
    //     {
    //       lineItemId: item?.lineItemId,
    //       quantity: value ? Number(value) : 1,
    //       itemId: item?.itemId,
    //     },
    //   ],
    // };
    setOutOfStock(false);
    const payload: ATCUpdatePayload = {
      line_item: {
        quantity: value ? Number(value) : 1,
        product_id: item?.product_id,
      },
      channel_id: BC_CHANNEL_ID,
    };
    // const response = await updateItemOfCart(payload, item?.id);
    updateCartMutation.mutate(
      {
        payload: payload,
        itemId: item?.id,
        item: item,
      },
      {
        onError: (error) => {
          setOutOfStock(item?.product_id);
        },
      }
    );
    return true;
  };

  const removeItem = async (item: CartItemObject) => {
    removeCartMutation.mutate(
      { itemId: item?.id, item: item },
      {
        onSuccess: () => {
          addOrRemoveItemEvent(
            "remove_from_cart",
            item,
            customerData?.entityId,
            item?.quantity
          );
        },
      }
    );
  };

  const removeWishListItem = async (itemIds: any) => {
    setDeletingWishList(true);
    let itemId = itemIds;
    if (itemId?.length > 0) {
      itemId = itemIds;
    }
    if (itemId?.entityId) {
      itemId = [itemIds?.entityId];
    }

    removeWishlistMutation.mutate(
      {
        itemId: itemId,
        customerId: customerData?.entityId,
      },
      {
        onSuccess: () => {
          setDeletingWishList(false);
          setAddingItems(false);
        },
      }
    );
  };

  const addAllToBag = async (data: any) => {
    const availableItems = data;
    // const availableItems = data.filter(
    //   (items: avaiableItemsProps) =>
    //     items?.node?.product?.variants?.edges?.[0]?.node?.inventory
    //       ?.isInStock == true
    // );
    let itemIds: Number[] = [];
    const itemsArray = availableItems?.map((filter: avaiableItemsProps) => {
      const selectedProduct: {
        sku?: string;
        entityId?: number;
        Size?: number;
        Color?: string;
      } = filter?.node?.product;
      if (typeof window !== "undefined")
        window.BrTrk?.getTracker().logEvent("cart", "click-add", {
          prod_id: `${selectedProduct.entityId}`,
          sku: `${selectedProduct.sku}`,
        });
      const itemObject = {
        quantity: 1,
        product_id: selectedProduct?.entityId,
      };
      itemIds.push(filter?.node?.entityId);
      return itemObject;
    });

    const payload: ATCPayload = {
      customer_id: customerData?.entityId,
      line_items: itemsArray,
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };
    addOrCreateCartMutation.mutate(
      { payload, item: itemsArray },
      {
        onSuccess: () => {
          removeWishListItem(itemIds);
          if (availableItems.length == 0) {
            setAddAllToBagShow(
              `${
                allWishListProducts.length > 1 ? `Items aren't` : `Item isn't `
              } available in the stock`
            );
          }
        },
      }
    );
  };

  const renderSpinner = () => {
    return <Spinner width={12} height={12} stroke={6} />;
  };

  const itemOutOfStock = storedWishlistData?.filter(
    (inventoryCheck: any) =>
      inventoryCheck?.node?.product?.variants?.edges?.[0]?.node?.inventory
        ?.isInStock == true
  );

  const renderWishListSection = () => {
    return (
      <>
        <div
          className={styles["bag-wrapper"]}
          style={{
            marginTop: width > desktopScreenSize ? "8px" : "",
          }}
        >
          <div className={styles["wishlist-wrap"]}>
            <span role="main-heading" className={styles["main-heading"]}>
              {t("yourWishList")}
            </span>
            {storedWishlistData?.length > 0 && (
              <>
                {addAllToBagShow === "" ? (
                  <div
                    role="bag-opt"
                    className={
                      styles[
                        itemOutOfStock?.length > 0
                          ? "add-to-bag-btn"
                          : "add-to-bag-btn"
                      ]
                    }
                  >
                    {addingItems ? (
                      renderSpinner()
                    ) : (
                      <Bag
                        fill={
                          itemOutOfStock?.length > 0 ? "#000000" : "#000000"
                        }
                        stroke={
                          itemOutOfStock?.length > 0 ? "#000000" : "#000000"
                        }
                        width="16px"
                        height="16px"
                      />
                    )}
                    <button
                      onClick={() => {
                        setAddingItems(true);
                        addAllToBag(storedWishlistData);
                      }}
                      role="something"
                      disabled={false}
                    >
                      {appState?.lang === "en"
                        ? addingItems
                          ? "Adding..."
                          : "Add All to Bag"
                        : addingItems
                        ? "جارٍ الإضافة ..."
                        : "أضف الكل إلى الحقيبة"}
                    </button>
                  </div>
                ) : (
                  <div className={styles["wishlist-stock-error"]}>
                    {addAllToBagShow && addAllToBagShow}
                  </div>
                )}
              </>
            )}
          </div>

          <>
            {storedWishlistData?.length > 0 ? (
              storedWishlistData?.map((item: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <CartItem
                      key={item?.node?.product_id}
                      item={item?.node}
                      wishListItem={true}
                      removeItem={removeWishListItem}
                      updatingCartItem={deletingWishList}
                      responsiveData={true}
                    />
                    {index < storedWishlistData?.length - 1 && <hr />}
                  </React.Fragment>
                );
              })
            ) : (
              <div
                style={{
                  marginTop: "10px",
                }}
              >
                {t("noWishlistItemsFound")}
              </div>
            )}
          </>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            marginTop: width > desktopScreenSize ? "8px" : "",
          }}
        >
          {!isLoadingCart && (
            <SellerCardSlider
              engagementid={
                youWillAlsoBuyIds?.[
                  getBrandKey(appState?.brandEN) as "lazurde" | "missl"
                ]?.[router?.locale as LocaleType]
              }
              heading={t("YouMayAlsoLike")}
              items={recommendationSection}
              isCartPage={true}
            />
          )}
        </div>
      </>
    );
  };

  const items = currentCartData?.line_items?.physical_items?.map(
    (item: any, index: number) => {
      return JSON.stringify({
        item_id: item?.sku,
        item_name: item?.name,
        affiliation: "https://lazurde.com/router?.locale",
        discount: item?.discount_amount,
        index: index,
        item_list_id: item?.id,
        item_list_name: item?.name,
        location_id: item?.product_id,
        price: item?.sale_price,
        quantity: item?.quantity,
      });
    }
  );

  const cartHasItems =
    currentCartData &&
    Object.keys(currentCartData).length !== 0 &&
    currentCartData?.line_items?.physical_items?.length > 0;

  const calculateDiscount =
    currentCartData?.base_amount - currentCartData?.cart_amount;

  let recommendationSection = {};
  items?.map((item: string) => {
    const parsedItem = JSON.parse(item || "{}");
    recommendationSection = {
      ...recommendationSection,
      [parsedItem?.item_id]: 1,
    };
  });

  useEffect(() => {
    if (
      !isLoadingCart &&
      currentCartData?.line_items?.physical_items?.length < 1
    )
      return;
    currentCartData?.line_items?.physical_items &&
      viewCartEvent(
        currentCartData?.line_items?.physical_items,
        customerData?.entityId
      );
  }, [isLoadingCart, customerData?.entityId, recommendationSection]);

  const [hasGoldCoinOrBar, setHasGoldCoinOrBar] = useState(false);

  useEffect(() => {
    (async () => {
      const productsDetail = await getProductsDetailOfCartItems(
        currentCartData
      );
      const _hasGoldCoinOrBar = productsDetail?.every((product: any) => {
        const customFields = product?.node?.customFields?.edges;
        return customFields?.some(
          (field: { node?: { value?: string } }) =>
            field?.node?.value === "Gold Coin" ||
            field?.node?.value === "Gold Bar"
        );
      });
      setHasGoldCoinOrBar(_hasGoldCoinOrBar);
    })();
  }, [currentCartData?.line_items?.physical_items]);
  return (
    <>
      {items?.length > 0 && (
        <Script id="cart-items">
          {`gtag("event", "purchase", {
            transaction_id: ${currentCartData?.id},
            value: ${currentCartData?.cart_amount},
        currency: ${currentCartData?.currency?.code}
        items: [${items?.length > 0 ? items : null}]
          });`}
        </Script>
      )}
      <div className={styles["cart-wrapper"]}>
        <div className={styles["flex-wrap"]}>
          <div className={styles["inner-wrapper"]}>
            <div className={styles["shipping-column"]}>
              <div className={styles["bag-wrapper"]}>
                <div className={styles["div-cart-heading"]}>
                  <span role="bag-heading" className={styles["main-heading"]}>
                    {t("bag")}
                  </span>
                  {cartHasItems ? (
                    <Button
                      buttonText={t("removeAll")}
                      buttonStyle="underline"
                      style={{ width: "100px" }}
                      isLoading={deleteCartMutation?.isLoading}
                      spinnerText={"Removing"}
                      spinnerSize={14}
                      hasSpinner={false}
                      onClick={() => {
                        deleteCartMutation.mutate();
                      }}
                    ></Button>
                  ) : null}
                </div>
                {isLoadingCart ? (
                  <div>{t("loading")}</div>
                ) : (
                  <>
                    {cartHasItems ? (
                      currentCartData?.line_items?.physical_items?.map(
                        (item: CartItemObject, index: number) => {
                          return (
                            <React.Fragment key={item?.id}>
                              <CartItem
                                key={item?.id}
                                item={item}
                                // userAuth={userAuth}
                                handleChange={handleChange}
                                removeItem={removeItem}
                                cartPageBagItem={true}
                                responsiveData={true}
                                updatingCartItem={isLoadingCart}
                                outOfStock={
                                  item?.exceedingQuantity ||
                                  item?.outOfStock ||
                                  outOfStock
                                }
                                setOutOfStock={setOutOfStock}
                              />

                              {index <
                                currentCartData?.line_items?.physical_items
                                  ?.length -
                                  1 && <hr />}
                            </React.Fragment>
                          );
                        }
                      )
                    ) : (
                      <div className={styles["empty-cart-note"]}>
                        <span>{t("continueShopping")}</span>
                        <span>
                          {`${t("click")} `}
                          <Link href="/">
                            <a>
                              <b
                                style={{
                                  color: "#000",
                                  textDecoration: "underline",
                                }}
                              >
                                {t("here")}
                              </b>
                            </a>
                          </Link>{" "}
                          {`${t("toContinue")}.`}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            {width > desktopScreenSize ? renderWishListSection() : null}
          </div>
          <div className={styles["inner-wrapper"]}>
            {cartHasItems ? (
              <div className={styles["summary-card"]}>
                <span role="summary-heading">{t("summary")}</span>
                <div className={styles["order-details"]}>
                  <div>
                    <span role="subHeading">
                      {appState?.region === "eg" ||
                      hasGoldCoinOrBar ||
                      currentCartData?.VAT_Tax > 0
                        ? t("subTotalForEgypt")
                        : t("subTotal")}
                    </span>
                    <span data-amount={true}>
                      {currentCartData?.currency?.code}{" "}
                      {currentCartData?.VAT_Tax > 0
                        ? currentCartData?.SubTotal_Ex_TAX
                        : currentCartData?.base_amount?.toLocaleString()}
                    </span>
                  </div>
                  {appState?.region === "sa" && currentCartData?.VAT_Tax > 0 ? (
                    <div>
                      <span role="tax">{t("taxVat")}</span>
                      {currentCartData?.base_amount && (
                        <span data-amount={true}>
                          {currentCartData?.currency?.code}{" "}
                          {currentCartData?.VAT_Tax?.toLocaleString()}
                        </span>
                      )}
                    </div>
                  ) : null}

                  {calculateDiscount > 0 ? (
                    <div>
                      <span role="shpping-text">{t("Discount")}</span>
                      <span data-amount={true}>
                        - {currentCartData?.currency?.code}{" "}
                        {calculateDiscount &&
                          Number(calculateDiscount).toLocaleString()}
                      </span>
                    </div>
                  ) : null}
                </div>

                <hr className={styles["horizontal-divider"]} />
                {currentCartData?.discount_amount > 0 ? (
                  <>
                    <div className={styles["order-details"]}>
                      <div>
                        <span data-amount={true}>{t("Total Discount")}</span>
                        <span
                          className={styles["discount-value"]}
                          data-amount={true}
                        >
                          - {currentCartData?.currency?.code}
                          {currentCartData?.discount_amount?.toLocaleString()}`
                        </span>
                      </div>
                    </div>
                    <hr className={styles["horizontal-divider"]} />
                  </>
                ) : null}

                <div className={styles["order-details"]}>
                  <div>
                    <span role="totalPay" data-amount={true}>
                      {t("totalToPay")}
                    </span>
                    <span data-amount={true}>
                      {currentCartData?.currency?.code}{" "}
                      {currentCartData?.cart_amount?.toLocaleString()}
                    </span>
                  </div>
                </div>
                <hr className={styles["horizontal-divider"]} />
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Button
                    role="checkoutBtn"
                    className={styles["checkout-button"]}
                    onClick={async () => {
                      // if (currentCartData?.allItemsAvailable) {
                      setIsCheckingOut(true);
                      const hasOutofStock = await checkCartInventory(
                        currentCartData
                      );

                      if (hasOutofStock?.length < 1) {
                        setIsCheckingOut(true);
                        setCookie(
                          "refferForCheckout",
                          JSON.stringify(router?.asPath),
                          setCookieOptionForCheckout()
                        );
                        router.push(await customerLoginJWT());
                        // customerData?.entityId > 0
                        //   ? router.push(await customerLoginJWT())
                        //   : router.push("/checkout-form");
                      } else {
                        if (hasOutofStock?.length === 1) {
                          toast(t("oneOutOfStockNow"));
                        } else {
                          toast(t("manyOutOfStockNow"));
                        }
                        setIsCheckingOut(false);
                      }
                    }}
                    isLoading={isCheckingOut}
                  >
                    {t("checkout")}
                  </Button>
                  {/* {currentCartData?.hasOwnProperty("allItemsAvailable") &&
                !currentCartData?.allItemsAvailable ? (
                  <Error
                  error={"Remove unavailable items to proceed"}
                  className={styles["checkout-error"]}
                  />
                ) : null} */}
                </div>

                {/* Commented for now bcz we cannot use payment buttons before going to checkout */}

                {/* <div className={styles["half-divider"]}>
                <hr />
                <span role="continueText" data-divider={true}>
                {appState?.lang === "en"
                ? "Or Continue With"
                : t("orContinueWith")}
                </span>
                <hr />
              </div> */}
                {/* <div className={styles["external-btns"]}> */}
                {/* {showApplePayBtn && (
              <div
              className={styles["apple-pay-button"]}
              onClick={() => {
                beginApplePaySession(
                  "US",
                      "USD",
                      (Math.random() * (100.0 - 0.0) + 0.0)
                    );
                  }}
                  ></div>
                )} */}
                {/* <button className={styles["paypal-btn"]}>
                  <Image
                  src={"/paypal-logo.png"}
                  alt="paypal-image"
                  width={174}
                  height={40}
                  quality={100}
                  />
                </button> */}
                {/* </div> */}
              </div>
            ) : null}
            {/* {width > desktopScreenSize ? (
              <NeedHelpSection
                className={cartHasItems ? "" : "empty-cart-style"}
              />
            ) : null} */}
          </div>
          {/* <div className={styles["flex-wrap"]}> */}
          {width < desktopScreenSize ? renderWishListSection() : null}
          {/* {width < desktopScreenSize ? <NeedHelpSection /> : null} */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Cart;
