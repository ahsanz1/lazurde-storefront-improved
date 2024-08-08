import { findAllByTestId } from "@testing-library/react";
import React from "react";
import Spinner from "../spinner";
import styles from "./splash.module.scss";

const Splash = ({
  isLoading = false,
  text = "Loading...",
  className,
}: {
  isLoading: boolean;
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${styles["splash-container"]} ${className}`}
      data-is-loading={isLoading}
    >
      <div className={styles["div-spinner-text"]}>
        <div className={styles["div-spinner"]}>
          <Spinner></Spinner>
        </div>
        <div className={styles["div-loading-text"]}>{text}</div>
      </div>
    </div>
  );
};

export default Splash;
