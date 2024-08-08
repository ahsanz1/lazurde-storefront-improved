import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import Button from "components/common/ui/button/index";
import useTranslation from "next-translate/useTranslation";
import { LOCATION_ID_AE, LOCATION_ID_SA, LOCATION_ID_EG } from "general-config";
import { useRouter } from "next/router";
import { AppContext } from "lib/context";
import { brandNames, convertBrandName } from "lib/utils/constants";
import { useClearData } from "lib/utils/common";
import { LangType } from "lib/types/common";
import LangCountryOptions from "./lang-country";

type optionProps = { label: string; value: string };

const countryArr = [
  {
    label: "KSA",
    img: "/ksa.svg",
    value: "sa",
    arabicLabel: "السعودية",
  },
  {
    label: "Egypt",
    img: "/egypt.svg",
    value: "eg",
    arabicLabel: "مصر",
  },
  {
    label: "UAE",
    img: "/uae.svg",
    value: "ae",
    arabicLabel: "الإمارات",
  },
];

const wavesCountryArr = [
  {
    label: "KSA",
    img: "/ksa.svg",
    value: "sa",
  },
];

const languageArr = [
  {
    label: "English",
    img: "",
    value: "en",
  },
  {
    label: "عربي",
    img: "",
    value: "ar",
  },
];

const UpdatedLanguageSelector = ({
  showButton,
  className = "",
  mainWrapperClass = "",
  optionClassName = "",
  closeSideBar,
}: {
  showButton?: Boolean;
  className?: string;
  mainWrapperClass?: string;
  optionClassName?: string;
  closeSideBar?: Function;
}): JSX.Element => {
  const router = useRouter();
  const { clearData } = useClearData();
  const [onClickLoading, setOnClickLoading] = useState(false);

  const { pathname, query, asPath, locale } = router || {
    pathname: "",
    query: "",
    asPath: "",
  };
  const { push } = useRouter() || { push: () => { } };
  const { t } = useTranslation("common");
  const locationNumObj: { [key: string]: string } = {
    sa: LOCATION_ID_SA,
    ae: LOCATION_ID_AE,
    eg: LOCATION_ID_EG,
  };
  const { appState, saveAppState } = useContext(AppContext);
  const [region, setRegion] = useState({
    lang: appState?.lang,
    region: appState?.region,
  });

  const navigateToLocale = (locale: string, region: string) => {
    clearData(router?.locale?.split("-")[1] !== region);
    push({ pathname, query }, asPath, { locale: locale });
  };

  const storeAppStateData = (region: { region: string; lang: string }) => {
    const currentBrand = convertBrandName(
      appState?.brand,
      region?.lang as LangType
    );
    saveAppState({
      ...appState,
      region: region?.region,
      lang: region?.lang,
      locale: `${region?.lang}-${region?.region}`,
      locationNum: locationNumObj?.[region?.region],
      brand: currentBrand,
    });

    // setRegion({ lang: region?.lang, region: region?.region });
    navigateToLocale(`${region?.lang}-${region?.region}`, region?.region);
  };

  const submitChanges = () => {
    storeAppStateData(region);
  };

  const onCountryChange = (selectedData: optionProps) => {
    if (!showButton) {
      storeAppStateData({ lang: appState?.lang, region: selectedData?.value });
    }

    setRegion({ lang: region?.lang, region: selectedData?.value });
  };

  const onLanguageChange = (selectedData: optionProps) => {
    if (!showButton) {
      storeAppStateData({
        region: appState?.region,
        lang: selectedData?.value,
      });
    }
    setRegion({ region: region?.region, lang: selectedData?.value });
  };

  const selectedData =
    appState?.brandEN === brandNames.waves ? wavesCountryArr : countryArr;

  const hasDefault = selectedData.find(
    (option) => option?.value === appState?.region
  );

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoading(false);
    });
  }, [router.events]);

  return (
    <div
      id={"langauge-selector"}
      key={appState?.currentLocale}
      data-testid={"main-wrapper"}
      className={`${styles["language-selector"]} ${mainWrapperClass}`}
    >
      <div>
        <div className={styles["country-btns-div"]}>
          <div className={styles["heading"]}>{t("Country")}</div>
          <LangCountryOptions
            options={
              appState?.brandEN === brandNames.waves
                ? wavesCountryArr
                : countryArr
            }
            onChange={onCountryChange}
            defaultValue={
              hasDefault ? appState?.region : selectedData[0]?.value
            }
            className={className}
            optionClassName={optionClassName}
          />
        </div>
        <div className={styles["language-btns-div"]}>
          <div className={styles["heading"]}>{t("language")}</div>
          <LangCountryOptions
            options={languageArr}
            onChange={onLanguageChange}
            defaultValue={appState?.lang}
            className={className}
            optionClassName={optionClassName}
          />
        </div>
      </div>
      <div className={styles["submit-btn"]}>
        {showButton && (
          <div>
            <Button
              type={"button"}
              buttonText={t("Apply")}
              buttonStyle={"black"}
              buttonSize={"xl"}
              isLoading={onClickLoading}
              onClick={async () => {
                setOnClickLoading(true)
                submitChanges();
                router.events.on("routeChangeComplete", () => {
                  closeSideBar();
                  setOnClickLoading(false);
                });
              }}
            ></Button>
          </div>
        )}
        <Button
          type={"button"}
          buttonText={t("Cancel")}
          buttonStyle={"underline"}
          onClick={() => {
            closeSideBar();
          }}
          style={{
            width: "fit-content",
          }}
        />
      </div>
    </div>
  );
};
export default UpdatedLanguageSelector;
