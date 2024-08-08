import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import useTranslation from "next-translate/useTranslation";
import Button from "components/common/ui/button";
import {
  desktopScreenSize,
  getStoreAttributeId,
  phoneFormat,
} from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import CheckBox from "components/common/ui/checkbox";
import { AppContext } from "lib/context";
import FormFields from "./form-field";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { tokens as token } from "general-config";
import {
  getCustomerByEmail,
  updateCustomerAttributeValues,
  updateEngagementCustomer,
  useCustomer,
} from "lib/middleware-apis/customers";
import { APITokensObj } from "lib/types/common";
import { customerAttributesNames } from "lib/utils/constants";
import { sendVerificationEmail } from "lib/utils/customer";
import { signUpSignInEvent } from "lib/utils/datalayer-events";
import { useRouter } from "next/router";

interface SignUpFormProps {
  setSelectedTab?: Function;
}
type optionProps = { label?: string; value?: string | number };

const SignUpForm = ({ setSelectedTab = () => { } }: SignUpFormProps) => {
  const tokens: APITokensObj = token;
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const { setHandleAuthModal, appState, toast, setIsOldWebsiteUser } =
    useContext(AppContext);
  const [errorCheck, setErrorCheck] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const { createCustomerMutation } = useCustomer();
  const errors: any = t("errorMessage", {}, { returnObjects: true });
  const { updateCustomerAttributesMutation, useGetAttributesByCustomerId } =
    useCustomer();
  const { useGetStoreAttributes } = useCustomer();
  const { data: storeAttributes } = useGetStoreAttributes();
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState(false)

  const { refetch: refetch } = useGetAttributesByCustomerId();

  if (typeof window === "undefined") return null;

  const SignupSchema = Yup.object().shape({
    fName: Yup.string().required(errors?.name),
    lName: Yup.string().required(errors?.name),
    dob: Yup.string().required(errors?.dateOfBirth),
    email: Yup.string().required(errors?.email),
    phoneNumber: Yup.string().required(errors?.phone),
    password: Yup.string()
      .min(8, errors?.passwordMinChars)
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, errors?.passwordMatch)
      .required(errors?.passwordIsInvalid),
    confirmPassword: Yup.string()
      .required(errors?.passwordIsInvalid)
      .oneOf([Yup.ref("password"), null], t("confirmPassword")),
  });

  const titleOptions: optionProps[] = t(
    "titleOptions",
    {},
    { returnObjects: true }
  );

  const signUpFormFields: any = t(
    "signUpFormFields",
    {},
    { returnObjects: true }
  );

  const handleSignupFormSubmit = async (values: any, setValues: Function) => {
    setIsCreating(true);
    const checkIfCustomerExists = await getCustomerByEmail(
      values?.email,
      appState?.region
    );

    const customer = checkIfCustomerExists?.response?.[0];

    if (customer) {
      /**
       * NOTE: Check if customer is migrated
       */
      if (customer.notes === "old") {
        setIsOldWebsiteUser(true);
      } else {
        /**
         * NOTE: If customer is already registered
         */
        toast(`${t("Email")} ${customer.email} ${t("alreadyInUse")}`);
      }
      setIsCreating(false);
      return;
    }

    const payload: any = [
      {
        email: String(values?.email),
        first_name: String(values?.fName),
        last_name: String(values?.lName),
        phone: phoneFormat(String(values?.phoneNumber)),
        authentication: {
          force_password_reset: false,
          new_password: String(values?.password),
          confirm_password: String(values?.confirmPassword),
        },
        attributes: [
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.customerTitle
            ),
            attribute_value: String(values?.title),
          },
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.customerDateOfBirth
            ),
            attribute_value: String(values?.dob),
          },
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.customerAnniversaryDate
            ),
            attribute_value: String(values?.anniversaryDate),
          },
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.customerNewsletterSubscription
            ),
            attribute_value: String(values?.isNewsletterSubscribed),
          },
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.isEmailVerified
            ),
            attribute_value: String(0),
          },
          {
            attribute_id: getStoreAttributeId(
              storeAttributes,
              customerAttributesNames?.verificationEmailSent
            ),
            attribute_value: String(0),
          },
        ],
        origin_channel_id: Number(tokens[appState?.region].BC_CHANNEL_ID),
        channel_ids: [Number(tokens[appState?.region].BC_CHANNEL_ID)],
      },
    ];
    createCustomerMutation.mutate(payload, {
      onSuccess: async (data) => {
        if (data?.hasError == true) {
          if (data?.response?.errors[".customer_create"]) {
            const errorRes = data?.response?.errors[".customer_create"];
            const getText = errorRes?.split(":")[1];
            // setErrorCheck(getText);
            toast(getText);
            return null;
          }
          if (data?.response?.status == 422) {
            toast(t("unableCreateCustomer"));
            return null;
          }
        }
        setIsCreating(true);
        const newsletterInfo = {
          commands: [
            {
              name: "customers/events",
              data: {
                customer_ids: {
                  email_id: data?.response?.[0]?.email,
                },
                event_type: "consent",
                timestamp: Math.floor(Date.now() / 1000),
                properties: {
                  email: data?.response?.[0]?.email,
                  customer_id: data?.response?.[0]?.id,
                  action:
                    String(values?.isNewsletterSubscribed) === "true"
                      ? "accept"
                      : "reject",
                  category: "newsletter",
                  valid_until: "unlimited",
                  source_import: "bigcommerce_custom_api",
                },
              },
            },
          ],
        };
        if (String(values?.isNewsletterSubscribed) === "true") {
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
              value: String(values?.isNewsletterSubscribed),
              customer_id: data?.response?.[0]?.id,
            },
          ];
          result?.response?.results?.[0]?.success &&
            updateCustomerAttributesMutation.mutate(attributesPayload, {
              onSuccess: () => {
                refetch();
              },
            });
        }

        sendVerificationEmail({
          email: data.response[0]?.email,
          customerId: data.response[0]?.id,
          first_name: data.response[0]?.first_name,
          region: appState?.region,
          lang: appState?.lang,
          currentDomain: window.location.origin,
        })
          .then((verificationEmailRes: any) => {
            if (verificationEmailRes?.emailSent) {
              const attrPayload: any = [
                {
                  attribute_id: getStoreAttributeId(
                    storeAttributes,
                    customerAttributesNames?.verificationEmailSent
                  ),
                  value: String(1),
                  customer_id: data.response[0]?.id,
                },
              ];
              updateCustomerAttributeValues(attrPayload, appState?.region)
                .then(() => {
                  setSelectedTab("0");
                  setHandleAuthModal({
                    isCheckoutGuestUser: false,
                    isModalopen: true,
                    isSignInOpen: true,
                    isSignUpOpen: false,
                    isResetPasswordOpen: false,
                    isUpdatePassModalOpen: false,
                  });
                  setErrorCheck("");
                  setValues(initialValues, false);
                  const formElements =
                    typeof window !== undefined &&
                    document?.querySelectorAll("input[name]");
                  formElements?.forEach((element: any) => {
                    element.value = "";
                  });
                })
                .catch((err) => {
                  console.log("Error Updating Customer: ", err);
                });
              setIsCreating(false);
              toast(t("verificationLinkSent"));
              signUpSignInEvent("sign_up", data?.response?.[0]?.entityId);
              /**
               * NOTE: Need to show following message here,
               *
               * A verification link has been sent to your email address.
               * Please click on the link to verify your email and continue the registration process.
               */
            }
          })
          .catch((err) => {
            setIsCreating(false);
            console.log("Error Sending Verification Email: ", err);
          });
      },
    });
  };

  const initialValues = {
    title: titleOptions?.[0]?.value || "",
    fName: "",
    lName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    anniversaryDate: "",
    isNewsletterSubscribed: "true",
  };

  router.events.on("routeChangeComplete", () => {
    setOnClickLoading(false);
  });

  return (
    <>
      <AnimationWrapper animationName="none">
        <div className={styles["form-wrapper"]}>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, setValues }) => {
              await handleSignupFormSubmit(values, setValues);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue,
              isSubmitting,
            }: any) => (
              <form
                onSubmit={(e: any) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className={styles["form-inner-wrapper"]}>
                  <div className={styles["div-top"]}>
                    {signUpFormFields &&
                      signUpFormFields?.length > 0 &&
                      signUpFormFields?.map((fields: any, index: number) => {
                        return (
                          <FormFields
                            key={index}
                            fields={fields}
                            index={index}
                            titleOptions={titleOptions}
                            values={values}
                            errors={errors}
                            setFieldValue={setFieldValue}
                            handleChange={handleChange}
                            touched={touched}
                          />
                        );
                      })}

                    <CheckBox
                      className={`${styles["main-checkbox"]} ${styles["signup-newsletter-checkbox"]}`}
                      name="newsletter"
                      defaultChecked={true}
                      label={t("newsletterText")}
                      onChange={(value) => {
                        setFieldValue("isNewsletterSubscribed", value);
                      }}
                    />
                  </div>
                  <div className={styles["div-bottom"]}>
                    <div className={styles["signup-errors"]}>
                      {errorCheck && errorCheck}
                    </div>
                    <div className={styles.submit_btns}>
                      <Button
                        buttonSize={width > desktopScreenSize ? "xl" : "lr"}
                        buttonText={t("signUp")}
                        type="submit"
                        isLoading={
                          createCustomerMutation?.isLoading || isCreating
                        }
                        spinnerText={t("loading")}
                        onClick={() => {
                          setTimeout(() => {
                            const errorList =
                              document.getElementsByClassName("div-error-msg");

                            errorList &&
                              errorList.length > 0 &&
                              errorList?.[0]?.parentElement?.scrollIntoView({
                                behavior: "smooth",
                              });
                          }, 300);
                        }}
                      />
                      <div className={styles["bottom-note"]}>
                        <span>{t("alreadyAmember")}</span>
                        <Button
                          buttonText={t("signIn")}
                          type="button"
                          buttonStyle="underline"
                          style={{
                            width: "fit-content",
                            height: "auto",
                            padding: "0 0 0 4px",
                          }}
                          onClick={() => {
                            router?.push("/sign-in");
                          }}
                        />
                      </div>
                      <div className={styles["additional-link"]}>
                        <Button
                          style={{
                            textTransform: "none",
                          }}
                          buttonSize={"lr"}
                          buttonStyle="underline"
                          isLoading={onClickLoading}
                          spinnerColor="Black"
                          type="button"
                          buttonText={t("termsAndConditions")}
                          onClick={() => {
                            setOnClickLoading(true)
                            router.push(`/lazurde-policies`);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default SignUpForm;
