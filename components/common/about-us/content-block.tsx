import React, { FC, useContext } from "react";
import useWindowSize from "lib/utils/useWindowSize";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import Heading from "components/common/ui/heading";
import { desktopScreenSize } from "lib/utils/common";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";

type ContentBlockTypes = {
  imageOne?: ImageType;
  imageTwo?: ImageType;
  heading?: string;
  content?: string;
  className?: string;
  midSection?: boolean;
  isReverse?: boolean;
};

const ContentBlock: FC<ContentBlockTypes> = ({
  imageOne = {},
  imageTwo = {},
  heading = "",
  content = "",
  className = "",
  midSection = false,
  isReverse = false,
}): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [size] = useWindowSize();

  return (
    <>
      <div
        className={`${styles["content-block-wrapper"]} ${styles[className]} ${
          styles[isReverse ? "reverse-row-c" : ""]
        }`}
      >
        {imageOne?.url ? (
          <div className={styles["mid-section-img-left"]}>
            <Image
              src={imageOne?.url || "/"}
              layout={midSection ? "responsive" : "fill"}
              width={
                midSection && size < desktopScreenSize
                  ? 40
                  : midSection
                  ? 100
                  : null
              }
              height={
                midSection && size < desktopScreenSize
                  ? 65.5
                  : midSection
                  ? 100
                  : null
              }
              quality={100}
              alt={imageOne?.altText}
            />
          </div>
        ) : null}

        <div className={styles["content"]}>
          <Heading element="h2" className={styles["sec-heading"]}>
            {heading}
          </Heading>
          <Label>
            <p
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></p>
          </Label>
        </div>
        {imageTwo?.url ? (
          <div className={styles["mid-section-img-right"]}>
            <Image
              src={imageTwo?.url || "/"}
              layout={"responsive"}
              width={
                midSection && size < desktopScreenSize
                  ? 60
                  : midSection
                  ? 100
                  : 50
              }
              height={
                midSection && size < desktopScreenSize
                  ? 68
                  : midSection
                  ? 100
                  : 32.3
              }
              quality={100}
              alt={imageTwo?.altText}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ContentBlock;
