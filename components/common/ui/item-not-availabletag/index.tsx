import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";
import { isDev } from "general-config";

const ItemNotAvailableTag = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["region-based-tag"]}>
      <Image
        width={20}
        height={20}
        src={"/help.png"}
        alt="icon"
        layout="fixed"
        quality={100}
        // unoptimized={isDev}
      />
      <Label className={styles.label}>{t("itemNotAvailabletag")}</Label>
    </div>
  );
};

export default ItemNotAvailableTag;
