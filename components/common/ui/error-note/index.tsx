import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";

interface ErrorNoteProps {
  label?: string;
  iconUrl?: string;
  btnText?: string;
  isLink?: boolean;
  redirectLink?: string;
  onClick?: Function;
  testId?: string;
}

const ErrorNote = ({
  label = "",
  iconUrl = "",
  btnText = "",
  isLink = false,
  redirectLink = "",
  onClick = () => {},
  testId = "",
}: ErrorNoteProps): JSX.Element => {
  return (
    <div className={styles["content"]}>
      <div className={styles["img"]}>
        <Image
          alt="icon"
          src={iconUrl || "/help.png"}
          width={20}
          height={20}
          layout="fixed"
        />
      </div>
      <div className={styles["detail"]}>
        <Label className={styles["label"]}>{label}</Label>
        {isLink ? (
          <Link href={redirectLink || "/"}>
            <a className={styles["link-text"]}>{btnText}</a>
          </Link>
        ) : (
          <Button
            className={styles["link-text"]}
            buttonText={btnText}
            buttonStyle="underline"
            onClick={() => {
              onClick && onClick();
            }}
            testId={testId}
            style={{
              width: "fit-content",
              height: "auto",
              padding: "0",
              background: "transparent",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ErrorNote;
