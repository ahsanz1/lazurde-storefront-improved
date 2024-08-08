import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Button from "../ui/button";
import { useQueryClient } from "@tanstack/react-query";
import {
  updateEngagementCustomer,
  useCustomer,
} from "lib/middleware-apis/customers";
import { attributesValue } from "../my-details/functions";
import { customerAttributesNames } from "lib/utils/constants";
import { AppContext } from "lib/context";
import { getStoreAttributeId } from "lib/utils/common";
import { isDev } from "general-config";

const NewsSubscriptions = (): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isMissLSubscribe, setIsMissLSubscribe] = useState(false);
  const [isLazurdeSubscribe, setIsLazurdeSubscribe] = useState(false);
  const queryClient = useQueryClient();
  const storeAttributes: any = queryClient.getQueryData([
    "storeAttributes",
    appState?.region,
  ]);
  const { updateCustomerAttributesMutation, useGetAttributesByCustomerId } =
    useCustomer();

  const customerData: any = queryClient.getQueryData(["customerData"]);

  const { data: customerAttributes, refetch: refetch } =
    useGetAttributesByCustomerId();

  const attrData = customerAttributes && attributesValue(customerAttributes);
  useEffect(() => {
    refetch();
    attrData &&
      setIsLazurdeSubscribe(
        attrData?.isNewsletterSubscribed === "true" ? true : false
      );
    setButtonLoading(false);
  }, [customerAttributes]);

  const handleAction = async (): Promise<() => null> => {
    if (
      String(attrData?.isNewsletterSubscribed) === String(isLazurdeSubscribe)
    ) {
      setButtonLoading(false);
      return null;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    const newsletterInfo = {
      commands: [
        {
          name: "customers/events",
          data: {
            customer_ids: {
              email_id: customerData?.email,
            },
            event_type: "consent",
            timestamp: currentTime,
            properties: {
              email: customerData?.email,
              customer_id: customerData?.entityId,
              action: isLazurdeSubscribe === true ? "accept" : "reject",
              category: "newsletter",
              valid_until: "unlimited",
              source_import: "bigcommerce_custom_api",
            },
          },
        },
      ],
    };

    const result = await updateEngagementCustomer(
      newsletterInfo,
      appState?.region
    );
    const attributesPayload: any = [
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.customerNewsletterSubscription
        ),
        value: String(isLazurdeSubscribe),
        customer_id: customerData?.entityId,
      },
      {
        attribute_id: getStoreAttributeId(
          storeAttributes,
          customerAttributesNames?.newsletterSubscriptionTimestamp
        ),
        value: String(currentTime),
        customer_id: customerData?.entityId,
      },
    ];
    result?.response?.results?.[0]?.success &&
      updateCustomerAttributesMutation.mutate(attributesPayload, {
        onSuccess: () => {
          refetch();
          setButtonLoading(false);
          setSuccessMsg(
            appState?.lang === "ar"
              ? isLazurdeSubscribe === true
                ? "شكرا لتقريركم"
                : "لقد تم حذفك بنجاح من قائمة المشتركين"
              : isLazurdeSubscribe === true
              ? "Thank you for your submission"
              : "You have been successfully removed from the subscriber list"
          );
        },
      });
  };

  const handleCheckboxChange = (checkboxName: string, newValue: boolean) => {
    if (checkboxName === "newsletter-all") {
      setIsLazurdeSubscribe(newValue);
      setIsMissLSubscribe(newValue);
    } else if (checkboxName === "newsletter-lazurde") {
      setIsLazurdeSubscribe(!isLazurdeSubscribe);
      setIsMissLSubscribe(isMissLSubscribe);
    } else if (checkboxName === "newsletter-missl") {
      setIsLazurdeSubscribe(isLazurdeSubscribe);
      setIsMissLSubscribe(!isMissLSubscribe);
    } else {
      setIsLazurdeSubscribe(false);
      setIsMissLSubscribe(false);
    }
  };

  return (
    <>
      <div className={styles["account-newsletter-container"]}>
        <div className={styles["account-newsletter-heading-section"]}>
          <div className={styles["account-newsletter-icon"]}>
            <Image
              alt="icon"
              src={"/newsletter.png"}
              width={20}
              height={20}
              layout="fixed"
              quality={100}
              // unoptimized={isDev}
            />
          </div>
          <div className={styles["account-newsletter-heading"]}>
            {t("Newsletter Subscriptions")}
          </div>
        </div>
        <div className={styles["account-newsletter-content-section"]}>
          <form className={styles["form"]} action="">
            <div className={styles["Checkboxes"]}>
              {successMsg ? (
                <div className={styles["success-msg"]}> {successMsg}</div>
              ) : (
                <div className={styles["Checkbox-1"]}>
                  <input
                    type="checkbox"
                    checked={isLazurdeSubscribe}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "newsletter-lazurde",
                        e.target.checked
                      )
                    }
                  />
                  <p> {t("subscribeForNewsletter")}</p>
                </div>
              )}
            </div>

            <Button
              className={styles["Save-button"]}
              buttonSize={"xsm"}
              buttonText={t("Save")}
              isLoading={buttonLoading}
              spinnerSize={16}
              spinnerColor={"#fff"}
              onClick={() => {
                setButtonLoading(true);
                handleAction();
              }}
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsSubscriptions;
