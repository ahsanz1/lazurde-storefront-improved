import React, { useContext, useState, useEffect } from "react";
import OrderItem from "./order-item/order-item";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import { reasonOptions, reasonOptionsAR } from "lib/utils/common";
import { AppContext } from "lib/context";

const ReturningItems = ({
  orderId = "",
  orderItems,
  isAllOrderSelected = false,
  setSelectedOrderData,
  selectedOrderData = [],
  reasonErrors,
  setReasonErrors,
  currency,
  returnedOrders = [],
}: any): JSX.Element => {
  const selectedItemIds: any = [];
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [checkboxSelect, setCheckboxSelect] = useState([]);
  const [allChecboxSelect, setAllChecboxSelect] = useState(isAllOrderSelected);
  const [unSelectAll, setUnSelectAll] = useState(false);
  const [returnOrderReasons, setReturnOrderReasons] = useState([]);
  const [returnQty, setReturnQty] = useState("");
  const reasons = appState?.region === 'en' ? reasonOptions : reasonOptionsAR
  
  useEffect(() => {
    // getReasons();
  }, []);

  useEffect(() => {
    // getShipmentQuery(orderId);
  }, [orderId, orderItems]);

  // const getReasons = async () => {
  //   const response = await getReturnOrderReasons();
  //   response &&
  //     response?.data &&
  //     setReturnOrderReasons(
  //       response?.data?.objectValue?.attributes?.reasonCodeDescriptions
  //     );
  // };

  // const getShipmentQuery = async (orderId: string | number) => {
  //   const response = await getShipmentByQuery(orderId);
  //   const shipmentQueryItems = response?.shipments?.[0];
  //   shipmentQueryItems && modifyData(shipmentQueryItems);
  // };

  // const modifyData = (shipmentQueryItems: any) => {
  //   orderItems &&
  //     orderItems?.length > 0 &&
  //     orderItems?.forEach((item: any, index: number) => {
  //       shipmentQueryItems &&
  //         shipmentQueryItems?.cartons?.[0]?.items?.length > 0 &&
  //         shipmentQueryItems?.cartons?.[0]?.items?.map((data: any) => {
  //           if (item.itemId == Number(data.itemId)) {
  //             item["shipmentInfo"] = {
  //               ...data,
  //               shipmentId: shipmentQueryItems?.shipmentId,
  //             };
  //           }
  //         });
  //     });
  // };
  const handleAllCheckbox = () => {
    const allSelectedItem: any = {};

    setAllChecboxSelect(!allChecboxSelect);
    setUnSelectAll(true);
    orderItems &&
      orderItems.length > 0 &&
      orderItems?.map((li: any) => {
        if (li?.orderStatus_OMS?.status !== "Order is returned by Courier") {
          const ids = li?.order?.ordersItems?.map((item: any) => item?.sku);

          selectedItemIds.push(...ids);
        }
      });
    selectedItemIds && setCheckboxSelect(selectedItemIds);
    orderItems &&
      orderItems.length > 0 &&
      orderItems?.map((item: any, index: number) => {
        if (
          returnedOrders?.order?.status !== "PENDING_RETURN" ||
          returnedOrders?.order?.status !== "ORDER_CLOSE" ||
          returnedOrders?.order?.status !== "PARTIAL_RETURN" ||
          returnedOrders?.order?.status !== "ORDER_RETURNED"
        ) {
          item?.order?.ordersItems?.map((orderItem: any, index: number) => {
            const returnItemObj = {
              orderLineItemId: orderItem?.sku,
              returnQuantity: (returnQty && returnQty) || orderItem?.quantity,
              reasonCode: reasons?.[0]?.value,
              subReasonCode: "",
              policyOveride: false,
              returnAmount: orderItem?.itemTotal,
              currency: item?.order?.currency,
              id: orderItem?.sku,
              sku: orderItem?.sku,
              imageSrc: orderItem?.ordersItemsDetails?.[1]?.value,
              brand: orderItem?.categories,
              shipmentId: item?.shipmentInfo?.shipmentId,
              shipmentLineItemId: item?.shipmentInfo?.shipmentLineItemId,
              returnStatus: returnedOrders?.siteStatus || item?.order?.status,
            };
            if (returnQty || orderItem?.quantity) {
              allSelectedItem[returnItemObj.sku] = returnItemObj;
            }
          });
        }
      });
    setSelectedOrderData && setSelectedOrderData({ ...allSelectedItem });
  };

  const handleUnSelectAllCheckbox = () => {
    setCheckboxSelect([]);
    setSelectedOrderData({});
    setUnSelectAll(false);
    setReasonErrors({});
  };

  const handleSingleCheckbox = (
    e?: React.ChangeEvent<HTMLInputElement>,
    obj?: any
  ) => {
    const { id, checked } = e.target;
    setCheckboxSelect((prev: any) => [...prev, String(id)]);
    if (!checked) {
      const tempData = selectedOrderData;
      delete tempData[obj?.sku];
      setSelectedOrderData && setSelectedOrderData({ ...tempData });
      setCheckboxSelect &&
        setCheckboxSelect(
          checkboxSelect?.filter((item: any) => item !== String(id))
        );
      return;
    }
    setSelectedOrderData &&
      setSelectedOrderData((prev: any) => {
        return {
          ...prev,
          [obj?.id]: obj,
        };
      });

    setUnSelectAll(false);
  };

  const statusesToCheck = [
    "PENDING_RETURN",
    "ORDER_CLOSE",
    "PARTIAL_RETURN",
    "ORDER_RETURNED",
  ];

  const isEveryOrderStatusValid = returnedOrders?.every(
    (item: { order: { status: string } }) =>
      !statusesToCheck.includes(item?.order?.status)
  );

  return (
    <>
      <div className={styles["items-wrapper"]}>
        <div className={styles["sec-header"]}>
          <Label testId="heading" className={styles["heading"]}>
            {t("What would you like to return?")}
          </Label>
          {isEveryOrderStatusValid && (
            <Button
              buttonStyle="underline"
              buttonText={t("return all")}
              onClick={() => {
                if (!unSelectAll) {
                  handleAllCheckbox();
                } else if (unSelectAll) {
                  handleUnSelectAllCheckbox();
                }
              }}
              testId="return-all-btn"
              style={{
                width: "fit-content",
                height: "auto",
              }}
            />
          )}
        </div>
        <div className={styles["order-items"]}>
          {orderItems &&
            orderItems.length > 0 &&
            orderItems?.map((items: any, index: number) => {
              return (
                <OrderItem
                  key={items.order_id}
                  index={index}
                  currentItem={items}
                  itemStatus={items.order?.status}
                  id={items.order_id}
                  isVoucherApplied={false}
                  quantity={items?.quantity}
                  currency={currency}
                  handleClick={handleSingleCheckbox}
                  checkboxSelect={checkboxSelect}
                  setSelectedOrderData={setSelectedOrderData}
                  selectedOrderData={selectedOrderData}
                  returnOrderReasons={returnOrderReasons}
                  reasonErrors={reasonErrors}
                  setReasonErrors={setReasonErrors}
                  returnedOrders={returnedOrders}
                  returnQty={returnQty}
                  setReturnQty={setReturnQty}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ReturningItems;
