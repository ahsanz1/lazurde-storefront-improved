import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import Heading from "components/common/ui/heading";
import ReturnOrderIcon from "components/icons/ReturnOrderIcon";
import useTranslation from "next-translate/useTranslation";
import ReturnOrderItem from "./my-return-orderitem";
import ShipmentTypeModal from "../shipment-type-modal";
import { returnOrderModalTypes, StoreLocatorXMProps } from "lib/types/common";
import { useOrders } from "lib/api/orders";
import AccountOrderLoader from "components/common/ui/skeletons/account-order";
import { useCustomer } from "lib/middleware-apis/customers";
import { AppContext } from "lib/context";

interface MyReturnsProps {
  orderObject?: any;
  setOrderObject?: Function;
  setActiveComponent?: Function;
  setIsOrderHistoryActive?: Function;
  setUpdateOrderComp?: Function;
  updateOrderComp?: boolean;
  setIsReturnItems?: Function;
  myReturnTabActive?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setIsStaticContentModal?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
  selectedItemForReturn?: any;
  setSelectedItemForReturn?: Function;
}

const MyReturns = ({
  orderObject = [],
  setOrderObject,
  setActiveComponent,
  setIsOrderHistoryActive,
  setUpdateOrderComp,
  updateOrderComp = false,
  setIsReturnItems,
  myReturnTabActive,
  isStaticContentModal,
  setIsStaticContentModal,
  storeLocatorProps = [],
  selectedItemForReturn,
  setSelectedItemForReturn = () => {},
}: MyReturnsProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [OrderData, setOrderData] = useState<any>({});
  const { appState } = useContext(AppContext);
  const { useGetReturnOrders } = useOrders();
  const { useGetCustomerByGraphQl } = useCustomer();
  const { data: customerData } = useGetCustomerByGraphQl({ enabled: false });
  const {
    data: returnOrdersDetail,
    isLoading: isLoading,
    refetch,
    isRefetching,
  } = useGetReturnOrders({
    enabled: customerData?.entityId > 0 || false,
  });

  let returnedAllOrders: any = [];
  useEffect(() => {
    refechOrders();
  }, []);

  const refechOrders = async () => {
    const itsDone = await refetch();
    returnedAllOrders == itsDone?.data;
  };

  returnedAllOrders =
    returnOrdersDetail?.length > 0 &&
    returnOrdersDetail?.filter((returnItem: any) =>
      [
        "PENDING_RETURN",
        "ORDER_CLOSE",
        "PARTIAL_RETURN",
        "ORDER_RETURNED",
      ].includes(returnItem?.order?.status)
    );
  const [selectedStoreData, setSelectedStoreData] = useState<any>({});
  const [courierDate, setCourierDate] = useState({
    date: "",
    isSetDate: false,
  });
  const [storeDropOffDate, setStoreDropOffDate] = useState({
    date: "",
    isSetDate: false,
  });

  let ordersArr: any = [];
  const handleOrderDetail = async (order: any) => {
    setIsOrderHistoryActive(true);
    setActiveComponent("my-orders");
    setUpdateOrderComp(!updateOrderComp);
    const itsDone = await refetch();
    itsDone?.data?.map((item: any) => {
      if (
        item?.order?.siteOrderId?.split("-")[1] ===
        order?.siteOrderId?.split("-")[1]
      ) {
        ordersArr.push(item);
      }
      return ordersArr;
    });
    setOrderObject(ordersArr);
    if (
      order?.order?.status === "PENDING_RETURN" ||
      order?.order?.status === "ORDER_CLOSE" ||
      order?.order?.status === "PARTIAL_RETURN" ||
      order?.order?.status === "ORDER_RETURNED"
    ) {
      setIsReturnItems(true);
    } else {
      setIsReturnItems(false);
    }
  };

  if (isRefetching) {
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

  return (
    <>
      <div className={styles["sec-header"]}>
        <ReturnOrderIcon />
        <Heading element="h3" className={styles["heading"]}>
          {t("My Returns")}
        </Heading>
      </div>
      <div className={styles["return-order-wrapper"]}>
        {isLoading && returnedAllOrders.length < 0 ? (
          <div
            className="account-loader-div padding"
            style={{
              height: "365px",
            }}
          >
            <AccountOrderLoader />
          </div>
        ) : (
          <>
            {returnedAllOrders &&
              returnedAllOrders.length > 0 &&
              returnedAllOrders?.map((order: any, index: number) => {
                const regionBasedOrders =
                  order?.order?.region.slice(0, 2).toLowerCase() ===
                  appState?.region;
                return (
                  <>
                    {regionBasedOrders && (
                      <ReturnOrderItem
                        key={index}
                        index={index}
                        singleOrderData={order}
                        status={order?.order?.status}
                        orderCreatedDate={order?.order?.orderDate}
                        handleOrderDetail={handleOrderDetail}
                        setIsShipmentModalOpen={setIsModalOpen}
                        setOrderData={setOrderData}
                        isStaticContentModal={isStaticContentModal}
                        setIsStaticContentModal={setIsStaticContentModal}
                        selectedItemForReturn={selectedItemForReturn}
                        setSelectedItemForReturn={setSelectedItemForReturn}
                        isOrderRefetching={isRefetching}
                      />
                    )}
                  </>
                );
              })}
          </>
        )}
      </div>
      {isModalOpen && (
        <ShipmentTypeModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedItemForReturn({});
          }}
          onSubmit={() => {
            // handleOrderReturnSubmit();
          }}
          orderId={OrderData?.[0]?.order?.siteOrderId?.split("-")[1]}
          selectedOrderData={selectedItemForReturn}
          isStaticContentModal={isStaticContentModal}
          setIsStaticContentModal={setIsStaticContentModal}
          setMyReturnComponentActive={myReturnTabActive}
          setIsModalOpen={setIsModalOpen}
          storeLocatorProps={storeLocatorProps}
          courierDate={courierDate}
          setCourierDate={setCourierDate}
          storeDropOffDate={storeDropOffDate}
          setStoreDropOffDate={setStoreDropOffDate}
          selectedStoreData={selectedStoreData}
          setSelectedStoreData={setSelectedStoreData}
        />
      )}
    </>
  );
};

export default MyReturns;
