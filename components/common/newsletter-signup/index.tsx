import React, { FC, useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import Input from "components/common/ui/Input";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Button from "components/common/ui/button/index";
import Image from "next/image";
import * as Yup from "yup";
import {
  updateEngagementCustomer,
  useCustomer,
} from "lib/middleware-apis/customers";
import { AppContext } from "lib/context";
import { customerAttributesNames } from "lib/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { getPhoneNumberPrefix, getStoreAttributeId } from "lib/utils/common";
import { useRouter } from "next/router";
import { attributesValue } from "../my-details/functions";
import { isDev } from "general-config";

const NewsletterSignup: FC<any> = (): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const queryClient = useQueryClient();
  const [isLazurdeSubscribe, setIsLazurdeSubscribe] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const storeAttributes: any = queryClient.getQueryData([
    "storeAttributes",
    appState?.region,
  ]);
  const customerData: any = queryClient.getQueryData(["customerData"]);
  useEffect(() => {
    if (customerData?.entityId === 0 || customerData === null) {
      router.push("/");
    }
  }, [customerData]);

  const { updateCustomerAttributesMutation, useGetAttributesByCustomerId } =
    useCustomer();

  const { data: customerAttributes, refetch: refetch } =
    useGetAttributesByCustomerId();

  const attrData = customerAttributes && attributesValue(customerAttributes);
  useEffect(() => {
    refetch();
    attrData &&
      setIsLazurdeSubscribe(
        attrData?.isNewsletterSubscribed === "true" ? true : false
      );
    if (attrData?.isNewsletterSubscribed === "true") {
      setSuccessMsg(
        appState?.lang === "ar"
          ? "شكرا لتقريركم"
          : "Thank you for your submission"
      );
    }
  }, [customerAttributes]);

  const bannerTitle =
    appState?.lang === "ar" ? "احصل على خصم 10%" : "Get 10% off";
  const bannerContent =
    appState?.lang === "ar"
      ? "سجل الآن لتحصل على قسيمة الخصم"
      : "Register now to get the discount coupon";

  const getImageLink = {
    imgUrl:
      "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/referencespa/images/3-explore-brands.png",
    altText: "Banner",
  };

  const mainHeading =
    appState?.lang === "ar"
      ? "الاشتراك في الرسائل الإخبارية"
      : "Newsletter Signup";

  const mainContent =
    appState?.lang === "ar"
      ? "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم. فبالنسبة لأدق التفاصيل، لا يجوز لأحد أن يمارس أي عمل إلا إذا استفاد منه بعض الشيء."
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const mainDescription =
    appState?.lang === "ar"
      ? "من المهم جدًا أن يتابع العميل تدريب العميل، ولكن هذا ما يحدث في نفس الوقت."
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

  const mobileRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(t("Enter first name")),
    lastName: Yup.string().required(t("Enter last name")),
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Enter valid email")),
    phone: Yup.string().required(t("Enter phone #")),
  });
  const renderValues = async (values: any) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const newsletterInfo = {
      commands: [
        {
          name: "customers/events",
          data: {
            customer_ids: {
              email_id: values.email,
            },
            properties: {
              customer_id: customerData?.entityId,
              // first_name: values.firstName,
              // last_name: values.lastName,
              email: values.email,
              // phone_sign_up_form: `${getPhoneNumberPrefix(appState?.region)}${
              //   values.phone
              // }`,
              // birthdate: values.dob.unix,
              // flg_sign_up_form_web: true,
              // updated_br: currentTime,
              action: "accept",
              category: "newsletter",
              valid_until: "unlimited",
              source_import: "bigcommerce_custom_api",
            },
            event_type: "consent",
            timestamp: currentTime,
          },
        },
      ],
    };

    const newsletterInfoUpdated = {
      commands: [
        {
          name: "customers",
          data: {
            customer_ids: {
              email_id: values.email,
            },
            properties: {
              // customer_id: customerData?.entityId,
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              phone_sign_up_form: `${getPhoneNumberPrefix(
                appState?.region
              )}${values.phone?.trim()}`,
              birthdate: values.dob.unix,
              flg_sign_up_form_web: true,
              updated_br: currentTime,
              // action: "accept",
              // category: "newsletter",
              // valid_until: "unlimited",
              // source_import: "bigcommerce_custom_api",
            },
            // event_type: "consent",
            update_timestamp: currentTime,
          },
        },
      ],
    };

    const result = await updateEngagementCustomer(
      newsletterInfo,
      appState?.region
    );
    if (result?.response?.results?.[0]?.success) {
      const results = await updateEngagementCustomer(
        newsletterInfoUpdated,
        appState?.region
      );

      const attributesPayload: any = [
        {
          attribute_id: getStoreAttributeId(
            storeAttributes,
            customerAttributesNames?.customerNewsletterSubscription
          ),
          value: "true",
          customer_id: customerData?.entityId,
        },
      ];
      results?.response?.results?.[0]?.success &&
        updateCustomerAttributesMutation.mutate(attributesPayload, {
          onSuccess: () => {
            refetch();
            setIsLoading(false);
            setSuccessMsg(
              appState?.lang === "ar"
                ? "شكرا لتقريركم"
                : "Thank you for your submission"
            );
          },
          onError: () => {
            setIsLoading(false);
          },
        });
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["hero-banner-wrapper"]}>
        <div className={styles["hero-banner-container"]}>
          <Image
            src={getImageLink?.imgUrl}
            layout="fill"
            quality={100}
            className={`${styles["bg-image"]}`}
            alt=""
            // unoptimized={isDev}
          />
          <div className={styles["banner-text-section"]}>
            <h3 className={styles["banner-text"]} data-testid="banner-text">
              {bannerTitle || "BannerText"}
            </h3>
            <h5
              className={styles["sample-text"]}
              data-testid="banner-text"
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html: bannerContent,
              }}
            ></h5>
          </div>
        </div>
      </div>
      <div className={styles["main-wrapper"]}>
        <div className={styles["heading-wrapper"]}>
          <h2>{mainHeading || "Newsletter Signup"}</h2>
        </div>

        <div className={styles["text-wrapper"]}>
          <p>{mainContent}</p>
        </div>
        {isLazurdeSubscribe && successMsg ? (
          <div className={styles["success-msg"]}>{successMsg}</div>
        ) : (
          <div className={styles["form-wrapper-newsletter"]}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                dob: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setIsLoading(true);
                renderValues(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit,
              }: any) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className={styles["div-two-columns"]}>
                      <Input
                        label={"First Name"}
                        name={"firstName"}
                        value={values.firstName}
                        className={styles["address-input"]}
                        error={
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Input
                        label={"Last Name"}
                        name={"lastName"}
                        value={values.lastName}
                        className={styles["address-input"]}
                        error={
                          errors.lastName && touched.lastName && errors.lastName
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className={styles["field-input"]}>
                      <div>
                        <Input
                          label={"Email"}
                          name={"email"}
                          value={values.email}
                          className={styles["address-input"]}
                          error={errors.email && touched.email && errors.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className={styles["field-input"]}>
                      <div>
                        <Input
                          label={"Mobile Number"}
                          name={"phone"}
                          value={values.phone}
                          className={styles["address-input"]}
                          error={errors.phone && touched.phone && errors.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className={styles["field-input"]}>
                      <div>
                        <Input
                          label={"Date of Birth"}
                          name={"dob"}
                          type={"date"}
                          value={values.dob}
                          className={styles["address-input"]}
                          error={errors.dob && touched.dob && errors.dob}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          setFieldValue={setFieldValue}
                        />
                      </div>
                    </div>
                    <div className={styles["signup-btn"]}>
                      <Button
                        type="submit"
                        buttonSize={"lr"}
                        buttonText={t("signUp")}
                        isLoading={isLoading}
                      ></Button>
                    </div>
                  </form>
                </>
              )}
            </Formik>
          </div>
        )}

        {mainDescription && (
          <div className={styles["text-wrapper"]}>
            <p>{mainDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
