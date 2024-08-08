import React, { useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import Tick from "components/icons/Tick";
import Button from "components/common/ui/button";
import useTranslation from "next-translate/useTranslation";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import PriceSlide from "../../price-slider";

interface CategoryDataProps {
  filterName: string;
  filterIndex: number;
  dropdownData: {
    optionName: string;
    value?: string;
  }[];
  positionOffset: string;
}

type filterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};

interface DropDownProps {
  categoryData: CategoryDataProps;
  setIsOpened: Function;
  selectedFilters: filterProps;
  onApplyFilters: Function;
  hasFilteredData: Boolean;
  listLoading?: Boolean;
  setListLoading?: Function;
  totalSelectedFilterCount?: number;
}

const DropDown = ({
  categoryData,
  setIsOpened = () => {},
  selectedFilters = {},
  onApplyFilters = () => {},
  hasFilteredData = false,
  totalSelectedFilterCount,
}: // listLoading = false,
// setListLoading = () => {},
DropDownProps): JSX.Element => {
  const filterName = categoryData?.filterName || "";
  const filterIndex = categoryData?.filterIndex || 0;
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const filteredOptions = categoryData?.dropdownData?.filter(
    (option) => !option?.optionName?.includes("Dynamic")
   );

  return (
    <div
      data-testid={"dropdown-div"}
      className={styles["category-dropdown"]}
      onMouseOver={() => {
        setIsOpened &&
          setIsOpened((prev: object) => {
            return { ...prev, opened: true };
          });
      }}
      // onMouseLeave={() => {
      //   setIsOpened &&
      //     setIsOpened((prev: object) => {
      //       return { ...prev, opened: false };
      //     });
      // }}
    >
      <AnimationWrapper
        animationName="slide-up"
        animationDuration="0.2s"
        animationWrapperDivStyle={{ display: "flex" }}
      >
        {filterName === "Price" || filterName === "السعر" ? (
          <div key={"price"} className={styles["div-titles"]}>
            <PriceSlide
              key={filterName}
              values={categoryData?.dropdownData}
              filterName={filterName}
              filterIndex={filterIndex}
              selectedFilters={selectedFilters}
              onApplyFilters={onApplyFilters}
            />
          </div>
        ) : null}

        {filterName !== "Price" && filterName !== "السعر" && (
          <div
            key={categoryData?.dropdownData?.length}
            className={styles["div-titles"]}
          >
            {filteredOptions?.map((data, index) => {
                const { optionName, value } = data;
                return (
                  <>
             {optionName && 
              <div
              key={optionName}
              className={styles["title"]}
              onClick={() => {
                // if(listLoading) return
                // setListLoading(true)
                if (
                  selectedFilters?.[filterIndex]?.selectedOptions?.[
                    optionName
                  ]?.selected
                ) {
                  const filterCopy = { ...selectedFilters };
                  delete filterCopy?.[filterIndex]?.selectedOptions?.[
                    optionName
                  ];
                  if (
                    Object.keys(
                      filterCopy?.[filterIndex]?.selectedOptions
                    )?.length < 1
                  ) {
                    delete filterCopy?.[filterIndex];
                  }
                  onApplyFilters({ ...filterCopy });
                } else {
                  const updatedFilters = {
                    ...selectedFilters,
                    [filterIndex]: {
                      name: filterName,
                      selectedOptions: {
                        ...selectedFilters?.[filterIndex]
                          ?.selectedOptions,
                        [optionName]: {
                          selected: true,
                          name: optionName,
                          value: value,
                        },
                      },
                    },
                  };
                  onApplyFilters({ ...updatedFilters });
                }
              }}
              style={{ marginInlineStart: categoryData?.positionOffset }}
            >
              <span>{optionName}</span>
              <div
                className={styles["div-tick"]}
                data-show-tick={
                  selectedFilters?.[filterIndex]?.selectedOptions?.[
                    optionName
                  ]?.selected
                }
              >
                <Tick />
              </div>
            </div>
             }
          </>
                );
              })}
          </div>
        )}
      </AnimationWrapper>

      <div
        className={styles["div-filter-btns"]}
        data-has-count={hasFilteredData || totalSelectedFilterCount > 0}
        onMouseOver={(event) => {
          event.stopPropagation();
        }}
      >
        <Button
          buttonText={t("Clear All Filters")}
          buttonStyle={"underline"}
          buttonSize={"sm"}
          onClick={() => {
            onApplyFilters && onApplyFilters({});
          }}
        />
        <Button
          buttonText={`${appState?.lang === "en" ? "Apply" : "يتقدم"} ${
            totalSelectedFilterCount > 0 ? `(${totalSelectedFilterCount})` : " "
          }`}
          buttonStyle={"black"}
          buttonSize={"sm"}
          onClick={() => {
            setIsOpened &&
              setIsOpened((prev: object) => {
                return { ...prev, opened: false };
              });
          }}
        />
      </div>
    </div>
  );
};

export default DropDown;
