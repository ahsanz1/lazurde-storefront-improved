import React, { MouseEventHandler, useState } from "react";
import Spinner from "../spinner";
import styles from "./button.module.scss";

interface ButtonProps {
  id?: string;
  role?: string;
  className?: string;
  buttonText?: string | Function;
  buttonStyle?:
    | "black"
    | "white"
    | "underline"
    | "transparent"
    | "transparent-white";
  buttonSize?:
    | "xxs"
    | "xsm"
    | "sm"
    | "sm2"
    | "md"
    | "lr"
    | "xl"
    | "xxl"
    | "fill"
    | "inline";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  children?: JSX.Element | string;
  testId?: string;
  isLoading?: boolean;
  spinnerSize?: number;
  spinnerColor?: string;
  style?: object;
  spinnerText?: string;
  spinnerWidth?: number;
  isDisabled?: boolean;
  hover?: boolean;
  hasSpinner?: boolean;
}

const Button = ({
  id = "",
  role = "button",
  className = "",
  type = "button",
  buttonText = "",
  buttonStyle = "black",
  buttonSize = "md",
  children,
  onClick,
  testId = "",
  isLoading = false,
  hasSpinner = true,
  spinnerSize = 16,
  spinnerWidth = 6,
  spinnerColor = "#fff",
  style = {},
  spinnerText = "",
  isDisabled = false,
  hover = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      id={id}
      role={role}
      data-testid={testId || "button"}
      data-style={buttonStyle}
      data-size={buttonSize}
      className={`${styles["button"]} ${className}`}
      onClick={(e) => onClick && onClick(e)}
      type={type}
      style={style}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      data-loading={isLoading}
      data-hover={hover}
    >
      {isLoading ? (
        <div className={styles["div-spinner"]}>
          {spinnerText && (
            <span
              className={styles["spinner-text"]}
              style={{ fontSize: spinnerSize }}
            >
              {spinnerText}
            </span>
          )}
          {hasSpinner ? (
            <Spinner
              width={spinnerSize}
              height={spinnerSize}
              stroke={spinnerWidth}
              color={spinnerColor}
            ></Spinner>
          ) : null}
        </div>
      ) : (
        <>
          {buttonText || ""}
          {children || ""}
        </>
      )}
    </button>
  );
};
export default Button;
