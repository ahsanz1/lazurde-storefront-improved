import React, { useState, useEffect, useContext } from "react";
import styles from "../style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import { Bag, IconTick, SignOut } from "components/icons";
import CartItem from "components/common/cart-item";
import { AppContext } from "lib/context";
import Button from "components/common/ui/button";
import { useRouter } from "next/router";
import { useCart } from "lib/utils/cart";
import { CartItemObject } from "lib/types/common";
import Spinner from "components/common/ui/spinner";
import MiniCartCardSkeleton from "components/common/ui/skeletons/minicart-card";
import { BC_CHANNEL_ID } from "general-config";
import { ATCUpdatePayload, CartObject } from "lib/types/cart";
import { useCustomer } from "lib/middleware-apis/customers";
import { useQueryClient } from "@tanstack/react-query";
import {
  addOrRemoveItemEvent,
  viewCartEvent,
} from "lib/utils/datalayer-events";
import { setCookie } from "tiny-cookie";
import { setCookieOptionForCheckout } from "lib/utils/common";
import { brandNames } from "lib/utils/constants";

interface MiniCartArabicDataProps {
  addToBag?: string;
  ShoppingBag?: string;
  YourShoppingBagIsEmpty?: string;
  checkoutBtnText?: string;
  totalText?: string;
  viewBag?: string;
  signOut?: string;
  signUp?: string;
  signIn?: string;
  removeAll?: string;
}

const MiniCart = (): JSX.Element => {
  const { updateCartMutation, removeCartMutation, deleteCartMutation } =
    useCart();
  const router = useRouter();
  const { t } = useTranslation("common");
  const {
    appState,
    setHandleAuthModal,
    openMiniCart,
    setOpenMiniCart,
    openDrawer,
    toast,
  } = useContext(AppContext);
  const [renderCom, setRenderCom] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [outOfStock, setOutOfStock] = useState(null);
  const [onClickLoading, setOnClickLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleRouteChange = () => {
    openDrawer("miniCart", false);
    setOpenMiniCart(false);
    setCheckoutLoading(false);
  };
  const isLoadingCart = false;
  const queryClient = useQueryClient();
  const miniCartData: CartObject = queryClient.getQueryData(["cartData"]) || {};
  const { checkCartInventory } = useCart();
  const miniCartArabicData: MiniCartArabicDataProps = t(
    "miniCartArabicData",
    {},
    { returnObjects: true }
  );
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const { logoutMutation, customerLoginJWT } = useCustomer();

  useEffect(() => {
    setRenderCom(true);

    return () => {
      setRenderCom(false);
    };
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      handleRouteChange();
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        handleRouteChange();
      });
    };
  }, [router.events]);

  router.events.on("routeChangeComplete", () => {
    setOnClickLoading(false)
    setIsLoading(false)
  });

  // useEffect(() => {
  //   if (sideBarChild?.miniCart) {
  //     setisLoadingCart(true);
  //     getCartData();
  //     return () => {
  //       setisLoadingCart(false);
  //     };
  //   }
  // }, [sideBarChild?.miniCart]);

  // useEffect(() => {
  //   (async () => {
  //     const currentPriceListId = Number(
  //       getAlgoliaPriceListId(appState?.brandEN, appState?.region)
  //     );

  //     if (appState?.region === cartData?.region) return;
  //     if (!cartData?.region) return;

  //     const itemsFromDifferentRegion =
  //       cartData?.line_items?.physical_items?.filter(
  //         (item: { Brand: string; priceListId: number }) => {
  //           return (
  //             Number(item?.priceListId) !==
  //             Number(getAlgoliaPriceListId(item?.Brand, appState?.region))
  //           );
  //         }
  //       );

  //     if (itemsFromDifferentRegion?.length < 1) await getCartByCartId();
  //     let payload: { cartId: string; items: any[] } = {
  //       cartId: miniCartData?.cartId || null,
  //       items: [],
  //     };

  //     let payloadItems: any[] = [];
  //     for (let index = 0; index < itemsFromDifferentRegion?.length; index++) {
  //       const item = itemsFromDifferentRegion[index];
  //       // const itemInventory = await getInventoryData(item?.sku);
  //       const itemPrice = await evaluatePromotions([
  //         {
  //           lineItemId: item.itemId,
  //           itemId: item.itemId,
  //           priceList: getAlgoliaPriceListId(item?.Brand, appState?.region),
  //           quantity: 1,
  //         },
  //       ]);
  //       // if (!itemInventory.hasInventory && itemPrice.length <  1) return
  //       // const discount = getDiscountType(itemPrice[0]?.discount);

  //       if (itemPrice.length < 1) continue;

  //       payloadItems = [
  //         ...payloadItems,
  //         {
  //           lineItemId: item?.lineItemId,
  //           quantity: item?.quantity,
  //           itemId: item?.itemId,
  //           priceListId: getAlgoliaPriceListId(item?.Brand, appState?.region),
  //         },
  //       ];
  //     }
  //     if (payloadItems?.length > 0) {
  //       payload.items = payloadItems;
  //       // await updateItemOfCart(payload, item?.id);
  //       // await updateItemOfCart(payload);
  //       // return;
  //     }
  //     await getCartByCartId();
  //   })();
  // }, [appState?.region]);

  // async function getCartData() {
  //   let currentCartData = { response: cartData } || (await getCartByCartId());

  //   if (currentCartData?.response) {
  //     const cartItems = currentCartData?.response;
  //     setMiniCartData(cartItems);
  //     setisLoadingCart(false);
  //   } else {
  //     setisLoadingCart(false);
  //   }
  // }

  // const destructureAttributes = (product: ProductType) => {
  //   const obj: { [key: string]: string } = {};
  //   product?.attributes?.map((attr: any) => {
  //     obj[attr?.name] = attr?.value;
  //   });
  //   return { ...product, ...obj };
  // };

  const handleChange = async (value: number, item: CartItemObject) => {
    // let payload = {
    //   cartId: miniCartData?.cartId || null,
    //   items: [
    //     {
    //       lineItemId: item?.lineItemId,
    //       quantity: value ? Number(value) : 1,
    //       itemId: item?.id,
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
    updateCartMutation.mutate(
      {
        payload: payload,
        itemId: item?.id,
        item: item,
      },
      {
        onSuccess: () => {
          setOutOfStock(false);
        },
        onError: (error) => {
          setOutOfStock(item?.product_id);
        },
      }
    );
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
        onError: () => { },
      }
    );
    return true;
  };

  const handleSignOut = () => {
    logoutMutation.mutate();
  };

  const handleSignUp = () => {
    // signUpUser();
    setHandleAuthModal({
      isCheckoutGuestUser: false,
      isModalopen: true,
      isSignInOpen: false,
      isSignUpOpen: true,
      isResetPasswordOpen: false,
      isUpdatePassModalOpen: false,
    });
  };

  const handleSignIn = () => {
    // loginUser(false, null);
    setHandleAuthModal({
      isCheckoutGuestUser: false,
      isModalopen: true,
      isSignInOpen: true,
      isSignUpOpen: false,
      isResetPasswordOpen: false,
      isUpdatePassModalOpen: false,
    });
  };

  useEffect(() => {
    if (miniCartData?.line_items?.physical_items.length < 1) return;
    miniCartData?.line_items?.physical_items &&
      viewCartEvent(
        miniCartData?.line_items?.physical_items,
        customerData?.entityId
      );
  }, [miniCartData?.line_items?.physical_items, customerData?.entityId]);

  return (
    renderCom && (
      <div
        className={
          // styles["empty-cart"]

          Object.keys(miniCartData)?.length !== 0 &&
            miniCartData?.line_items?.physical_items?.length > 0
            ? styles["filled-cart-wrapper"]
            : styles["empty-cart"]
        }
      >
        <div
          className={`${styles.content_wrapper}`}
          onPointerEnter={(event) => {
            // openDrawer();
          }}
        >
          <>
            <div className={styles["shopabag-count"]}>
              {Object.keys(miniCartData).length !== 0 &&
                miniCartData?.line_items?.physical_items?.length > 0 &&
                openMiniCart ? (
                <div className={styles["filled-cart"]}>
                  <IconTick
                    width="20"
                    height="20"
                    strokeWidth="1"
                    stroke="#000"
                  />
                  <Label role="addedtobag" className={styles.label}>
                    {miniCartArabicData?.addToBag}
                  </Label>
                </div>
              ) : null}
              <Bag width="40px" height="40px" fill="#000" />
              <div
                className={`${styles["div-mini-heading"]} ${Object.keys(miniCartData).length !== 0 &&
                  miniCartData?.line_items?.physical_items?.length > 0
                  ? styles["mb-fourty"]
                  : ""
                  }`}
              >
                <Heading
                  className={`${styles["shopbag-heading"]} `}
                  element="h1"
                  testId="shoppingbag"
                >
                  <>{miniCartArabicData?.ShoppingBag}</>
                </Heading>
                {/* {Object.keys(miniCartData).length !== 0 &&
                miniCartData?.line_items?.physical_items?.length > 0 ? (
                  <Button
                    buttonText={miniCartArabicData?.removeAll}
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
                ) : null} */}
              </div>

              {isLoadingCart ||
                (Object.keys(miniCartData).length !== 0 &&
                  miniCartData?.line_items?.physical_items?.length > 0) ? null : (
                <Label role="emptycart" className={styles["shopbag-label"]}>
                  {miniCartArabicData?.YourShoppingBagIsEmpty}
                </Label>
              )}
            </div>
            <div className={styles.minicart_items}>
              {!isLoadingCart &&
                Object.keys(miniCartData).length !== 0 &&
                miniCartData?.line_items?.physical_items?.length > 0
                ? miniCartData?.line_items?.physical_items?.map(
                  (item: CartItemObject, index: number) => {
                    return (
                      <React.Fragment key={item?.id}>
                        <CartItem
                          miniCartItem={true}
                          className="minicart-wishlist-item"
                          productImgWidth="100px"
                          productImgHeight="100px"
                          key={index}
                          item={item}
                          // userAuth={userAuth}
                          // inventoryToken={inventoryToken}
                          updatingCartItem={
                            updateCartMutation.isLoading ||
                            removeCartMutation.isLoading
                          }
                          handleChange={handleChange}
                          removeItem={removeItem}
                          outOfStock={
                            item?.exceedingQuantity ||
                            item?.outOfStock ||
                            outOfStock
                          }
                          setOutOfStock={setOutOfStock}
                        />
                        {index <
                          miniCartData?.line_items?.physical_items?.length -
                          1 ? (
                          <hr className={styles.divider} />
                        ) : null}
                      </React.Fragment>
                    );
                  }
                )
                : null}

              {isLoadingCart ? (
                <MiniCartCardSkeleton count={3}></MiniCartCardSkeleton>
              ) : null}
            </div>
            <div>
              {Object.keys(miniCartData).length !== 0 &&
                miniCartData?.line_items?.physical_items?.length > 0 &&
                !isLoadingCart ? (
                <div
                  className={styles.checkout_btn_wrapper}
                  onClick={() => {
                    // console.log("handle checkout");
                  }}
                >
                  {/* {!miniCartData?.allItemsAvailable ? ( */}
                  {/* <Error
                    error={"Remove unavailable items to proceed"}
                    className={styles["checkout-error"]}
                  /> */}
                  {/* ) : null} */}
                  <div
                    className={styles.checkout_btn}
                    onClick={async (e) => {
                      e.preventDefault();
                      setCheckoutLoading(true);

                      const hasOutofStock = await checkCartInventory(miniCartData);

                      if (hasOutofStock?.length < 1) {
                        setCheckoutLoading(true);
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
                        setCheckoutLoading(false);
                      }
                    }}
                  >
                    <Label className={styles.total_amount}>
                      {/* {miniCartData?.allItemsAvailable ? ( */}
                      <>
                        {`${miniCartArabicData?.totalText}: ${miniCartData?.currency?.code
                          } ${miniCartData?.cart_amount?.toLocaleString()}`}
                      </>
                      {/* ) : (
                        ""
                      )} */}
                    </Label>
                    {/* {miniCartData?.allItemsAvailable ? ( */}
                    <div className={styles.divider}>|</div>
                    {/* ) : null}s */}
                    <button>
                      {checkoutLoading ? (
                        <Spinner color="#fff" />
                      ) : (
                        t("Checkout")
                      )}
                    </button>
                  </div>
                  <div className={styles.viewbag_btn}>
                    <Button
                      buttonSize="lr"
                      buttonText={miniCartArabicData?.viewBag}
                      buttonStyle="white"
                      onClick={() => {
                        router?.push(
                          appState?.brandEN === brandNames?.missl
                            ? "/miss-l/cart"
                            : "/cart"
                        );
                      }}
                    />
                  </div>
                </div>
              ) : null}
              <div className={styles.auth_btns}>
                {customerData?.entityId > 0 ? (
                  <div
                    className={styles.signout_btn}
                    onClick={() => handleSignOut()}
                  >
                    <SignOut fill="#000000" width="20px" height="20px" />
                    <span>{miniCartArabicData?.signOut}</span>
                  </div>
                ) : (
                  <>
                    <Button
                      buttonSize="xl"
                      buttonText={miniCartArabicData?.signUp}
                      isLoading={isLoading}
                      onClick={(e) => {
                        setIsLoading(true)
                        e.preventDefault();
                        router?.push("/sign-up");
                      }}
                    />
                    <Button
                      buttonText={miniCartArabicData?.signIn}
                      buttonStyle="underline"
                      className={styles.signin_btn}
                      isLoading={onClickLoading}
                      spinnerColor="Black"
                      onClick={() => {
                        setOnClickLoading(true)
                        router?.push("/sign-in");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      </div>
    )
  );
};
export default MiniCart;
