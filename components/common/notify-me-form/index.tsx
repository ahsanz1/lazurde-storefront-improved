import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import CheckBox from "components/common/ui/checkbox";
import {
  engagementOutOfStock,
  updateEngagementCustomer,
  useCustomer,
} from "lib/middleware-apis/customers";
import { useRouter } from "next/router";
import {
  getCurrency,
  getCurrentRegionName,
  getStoreAttributeId,
} from "lib/utils/common";
import { useQueryClient } from "@tanstack/react-query";
import { CustomerType } from "lib/types/common";
import { customerAttributesNames } from "lib/utils/constants";
import { attributesValue } from "../my-details/functions";
import Button from "../ui/button";

interface NotifyMeFormProps {
  isOpened?: boolean;
  onClose?: Function;
  item?: any;
  setIsOpen?: Function;
}

interface arabicLabelTypes {
  heading?: string;
  subHeading?: string;
  inputLabel?: string;
  checkboxLabel?: string;
  required?: string;
  submitbtn?: string;
}

const NotifyMeForm = ({
  item = null,
  isOpened = false,
  setIsOpen = () => {},
}: NotifyMeFormProps): JSX.Element => {
  const [isNewsLetterSubscribe, setIsNewsLetterSubscribe] = useState(true);
  const [onSubmit, setOnSubmit] = useState(false);
  const [error, setError] = useState(false);
  const { appState, toast } = useContext(AppContext);
  const router = useRouter();
  const { t } = useTranslation("common");
  const queryClient = useQueryClient();
  const { updateCustomerAttributesMutation, useGetAttributesByCustomerId } =
    useCustomer();
  const customerData: CustomerType = queryClient?.getQueryData([
    "customerData",
  ]);
  const storeAttributes: any = queryClient.getQueryData([
    "storeAttributes",
    appState?.region,
  ]);
  const {
    data: customerAttributes,
    refetch,
    isLoading: isCusAttrLoading,
  } = useGetAttributesByCustomerId({
    enabled: customerData?.entityId > 0,
  });

  const attrData = customerAttributes && attributesValue(customerAttributes);

  useEffect(() => {
    refetch();
    attrData &&
      setIsNewsLetterSubscribe(
        attrData?.isNewsletterSubscribed === "true" ? true : false
      );
  }, [attrData?.isNewsletterSubscribed]);

  const arabicData: arabicLabelTypes = t(
    "notifyModal",
    {},
    { returnObjects: true }
  );

  let isValidEmail = false;

  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleNewsLetterConsent = async (event: any): Promise<() => null> => {
    const newsLetter = event?.target?.newsletter?.value;
    const emailValue = event?.target?.emailNumber?.value;

    // if (!newsLetter) return null;
    if (!customerData?.entityId) return null;
    if (attrData?.isNewsletterSubscribed === String(isNewsLetterSubscribe))
      return null;

    const currentTime = Math.floor(Date.now() / 1000);
    const newsletterInfo = {
      commands: [
        {
          name: "customers/events",
          data: {
            customer_ids: {
              email_id: emailValue,
            },
            event_type: "consent",
            timestamp: currentTime,
            properties: {
              email: emailValue,
              customer_id: customerData?.entityId,
              action:
                String(isNewsLetterSubscribe) === "true" ? "accept" : "reject",
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
        value: String(isNewsLetterSubscribe),
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
      updateCustomerAttributesMutation.mutate(attributesPayload);
  };

  const getOnlyNumber = (string: string) => {
    return Number(string?.match(/(\d+\.\d+|\d+)/g));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailValue = e?.target?.emailNumber?.value;
    if (emailValue) setError(true);
    isValidEmail = validateEmail(emailValue);
    if (!isValidEmail) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    setOnSubmit(true);

    let customFieldObj: any = {};
    item?.customFields?.edges?.forEach((field: any) => {
      customFieldObj = {
        ...customFieldObj,
        [field.node.name]: field.node.value,
      };
    });
    const category = item?.categories?.edges?.[0]?.node?.name;
    const categoryLevelTwo = item?.categories?.edges?.[1]?.node?.name;
    const categoryLevelThree = item?.categories?.edges?.[2]?.node?.name;
    const categoryId = item?.categories?.edges?.map(
      (item: any) => item?.node?.entityId
    );

    const brandname =
      appState?.lang === "en"
        ? item?.brand?.name
        : customFieldObj?.["Brand AR"];
    const collection =
      appState?.lang === "en"
        ? customFieldObj?.Collection
        : customFieldObj?.["Collection AR"];
    const description =
      appState?.lang === "en"
        ? item?.description
        : customFieldObj?.["New Description AR"];

    const metalCaret =
      appState?.lang === "en"
        ? customFieldObj?.["Metal Karat"]
        : customFieldObj?.["Metal Karat AR"];

    const metalColor =
      appState?.lang === "en"
        ? customFieldObj?.["Metal Color"]
        : customFieldObj?.["Metal Color AR"];

    const diamondCaretOnly =
      appState?.lang === "en"
        ? customFieldObj?.["Diamond Carat ONLY"]
        : customFieldObj?.["Diamond Carat ONLY AR"];

    const diamondCutShapeOnly =
      appState?.lang === "en"
        ? customFieldObj?.["Diamond Cut/Shape ONLY"]
        : customFieldObj?.["Diamond Cut/Shape ONLY AR"];

    let diamondAttributes = [];
    diamondCaretOnly && diamondAttributes.push(diamondCaretOnly);
    diamondCutShapeOnly && diamondAttributes.push(diamondCutShapeOnly);

    let metalAttributes = [];
    metalCaret && metalAttributes.push(metalCaret);
    metalColor && metalAttributes.push(metalColor);

    const stoneCaretOnly =
      appState?.lang === "en"
        ? customFieldObj?.["Stone Carat ONLY"]
        : customFieldObj?.["Stone Carat ONLY AR"] ||
          customFieldObj?.["Stone Carat ONLY"];

    const stoneCutShapeOnly =
      appState?.lang === "en"
        ? customFieldObj?.["Stone Cut/Shape ONLY"]
        : customFieldObj?.["Stone Cut/Shape ONLY AR"];

    const stone =
      appState?.lang === "en"
        ? customFieldObj?.["Stone"]
        : customFieldObj?.["Stone AR"];

    let stoneAttributes: any = [];
    stoneCaretOnly && stoneAttributes?.push(stoneCaretOnly);
    stoneCutShapeOnly && stoneAttributes?.push(stoneCutShapeOnly);
    stone && stoneAttributes?.push(stone);

    const sizeOnly =
      getOnlyNumber(customFieldObj?.["Bracelet Length"]) ||
      getOnlyNumber(customFieldObj?.["Chain Length"]) ||
      getOnlyNumber(customFieldObj?.["Earring Length"]) ||
      getOnlyNumber(customFieldObj?.["Pendant Length"]) ||
      getOnlyNumber(customFieldObj?.["Ring Size"]);

    const payload = {
      commands: [
        {
          name: "customers/events",
          data: {
            customer_ids: {
              email_id: emailValue,
            },
            event_type: "out_of_stock",
            timestamp: Math.floor(Date.now() / 1000),
            properties: {
              email: emailValue || "",
              region: getCurrentRegionName(appState?.region) || "",
              boutique: brandname || "",
              category_path:
                `${category} ${
                  categoryLevelTwo ? `> ${categoryLevelTwo}` : ""
                }` || "",
              url: window.location.href || "",
              image: item?.defaultImage?.url1440wide || "",
              category_level_1: category || "",
              category_level_2: categoryLevelTwo || "",
              category_level_3: categoryLevelThree || "",
              currency: item?.prices?.basePrice?.currencyCode || "",
              original_price: item?.prices?.basePrice?.value || null,
              sale_price: item?.prices?.salePrice?.value || null,
              discount:
                Number(item?.prices?.basePrice?.value) -
                  Number(item?.prices?.salePrice?.value) || null,
              total_price: item?.prices?.price?.value || null,
              language: appState?.lang || "",
              item_id: item?.sku || "",
              title: item?.name || "",
              brand: brandname || "",
              category_ids: categoryId || [],
              collection: collection || "",
              description: description || "",
              diamond_attributes: diamondAttributes || [],
              diamond_carat:
                getOnlyNumber(customFieldObj?.["Diamond Carat ONLY"]) || null,
              diamond_cut: customFieldObj?.["Diamond Cut/Shape ONLY"] || "",
              metal_attributes: metalAttributes || [],
              metal_carat:
                getOnlyNumber(customFieldObj?.["Metal Karat"]) || null,
              metal_color: customFieldObj?.["Metal Color"] || "",
              size: sizeOnly || null,
              size_bracelet:
                getOnlyNumber(customFieldObj?.["Bracelet Length"]) || null,
              size_chain:
                getOnlyNumber(customFieldObj?.["Chain Length"]) || null,
              size_earring:
                getOnlyNumber(customFieldObj?.["Earring Length"]) || null,
              size_pendant:
                getOnlyNumber(customFieldObj?.["Pendant Length"]) || null,
              size_ring: getOnlyNumber(customFieldObj?.["Ring Size"]) || null,
              stone_carat: getOnlyNumber(stoneCaretOnly) || null,
              stone_color: stone || "",
              stone_cut: stoneCutShapeOnly || "",
              stone_attributes: stoneAttributes || [],
              source_import: "bigcommerce_custom_api",
            },
          },
        },
      ],
    };

    handleNewsLetterConsent(e);
    const reply = await engagementOutOfStock(payload, appState?.region);

    if (reply?.response?.success) {
      setIsOpen(false);
      toast("We will notify you once its available");
    }
    setOnSubmit(false);
  };

  return (
    <div className={styles["notifyme-modal_wrapper"]} data-open={isOpened}>
      <div className={styles["notifyme-modal-body"]}>
        <Label className={styles["heading"]} role="heading">
          {appState?.lang === "en"
            ? "Product Not Available"
            : arabicData.heading}
        </Label>
        <Label className={styles["sub-heading"]} role="sub-heading">
          {appState?.lang === "en"
            ? "We will notify you when this product becomes available."
            : arabicData.subHeading}
        </Label>
        <div className={styles["form-wrapper"]}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles["form-input"]}>
              <Label className={styles["input-label"]}>
                {appState?.lang === "en" ? "Email" : arabicData.inputLabel}
              </Label>
              <input
                type="text"
                name="emailNumber"
                placeholder="jane@gmail.com"
                role="input"
                required
                defaultValue={customerData?.email || null}
              />
              {error && (
                <span className={styles["error-msg"]}>
                  {t("emailNumberErrorMsg")}
                </span>
              )}
            </div>
            {customerData?.entityId && !isCusAttrLoading ? (
              <div className={styles["checkbox-wrapper"]}>
                <CheckBox
                  role="newsletter"
                  className={styles["main-checkbox"]}
                  name={"newsletter"}
                  defaultChecked={isNewsLetterSubscribe}
                  label={
                    appState?.lang === "en"
                      ? "Register to our newsletter"
                      : arabicData.checkboxLabel
                  }
                  onChange={() => {
                    setIsNewsLetterSubscribe(!isNewsLetterSubscribe);
                  }}
                />
              </div>
            ) : null}

            <div className={styles["submit-btn"]}>
              <Button type="submit" isLoading={onSubmit}>
                {appState?.lang === "en" ? "notify me" : arabicData.submitbtn}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NotifyMeForm;
