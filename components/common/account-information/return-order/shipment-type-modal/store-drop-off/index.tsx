import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Input from "components/common/ui/Input";
import { LocationMark, Calendar } from "components/icons";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import CalendarComp from "components/common/calendar";

const StoreDropOff = ({
  modalOpen = () => {},
  selectedStoreData = {},
  setSelectedStoreData = () => {},
  setIsCalendarOpen = () => {},
  isCalendarOpen = false,
  setStoreDropOffDate = () => {},
  storeDropOffDate,
  radioBtnValue = {},
}: any): JSX.Element => {
  const { t } = useTranslation("common");
  const [updatedDate, setUpdatedDate] = useState("");

  useEffect(() => {
    return () => {
      setSelectedStoreData({});
    };
  }, []);
  return (
    <>
      <div className={styles["store-dropoff-wrapper"]}>
        <Input
          showLabel={true}
          label={t("SelectStore")}
          inputIcon={<LocationMark opacity="1" />}
          onImageClick={() => modalOpen(true)}
          inputContainerClass={styles["store-input-container"]}
          divInputClass={styles["store-div-input"]}
          inputIconClassName={styles["store-input"]}
          placeHolder="Input"
          role="store-locator-input"
          readOnly={true}
          value={selectedStoreData?.formatted_address}
        />
        <div
          onClick={() => setIsCalendarOpen(true)}
          onBlur={() => setIsCalendarOpen(false)}
        >
          <label className={styles["label"]}>{t("dropOfDate")}</label>
          <span className={styles["calendar-input"]}>
            {updatedDate
              ? updatedDate
              : storeDropOffDate?.isSetDate
              ? storeDropOffDate?.date
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
      </div>

      {isCalendarOpen && (
        <CalendarComp
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          selectedCompleteDate={setStoreDropOffDate}
          radioBtnValue={radioBtnValue}
          setUpdatedDate={setUpdatedDate}
          updatedDate={updatedDate}
        />
      )}
    </>
  );
};

export default StoreDropOff;
