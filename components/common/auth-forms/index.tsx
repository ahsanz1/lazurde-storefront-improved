import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Modal from "components/common/ui/modal";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import SignInForm from "./signin-form";
import SignUpForm from "./signup-form";
import ResetPasswordForm from "./reset-password-form";
import DeleteConfirmationModal from "../delete-confirmation";
import Button from "../ui/button";
import Label from "../ui/label";
import { useRouter } from "next/router";
import { setCookie, getCookie, removeCookie } from "tiny-cookie";
import { sendVerificationEmail } from "lib/utils/customer";
import { getStoreAttributeId } from "lib/utils/common";
import {
  updateCustomerAttributeValues,
  useCustomer,
} from "lib/middleware-apis/customers";
import jwt from "jsonwebtoken";
import { customerAttributesNames } from "lib/utils/constants";

const AuthForms = ({ handleAuthModal = 0 }) => {
  const { t } = useTranslation("common");
  const { appState, isOldWebsiteUser, setIsOldWebsiteUser, openDrawer, toast } =
    useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState(String(handleAuthModal));
  const [updatePwtokenExpire, setUpdatePwtokenExpire] = useState(false);
  const [verificationModal, setVerificationModal] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [emailVerified, setEmailVerified] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState({
    signIn: true,
    resetPass: false,
    forgotPass: false,
  });
  const tabHeadings: string[] = [t("signIn"), t("signUp")];
  const { useGetStoreAttributes } = useCustomer();
  const router = useRouter();
  const { data: storeAttributes } = useGetStoreAttributes();

  const resetPasswordParam =
    typeof document !== "undefined" &&
    getCookie("reset_token", (value: any) =>
      JSON.parse(decodeURIComponent(value))
    );

  const verificationCookie =
    typeof document !== "undefined" &&
    getCookie("email-verification", (value: any) =>
      JSON.parse(decodeURIComponent(value))
    );
  const emailTokenValidParam = verificationCookie?.emailTokenValid;
  const token = verificationCookie?.jwtToken;
  const loginAfterEmailVerifyParam = verificationCookie?.openLogin;

  useEffect(() => {
    if (loginAfterEmailVerifyParam && emailTokenValidParam) {
      toast(t("emailVerified"));
      setIsResetPassword({
        signIn: true,
        resetPass: false,
        forgotPass: false,
      });
      removeCookie("email-verification");
      return null;
    }
    if (loginAfterEmailVerifyParam && !emailTokenValidParam) {
      setVerificationModal(true);
      return null;
    }
    const verify = storeAttributes?.filter(
      (val: any) => val?.name === "isEmailVerified"
    );
    if (verify?.length > 0) {
      setEmailVerified(false);
    }
  }, []);

  useEffect(() => {
    if (
      resetPasswordParam &&
      !resetPasswordParam?.isTokenExpired &&
      !resetPasswordParam?.isModalOpen
    ) {
      setIsResetPassword({
        signIn: false,
        resetPass: false,
        forgotPass: true,
      });
      setCookie(
        "reset_token",
        JSON.stringify({
          ...resetPasswordParam,
          isModalOpen: true,
        })
      );
      return null;
    }
    if (resetPasswordParam && resetPasswordParam?.isTokenExpired) {
      setUpdatePwtokenExpire(true);
      removeCookie("reset_token");
      return null;
    }
  }, [resetPasswordParam]);

  useEffect(() => {
    openDrawer();
  }, []);

  return (
    <>
      <div className={styles["auth-form-wrapper"]}>
        <div className={styles["auth-form-modal"]}>
          <div className={styles["tabs"]}>
            {tabHeadings &&
              tabHeadings?.length > 0 &&
              tabHeadings?.map((heading, index) => {
                return (
                  <div
                    key={heading}
                    onClick={() => {
                      setIsResetPassword({
                        signIn: true,
                        resetPass: false,
                        forgotPass: false,
                      });
                      router?.push(index === 0 ? "/sign-in" : "/sign-up");
                    }}
                    className={`${styles["tab"]} ${
                      styles[selectedTab === index?.toString() ? "active" : ""]
                    }`}
                  >
                    {heading}
                  </div>
                );
              })}
          </div>
          <div
            style={{
              display: selectedTab === "0" ? "block" : "none",
            }}
          >
            {isResetPassword?.resetPass || isResetPassword?.forgotPass ? (
              <ResetPasswordForm
                isResetPassword={isResetPassword}
                setSelectedTab={setIsResetPassword}
              />
            ) : null}
            {isResetPassword?.signIn ? (
              <SignInForm setIsResetPassword={setIsResetPassword} />
            ) : null}
          </div>
          <div
            style={{
              display: selectedTab === "1" ? "block" : "none",
            }}
          >
            <SignUpForm setSelectedTab={setSelectedTab} />
          </div>
        </div>
      </div>

      {isOldWebsiteUser && router?.asPath?.includes("sign-in") ? (
        <DeleteConfirmationModal
          isOpen={isOldWebsiteUser}
          showCancelDeleteBtns={false}
          setIsOpen={() => {
            setIsOldWebsiteUser(false);
          }}
        >
          <OldUserModalContent
            setHandleAuthModal={setIsResetPassword}
            setIsOldWebsiteUser={setIsOldWebsiteUser}
          />
        </DeleteConfirmationModal>
      ) : null}

      <DeleteConfirmationModal
        isOpen={updatePwtokenExpire}
        setIsOpen={() => setUpdatePwtokenExpire(false)}
        heading={t("resetPwSessionExpireContent")}
        content=""
        showCancelDeleteBtns={false}
        className="update_pw"
      />
      {emailVerified && (
        <Modal
          modalBodyClassName={styles["verificationModal"]}
          modalWidth={"max-content"}
          modalHeight={"max-content"}
          isOpened={verificationModal}
          onClose={() => {
            setVerificationModal(false);
          }}
          bgBluryModal={true}
        >
          <>
            <div>
              <h3>{t("verificationLinkExpired")}</h3>
              <p>
                {`${t("click")} `}
                <Button
                  buttonStyle={"underline"}
                  isDisabled={clickDisabled}
                  style={{
                    width: "max-content",
                    height: "max-content",
                    padding: "0",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    setClickDisabled(true);
                    const tokenDetails: any = jwt.decode(token);
                    sendVerificationEmail({
                      email: tokenDetails?.email,
                      customerId: tokenDetails?.id,
                      first_name: tokenDetails?.first_name,
                      region: tokenDetails?.region,
                      lang: tokenDetails?.lang,
                      currentDomain: window.location.origin,
                    })
                      .then((verificationEmailRes: any) => {
                        if (verificationEmailRes.emailSent) {
                          const attrPayload: any = [
                            {
                              attribute_id: getStoreAttributeId(
                                storeAttributes,
                                customerAttributesNames?.verificationEmailSent
                              ),
                              value: String(1),
                              customer_id: tokenDetails?.id,
                            },
                          ];
                          updateCustomerAttributeValues(
                            attrPayload,
                            appState?.region
                          )
                            .then(() => {
                              setVerificationModal(false);
                              toast(t("verificationLinkSent"));
                              removeCookie("email-verification");
                              setClickDisabled(false);
                            })
                            .catch((err) => {
                              console.log("Error Updating Customer: ", err);
                              setClickDisabled(false);
                            });
                        }
                      })
                      .catch((err) => {
                        console.log("Error Sending Verification Email: ", err);
                        setClickDisabled(false);
                      });
                  }}
                >
                  {t("here")?.toLocaleLowerCase()}
                </Button>{" "}
                {t("resendVerificationEmail")}
              </p>
            </div>
          </>
        </Modal>
      )}
    </>
  );
};

interface OlduserModalProps {
  setHandleAuthModal: Function;
  setIsOldWebsiteUser: Function;
}

const OldUserModalContent = ({
  setHandleAuthModal,
  setIsOldWebsiteUser,
}: OlduserModalProps) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles["olduser-modal-content"]}>
        <Label className={styles["heading"]}>{t("olduserMessage")}</Label>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            buttonStyle="underline"
            buttonText={t("Reset Password")}
            onClick={() => {
              setHandleAuthModal({
                signIn: false,
                resetPass: true,
                forgotPass: false,
              });
              setIsOldWebsiteUser(false);
            }}
            style={{
              width: "fit-content",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AuthForms;
