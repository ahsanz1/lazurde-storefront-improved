/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Path,
  Font,
  Image,
} from "@react-pdf/renderer";
import { taxInvoiceOrderDate } from "lib/utils/common";
import {
  getAllOrders_FlowOMS,
  getBiggCOrder,
} from "lib/middleware-apis/orders";
import { isDev } from "general-config";
import { AppContext } from "lib/context";
const { QRCodeCanvas } = require("@cheprasov/qrcode");
let dataUrlWithCanvasGQRCode: any = undefined;

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      fontStyle: "bold",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
      fontStyle: "italic",
      fontWeight: 400,
    },
  ],
});
const styles = StyleSheet.create({
  alignRight: { alignItems: "flex-end" },
  textRight: { textAlign: "right" },
  justifyRight: { justifyContent: "flex-end" },
  flexRow: { flexDirection: "row" },
  flexColumn: { flexDirection: "column" },
  spaceBetween: { justifyContent: "space-between" },
  fontBold: { fontFamily: "Roboto", fontWeight: 700, fontStyle: "bold" },
  fontItalic: { fontFamily: "Roboto", fontWeight: 400, fontStyle: "italic" },
  textWhite: { color: "white" },
  textFooter: {
    fontSize: "8px",
    lineHeight: "120%",
  },
  textBold: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontStyle: "bold",
    fontSize: "11px",
    lineHeight: "120%",
  },
  textNormal: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "11px",
    lineHeight: "120%",
  },
  textItalic: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "120%",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    fontSize: "11px",
  },
  header: {
    alignItems: "center",
    width: "100%",
    marginTop: "15.5px",
    marginBottom: "15.5px",
  },
  section1: {
    flexDirection: "row",
    padding: "41px 30px 30px 30px",
    justifyContent: "space-between",
  },
  section2: {
    flexDirection: "column",
    padding: "10px 30px 30px 30px",
    justifyContent: "space-between",
  },
  section2InnerRight: {
    flexDirection: "column",
  },
  section2InnerRightView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section3: { flexDirection: "column" },
  section4: { flexDirection: "column", padding: "18px 30px 18px 30px" },
  table: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    padding: "12px 30px 12px 30px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cell1: {
    width: "30%",
    maxWidth: "30%",
    textAlign: "left",
    alignItems: "flex-start",
  },
  cell2: {
    width: "13%",
    maxWidth: "13%",
    textAlign: "left",
    alignItems: "flex-start",
  },
  rowHeading: {
    backgroundColor: "#F2F2F2",
  },
  marginRight40: {
    // marginRight: "1.6%",
  },
  divider: {
    backgroundColor: "#F2F2F2",
    height: "1px",
    width: "100%",
  },
  footer: {
    padding: "11px 9px 11px 11px",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "black",
  },
  qrImage: {
    width: "68px",
    height: "68px",
  },
});

const OrderInvoice = (): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [orderData, setOrderData] = useState<any>({});
  const [omsOrderData, setOmsOrderData] = useState<any>([]);
  const orderID = window.location.pathname.split("/")[3];
  const region = window.location.pathname.split("/")[1].split("-")[1];
  const orderIdAgainstEnv = isDev ? `LZD-${orderID}` : `LZ-${orderID}`;

  useEffect(() => {
    getOrderByOrderID();
  }, []);

  if (typeof window === "undefined") return null;
  const getOrderByOrderID = async () => {
    if (orderID !== undefined) {
      const orderDatas = await getBiggCOrder(Number(orderID), region);
      const orders = await getAllOrders_FlowOMS(
        orderDatas?.consignments?.shipping?.[0]?.email
      );
      const omsOrder = await orders?.completeOrders?.find(
        (order: any) => String(order?.order?.siteOrderId) === orderIdAgainstEnv
      );
      setOmsOrderData(omsOrder);

      let obj = {
        ...orderDatas,
        tracking_MetaFields: {
          trackingLink: omsOrder?.trackingUrl,
          trackingNum: omsOrder?.trackingNumber,
          logisticsName: omsOrder?.courierId,
          fulFillmentStatus: omsOrder?.omsOrderStatus,
        },
      };

      obj && setOrderData(obj);
    }
  };

  const paymentMethod = orderData?.payment_method?.split(/\(|-/)[0];

  // const items = orderData?.consignments?.[0]?.shipping?.[0]?.line_items;
  const items = orderData?.consignments?.shipping?.[0]?.line_items;

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
    const time = createValueArray("3", orderData?.date_created);
    const amount = createValueArray("4", orderData?.total_inc_tax?.toString());
    const vatAmount = createValueArray("5", orderData?.total_tax?.toString());
    if (seller && vat && time && amount && vatAmount) {
      const dataConcat = Buffer.concat([seller, vat, time, amount, vatAmount]);
      const dataToBase64 = dataConcat.toString("base64");
      const qrCanvas = new QRCodeCanvas(dataToBase64);
      dataUrlWithCanvasGQRCode = qrCanvas.toDataUrl();
    }
  }

  const hasGoldCoinOrBar = omsOrderData?.order?.ordersItems?.every(
    (product: any) => {
      const attributes = product?.ordersItemsDetails;
      return attributes?.some(
        (attribute: { value: string }) =>
          attribute?.value === "Gold Coin" || attribute?.value === "Gold Bar"
      );
    }
  );

  return (
    <>
      <Document>
        <>
          <Page size="A4" style={styles.page}>
            <View style={styles.header} fixed>
              <LazurdeLogo></LazurdeLogo>
            </View>

            {orderData?.id ? (
              <>
                <View style={styles.section1}>
                  <Text style={styles.textBold}>{"Tax Invoice"}</Text>
                  <Text style={styles.textNormal}>
                    {taxInvoiceOrderDate(orderData?.date_created)}
                  </Text>
                </View>
                <View style={styles.divider}></View>

                <View style={styles.section2}>
                  <View style={[styles.flexRow, styles.spaceBetween]}>
                    <View style={[{ flex: "1" }]}>
                      <Text>{`${orderData?.consignments?.shipping?.[0]?.first_name}, ${orderData?.consignments?.shipping?.[0]?.last_name}`}</Text>
                      <Text>
                        {orderData?.consignments?.shipping?.[0]?.street_1}
                      </Text>
                      <Text>{`${orderData?.consignments?.shipping?.[0]?.city}, ${orderData?.consignments?.shipping?.[0]?.country}`}</Text>
                    </View>

                    <View style={[{ flex: "1" }]}>
                      <View style={[styles.section2InnerRight]}>
                        <View style={styles.section2InnerRightView}>
                          <Text
                            style={[
                              styles.justifyRight,
                              { marginRight: "34px" },
                            ]}
                          >
                            Your Order #
                          </Text>
                          <Text>{orderData?.id}</Text>
                        </View>
                        <View style={styles.section2InnerRightView}>
                          <View>
                            <Text
                              style={[
                                styles.justifyRight,
                                { marginRight: "34px" },
                              ]}
                            >
                              Your Payment Mode
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.flexColumn,
                              { alignItems: "flex-end" },
                            ]}
                          >
                            <Text
                              style={[styles.alignRight]}
                            >{`Paid by ${paymentMethod}`}</Text>
                            {/* <Text
                      style={[styles.alignRight]}
                    >{`**** **** **** ${orderData?.payments[0]?.paymentIdentifier?.cardIdentifier}`}</Text> */}
                          </View>
                        </View>
                      </View>

                      {/* <View>
                    <Text
                      style={[styles.justifyRight, { marginRight: "34px" }]}
                    >
                      Your Order Tracking #
                    </Text>
                  </View>
                  <View style={[styles.flexColumn, { alignItems: "flex-end" }]}>
                    <Text
                      style={[styles.justifyRight, { marginRight: "24px" }]}
                    >
                      {orderData?.tracking_MetaFields?.trackingNum}
                      {"1234567890"}
                    </Text>
                  </View> */}
                    </View>
                  </View>

                  <View
                    style={[
                      styles.flexRow,
                      styles.spaceBetween,
                      { marginTop: "20px" },
                    ]}
                  >
                    <View style={[{ flex: "1" }]}>
                      <Text
                        style={[styles.justifyRight, { marginRight: "24px" }]}
                      >
                        Phone:{" "}
                        {`${orderData?.consignments?.shipping?.[0]?.phone}`}
                      </Text>
                      <Text
                        style={[styles.justifyRight, { marginRight: "24px" }]}
                      >
                        Email:{" "}
                        {`${orderData?.consignments?.shipping?.[0]?.email}`}
                      </Text>
                      {/* {orderData?.tracking_MetaFields?.logisticsName &&
              orderData?.tracking_MetaFields?.logisticsName !==
                "Does Not Exist" ? (
                <Text style={[styles.justifyRight, { marginRight: "24px" }]}>
                  Logistics Name:{" "}
                  {orderData?.tracking_MetaFields?.logisticsName}
                </Text>
              ) : null} */}
                      {/* {orderData?.tracking_MetaFields?.trackingNum &&
                    orderData?.tracking_MetaFields?.trackingNum !==
                      "Does Not Exist" ? (
                      <Text
                        style={[styles.justifyRight, { marginRight: "24px" }]}
                      >
                        Your Order Tracking #{" "}
                        {orderData?.tracking_MetaFields?.trackingNum}
                      </Text>
                    ) : null} */}

                      {/* {orderData?.tracking_MetaFields?.trackingLink &&
              orderData?.tracking_MetaFields?.trackingLink !==
                "Does Not Exist" ? (
                <Text style={[styles.justifyRight, { marginRight: "24px" }]}>
                  Your Order Tracking Link:{" "}
                  {orderData?.tracking_MetaFields?.trackingLink}
                </Text>
              ) : null} */}

                      {/* <Text style={[styles.justifyRight, { marginRight: "24px" }]}>
                Status:{" "}
                {orderData?.tracking_MetaFields?.fulFillmentStatus == "Dead"
                  ? "Closed"
                  : orderData?.tracking_MetaFields?.fulFillmentStatus}
              </Text> */}
                    </View>
                    {orderData?.tracking_MetaFields?.trackingNum &&
                    orderData?.tracking_MetaFields?.trackingNum !==
                      "Does Not Exist" ? (
                      <View
                        style={[
                          styles.flexRow,
                          styles.spaceBetween,
                          { flex: "1" },
                        ]}
                      >
                        <View>
                          <Text>Your Order Tracking #</Text>
                        </View>
                        <View
                          style={[
                            styles.flexColumn,
                            { alignItems: "flex-end" },
                          ]}
                        >
                          <Text>
                            {orderData?.tracking_MetaFields?.trackingNum}
                          </Text>
                        </View>
                      </View>
                    ) : null}

                    {/* <View style={[styles.section2InnerRightView, styles.flexRow]}>
              <Text style={[styles.justifyRight, { marginRight: "54px" }]}>
               Logistics Name: {orderData?.tracking_MetaFields?.logisticsName}
              </Text>
            </View>

            <View style={[styles.section2InnerRightView, styles.flexRow]}>
              <Text style={[styles.justifyRight, { marginRight: "54px" }]}>
                Your Order Tracking # {orderData?.tracking_MetaFields?.trackingNum}
              </Text>
            </View>

            <View style={[styles.section2InnerRightView, styles.flexRow]}>
              <Text style={[styles.justifyRight, { marginRight: "54px" }]}>
                Your Order Tracking Link: {orderData?.tracking_MetaFields?.trackingLink}
              </Text>
            </View> */}
                  </View>
                </View>

                <View style={[styles.section3]}>
                  <View style={[styles.table]}>
                    <View style={[styles.row, styles.rowHeading]}>
                      <Text style={[styles.cell1]}>{`Item(s)`}</Text>
                      <Text
                        style={[styles.cell2]}
                      >{`Unit Price\n(Excl. Tax)`}</Text>
                      <Text style={[styles.cell2]}>QTY</Text>
                      <Text
                        style={[styles.cell2]}
                      >{`Discount\n(Excl. Tax)`}</Text>
                      <Text style={[styles.cell2]}>Tax</Text>
                      <Text style={[styles.cell2]}>
                        {appState?.region === "eg" || hasGoldCoinOrBar
                          ? `Value`
                          : `Value\n(incl. Tax)`}
                      </Text>
                    </View>
                    {items?.map((item: any) => (
                      <>
                        <View style={[styles.row]}>
                          <View
                            style={[styles.cell1, { flexDirection: "column" }]}
                          >
                            <Text style={[{ width: "100%", fontSize: "11px" }]}>
                              {item?.["name"].split(" - ")[1]}
                            </Text>
                            {item?.Size ? (
                              <Text
                                style={[{ width: "100%", fontSize: "8px" }]}
                              >
                                {`Size: ${item?.Size}`}
                              </Text>
                            ) : null}
                            {item?.Color ? (
                              <Text
                                style={[{ width: "100%", fontSize: "8px" }]}
                              >
                                {`Color: ${item?.Color}`}
                              </Text>
                            ) : null}
                          </View>
                          <Text style={[styles.cell2]}>{`${
                            orderData?.currency_code
                          } ${Number(
                            item?.price_ex_tax || 0
                          )?.toLocaleString()}`}</Text>
                          <Text style={[styles.cell2]}>
                            {item?.quantity || 0}
                          </Text>
                          <Text style={[styles.cell2]}>{`${
                            orderData?.currency_code
                          } ${Number(
                            orderData?.coupon_discount || 0
                          ).toLocaleString()}`}</Text>
                          <Text style={[styles.cell2]}>{`${
                            orderData?.currency_code
                          } ${Number(
                            item?.total_tax || 0
                          ).toLocaleString()}`}</Text>
                          <Text style={[styles.cell2]}>{`${
                            orderData?.currency_code
                          } ${Number(
                            item?.total_inc_tax || 0
                          ).toLocaleString()}`}</Text>
                        </View>
                        <View style={styles.divider}></View>
                      </>
                    ))}
                  </View>
                  <View style={styles.divider}></View>

                  <View
                    style={[
                      styles.section4,
                      { display: "flex", flexDirection: "row" },
                    ]}
                  >
                    <View style={[{ flex: "1" }]}>
                      {dataUrlWithCanvasGQRCode && region === "sa" && (
                        <Image
                          source={{
                            uri: dataUrlWithCanvasGQRCode,
                            method: "GET",
                            headers: {},
                            body: "",
                          }}
                          style={styles.qrImage}
                        />
                      )}
                    </View>
                    <View style={[{ flex: "1" }]}>
                      <Text>Total Before Tax & Discount</Text>
                      <Text>Discount (Excl. Tax)</Text>
                      <Text>Delivery Charges (Excl. Tax)</Text>
                      <Text>Sub-total (Excl. Tax)</Text>
                      <Text>Total Tax</Text>
                    </View>
                    <View style={[styles.cell2, { alignItems: "flex-end" }]}>
                      <Text>{`${orderData?.currency_code} ${(
                        Number(orderData?.subtotal_inc_tax) -
                        Number(orderData?.subtotal_tax)
                      )?.toLocaleString()}`}</Text>
                      <Text>{`${orderData?.currency_code} ${Number(
                        orderData?.coupon_discount || orderData?.discount_amount
                      )?.toLocaleString()}`}</Text>
                      <Text>{`${orderData?.currency_code} ${Number(
                        orderData?.handling_cost_inc_tax
                      )?.toLocaleString()}`}</Text>

                      <Text>{`${orderData?.currency_code} ${Number(
                        orderData?.subtotal_ex_tax
                      )?.toLocaleString()}`}</Text>
                      <Text>{`${orderData?.currency_code} ${Number(
                        orderData?.total_tax
                      )?.toLocaleString()}`}</Text>
                    </View>
                  </View>

                  <View style={styles.divider}></View>

                  <View
                    style={[
                      styles.section4,
                      {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <View style={[{ flex: "1" }]}>
                      <Text style={[styles.textItalic, { width: "60%" }]}>
                        VAT has been paid at stamping stage, and this tax
                        includes all stages of trading
                      </Text>
                    </View>
                    <View style={[{ flex: "1" }]}>
                      <Text
                        style={[styles.textBold]}
                      >{`Total (Incl. Tax)`}</Text>
                    </View>
                    <View style={[styles.cell2, { alignItems: "flex-end" }]}>
                      <Text style={[styles.textBold]}>{`${
                        orderData?.currency_code
                      } ${Number(
                        orderData?.total_inc_tax
                      )?.toLocaleString()}`}</Text>
                    </View>
                  </View>

                  <View style={styles.divider}></View>
                </View>

                <View
                  style={[
                    {
                      paddingTop: "20px",
                      justifyContent: "center",
                      flexDirection: "row",
                    },
                  ]}
                >
                  <Text>Thank you for choosing L’azurde</Text>
                </View>

                <View style={styles.footer} fixed>
                  <View
                    style={[
                      styles.flexRow,
                      { alignItems: "center", marginRight: "22px" },
                    ]}
                  >
                    <View style={[{ marginRight: "5px" }]}>
                      <InstagramLogo></InstagramLogo>
                    </View>
                    <View style={[{ marginRight: "5px" }]}>
                      <TwitterLogo></TwitterLogo>
                    </View>
                    <View
                      style={[
                        styles.flexRow,
                        { marginRight: "5px", alignItems: "center" },
                      ]}
                    >
                      <FacebookLogo></FacebookLogo>
                      <Text
                        style={[
                          styles.textWhite,
                          styles.textFooter,
                          { marginLeft: "7px" },
                        ]}
                      >
                        /Lazurde
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.flexRow,
                        { marginRight: "5px", alignItems: "center" },
                      ]}
                    >
                      <YoutubeLogo></YoutubeLogo>
                      <Text
                        style={[
                          styles.textWhite,
                          styles.textFooter,
                          { marginLeft: "7px" },
                        ]}
                      >
                        /LazurdeJewelry
                      </Text>
                    </View>
                  </View>
                  <View style={[{ flex: "1" }]}>
                    <Text
                      style={[
                        styles.textWhite,
                        styles.textFooter,
                        styles.fontBold,
                      ]}
                    >
                      L’azurde
                    </Text>
                    <Text style={[styles.textWhite, styles.textFooter]}>
                      {region == "sa" && "VAT Number 3000054684710003"}
                      {region == "eg" && "VAT Number 543-000-214"}
                      {region == "ae" && "VAT Number 100244240600003"}
                    </Text>
                    <Text style={[styles.textWhite, styles.textFooter]}>
                      {region == "sa" && " CR Number 1010221531"}
                      {region == "eg" && " CR Number 14997"}
                      {region == "ae" && " CR Number 103919"}
                    </Text>
                    <Text style={[styles.textWhite, styles.textFooter]}>
                      {region == "sa" &&
                        "HQ - P.O.Box 41270, Riyadh 11521, Kingdom of Saudia Arabia"}
                      {region == "eg" &&
                        `Egypt, Al Obour City, Industrial Zone, Section No., (12) Block
              No., (13001) Box: 521 Souk Elobour`}
                      {region == "ae" &&
                        "HQ - P.O.Box 60843, Dubai, Deira, Gold Souk, Gold Land Building, Office No 313"}
                    </Text>
                  </View>
                </View>
              </>
            ) : null}
          </Page>
        </>
      </Document>
    </>
  );
};

export default OrderInvoice;

const LazurdeLogo = () => {
  return (
    <Svg style={{ width: 200, height: 40 }}>
      <Path
        d="M183.2 3.14208V0H164.225V23.4809H183.2V20.3388H167.386V13.1913H181.798V10.2951H167.386V3.14208H183.2Z"
        fill="black"
      />
      <Path
        d="M3.96071 0H0.800049V23.4809H19.7475V20.3388H3.96071V0Z"
        fill="black"
      />
      <Path
        d="M100.431 11.929C100.431 17.1038 96.8801 20.8634 91.7735 20.8634C86.6835 20.8634 83.1326 17.1038 83.1326 11.929V0H79.9719L79.9774 11.5683C79.9774 18.7705 84.8586 24 91.779 24C98.716 24 103.592 18.7705 103.592 11.5683V0H100.431V11.929Z"
        fill="black"
      />
      <Path
        d="M38.3928 0H35.0728L24.0407 23.4809H27.3608L36.7328 3.53005L46.1048 23.4809H49.4249L38.3928 0Z"
        fill="black"
      />
      <Path
        d="M145.045 0H137.141V3.14208H145.408C150.613 3.14208 154.395 6.67213 154.395 11.7486C154.395 16.8087 150.613 20.3388 145.408 20.3388H137.141V23.4809H145.045C152.295 23.4809 157.556 18.6284 157.556 11.7486C157.55 4.84699 152.29 0 145.045 0Z"
        fill="black"
      />
      <Path
        d="M131.315 7.64062C131.315 -0.282881 122.267 0.00127268 122.267 0.00127268H110.9V23.4822H114.061V3.14335H122.273C122.273 3.14335 128.16 2.93023 128.16 7.64062C128.16 12.4494 122.273 12.1707 122.273 12.1707H117.106L127.61 23.4822H131.31L123.24 14.9084C125.994 14.9084 131.315 13.7772 131.315 7.64062Z"
        fill="black"
      />
      <Path
        d="M74.1558 0H54.098V3.14208H69.0878L53.7407 21.9454V23.4809H56.2583H74.1558V20.3388H58.8198L74.1558 1.54645V0Z"
        fill="black"
      />
      <Path
        d="M16.4376 6.7541H19.7521L22.9238 0H19.6092L16.4376 6.7541Z"
        fill="black"
      />
    </Svg>
  );
};
const InstagramLogo = () => {
  return (
    <Svg style={{ width: 24, height: 24 }}>
      <Path
        d="M18.0095 3C18.8023 3.00093 19.5625 3.31629 20.1231 3.87692C20.6837 4.43755 20.9991 5.19765 21 5.9905V18.0095C20.9991 18.8023 20.6837 19.5625 20.1231 20.1231C19.5625 20.6837 18.8023 20.9991 18.0095 21H5.9905C5.19765 20.9991 4.43755 20.6837 3.87692 20.1231C3.31629 19.5625 3.00093 18.8023 3 18.0095V5.9905C3.00093 5.19765 3.31629 4.43755 3.87692 3.87692C4.43755 3.31629 5.19765 3.00093 5.9905 3H18.0095ZM18.0095 2H5.9905C5.46644 1.99993 4.9475 2.10311 4.46332 2.30362C3.97914 2.50414 3.53921 2.79808 3.16864 3.16864C2.79808 3.53921 2.50414 3.97914 2.30362 4.46332C2.10311 4.9475 1.99993 5.46644 2 5.9905V18.0095C1.99993 18.5336 2.10311 19.0525 2.30362 19.5367C2.50414 20.0209 2.79808 20.4608 3.16864 20.8314C3.53921 21.2019 3.97914 21.4959 4.46332 21.6964C4.9475 21.8969 5.46644 22.0001 5.9905 22H18.0095C18.5336 22.0001 19.0525 21.8969 19.5367 21.6964C20.0209 21.4959 20.4608 21.2019 20.8314 20.8314C21.2019 20.4608 21.4959 20.0209 21.6964 19.5367C21.8969 19.0525 22.0001 18.5336 22 18.0095V5.9905C22.0001 5.46644 21.8969 4.9475 21.6964 4.46332C21.4959 3.97914 21.2019 3.53921 20.8314 3.16864C20.4608 2.79808 20.0209 2.50414 19.5367 2.30362C19.0525 2.10311 18.5336 1.99993 18.0095 2Z"
        fill="white"
      />
      <Path
        d="M12 16.5C9.519 16.5 7.5 14.4815 7.5 12C7.5 9.5185 9.519 7.5 12 7.5C14.481 7.5 16.5 9.5185 16.5 12C16.5 14.4815 14.481 16.5 12 16.5ZM12 8.5C10.07 8.5 8.5 10.0705 8.5 12C8.5 13.9295 10.07 15.5 12 15.5C13.93 15.5 15.5 13.9295 15.5 12C15.5 10.0705 13.93 8.5 12 8.5Z"
        fill="white"
      />
      <Path
        d="M17.5 7.5C18.0523 7.5 18.5 7.05228 18.5 6.5C18.5 5.94772 18.0523 5.5 17.5 5.5C16.9477 5.5 16.5 5.94772 16.5 6.5C16.5 7.05228 16.9477 7.5 17.5 7.5Z"
        fill="white"
      />
    </Svg>
  );
};
const TwitterLogo = () => {
  return (
    <Svg style={{ width: 24, height: 24 }}>
      <Path
        d="M8.9685 21.2455H8.898C6.1105 21.2305 3.8155 20.312 2.6015 18.726C2.55788 18.6683 2.517 18.6086 2.479 18.547L2.4285 18.47C2.37714 18.3949 2.34723 18.3072 2.34198 18.2164C2.33673 18.1255 2.35635 18.035 2.39872 17.9544C2.44109 17.8739 2.50461 17.8065 2.58245 17.7593C2.66029 17.7122 2.74951 17.6872 2.8405 17.687C4.1075 17.687 6.1885 17.126 8.1295 15.583C2.063 11.98 2.4505 6.98 3.5525 4.7765C3.6245 4.633 3.761 4.5325 3.9195 4.5065C3.99768 4.49367 4.0778 4.49968 4.15319 4.52403C4.22859 4.54838 4.29709 4.59036 4.353 4.6465C7.132 7.4255 10.527 8.203 11.511 8.1725C11.68 5.844 13.629 4 16 4C16.93 4 17.8165 4.281 18.576 4.815L21.316 4.486C21.4042 4.47517 21.4937 4.48815 21.5752 4.52358C21.6567 4.55901 21.7272 4.61561 21.7795 4.6875C21.886 4.8335 21.9055 5.0255 21.831 5.19L20.5 8.1085V8.5C20.5 13.267 19.0885 16.765 16.304 18.897C14.3525 20.3915 11.682 21.2455 8.9685 21.2455ZM3.8385 18.6025C4.944 19.63 6.78 20.234 8.904 20.2455H8.966C11.4295 20.2455 13.941 19.4465 15.696 18.103C18.22 16.1705 19.5 12.9395 19.5 8.5V8C19.4998 7.92839 19.5152 7.8576 19.545 7.7925L20.552 5.585L18.4995 5.8315C18.3693 5.84758 18.2381 5.81144 18.1345 5.731C17.5244 5.25623 16.7731 4.99894 16 5C14.0705 5 12.5 6.5705 12.5 8.5C12.5 8.7505 12.347 8.9635 12.091 9.0695C11.1275 9.47 7.284 8.6305 4.1865 5.864C3.465 8.074 3.7695 12.1155 9.237 15.0595C9.30739 15.0975 9.36764 15.1518 9.41274 15.2179C9.45783 15.284 9.48644 15.3599 9.49619 15.4393C9.50593 15.5187 9.49651 15.5993 9.46873 15.6743C9.44095 15.7493 9.39561 15.8166 9.3365 15.8705C7.4775 17.554 5.3935 18.358 3.8385 18.6025Z"
        fill="white"
      />
    </Svg>
  );
};
const FacebookLogo = () => {
  return (
    <Svg style={{ width: 24, height: 24 }}>
      <Path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.5 20.9745V13.5H15.5V12.5H12.5V10.5C12.5 9.673 13.173 9 14 9H15.5V8H14C12.6215 8 11.5 9.1215 11.5 10.5V12.5H8.5V13.5H11.5V20.9745C6.7705 20.713 3 16.794 3 12C3 7.0375 7.0375 3 12 3C16.9625 3 21 7.0375 21 12C21 16.794 17.2295 20.713 12.5 20.9745Z"
        fill="white"
      />
    </Svg>
  );
};
const YoutubeLogo = () => {
  return (
    <Svg style={{ width: 24, height: 24 }}>
      <Path
        d="M12 18.7595C11.769 18.7595 6.329 18.755 4.8885 18.369C4.4251 18.2445 4.00255 18.0004 3.66321 17.6611C3.32387 17.3219 3.07964 16.8994 2.955 16.436C2.569 14.995 2.5645 12.1265 2.5645 12.005C2.5645 11.8835 2.569 9.015 2.955 7.5745C3.07965 7.111 3.32394 6.6884 3.66337 6.34906C4.0028 6.00971 4.42547 5.76554 4.889 5.641C6.329 5.255 11.769 5.2505 12 5.2505C12.231 5.2505 17.671 5.255 19.112 5.641C19.5754 5.76566 19.9979 6.00988 20.3373 6.34922C20.6766 6.68855 20.9208 7.11109 21.0455 7.5745C21.431 9.015 21.4355 11.8835 21.4355 12.005C21.4355 12.1265 21.431 14.995 21.0455 16.436C20.9208 16.8993 20.6765 17.3218 20.3372 17.661C19.9979 18.0002 19.5754 18.2444 19.112 18.369C17.671 18.755 12.231 18.7595 12 18.7595ZM12 6.2495C10.464 6.2495 6.2385 6.3135 5.1475 6.606C4.85357 6.68499 4.58556 6.83982 4.3703 7.05499C4.15505 7.27016 4.00011 7.53811 3.921 7.832C3.569 9.146 3.5645 11.976 3.5645 12.0045C3.5645 12.033 3.569 14.863 3.921 16.177C4.00011 16.4708 4.15499 16.7387 4.37015 16.9539C4.5853 17.169 4.85319 17.3239 5.147 17.403C6.239 17.6955 10.464 17.7595 12 17.7595C13.536 17.7595 17.7615 17.6955 18.853 17.403C19.1469 17.324 19.4149 17.1692 19.6302 16.954C19.8454 16.7388 20.0004 16.4709 20.0795 16.177C20.431 14.863 20.4355 12.033 20.4355 12.0045C20.4355 11.976 20.431 9.146 20.0795 7.8325V7.832C20.0004 7.53811 19.8454 7.27016 19.6302 7.05499C19.4149 6.83982 19.1469 6.68499 18.853 6.606C17.7615 6.3135 13.536 6.2495 12 6.2495Z"
        fill="white"
      />
      <Path
        d="M10.4435 14.993C10.3109 14.993 10.1837 14.9403 10.0899 14.8466C9.99618 14.7528 9.9435 14.6256 9.9435 14.493V9.5165C9.9432 9.42862 9.96611 9.34221 10.0099 9.26602C10.0537 9.18983 10.1169 9.12657 10.193 9.08263C10.2691 9.03868 10.3555 9.01562 10.4434 9.01578C10.5313 9.01593 10.6175 9.03929 10.6935 9.0835L15.003 11.572C15.079 11.6159 15.1421 11.679 15.186 11.755C15.2299 11.831 15.253 11.9172 15.253 12.005C15.253 12.0928 15.2299 12.179 15.186 12.255C15.1421 12.331 15.079 12.3941 15.003 12.438L10.6935 14.9265C10.6173 14.97 10.5312 14.9929 10.4435 14.993ZM10.9435 10.3825V13.6265L13.753 12.0045L10.9435 10.3825Z"
        fill="white"
      />
    </Svg>
  );
};
