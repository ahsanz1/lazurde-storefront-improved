import React, { FC, useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { desktopScreenSize } from "lib/utils/common";
import { AppContext } from "lib/context";
import HelpCenterSection from "../../../help-center-section";
import SummaryItem from "../summary-item";
import useWindowSize from "lib/utils/useWindowSize";
import { useCart } from "lib/utils/cart";
import { CartItemObject } from "lib/types/common";

type SummarySectionProps = {
  promoDiscount?: any;
  selectedShippingMethod?: any;
};

const SummarySection: FC<SummarySectionProps> = ({
  promoDiscount,
  selectedShippingMethod,
}) => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const { removeItemFromCart } = useCart();
  const { cartData, setCartData } = useContext(AppContext);

  const removeItem = async (item: CartItemObject) => {
    const response = await removeItemFromCart(item?.id, item);
    if (!response?.hasError) {
      return;
    }
    setCartData(response?.response);
  };

  const totalAmountWithShippingPrice =
    cartData?.totalAmount + (selectedShippingMethod?.cost || 0);
  return (
    <>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["summary-card"]}>
          <span role="summary-heading">{t("summary")}</span>
          {cartData?.items?.map((item: any, index: number) => {
            return (
              <>
                <SummaryItem item={item} removeItem={removeItem} />
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
                          {nextComp ? null : (
                            <Button
                              buttonStyle="underline"
                              buttonText={openTextArea ? t("Apply") : t("Edit")}
                              buttonSize={"xsm"}
                              onClick={() => {
                                setTextArea(index);
                                handleMsgToggle(index);
                                handleTextArea(index);
                                setDisabled("");
                                summaryTextArea();
                                setDisabled("");
                              }}
                            ></Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-gift-textarea"]}>
                      {openTextArea ? (
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
                {index === cartData?.items.length - 1 ? null : (
                  <div className={styles["half-divider-light"]}>
                    <hr />
                  </div>
                )}
              </>
            );
          })}

          <div className={styles["order-details"]}>
            <div>
              <span role="subHeading">{t("subTotal")}</span>
              <span data-amount={true}>
                {cartData?.currency} {cartData?.subTotal?.toFixed(2) || "0.00"}
              </span>
            </div>
            <div>
              <span role="shpping-text">{t("estimatedShippingHandeling")}</span>
              <span data-amount={true}>
                {selectedShippingMethod?.cost > 0
                  ? `${
                      cartData?.currency
                    } ${selectedShippingMethod?.cost.toFixed(2)}`
                  : "FREE"}
              </span>
            </div>
            <div>
              <span role="tax">{t("taxVat")}</span>
              <span data-amount={true}>
                {cartData?.currency} {cartData?.vatTax || "0.00"}
              </span>
            </div>
            {cartData?.totalDiscount > 0 ? (
              <>
                <hr className={styles["horizontal-divider-summary"]} />
                <div className={styles["discount-offers"]}>
                  <span role="discount">{"Total Discount"}</span>
                  <span className={styles["discount-value"]} data-amount={true}>
                    -{cartData?.currency}{" "}
                    {Number(cartData?.totalDiscount).toFixed(2)}
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
                {cartData?.totalAmount
                  ? `${
                      cartData?.currency
                    } ${totalAmountWithShippingPrice.toFixed(2)}`
                  : `$0.00`}
              </span>
            </div>
          </div>
        </div>
        {width > desktopScreenSize ? <HelpCenterSection /> : null}
      </div>
    </>
  );
};

export default SummarySection;
