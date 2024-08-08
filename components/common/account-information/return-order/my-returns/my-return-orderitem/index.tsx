import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../style.module.scss";
import Image from "next/image";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import useWindowSize from "lib/utils/useWindowSize";
import {
  updateOrderDate,
  updateOrderDateWithOutTime,
  desktopScreenSize,
} from "lib/utils/common";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import ErrorNote from "components/common/ui/error-note";
import { returnOrderModalTypes } from "lib/types/common";
import SingleOrderItemsImg from "components/common/order-details/single-order-items";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import { scrollToTop } from "components/common/product-listing/functions";

interface ReturnOrderItemProps {
  index?: number;
  handleOrderDetail?: Function;
  singleOrderData?: any;
  status?: string;
  orderCreatedDate?: string | Date;
  orderId?: string;
  setOrderData?: any;
  setIsShipmentModalOpen?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setIsStaticContentModal?: Function;
  selectedItemForReturn?: object;
  setSelectedItemForReturn?: Function;
  isOrderRefetching?: any;
}

const ReturnOrderItem = ({
  handleOrderDetail,
  singleOrderData = {},
  status = "",
  orderCreatedDate = "",
  setIsShipmentModalOpen,
  setOrderData,
  setIsStaticContentModal,
  setSelectedItemForReturn = () => {},
}: ReturnOrderItemProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const [orderStatus, setOrderStatus] = useState("");
  const listingWrapper = useRef<HTMLInputElement>();

  const returned = singleOrderData?.order?.ordersItems;

  const handleShipmentModal = () => {
    singleOrderData && setOrderData && setOrderData(singleOrderData);
    setReturnItemPayload();
    setIsShipmentModalOpen(true);
  };

  const setReturnItemPayload = () => {
    const allSelectedItem: any = {};
    singleOrderData &&
      singleOrderData?.order?.ordersItems?.length > 0 &&
      singleOrderData?.order?.ordersItems?.map((item: any) => {
        const returnItemObj = {
          orderLineItemId: item?.lineItemId,
          returnQuantity: item?.quantity,
          reasonCode: item?.reasonCode || "10001",
          subReasonCode: item?.reasonCode || "10001",
          policyOveride: false,
          returnAmount: item?.itemPrice,
          id: item?.itemId,
          imageSrc: item?.["Image URL"],
          brand: item?.["Brand"],
          returnOrderStatus: orderStatus,
        };
        allSelectedItem[returnItemObj.id] = returnItemObj;
      });
    setSelectedItemForReturn &&
      setSelectedItemForReturn({ ...allSelectedItem });
  };
  // const [orderDataForTaxInvoice, setOrderDataForTaxInvoice] = useState(
  //   singleOrderData || {}
  // );
  useEffect(() => {
    if (status === "ORDER_CLOSE") {
      setOrderStatus("Returned");
    } else {
      setOrderStatus(status);
    }
    // const userProfile = JSON.parse(
    //   window.localStorage.getItem("individualInfo")
    // );
    // setOrderDataForTaxInvoice(singleOrderData);
  }, [singleOrderData]);
  return (
    <div className={styles["single-return-order"]}>
      <div className={styles["order-section"]}>
        <div className={styles["order-details"]}>
          <div className={styles["order-status"]}>
            <div className={styles["div-header"]}>
              <Label className={styles["status"]}>
                {singleOrderData?.omsOrderStatus === "Dead"
                  ? `${t("ReturnedIt")}!`
                  : singleOrderData?.omsOrderStatus == "Pending Return"
                  ? `${t("InitiatedtheReturn")}!`
                  : singleOrderData?.omsOrderStatus == "Partial Return"
                  ? `${t("InitiatedtheReturn")}!`
                  : `${t("ReturnedIt")}!`}
              </Label>
              {/* <Button
                className={styles["return-date-btn"]}
                buttonText={t("Reschedule Return Date")}
                buttonStyle="underline"
                style={{
                  width: "fit-content",
                  height: "auto",
                }}
                onClick={() => {
                  handleShipmentModal();
                }}
                testId="returnDateBtn"
              /> */}
            </div>
            <Label className={styles["delivery-estimate"]}>
              <>
                {orderStatus === "Order is in Processing" && (
                  <>
                    {t("Scheduled")}:{" "}
                    {updateOrderDateWithOutTime(orderCreatedDate)}{" "}
                    {t(`toLazurde Store:`)} #5234
                  </>
                )}
                {orderStatus === "ORDER_COLLECTION_FAILED" && (
                  <>
                    {t("Attempted Collection:")}{" "}
                    {updateOrderDateWithOutTime(orderCreatedDate)}
                  </>
                )}
              </>
            </Label>
          </div>
          {orderStatus === "ORDER_COLLECTION_FAILED" ? (
            <div className={styles["courier-failed-content"]}>
              <ErrorNote
                label={t("orderColelctionFailedNote")}
                isLink={false}
                btnText={t("Reschedule")}
                onClick={() => handleShipmentModal()}
                testId="reschedule"
              />
            </div>
          ) : null}
          <div className={`${styles["order-image"]}`}>
            {returned?.map((item: any, index: number) => {
              const itemImage = item?.ordersItemsDetails?.filter((img: any) => {
                return img?.attribute === "image_link";
              });
              const image = itemImage?.[0]?.value;
              return (
                <ImageWithBrandTag
                  key={index}
                  imageSrc={image || "/"}
                  alt={item?.itemName || ""}
                  width={100}
                  height={100}
                  brand={item?.categories}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["order-history"]}>
        <div>
          <div className={styles["order-date"]}>
            <Image
              alt="icon"
              src={"/calendar.png"}
              width={20.5}
              height={18}
              layout="fixed"
            />
            <p className={styles["order-date-text"]}>
              {t("Order Date")}:{" "}
              <span>{new Date(orderCreatedDate)?.toLocaleString()}</span>
            </p>
          </div>
          <div className={styles["order-date"]}>
            <Image
              alt="icon"
              src={"/ordernum.png"}
              width={20.5}
              height={18}
              layout="fixed"
            />
            <p className={styles["order-number-text"]}>
              {appState?.lang == "en"
                ? width > desktopScreenSize
                  ? "Order Number"
                  : "Order No."
                : t("Order Number")}
              :{" "}
              <span> {singleOrderData?.order?.siteOrderId?.split("-")[1]}</span>
            </p>
          </div>
          <div className={styles["order-date"]}>
            <Image
              alt="icon"
              src={"/warrantybook.png"}
              width={18}
              height={18}
              layout="fixed"
            />
            <div className={styles["order-details-link"]}>
              <a
                href={`/account/${singleOrderData?.order?.siteOrderId?.split("-")[1]}/invoice`}
                target="_blank"
                rel="noreferrer"
              >
                {t("View Digital Receipt & Warranty")}
              </a>
            </div>
          </div>
        </div>
        <Button
          className={styles["view-button"]}
          onClick={() => {
            scrollToTop(listingWrapper);
            handleOrderDetail && handleOrderDetail(singleOrderData?.order);
          }}
          testId="view-btn"
          buttonText={width > desktopScreenSize ? t("View Order") : t("View")}
        />
      </div>
    </div>
  );
};

export default ReturnOrderItem;
