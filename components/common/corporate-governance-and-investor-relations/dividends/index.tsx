import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Button from "components/common/ui/button";
import Tabs from "components/common/ui/tabs";
import { ImageType } from "lib/types/common";
import styles from "../cgir.module.scss";

type CurrentObjectType = {
  name?: string | "";
  content?: string | "";
  icon?: ImageType;
  width?: string | "";
  height?: string | "";
  moreContent?: MoreContentProps[];
  engName?: string;
  dividend?: DividendProps[];
  members?: MembersProps[];
  executive?: ExecutiveProps[];
  post?: PostArrProps[];
};

type MoreContentProps = {
  heading?: string | "";
  text?: string | "";
  image?: ImageType;
  imageTitle?: string;
  pdfUrl?: string;
};

type DividendProps = {
  heading?: string | "";
  text?: string | "";
  dividendHistory?: DividendHistoryProps[];
  content?: string;
};

type PostArrProps = {
  image?: ImageType;
  text?: string | "";
  date?: string | "";
  month?: string | "";
  year?: string | "";
  contact?: string | "";
};

type MembersProps = {
  heading?: string | "";
  text?: string | "";
  membersArabic?: ManagementProps[];
};

type ExecutiveProps = {
  heading?: string | "";
  text?: string | "";
  executiveArabic?: ManagementProps[];
};

type DividendHistoryProps = {
  heading?: string | "";
  year?: string | "";
  value?: string | "";
};

type ManagementProps = {
  heading?: string | "";
  text?: string | "";
};

type DividendsType = {
  currentObject?: any;
};

const Dividends: FC<DividendsType> = ({ currentObject }): JSX.Element => {
  const { t } = useTranslation("common");
  const [size] = useWindowSize();

  const headingArr: string[] | undefined = [];
  const yearArr: string[] | undefined = [];
  let contentObj: any = {};

  return (
    <>
      <div className={styles["dividend-wrapper"]}>
        <div role="dividend-heading" className={styles["dividend-main"]}>
          {currentObject?.mainContent?.title}
        </div>
        <div role="dividend-text" className={styles["dividend-main-block"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: currentObject?.mainContent?.content?.value,
            }}
          ></p>
        </div>

        {size > desktopScreenSize ? (
          <div
            role="dividend-grid"
            className={styles["dividend-table"]}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${headingArr.length}, auto)`,
              gridTemplateRows: `repeat(${yearArr.length}, auto)`,
              gap: 16,
            }}
          >
            {currentObject?.dividendHistory?.length > 0 &&
              currentObject?.dividendHistory.map(
                (history: any, index: number) => {
                  const { heading, value, year } = history;
                  
                  const findHeading = headingArr?.find(
                    (val) => val === heading
                    );
                    if (!findHeading) {
                    headingArr.push(heading);
                  }
                  const findYear = yearArr?.find((val) => val === year);
                  if (!findYear) {
                    yearArr.push(year);
                  }

                  const divHeading = headingArr?.findIndex(
                    (val) => val === heading
                  );
                  const divYear = yearArr?.findIndex((val) => val === year);
                  return (
                    <React.Fragment key={index}>
                      <div
                        className={styles["dividend-table-row"]}
                        style={{
                          gridColumn: divHeading + 2,
                          gridRow: divYear + 2,
                        }}
                      >
                        {value}
                      </div>
                      {currentObject?.dividendHistory?.length - 1 === index && (
                        <div
                          className={styles["dividend-table-col"]}
                          style={{
                            gridColumn: 1,
                            gridRow: 1,
                          }}
                        >
                          {t("Year")}
                        </div>
                      )}
                      {headingArr?.length > 0 &&
                        currentObject?.dividendHistory?.length - 1 === index &&
                        headingArr.map((heading, index) => {
                          return (
                            <div
                              key={index}
                              className={styles["dividend-table-col"]}
                              style={{
                                gridColumn: `${index + 2}`,
                                gridRow: 1,
                              }}
                            >
                              {heading}
                            </div>
                          );
                        })}
                      {yearArr?.length > 0 &&
                        currentObject?.dividendHistory?.length - 1 === index &&
                        yearArr.map((years, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div
                                key={index}
                                className={styles["dividend-table-col"]}
                                style={{
                                  gridColumn: 1,
                                  gridRow: `${index + 2}`,
                                }}
                              >
                                {years}
                              </div>
                            </React.Fragment>
                          );
                        })}
                    </React.Fragment>
                  );
                }
              )}
          </div>
        ) : (
          <>
            <div>
              {currentObject?.dividendHistory?.length > 0 &&
                currentObject?.dividendHistory.map((history: any) => {
                  const { heading, year, value } = history;
                  const findYear = yearArr?.find((val) => val === year);
                  if (!findYear) {
                    yearArr.push(year);
                  }
                  const divYear = yearArr?.findIndex((val) => val === year);
                  const matchedYear = currentObject?.dividendHistory?.find(
                    (data: any) => data?.year === yearArr[divYear]
                  );

                  contentObj = {
                    ...contentObj,
                    [matchedYear?.year]: {
                      ...contentObj[matchedYear?.year],
                      [heading]: value,
                    },
                  };
                })}
              <Tabs headingArr={yearArr} content={contentObj} />
            </div>
          </>
        )}

        <div className={styles["dividend-main-block"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: currentObject?.details,
            }}
          ></p>
        </div>
        <div className={styles["dividend-btn"]}>
          <Button
            buttonSize={"lr"}
            buttonText={currentObject?.ctaText}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Dividends;
