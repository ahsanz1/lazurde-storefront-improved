import React, { FC, useContext, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useWindowSize from "lib/utils/useWindowSize";
import { useCart } from "lib/utils/cart";
import { ArrowDown } from "components/icons";
import SummaryItem from "../summary-item";
import { CartItemObject } from "lib/types/common";

type OrderSectionProps = {
  promoDiscount?: any;
  isCheckoutComplete?: boolean;
  selectedShippingMethod?: any;
  data?: any;
};

const OrderSection: FC<OrderSectionProps> = ({
  promoDiscount,
  isCheckoutComplete = false,
  selectedShippingMethod,
  data,
}) => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const { removeCartMutation } = useCart();
  const [showSummary, setShowSummary] = useState(false);
  const { appState } = useContext(AppContext);

  const removeItem = async (item: CartItemObject) => {
    removeCartMutation.mutate({ itemId: item?.id, item: item });

    // setCartData(response?.response);
  };

  const summaryToggle = () => {
    !showSummary && setShowSummary(true);
    showSummary && setShowSummary(!showSummary);
  };

  const shippingDetails: any =
    (typeof window !== "undefined" &&
      window?.sessionStorage?.getItem("shippingMethods")) ||
    null;

  const totalAmountWithShippingPrice =
    data?.totalAmount + (selectedShippingMethod?.cost || 0);
  const subTotalWithoutShippingPrice =
    data?.subTotal - (data?.shippingCost || 0);

  return (
    <>
      <div className={styles["summary-wrapper"]}>
        <div className={styles["order-summary-show"]}>
          <div className={styles["order-summary-wrapper"]}>
            <span role="summaryHeading">
              {appState?.lang === "en"
                ? `${"Order Summary"} (${data?.items?.length})`
                : t("summary")}
            </span>
            <div className={styles["order-details"]}>
              <span data-amount={true}>
                {data
                  ? `${data?.currency || data?.shipMethod?.cost?.currency} ${
                      data?.checkoutComplete
                        ? data?.totalAmount?.toFixed(2)
                        : totalAmountWithShippingPrice.toFixed(2)
                    }`
                  : null}
              </span>
            </div>
          </div>

          <div
            className={styles["div-arrow"]}
            data-rotate={showSummary}
            role="showSummary"
            onClick={() => {
              summaryToggle();
            }}
          >
            <ArrowDown />
          </div>
        </div>

        {showSummary ? (
          <>
            <div role="summaryCard" className={styles["summary-card"]}>
              <hr className={styles["horizontal-divider-gift-msg"]} />
              {data?.items?.map((item: any, index: number) => {
                return (
                  <>
                    <SummaryItem
                      item={item}
                      removeItem={removeItem}
                      isCheckoutComplete={isCheckoutComplete}
                    />
                    {/* {message[index] ? (
                      <>
                        {" "}
                        <hr className={styles["horizontal-divider-gift-msg"]} />
                        <div className={styles["div-gift-data"]}>
                          <div className={styles["div-left"]}>
                            <div className={styles["summary-gift-label"]}>
                              Your Gift Message
                            </div>
                            <div className={styles["summary-gift-msg"]}>
                              {message[index]}
                            </div>
                          </div>
                          <div className={styles["div-right"]}>
                            <div className={styles["div-edit-button"]}>
                              <Button
                                buttonStyle="underline"
                                buttonText={
                                  textArea[index] ? t("Apply") : t("Edit")
                                }
                                buttonSize={"xsm"}
                                onClick={() => {
                                  setTextArea(index);
                                  handleMsgToggle(index);
                                  handleTextArea(index);
                                  setDisabled("");
                                  summaryTextArea();
                                }}
                              ></Button>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-gift-textarea"]}>
                          {textArea[index] ? (
                            <div className={styles["gift-msg-area"]}>
                              <div className={styles["summary-text-area"]}>
                                <textarea
                                  name="textArea"
                                  disabled={disabled[index]}
                                  value={message[index]}
                                  onChange={(event) => {
                                    handleMessageChange(index, event);
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : null} */}
                  </>
                );
              })}
              <hr className={styles["horizontal-divider-summary"]} />
              <div className={styles["order-details"]}>
                <div>
                  <span role="subHeading">{t("subTotal")}</span>
                  <span data-amount={true}>
                    {data?.currency || data?.shipMethod?.cost?.currency}{" "}
                    {data?.checkoutComplete
                      ? Number(subTotalWithoutShippingPrice).toFixed(2)
                      : data?.subTotal?.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span role="shpping-text">
                    {t("estimatedShippingHandeling")}
                  </span>
                  <span data-amount={true}>
                    {selectedShippingMethod?.cost ||
                    data?.shippingCost ||
                    shippingDetails?.cost ? (
                      <>
                        {" "}
                        {data?.currency ||
                          data?.shipMethod?.cost?.currency}{" "}
                        {(
                          selectedShippingMethod?.cost ||
                          data?.shippingCost ||
                          shippingDetails?.cost
                        ).toFixed(2)}
                      </>
                    ) : (
                      "FREE"
                    )}
                  </span>
                </div>
                <div>
                  <span role="tax">{t("taxVat")}</span>
                  <span data-amount={true}>
                    {data?.currency || data?.shipMethod?.cost?.currency}{" "}
                    {data?.vatTax || "0.00"}
                  </span>
                </div>
                {data?.totalDiscount > 0 ? (
                  <>
                    <hr className={styles["horizontal-divider-summary"]} />
                    <div className={styles["discount-offers"]}>
                      <span role="discount">{"Total Discount"}</span>
                      <span
                        className={styles["discount-value"]}
                        data-amount={true}
                      >
                        -{data?.currency || data?.shipMethod?.cost?.currency}{" "}
                        {(data?.totalDiscount).toFixed(2)}
                      </span>
                    </div>
                  </>
                ) : null}
              </div>
              <hr className={styles["horizontal-divider-summary"]} />
              <div className={styles["order-details"]}>
                <div>
                  <span role="totalPay" data-amount={true}>
                    {t("totalToPay")}
                  </span>
                  <span data-amount={true}>
                    {data?.totalAmount
                      ? `${
                          data?.currency || data?.shipMethod?.cost?.currency
                        } ${
                          data?.checkoutComplete
                            ? data?.totalAmount.toFixed(2)
                            : totalAmountWithShippingPrice.toFixed(2)
                        }`
                      : null}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default OrderSection;
