import React, { useEffect, useState, useRef } from "react";
import styles from "./tabs.module.scss";

type TabsProps = {
  className?: string;
  headingClassName?: string;
  content?: any;
  headingArr?: string[] | undefined;
  contentArr?: any;
  selectedTab?: string;
  setSelectedTab?: Function;
  loginUser?: boolean;
  tabIndex?: string;
};

const Tabs = ({
  headingArr,
  content,
  contentArr,
  setSelectedTab,
  className,
  selectedTab,
  tabIndex = "0",
  headingClassName,
}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(selectedTab || tabIndex);

  // useEffect(() => {
  //   setCurrentTab(selectedTab)
  // }, [selectedTab])

  useEffect(() => {
    currentTab !== null && setSelectedTab && setSelectedTab(Number(currentTab));
  }, [currentTab, headingArr]);

  return (
    <div className={`${styles["container"]} ${className}`}>
      <div className={styles["tabs"]}>
        {headingArr ? (
          <div className={`${styles.tabs_heading} ${headingClassName}`}>
            {headingArr?.map((heading, i) => {
              return (
                <button
                  key={i}
                  id={i.toString()}
                  disabled={currentTab === `${i.toString()}`}
                  onClick={() => {
                    setCurrentTab(i.toString());
                  }}
                  className={
                    currentTab === `${i.toString()}` ? styles.active_tab : ""
                  }
                >
                  {heading}
                </button>
              );
            })}
          </div>
        ) : null}
        {content ? (
          <div className={styles["content"]}>
            {Object.keys(content)?.map((year, i) => {
              return (
                <div key={i}>
                  {currentTab === `${i.toString()}` && (
                    <div className={styles["tab-content"]}>
                      {Object.keys(content[year])?.map((data, index) => {
                        return (
                          <div key={index} className={styles.single_value}>
                            <p className={styles["tab-content-heading"]}>
                              {data}:
                            </p>
                            <p className={styles["tab-content-value"]}>
                              {content[year][data]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
