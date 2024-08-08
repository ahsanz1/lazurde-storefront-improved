import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import CalendarComp from "components/common/calendar";
import Image from "next/image";

const CourierCollection = ({
  isCalendarOpen = false,
  setIsCalendarOpen = () => {},
  setCourierDate = () => {},
  courierDate,
  radioBtnValue = {},
  label = ''
}: any) => {
  const { t } = useTranslation("common");
  const [updatedDate, setUpdatedDate] = useState("");

  return (
    <>
      <div
        onClick={() => setIsCalendarOpen(true)}
        // onBlur={() => setIsCalendarOpen(false)}
        // onPointerDown={() => setIsCalendarOpen(false)}
      >
        <label className={styles["label"]}>{label || t("pickUpDate")}</label>
        <span className={styles["calendar-input"]}>
          {updatedDate
            ? updatedDate
            : courierDate?.isSetDate
            ? courierDate?.date
            : t("select")}
          <Image
            src="/calendar.png"
            alt="calendar icon"
            width={20}
            height={20}
            layout="fixed"
          />
        </span>
      </div>
      {isCalendarOpen && (
        <CalendarComp
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          selectedCompleteDate={setCourierDate}
          radioBtnValue={radioBtnValue}
          setUpdatedDate={setUpdatedDate}
          updatedDate={updatedDate}
        />
      )}
    </>
  );
};

export default CourierCollection;
