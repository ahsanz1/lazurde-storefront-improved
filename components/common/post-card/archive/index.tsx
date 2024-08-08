import React, { FC, useState, useContext, useEffect } from "react";
import { ImageType } from "lib/types/common";
import styles from "../style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import { Calendar } from "components/icons";

interface ArchiveProps {
  post?: ArchiveArrType[];
}

type ArchiveArrType = {
  img?: ImageType;
  text?: string;
  date?: string;
  month?: string;
  year?: string;
  contact?: string;
};

const ArchiveData = ({ post }: any): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [monthlyArchive, setMonthlyArchive] = useState<{
    [key: string]: number;
  }>({});
  useEffect(() => {
    let newArchive = monthlyArchive;
    post?.map((find: any) => {
      let archiveDate = find?.date;
      const findDate = new Date(archiveDate);
      const getYear = findDate && findDate?.getFullYear();
      const getMonth = findDate && findDate?.getMonth() + 1;
      findDate.setMonth(getMonth - 1);
      const monthName = findDate.toLocaleString("default", {
        month: "long",
      });

      let dateKey = `${monthName} , ${getYear}`;
      let count = newArchive?.[dateKey] || 0;
      newArchive = {
        ...newArchive,
        [dateKey]: Number(count) + 1,
      };
      setMonthlyArchive({ ...newArchive });
    });
  }, []);

  return (
    <>
      <div className={styles["archive-container"]}>
        <div className={styles["archive-heading"]}>  {t("MonthlyArchive")}</div>

        {monthlyArchive &&
          Object.keys(monthlyArchive).length > 0 &&
          Object.keys(monthlyArchive).map((data, index) => {
            return (
              <>
                <div key={index} className={styles["archive-wrapper"]}>
                  <div className={styles["archive-details"]}>
                    <Calendar color="black" width="20px" height="20px" />
                    <span className={styles["archive-date"]}>
                      {`${data} (${monthlyArchive[data]})`}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ArchiveData;
