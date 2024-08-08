/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import styles from "./style.module.scss";
import CloseIcon from "components/icons/CloseIcon";
import SeeMoreIcon from "components/icons/SeeMoreIcon";
import useTranslation from "next-translate/useTranslation";
interface AccordionProps {
  className?: string;
  index?: number;
  children?: string | JSX.Element;
  contentClassName?: string;
}

const AccordionData = ({
  className = "",
  index = 0,
  children,
  contentClassName = "",
}: AccordionProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation("common");

  return (
    <div
      tabIndex={index}
      className={`${styles["wrapper"]} ${styles[className]}`}
    >
      <div
        className={`${styles["custom-content"]} ${styles[contentClassName]}`}
        data-opened={isOpened}
      >
        {children}
      </div>
      <div
        className={`${styles["div-content"]}`}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <div className={styles["content-manage-link"]}>
          {isOpened ? <CloseIcon /> : <SeeMoreIcon />}
          {isOpened ? t("close") : t("seeMore")}
        </div>
      </div>
    </div>
  );
};
export default AccordionData;
