import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { BackArrow } from "components/icons";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Link from "next/link";
import { APPLE_PAY_MERCHANT_ID } from "general-config";
import PaymentSection from "./sections/payment-section";
import SummarySection from "./summary-section/summary";
import OrderSection from "./summary-section/order";
import ShippingSection from "./sections/shipping-address";
import ContactInfo from "./sections/contact-info";
import HelpCenterSection from "../help-center-section";
import ShippingMethod from "./sections/shipping-method";
import ValuModal from "./valuModal";
import Spinner from "components/common/ui/spinner";
import { FormDataProps, StoreLocatorXMProps } from "lib/types/common";
import {
  addShippingDetailsToCartItems,
  createShippingDetails,
  generateAddShippingToCartPayload,
  generateCheckoutPayload,
  generateCreateShippingPayload,
  performCheckout,
} from "lib/utils/shipping-and-checkout";
import GiftCodes from "./sections/gift-codes";
import { currentBrandName, getBrandKey } from "lib/utils/constants";
import { getInstrumentsByCustomer } from "lib/middleware-apis/customers";
interface CartProps {
  storeLocatorProps?: StoreLocatorXMProps[];
  isLoginUserTest?: boolean;
  dummyData?: any;
}

const Checkout = ({
  storeLocatorProps,
  isLoginUserTest = false,
  dummyData = {},
}: CartProps): JSX.Element => {
  const selectedPaymentInstrument = useRef({});
  const defaultId: any = useRef();

  const [width] = useWindowSize();
  const { push } = useRouter() || { push: () => {} };
  const router = useRouter();
  const { t } = useTranslation("common");
  const {
    cartId,
    appState,
    cartData,
    setCartData,
    saveAppState,
    setCartId,
    promoDiscount,
    setPromoDiscount,
  } = useContext(AppContext);
  const formDatas: FormDataProps = useRef();
  const [formErrors, setFormErrors] = useState();
  const [addressData, setAddressData] = useState([]);
  const [isLoginUser, setIsLoginUser] = useState(isLoginUserTest);
  const [customerDetails, setCustomerDetails] = useState<any>({ ...dummyData });
  const [isLoading, setIsLoading] = useState(false);
  const [isMethodLoading, setIsMethodLoading] = useState(false);
  const [shippingMethodCheck, setShippingMethodCheck] = useState(false);
  const [valuModalData, setValuModalData] = useState({
    showModal: false,
    paymentToken: "",
  });
  const [shippingMethods, setShippingMethods] = useState<any>([]);
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState<any>(null);
  const [isPaymentCOD, setIsPaymentCOD] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [checkoutProcessing, setCheckoutProcessing] = useState(false);
  const [showApplePayBtn, setShowApplePayBtn] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState({
    creditCard: true,
    tabbyPay: false,
    valUPay: false,
    tamaraPay: false,
    cashOnDelivery: false,
  });
  const [errorMessage, setErrorMessage] = useState([]);
  const [tabbyEnabled, setTabbyEnabled] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [ordersCount, setOrdersCount] = useState(0);
  const [message, setMessage] = useState("No Message Yet");
  const [eMsg, setEmsg] = useState("No Error Yet");
  const [applePay, setApplePay] = useState(false);
  const checkParams: string =
    typeof location !== "undefined" &&
    new URLSearchParams(location.search).get("method");

  let paymentType = "";

  if (!applePay && selectedPaymentType?.creditCard) {
    paymentType = "Credit Card";
  } else if (selectedPaymentType?.tabbyPay) {
    paymentType = "Tabby";
  } else if (selectedPaymentType?.tamaraPay) {
    paymentType = "Tamara";
  } else if (selectedPaymentType?.valUPay) {
    paymentType = "ValU";
  } else if (selectedPaymentType?.cashOnDelivery) {
    paymentType = "COD";
  } else if (applePay && selectedPaymentType?.creditCard) {
    paymentType = "Apple Pay";
  }

  let userProfile = JSON.parse(
    typeof window !== "undefined" &&
      window.localStorage.getItem("individualInfo")
  );

  const userInfo = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("user_info")
  );

  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));

  const savedCartId =
    typeof window !== "undefined" && window.localStorage.getItem("cartId");

  useEffect(() => {
    if (!savedCartId) {
      push("/");
      return;
    }
    if (!cartData?.allItemsAvailable) {
      push("/cart");
      return;
    }

    customer?.entityId > 0 && setIsLoginUser(true);
    document.documentElement.style.overflowY = "auto";
    customer?.entityId > 0 && getCustomerData();

    if (
      APPLE_PAY_MERCHANT_ID &&
      window &&
      //@ts-ignore
      window.ApplePaySession &&
      //@ts-ignore
      ApplePaySession.canMakePaymentsWithActiveCard(APPLE_PAY_MERCHANT_ID)
    ) {
      setShowApplePayBtn(true);
    }

    window.scrollTo(0, 0);
    const getShippingMethods = async () => {
      // const allShippingMethods = await fetchShippingMethods();
      // const shippingMethodsForRegion = allShippingMethods?.shipMethods?.filter(
      //   (s: any) => (s.channel || "") === (appState.locale || "-")
      //   // (s.region || "").toLowerCase() === (appState.region || "-")
      // );
      // setShippingMethods(shippingMethodsForRegion);
    };
    getShippingMethods();
    getAddressData();
    // checkTabbyEligibility();
  }, []);

  useEffect(() => {
    const { pathname, query, asPath } = router;
    saveAppState({
      ...appState,
      brand: currentBrandName(getBrandKey(appState?.brandEN), appState?.lang)
        .brand,
      lang: appState?.lang,
      region: appState?.region,
      locale: appState?.currentLocale,
    });
    push({ pathname, query }, asPath, {
      locale: `${appState?.lang}-${appState?.region}`,
    });
  }, []);

  useEffect(() => {
    if (shippingMethods?.length === 0) return;

    const defaultShippingMethod = shippingMethods?.find(
      (s: any) => s.cost === 0
    );
    setSelectedShippingMethod(defaultShippingMethod);
    window.sessionStorage.setItem(
      "shippingMethods",
      JSON.stringify(defaultShippingMethod)
    );
  }, [shippingMethods]);

  useEffect(() => {
    if (shippingMethods?.length === 0) return;
    if (isPaymentCOD) {
      const CODShippingMethod = shippingMethods?.find((s: any) => s.cost > 0);
      onShippingMethodChange(CODShippingMethod);
      window.sessionStorage.setItem(
        "shippingMethods",
        JSON.stringify(CODShippingMethod)
      );
    } else {
      const defaultShippingMethod = shippingMethods?.find(
        (s: any) => s.cost === 0
      );
      onShippingMethodChange(defaultShippingMethod);
    }
  }, [isPaymentCOD]);

  useEffect(() => {
    if (checkParams == "tamara") {
      setSelectedPaymentType({
        creditCard: false,
        tabbyPay: false,
        valUPay: false,
        tamaraPay: true,
        cashOnDelivery: false,
      });
    }
    if (checkParams == "tabby") {
      setSelectedPaymentType({
        creditCard: false,
        tabbyPay: true,
        valUPay: false,
        tamaraPay: false,
        cashOnDelivery: false,
      });
    }
  }, [checkParams]);

  useEffect(() => {
    if (Object.keys(selectedPaymentType).length === 0) return;
    setIsPaymentCOD(selectedPaymentType.cashOnDelivery);
  }, [selectedPaymentType]);

  const errorNotification = () => {
    setErrorMessage([
      {
        title: "Something Went Wrong",
        description: "Please try again later",
        backgroundColor: "#922840",
      },
    ]);
  };

  const removeCartData = () => {
    setSelectedShippingMethod(null);
    setShippingMethods([]);
    if (checkParams) {
      checkParams == "tamara" &&
        window.sessionStorage.removeItem("tamaraToken");
      checkParams == "tabby" && window.sessionStorage.removeItem("tabbyToken");
    }
  };
  const performFabricCheckout = async (address: any, paymentToken?: string) => {
    const shippingDetails: any =
      window.sessionStorage.getItem("shippingMethods") || null;

    setMessage(`Payment token from apple: , ${paymentToken}`);
    try {
      const createShippingPayload = generateCreateShippingPayload(
        selectedShippingMethod,
        cartData,
        address,
        setCheckoutProcessing
      );

      const createShippingRes = await createShippingDetails(
        createShippingPayload,
        cartData?.cartId
      );

      if (createShippingRes?.response?.code === "CART_NOT_FOUND") {
        setCheckoutProcessing(true);
        push("/");
        window.localStorage.removeItem("cartId");
        window.sessionStorage.removeItem("cartData");
        setCartData(null);
        setCartId(null);
      }
      if (createShippingRes == undefined || createShippingRes?.hasError) {
        setCheckoutProcessing(false);
        errorNotification();
      }

      // const { shipToId } = createShippingRes;
      // setMessage(`Create Shipping Res: ${shipToId}`);
      // if (!shipToId) throw new Error("Could not create shipping!");
      const addShippingToCartPayload = generateAddShippingToCartPayload(
        cartData?.items,
        cartData?.cartId
        // shipToId
      );
      let shppingData = createShippingRes;

      /**
       * NOTE: Returns updated cart with shipping details added. Use this cart data
       * to make subsequent API calls.
       */

      const addShippingToCartRes = await addShippingDetailsToCartItems(
        addShippingToCartPayload,
        cartData?.cartId
      );
      if (addShippingToCartRes == undefined || addShippingToCartRes?.message) {
        setCheckoutProcessing(false);
        errorNotification();
      }
      setMessage(
        `Add Shipping To Cart: ${JSON.stringify(addShippingToCartRes)}`
      );

      let shippingDataWithCartDetails = {
        ...shppingData,
        accountId: addShippingToCartRes?.accountId,
        cartState: addShippingToCartRes?.cartState,
        items: addShippingToCartRes?.items,
        vatTax: cartData?.vatTax,
        subTotal: addShippingToCartRes?.subTotal,
        totalAmount: addShippingToCartRes?.totalAmount,
        totalDiscount: addShippingToCartRes?.totalDiscount,
        totalItems: addShippingToCartRes?.totalItems,
        totalUniqueItems: addShippingToCartRes?.totalUniqueItems,
      };
      const { cartId: cId, items: cItems = [] } = addShippingToCartRes;
      if (!cId || cItems.length === 0)
        throw new Error("Could not add shipping to cart items!");

      const checkoutPayload = generateCheckoutPayload(
        addShippingToCartRes,
        checkParams == "tabby"
          ? "tabby"
          : isPaymentCOD
          ? "CASH_ON_DELIVERY"
          : "checkout",
        checkParams ? "BNPL" : isPaymentCOD ? "CASH_ON_DELIVERY" : "CARD",
        checkParams ? checkParams : "checkout",
        paymentToken,
        address
      );
      setMessage(`Checkout payload: ${JSON.stringify(checkoutPayload)}`);
      const performCheckoutRes = await performCheckout(checkoutPayload);
      // setMessage(`Perform Checkout Res: ${JSON.stringify(performCheckoutRes)}`);
      if (performCheckoutRes == undefined || performCheckoutRes?.hasError) {
        setCheckoutProcessing(false);
        errorNotification();
        setPaymentFailed(true);
      }
      // const { checkoutComplete = false, orderId = "" } = performCheckoutRes;

      let completeCheckoutDetails = {
        ...shippingDataWithCartDetails,
        // checkoutComplete: performCheckoutRes?.checkoutComplete,
        // orderId: performCheckoutRes?.orderId,
        paymentType: checkParams || paymentType,
        shippingCost: selectedShippingMethod?.cost || 0,
        deliveryEstimate:
          `${
            (shippingDetails?.name || selectedShippingMethod?.name).split(
              " "
            )[0]
          } ${
            shippingDetails?.description || selectedShippingMethod?.description
          }` || {},
      };
      // setEmsg(
      //   `Checkout Complete: ${checkoutComplete}, orderId: ${orderId}, performCheckoutRes: ${JSON.stringify(
      //     performCheckoutRes
      //   )}`
      // );
      // if (!checkoutComplete || !orderId) {
      //   throw new Error("Checkout API failed!");
      // } else {
      //   setIsCheckoutComplete(true);
      //   removeCartData();
      //   sessionStorage.setItem(
      //     "checkoutData",
      //     JSON.stringify(completeCheckoutDetails)
      //   );
      //   push("/confirmation");
      // }
    } catch (error) {
      setEmsg("ERRR" + (error as any).message);
      console.log("Error while performing checkout: ", (error as any).message);
    }
  };

  const getAddressData = async () => {
    setIsLoading(true);
    // if (!userProfile?._id) {
    //   setIsLoading(false);
    //   return;
    // } //Commented due to get addresses with the mock data
    // const response = await getAllAddresses(userProfile?._id);
    // const defaultAddress = response?.data?.find(
    //   (add: any) => add?.isDefault === true
    // );
    // const address = defaultAddress || response?.data?.[0];
    // setAddressData(address);
    setIsLoading(false);
  };

  const getCustomerData = async () => {
    setIsMethodLoading(true);
    if (typeof window === undefined) return;

    if (!userInfo) return;

    if (!userProfile) {
      // userProfile = await fetchCustomerProfile(userInfo?.id);
    }

    if (!userProfile) return;

    const customerDetailPayload =
      userProfile?.additionalAttributes?.checkoutCustomerId ||
      userProfile?.email;

    const customer = await getInstrumentsByCustomer(customerDetailPayload);

    defaultId.current = customer?.data?.default;
    setCustomerDetails(customer?.data);
    setIsMethodLoading(false);
  };

  const onShippingMethodChange = (sMethod: any = {}) => {
    if (Object.keys(sMethod).length === 0) return;
    setSelectedShippingMethod(sMethod);
  };

  // const checkTabbyEligibility = async () => {
  //   const response = isLoginUser && (await getOrdersHistory());
  //   setOrdersCount(response?.data?.count);
  //   const tabbyPayment = response?.data?.orders?.filter(
  //     (tabby: any) => tabby?.payments?.[0]?.paymentProvider === "tabby"
  //   );
  //   tabbyPayment && setOrderHistory(tabbyPayment);
  //   const tabbyPayload = {
  //     payment: {
  //       amount: cartData?.totalAmount * 100,
  //       currency: cartData?.currency,
  //       buyer: {
  //         phone: "500000001", // Static due to testing happy flow
  //         email: "card.success@tabby.ai", // Static due to tetsing happy flow
  //       },
  //       buyer_history: {
  //         registered_since: userInfo?.createdAt,
  //         loyalty_level: response?.data?.count,
  //         wishlist_count: 0,
  //         is_social_networks_connected: true,
  //         is_phone_number_verified: true,
  //         is_email_verified: true,
  //       },
  //     },
  //     lang: appState?.lang,
  //     merchant_code: getTabbyMerchartCode(cartData?.currency),
  //   };
  //   // const accessToken = await getExternalAuthToken();
  //   // const token = accessToken?.data?.access_token;
  //   // if (token) {
  //   //   const tabbyResponse = await paymentWithTabby(token, tabbyPayload);
  //   //   const tabbyInstallments =
  //   //     tabbyResponse?.configuration?.available_products?.installments;
  //   //   if (tabbyInstallments?.length > 0) {
  //   //     setTabbyEnabled(true);
  //   //   } else {
  //   //     setTabbyEnabled(false);
  //   //   }
  //   // }
  // };

  if (!savedCartId) {
    return null;
  }
  if (checkParams && paymentFailed) {
    push("/checkout");
  }
  return (
    <>
      {checkParams || !cartData?.allItemsAvailable || checkoutProcessing ? (
        <div className={styles["loader-div"]}>
          <div className={styles["loading-content"]}>
            {t("Processing")}
            <span>
              <Spinner />
            </span>
          </div>
        </div>
      ) : null}
      <div
        className={styles["cart-wrapper"]}
        data-show-params={checkParams && checkParams}
      >
        <div className={styles["checkout-wrapper"]}>
          {width > desktopScreenSize ? (
            <div
              className={styles["back-btn"]}
              role="backBtn"
              onClick={() => {
                push("/cart");
              }}
            >
              <Link href={"/cart"}>
                <a>
                  <div role="backArrow">
                    <BackArrow />
                  </div>
                  {t("backToBag")}
                </a>
              </Link>
            </div>
          ) : null}

          <div className={styles["checkout-content"]}>
            <span>{t("Checkout")}</span>
          </div>
        </div>

        <div className={styles["flex-wrap"]}>
          <div className={styles["inner-wrapper"]}>
            {width < desktopScreenSize ? (
              <OrderSection
                promoDiscount={promoDiscount}
                selectedShippingMethod={selectedShippingMethod}
                data={cartData}
              />
            ) : null}
            <ShippingSection
              addressData={addressData}
              getAddressData={getAddressData}
              formDatas={formDatas}
              setFormErrors={setFormErrors}
              formErrors={formErrors}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />

            <>
              <ShippingMethod
                selectedShippingMethod={selectedShippingMethod}
                currency={cartData?.currency}
                setShippingMethodCheck={setShippingMethodCheck}
              />
              {/* <div
                    style={{
                      padding: "20px 40px",
                      width: "300px",
                      height: "100px",
                      overflow: "scroll",
                    }}
                  >
                    {message}
                  </div>
                  <div
                    style={{
                      padding: "20px 40px",
                      width: "300px",
                      height: "100px",
                      overflow: "scroll",
                      marginTop: "30px",
                    }}
                  >
                    {eMsg}
                  </div> */}
              <PaymentSection
                selectedPaymentType={selectedPaymentType}
                setSelectedPaymentType={setSelectedPaymentType}
                selectedShippingMethod={selectedShippingMethod}
                performFabricCheckout={performFabricCheckout}
                tabbyEnabled={tabbyEnabled}
                customerDetails={customerDetails}
                setCustomerDetails={setCustomerDetails}
                selectedPaymentInstrument={selectedPaymentInstrument}
                formDatas={formDatas}
                addressData={addressData}
                setFormErrors={setFormErrors}
                setApplePay={setApplePay}
                isLoading={isMethodLoading}
                setIsLoading={setIsMethodLoading}
              />
              {/* <div>{errorMessage}</div> */}
              <div role="giftCodes" className={styles["bag-wrapper"]}>
                <GiftCodes
                  setPromoDiscount={setPromoDiscount}
                  cartData={cartData}
                />
              </div>
              {/* <GiftMessage /> */}
              <ContactInfo
                formDatas={formDatas}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
                addressData={addressData}
                selectedShippingMethod={selectedShippingMethod}
                selectedPaymentType={selectedPaymentType}
                setValuModalData={setValuModalData}
                isCheckoutComplete={isCheckoutComplete}
                // setIsCheckoutComplete={setIsCheckoutComplete}
                performFabricCheckout={performFabricCheckout}
                errorMessage={errorMessage}
                selectedPaymentInstrument={selectedPaymentInstrument}
                checkUrl={checkParams}
                orderHistory={orderHistory}
                ordersCount={ordersCount}
                shippingMethodCheck={shippingMethodCheck}
                setCheckoutProcessing={setCheckoutProcessing}
                errorNotification={errorNotification}
              />
            </>
            {/*         
              // <ConfirmOrder
              //   loginUser={isLoginUser}
              //   shippingAddress={addressData}
              //   formData={formDatas?.current}
              //   paymentType={selectedPaymentType}
              // /> */}

            {width < desktopScreenSize ? (
              <div
                role="mobileBackBtn"
                className={styles["back-btn"]}
                onClick={() => {
                  push("/cart");
                }}
              >
                <Link href={"/cart"}>
                  <a>
                    <div role="mobileBackArrow">
                      <BackArrow />
                    </div>
                    {t("backToBag")}
                  </a>
                </Link>
              </div>
            ) : null}
          </div>
          {width > desktopScreenSize ? (
            <SummarySection
              selectedShippingMethod={selectedShippingMethod}
              promoDiscount={promoDiscount}
            />
          ) : null}
          {width < desktopScreenSize ? <HelpCenterSection /> : null}
        </div>
      </div>
      <div className={styles["back-block"]}>
        <button
          role="contactUsBtn"
          className={styles["button"]}
          onClick={() => {
            setIsLoading(true);
            push("/contact-us");
          }}
        >
          {isLoading ? (
            <Spinner width={12} height={12} stroke={6} color={"white"} />
          ) : (
            <Image src={"/question.png"} width={20} height={20} alt="" />
          )}

          <p>{t("haveAQuestion")}</p>
        </button>
      </div>
      <ValuModal
        isOpened={valuModalData?.showModal}
        setValuModalData={setValuModalData}
        paymentToken={valuModalData?.paymentToken}
      />
    </>
  );
};

export default Checkout;
