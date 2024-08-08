import React, { useContext, useRef } from "react";
import styles from "./order-details.module.scss";
import Image from "next/image";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import { desktopScreenSize, orderFormatDate } from "lib/utils/common";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import AccountOrderLoader from "../ui/skeletons/account-order";
import ImageWithBrandTag from "../ui/image-with-brandtag";
import { scrollToTop } from "../product-listing/functions";
import { isDev } from "general-config";

interface OrderItemProps {
  index?: number;
  singleOrderData?: any;
  status?: string;
  orderCreatedAt?: string;
  orderId?: string;
  handleOrderDetail?: Function;
  isOrderRefetching?: any;
}

const OrderItem = ({
  index = 0,
  singleOrderData = {},
  status = "",
  orderCreatedAt = "",
  orderId = "",
  handleOrderDetail = () => {},
  isOrderRefetching,
}: OrderItemProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const listingWrapper = useRef<HTMLInputElement>();

  if (isOrderRefetching) {
    return (
      <div
        className="account-loader-div padding"
        style={{
          height: "365px",
        }}
      >
        <AccountOrderLoader />
      </div>
    );
  }
  const isOrderExistInHistory =
    singleOrderData?.order?.status !== "Order is returned by Courier";
  return (
    <>
      {isOrderExistInHistory && (
        <div key={index} className={styles["order-section"]}>
          <div className={styles["order-details"]}>
            <div className={styles["order-delivery"]}>
              <div>
                {singleOrderData?.order?.ordersItems?.length > 0 ? (
                  <>
                    <Label className={styles["order-sent"]}>
                      {status === "UN_PROCESSED" ||
                      status === "PROCESSED" ||
                      status === "READY_FOR_EBM" ||
                      status === "APPROVED_BY_SM" ||
                      status === "EDITED_BY_EBM" ||
                      status === "AWAITING_SM_APPROVAL" ||
                      status === "EDITED_BY_SM" ||
                      status === "APPROVED_BY_SM"
                        ? `${t("We’re Processing!")}!`
                        : status === "ORDER_DELIVERED" ||
                          status === "ORDER_COMPLETE"
                        ? `${t("We’ve Delivered It!")}!`
                        : status === "DISPATCHED"
                        ? `${t("We’ve Sent It!")}!`
                        : status === "ORDER_CLOSE" ||
                          status === "ORDER_RETURNED"
                        ? `${t("Returned It")}!`
                        : status === "PENDING_RETURN"
                        ? `${t("Initiated the Return")}!`
                        : status === "PARTIAL_RETURN"
                        ? `${t("Initiated the Return")}!`
                        : status === "DEAD_VIA_EBM" ||
                          status === "DEAD_VIA_SM" ||
                          status === "DEAD_VIA_CUSTOMER"
                        ? `${t("We’ve Cancelled!")}!`
                        : `${t("We’re Processing!")}!`}
                    </Label>
                    <Label className={styles["delivery-estimate"]}>
                      {status === "EDITED_BY_EBM" ||
                      status === "READY_FOR_EBM" ||
                      status === "UN_PROCESSED" ||
                      status === "EDITED_BY_SM" ||
                      status === "PROCESSED" ||
                      status === "APPROVED_BY_SM" ||
                      status === "AWAITING_SM_APPROVAL" ||
                      status === "APPROVED_BY_SM" ||
                      status === "ORDER_DELIVERED"
                        ? `${t("Estimated Delivery")} ${orderFormatDate(
                            orderCreatedAt
                          )}`
                        : null}
                    </Label>
                  </>
                ) : null}
              </div>
              {singleOrderData?.trackingUrl && (
                <div>
                  <Button
                    buttonSize="sm"
                    buttonStyle="white"
                    onClick={async () => {
                      window
                        .open(singleOrderData?.trackingUrl, "_blank")
                        .focus();
                    }}
                  >
                    {t("Track Parcel")}
                  </Button>
                </div>
              )}
            </div>
            <div className={`${styles["order-image"]}`}>
              {singleOrderData?.order?.ordersItems?.map(
                (item: any, index: number) => {
                  const itemImage = item?.ordersItemsDetails?.filter(
                    (img: any) => {
                      return img?.attribute === "image_link";
                    }
                  );
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
                }
              )}
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
                  quality={100}
                  // unoptimized={isDev}
                />
                <p className={styles["order-date-text"]}>
                  {t("Order Date")}:{" "}
                  <span>
                    {new Date(
                      singleOrderData?.order?.orderDate
                    )?.toLocaleString()}
                  </span>
                </p>
              </div>
              <div className={styles["order-date"]}>
                <Image
                  alt="icon"
                  src={"/ordernum.png"}
                  width={20.5}
                  height={18}
                  layout="fixed"
                  quality={100}
                  // unoptimized={isDev}
                />
                <p className={styles["order-number-text"]}>
                  {t("Order Number")}:{" "}
                  <span>
                    {singleOrderData?.order?.siteOrderId?.split("-")[1]}
                  </span>
                </p>
              </div>
              <div className={styles["order-date"]}>
                <Image
                  alt="icon"
                  src={"/warrantybook.png"}
                  width={18}
                  height={18}
                  layout="fixed"
                  quality={100}
                  // unoptimized={isDev}
                />
                <div className={styles["order-details-link"]}>
                  <a
                    href={`/account/${
                      singleOrderData?.order?.siteOrderId?.split("-")[1]
                    }/invoice`}
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
                handleOrderDetail(singleOrderData?.order);
              }}
            >
              {width > desktopScreenSize ? t("View Order") : t("View")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderItem;
