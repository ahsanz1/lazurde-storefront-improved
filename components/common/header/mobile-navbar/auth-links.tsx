import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import { SignOut } from "components/icons";
import Button from "components/common/ui/button";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { useCustomer } from "lib/middleware-apis/customers";
import { useRouter } from "next/router";
import { signUpSignInEvent } from "lib/utils/datalayer-events";

const AuthLinks = (): JSX.Element => {
  const { t } = useTranslation("common");
  const { setMobileMenuOpen } = useContext(AppContext);
  const { logoutMutation, useGetCustomerByGraphQl } = useCustomer();
  const { data: customerData } = useGetCustomerByGraphQl();
  const isLoginUser = customerData?.entityId > 0 ? true : false;
  const router = useRouter();
  const [signUpRedeirected, setSignUpRedirected] = useState(false);
  const [signInRedirected, setSignInRedirected] = useState(false);

  // useEffect(() => {
  //   router.events.on("routeChangeComplete", () => {
  //     setMobileMenuOpen(false)
  //   });

  // }, [router.events]);
  return (
    <>
      <div className={styles["mobile-header__auth-btns"]}>
        {!isLoginUser ? (
          <>
            <Button
              className={styles["signup-btn"]}
              buttonStyle="black"
              buttonText={t("signUp")}
              buttonSize={"xl"}
              isLoading={signUpRedeirected}
              onClick={() => {
                setSignUpRedirected(true)
                router?.push("/sign-up");
                router.events.on("routeChangeComplete", () => {
                  setMobileMenuOpen(false)
                  setSignUpRedirected(false)
                });
              }}
              type={"button"}
            />
            <Button
              className={styles["signin-btn"]}
              buttonStyle="white"
              buttonText={t("signIn")}
              buttonSize={"sm"}
              isLoading={signInRedirected}
              spinnerColor="Black"
              onClick={() => {
                setSignInRedirected(true)
                router?.push("/sign-in");
                router.events.on("routeChangeComplete", () => {
                  setMobileMenuOpen(false)
                  setSignInRedirected(false)
                });
              }}
              type={"button"}
            />
          </>
        ) : (
          <div
            className={styles["mobile-header__signout-btn"]}
            onClick={() => {
              logoutMutation.mutate();
            }}
          >
            <span>{t("signOut")}</span>
            <SignOut fill="#000000" width="20px" height="20px" />
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
