import React, { useContext } from "react";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { isDev } from "general-config";

interface NeedHelpSectionProps {
  className?: string;
  style?: { [key: string]: string };
}

const NeedHelpSection = ({ className = "", style }: NeedHelpSectionProps) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);

  const returnDays: any = {
    sa: `15 ${t("daysReturn")}`,
    ae: `15 ${t("daysReturn")}`,
    eg: `30 ${t("daysReturn")}`,
  };

  const valuPoint = () => {
    return (
      <p>
        {t("valuPoint")}{" "}
        <b
          style={{
            paddingInlineStart: "5px",
          }}
        >
          {t("Buy with")}
        </b>{" "}
        <figure>
          <Image
            src="/valu.png"
            width={84}
            height={28}
            layout="fixed"
            alt="valu"
            quality={100}
            // unoptimized={isDev}
          />
        </figure>
      </p>
    );
  };

  const tamaraPoint = () => {
    return (
      <p>
        {t("tamaraPoint")}{" "}
        <figure>
          <Image
            src="/tamara.png"
            width={60}
            height={22}
            layout="fixed"
            alt="tamara"
            quality={100}
            // unoptimized={isDev}
          />
        </figure>
      </p>
    );
  };

  const tabbyPoint = () => {
    return (
      <p>
        {t("tabbyPoint")}{" "}
        <figure>
          <Image
            src="/tabby.png"
            width={60}
            height={21}
            layout="fixed"
            alt="tabby"
            quality={100}
            // unoptimized={isDev}
          />
        </figure>
      </p>
    );
  };

  return (
    <div
      className={`${styles["need-help-wrapper"]} ${styles[className]}`}
      style={style}
    >
      {/* <hr className={styles["bold-line"]} /> */}
      <div className={styles["static-content-wrapper"]}>
        {/* <RenderPoints
          heading={t("Need Help?")}
          anchor={true}
          anchorText={t("Contact our customer service")}
          redirectLink={`/contact-us`}
        /> */}
        <RenderPoints heading={t("return")} text={t("returnnote")} />
        {/* <div className={styles["need-help-point"]}>
          <h2 role="needhelp">{t("payment")}</h2>
          {appState?.region === "eg" && valuPoint()}
          {appState?.region === "sa" && (
            <>
              {tamaraPoint()}
              {tabbyPoint()}
            </>
          )}
          {appState?.region === "ae" && tabbyPoint()}
        </div> */}
      </div>
    </div>
  );
};

const RenderPoints = ({
  heading = "",
  text = "",
  anchor = false,
  anchorText = "",
  redirectLink = "",
}) => {
  return (
    <>
      <div className={styles["need-help-point"]}>
        <h2 role="needhelp">{heading}</h2>
        {anchor ? (
          <Link href={redirectLink}>
            <a>{anchorText}</a>
          </Link>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </>
  );
};

export default NeedHelpSection;
