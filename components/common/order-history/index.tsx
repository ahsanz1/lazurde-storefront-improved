import React, { FC, useState, useContext, useEffect } from "react";
import Label from "components/common/ui/label";
import Image from "next/image";
import Button from "components/common/ui/button";
import styles from "./order-history.module.scss";
import { orderFormatDate } from "lib/utils/common";
import WriteAReview from "components/common/reviews/write-review";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import Accordion from "components/common/ui/accordion/Accordion";
import { needHelpData } from "lib/mock-data/data";
import OrderHistoryItem from "./order-history-item";
import ShipmentTypeModal from "components/common/account-information/return-order/shipment-type-modal";
import { returnOrderModalTypes, StoreLocatorXMProps } from "lib/types/common";
import ErrorNote from "components/common/ui/error-note";
import DotsLoader from "../ui/skeletons/dots";
import { getReviewsApi } from "lib/middleware-apis/reviews";
import { useCustomer } from "lib/middleware-apis/customers";
import { isDev } from "general-config";

interface OrderHistoryProps {
  order?: any;
  setIsReturnOrderActive?: Function;
  isReturnItems?: boolean;
  setCurrentCompActive?: Function;
  setIsStaticContentModal?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setMyReturnComponentActive?: Function;
  setSelectedOrderData?: Function;
  selectedOrderData?: any;
  setActiveComponent?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
  paymentCardDetail?: any;
  setPaymentCardDetail?: Function;
  isOrderLoading?: any;
}

const OrderHistory: FC<OrderHistoryProps> = ({
  order,
  setIsReturnOrderActive,
  isReturnItems = false,
  setCurrentCompActive,
  setIsStaticContentModal,
  isStaticContentModal,
  setMyReturnComponentActive,
  setSelectedOrderData,
  selectedOrderData = [],
  setActiveComponent,
  storeLocatorProps = [],
  paymentCardDetail = {},
  setPaymentCardDetail = () => {},
  isOrderLoading,
}) => {
  const { QRCodeCanvas } = require("@cheprasov/qrcode");
  let dataUrlWithCanvasGQRCode: any = undefined;
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetailForReviews, setProductDetailForReviews] = useState({});
  const [isShipmentModalOpen, setIsShipmentModalOpen] = useState(false);
  const [reviewsData, setReviewsData] = useState<any>([]);
  const [atLeastOneItemEligible, setAtLeastOneItemEligible] = useState(false);
  const [isCheckingEligibility, setIsCheckingEligibility] = useState(false);
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const currency = order?.[0]?.order?.currency;
  const subTotal = order?.[0]?.order?.subTotalExcludingTax;
  const delivery = order?.[0]?.order?.shippingCost;
  const discount = order?.[0]?.order?.discount;
  const total = order?.[0]?.order?.totalAmount;
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    fetchingReviews();

    return () => {
      setReviewsData([]);
      setProductDetailForReviews({});
      setIsShipmentModalOpen(false);
      setModalOpen(false);
    };
  }, []);

  useEffect(() => {
    // orderTimeFrame();

    return () => {
      setAtLeastOneItemEligible(false);
      setIsCheckingEligibility(false);
    };
  }, [order?.[0]?.order?.siteOrderId]);

  // const orderTimeFrame = async () => {
  //   setIsCheckingEligibility(true);
  //   const response = await returnOrderEligibility(order?.orderId);
  //   const orderItems = response && response?.data && response?.data?.items;
  //   const isTimedOut =
  //     orderItems?.length > 0 &&
  //     orderItems?.some((currItem: any) => currItem?.eligible === true);
  //   setAtLeastOneItemEligible(isTimedOut);
  //   setIsCheckingEligibility(false);
  // };

  const fetchingReviews = async () => {
    const response = await getReviewsApi(customerData?.email, appState?.region);
    response && setReviewsData(response?.results);
  };

  // useEffect(() => {
  //   getCustomerData();
  // }, [order]);

  // const userInfo: { email: string; id: string } = JSON.parse(
  //   window.localStorage.getItem("user_info")
  // );
  // let userProfile = JSON.parse(window.localStorage.getItem("individualInfo"));

  // const getCustomerData = async () => {
  //   if (!userInfo) return;
  //   if (!userProfile) {
  //     // userProfile = await fetchCustomerProfile(userInfo?.id);
  //   }
  //   if (!userProfile) return;

  //   const customerDetailPayload =
  //     userProfile?.additionalAttributes?.checkoutCustomerId ||
  //     userProfile?.email;
  //   const customer = await getInstrumentsByCustomer(customerDetailPayload);
  //   customer && customer?.data && modifyPaymentData(customer?.data);
  // };

  // const modifyPaymentData = (customerDetails: any) => {
  //   const response = customerDetails?.instruments?.find(
  //     (currElem: any) =>
  //       currElem?.id === order?.payments?.[0]?.paymentToken?.token
  //   );
  //   response && setPaymentCardDetail(response);
  // };

  if (typeof document !== "undefined") {
    const createValueArray = (tag: any, value: string) => {
      if (!tag || !value) return null;
      const tagNumber = Buffer.from([tag]);
      const tagValue = Buffer.from(value, "utf8");
      const valueLength = Buffer.from([value.length]);

      const bufArray = [tagNumber, valueLength, tagValue];

      return Buffer.concat(bufArray);
    };
    const seller = createValueArray("1", `L'azurde`);
    const vat = createValueArray("2", "300054684710003");
    const time = createValueArray("3", order?.[0]?.order?.orderDate);
    const amount = createValueArray(
      "4",
      order?.[0]?.order?.totalAmount?.toString()
    );
    const vatAmount = createValueArray(
      "5",
      order?.[0]?.order?.taxAmount?.toString()
    );
    if (seller && vat && time && amount && vatAmount) {
      const dataConcat = Buffer.concat([seller, vat, time, amount, vatAmount]);
      const dataToBase64 = dataConcat.toString("base64");
      const qrCanvas = new QRCodeCanvas(dataToBase64);
      dataUrlWithCanvasGQRCode = qrCanvas.toDataUrl();
    }
  }

  const deliveryCharges = order?.shipInfo?.[0]?.shipToPrice;
  const orderShipping = order?.[0]?.shippingDetails || {};
  const orderItems = order;
  const orderStatus = orderItems?.[0]?.order?.status;
  let message = `${t("We’re Processing!")}!`;

  if (
    orderStatus === "UN_PROCESSED" ||
    orderStatus === "READY_FOR_EBM" ||
    orderStatus === "APPROVED_BY_SM" ||
    orderStatus === "EDITED_BY_EBM" ||
    orderStatus === "AWAITING_SM_APPROVAL" ||
    orderStatus === "EDITED_BY_SM" ||
    orderStatus === "APPROVED_BY_SM"
  ) {
    message = `${t("We’re Processing!")}!`;
  } else if (orderStatus === "PENDING_RETURN") {
    message = `${t("Initiated the Return")}!`;
  } else if (
    orderStatus === "ORDER_DELIVERED" ||
    orderStatus === "ORDER_COMPLETE"
  ) {
    message = `${t("We’ve Delivered It!")}!`;
  } else if (orderStatus === "DISPATCHED") {
    message = `${t("We’ve Sent It!")}!`;
  } else if (
    orderStatus === "ORDER_CLOSE" ||
    orderStatus === "ORDER_RETURNED"
  ) {
    message = `${t("Returned It")}!`;
  } else if (
    orderStatus === "DEAD_VIA_EBM" ||
    orderStatus === "DEAD_VIA_SM" ||
    orderStatus === "DEAD_VIA_CUSTOMER"
  ) {
    message = `${t("We’ve Cancelled!")}!`;
  } else if (orderStatus === "PARTIAL_RETURN") {
    message = `${t("Initiated the Return")}!`;
  } else {
    message = `${t("We’re Processing!")}!`;
  }

  const returnOrderNeedHelpData: any =
    needHelpData?.[appState?.currentLocale]?.data;

  const hasGoldCoinOrBar = orderItems?.[0]?.order?.ordersItems?.every(
    (product: any) => {
      const attributes = product?.ordersItemsDetails;
      return attributes?.some(
        (attribute: { value: string }) =>
          attribute?.value === "Gold Coin" || attribute?.value === "Gold Bar"
      );
    }
  );

  return (
    <div className={styles["history-container"]}>
      <div className={styles["section-first"]}>
        {/* <Image
          alt="icon"
          src={"/orders.png"}
          width={20}
          height={20}
          layout="fixed"
        /> */}
        <Label className={styles["section-first-title"]}>
          {t("Order Details")}
        </Label>
        <Label className={styles["section-first-text"]}>
          {t("thanksForOrderNote")}
        </Label>
      </div>

      <div className={styles["section-second"]}>
        <div className={styles["section-second-first"]}>
          <div>
            <div className={styles["section-second-first-block"]}>
              <div className={styles["section-second-first-image"]}>
                <Image
                  alt="icon"
                  src={"/ordernum.png"}
                  width={18}
                  height={18}
                  layout="fixed"
                  quality={100}
                  // unoptimized={isDev}
                />
              </div>
              <p className={styles["order-details-text"]}>
                {t("Order No")}:
                <span className={styles["order-details-span"]}>
                  {` ${orderItems?.[0]?.order?.siteOrderId?.split("-")[1]}`}
                </span>
              </p>
            </div>
            <div className={styles["section-second-first-block"]}>
              <div className={styles["section-second-first-image"]}>
                <Image
                  alt="icon"
                  src={"/calendar.png"}
                  width={18}
                  height={18}
                  layout="fixed"
                  quality={100}
                  // unoptimized={isDev}
                />
              </div>
              <p className={styles["order-details-text"]}>
                {t("Order Date")}:
                <span className={styles["order-details-span"]}>
                  {` ${new Date(
                    orderItems?.[0]?.order?.orderDate
                  )?.toLocaleString()}`}
                </span>
              </p>
            </div>
            <div className={styles["section-second-first-block"]}>
              <div className={styles["section-second-first-image"]}>
                <Image
                  alt="icon"
                  src={"/warrantybook.png"}
                  width={18}
                  height={18}
                  layout="fixed"
                  quality={100}
                  // unoptimized={isDev}
                />
              </div>
              <div className={styles["order-details-link"]}>
                <a
                  href={`/account/${
                    orderItems?.[0]?.order?.siteOrderId?.split("-")[1]
                  }/invoice`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("View Digital Receipt & Warranty")}
                </a>
              </div>
            </div>
          </div>
          {/* {appState?.region === "sa" && (
            <div className={styles["history-barcode"]}>
              <>
                <Image
                  alt="icon"
                  src={dataUrlWithCanvasGQRCode || "/"}
                  width={160}
                  height={160}
                />
              </>
            </div>
          )} */}
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["return-timeout-div"]}>
          {order?.status === "ORDER_RETURN_FAILED" ? (
            <ErrorNote
              label={t("orderReturnFailedNote")}
              isLink={true}
              redirectLink={"/"}
              btnText={t("read more")}
            />
          ) : null}
          {isCheckingEligibility ? (
            <DotsLoader />
          ) : (
            <>
              {atLeastOneItemEligible ? (
                <ErrorNote
                  label={t("timeFrameOutNote")}
                  isLink={true}
                  redirectLink={"/"}
                  btnText={t("read more")}
                />
              ) : null}
              <Button
                className={
                  styles[
                    orderStatus === "DISPATCHED" ||
                    orderStatus === "ORDER_DELIVERED"
                      ? ""
                      : "disable-btn"
                  ]
                }
                testId="return-order-btn"
                buttonSize="sm"
                buttonText={t("Return Order")}
                onClick={() => {
                  setIsReturnOrderActive && setIsReturnOrderActive(true);
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles["section-third"]}>
        <>
          <Label className={styles["section-third-title"]}>
            {t("Delivery Address")}
          </Label>
          <div className={styles["delivery-address"]}>
            <Label>{`${orderShipping?.shippingFirstName} ${orderShipping?.shippingLastName}`}</Label>
            <Label>{`${orderShipping?.shippingAddress || ""}`}</Label>
            <Label>
              <>
                {`${orderShipping?.shippingCity || ""}
                ${orderShipping?.shippingState || ""}
                ${orderShipping?.shippingPostalCode || ""}`}
              </>
            </Label>
            <Label>{`${orderShipping?.shippingCountry}`}</Label>
            <Label>{`T: ${orderShipping?.shippingPhone || ""}`}</Label>
          </div>
        </>
      </div>

      <div className={styles["section-forth"]}>
        <div className={styles["sec-header"]}>
          <div className={styles["section-forth-first"]}>
            <Label className={styles["section-forth-title"]}>
              <>
                {/* {!isReturnItems ? ( */}
                <>{message}</>
              </>
            </Label>
            <p className={styles["section-forth-text"]}>
              {orderItems?.length}{" "}
              {appState?.lang == "en"
                ? orderItems?.length > 1
                  ? "Items"
                  : "Item"
                : t("Items")}
            </p>
          </div>
          {!isReturnItems ? (
            <div>
              <p className={styles["section-forth-description"]}>
                {t("Estimated Delivery")}:{" "}
                {orderFormatDate(orderItems?.[0]?.order?.orderDate)}
              </p>
            </div>
          ) : null}
        </div>
        <div className={styles["section-forth-second"]}>
          {orderItems &&
            orderItems?.length > 0 &&
            orderItems?.map((item: any, i: number) => {
              return (
                <OrderHistoryItem
                  key={i}
                  order={order}
                  currentItem={item}
                  setModalOpen={setModalOpen}
                  setProductDetailForReviews={setProductDetailForReviews}
                  isReturnItems={isReturnItems}
                  setIsShipmentModalOpen={setIsShipmentModalOpen}
                  setSelectedOrderData={setSelectedOrderData}
                  setActiveComponent={setActiveComponent}
                  reviewsData={reviewsData}
                />
              );
            })}
        </div>
        {order?.shipInfo?.[0]?.estimatedDeliveryDate ? (
          <Label className={styles["delivery-date"]}>
            <>
              {t("Delivery Date")}:{" "}
              {orderFormatDate(order?.shipInfo?.[0]?.estimatedDeliveryDate)}
            </>
          </Label>
        ) : null}
      </div>

      {Object.keys(paymentCardDetail)?.length > 0 ? (
        <div className={styles["section-fifth"]}>
          <p className={styles["section-fifth-title"]}>
            {t("Payment Details")}
          </p>

          <div className={styles["section-fifth-second"]}>
            <Label>{`${paymentCardDetail?.account_holder?.first_name || ""} ${
              paymentCardDetail?.account_holder?.last_name || ""
            }`}</Label>
            <Label>
              {paymentCardDetail &&
                `****-****-****-${paymentCardDetail?.last4}`}
            </Label>
            <Label>
              {`${paymentCardDetail?.expiry_month}/${paymentCardDetail?.expiry_year}`}
            </Label>
            <Label>{paymentCardDetail && paymentCardDetail?.scheme}</Label>
          </div>
        </div>
      ) : null}

      <div className={styles["section-six"]}>
        <p className={styles["sec-header"]}>{t("Order Total")}</p>
        <div>
          <div
            className={`${styles["history-flex"]} ${styles["history-price"]}`}
          >
            <p className={styles["price-title"]}>
              {appState?.region === "eg" || hasGoldCoinOrBar
                ? t("Sub-Total")
                : t("sub-totalVAT")}
              :
            </p>
            <p className={styles["price-text"]}>
              {currency} {Number(subTotal)?.toLocaleString()}
            </p>
          </div>
          <div className={`${styles["history-flex"]}`}>
            <p className={styles["price-title"]}>{t("Discount")}:</p>
            <p className={styles["price-text"]}>
              -{currency} {Number(discount)?.toLocaleString() || 0}
            </p>
          </div>
          <div
            className={`${styles["history-flex"]} ${styles["delivery-price"]}`}
          >
            <p className={styles["price-title"]}>{t("Delivery")}:</p>
            <p className={styles["price-text"]}>
              {currency} {Number(delivery)?.toLocaleString()}
            </p>
          </div>
        </div>
        <div className={styles["history-flex"]}>
          <p className={styles["section-six-first"]}>{t("Total")}:</p>
          <p className={styles["section-six-first"]}>
            {currency} {Number(total)?.toLocaleString()}
            {/* ${(order?.orderTotal - (order?.discount || 0))?.toFixed(2)} */}
          </p>
        </div>
      </div>

      <div className={styles["section-seven"]}>
        <div className={styles["section-seven-heading"]}>
          <Label>{t("Need Help?")}</Label>
        </div>
        {returnOrderNeedHelpData?.map((data: any, index: number) => {
          return (
            <>
              {data?.ques && (
                <>
                  <Accordion
                    key={index}
                    className={"section-seven-text"}
                    headingClassName={styles["order-acc-heading"]}
                    heading={data?.ques}
                    arrowDown={true}
                  >
                    <p
                      key={Math.random()}
                      dangerouslySetInnerHTML={{
                        __html: data?.ans,
                      }}
                    ></p>
                  </Accordion>
                </>
              )}
            </>
          );
        })}
      </div>
      <WriteAReview
        isOpened={modalOpen}
        onClose={() => setModalOpen(false)}
        productData={productDetailForReviews}
      />

      <ShipmentTypeModal
        isOpen={isShipmentModalOpen}
        onClose={() => {
          setIsShipmentModalOpen(false);
        }}
        setIsReturnOrderActive={setIsReturnOrderActive}
        orderId={order?.[0]?.order?.siteOrderId?.split("-")[1]}
        selectedOrderData={selectedOrderData}
        setIsStaticContentModal={setIsStaticContentModal}
        setCurrentCompActive={setCurrentCompActive}
        isStaticContentModal={isStaticContentModal}
        setMyReturnComponentActive={setMyReturnComponentActive}
        setIsModalOpen={setIsShipmentModalOpen}
        storeLocatorProps={storeLocatorProps}
        paymentDetail={paymentCardDetail}
      />
    </div>
  );
};
export default OrderHistory;
