import React, { FC, useContext, useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import { PasswordIcon, PasswordEyeIcon } from "components/icons";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize, getStoreAttributeId } from "lib/utils/common";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { AppContext } from "lib/context";
import {
  customerLogin,
  getAttributesByCustomerId,
  useCustomer,
} from "lib/middleware-apis/customers";
import * as Yup from "yup";
import { useQueryClient } from "@tanstack/react-query";
import Notification from "components/common/ui/alert";
import { customerAttributesNames } from "lib/utils/constants";
import { getCustomerByEmail } from "lib/middleware-apis/customers";
import { signUpSignInEvent } from "lib/utils/datalayer-events";
import { useRouter } from "next/router";

interface SignInFormProps {
  setResetPasswordModal?: Function;
  className?: string;
  inputDivClass?: string;
  isCheckout?: boolean;
  setIsResetPassword?: Function;
}

const SignInForm: FC<SignInFormProps> = ({
  className = "",
  inputDivClass = "",
  isCheckout = false,
  setIsResetPassword = () => {},
}) => {
  const { setHandleAuthModal, appState, toast, setIsOldWebsiteUser } =
    useContext(AppContext);
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const [inputValue, setInputValue] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { logInMutation } = useCustomer();
  const errors: any = t("errorMessage", {}, { returnObjects: true });
  // const queryClient = useQueryClient();
  // const storeAttributes: any = queryClient.getQueryData([
  //   "storeAttributes",
  //   appState?.region,
  // ]);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email(errors?.password).required(errors?.email),
    password: Yup.string().trim().required(errors?.password),
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputValue((curr: any) => ({
      ...curr,
      [name]: value,
    }));
    setError({
      ...error,
      [name]: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      await validationSchema.validate({ ...inputValue }, { abortEarly: false });
      setError({});
      const checkCustomer = await getCustomerByEmail(
        inputValue?.email,
        appState?.region
      );
      if (checkCustomer?.response?.[0]?.notes === "old") {
        setIsOldWebsiteUser(true);
        setIsLoggingIn(true);
        return;
      }

      const payload = {
        email: inputValue?.email,
        password: inputValue?.password,
        isLogin: true,
        isRedirectToCheckout: isCheckout,
      };
      logInMutation.mutate(
        { ...payload },
        {
          onSuccess: async () => {
            // setIsLoggingIn(false);
            router?.push("/");
          },
          onError: () => {
            setIsLoggingIn(false);
          },
        }
      );

    } catch (error: any) {
      const validationErrors: any = {};
      error?.inner?.forEach((err: any) => {
        validationErrors[err.path] = err.message;
      });
      setError(validationErrors);
      setIsLoggingIn(false);
    }
  };

  return (
    <>
      <AnimationWrapper animationName="slide-up">
        <div className={`${styles["signin-form-wrapper"]} ${className}`}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={`${styles["form-input"]} ${inputDivClass}`}>
              <Label className={styles["input-label"]}>{t("Email")}</Label>
              <input
                type="text"
                name="email"
                placeholder="jane@gmail.com"
                value={inputValue?.email || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
                role="email"
                className={styles[error?.email ? "error-input" : ""]}
              />
              {error?.email && (
                <span className={styles["error-msg"]}>{errors?.email}</span>
              )}
            </div>
            <div
              className={`${styles["form-input"]} ${styles["password-field"]} ${inputDivClass}`}
            >
              <Label className={styles["input-label"]}>{t("Password")}</Label>
              <div className={styles["pass-input"]}>
                <input
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  placeholder="••••••••••••"
                  value={inputValue?.password || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  role="password"
                  className={styles[error?.password ? "error-input" : ""]}
                />
                {/* <PasswordIcon
                  role="show-password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                /> */}
                <PasswordEyeIcon
                  role="show-password-icon"
                  showPassword={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {error?.password && (
                <span className={styles["error-msg"]}>{errors?.password}</span>
              )}
            </div>
            <div className={styles["submit-btn"]}>
              <Button
                buttonSize={
                  isCheckout ? "xl" : width > desktopScreenSize ? "xl" : "lr"
                }
                buttonText={t("signIn")}
                type="submit"
                isLoading={isLoggingIn || logInMutation?.isLoading}
                spinnerText={t("loading")}
                isDisabled={isLoggingIn || logInMutation?.isLoading}
              />
            </div>
            <div className={styles["forget-password-btn"]}>
              <Button
                buttonStyle="underline"
                buttonText={t("forgetPassword")}
                style={{
                  height: "auto",
                  padding: "0",
                }}
                testId="forget-password"
                onClick={() => {
                  setIsResetPassword({
                    signIn: false,
                    resetPass: true,
                    forgotPass: false,
                  });
                }}
              />
            </div>
          </form>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default SignInForm;
