import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { CustomerCare, Calendar, Account, Location } from "components/icons";
import AuthLinks from "./auth-links";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import MobileLanguageSelector from "./lang-selector";
import { useRouter } from "next/router";
import { brandNames } from "lib/utils/constants";
import Spinner from "components/common/ui/spinner";

interface UserLinksProps {
  handleAccountSidebar?: Function;
  languageSelectorOpen?: boolean;
  setLanguageSelectorOpen?: Function;
  closeMenu?: Function;
}

const UserLinks = ({
  handleAccountSidebar = () => { },
  languageSelectorOpen = false,
  setLanguageSelectorOpen = () => { },
  closeMenu = () => { },
}: UserLinksProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState, setMapModalOpen } = useContext(AppContext);
  const router = useRouter();
  const [onClickLoadingOne, setOnClickLoadingOne] = useState(false);
  const [onClickLoadingTwo, setOnClickLoadingTwo] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoadingOne(false);
      closeMenu();
    });

  }, [router.events]);

  return (
    <div className={styles["mobile-header__user-links"]}>
      <ul>
        <li className={styles["mobile-header__user-links-item"]}>
          <Link href={""}>
            <a
              onClick={(e) => {
                setOnClickLoadingOne(true)
                e.preventDefault();
                // closeMenu();
                router.push("/contact-us");
              }}
            >
              <CustomerCare width="16.67px" height="15.42px" fill="#000" />

              {onClickLoadingOne ? (
                <span>
                  {t("customerCareText")} ...{" "}
                  <Spinner
                    width={14}
                    height={14}
                    color="Black"
                  />
                </span>
              ) : (
                <span>{t("customerCareText")}</span>
              )}
            </a>
          </Link>
        </li>
        {/*---do not delete below commented code---*/}
        {/* <li className={styles["mobile-header__user-links-item"]}>
          <Link href={"/"}>
            <a>
              <Calendar width="20px" height="20px" fill="#000" />
              <span>
                {appState?.lang === "en"
                  ? "Book an Appointment"
                  : t("bookAnAppointmentText")}
              </span>
            </a>
          </Link>
        </li> */}
        <li className={styles["mobile-header__user-links-item"]}>
          <Link href={""}>
            <a
              onClick={(e) => {
                e.preventDefault();
                // closeMenu();
                handleAccountSidebar && handleAccountSidebar();
              }}
            >
              <Account width="20px" height="20px" fill="#000" />
              <span>{t("accountPage")}</span>
            </a>
          </Link>
        </li>
        {appState?.region === "ae" ? null : (
          <li className={styles["mobile-header__user-links-item"]}>
            <Link href={""}>
              <a
                onClick={(e) => {
                  setOnClickLoadingTwo(true)
                  e.preventDefault();
                  // closeMenu();
                  router.push(
                    appState?.brandEN === brandNames?.missl
                      ? "/miss-l/store-locations"
                      : "/store-locations"
                  );
                }}
              >
                <Location width="20px" height="20px" fill="#000" />

                {onClickLoadingTwo ? (
                  <span>
                    {t("storeLocatorText")} ...{" "}
                    <Spinner
                      width={14}
                      height={14}
                      color="Black"
                    />
                  </span>
                ) : (
                  <span>{t("storeLocatorText")}</span>
                )}
              </a>
            </Link>
          </li>
        )}
      </ul>
      <MobileLanguageSelector
        languageSelectorOpen={languageSelectorOpen}
        setLanguageSelectorOpen={setLanguageSelectorOpen}
        closeMenu={closeMenu}
      />
      <AuthLinks />
    </div>
  );
};
export default UserLinks;
