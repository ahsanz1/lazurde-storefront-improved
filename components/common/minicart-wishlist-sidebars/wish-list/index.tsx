import React, { useState, useEffect, useContext } from "react";
import styles from "../style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import { Bag, Heart, SignOut } from "components/icons";
import CartItem from "components/common/cart-item";
import { AppContext } from "lib/context";
import Button from "components/common/ui/button";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomer } from "lib/middleware-apis/customers";
import { useWishlist } from "lib/utils/wishlist";
import { ATCPayload } from "lib/types/cart";
import { BC_CHANNEL_ID } from "general-config";
import Spinner from "components/common/ui/spinner";
import { useCart } from "lib/utils/cart";
import { BCProductType, avaiableItemsProps } from "lib/types/product";

interface wishlistArabicData {
  wishList?: string;
  emptyNote?: string;
  signOut?: string;
  signUp?: string;
  signIn?: string;
}

interface WishListSidebarProps {
  closeSideBar?: Function;
}

const WishListSidebar = ({
  closeSideBar,
}: WishListSidebarProps): JSX.Element => {
  const { cartId, appState, allWishListProducts, setHandleAuthModal } =
    useContext(AppContext);
  const router = useRouter();
  const { t } = useTranslation("common");
  const [deletingWishList, setDeletingWishList] = useState(false);
  const [addingItems, setAddingItems] = useState(false);
  const [addAllToBagShow, setAddAllToBagShow] = useState("");
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);

  const { useGetWishlist, removeWishlistMutation } = useWishlist();
  const { data: savedWishListData }: any = useGetWishlist();
  const { logoutMutation } = useCustomer();
  const { addOrCreateCartMutation } = useCart();

  const wishlistArabicData: wishlistArabicData = t(
    "wishlistArabicData",
    {},
    { returnObjects: true }
  );

  const removeWishListItem = async (item: any) => {
    setDeletingWishList(true);
    removeWishlistMutation.mutate(
      {
        itemId: [item?.entityId],
        customerId: customerData?.entityId,
      },
      {
        onSuccess: () => {
          setDeletingWishList(false);
        },
      }
    );
  };

  const handleSignOut = () => {
    logoutMutation.mutate();
  };
  const handleSignUp = () => {
    router.push("/sign-up");
  };
  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const hasData =
    customerData && savedWishListData && savedWishListData?.length > 0;
  const noData =
    !customerData || !savedWishListData || savedWishListData?.length === 0;

  const removeWishListItems = async (itemIds: any) => {
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

    const payload: any = {
      customer_id: customerData?.entityId,
      line_items: itemsArray,
      channel_id: BC_CHANNEL_ID,

      locale: `${appState?.lang}-${appState?.region.toUpperCase()}`,
    };
    addOrCreateCartMutation.mutate(
      { payload, item: itemsArray },
      {
        onSuccess: () => {
          removeWishListItems(itemIds);
          if (availableItems.length == 0) {
            setAddAllToBagShow(
              `${
                allWishListProducts.length > 1 ? `Items aren't` : `Item isn't `
              } available in the stock`
            );
          }
          setAddingItems(false);
        },
      }
    );
  };

  const renderSpinner = () => {
    return <Spinner width={12} height={12} stroke={6} />;
  };

  const itemOutOfStock = savedWishListData?.filter(
    (inventoryCheck: any) =>
      inventoryCheck?.node?.product?.variants?.edges?.[0]?.node?.inventory
        ?.isInStock === true
  );

  return (
    <div
      className={
        // styles["empty-cart"]

        hasData ? styles["filled-cart-wrapper"] : styles["empty-cart"]
      }
    >
      <div className={styles.content_wrapper}>
        <div className={styles["shopabag-count"]}>
          <Heart width="40px" height="40px" fill="#000" />
          <div className={styles["shopbag-wishlist"]}>
            <Heading
              className={`${styles["shopbag-heading"]} ${
                customerData?.entityId > 0 && savedWishListData?.length > 0
                  ? styles["mb-fourty"]
                  : ""
              }`}
              element="h1"
            >
              {appState?.lang === "en"
                ? "Wish List"
                : wishlistArabicData?.wishList}
            </Heading>
            {customerData && savedWishListData?.length > 0 && (
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
                        addAllToBag(savedWishListData);
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
          {noData ? (
            <Label className={styles["shopbag-label"]}>
              {appState?.lang === "en"
                ? "View saved favorites, build-your-own charm jewelry designs and sent hints."
                : wishlistArabicData?.emptyNote}
            </Label>
          ) : null}
        </div>
        {hasData ? (
          <>
            <div className={styles.minicart_items}>
              {savedWishListData?.length > 0
                ? savedWishListData?.map((item: any, index: number) => {
                    return (
                      <React.Fragment key={index}>
                        <CartItem
                          wishListSideBarItem={true}
                          className="minicart-wishlist-item"
                          key={index}
                          item={item?.node}
                          wishListItem={true}
                          productImgWidth="100px"
                          productImgHeight="100px"
                          removeItem={removeWishListItem}
                          updatingCartItem={deletingWishList}
                          miniCartItem={true}
                        />
                        {index < savedWishListData?.length - 1 ? (
                          <hr className={styles.divider} />
                        ) : null}
                      </React.Fragment>
                    );
                  })
                : null}
            </div>

            <div className={styles["saved-product"]}>
              <Button
                buttonStyle="underline"
                buttonText={t("View All Saved Products")}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  padding: "0",
                }}
                onClick={() => {
                  router.push({
                    pathname: "/account",
                    query: { tab: "my-wishlist" },
                  });
                  closeSideBar && closeSideBar();
                }}
              />
            </div>
          </>
        ) : null}
        {/* {isWishListLoading ? (
          <MiniCartCardSkeleton count={3}></MiniCartCardSkeleton>
        ) : null} */}
      </div>
      <div className={styles.auth_btns}>
        {customerData?.entityId > 0 ? (
          <div className={styles.signout_btn} onClick={() => handleSignOut()}>
            <SignOut fill="#000000" width="20px" height="20px" />
            <span>
              {appState?.lang === "en"
                ? "sign out"
                : wishlistArabicData?.signOut}
            </span>
          </div>
        ) : (
          <>
            <Button
              buttonSize="xl"
              buttonText={
                appState?.lang === "en" ? "Sign Up" : wishlistArabicData?.signUp
              }
              onClick={() => handleSignUp()}
            />
            <Button
              buttonText={
                appState?.lang === "en" ? "Sign In" : wishlistArabicData?.signIn
              }
              buttonStyle="underline"
              className={styles.signin_btn}
              onClick={() => handleSignIn()}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default WishListSidebar;
