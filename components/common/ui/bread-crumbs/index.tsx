import { useContext, useEffect, useState } from "react";
import { AppContext } from "lib/context";
import Link from "next/link";
import styles from "./style.module.scss";
import { brandNames } from "lib/utils/constants";
import Label from "../label";

const BreadCrumbs = ({
  parent,
  parentLink = "/",
  child,
  showBrand = true,
  className = "",
  isDangerouslySetInnerHTML = false,
}: {
  parent?: string;
  parentLink?: string;
  child?: string;
  showBrand?: boolean;
  className?: string;
  isDangerouslySetInnerHTML?: boolean;
}) => {
  const { appState } = useContext(AppContext);
  const [link, setLink] = useState("/");

  useEffect(() => {
    const redriectBreadCrumbs =
      appState?.brandEN === brandNames?.missl
        ? "/miss-l"
        : appState?.brandEN === brandNames.waves
        ? "/waves"
        : "/";
    redriectBreadCrumbs && setLink(redriectBreadCrumbs);
  }, [appState?.brandEN]);

  return (
    <div
      className={`${styles["bread-crumb_wrapper"]} ${styles[className]}`}
      data-div-order="1"
    >
      <div className={styles["bread-crumb_item"]}>
        {showBrand ? (
          <Link href={link} prefetch={false}>
            <a>{appState?.brand}</a>
          </Link>
        ) : null}
        {parent ? (
          <>
            &nbsp;
            <Link href={`${parentLink}`} prefetch={false}>
              <a>{`${showBrand ? "/" : ""} ${parent}`}</a>
            </Link>
          </>
        ) : null}
        {child && !isDangerouslySetInnerHTML ? (
          <Label>&nbsp;{`/ ${child}`}</Label>
        ) : null}
        {child && isDangerouslySetInnerHTML ? (
          <div className={styles["child-div"]}>
            <span>{"/"}</span>
            <p
              className={styles["child"]}
              dangerouslySetInnerHTML={{ __html: child }}
            ></p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BreadCrumbs;
