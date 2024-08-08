/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import Label from "components/common/ui/label";
import styles from "./style.module.scss";
import { Heart } from "components/icons";
import { Bag, CrossSmall } from "components/icons";
import Spinner from "components/common/ui/spinner";
import Button from "components/common/ui/button";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import WishListItems from "../wishlist-item/wishlist-Item";
import { useCart } from "lib/utils/cart";
import { BC_CHANNEL_ID } from "general-config";
import { ATCPayload } from "lib/types/cart";
import { useWishlist } from "lib/utils/wishlist";
import { useQueryClient } from "@tanstack/react-query";
import { BCProductType, avaiableItemsProps } from "lib/types/product";
import { useRouter } from "next/router";
import { changeLocaleFormat } from "lib/utils/common";
import { brandNames } from "lib/utils/constants";

interface arabicDataProps {
  myReviewHeading?: string;
  myPastReviews?: string;
  myWishlistHeading?: string;
}

const MyWishList = (): JSX.Element => {
  const { t } = useTranslation("common");
  const [addingItems, setAddingItems] = useState(false);
  const [compRender, setCompRender] = useState(false);
  const [adding, setAdding] = useState(false);
  const { cartId, appState, allWishListProducts, openDrawer } =
    useContext(AppContext);
  const { addOrCreateCartMutation } = useCart();
  const { removeWishlistMutation, useGetWishlist } = useWishlist();
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const router = useRouter();
  const { data: storedWishlistData }: any = useGetWishlist();
  const arabicData: arabicDataProps = t(
    "accountReviewData",
    {},
    { returnObjects: true }
  );

  const stockChecked = storedWishlistData?.every(
    (item: avaiableItemsProps) =>
      item?.node?.product?.variants?.edges?.[0]?.node?.inventory?.isInStock ==
      false
  );

  const [renderCom, setRenderCom] = useState(false);
  const [addAllToBagShow, setAddAllToBagShow] = useState("");

  useEffect(() => {
    setRenderCom(true);
  }, []);

  useEffect(() => {
    if (allWishListProducts?.length === 0) {
      setAddingItems(false);
    }
    setCompRender(true);
  }, [appState?.region, allWishListProducts]);

  const removeWishListItem = async (item: any) => {
    let itemId = item;
    if (itemId?.length > 0) {
      itemId = item;
    }
    if (itemId?.entityId) {
      itemId = [item?.entityId];
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
    setAdding(true);
    const availableItems = data;
    // const availableItems = data.filter(
    //   (items: avaiableItemsProps) =>
    //     items?.node?.product?.variants?.edges?.[0]?.node?.inventory
    //       ?.isInStock === true
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
          setAddingItems(false);
          if (availableItems.length == 0) {
            setAddAllToBagShow(
              `${
                allWishListProducts.length > 1 ? `Items aren't` : `Item isn't `
              } available in the stock`
            );
          }
          if (storedWishlistData?.length === availableItems?.length) {
            router?.push(
              appState?.brandEN === brandNames?.missl ? "/miss-l/cart" : "/cart"
            );
          } else {
            openDrawer("miniCartTimeOut", true);
          }
        },
      }
    );
  };

  const renderSpinner = () => {
    return <Spinner width={12} height={12} stroke={6} />;
  };

  const displayingItemsNumber = () => {
    return appState?.lang === "en"
      ? `Displaying ${storedWishlistData?.length} ${
          storedWishlistData?.length > 1 ? "Items" : "Item"
        }`
      : ` العرض ${storedWishlistData?.length} العناصر`;
  };

  return (
    <>
      {renderCom && (
        <>
          <div
            role="wishlistHeart"
            className={styles["account-wishlist-wrapper"]}
          >
            <div
              className={`${styles["wishlist-heading"]} ${
                allWishListProducts?.length > 0 ? "" : styles["pb-sixteen"]
              }`}
            >
              <Heart fill={"black"} />
              <Label role="mywishlist" className={styles["label"]}>
                {appState?.lang === "en"
                  ? "my wish list"
                  : arabicData?.myWishlistHeading}
              </Label>

              <div className={styles["wishlist-main"]}>
                <div className={styles["wishlist-items-numbers"]}>
                  {storedWishlistData?.length > 0 ? (
                    <p
                      role="wishlist-notice"
                      className={styles["wishlist-notice"]}
                    >
                      {displayingItemsNumber()}
                    </p>
                  ) : null}
                </div>
                {storedWishlistData?.length > 0 && (
                  <>
                    {addAllToBagShow === "" ? (
                      <div role="bag-opt" className={styles["add-to-bag-btn"]}>
                        {addingItems ? (
                          renderSpinner()
                        ) : (
                          <Bag
                            fill={stockChecked ? "Black" : "Black"}
                            stroke={stockChecked ? "Black" : "Black"}
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
                          // disabled={stockChecked}
                          style={{
                            color: stockChecked ? "Black" : "Black",
                            pointerEvents: stockChecked ? "auto" : "auto",
                          }}
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
            </div>
            {storedWishlistData?.length > 0 ? null : (
              <>
                <div className={styles["wishlist-notices"]}>
                  <p role="null-items">{t("any items ")}</p>

                  <div className={styles["shopping-btn"]}>
                    <Button
                      buttonSize="sm"
                      onClick={() => {
                        router?.push("/");
                      }}
                      testId="shoppingbtn"
                    >
                      {t("Start Shopping")}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
          {storedWishlistData?.length > 0 && (
            <div role="items" className={styles["account-wishlist-wrapper"]}>
              {storedWishlistData.length > 0 &&
                storedWishlistData.map((item: any) => {
                  return (
                    compRender && (
                      <WishListItems
                        key={item.itemId}
                        item={item?.node}
                        removeWishListItem={removeWishListItem}
                        renderSpinner={renderSpinner}
                        adding={adding}
                        updatingWishlistItem={removeWishlistMutation?.isLoading}
                      />
                    )
                  );
                })}
            </div>
          )}
          {storedWishlistData?.length > 0 && (
            <div className={styles["display-item-number"]}>
              <p role="item-num">{displayingItemsNumber()}</p>
              {!compRender && <>{renderSpinner()} ...</>}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyWishList;
