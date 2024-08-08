import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Label from "components/common/ui/label";
import Image from "next/image";
import { useRouter } from "next/router";
import { CrossSmall } from "components/icons";
import Spinner from "components/common/ui/spinner";
import Link from "next/link";
import HelpCenterSection from "components/common/help-center-section";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";

const CheckoutSummary = ({}): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const { appState, cartData } = useContext(AppContext);
  const router = useRouter();
  const [removingItem, setRemovingItem] = useState(false);

  // const renderSpinner = () => {
  //   return <Spinner width={12} height={12} stroke={6} />;
  // };
  return (
    <>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["summary-card"]}>
          <span role="summary-heading">{t("summary")}</span>
          {cartData.map((item: any, index: number) => {
            const imgSrc = item?.["Image URL"];
            const itemTitle = item?.title;
            const qty = item?.quantity;
            return (
              <React.Fragment key={index}>
                <div className={styles["div-summary-box"]}>
                  <>
                    <div className={styles["summary-item-details"]}>
                      <div className={styles["item-img"]}>
                        <ImageWithBrandTag
                          imageSrc={imgSrc}
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
                                <span>{`${item?.totalPrice?.currency} ${
                                  item?.totalPrice?.amount?.toLocaleString() ||
                                  "0.00"?.toLocaleString()
                                }`}</span>
                              )}
                            </div>
                            <div className={styles["final-price"]}>
                              {item?.totalPrice?.discount?.discounts && (
                                <span>{`${item?.totalPrice?.currency} ${
                                  item?.totalPrice?.sale?.toLocaleString() ||
                                  "0.00"?.toLocaleString()
                                }`}</span>
                              )}
                            </div>
                          </div>
                        }
                        <div className={styles["item-qty"]}>{t("Quantity")}:{qty}</div>
                        {/* <div className={styles["remove-btn"]}>
                          {removingItem ? (
                            renderSpinner()
                          ) : (
                            <CrossSmall width={12} height={12} />
                          )}
                          <button
                            onClick={() => {
                              setRemovingItem(true);
                              // removeWishListItem([item?.itemId]);
                            }}
                            disabled={removingItem}
                            role="removebtn"
                          >
                            {appState?.lang === "en"
                              ? removingItem
                                ? "Removing..."
                                : "Remove"
                              : removingItem
                              ? "جارٍ الإزالة…"
                              : "إزالة"}
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </>
                </div>
              </React.Fragment>
            );
          })}
          <hr className={styles["horizontal-divider"]} />
          <div className={styles["order-details"]}>
            <div>
              <span role="subHeading">{t("subTotal")}</span>
              <span data-amount={true}>
                {/* {cartData?.totalAmount?.toLocaleString() ||
                  cartData?.subTotal?.toLocaleString()} */}
                .00
              </span>
            </div>
            <div>
              <span role="shpping-text">{t("estimatedShippingHandeling")}</span>
              <span data-amount={true}>$0.00</span>
            </div>
            <div>
              <span role="tax">{t("taxVat")}</span>
              <span data-amount={true}>$0.00</span>
            </div>
          </div>
          <hr className={styles["horizontal-divider"]} />
          <div className={styles["order-details"]}>
            <div>
              <span role="totalPay" data-amount={true}>
                {t("totalToPay")}
              </span>
              <span data-amount={true}>
                {/* {`$${cartData?.totalAmount?.toLocaleString()}`} */}
              </span>
            </div>
          </div>
        </div>
        {width > desktopScreenSize ? <HelpCenterSection /> : null}
      </div>
    </>
  );
};

export default CheckoutSummary;
