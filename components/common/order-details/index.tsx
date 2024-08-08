import React, { useContext, FC, useState, useEffect } from "react";
import Image from "next/image";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import styles from "./order-details.module.scss";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import OrderHistory from "../order-history";
import ReturnOrder from "components/common/account-information/return-order";
import { returnOrderModalTypes, StoreLocatorXMProps } from "lib/types/common";
import { useOrders } from "lib/api/orders";
import OrderItem from "./order-item";
import AccountOrderLoader from "components/common/ui/skeletons/account-order";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomer } from "lib/middleware-apis/customers";
import { isDev } from "general-config";

interface OrderDetailsProps {
  setActiveComponent?: Function;
  orderObject?: any;
  setOrderObject?: Function;
  isOrderHistoryActive?: boolean;
  isReturnItems?: boolean;
  myReturnTabActive?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setIsStaticContentModal?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
}

const OrderDetails: FC<OrderDetailsProps> = ({
  setActiveComponent,
  orderObject = [],
  setOrderObject,
  isOrderHistoryActive = false,
  isReturnItems = false,
  isStaticContentModal,
  setIsStaticContentModal,
  myReturnTabActive,
  storeLocatorProps = [],
}) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const [isReturnOrderActive, setIsReturnOrderActive] = useState(false);
  const [currentCompActive, setCurrentCompActive] =
    useState(isOrderHistoryActive);
  const [selectedOrderData, setSelectedOrderData] = useState({});
  const [paymentCardDetail, setPaymentCardDetail] = useState<any>({});
  const queryClient = useQueryClient();
  const { useGetOrders } = useOrders();
  const { useGetCustomerByGraphQl } = useCustomer();
  const { data: customerData } = useGetCustomerByGraphQl({ enabled: false });
  const {
    data: ordersDetail,
    isLoading: isOrderLoading,
    refetch,
    isRefetching: isOrderRefetching,
  } = useGetOrders({
    enabled: customerData?.entityId > 0 || false,
  });

  let activeOrders: any = [];
  useEffect(() => {
    refechOrders();
  }, [customerData?.email]);

  const refechOrders = async () => {
    const itsDone = await refetch();
    activeOrders == itsDone?.data;
  };

  if (customerData?.email && (isOrderLoading || isOrderRefetching)) {
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

  activeOrders =
    ordersDetail?.length > 0 &&
    ordersDetail?.filter(
      (item: any) =>
        item?.order?.region.slice(0, 2).toLowerCase() === appState?.region
    );

  let ordersArr: any = [];
  const handleOrderDetail = async (order: any) => {
    const itsDone = await refetch();
    itsDone?.data?.map((item: any) => {
      if (
        item?.order?.siteOrderId?.split("-")[1] ===
        order?.siteOrderId?.split("-")[1]
      ) {
        ordersArr.push(item);
      }
      setCurrentCompActive(true);
      return ordersArr;
    });
    setOrderObject(ordersArr);
    setIsReturnOrderActive(false);
    setSelectedOrderData({});
  };

  if (!isOrderLoading && ordersDetail?.length == 0) {
    return (
      <div className={styles["order-container"]}>
        <div className={styles["order-main"]}>
          <div className={styles["inner-sec"]}>
            <Image
              alt="icon"
              src={"/orders.png"}
              width={20}
              height={20}
              layout="fixed"
              quality={100}
              // unoptimized={isDev}
            />
            <Label className={styles["order-heading"]}>{t("My Orders")}</Label>
            <div className={styles["no-order"]}>{t("noOrderNote")}</div>
            {width < desktopScreenSize && (
              <Button
                testId="startShopping"
                className={styles["start-shopping"]}
                onClick={() => {}}
              >
                {t("Start shopping")}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!currentCompActive && (
        <div className={styles["order-container"]}>
          <div className={styles["order-main"]}>
            <div className={styles["inner-sec"]}>
              <Image
                alt="icon"
                src={"/orders.png"}
                width={20}
                height={20}
                layout="fixed"
                quality={100}
                // unoptimized={isDev}
              />
              <Label className={styles["order-heading"]}>
                {t("My Orders")}
              </Label>
              {activeOrders?.length > 0 ? (
                <Label className={styles["order-text"]}>
                  {`${t("Displaying")} ${activeOrders?.length}  ${t("Orders")}`}
                </Label>
              ) : null}
            </div>
          </div>
          {activeOrders &&
            activeOrders?.length > 0 &&
            activeOrders?.map((order: any, index: number) => {
              return (
                <>
                  <OrderItem
                    key={index}
                    index={index}
                    singleOrderData={order}
                    status={order?.order?.status}
                    orderCreatedAt={order?.order?.orderDate}
                    orderId={order?.id}
                    handleOrderDetail={handleOrderDetail}
                    isOrderRefetching={isOrderRefetching}
                  />
                </>
              );
            })}
          {activeOrders?.length > 0 ? (
            <div className={styles["order-count"]}>
              <Label>
                {appState?.lang === "en"
                  ? `Displaying ${activeOrders?.length} Orders`
                  : ` العرض ${activeOrders?.length} الطلب`}
              </Label>
            </div>
          ) : null}
        </div>
      )}
      {!isReturnOrderActive && currentCompActive ? (
        <OrderHistory
          order={orderObject}
          setIsReturnOrderActive={setIsReturnOrderActive}
          isReturnItems={isReturnItems}
          setIsStaticContentModal={setIsStaticContentModal}
          isStaticContentModal={isStaticContentModal}
          setCurrentCompActive={setCurrentCompActive}
          setMyReturnComponentActive={myReturnTabActive}
          setSelectedOrderData={setSelectedOrderData}
          selectedOrderData={selectedOrderData}
          setActiveComponent={setActiveComponent}
          storeLocatorProps={storeLocatorProps}
          paymentCardDetail={paymentCardDetail}
          setPaymentCardDetail={setPaymentCardDetail}
          isOrderLoading={isOrderRefetching}
        />
      ) : (
        isReturnOrderActive &&
        currentCompActive && (
          <ReturnOrder
            orderDetail={orderObject}
            setActiveComponent={setActiveComponent}
            setCurrentCompActive={setCurrentCompActive}
            isStaticContentModal={isStaticContentModal}
            setIsStaticContentModal={setIsStaticContentModal}
            setMyReturnComponentActive={myReturnTabActive}
            setSelectedOrderData={setSelectedOrderData}
            selectedOrderData={selectedOrderData}
            storeLocatorProps={storeLocatorProps}
            paymentDetail={paymentCardDetail}
          />
        )
      )}
    </>
  );
};
export default OrderDetails;
