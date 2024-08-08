import React, { useState, useEffect, useContext } from "react";
import styles from "./navbar-lang-selector.module.scss";
import Cross from "../../../icons/Cross";
import useTranslation from "next-translate/useTranslation";
import LanguageSelector from "./../../language-selector/index";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { AppContext } from "lib/context";
import { getBrandKey } from "lib/utils/constants";

const LangSelector = (): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [isClosed, setIsClosed] = useState("true");
  const { t } = useTranslation("common");
  const [width] = useWindowSize();

  useEffect(() => {
    const header: any = document.querySelector("#main-header");
    if (header) {
      if (isClosed) {
        header.style.height =
          width < desktopScreenSize
            ? "106px"
            : getBrandKey(appState.brandEN) === "lazurde"
            ? "184px"
            : "205px";
      } else {
        header.style.height =
          getBrandKey(appState.brandEN) === "lazurde" ? "256px" : "277px";
      }
    }
  }, [isClosed]);

  useEffect(() => {
    setIsClosed(
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("lang-selector-visible"))
        : "false"
    );
  }, []);

  const hideSelector = () => {
    setIsClosed("true");
    typeof window !== "undefined" &&
      window.localStorage.setItem("lang-selector-visible", "true");
  };

  return (
    <div
      id={"navbar-lang"}
      className={styles["navbar-lang"]}
      data-visible={isClosed}
      data-testid="product-card"
    >
      <div className={styles["main-section"]}>
        <div className={styles["title"]}>
          <span>{t("NavbarLangSelectorTitle")} </span>
        </div>
        <div className={styles["selector"]}>
          <LanguageSelector
            mainWrapperClass={styles["navbar-lang-bar"]}
            showButton={true}
            onSubmit={hideSelector}
            optionClassName={styles["selector-input"]}
          />
        </div>
      </div>
      <button
        className={styles["closeButton"]}
        type="button"
        onClick={() => {
          setIsClosed("true");
          typeof window !== "undefined" &&
            window.localStorage.setItem("lang-selector-visible", "true");
        }}
      >
        <Cross width={"20px"} height={"20px"} />
      </button>
    </div>
  );
};

export default LangSelector;
