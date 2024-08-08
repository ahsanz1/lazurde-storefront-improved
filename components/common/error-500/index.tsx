import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Heading from "../ui/heading";
import { error500Img } from "lib/utils/constants";

const Error500 = () => {
    const { t } = useTranslation("common");


    return (
        <div className={styles["container-500"]}>

            <Heading className={styles["title-500"]} element="h1">{t("404Title")}</Heading>
            <div className={styles["inner-img"]}>
                <Image
                    src={error500Img?.imgUrl || "/"}
                    alt={error500Img?.altText}
                    width="545"
                    height="207"
                // unoptimized={isDev}
                />
            </div>
            <span className={styles["text-500"]}>{t("somethingWentWrong")}</span>
            <span className={styles["previous-page-lable"]}>{t("404previousPage")}</span>
            <span className={styles["link-lable-500"]}>{t("404linkDetail")}</span>

        </div>
    );
};

export default Error500;
