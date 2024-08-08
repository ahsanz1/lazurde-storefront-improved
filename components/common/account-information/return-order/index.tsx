import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import ReturningItems from "./return-order-items";
import Image from "next/image";
import Heading from "components/common/ui/heading";
import Button from "components/common/ui/button";
import ShipmentTypeModal from "./shipment-type-modal";
import { returnOrderModalTypes, StoreLocatorXMProps } from "lib/types/common";
import useTranslation from "next-translate/useTranslation";
import ReturnOrderStaticModals from "./static-content-modals";
import Notification from "components/common/ui/alert";
import { returnOrderFlowOMS } from "lib/middleware-apis/returns";
import { checkOrderStatusFlowOMS } from "lib/middleware-apis/orders";
import { useCustomer } from "lib/middleware-apis/customers";
import { AppContext } from "lib/context";
import { flowOMS_ReturnOrder } from "lib/api/orders";

interface ReturnOrderProps {
  orderDetail?: any;
  setActiveComponent?: Function;
  setCurrentCompActive?: Function;
  isShipmentModalOpen?: boolean;
  isStaticContentModal?: returnOrderModalTypes;
  setIsStaticContentModal?: Function;
  setMyReturnComponentActive?: Function;
  selectedOrderData?: any;
  setSelectedOrderData?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
  paymentDetail?: any;
}

const ReturnOrder = ({
  orderDetail,
  setCurrentCompActive = () => {},
  isStaticContentModal,
  setIsStaticContentModal = () => {},
  setMyReturnComponentActive = () => {},
  selectedOrderData,
  setSelectedOrderData = () => {},
  storeLocatorProps = [],
  paymentDetail = {},
}: ReturnOrderProps): JSX.Element => {
  const { toast } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllOrderSelected, setIsAllOrderSelected] = useState(false);
  const [isOrderSelect, setIsOrderSelect] = useState([]);
  const [reasonErrors, setReasonErrors] = useState({});
  const [selectedStoreData, setSelectedStoreData] = useState<any>({});
  const [isReturning, setIsReturning] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [returnAmount, setReturnAmount] = useState({
    price: 0,
    currency: "",
  });
  const [radioBtnValue, setRadioBtnValue] = useState({
    courierCollection: true,
    storeDropOff: false,
  });
  const [courierDate, setCourierDate] = useState({
    date: "",
    isSetDate: false,
  });
  const [storeDropOffDate, setStoreDropOffDate] = useState({
    date: "",
    isSetDate: false,
  });
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  useEffect(() => {
    return () => {
      setCourierDate({
        date: "",
        isSetDate: false,
      });
      setStoreDropOffDate({
        date: "",
        isSetDate: false,
      });
    };
  }, []);
  const shippingOrder = orderDetail;
  const handleReturnOrder = () => {
    selectedOrderData &&
      Object.keys(selectedOrderData).map((id: any) => {
        if (selectedOrderData[id]?.reasonCode == "") {
          setReasonErrors((prev) => {
            return {
              ...prev,
              [id]: true,
            };
          });
        }
      });

    const modalOpen =
      selectedOrderData &&
      Object.keys(selectedOrderData).every(
        (id) => selectedOrderData[id]?.reasonCode !== ""
      );
    if (modalOpen) {
      setIsModalOpen(true);
    }
  };
  const handleOrderReturnSubmit = async () => {
    const date = new Date()?.toISOString();
    const order = orderDetail?.[0]?.order;
    const items: any = [];
    selectedOrderData &&
      Object.keys(selectedOrderData).map((id: any) => {
        const obj = {
          sku: selectedOrderData?.[id]?.sku,
          quantity: selectedOrderData?.[id]?.returnQuantity,
          reason: selectedOrderData?.[id]?.reasonCode,
        };
        items.push(obj);
      });
    const deliveredReturn =
      selectedOrderData &&
      Object.keys(selectedOrderData).every(
        (id: any) =>
          selectedOrderData?.[id]?.status == "ORDER_DELIVERED" ||
          selectedOrderData?.[id]?.returnStatus == "ORDER_DELIVERED"
      );

    const dispatchedReturn =
      selectedOrderData &&
      Object.keys(selectedOrderData).every(
        (id: any) =>
          selectedOrderData?.[id]?.status == "DISPATCHED" ||
          selectedOrderData?.[id]?.returnStatus == "DISPATCHED"
      );

    const returnedSkus: any = items?.reduce(function (map: any, obj: any) {
      map[obj.sku] = obj.quantity;
      return map;
    }, {});

    const getReasons: any = items?.map((item: any) => {
      return `${item?.sku}:${item?.reason}`;
    });
    setIsReturning(true);

    const returnOrderPayload = {
      returnedSkus: {
        ...returnedSkus,
      },
      returnOption: radioBtnValue?.storeDropOff ? "SELF_RETURN" : "3PL_RETURN",
      returnReason: getReasons?.toString(),
      returnDateTime: date,
    };
    if (deliveredReturn || dispatchedReturn) {
      const response = await returnOrderFlowOMS(
        order?.siteOrderId?.split("-")[1],
        customerData?.email.toLowerCase(),
        returnOrderPayload
      );
      if (response?.status === "Success") {
        setIsModalOpen(false);
        setIsStaticContentModal({
          isCourierCollection: radioBtnValue?.courierCollection ? true : false,
          isStoreDropOff: radioBtnValue?.storeDropOff ? true : false,
        });
      } else {
        setErrorMessage([
          ...errorMessage,
          {
            title: "Something Went Wrong",
            description: "Please try again later",
            backgroundColor: "#fff",
          },
        ]);
      }
    } else {
      setIsReturning(false);
      toast(`Something Went Wrong <br>
      Status: ${orderDetail?.[0]?.omsOrderStatus}`);
    }
    setIsReturning(false);
  };
  return (
    <>
      <div>
        <div className={styles["sec-header"]}>
          <Image
            src={"/notepad.png"}
            alt="order-image"
            width={20}
            height={20}
            layout="fixed"
          />
          <Heading
            testId="heading"
            element="h3"
            className={styles["order-id-heading"]}
          >{`${t("order")} #${
            orderDetail?.[0]?.order?.siteOrderId?.split("-")[1]
          }`}</Heading>
        </div>
        <ReturningItems
          orderId={orderDetail?.[0]?.order?.siteOrderId?.split("-")[1]}
          orderItems={shippingOrder}
          returnedOrders={orderDetail}
          currency={orderDetail?.[0]?.order?.currency}
          isAllOrderSelected={isAllOrderSelected}
          setIsAllOrderSelected={setIsAllOrderSelected}
          isOrderSelect={isOrderSelect}
          setIsOrderSelect={setIsOrderSelect}
          setSelectedOrderData={setSelectedOrderData}
          selectedOrderData={selectedOrderData}
          reasonErrors={reasonErrors}
          setReasonErrors={setReasonErrors}
        />
        {Object.keys(selectedOrderData).length > 0 ? (
          <div className={styles["return-orders-btn"]}>
            <Button
              buttonText={t("return")}
              buttonSize="lr"
              onClick={() => {
                if (
                  !Object.keys(selectedOrderData)?.every(
                    (orderSku: string) =>
                      selectedOrderData?.[orderSku]?.reasonCode
                  )
                )
                  return;
                setIsModalOpen(true);
                handleReturnOrder();
              }}
              testId="return-btn"
            />
          </div>
        ) : null}
      </div>
      {/* {isModalOpen && ( */}
      <ShipmentTypeModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={() => {
          handleOrderReturnSubmit();
        }}
        returnAmount={returnAmount}
        isReturning={isReturning}
        paymentDetail={paymentDetail}
        setRadioBtnValue={setRadioBtnValue}
        radioBtnValue={radioBtnValue}
        orderId={orderDetail?.[0]?.order?.siteOrderId?.split("-")[1]}
        selectedOrderData={selectedOrderData}
        isStaticContentModal={isStaticContentModal}
        setIsStaticContentModal={setIsStaticContentModal}
        setCurrentCompActive={setCurrentCompActive}
        setMyReturnComponentActive={setMyReturnComponentActive}
        setIsModalOpen={setIsModalOpen}
        storeLocatorProps={storeLocatorProps}
        courierDate={courierDate}
        setCourierDate={setCourierDate}
        storeDropOffDate={storeDropOffDate}
        setStoreDropOffDate={setStoreDropOffDate}
        selectedStoreData={selectedStoreData}
        setSelectedStoreData={setSelectedStoreData}
      />
      {/* )} */}
      {errorMessage && errorMessage?.length > 0 ? (
        <Notification
          autoDelete={true}
          toastList={errorMessage}
          position={"top-center"}
          autoDeleteTime={5000}
        />
      ) : null}
    </>
  );
};

export default ReturnOrder;
