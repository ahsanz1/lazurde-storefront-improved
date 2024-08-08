import React, { useContext, useState } from "react";
import styles from "../style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { reasonOptions, reasonOptionsAR } from "lib/utils/common";
import Label from "components/common/ui/label";
import { CheckboxIcon } from "components/icons";
import Select from "components/common/ui/select";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";

interface OrderItemProps {
  currentItem?: any;
  imageSrc?: string;
  title?: string;
  quantity?: string;
  size?: string;
  color?: string;
  handleClick?: Function;
  isChecked?: any;
  id?: string;
  setSelectedOrderData?: Function;
  selectedOrderData?: any;
  index?: number;
  itemStatus?: string;
  brand?: string;
  isVoucherApplied?: boolean;
  returnOrderReasons?: reasonObj[];
  reasonErrors?: any;
  setReasonErrors?: Function;
  currency?: string;
  returnedOrders?: any;
  checkboxSelect?: any;
  returnQty?: string;
  setReturnQty?: Function;
}

type reasonObj = {
  code?: string | number;
  description?: string;
};

const OrderItem = ({
  currentItem = {},
  quantity = "",
  handleClick,
  isChecked,
  id = "",
  index = 0,
  itemStatus = "",
  brand = "",
  returnOrderReasons = [],
  selectedOrderData = {},
  setSelectedOrderData = () => {},
  reasonErrors,
  currency,
  setReasonErrors = () => {},
  returnedOrders = {},
  checkboxSelect,
  returnQty,
  setReturnQty,
}: OrderItemProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [showError, setShowError] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const reasons = appState?.region === 'en' ? reasonOptions : reasonOptionsAR

  let mergedOrders: any = [];
  currentItem?.order?.ordersItems?.map((item: any) => {
    const itemImage = item?.ordersItemsDetails?.filter((img: any) => {
      return img?.attribute === "image_link";
    });
    let obj = {
      ...item,
      image: itemImage?.[0]?.value,
      status: currentItem?.order?.status,
      orderDate: currentItem?.order?.orderDate,
    };
    mergedOrders.push(obj);
    return mergedOrders;
  });

  return (
    <>
      {mergedOrders?.length > 0 &&
        mergedOrders?.map((merged: any) => {
          return (
            <>
              <div className={`${styles["signle-item-wrapper"]} `}>
                {(merged?.status === "PENDING_RETURN" ||
                  merged?.status === "ORDER_CLOSE" ||
                  merged?.status === "PARTIAL_RETURN" ||
                  merged?.status === "ORDER_RETURNED") && (
                  <div className={styles["returned-label"]}>
                    <Label>{t("Returned")}</Label>
                  </div>
                )}
                <div
                  className={`${styles["single-item-content"]} ${
                    styles[
                      merged?.status === "PENDING_RETURN" ||
                      merged?.status === "ORDER_CLOSE" ||
                      merged?.status === "PARTIAL_RETURN" ||
                      merged?.status === "ORDER_RETURNED"
                        ? "returned-item"
                        : ""
                    ]
                  }`}
                >
                  <div className={styles["left-side"]}>
                    <ImageWithBrandTag
                      key={index}
                      imageSrc={merged?.image || "/"}
                      alt={merged?.itemName || ""}
                      width={100}
                      height={100}
                      brand={merged?.categories}
                    />

                    <div className={styles["item-details"]}>
                      <Label className={styles["heading"]}>
                        {merged?.itemName?.split("-")[1]}
                      </Label>
                      <Label className={styles["item-category"]}>
                        {merged?.brand}
                      </Label>
                      <div className={styles["price"]}>
                        <>{`${currency} ${Number(
                          merged?.itemPrice
                        ).toLocaleString()}`}</>
                      </div>
                      {(merged?.status !== "PENDING_RETURN" ||
                        merged?.status !== "ORDER_CLOSE" ||
                        merged?.status !== "PARTIAL_RETURN" ||
                        merged?.status !== "ORDER_RETURNED") && (
                        <Label className={styles["quantity"]}>
                          <>
                            <span>
                              {`${t("Quantity")}:`}
                              <input
                                role="quantityInput"
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                max={merged?.quantity}
                                inputMode={"decimal"}
                                defaultValue={1}
                                onChange={(e) => {
                                  e.target.value = e.target.value.replace(
                                    /[^0-9 ]/g,
                                    ""
                                  );
                                  if (e.target.value.length > 3)
                                    e.target.value = e.target.value.slice(0, 3);
                                  if (Number(e.target.value) <= 0) {
                                    e.target.value = "";
                                  }
                                }}
                                onKeyDown={(e) =>
                                  (e.keyCode === 69 || e.keyCode === 190) &&
                                  e.preventDefault()
                                }
                                onBlur={async (e) => {
                                  const enteredValue = e.target.value;
                                  if (!enteredValue) {
                                    if (Number(merged?.quantity) === 1) {
                                      e.target.value = "1";
                                      return;
                                    }
                                    return;
                                  }
                                  if (
                                    Number(enteredValue) >
                                      Number(merged?.quantity) &&
                                    Number(merged?.quantity) <=
                                      Number(merged?.quantity)
                                  ) {
                                    e.target.value >
                                      merged?.quantity?.toString();
                                    setShowError(
                                      `You can return maximum ${
                                        merged?.quantity
                                      } ${
                                        merged?.quantity > 1 ? `Items` : `item`
                                      }`
                                    );
                                    return;
                                  } else setShowError("");
                                  if (
                                    Number(enteredValue || 1) ===
                                    Number(merged?.quantity)
                                  ) {
                                    return;
                                  }
                                  setReturnQty(e.target.value);
                                }}
                              />
                            </span>
                          </>
                        </Label>
                      )}

                      {currentItem && currentItem["Size"] && (
                        <Label className={styles["size"]}>
                          <>
                            {t("Size")}: {currentItem["Size"]}
                          </>
                        </Label>
                      )}
                      {currentItem && currentItem["Color"] && (
                        <Label className={styles["color"]}>
                          <>
                            {t("Color")}: {currentItem["Color"]}
                          </>
                        </Label>
                      )}
                      {showError && (
                        <span className={styles["qty-error"]}>{showError}</span>
                      )}
                    </div>
                  </div>
                  <div className={styles["right-side"]}>
                    {(merged?.status !== "PENDING_RETURN" ||
                      merged?.status !== "ORDER_CLOSE" ||
                      merged?.status !== "PARTIAL_RETURN" ||
                      merged?.status !== "ORDER_RETURNED") && (
                      <div className={styles["checkbox"]}>
                        <input
                          id={merged?.sku}
                          name={merged?.sku}
                          type={"checkbox"}
                          onChange={(e) => {
                            const obj = {
                              orderLineItemId: merged?.sku,
                              returnQuantity: returnQty || merged?.quantity,
                              sku: merged?.sku,
                              reasonCode: reasons?.[0]?.value,
                              subReasonCode: reasons?.[0]?.value,
                              policyOveride: false,
                              returnAmount: merged?.itemTotal,
                              currency: currentItem?.currency,
                              id: merged?.sku,
                              imageSrc: merged?.image,
                              brand: merged?.categories,
                              shipmentId: currentItem?.shipmentInfo?.shipmentId,
                              shipmentLineItemId:
                                currentItem?.shipmentInfo?.shipmentLineItemId,
                              status: merged?.status,
                            };
                            handleClick(e, obj, index);
                            const errorData = { ...reasonErrors };
                            delete errorData[merged?.sku];
                            setReasonErrors({ ...errorData });
                          }}
                          checked={checkboxSelect?.includes(merged?.sku)}
                          value={checkboxSelect?.includes(merged?.sku)}
                        />
                        <label
                          htmlFor={merged?.sku}
                          className={styles["checkbox-label"]}
                        >
                          <span className={styles["checkbox-icon"]}>
                            <CheckboxIcon
                              color={
                                checkboxSelect?.includes(merged?.sku)
                                  ? "#C3A956"
                                  : ""
                              }
                              tickColor={
                                checkboxSelect?.includes(merged?.sku)
                                  ? "#fff"
                                  : ""
                              }
                              tickOpacity={
                                checkboxSelect?.includes(merged?.sku) ? "1" : ""
                              }
                            />
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                {(merged?.status !== "PENDING_RETURN" ||
                  merged?.status !== "ORDER_CLOSE" ||
                  merged?.status !== "PARTIAL_RETURN" ||
                  merged?.status !== "ORDER_RETURNED") &&
                checkboxSelect?.includes(merged?.sku) ? (
                  <>
                    {reasons && reasons.length > 0 ? (
                      <div className={styles["reasons-dropdown-wrapper"]}>
                        <Label className={styles["reason-dropdown-heading"]}>
                          {t("Reason for Return")}
                        </Label>
                        <Select
                          selectedOptionWhiteSpaceWrap={false}
                          options={reasons}
                          defaultValue={
                            selectedOrderData?.[merged?.sku]?.reasonCode ||
                            reasons?.[0]?.value
                          }
                          onChange={(value: { value?: string }) => {
                            const tempData: any = { ...selectedOrderData };
                            tempData[merged?.sku].reasonCode =
                              value?.value || reasons?.[0]?.value;
                            setSelectedOrderData({ ...tempData });
                            const errorData = { ...reasonErrors };
                            delete errorData[merged?.sku];
                            setReasonErrors({ ...errorData });
                            setIsValueSelected(true);
                          }}
                          // placeholder={"Select"}
                          className={styles["reasons-dropdown"]}
                          optionClassName={`${
                            !isValueSelected
                              ? styles["selected-default"]
                              : styles["selected-option"]
                          }`}
                          optionUlClassName={
                            styles["reasons-dropdown-option-ul"]
                          }
                          optionListClassName={
                            styles["reasons-dropdown-option-li"]
                          }
                          error={
                            reasonErrors?.[merged?.sku]
                              ? "please select reason"
                              : ""
                          }
                        ></Select>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
            </>
          );
        })}
    </>
  );
};

export default OrderItem;
