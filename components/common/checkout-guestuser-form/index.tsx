import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import SignInForm from "components/common/auth-forms/signin-form";
import Button from "components/common/ui/button";
import Heading from "components/common/ui/heading";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useCustomer } from "lib/middleware-apis/customers";
import NeedHelpSection from "../need-help-section";

const CheckoutGuestUserAuthForm = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { customerLoginJWT } = useCustomer();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setCheckoutLoading(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        setCheckoutLoading(false);
      });
    };
  }, [router.events]);

  return (
    <div className={styles["guest-user-form_wrapper"]}>
      <div className={styles["top-wrapper"]}>
        <div className={styles["left-side"]}>
          <Heading element="h3" className={styles["heading"]}>
            {t("registeredCustomers")}
          </Heading>
          <SignInForm
            isCheckout={true}
            className={styles["guest-user-signin"]}
            inputDivClass={styles["input-div"]}
          />
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["right-side"]}>
          <Heading element="h3" className={styles["heading"]}>
            {t("guestNewCustomers")}
          </Heading>
          <Button
            buttonText={t("checkout")}
            buttonSize="xl"
            onClick={async () => {
              setCheckoutLoading(true);
              router.push(await customerLoginJWT());
            }}
            isLoading={checkoutLoading}
            spinnerColor="#fff"
          />
        </div>
      </div>
      <NeedHelpSection />
    </div>
  );
};

export default CheckoutGuestUserAuthForm;
