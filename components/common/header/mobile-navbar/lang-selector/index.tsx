import React, { useState, useContext, useEffect } from "react";
import styles from "../style.module.scss";
import { langSelectData, wavesLangSelectData } from "lib/mock-data/data";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import { OptionProps } from "lib/types/mobile-header";
import { LOCATION_ID_AE, LOCATION_ID_SA, LOCATION_ID_EG } from "general-config";
import LanguageSelector from "./select-dropdown";
import { brandNames, convertBrandName } from "lib/utils/constants";
import Image from "next/image";
import { ArrowRight, Globe } from "components/icons";
import { LangType } from "lib/types/common";
import { useClearData } from "lib/utils/common";

interface MobileLanguageSelectorProps {
  languageSelectorOpen?: boolean;
  setLanguageSelectorOpen?: Function;
  closeMenu?: Function;
}

const MobileLanguageSelector = ({
  languageSelectorOpen = false,
  setLanguageSelectorOpen = () => {},
  closeMenu = () => {},
}: MobileLanguageSelectorProps): JSX.Element => {
  const [selectedVal, setSelectedVal] = useState<OptionProps>();
  const router = useRouter();
  const { pathname, query, asPath } = router || {
    pathname: "",
    query: "",
    asPath: "",
  };
  const { push } = useRouter() || { locale: "", push: () => {} };
  const { appState, saveAppState } = useContext(AppContext);
  const [region, setRegion] = useState({
    lang: appState?.lang,
    region: appState?.region,
  });
  const { clearData } = useClearData();
  const locationNumObj: { [key: string]: string } = {
    sa: LOCATION_ID_SA,
    ae: LOCATION_ID_AE,
    eg: LOCATION_ID_EG,
  };

  // useEffect(() => {
  //   storeAppStateData(region);
  // }, [region]);

  const storeAppStateData = (region: { region: string; lang: string }) => {
    const currrenBrand = convertBrandName(
      appState?.brand,
      region?.lang as LangType
    );
    saveAppState({
      ...appState,
      region: region?.region,
      lang: region?.lang,
      locale: `${region?.lang}-${region?.region}`,
      locationNum: locationNumObj?.[region?.region],
      brand: currrenBrand,
    });
    navigateToLocale(`${region?.lang}-${region?.region}`, region?.region);
  };

  const handleSelect = (selectedData: OptionProps) => {
    const _selectedData = selectedData?.value.split("-");
    storeAppStateData({
      region: _selectedData[1],
      lang: _selectedData[0],
    });
    setRegion({
      region: _selectedData[1],
      lang: _selectedData[0],
    });
    setLanguageSelectorOpen(false);
  };

  const navigateToLocale = (locale: string, region: string) => {
    clearData(router?.locale?.split("-")[1] !== region);
    push({ pathname, query }, asPath, { locale: locale });
  };

  return (
    <div className={styles["mobile-header__lang-wrapper"]}>
      <div className={styles["lang-selected-val"]}>
        <span
          className={styles["mobile-header__lang-selected"]}
          onClick={() => {
            setLanguageSelectorOpen(!languageSelectorOpen);
          }}
        >
          <div className={styles["mobile-header__lang-left-side"]}>
            {/* {selectedVal?.img && (
              <Image
                src={selectedVal?.img || "/flag-uae.svg"}
                width={20}
                height={20}
                alt="image"
                layout="fixed"
              />
            )} */}
            <Globe fill="#000" />
            <span>{selectedVal?.label}</span>{" "}
            <div>
              <span className={styles["divider"]}>|</span>
              {selectedVal?.langTitle && (
                <span className={styles["lang"]}>{selectedVal?.langTitle}</span>
              )}
            </div>
          </div>
          {/* <div className={styles["mobile-header__lang-right-side"]}>
            {selectedVal?.langTitle && (
              <span className={styles["mr-26"]}>{selectedVal?.langTitle}</span>
            )}
            <ArrowRight className={styles["dropdown-arrow"]} />
          </div> */}
        </span>
      </div>

      <LanguageSelector
        options={
          appState?.brandEN === brandNames.waves
            ? wavesLangSelectData
            : langSelectData
        }
        onChange={handleSelect}
        defaultValue={appState?.currentLocale}
        iconWidth={32}
        selectedVal={selectedVal}
        setSelectedVal={setSelectedVal}
        isOpen={languageSelectorOpen}
        setIsOpen={setLanguageSelectorOpen}
        closeMenu={closeMenu}
      />
    </div>
  );
};
export default MobileLanguageSelector;
