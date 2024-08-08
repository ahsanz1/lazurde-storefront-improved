/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import Spinner from "components/common/ui/spinner";

interface SummaryItemsProps {
  item?: any;
  appState?: any;
  removeItem?: Function;
  isCheckoutComplete?: boolean;
}

const SummaryItem = ({
  item,
  removeItem,
  isCheckoutComplete = false,
}: SummaryItemsProps) => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const imgSrc = {
    url: item?.["Image URL"],
    alt: "",
  };

  const ItemImage = item?.attributes?.find(
    (img: any) => img?.name === "Image URL"
  );

  const itemTitle = item?.title;
  const qty = item?.quantity;

  // const renderSpinner = () => {
  //   return <Spinner width={12} height={12} stroke={6} />;
  // };

  return (
    <>
      <div className={styles["div-summary-box"]}>
        <>
          <div className={styles["summary-item-details"]}>
            <div className={styles["item-img"]}>
              <ImageWithBrandTag
                imageSrc={imgSrc?.url || ItemImage?.value}
                brand={item?.Brand}
                width={100}
                height={100}
                isAvailable={item?.isAvailable}
              />
            </div>
            <div className={styles["item-details"]}>
              <div className={styles["item-title"]}>{itemTitle}</div>
              {
                <div className={styles["price-wrapper"]}>
                  <div
                    className={`${styles["base-price"]} ${
                      item?.totalPrice?.discount?.discounts
                        ? styles["line-through"]
                        : ""
                    }`}
                  >
                    {item?.totalPrice && (
                      <>{`${item?.totalPrice?.currency} ${
                        item?.totalPrice?.amount?.toFixed(2) ||
                        "0.00"?.toLocaleString()
                      }`}</>
                    )}
                  </div>
                  <div className={styles["final-price"]}>
                    {item?.totalPrice?.discount?.discounts && (
                      <>{`${item?.totalPrice?.currency} ${
                        item?.totalPrice?.sale?.toFixed(2) ||
                        "0.00"?.toLocaleString()
                      }`}</>
                    )}
                  </div>
                </div>
              }
              <div className={styles["item-qty"]}>{t("Quantity")}:{qty}</div>
              {/* {isCheckoutComplete ? null : (
                <div className={styles["remove-btn"]}>
                  {removingItem ? (
                    renderSpinner()
                  ) : (
                    <CrossSmall width={12} height={12} />
                  )}
                  <button
                    onClick={() => {
                      setRemovingItem(true);
                      removeItem(item);
                    }}
                    disabled={removingItem}
                    role="removebtn"
                  >
                    {removingItem ? t("Removing") : t("Remove")}
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default SummaryItem;
