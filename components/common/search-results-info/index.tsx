import React, { FC, useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
// import useTranslation from "next-translate/useTranslation";
interface SearchResultsInfoProps {
  searchTerm: string;
  totalItems: number;
  hasFilteredData: boolean;
  isEmptyArray: boolean;
  isLoading: boolean;
}
const SearchResultsInfo: FC<SearchResultsInfoProps> = ({
  searchTerm,
  totalItems,
  hasFilteredData = false,
  isEmptyArray = false,
  isLoading = false,
}) => {
  const { appState } = useContext(AppContext); // const { t } = useTranslation("common");
  const { t } = useTranslation("common");
  return (
    <div
      className={styles["search-results-info-wrapper"]}
      data-show={searchTerm || false}
    >
      <p data-show={(searchTerm && !hasFilteredData && !isLoading) || false}>
        {appState?.lang === "en"
          ? `We have found ${totalItems} results for `
          : `عن ${totalItems} تائج البحث`}
        <strong>{`"${searchTerm}"`}</strong>
      </p>
      {/* <div data-show={isEmptyArray && totalItems < 1}>
        <p className={styles["need-help"]}>{t("Need Help?")}</p>
        <p className={styles["contact-us"]}>
          <strong>{t("Contact Us ")}</strong> {t("Customer Service ")}
        </p>
      </div> */}
    </div>
  );
};

export default SearchResultsInfo;
