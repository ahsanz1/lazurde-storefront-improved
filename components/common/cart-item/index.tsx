import React, { useEffect, useState, useContext } from "react";
import styles from "./cart-item.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { changeLocaleFormat, desktopScreenSize } from "lib/utils/common";
import { Bag, CrossSmall } from "components/icons";
import { AppContext } from "lib/context";
import { ATCPayload } from "lib/types/cart";
import Spinner from "../ui/spinner";
import { useCart } from "lib/utils/cart";
import { CartItemObject } from "lib/types/common";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import useTranslation from "next-translate/useTranslation";
import { BC_CHANNEL_ID } from "general-config";
import { useQueryClient } from "@tanstack/react-query";
import DeleteConfirmationModal from "../delete-confirmation";
import { useWishlist } from "lib/utils/wishlist";
import RegisterModal from "../register-popup";
import { addOrRemoveItemEvent } from "lib/utils/datalayer-events";
import { fetchProduct } from "lib/utils/product";

interface CartItemProps {
  item: CartItemObject;
  handleChange?: (
    // event: React.ChangeEvent<HTMLInputElement>,
    value: number,
    item: CartItemObject
  ) => void;
  updatingCartItem?: boolean;
  removeItem?: (item: CartItemObject) => void;
  getCartData?: Function;
  userAuth?: string;
  inventoryToken?: string;
  wishListItem?: boolean;
  className?: string;
  productImgWidth?: string | number;
  productImgHeight?: string | number;
  miniCartItem?: boolean;
  wishListSideBarItem?: boolean;
  cartPageBagItem?: boolean;
  removingCartData?: boolean;
  responsiveData?: boolean;
  outOfStock?: number;
  setOutOfStock?: Function;
}

const CartItem = ({
  item,
  handleChange,
  updatingCartItem = false,
  removeItem = () => {},
  wishListItem = false,
  className = "",
  productImgWidth = "",
  productImgHeight = "",
  wishListSideBarItem = false,
  miniCartItem = false,
  responsiveData = false,
  outOfStock = null,
  setOutOfStock,
}: CartItemProps): JSX.Element => {
  const { addOrCreateCartMutation } = useCart();
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const [addingItem, setAddingItem] = useState(false);
  const [showError, setShowError] = useState("");
  const [showOutOfStockError, setShowOutOfStockError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removingItem, setRemovingItem] = useState(false);
  const [title_AR, setTitle_AR] = useState("");
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const cartData: any = queryClient.getQueryData(["cartData"]);
  const { t } = useTranslation("common");
  const { createWishlistMutation, removeWishlistMutation, useGetWishlistID } =
    useWishlist();
  const { data: storedWishlistId }: any = useGetWishlistID();
  const isUserLoggedIn = customerData?.entityId > 0 ? true : false;
  const imageSrc =
    item?.product?.images?.edges?.[0]?.node?.url320wide || item?.image_url;
  const brandName = item?.brand;
  const currencyCode = cartData?.currency?.code;
  const itemId = item?.product_id || item?.entityId;
  const titleAR = item?.product?.customFields?.edges?.filter(
    (brand: any) => brand?.node?.name === "New Title AR"
  );

  const productCustomData = async () => {
    if (!item?.product) {
      const data = await fetchProduct(item?.sku, appState?.region);
      const arabicTitle = data?.customFields?.edges?.filter((custom: any) => {
        return custom?.node?.name === "New Title AR";
      });
      setTitle_AR(arabicTitle?.[0]?.node?.value?.split("-")[1]);
      return arabicTitle?.[0]?.node?.value?.split("-")[1];
    }
  };
  // const itemTitle =
  //   appState?.lang === "en"
  //     ? item?.product?.name?.split("-")[1] ||
  //       item?.name?.split("-")[1] ||
  //       item?.name ||
  //       "No Title"
  //     : titleAR?.[0]?.node?.value?.split("-")[1] ||
  //       title_AR ||
  //       (item?.name === "Gift Card" && "كرت هدية") ||
  //       "بلا عنوان";


  const itemTitle =
  appState?.lang === "en"
    ? item?.product?.name?.split("-")[1] ||
      item?.name?.split("-")[1] ||
      "No Title"
    : titleAR?.[0]?.node?.value?.split("-")[1] || title_AR || "بلا عنوان";

  // FORCING AVAILABLE FOR INITIAL TESTING. WILL NEED TO FIX THIS FLOW LATER
  item.isAvailable = true;
  const itemOutOfStock =
    item?.product?.variants?.edges?.[0]?.node?.inventory?.isInStock === true ||
    (item?.hasOwnProperty("product") &&
      !item?.product?.inventory?.isInStock &&
      itemId) ||
    outOfStock;

  useEffect(() => {
    setRemovingItem(false);
    productCustomData();
  }, []);

  const removeWishListItem = async (item: any) => {
    setRemovingItem(true);

    removeWishlistMutation.mutate(
      {
        itemId: item?.product_id || item?.entityId,
        customerId: customerData?.entityId,
      },
      {
        onSuccess: () => {
          setRemovingItem(false);
        },
      }
    );
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddtoWishlist = async (selectedItem: CartItemObject) => {
    if (isUserLoggedIn) {
      setAddingItem(true);
      createWishlistMutation.mutate(
        {
          wishlist_id: storedWishlistId,
          itemId: selectedItem?.product_id || selectedItem?.entityId,
          customerId: customerData?.entityId,
        },
        {
          onSuccess: () => {
            removeItem(selectedItem);
          },
        },
        {
          onError: () => {},
        }
      );
    } else {
      setIsModalOpen(true);
    }
  };

  const handleAddToCart = async (item: CartItemObject) => {
    if (typeof window !== "undefined")
      window.BrTrk?.getTracker().logEvent("cart", "click-add", {
        prod_id: `${item?.product?.entityId}`,
        sku: `${item?.product?.sku}`,
      });
    setAddingItem(true);
    setShowOutOfStockError(false);

    const selectedProduct: {
      sku?: string;
      entityId?: number;
      Size?: number;
      Color?: string;
    } = item?.product;

    // const productPricing = {
    //   currency: currencyCode,
    //   base: item?.totalPrice?.amount,
    //   sale: item?.totalPrice?.sale,
    //   discount: item?.totalPrice?.discount,
    //   discountAmount: 0,
    //   finalPrice: 0,
    // };

    // const payload: ATCPayload = {
    //   cartId: cartId,
    //   items: [
    //     {
    //       sku: selectedProduct && selectedProduct?.sku,
    //       itemId: selectedProduct && selectedProduct?.itemId,
    //       quantity: 1,
    //       priceListId: item?.priceListId,
    //       price: {
    //         currency: productPricing?.currency || "SAR",
    //         amount: productPricing?.base,
    //         sale: productPricing?.sale,
    //         discount: productPricing?.discount,
    //       },
    //     },
    //   ],
    // };

    const payload: ATCPayload = {
      customer_id: customerData?.entityId,
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
        onSuccess: () => {
          setAddingItem(false);
          addOrRemoveItemEvent(
            "add_to_cart",
            item?.product,
            customerData?.entityId
          );
        },
        onError: () => {
          setAddingItem(false);
        },
      }
    );
    removeItem(item);
    // if (response?.hasError) {
    //   response?.code === "ITEM_OUT_OF_STOCK" && setShowOutOfStockError(true);
    //   setAddingItem(false);
    //   return;
    // }

    // getCartData && getCartData();
  };
  const itemWishlistPrice = item?.product?.prices;

  return (
    <>
      <div className={`${styles["cart-item-wrapper"]} ${styles[className]}`}>
        <div className={styles["cart-image"]}>
          <ImageWithBrandTag
            alt={itemTitle}
            imageSrc={imageSrc}
            brand={brandName || ""}
            width={width < desktopScreenSize ? "100" : productImgWidth || "146"}
            height={
              width < desktopScreenSize ? "100" : productImgHeight || "146"
            }
            imgWrapperWidth={
              width < desktopScreenSize ? "100" : productImgHeight || "146"
            }
            isAvailable={item?.isAvailable}
          />
        </div>
        <div className={styles["item-details"]}>
          <div
            className={`${
              miniCartItem
                ? styles["item-detail-wrapper-minicart"]
                : styles["item-detail-wrapper"]
            }`}
          >
            <div className={styles["item-title"]}>
              <span>{itemTitle}</span>
            </div>

            {item?.isAvailable && !wishListItem && (
              <div className={styles["price-wrapper"]}>
                <div
                  className={`${styles["base-price"]} ${
                    item?.discount_amount || itemWishlistPrice?.salePrice?.value
                      ? styles["line-through"]
                      : ""
                  }`}
                >
                  {(item?.list_price || itemWishlistPrice?.price) && (
                    <span>{`${currencyCode || "SAR"} ${
                      item?.list_price?.toLocaleString() ||
                      itemWishlistPrice?.basePrice?.value?.toLocaleString() ||
                      "0.00"?.toLocaleString()
                    }`}</span>
                  )}
                </div>
                <div className={styles["final-price"]}>
                  {(item?.discount_amount > 0 ||
                    itemWishlistPrice?.salePrice?.value) && (
                    <span>{`${currencyCode} ${
                      item?.extended_sale_price?.toLocaleString() ||
                      itemWishlistPrice?.salePrice?.value?.toLocaleString() ||
                      "0.00"?.toLocaleString()
                    }`}</span>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* {width > mobileScreenSize && (
          <div className={styles["item-category"]}>
            <span>{appState?.lang === "en" ? "Rings" : "خواتم"}</span>
          </div>
        )} */}
          {!wishListItem && (
            <div className={styles["item-quantity"]} key={item?.quantity || 1}>
              <span>
                {`${t("Quantity")}:`}
                <input
                  role="quantityInput"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="999"
                  inputMode={"decimal"}
                  defaultValue={item?.quantity}
                  // value={value}
                  onChange={(e) => {
                    // setValue(e.target.value);
                    e.target.value = e.target.value.replace(/[^0-9 ]/g, "");
                    if (e.target.value.length > 3)
                      e.target.value = e.target.value.slice(0, 3);
                    if (Number(e.target.value) <= 0) {
                      e.target.value = "";
                    }
                    setShowError("");
                  }}
                  onKeyDown={(e) =>
                    (e.keyCode === 69 || e.keyCode === 190) &&
                    e.preventDefault()
                  }
                  onBlur={async (e) => {
                    setOutOfStock && setOutOfStock(false);
                    const enteredValue = e.target.value;
                    if (!enteredValue) {
                      if (Number(item?.quantity) === 1) {
                        e.target.value = "1";
                        return;
                      }
                      handleChange(1, item);

                      return;
                    }
                    if (
                      Number(enteredValue || 1) >= Number(item?.quantity) &&
                      Number(
                        item?.inventoryCount ||
                          1000 /*CHANGED FROM 1 FOR TESTING*/
                      ) <= Number(item?.quantity)
                    ) {
                      e.target.value = (
                        item?.inventoryCount || 1000
                      )?.toString();
                      setShowError(
                        item?.product_id?.toString() ||
                          item?.entityId.toString()
                      );
                      return;
                    }
                    if (Number(enteredValue || 1) === Number(item?.quantity)) {
                      return;
                    }
                    if (Number(enteredValue) > Number(item?.inventoryCount)) {
                      e.target.value = item?.inventoryCount?.toString();
                      setShowError(
                        item?.product_id?.toString() ||
                          item?.entityId.toString()
                      );
                      handleChange(Number(item?.inventoryCount), item);
                      return;
                    }
                    handleChange(Number(enteredValue), item);
                  }}
                  // disabled={!item?.inventoryCount || updatingItem} REMOVING FOR CART TESTING
                  disabled={updatingCartItem}
                />
              </span>
              {showError === item?.product_id?.toString() ? (
                <div>
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {t("quantityExceeds")}
                  </span>
                </div>
              ) : null}
            </div>
          )}
          <div
            className={`${responsiveData && styles["remove-addtobag-btn"]} ${
              wishListSideBarItem && styles["remove-addtobag-btn-minicart"]
            }`}
          >
            {wishListItem && (
              <div className={styles["remove-btn"]}>
                {removingItem ? (
                  <Spinner width={12} height={12} stroke={6} />
                ) : (
                  <CrossSmall
                    width={12}
                    height={12}
                    onClick={async () => {
                      if (wishListItem && !miniCartItem) {
                        setModalOpen(true);
                      } else {
                        setRemovingItem(true);
                        await removeWishListItem(item);
                      }
                    }}
                  />
                )}
                <button
                  onClick={async () => {
                    if (!wishListItem && !miniCartItem) {
                      setModalOpen(true);
                    } else {
                      setRemovingItem(true);
                      await removeWishListItem(item);
                    }
                  }}
                  disabled={addingItem || removingItem}
                  role={wishListItem ? "wishlistRemoveBtn" : "removeBtn"}
                >
                  {removingItem
                    ? appState?.lang === "en"
                      ? "Removing..."
                      : "جارٍ الإزالة…"
                    : t("Remove")}
                </button>
              </div>
            )}
            {!wishListItem && (
              <div className={styles["remove-btn"]}>
                {removingItem ? (
                  <Spinner width={12} height={12} stroke={6} />
                ) : (
                  <CrossSmall
                    width={12}
                    height={12}
                    onClick={async () => {
                      setRemovingItem(true);
                      await removeItem(item);
                    }}
                  />
                )}
                <button
                  onClick={async () => {
                    setRemovingItem(true);
                    await removeItem(item);
                  }}
                  disabled={addingItem || removingItem}
                  role={wishListItem ? "wishlistRemoveBtn" : "removeBtn"}
                >
                  {removingItem
                    ? appState?.lang === "en"
                      ? "Removing..."
                      : "جارٍ الإزالة…"
                    : t("Remove")}
                </button>
              </div>
            )}

            {!wishListItem && !miniCartItem && (
              <div className={styles["add-to-bag-btn"]}>
                {addingItem ? (
                  <Spinner width={12} height={12} stroke={6} />
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
                    handleAddtoWishlist(item);
                  }}
                  disabled={addingItem || removingItem}
                  role="addtocart"
                  className={styles["move-to-wishlist"]}
                >
                  {appState?.lang === "en"
                    ? addingItem
                      ? "Moving..."
                      : "Move To Wishlist"
                    : addingItem
                    ? "متحرك"
                    : "أضف إلى قائمة القطع المفضلة"}
                </button>
              </div>
            )}

            {/* {itemOutOfStock !== Number(itemId) && wishListItem && ( */}
            {wishListItem && (
              <div className={styles["add-to-bag-btn"]}>
                {addingItem ? (
                  <Spinner width={12} height={12} stroke={6} />
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
                    handleAddToCart(item);
                  }}
                  disabled={addingItem || removingItem}
                  role="addtocart"
                >
                  {appState?.lang === "en"
                    ? addingItem
                      ? "Adding..."
                      : "Add To Bag"
                    : addingItem
                    ? "الإزالة…"
                    : "أضف الى الحقيبة"}
                </button>
              </div>
            )}
          </div>
          {!wishListItem && itemOutOfStock == Number(itemId) ? (
            <div>
              <span style={{ color: "red", fontSize: "13px" }}>
                {t("quantityExceeds")}
              </span>
            </div>
          ) : null}
          {!wishListItem &&
          typeof itemOutOfStock !== "number" &&
          itemOutOfStock ? (
            <div>
              <span style={{ color: "red", fontSize: "13px" }}>
                {t("nowOutOfStock")}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {/* {(miniCartItem ||
        wishListSideBarItem ||
        wishListItem ||
        cartPageBagItem) &&
        item?.isAvailable && <ItemNotAvailableTag />} */}
      <DeleteConfirmationModal
        item={item}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        setRemoving={setRemovingItem}
        removeItem={removeWishListItem}
        heading={t("DeleteWishListItem")}
        content={t("DeleteWishListContent")}
      ></DeleteConfirmationModal>
      {isModalOpen ? (
        <RegisterModal
          isOpen={isModalOpen}
          onClose={onCloseModal}
          modalText={t("registerModalText")}
          modalWidth="600px"
          modalHeight="400px"
        />
      ) : null}
    </>
  );
};

export default CartItem;
