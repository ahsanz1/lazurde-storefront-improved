import React, { useState, useContext, useEffect } from "react";
import styles from "../style.module.scss";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import Input from "components/common/ui/Input";
import { Cross, PasswordEyeIcon, PasswordIcon } from "components/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "components/common/ui/button";
import { customerLogin, useCustomer } from "lib/middleware-apis/customers";
import Notification from "components/common/ui/alert";
import axios from "axios";
import ENDPOINTS from "lib/api/endpoints";

interface PasswordDetailsProps {
  isOpenPasswordModal?: boolean;
  closeModal?: Function;
}

const EditPasswordDetails = ({
  isOpenPasswordModal = false,
  closeModal,
}: PasswordDetailsProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [passwordStatus, setpasswordStatus] = useState("");
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [updatePWsuccess, setUpdatePWsuccess] = useState(false);
  const [updatePWError, setUpdatePWError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();

  useEffect(() => {
    setTimeout(() => {
      setpasswordStatus("");
    }, 10000);
  }, [passwordStatus]);

  const errors: any = t("errorMessage", {}, { returnObjects: true });

  const EditPasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(8, errors?.passwordMinChars)
      .required(errors?.passwordIsInvalid),
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

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const validCurrentPasswordRes = await customerLogin(
        customerData?.email,
        values?.oldPassword,
        appState?.region
      );
      const { result = "" } = validCurrentPasswordRes?.data?.login || {};
      if (result === "success") {
        const updateCustomerBody = {
          payload: [
            {
              id: customerData?.entityId,
              authentication: {
                new_password: values?.newPassword,
                force_password_reset: false,
              },
            },
          ],
          region: appState?.region,
        };
        const updateCustomerRes = await axios.put(
          `${ENDPOINTS.NEXT_API.CUSTOMER.UPDATE_CUSTOMER}`,
          updateCustomerBody
        );

        if (
          updateCustomerRes?.data?.hasError ||
          updateCustomerRes?.status === 400
        )
          throw new Error("Failed to update password");
        else setUpdatePWsuccess(true);
      } else throw new Error("Wrong current password");
    } catch (error) {
      console.log("Updating Password: ", error as any);
      const errMsg = (error as any).response?.data || (error as any).message;
      setUpdatePWError(errMsg);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div>
        {isOpenPasswordModal && (
          <>
            <div className={styles["overlay"]}></div>
            <div className={styles["modal"]}>
              <header className={styles["modal__header"]}>
                <button
                  role="passwordcrossBtn"
                  onClick={() => {
                    closeModal && closeModal();
                  }}
                  className={styles["close-button"]}
                >
                  <Cross width={15} height={15} />
                </button>
              </header>
              <div className={styles["main"]}>
                <div className={styles["main_section"]}>
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
                            className={styles["signIn_form"]}
                            onSubmit={handleSubmit}
                          >
                            <div
                              aria-label="passwordlabel"
                              className={styles["mb-24"]}
                            >
                              <Input
                                divInputClass={styles["pasword-input"]}
                                className={styles["update_password_Input"]}
                                label={t("CurrentPassword")}
                                placeHolder={"••••••••••••"}
                                name={"oldPassword"}
                                type={
                                  showPassword?.oldPassword
                                    ? "text"
                                    : "password"
                                }
                                inputIcon={
                                  <PasswordEyeIcon
                                    showPassword={showPassword?.oldPassword}
                                  />
                                }
                                inputIconClassName={styles["toggle-password"]}
                                onImageClick={() => {
                                  setShowPassword({
                                    ...showPassword,
                                    oldPassword: !showPassword?.oldPassword,
                                  });
                                }}
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
                            <div
                              aria-label="newpasswordlabel"
                              className={styles["mb-24"]}
                            >
                              <Input
                                divInputClass={styles["pasword-input"]}
                                className={styles["update_password_Input"]}
                                label={t("NewPassword")}
                                placeHolder={"••••••••••••"}
                                name={"newPassword"}
                                type={
                                  showPassword?.newPassword
                                    ? "text"
                                    : "password"
                                }
                                inputIcon={
                                  <PasswordEyeIcon
                                    showPassword={showPassword?.newPassword}
                                  />
                                }
                                inputIconClassName={styles["toggle-password"]}
                                onImageClick={() => {
                                  setShowPassword({
                                    ...showPassword,
                                    newPassword: !showPassword?.newPassword,
                                  });
                                }}
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
                              className={styles["mb-24"]}
                            >
                              <Input
                                divInputClass={styles["pasword-input"]}
                                className={styles["update_password_Input"]}
                                label={t("Confirm New Password")}
                                placeHolder="••••••••••••"
                                name={"confirmNewPassword"}
                                type={
                                  showPassword?.confirmNewPassword
                                    ? "text"
                                    : "password"
                                }
                                inputIcon={
                                  <PasswordEyeIcon
                                    showPassword={
                                      showPassword?.confirmNewPassword
                                    }
                                  />
                                }
                                inputIconClassName={styles["toggle-password"]}
                                onImageClick={() => {
                                  setShowPassword({
                                    ...showPassword,
                                    confirmNewPassword:
                                      !showPassword?.confirmNewPassword,
                                  });
                                }}
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
                            <div className={styles["edit_Password_msg"]}>
                              {passwordStatus}
                            </div>
                            <div
                              role="paragraph"
                              className={styles["password_req"]}
                            >
                              <p>{t("requirements")}</p>
                              <p>{t("Minimum")}</p>
                              <p>{t("Uppercase")}</p>
                            </div>
                            <div
                              data-testid="savePASSWORD"
                              className={styles["signIn_button_div"]}
                            >
                              <Button
                                className={styles["signIn_button"]}
                                type="submit"
                                buttonText={t("Save")}
                                isLoading={isLoading}
                              ></Button>
                            </div>
                          </form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {updatePWsuccess && (
          <Notification
            autoDelete={true}
            toastList={[
              {
                title: "Password updated successfully",
                description: "",
                backgroundColor: "#fff",
              },
            ]}
            position={"top-right"}
            autoDeleteTime={3000}
            onDelete={() => {
              setUpdatePWsuccess(false);
              closeModal();
            }}
          />
        )}
        {updatePWError && (
          <Notification
            autoDelete={true}
            toastList={[
              {
                title: updatePWError,
                description: "Try again",
                backgroundColor: "#fff",
              },
            ]}
            position={"top-right"}
            autoDeleteTime={5000}
            onDelete={() => {
              setUpdatePWError("");
            }}
          />
        )}
      </div>
    </>
  );
};
export default EditPasswordDetails;
