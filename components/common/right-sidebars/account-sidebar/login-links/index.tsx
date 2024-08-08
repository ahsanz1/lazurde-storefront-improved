import React, { useContext } from "react";
import styles from "./style.module.scss";
import { Login, ArrowRight, SignOut } from "components/icons";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";
import { accountSideBarLinks } from "lib/mock-data/data";
import Button from "components/common/ui/button";
import { useRouter } from "next/router";
import { AppContext } from "lib/context";
import { useCustomer } from "lib/middleware-apis/customers";
import { redirectToCurrentBrand } from "lib/utils/common";
interface detailsProps {
  label?: string;
}
interface LoggedInlinksProps {
  userName?: string;
  arabicUserName?: string;
  closeSideBar?: Function;
}

const LoggedInlinks = ({
  userName = "",
  arabicUserName = "",
  closeSideBar,
}: LoggedInlinksProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { appState, setMobileMenuOpen } = useContext(AppContext);
  const { logoutMutation } = useCustomer();
  const arabicDataLinks: detailsProps = t(
    "accountSideBarData.accountSideBarLinks",
    {},
    { returnObjects: true }
  );

  return (
    <>
      <div className={styles.links_wrapper}>
        <div className={styles.name}>
          <Login width={40} height={40} fill="#000" />
          <Label testId="username">{`${t("Hi")}, ${userName}`}</Label>
        </div>
        <div className={styles.links}>
          {accountSideBarLinks?.map((link, index) => {
            const { label, value } = link;
            return (
              <div
                className={styles.link_wrapper}
                key={index}
                onClick={() => {
                  if (label.toLowerCase().includes("need help")) {
                    router?.push(`help-centre/order`);
                  } else {
                    router.push({
                      pathname: `${redirectToCurrentBrand(
                        appState?.brandEN
                      )}/account`,
                      query: { tab: value },
                    });
                  }
                  closeSideBar && closeSideBar();
                  setMobileMenuOpen && setMobileMenuOpen(false);
                }}
              >
                <div className={styles.link_btn}>
                  <button>
                    {appState?.lang === "en"
                      ? label
                      : Array.isArray(arabicDataLinks) &&
                        arabicDataLinks[index]?.label}
                  </button>
                </div>
                <div className={styles.icon}>
                  <ArrowRight fill="#000000" width="6px" height="8px" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={styles.signout_btn}
        onClick={() => {
          logoutMutation.mutate();
        }}
      >
        <SignOut fill="#000000" width={20} height={20} />
        <Button
          buttonStyle="underline"
          buttonSize="xsm"
          buttonText={t("signOut")}
        />
      </div>
    </>
  );
};

export default LoggedInlinks;
