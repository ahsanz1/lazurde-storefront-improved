import React, { useState, useContext, useEffect } from "react";
import Label from "components/common/ui/label";
import Image from "next/image";
import Button from "components/common/ui/button";
import styles from "../order-history.module.scss";
import { desktopScreenSize, getCurrency } from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import useWindowSize from "lib/utils/useWindowSize";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import router from "next/router";
import { fetchProduct } from "lib/utils/product";
import { useQuery } from "@tanstack/react-query";
import { isDev } from "general-config";

interface OrderHistoryItemProps {
  key?: number;
  order?: any;
  currentItem?: any;
  setModalOpen?: Function;
  setProductDetailForReviews?: Function;
  isReturnItems?: boolean;
  setIsShipmentModalOpen?: Function;
  setSelectedOrderData?: Function;
  setActiveComponent?: Function;
  reviewsData?: any;
}

const OrderHistoryItem = ({
  order = [],
  currentItem = {},
  setModalOpen = () => {},
  setProductDetailForReviews = () => {},
  isReturnItems = false,
  setIsShipmentModalOpen,
  setActiveComponent = () => {},
  reviewsData = [],
}: OrderHistoryItemProps): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [hasProductReview, setHasProductReview] = useState<any>([]);
  useEffect(() => {
    currentItem &&
      setHasProductReview(
        reviewsData &&
          reviewsData.find(
            (items: any) => items?.review?.productId == currentItem?.product_id
          )
      );
  }, [reviewsData, currentItem]);

  let mergedOrders: any = [];
  currentItem?.order?.ordersItems?.map((item: any) => {
    const itemImage = item?.ordersItemsDetails?.filter((img: any) => {
      return img?.attribute === "image_link";
    });
    let obj = {
      ...item,
      image: itemImage?.[0]?.value,
      status: currentItem?.omsOrderStatus,
      orderDate: currentItem?.order?.orderDate,
    };
    mergedOrders.push(obj);
    return mergedOrders;
  });

  const renderItemStatus = (currentItem: any) => {
    return (
      <div className={styles["item-right-div"]}>
        <span>
          {t("Status")}:{" "}
          {currentItem?.order?.status == ("ORDER_CLOSE" || "ORDER_RETURNED")
            ? t("Returned")
            : currentItem?.order?.status === "PENDING_RETURN"
            ? t("ReturnInitiated")
            : currentItem?.order?.status === "PARTIAL_RETURN"
            ? t("ReturnInitiated")
            : currentItem?.order?.status === "ORDER_DELIVERED"
            ? t("Delivered")
            : currentItem?.order?.status === "UN_PROCESSED"
            ? t("Processing")
            : currentItem?.order?.status === "DISPATCHED"
            ? t("Dispatched")
            : currentItem?.order?.status === "DEAD_VIA_CUSTOMER"
            ? t("Cancelled")
            : currentItem?.order?.status === "DEAD_VIA_EBM" ||
              currentItem?.order?.status === "DEAD_VIA_SM"
            ? t("Cancelled")
            : t("Processing")}
        </span>
        {!isReturnItems && (
          <>
            {/* <span>{`${t("Scheduled")}: 4/1/22`}</span> */}
            {/* {!currentItem?.isPickup ? (
                <Button
                  className={styles["reschedule-return-btn"]}
                  buttonText={t("Reschedule Return Date")}
                  buttonStyle="underline"
                  style={{
                    width: "fit-content",
                    height: "auto",
                  }}
                  onClick={() => {
                    setIsShipmentModalOpen(true);
                    // setSelectedOrderData([
                    //   {
                    //     imageSrc: currentItem["Image URL"],
                    //     id: currentItem?.itemId,
                    //   },
                    // ]);
                  }}
                />
              ) : null} */}
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {mergedOrders?.length > 0 &&
        mergedOrders?.map((merged: any) => {
          const arabicTitle = merged?.ordersItemsDetails?.filter(
            (item: any) => {
              return item?.attribute === "arabic_title";
            }
          );
          return (
            <>
              <div className={styles["item-wrapper"]}>
                <div className={styles["item-left-div"]}>
                  <div className={styles["image"]}>
                    <ImageWithBrandTag
                      imageSrc={merged?.image || "/"}
                      alt={merged?.itemName || ""}
                      width={100}
                      height={100}
                      brand={merged?.categories}
                    />
                  </div>
                  <div className={styles["product-details"]}>
                    <Label className={styles["heading"]}>
                      {appState?.lang === "en"
                        ? merged?.itemName?.split("-")[1]
                        : arabicTitle?.[0]?.value?.split("-")[1]}
                    </Label>
                    <Label className={styles["heading"]}>
                      <>{`${getCurrency(appState?.region)} ${
                        merged?.discountPrice
                      }`}</>
                    </Label>
                    <div className={styles["sub-detail"]}>
                      <Label className={styles["para"]}>
                        {t("Quantity")}: {merged?.quantity}
                      </Label>
                      {/* {currentItem && currentItem["Size"] && (
              <Label className={styles["para"]}>
                <>
                  {t("Size")}: {currentItem["Size"]}
                </>
              </Label>
            )}
            {currentItem && currentItem["Color"] && (
              <Label className={styles["para"]}>
                <>
                  {t("Color")}: {currentItem["Color"]}
                </>
              </Label>
            )} */}
                    </div>
                    <div className={styles["section-forth-detail"]}>
                      <Label className={styles["sub-detail"]}>
                        {t("Style Number")}: {merged?.sku}
                      </Label>
                      <Label className={styles["sub-detail"]}>
                        <>
                          {t("Order Date")}:{" "}
                          {new Date(merged?.orderDate)?.toLocaleString()}
                        </>
                      </Label>
                      {currentItem?.orderStatus_OMS?.status ===
                        "Order is Delivered" && (
                        <Label className={styles["sub-detail"]}>
                          <>
                            {t("Tracking Number")}:{" "}
                            {currentItem?.tracking_MetaFields?.trackingNum ? (
                              <span className={styles["t-number"]}>
                                {currentItem?.trackingNum}
                              </span>
                            ) : (
                              <span>{"Pending"}</span>
                            )}
                          </>
                        </Label>
                      )}
                    </div>
                    {width < desktopScreenSize
                      ? renderItemStatus(currentItem)
                      : null}
                    <div
                      className={styles["reviews-section"]}
                      onClick={() => {
                        if (hasProductReview) {
                          router.push(
                            {
                              pathname: "/account",
                              query: { tab: "my-reviews" },
                            },
                            undefined,
                            { shallow: true }
                          );
                        } else {
                          setProductDetailForReviews(currentItem);
                          setModalOpen(true);
                        }
                      }}
                    >
                      <Image
                        alt="icon"
                        src={
                          hasProductReview ? "/reviews.png" : "/writeReview.png"
                        }
                        width={20}
                        height={20}
                        quality={100}
                        // unoptimized={isDev}
                      />
                      <p>
                        {appState?.lang == "en"
                          ? hasProductReview
                            ? "See Review"
                            : "Leave Review"
                          : t("Leave Review")}
                      </p>
                    </div>
                  </div>
                </div>
                {width > desktopScreenSize
                  ? renderItemStatus(currentItem)
                  : null}
              </div>
            </>
          );
        })}
    </>
  );
};

export default OrderHistoryItem;
