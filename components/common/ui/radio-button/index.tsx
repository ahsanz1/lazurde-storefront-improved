import React, { FC, useState, useRef, ReactComponentElement } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";

import styles from "./radioButton.module.scss";

type RadioButtonProps = {
  className?: string | "";
  name?: string | "";
  defaultChecked?: boolean;
  icon?: iconProps;
  width?: string | "";
  height?: string | "";
  multipleIcons?: ImageProps[];
  onChange?: Function;
  label?: string | "";
  checked?: boolean;
  description?: string | "";
  iconsClassName?: string | "";
};

type ImageProps = {
  url?: JSX.Element | string | "";
  altText?: string | "";
  width?: string | "";
  height?: string | "";
};

type iconProps = {
  url?: string;
  text?: string;
  width?: string | number;
  height?: string | number;
};

const RadioButton: FC<RadioButtonProps> = ({
  className = "",
  onChange = (value: string) => {},
  label = "",
  name = "",
  icon,
  multipleIcons,
  checked = false,
  description = "",
  iconsClassName = "",
}): JSX.Element => {
  return (
    <div className={`${styles["radio-wrapper"]} ${className}`}>
      <label className={styles["main-wrapper"]}>
        <input
          className={styles["radio-select"]}
          type="radio"
          name={name}
          id={name}
          checked={checked}
          onChange={() => {
            onChange && onChange();
          }}
        />
        <div className={`${styles["data-input"]}`}>
          <div className={styles["data-label"]}>
            <span>{label}</span>
          </div>
          {description ? (
            <div className={styles["data-description"]}>
              <span>{description}</span>
            </div>
          ) : null}
        </div>
        <div className={`${styles["multi-icons"]} ${iconsClassName}`}>
          {multipleIcons ? (
            multipleIcons?.map((img, i) => {
              return img?.url ? (
                <div key={i} className={styles["icon"]}>
                  {img?.url}
                </div>
              ) : null;
            })
          ) : (
            <>
              {icon ? (
                <div className={styles["checkbox-icon"]}>
                  {" "}
                  <Image
                    src={icon?.url}
                    alt=""
                    layout="fixed"
                    width={icon?.width || 20}
                    height={icon?.height || 20}
                  />
                </div>
              ) : null}
            </>
          )}
        </div>
      </label>
    </div>
  );
};

export default RadioButton;
