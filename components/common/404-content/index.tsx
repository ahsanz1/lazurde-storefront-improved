import React, { useContext, useEffect, useState } from "react";
import styles from "/styles/404.module.scss";
import Label from "../ui/label";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import { brandNames } from "lib/utils/constants";
import useTranslation from "next-translate/useTranslation";
import { getBloomreachImg } from "lib/utils/common";

const PageNotFoundContent = ({ page, component }: any) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const [brandUrl, setBrandUrl] = useState("/");
  const getContent = component?.getContent(page);
  const {
    title = "",
    content,
    goBackLinkText,
    homeLinkText,
    linksContent,
    accountLinkText,
    image: errorPageImg,
  } = getContent || {};
  const image = getBloomreachImg(page, errorPageImg);
  useEffect(() => {
    const redriectUrl =
      appState?.brandEN === brandNames?.missl
        ? "/miss-l"
        : appState?.brandEN === brandNames.waves
        ? "/waves"
        : "/";
    redriectUrl && setBrandUrl(redriectUrl);
  }, [appState?.brandEN]);

  return (
    <div className={styles["container-404"]}>
      <Label testId="heading" className={styles["title-404"]}>
        {title}
      </Label>
      {errorPageImg ? (
        <Image
          className={styles["image-404"]}
          src={image?.imgUrl || "/"}
          alt={image?.altText || "404 Image"}
          width="545"
          height="207"
        />
      ) : null}
      <Label className={styles["text-404"]}>{content}</Label>
      <div className={styles["link-section"]}>
        {/* <div className={styles["links-link"]}>
          <Link href={brandUrl}>
            <a
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
              role="go-back-btn"
            >
              {t("404goback")}
            </a>
          </Link>
        </div> */}
        <Label className={styles["link-label"]}>{goBackLinkText}</Label>
      </div>
      <Label className={styles["text-404"]}>{linksContent}</Label>
      {/* <div className={styles["link-section"]}>
        <div className={styles["links-link"]}>
          <Link href={brandUrl}>
            <a>{homeLinkText}</a>

          </Link>
        </div> */}
      {/* <span className={styles["seperator"]}></span>
        <div className={styles["links-link"]}>
          <Link href="/account">
            <a role="account-link">{accountLinkText}</a>
          </Link>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default PageNotFoundContent;
