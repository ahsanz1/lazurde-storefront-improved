import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { months } from "lib/mock-data/data";
import Select from "components/common/ui/select";
import Button from "components/common/ui/button";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";

type radioBtnType = {
  courierCollection?: boolean;
  storeDropOff?: boolean;
};
interface CalendarCompProps {
  isCalendarOpen?: boolean;
  setIsCalendarOpen?: Function;
  selectedCompleteDate?: Function;
  radioBtnValue?: radioBtnType;
  setUpdatedDate?: Function;
  updatedDate?: any;
}

const btnStyle = (bgColor: string, size: any) => {
  return {
    width: size > desktopScreenSize ? "183px" : "113.5px",
    height: "35px",
    backgroundColor: bgColor,
    border: "unset",
  };
};

const CalendarComp = ({
  isCalendarOpen = false,
  setIsCalendarOpen = () => {},
  selectedCompleteDate = () => {},
  radioBtnValue = {},
  setUpdatedDate = () => {},
  updatedDate = "",
}: CalendarCompProps) => {
  const selectedMonth = updatedDate
    ? Number(updatedDate?.split("/")?.[0] - 1)
    : new Date()?.getMonth();
  const { t } = useTranslation("common");
  const [size] = useWindowSize();
  const [currYears, setCurrYears] = useState(new Date()?.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(selectedMonth);
  const [dates, setDates] = useState([]);
  const [testNextDays, setTestNextDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    date: -1,
    index: -1,
    currDate: false,
  });

  let courierFirstActiveDate = new Date();
  courierFirstActiveDate?.setDate(courierFirstActiveDate?.getDate() + 2);
  let modifiedCourierDate =
    courierFirstActiveDate?.getDay() !== 0
      ? courierFirstActiveDate?.getDate()
      : courierFirstActiveDate?.getDate() + 1;

  let _storeOffDate = new Date();
  _storeOffDate?.getDay() !== 0
    ? _storeOffDate?.getDate()
    : _storeOffDate?.setDate(_storeOffDate?.getDate() + 1);

  const isSundayInCourierDate =
    courierFirstActiveDate?.getDay() !== 0 ? true : false;
  const isSundayInStoreDOffDate = new Date()?.getDay() !== 0 ? true : false;

  const [selectDateValues, setSelectDateValue] = useState("");

  let prevMonthDays: any = [];
  let currentMonthDays: any = [];
  let nextMonthDays: any = [];

  useEffect(() => {
    selectedCompleteDate({
      date: "",
      isSetDate: false,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      renderCalendar();
      const arr = prevMonthDays.concat(currentMonthDays, nextMonthDays);
      arr && setDates(arr);
      isNextYearArrived();
    }
  }, [currentMonth, currYears]);

  useEffect(() => {
    setSelectDateValue(
      `${currentMonth + 1}/${
        (selectedDate?.date > 0 && selectedDate?.date) ||
        (radioBtnValue?.storeDropOff
          ? _storeOffDate?.getDate()
          : modifiedCourierDate)
      }/${currYears?.toString()?.slice(-2)}`
    );
  }, [currentMonth, currYears, selectedDate]);

  function sundaysInMonth(months: any, years: any) {
    let days = new Date(years, months, 0).getDate();
    let sundays = [8 - new Date(months + "/01/" + years).getDay()];
    for (let i = sundays[0] + 7; i < days; i += 7) {
      sundays?.push(i);
    }
    return sundays;
  }

  function getDatesInRange(startDate: any, endDate: any) {
    const date = new Date(startDate.getTime());
    date.setDate(date.getDate() + 1);
    const dates = [];
    while (date <= endDate) {
      const obj = {
        date: new Date(date)?.getDate(),
        currMonth: new Date(date)?.getMonth() + 1,
      };
      dates?.push(obj);
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
  const nextSevenDays = new Date(
    new Date().setDate(new Date().getDate() + (isSundayInStoreDOffDate ? 7 : 8))
  );
  const nextSevenDaysForCourier = new Date(
    new Date().setDate(new Date().getDate() + (isSundayInCourierDate ? 9 : 8))
  );

  const selectableDays: any = getDatesInRange(
    new Date(),
    radioBtnValue?.courierCollection ? nextSevenDaysForCourier : nextSevenDays
  );
  const currMonthSundays = sundaysInMonth(currentMonth + 1, currYears);

  const renderCalendar = () => {
    let date = new Date();
    let currYear = Number(currYears);
    let currMonth = Number(currentMonth);

    let firstDayofMonth = new Date(currYear, currMonth, 1)?.getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0)?.getDate();
    let lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    )?.getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    for (let i = firstDayofMonth; i > 0; i--) {
      // list of previous month last days
      const obj: any = {
        arr: lastDateofLastMonth - i + 1,
        className: "disable-date",
      };
      obj && prevMonthDays.push(obj);
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let newDate =
        date?.getDay() !== 0 ? date?.getDate() : date?.getDate() + 1;
      let isToday =
        i == newDate &&
        currMonth == new Date().getMonth() &&
        currYear == new Date().getFullYear();

      const obj: any = {
        arr: i,
        className:
          isToday && radioBtnValue?.storeDropOff && !updatedDate
            ? "active"
            : isToday && radioBtnValue?.storeDropOff && updatedDate
            ? "first-date"
            : "disable-date",
        currMonth: selectedMonth,
        courierActiveDate:
          selectableDays &&
          selectableDays?.length > 0 &&
          selectableDays?.find(
            (date: any) => date?.date === modifiedCourierDate
          ),
        disbaleNextDay:
          selectableDays &&
          selectableDays?.length > 0 &&
          selectableDays?.find((cDate: any) =>
            cDate?.date === date?.getDate() + 1 &&
            radioBtnValue?.courierCollection
              ? true
              : false
          ),
        nextSevenDays:
          selectableDays &&
          selectableDays?.length > 0 &&
          selectableDays?.find((cDate: any) => cDate?.date === i),
        allSundayDisable:
          currMonthSundays &&
          currMonthSundays?.length > 0 &&
          currMonthSundays?.find((cDate) => cDate === i),
      };
      obj && currentMonthDays.push(obj);
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      // list of next month days
      const obj: any = {
        arr: i - lastDayofMonth + 1,
        className: "disable-date",
        currMonth: new Date().getMonth() + 1,
      };
      obj && nextMonthDays.push(obj);
    }
  };

  const isNextYearArrived = () => {
    const today = new Date();
    let lastDateOfCurrYear = new Date(currYears, 11, 31);
    if (today?.getMonth() == 11 && today?.getDate() > 31) {
      lastDateOfCurrYear?.setFullYear(lastDateOfCurrYear?.getFullYear() + 1);
    }
    let one_day = 1000 * 60 * 60 * 24;
    const remainingDays = Math.ceil(
      (lastDateOfCurrYear?.getTime() - today.getTime()) / one_day
    );
    return remainingDays <= 30 ? true : false;
  };

  const yearsOption: any = [
    {
      label: currYears,
      value: currYears,
    },
    isNextYearArrived()
      ? {
          label: currYears + 1,
          value: currYears + 1,
        }
      : null,
  ];

  const [isNextMonthActive, setIsNextMonthActive] = useState(false);
  useEffect(() => {
    let hereNextDays = [];
    let currYear = Number(currYears);
    let currMonth = new Date().getMonth();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0)?.getDate();
    let lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    )?.getDay();

    for (let i = lastDayofMonth; i < 6; i++) {
      // list of next month days
      const obj: any = {
        arr: i - lastDayofMonth + 1,
        // className: "disable-date",
        currMonth: new Date().getMonth() + 1,
      };
      obj && hereNextDays.push(obj);
    }

    const _nextMonthDays =
      hereNextDays &&
      hereNextDays?.length > 0 &&
      hereNextDays?.every((currDate) => currDate?.currMonth === currentMonth);
    setIsNextMonthActive(_nextMonthDays);
  }, [currentMonth, currYears]);

  return (
    <div
      className={styles["calendar-wrapper"]}
      data-open={isCalendarOpen}
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
    >
      <div className={styles["month-year-dropdown"]}>
        <Select
          className={styles["dropdown-month"]}
          optionClassName={styles["m-option"]}
          containerSelectClass={styles["wrapper-select"]}
          optionUlClassName={styles["calneder-ul-list"]}
          optionListClassName={styles["calneder-ul-option"]}
          showLabel={false}
          name={"month"}
          role={"month"}
          options={months}
          defaultValue={months?.[currentMonth]?.value}
          hasPlaceholder={false}
          onChange={(value: { value: any }) => {
            setCurrentMonth(value?.value);
          }}
          arrowClassName={styles["month-arrow"]}
        ></Select>
        <Select
          className={styles["dropdown-year"]}
          containerSelectClass={styles["wrapper-select"]}
          optionUlClassName={styles["calneder-ul-list"]}
          optionListClassName={styles["calneder-ul-option"]}
          showLabel={false}
          name={"year"}
          role={"year"}
          options={yearsOption}
          hasPlaceholder={false}
          defaultValue={yearsOption?.[0]?.value}
          onChange={(value: { value: any }) => {
            setCurrYears(value?.value);
          }}
          isDisabled={isNextYearArrived() ? false : true}
        ></Select>
      </div>
      <div className={styles["days"]}>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className={styles["dates"]}>
        {dates &&
          dates?.length > 0 &&
          dates?.map((date, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedDate({
                    date: date?.arr,
                    index: index,
                    currDate: true,
                  });
                }}
                className={`${styles["date"]}
                ${className(
                  index,
                  date,
                  selectedDate,
                  currentMonth,
                  radioBtnValue,
                  updatedDate,
                  selectableDays
                )}`}
                key={index}
              >
                {date?.arr}
              </div>
            );
          })}
      </div>
      <div className={styles["btns-div"]}>
        <Button
          buttonSize="lr"
          buttonText={t("Cancel")}
          buttonStyle="white"
          onClick={() => {
            setIsCalendarOpen && setIsCalendarOpen(false);
          }}
          style={{ ...btnStyle("#F2F2F2", size) }}
        />
        <Button
          buttonSize="lr"
          buttonText={t("setDate")}
          onClick={() => {
            selectedCompleteDate({
              date: selectDateValues,
              isSetDate: true,
            });
            setUpdatedDate(selectDateValues);
            setIsCalendarOpen && setIsCalendarOpen(false);
          }}
          style={{
            ...btnStyle("#C3A956", size),
          }}
          isDisabled={
            isNextMonthActive || currentMonth == new Date()?.getMonth()
              ? false
              : true
          }
        />
      </div>
    </div>
  );
};

const className = (
  index: any,
  date: any,
  selectedDate: any,
  currentMonth: number,
  radioBtnValue: any,
  updatedDate: any,
  selectableDays: any
) => {
  return `${styles[date?.className]} ${
    styles[
      selectedDate?.date == date?.arr && selectedDate?.index == index
        ? "active"
        : selectedDate?.date > 0
        ? "de-active"
        : ""
    ]
  } ${
    styles[
      date?.nextSevenDays?.date === date?.arr &&
      date?.nextSevenDays?.currMonth === currentMonth + 1
        ? "selectable-date"
        : "disable-date"
    ]
  } ${styles[date?.allSundayDisable === date?.arr ? "disable-sunday" : ""]} ${
    styles[
      date?.disbaleNextDay?.date === date?.arr &&
      date?.nextSevenDays?.currMonth === currentMonth + 1
        ? "disable-next-day"
        : ""
    ]
  } ${
    date?.currMonth === currentMonth &&
    updatedDate &&
    Number(updatedDate?.split("/")?.[1]) == date?.arr
      ? styles["active"]
      : ""
  }
      ${
        !updatedDate &&
        radioBtnValue?.courierCollection &&
        date?.currMonth == currentMonth &&
        date?.courierActiveDate?.date == date?.arr
          ? styles["active"]
          : ""
      } 
  `;
};

export default CalendarComp;
