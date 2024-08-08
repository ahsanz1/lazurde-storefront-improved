import React from "react";
import styles from "./spinner.module.scss";

interface SpinnerProps {
  width: number;
  height: number;
  stroke: number;
  className: string;
  color: string;
}

const Spinner = ({
  width = 20,
  height = 20,
  stroke = 6,
  className = "",
  color = "#000",
}) => {
  return (
    <>
      <SpinnerTwo
        width={width}
        height={height}
        stroke={stroke}
        className={className}
        color={color}
      />
    </>
  );
};

export default Spinner;

const SpinnerOne = ({
  width,
  height,
  stroke,
  className,
  color,
}: SpinnerProps): JSX.Element => {
  return (
    <div
      className={`${styles["div-spinner"]} ${styles[className]}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderStyle: "solid",
        borderWidth: `${stroke}px`,
        borderColor: ` ${color} ${color} transparent`,
      }}
    ></div>
  );
};

const SpinnerTwo = ({
  width,
  height,
  stroke,
  className,
  color,
}: SpinnerProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`${styles["svg-spinner"]} ${className}`}
      width={`${width}px`}
      height={`${height}px`}
    >
      <circle
        className={`${styles["path"]}`}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth={stroke}
        stroke={color}
      ></circle>
    </svg>
  );
};
