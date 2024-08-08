import React, { FC, useContext, useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "components/common/ui/Input";
import UpdatePasswordForm from "../update-password-form";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { AppContext } from "lib/context";
import axios from "axios";
import ENDPOINTS from "lib/api/endpoints";
import { useRouter } from "next/router";

interface ResetPasswordFormProps {
  isResetPassword: any;
  setSelectedTab?: Function;
}

const CUSTOMER_NOT_FOUND_ERROR =
  "A customer with provided email does not exist!";

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  isResetPassword,
  setSelectedTab = () => {},
}) => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const errors: any = t("errorMessage", {}, { returnObjects: true });
  const [isResetPassModalOpen, setIsResetPassModalOpen] = useState(false);
  const [isResetPWEmailSent, setIsResetPWEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updatePWErr, setUpdatePWErr] = useState("");
  const { appState = {} } = useContext(AppContext);
  const { setHandleAuthModal, handleAuthModal } = useContext(AppContext);
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email(errors?.email).required(errors?.email),
  });
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const resetPWEmailRes = await axios.post(
        `${window.location.origin}${ENDPOINTS.NEXT_API.CUSTOMER.RESET_PASSWORD}`,
        {
          email: values.email,
          region: appState?.region,
          lang: appState?.lang,
          currentDomain: window.location.origin,
        }
      );
      if (resetPWEmailRes?.data?.emailSent) {
        setIsResetPWEmailSent(true);
      }
    } catch (error) {
      console.log("Error: ", error);
      const errMsg = (error as any).response?.data || (error as any).message;
      if (errMsg?.message === CUSTOMER_NOT_FOUND_ERROR)
        setUpdatePWErr(t("emailNumberErrorMsg"));
    }
    setIsLoading(false);
  };

  const ResetPWSuccess = () => {
    return (
      <div className={styles["reset-password-form"]}>
        <p>{t("resetEmailSentNote")}</p>
      </div>
    );
  };
  return (
    <>
      {isResetPassword?.resetPass ? (
        <AnimationWrapper animationName="slide-up">
          <div className={styles["Reset-form-wrapper"]}>
            <div className={styles["reset-password-form"]}>
              <h2>{t("Reset Password")}</h2>
              {isResetPWEmailSent ? (
                <ResetPWSuccess />
              ) : (
                <p>{t("Please enter your email address")}</p>
              )}
            </div>
            {!isResetPWEmailSent ? (
              <>
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={ResetPasswordSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values);
                    setIsLoading(true);
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }: any) => {
                    if (errors?.email) setUpdatePWErr("");
                    return (
                      <form onSubmit={handleSubmit}>
                        <div className={styles["form-input"]}>
                          <Input
                            type="text"
                            name="email"
                            label={t("Email")}
                            error={
                              (errors.email && touched.email && errors.email) ||
                              errors.notFound
                            }
                            placeHolder={"john.doe@email.com"}
                            value={values?.email}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            role="email"
                          />
                          {updatePWErr && !errors?.email && (
                            <span className={styles["update-pw-err"]}>
                              {updatePWErr}
                            </span>
                          )}
                        </div>
                        <div className={styles["submit-btn"]}>
                          <Button
                            buttonSize={width > desktopScreenSize ? "xl" : "lr"}
                            buttonText={t("Send Password Reset Link")}
                            type="submit"
                            isLoading={isLoading}
                            // spinnerText={t("loading")}
                            testId="reset-password-btn"
                            onClick={() => {
                              if (values?.email && !errors.email) {
                                // setHandleAuthModal({
                                //   ...handleAuthModal,
                                //   isResetPasswordOpen: false,
                                // });
                              }
                            }}
                          />
                        </div>
                      </form>
                    );
                  }}
                </Formik>
                <div className={styles["reset-password-btn"]}>
                  <Label className={styles["signup-label"]}>
                    {t("New here?")}
                  </Label>
                  <Button
                    buttonStyle="underline"
                    buttonText={t("signUp")}
                    style={{
                      height: "auto",
                      width: "auto",
                      padding: "0",
                    }}
                    testId="signup-btn"
                    onClick={() => {
                      setSelectedTab({
                        signIn: false,
                        resetPass: false,
                        forgotPass: false,
                      });
                      router?.push("/sign-up");
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>
        </AnimationWrapper>
      ) : null}

      {isResetPassword?.forgotPass ? (
        <UpdatePasswordForm isResetPassword={setSelectedTab} />
      ) : null}
    </>
  );
};

export default ResetPasswordForm;
