import React, { useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Label from "../ui/label";
import Link from "next/link";
import { AppContext } from "lib/context";

const HelpCenterSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles["need-help-wrapper"]}>
        <hr className={styles["bold-line"]} />
        <div className={styles["need-help-heading"]}>
          <span role="needHelp">{t("needHelp")}</span>
          <Link href={"/help-centre/order"}>
            <a role="helpCenterLink">{t("helpCenter")}</a>
          </Link>
        </div>
        <div className={styles["need-help-points"]}>
          {[1, 2, , 3, 4]?.map((index) => {
            return (
              <Label role="points" key={index}>
                <>{t("dummyText")}</>
              </Label>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HelpCenterSection;
