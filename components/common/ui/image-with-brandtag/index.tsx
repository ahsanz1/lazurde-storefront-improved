import React, { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { brandNames, currentBrandName } from "lib/utils/constants";
import { LazurdeLogo, MisslLogo, WavesLogo } from "components/icons";
import { AppContext } from "lib/context";
import { isDev } from "general-config";
interface ImageWithBrandTagProps {
  imageSrc?: string;
  alt?: string;
  brand?: string;
  width?: string | number;
  mobileImgWidth?: string | number;
  height?: string | number;
  onClick?: Function;
  imgWrapperWidth?: string | number;
  isAvailable?: boolean;
}

const ImageWithBrandTag = ({
  imageSrc = "",
  imgWrapperWidth = "100",
  alt = "image",
  brand = "",
  width = "100",
  height = "100",
  onClick = () => {},
  isAvailable = true,
}: ImageWithBrandTagProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  return (
    <div
      className={styles["img-wrapper"]}
      onClick={() => {
        onClick && onClick();
      }}
      style={{
        width: imgWrapperWidth,
      }}
    >
      <Image
        alt={alt}
        title={alt}
        src={imageSrc || "/"}
        width={width}
        height={height}
        layout="fixed"
        quality={100}
        // unoptimized={isDev}
      />
      {brand !== "" && isAvailable ? (
        <div
          className={`${styles["image_tag"]} ${
            styles[
              `${
                brand === currentBrandName("missl", appState?.lang).brandEN
                  ? "bg_missl"
                  : brand === currentBrandName("waves", appState?.lang).brandEN
                  ? "bg_waves"
                  : "bg_lazurde"
              }`
            ]
          }`}
        >
          {brand == currentBrandName("missl", appState?.lang).brand ? (
            <MisslLogo width="100" height="10" />
          ) : brand == currentBrandName("waves", appState?.lang).brand ? (
            <WavesLogo width="100" height="18" />
          ) : (
            <LazurdeLogo width="100" height="8" />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ImageWithBrandTag;
