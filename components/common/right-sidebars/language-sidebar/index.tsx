import React, { useState, useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import { OptionProps } from "lib/types/mobile-header";
import { convertBrandName } from "lib/utils/constants";
import { LOCATION_ID_AE, LOCATION_ID_SA, LOCATION_ID_EG } from "general-config";
import { useClearData } from "lib/utils/common";
import { LangType } from "lib/types/common";
import UpdatedLanguageSelector from "./updated-lang-selector";

interface LanguageSideBarProps {
  closeSideBar?: Function;
}
const LanguageSideBar = ({
  closeSideBar = () => {},
}: LanguageSideBarProps): JSX.Element => {
  const router = useRouter();
  const { pathname, query, asPath } = router || {
    pathname: "",
    query: "",
    asPath: "",
  };
  const { locale, push } = useRouter() || { locale: "", push: () => {} };
  const { appState, saveAppState } = useContext(AppContext);
  const [region, setRegion] = useState({
    lang: appState?.lang,
    region: appState?.region,
  });
  const locationNumObj: { [key: string]: string } = {
    sa: LOCATION_ID_SA,
    ae: LOCATION_ID_AE,
    eg: LOCATION_ID_EG,
  };
  const { clearData } = useClearData();

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
  };

  const navigateToLocale = async (locale: string, region: string) => {
    clearData(router?.locale?.split("-")[1] !== region);
    push({ pathname, query }, asPath, { locale: locale });
    closeSideBar && closeSideBar();
  };

  return (
    <div className={styles["sidebar__lang-wrapper"]}>
      <UpdatedLanguageSelector
        showButton={true}
        closeSideBar={() => {
          closeSideBar && closeSideBar();
        }}
      />
    </div>
  );
};
export default LanguageSideBar;
