import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import Login from "components/icons/login";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import LoggedInlinks from "./login-links";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { translateText } from "lib/utils/reviews";
import { useCustomer } from "lib/middleware-apis/customers";
import { useRouter } from "next/router";
interface arabicDataProps {
  heading?: string;
  subHeading?: string;
}
interface AccountSidebarProps {
  closeSideBar?: Function;
}

const AccountSidebar = ({ closeSideBar }: AccountSidebarProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState, setHandleAuthModal } = useContext(AppContext);
  const [arabicUserName, setArabicUserName] = useState("");
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const isLoginUser = customerData?.entityId > 0 ? true : false;
  const userName = customerData?.firstName;
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const arabicData: arabicDataProps = t(
    "accountSideBarData",
    {},
    { returnObjects: true }
  );

  useEffect(() => {
    if (appState?.lang === "ar") {
      handleUserNameTranslation();
    }
  }, [appState?.lang]);


  router.events.on("routeChangeComplete", () => {
    setOnClickLoading(false)
    setIsLoading(false)
  });

  const handleUserNameTranslation = async () => {
    if (userName) {
      const res = await translateText(userName, "ar");
      if (res.hasError === false) {
        setArabicUserName(
          res?.response?.data?.data?.translations[0]?.translatedText
        );
      } else {
        console.log("error while translate username to arabic");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      {!isLoginUser ? (
        <div className={styles.content}>
          <div>
            <Login width={40} height={40} fill="#000" />
            <Heading testId="title" className={styles.heading} element="h1">
              {appState?.lang === "en"
                ? "Sign In or Create an Account"
                : arabicData?.heading}
            </Heading>
            <Label testId="subheading" className={styles.label}>
              {appState?.lang === "en"
                ? `With an account you can check out faster, view your online order
              history and access your shopping bag or saved items from any
              device.`
                : arabicData?.subHeading}
            </Label>
          </div>
          <div className={styles.auth_btns}>
            <Button
              buttonSize={"xl"}
              buttonText={t("signUp")}
              isLoading={isLoading}
              onClick={(e) => {
                setIsLoading(true)
                e.preventDefault();
                router?.push("/sign-up");
              }}
            />
            <Button
              buttonSize={"xsm"}
              buttonStyle="underline"
              buttonText={t("signIn")}
              isLoading={onClickLoading}
              spinnerColor="Black"
              onClick={() => {
                setOnClickLoading(true)
                router?.push("/sign-in");
              }}
            />
          </div>
        </div>
      ) : (
        <LoggedInlinks
          userName={userName}
          arabicUserName={arabicUserName}
          closeSideBar={closeSideBar}
        />
      )}
    </div>
  );
};
export default AccountSidebar;
