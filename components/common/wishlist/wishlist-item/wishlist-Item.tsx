/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState, useContext, useEffect } from "react";
import styles from "components/common/wishlist/my-wish-list/style.module.scss";
import { Bag, CrossSmall } from "components/icons";
import { CartItemObject } from "lib/types/common";
import ItemNotAvailableTag from "components/common/ui/item-not-availabletag";
import { useCart } from "lib/utils/cart";
import { AppContext } from "lib/context/index";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import useTranslation from "next-translate/useTranslation";
import { BC_CHANNEL_ID } from "general-config";
import { ATCPayload } from "lib/types/cart";
import DeleteConfirmationModal from "components/common/delete-confirmation";
import { changeLocaleFormat } from "lib/utils/common";

interface WishListItemsProps {
  item?: CartItemObject;
  removeWishListItem: Function;
  renderSpinner: Function;
  adding: boolean;
  updatingWishlistItem: boolean;
}

const WishListItems = ({
  item,
  removeWishListItem,
  renderSpinner,
  adding,
  updatingWishlistItem,
}: WishListItemsProps) => {
  const { t } = useTranslation("common");

  const imageSrc =
    item?.image_url || item?.product?.images?.edges?.[0]?.node?.url320wide;
  const { addOrCreateCartMutation } = useCart();
  const [addingItemToCart, setAddingItemToCart] = useState(false);
  const [removingItem, setRemovingItem] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { appState, openDrawer } = useContext(AppContext);
  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));
  const titleAR = item?.product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );
  const itemTitle =
    appState?.lang === "en"
      ? item?.product?.name.split("-")[1] ||
        item?.name?.split("-")[1] ||
        "No Title"
      : titleAR?.[0]?.node?.value?.split("-")[1] || "بلا عنوان";

  useEffect(() => {
    if (!updatingWishlistItem) {
      setRemovingItem(false);
    }
  }, [updatingWishlistItem]);

  const itemOutOfStock =
    item?.product?.variants?.edges?.[0]?.node?.inventory?.isInStock === false;

  const handleAddToBag = async (item: any) => {
    setAddingItemToCart(true);
    const selectedProduct: {
      sku?: string;
      entityId?: number;
      Size?: number;
      Color?: string;
    } = item?.product;

    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: selectedProduct?.entityId,
        },
      ],
      channel_id: BC_CHANNEL_ID,

      locale: changeLocaleFormat(appState?.currentLocale),
    };

    addOrCreateCartMutation.mutate(
      { payload, item: item?.product },
      {
        onSuccess: async () => {
          await removeWishListItem(item);
          setAddingItemToCart(false);
          openDrawer("miniCartTimeOut", true);
        },
        onError: () => {
          setAddingItemToCart(false);
        },
      }
    );
  };
  const itemWishlistPrice = item?.product?.prices;

  return (
    <>
      <div className={styles["account-wishlist-main"]}>
        <div className={styles["cart-item-wrapper"]}>
          <div role="cart-img" className={styles["cart-image"]}>
            <ImageWithBrandTag
              alt={itemTitle}
              imageSrc={imageSrc || "/"}
              brand={item?.brand || ""}
              width={100}
              height={100}
              imgWrapperWidth={100}
              isAvailable={item?.isAvailable}
            />
          </div>
          <div className={styles["item-details"]}>
            <div className={styles["item-detail-wrapper"]}>
              <div className={styles["item-title"]}>
                <span role="heading">{itemTitle}</span>
              </div>
              {/* <div className={styles["price-wrapper"]}>
                <div
                  className={`${styles["base-price"]} ${
                    item?.discount_amount ||
                    itemWishlistPrice?.price?.salePrice?.value
                      ? styles["line-through"]
                      : ""
                  }`}
                >
                  {item?.list_price ||
                    (itemWishlistPrice?.price && (
                      <span>{`${itemWishlistPrice?.price?.currencyCode} ${
                        item?.list_price?.toFixed(2) ||
                        itemWishlistPrice?.basePrice?.value?.toFixed(2) ||
                        "0.00"?.toLocaleString()
                      }`}</span>
                    ))}
                </div>
                <div className={styles["final-price"]}>
                  {item?.discount_amount > 0 && (
                    <span>{`${itemWishlistPrice?.price?.currencyCode} ${
                      item?.extended_sale_price.toFixed(2) ||
                      "0.00"?.toLocaleString()
                    }`}</span>
                  )}
                </div>
              </div> */}
            </div>

            <div className={styles["item-buttons"]}>
              {/* {!itemOutOfStock && ( */}
              <div className={styles["add-to-bag-btn"]}>
                {addingItemToCart || adding ? (
                  renderSpinner()
                ) : (
                  <Bag
                    fill="#000000"
                    stroke="#000000"
                    width="16px"
                    height="16px"
                  />
                )}
                <button
                  onClick={() => {
                    handleAddToBag(item);
                  }}
                  disabled={addingItemToCart}
                  role="bagBtn"
                >
                  {appState?.lang === "en"
                    ? addingItemToCart || adding
                      ? "Adding..."
                      : "Add to Bag"
                    : addingItemToCart
                    ? "جارٍ الإضافة ..."
                    : "أضف الى الحقيبة"}
                </button>
              </div>
              {/* )} */}

              <div className={styles["remove-btn"]}>
                {removingItem ? (
                  renderSpinner()
                ) : (
                  <CrossSmall width={12} height={12} />
                )}
                <button
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  disabled={removingItem}
                  role="removebtn"
                >
                  {removingItem
                    ? appState?.lang === "en"
                      ? "Removing..."
                      : "جارٍ الإزالة…"
                    : t("Remove")}
                </button>
              </div>
            </div>
            {/* {itemOutOfStock ? (
              <div>
                <span style={{ color: "red", fontSize: "13px" }}>
                  {t("outOfStock")}
                </span>
              </div>
            ) : null} */}
          </div>
        </div>
        {/* {item?.isAvailable && <ItemNotAvailableTag />} */}
      </div>
      <DeleteConfirmationModal
        item={item}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        setRemoving={setRemovingItem}
        removeItem={removeWishListItem}
        heading={t("DeleteWishListItem")}
        content={t("DeleteWishListContent")}
      ></DeleteConfirmationModal>
    </>
  );
};
export default WishListItems;
