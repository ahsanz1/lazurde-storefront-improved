import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import styles from "./index.module.scss";
import useTranslation from "next-translate/useTranslation";

const MiniPromotionTimer = ({ timeUTC, handleCountdownComplete }: any) => {
  const { t } = useTranslation("common");

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      handleCountdownComplete();
      return null;
    } else {
      return (
        <div className={styles["mini-promotion-timer"]}>
          <div className={styles["countdown"]}>
            <div className={styles["countdown-block"]}>
              <div className={styles["countdown-value"]}>
                {days.toString().padStart(2, "0")}
              </div>
              <div className={styles["countdown-label"]}>{t("Days")}</div>
            </div>
            <div className={styles["countdown-block"]}>
              <div className={styles["countdown-value"]}>
                {hours.toString().padStart(2, "0")}
              </div>
              <div className={styles["countdown-label"]}>{t("Hours")}</div>
            </div>
            <div className={styles["countdown-block"]}>
              <div className={styles["countdown-value"]}>
                {minutes.toString().padStart(2, "0")}
              </div>
              <div className={styles["countdown-label"]}>{t("Minutes")}</div>
            </div>
            <div className={styles["countdown-block"]}>
              <div className={styles["countdown-value"]}>
                {seconds.toString().padStart(2, "0")}
              </div>
              <div className={styles["countdown-label"]}>{t("Seconds")}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return timeUTC && <Countdown date={timeUTC} renderer={renderer} />;
};

export default MiniPromotionTimer;
