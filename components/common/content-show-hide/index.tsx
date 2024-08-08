import React, { useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";

interface ParagraphWithMoreLess {
  text?: string;
  textLength?: number;
  key?: number | string;
  className?: string;
  style?: { [key: string]: string | number };
}

const ParagraphWithMoreLess = ({
  text = "",
  textLength = 86,
  key = "",
  className = "",
  style,
}: ParagraphWithMoreLess) => {
  const { t } = useTranslation("common");
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = showFullText
    ? text
    : text?.slice(0, textLength) + (text?.length > textLength ? "..." : "");

  return (
    <div className={styles["content-div"]}>
      {/* <h2
        key={key}
        className={className}
        style={{
          ...style,
        }}
      > */}
      <p
        key={key}
        className={className}
        style={{
          ...style,
          display: "inline",
        }}
        dangerouslySetInnerHTML={{ __html: truncatedText }}
      ></p>
      {/* </h2> */}
      {text?.length > textLength && (
        <button onClick={toggleText}>
          {showFullText ? t("less") : t("more")}
        </button>
      )}
    </div>
  );
};

export default ParagraphWithMoreLess;
