import React, { useState, FC, useContext, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  getValuApiKey,
  getValuPaymentKey,
  valuOrderRegistration,
} from "lib/utils/valU";
import styles from "./style.module.scss";
import ContactInfoForm from "../../contact-info-form";
import CheckBox from "components/common/ui/checkbox";
import { AppContext } from "lib/context";
import { tamaraCheckoutSession } from "lib/api/payment";
import {
  APPLE_PAY_DOMAIN_DEV,
  APPLE_PAY_DOMAIN_QA,
  APPLE_PAY_DOMAIN_UAT,
} from "general-config";
import { useRouter } from "next/router";
import Notification from "components/common/ui/alert";
import { FormDataProps } from "lib/types/common";
import { getTabbyMerchartCode } from "lib/utils/common";
import Button from "components/common/ui/button";
import Modal from "components/common/ui/modal";
import { useCustomer } from "lib/middleware-apis/customers";

type ContactInfoProps = {
  formDatas?: FormDataProps;
  formErrors?: any;
  setFormErrors?: any;
  addressData?: any;
  selectedPaymentType?: any;
  setValuModalData?: any;
  isCheckoutComplete?: any;
  performFabricCheckout?: any;
  errorMessage?: any;
  selectedShippingMethod?: any;
  selectedPaymentInstrument?: any;
  checkUrl?: string;
  orderHistory?: any;
  shippingMethodCheck?: boolean;
  ordersCount?: number;
  setCheckoutProcessing?: Function;
  errorNotification?: Function;
};

const ContactInfo: FC<ContactInfoProps> = ({
  formDatas,
  addressData,
  selectedPaymentType,
  setValuModalData,
  isCheckoutComplete,
  performFabricCheckout,
  errorMessage,
  selectedShippingMethod,
  formErrors,
  setFormErrors,
  selectedPaymentInstrument,
  checkUrl,
  orderHistory,
  ordersCount,
  shippingMethodCheck,
  setCheckoutProcessing,
  errorNotification,
}) => {
  const [regionMatched, setRegionMatched] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const { t } = useTranslation("common");
  const { appState, cartData } = useContext(AppContext);
  const { push } = useRouter() || { push: () => {} };
  const router = useRouter();
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const isLoginUser = customerData?.entityId > 0 ? true : false;

  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));
  const userInfo: {
    email: string;
    primaryContact: string;
    firstName: string;
    lastName: string;
    createdAt: string;
  } = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("user_info")
  );

  const savedFormData =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("form_data"));

  const checkParams: string =
    typeof location !== "undefined" &&
    new URLSearchParams(location.search).get("method");

  useEffect(() => {
    let token = "";
    async function fetchAPI() {
      if (checkParams == "tamara") {
        token =
          typeof window !== "undefined" &&
          JSON.parse(window.sessionStorage.getItem("tamaraToken"));
        await performFabricCheckout(savedFormData, token);
      }
      if (checkParams == "tabby") {
        token =
          typeof window !== "undefined" &&
          JSON.parse(window.sessionStorage.getItem("tabbyToken"));
        await performFabricCheckout(savedFormData, token);
      }
    }
    fetchAPI();
  }, []);

  const getDomainConfig = () => {
    if (typeof window === "undefined") return;
    if (window.location.hostname.includes("localhost"))
      return { domain: `http://localhost:3000` };
    else if (window.location.hostname.includes("dev-lazurde"))
      return { domain: `https://${APPLE_PAY_DOMAIN_DEV}` };
    else if (window.location.hostname.includes("qa-lazurde"))
      return { domain: `https://${APPLE_PAY_DOMAIN_QA}` };
    else if (window.location.hostname.includes("uat-lazurde"))
      return { domain: `https://${APPLE_PAY_DOMAIN_UAT}` };
    return { domain: `https://${APPLE_PAY_DOMAIN_DEV}` };
  };
  const getItems = () => {
    const items = cartData?.items.map((item: any) => {
      return {
        unit_price: item?.unitPrice?.amount * 100,
        tax_amount: 0,
        discount_amount: item?.totalPrice?.discount?.discountAmount,
        name: item?.title,
        sku: item?.sku,
        type: item?.Type,
        image_url: item?.["Image URL"],
        quantity: item?.quantity,
        total_amount: item?.totalPrice?.sale * 100,
      };
    });
    return items;
  };
  const orderDetails = (formData: any) => {
    if (!orderHistory) return;
    const tabbyOrders = orderHistory?.map((tabby: any) => {
      return {
        purchased_at: tabby?.orderDate,
        amount: cartData?.totalAmount,
        payment_method: "tabby",
        status: "new",
        buyer: {
          phone: addressData?._id
            ? addressData?.phoneNumber
            : formData?.current?.phoneNumber,
          email: userInfo?.email ? userInfo?.email : formData?.current?.email,
          name:
            userInfo?.firstName || userInfo?.lastName
              ? `${userInfo?.firstName} ${userInfo?.lastName}`
              : `${formData?.current?.firstName} ${formData?.current?.lastName}`,
          // dob: "2000-08-24",
        },
        shipping_address: {
          city: addressData?._id ? addressData?.city : formData?.current?.city,
          address: addressData?._id
            ? addressData?.state
            : formData?.current?.governorate,
          zip: addressData?._id
            ? addressData?.postalCode
            : formData?.current?.postalCode,
        },
        items: getItems(),
      };
    });
    return tabbyOrders;
  };
  const validateForms = () => {
    const checkError: any = {
      address: (
        addressData?._id
          ? addressData?.addressLine1
          : formDatas?.current?.address
      )
        ? ""
        : "Enter your address",
      firstName: (
        addressData?._id
          ? addressData?.additionalAttributes?.firstName
          : formDatas?.current?.firstName
      )
        ? ""
        : "Enter your first name",
      lastName: (
        addressData?._id
          ? addressData?.additionalAttributes?.lastName
          : formDatas?.current?.lastName
      )
        ? ""
        : "Enter your last name",
      postalCode: (
        addressData?._id
          ? addressData?.postalCode
          : formDatas?.current?.postalCode
      )
        ? ""
        : "Enter postal code",
      email: formDatas?.current?.email ? "" : "Enter your email ",
      phoneNumber: formDatas?.current?.phoneNumber
        ? ""
        : "Enter your contact number",
    };

    setTimeout(() => {
      const errorList = document.getElementsByClassName("div-error-msg");

      errorList &&
        errorList.length > 0 &&
        errorList?.[0]?.parentElement?.scrollIntoView({
          behavior: "smooth",
        });
    }, 300);

    let errors = 0;

    for (const key in checkError) {
      if (checkError[key]) {
        errors = errors + 1;
      }
    }

    if (errors > 0) {
      setFormErrors(checkError);
      return false;
    }
    return true;
  };

  const checkoutWithTabby = async (formData: any) => {
    const tabbyPayload = {
      payment: {
        amount: cartData?.totalAmount,
        currency: cartData?.currency,
        description: "string",
        meta: {
          cart_id: cartData?.cartId,
        },
        buyer: {
          phone: "500000001", // Static due to testing happy flow
          email: "card.success@tabby.ai", // Static due to tetsing happy flow
          name:
            userInfo?.firstName || userInfo?.lastName
              ? `${userInfo?.firstName} ${userInfo?.lastName}`
              : `${formData?.current?.firstName} ${formData?.current?.lastName}`,
        },
        buyer_history: {
          registered_since: userInfo?.createdAt,
          loyalty_level: ordersCount,
          wishlist_count: 0,
          is_social_networks_connected: true,
          is_phone_number_verified: true,
          is_email_verified: true,
        },
        order: {
          tax_amount: 0,
          shipping_amount: selectedShippingMethod?.cost,
          discount_amount: cartData?.totalDiscount,
          updated_at: cartData?.updatedAt,
          reference_id: cartData?.cartId,
          items: getItems(),
        },
        order_history: orderDetails(formData) || [],
        shipping_address: {
          city: addressData?._id ? addressData?.city : formData?.current?.city,
          address: addressData?._id
            ? addressData?.state
            : formData?.current?.governorate,
          zip: addressData?._id
            ? addressData?.postalCode
            : formData?.current?.postalCode,
        },
      },
      lang: appState?.lang,
      merchant_code: getTabbyMerchartCode(cartData?.currency),
      merchant_urls: {
        success: `${window.location.origin}/checkout?method=tabby`,
        cancel: `${getDomainConfig().domain}/tabby/cancel`,
        failure: `${getDomainConfig().domain}/tabby/failure`,
      },
    };
    // if (token) {
    //   const tabbyResponse = await paymentWithTabby(token, tabbyPayload);
    //   if (tabbyResponse?.hasError) {
    //     setCheckoutProcessing(false);
    //     errorNotification();
    //   }
    //   const tabbyWebUrl =
    //     tabbyResponse?.configuration?.available_products?.installments?.[0]
    //       ?.web_url;
    //   window.sessionStorage.setItem(
    //     "tabbyToken",
    //     JSON.stringify(tabbyResponse?.payment?.id)
    //   );

    //   open(tabbyWebUrl, "_self");
    // }
  };

  const checkoutWithTamara = async (formData: any) => {
    const sessionPayLoad = {
      amount: cartData?.totalAmount * 100,
      currency: cartData?.currency,
      source: {
        type: "tamara",
        billing_address: {
          address_line1: addressData?._id
            ? addressData?.addressLine1
            : formData?.current?.address,
          state: addressData?._id
            ? addressData?.state
            : formData?.current?.governorate,
          zip: addressData?._id
            ? addressData?.postalCode
            : formData?.current?.postalCode,
          city: addressData?._id ? addressData?.city : formData?.current?.city,
          country: appState?.region.toUpperCase(),
        },
      },
      success_url: `${window.location.origin}/checkout?method=tamara`,
      failure_url: `${getDomainConfig().domain}/checkout`,
      customer: {
        name: `${
          addressData?._id ? userInfo?.firstName : formData?.current?.firstName
        } ${
          addressData?._id ? userInfo?.lastName : formData?.current?.lastName
        }`,

        email: formData?.current?.email,
        phone: {
          country_code: "+966",
          number: formData?.current?.phoneNumber,
        },
      },
      shipping: {
        address: {
          address_line1: addressData?._id
            ? addressData?.addressLine1
            : formData?.current?.address,
          state: addressData?._id
            ? addressData?.state
            : formData?.current?.governorate,
          zip: addressData?._id
            ? addressData?.postalCode
            : formData?.current?.postalCode,
          city: addressData?._id ? addressData?.city : formData?.current?.city,
          country: appState?.region.toUpperCase(),
        },
      },
      capture: true,
      processing: {
        tax_amount: 0,
        shipping_amount: selectedShippingMethod?.cost,
      },
      items: getItems(),
      reference: cartData?.cartId,
    };

    const tamaraSession = await tamaraCheckoutSession(sessionPayLoad);
    window.sessionStorage.setItem(
      "tamaraToken",
      JSON.stringify(tamaraSession?.id)
    );
    if (tamaraSession?.hasError) {
      setCheckoutProcessing(false);
      errorNotification();
    }
    open(tamaraSession?._links?.redirect?.href, "_self");
  };
  const checkSelectedPayment = async () => {
    setCheckoutProcessing(true);
    setIsCheckoutLoading(true);
    const addressObj = {
      street1: addressData?._id
        ? addressData?.addressLine1
        : formDatas?.current?.address || savedFormData?.street1 || "",
      city: addressData?._id
        ? addressData?.city
        : formDatas?.current?.city || savedFormData?.city,
      state: addressData?._id
        ? addressData?.state
        : formDatas?.current?.governorate || savedFormData?.governorate,
      country: addressData?._id
        ? addressData?.country
        : formDatas?.current?.country || savedFormData?.country,
      zipCode: addressData?._id
        ? addressData?.postalCode
        : formDatas?.current?.postalCode || savedFormData?.zipCode || "",
      email: formDatas?.current?.email || savedFormData?.email || "",
      kind: "shipping",
      name: {
        first: addressData?._id
          ? addressData?.additionalAttributes?.firstName
          : formDatas?.current?.firstName || savedFormData?.name?.first || "",
        last: addressData?._id
          ? addressData?.additionalAttributes?.lastName
          : formDatas?.current?.lastName || savedFormData?.name?.last || "",
      },
      phone: {
        number:
          formDatas?.current?.phoneNumber || savedFormData?.phone?.number || "",
        kind: "MOBILE",
      },
    };

    if (selectedPaymentType.creditCard) {
      /**
       * NOTE: Extract appropriate payment instrument id and pass it to
       * performFabricCheckout function. If the user choses to pay with
       * default payment instrument, extract the default one here!
       */
      let token = "";
      if (
        selectedPaymentInstrument?.current?.hasOwnProperty("instrument") &&
        selectedPaymentInstrument?.current?.instrument?.id
      ) {
        token = selectedPaymentInstrument?.current["instrument"]?.id;
      } else {
        const getToken = await selectedPaymentInstrument?.current?.getToken();
        token = getToken?.token;
      }

      const validation = validateForms();
      if (!token || !validation) {
        setIsCheckoutLoading(false);
        return;
      }

      await performFabricCheckout(addressObj, token);
    }
    if (selectedPaymentType.tabbyPay) {
      if (validateForms()) await checkoutWithTabby(formDatas);

      window.sessionStorage.setItem("form_data", JSON.stringify(addressObj));
    }
    if (selectedPaymentType.valUPay) {
      (async () => {
        const valuKey = await getValuApiKey();

        const itemsPayload = cartData?.items.map((item: any) => {
          return {
            name: item?.sku,
            amount_cents: item?.totalPrice?.amount * 100,
            description: item?.title,
            quantity: item?.quantity,
          };
        });
        const orderData = await valuOrderRegistration({
          authToken: valuKey?.data?.token,
          amount: cartData?.totalAmount,
          itemsPayload: itemsPayload,
        });
        const valuPaymentKey = await getValuPaymentKey({
          authToken: valuKey?.data?.token,
          orderId: orderData?.data?.id,
          amount: cartData?.totalAmount,
        });

        setValuModalData({
          showModal: true,
          paymentToken: valuPaymentKey?.data?.token,
        });
      })();
      return;
    }
    if (selectedPaymentType.tamaraPay) {
      if (validateForms()) await checkoutWithTamara(formDatas);

      window.sessionStorage.setItem("form_data", JSON.stringify(addressObj));
    }
    if (selectedPaymentType.cashOnDelivery) {
      if (validateForms()) await performFabricCheckout(addressObj, "COD");
      window.sessionStorage.setItem("form_data", JSON.stringify(addressObj));
    }
    setIsCheckoutLoading(false);
  };

  return (
    <>
      <div className={styles["bag-wrapper"]}>
        <span role="contactheading" className={styles["main-heading"]}>
          {t("contactInfo")}
        </span>
        {isLoginUser ? (
          <>
            <div className={styles["contact-des"]}>{t("contactInfoText")}</div>
            <div className={styles["contact-info"]}>
              <div className={styles["field-input"]}>
                <ContactInfoForm
                  isOpen={true}
                  formDatas={formDatas}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles["gift-text"]}>{t("contactInfoText")}</div>
            <div className={styles["contact-info"]}>
              <ContactInfoForm
                isOpen={true}
                formDatas={formDatas}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
              />
              <div className={styles["div-contact-data"]}>
                <CheckBox
                  className={styles["contact-checkbox"]}
                  name={"checkbox"}
                  defaultChecked={true}
                />
                <div className={styles["link-box"]}>{t("accCreateText")}</div>
              </div>
              <div className={styles["div-contact-data"]}>
                <CheckBox
                  className={styles["contact-checkbox"]}
                  name={"checkboxes"}
                  defaultChecked={true}
                />
                <div className={styles["link-box"]}>{t("signUpText")}</div>
              </div>
            </div>
          </>
        )}

        <Button
          isDisabled={shippingMethodCheck}
          buttonText={t("completePurchase")}
          buttonSize={"lr"}
          isLoading={isCheckoutLoading}
          spinnerText={t("Processing")}
          spinnerSize={16}
          className={styles["purchase-button"]}
          onClick={() => {
            if (!selectedPaymentType?.creditCard && validateForms()) {
              setCheckoutProcessing(true);
            }
            if (
              appState?.region !==
              (addressData?.country?.toLowerCase() ||
                formDatas?.current?.country?.toLowerCase())
            ) {
              setRegionMatched(true);
            } else {
              setRegionMatched(false);
              checkSelectedPayment();
            }
          }}
        />
        <div className={styles["contact-text"]}>{t("creditCardChargeMsg")}</div>
      </div>
      {errorMessage && errorMessage?.length > 0 ? (
        <Notification
          autoDelete={true}
          toastList={errorMessage}
          position={"bottom-left"}
          autoDeleteTime={5000}
        />
      ) : null}
      <Modal
        isOpened={regionMatched}
        onClose={() => setRegionMatched(false)}
        bgBluryModal={true}
        modalWidth="575px"
        modalHeight="275px"
      >
        <div className={styles["country-check-modal"]}>
          <h2 className={styles["notification-heading"]}>PLEASE VERIFY...</h2>
          <div className={styles["notification-text"]}>
            Your selected country for delivery address does not match with your
            region.
          </div>
          <div className={styles["notification-text"]}>
            Do you still want to proceed or change it?
          </div>

          <div className={styles["verify-btns"]}>
            <Button
              buttonSize="lr"
              buttonText={t("Proceed")}
              onClick={() => {
                checkSelectedPayment();
                setRegionMatched(false);
              }}
            />
            <Button
              buttonSize="sm"
              buttonText={t("Change")}
              buttonStyle={"underline"}
              onClick={() => {
                document.documentElement.scrollTo(0, 0);
                setRegionMatched(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactInfo;
