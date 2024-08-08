import React, { useState, FC, useContext, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Input from "components/common/ui/Input";
import { PasswordEyeIcon, PasswordIcon } from "components/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "components/common/ui/button";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import axios, { AxiosError } from "axios";
import ENDPOINTS from "lib/api/endpoints";
import { AppContext } from "lib/context";
import Notification from "components/common/ui/alert";
import { setCookie, getCookie, removeCookie } from "tiny-cookie";

const UpdatePasswordForm = ({ isResetPassword }: any) => {
  const { t } = useTranslation("common");
  const [passwordShownFirst, setPasswordShownFirst] = useState(false);
  const [passwordShownSecond, setPasswordShownSecond] = useState(false);
  const [passwordShownThird, setPasswordShownThird] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { appState, toast } = useContext(AppContext);
  const errors: any = t("errorMessage", {}, { returnObjects: true });
  const showOldPassword = useRef(true);

  const resetPasswordParam =
    typeof document !== "undefined" &&
    getCookie("reset_token", (value: any) =>
      JSON.parse(decodeURIComponent(value))
    );

  if (resetPasswordParam && resetPasswordParam?.token) {
    showOldPassword.current = false;
  }
  const EditPasswordSchema = Yup.object().shape({
    oldPassword: showOldPassword.current
      ? Yup.string()
          .min(8, errors?.passwordMinChars)
          .required(errors?.passwordIsInvalid)
      : null,
    newPassword: Yup.string()
      .min(8, errors?.passwordMinChars)
      .matches(/[0-9]/, errors?.passwordContainNumber)
      .matches(/[a-z]/, errors?.passwordContainLowercaseLetter)
      .matches(/[A-Z]/, errors?.passwordContainUppercaseLetter)
      .required(errors?.passwordIsInvalid),
    confirmNewPassword: Yup.string()
      .min(8, errors?.passwordMinChars)
      .required(errors?.passwordIsInvalid)
      .oneOf([Yup.ref("newPassword"), null], errors?.passwordSameAsConfirm),
  });

  const togglePasswordFirst = () => {
    setPasswordShownFirst(!passwordShownFirst);
  };
  const togglePasswordSecond = () => {
    setPasswordShownSecond(!passwordShownSecond);
  };
  const togglePasswordThird = () => {
    setPasswordShownThird(!passwordShownThird);
  };

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const payload = {
        region: appState?.region,
        lang: appState?.lang,
        password: values.newPassword,
      };
      const resetPWRes = await axios.post(
        `${window.location.origin}${ENDPOINTS.NEXT_API.CUSTOMER.RESET_PASSWORD}/callback`,
        payload
      );
      if (resetPWRes?.data?.message === "success") {
        toast(t("passwordChanged"));
        isResetPassword({
          signIn: true,
          resetPass: false,
          forgotPass: false,
        });
      }
    } catch (error) {
      toast(t("passwordResetFailed"));
    }
    setIsLoading(false);
  };

  return (
    <>
      <AnimationWrapper animationName="slide-up">
        <div className={styles["update_password_modal"]}>
          <div data-testid="passwordheading">
            <p className={styles["reset"]}>{t("EditPassword")}</p>
          </div>
          <div>
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              }}
              validationSchema={EditPasswordSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
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
                return (
                  <form
                    className={styles["update_password_form"]}
                    onSubmit={handleSubmit}
                  >
                    {showOldPassword.current && (
                      <div
                        aria-label="passwordlabel"
                        className={styles["input1"]}
                      >
                        <Input
                          divInputClass={styles["pasword-input"]}
                          className={styles["update_password_Input"]}
                          label={t("CurrentPassword")}
                          placeHolder={"••••••••••••"}
                          name={"oldPassword"}
                          type={passwordShownFirst ? "text" : "password"}
                          inputIcon={
                            <PasswordEyeIcon
                              showPassword={passwordShownFirst}
                            />
                          }
                          inputIconClassName={styles["toggle-password"]}
                          onImageClick={() => togglePasswordFirst()}
                          error={
                            errors.oldPassword &&
                            touched.oldPassword &&
                            errors.oldPassword
                          }
                          value={values.oldPassword}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          role="old-password"
                        />
                      </div>
                    )}
                    <div
                      aria-label="newpasswordlabel"
                      className={styles["input2"]}
                    >
                      <Input
                        divInputClass={styles["pasword-input"]}
                        className={styles["update_password_Input"]}
                        label={t("NewPassword")}
                        placeHolder={"••••••••••••"}
                        name={"newPassword"}
                        type={passwordShownSecond ? "text" : "password"}
                        inputIcon={
                          <PasswordEyeIcon showPassword={passwordShownSecond} />
                        }
                        inputIconClassName={styles["toggle-password"]}
                        onImageClick={() => togglePasswordSecond()}
                        error={
                          errors.newPassword &&
                          touched.newPassword &&
                          errors.newPassword
                        }
                        value={values.newPassword}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        role="new-password"
                      />
                    </div>
                    <div
                      aria-label="repasswordlabel"
                      className={styles["input3"]}
                    >
                      <Input
                        divInputClass={styles["pasword-input"]}
                        className={styles["update_password_Input"]}
                        label={t("Confirm New Password")}
                        placeHolder="••••••••••••"
                        name={"confirmNewPassword"}
                        type={passwordShownThird ? "text" : "password"}
                        inputIcon={
                          <PasswordEyeIcon showPassword={passwordShownThird} />
                        }
                        inputIconClassName={styles["toggle-password"]}
                        onImageClick={() => togglePasswordThird()}
                        error={
                          errors.confirmNewPassword &&
                          touched.confirmNewPassword &&
                          errors.confirmNewPassword
                        }
                        value={values.confirmNewPassword}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        role="confirm-password"
                      />
                    </div>
                    <div role="paragraph" className={styles["password_req"]}>
                      <p>{t("requirements")}</p>
                      <p>{t("Minimum")}</p>
                      <p>{t("Uppercase")}</p>
                    </div>
                    <div
                      data-testid="savePASSWORD"
                      className={styles["update_password_div"]}
                    >
                      <Button
                        className={styles["update_password"]}
                        type="submit"
                        buttonText={t("Save")}
                        isLoading={isLoading}
                        spinnerText={t("Saving")}
                      ></Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
};
export default UpdatePasswordForm;
