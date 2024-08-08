import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import Select from "../ui/select";
import Button from "components/common/ui/button/index";
import useTranslation from "next-translate/useTranslation";
import { LOCATION_ID_AE, LOCATION_ID_SA, LOCATION_ID_EG } from "general-config";
import { useRouter } from "next/router";

import { AppContext } from "lib/context";
import {
  brandNames,
  convertBrandName,
  currentBrandName,
} from "lib/utils/constants";
import { useClearData } from "lib/utils/common";
import { LangType } from "lib/types/common";

type optionProps = { label: string; value: string };

const countryArr = [
  {
    label: "Egypt",
    img: "/flag-egypt.png",
    value: "eg",
  },
  {
    label: "UAE",
    img: "/flag-uae.png",
    value: "ae",
  },
  {
    label: "KSA",
    img: "/flag-sa.png",
    value: "sa",
  },
];

const wavesCountryArr = [
  {
    label: "KSA",
    img: "/flag-sa.png",
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

const LanguageSelector = ({
  showButton,
  className = "",
  mainWrapperClass = "",
  optionClassName = "",
  onSubmit,
}: {
  showButton?: Boolean;
  className?: string;
  mainWrapperClass?: string;
  optionClassName?: string;
  onSubmit?: Function;
}): JSX.Element => {
  const router = useRouter();
  const { clearData } = useClearData();

  const { pathname, query, asPath, locale } = router || {
    pathname: "",
    query: "",
    asPath: "",
  };
  const { push } = useRouter() || { push: () => {} };
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

  useEffect(() => {
    setRegion({
      lang: appState?.lang,
      region: appState?.region,
    });
  }, [appState?.region, appState?.lang]);

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

  return (
    <div
      id={"langauge-selector"}
      key={appState?.currentLocale}
      data-testid={"main-wrapper"}
      className={`${styles["language-selector"]} ${mainWrapperClass}`}
    >
      <Select
        options={
          appState?.brandEN === brandNames.waves ? wavesCountryArr : countryArr
        }
        onChange={onCountryChange}
        defaultValue={hasDefault ? appState?.region : selectedData[0]?.value}
        className={className}
        optionClassName={optionClassName}
      ></Select>
      <Select
        options={languageArr}
        onChange={onLanguageChange}
        defaultValue={appState?.lang}
        className={className}
        optionClassName={optionClassName}
      ></Select>
      {showButton && (
        <div className={styles["submit-btn"]}>
          <Button
            type={"button"}
            buttonText={t("Continue")}
            buttonStyle={"black"}
            buttonSize={"sm"}
            onClick={() => {
              submitChanges();
              onSubmit && onSubmit();
            }}
          ></Button>
        </div>
      )}
    </div>
  );
};
export default LanguageSelector;
