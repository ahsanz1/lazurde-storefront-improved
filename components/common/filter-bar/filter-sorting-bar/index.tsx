import React, { FC, useContext, useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import DropDown from "./dropdown";
import BorderlessSelect from "components/common/ui/borderless-select";
import Button from "components/common/ui/button";
import useWindowSize from "lib/utils/useWindowSize";
import { useIsomorphicLayoutEffect } from "lib/utils/common";
import { useRouter } from "next/router";

type optionProps = { label?: string; img?: string; value?: string };

type FilterListProps = {
  filterName: string;
  filterOptions: { optionName: string; value: string }[];
};

type SelectedFilterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};
interface FilterBarProps {
  filterList?: FilterListProps[] | [];
  headerId?: string;
  onApplyFilters?: Function;
  hasFilteredData: Boolean;
  currentSortingValue?: string;
  setCurrentSortingValue?: Function;
  selectedFilters?: SelectedFilterProps;
  totalSelectedFilterCount?: number;
  defaultSorting?: Boolean;
}

interface DropdownDataProps {
  filterName: string;
  filterIndex: number;
  dropdownData: {
    optionName: string;
    value?: string;
  }[];
  positionOffset: string;
}

const FilterBar: FC<FilterBarProps> = ({
  headerId = "",
  filterList = [],
  onApplyFilters = () => { },
  hasFilteredData = false,
  currentSortingValue,
  setCurrentSortingValue = () => { },
  selectedFilters,
  totalSelectedFilterCount,
  defaultSorting,
}): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  let link: any = useRef(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => React.createRef())
  );

  const _arabicSortingFilter: optionProps[] = t(
    "sortingFilter",
    {},
    { returnObjects: true }
  );

  const [currentFilterList, setCurrentFilterList] =
    useState<FilterListProps[]>(filterList);
  const [isOpened, setIsOpened] = useState({ opened: false, selected: "" });
  const [dropdownData, setDropdownData] = useState<DropdownDataProps>();
  const [linkRefs, setLinkRefs] = useState(link);
  const [width] = useWindowSize();
  const [optionData, setOptionData] = useState<{
    data?: any;
    defaultValue?: string;
  }>({
    data: _arabicSortingFilter,
    defaultValue:
      currentSortingValue ||
      (appState?.region !== "ae" || !defaultSorting
        ? _arabicSortingFilter?.[3]?.value
        : _arabicSortingFilter?.[0]?.value),
  });

  const onApplyButtonClick = (selectedFilter: SelectedFilterProps) => {
    onApplyFilters(selectedFilter, currentSortingValue, 1);
  };

  const updateProducts = ({
    filters,
    sortingValue,
    pageNum,
  }: {
    filters: SelectedFilterProps;
    sortingValue: string;
    pageNum: number;
  }) => {
    onApplyFilters(filters, sortingValue, pageNum);
  };

  useIsomorphicLayoutEffect(() => {
    // setCurrentSortingValue(currentSortingValue || _arabicSortingFilter[0]?.value);
    // setSelectedFilters((prev: {}) =>
    //   Object.keys(prev).length < 1 ? prev : {}
    // );
    setOptionData({
      data: _arabicSortingFilter,
      defaultValue:
        defaultSorting ? _arabicSortingFilter?.[0]?.value : currentSortingValue ||
          (appState?.region !== "ae" || !defaultSorting
            ? _arabicSortingFilter?.[3]?.value
            : _arabicSortingFilter?.[0]?.value),
    });

    if (appState?.lang === "en") {
      setCurrentFilterList([...filterList]);
    }
  }, [currentSortingValue, defaultSorting]);
  useEffect(() => {
    setCurrentFilterList([...filterList]);
    setLinkRefs(link);
    // setListLoading(false)
  }, [filterList]);

  useEffect(() => {
    if (isOpened.opened) {
      const currentFilter = currentFilterList.find(
        (item) => item?.filterName === isOpened?.selected
      );
      const currentFilterIndex = currentFilterList.findIndex(
        (item) => item?.filterName === isOpened?.selected
      );
      setDropdownData({
        filterName: currentFilter?.filterName,
        filterIndex: currentFilterIndex,
        dropdownData: currentFilter?.filterOptions,
        positionOffset:
          appState?.lang === "en"
            ? linkRefs?.current[
              currentFilterIndex
            ]?.current?.getBoundingClientRect().left
            : width -
            linkRefs?.current[
              currentFilterIndex
            ]?.current?.getBoundingClientRect().right -
            17.4,
      });
    }
  }, [currentFilterList]);

  return (
    <div
      id={"filter-bar"}
      className={styles["filter-bar-main"]}
      data-header-id={headerId}
    >
      <div
        className={styles["div-filter-bar"]}
        onMouseLeave={() => {
          setIsOpened((prev) => {
            return { ...prev, opened: false };
          });
        }}
      >
        <div className={styles["filter-links"]}>
          {Array.isArray(currentFilterList) &&
            currentFilterList.length > 0 &&
            currentFilterList.map((data, index) => {
              if (!data) return null;
              if (data?.filterName === "Price" || data?.filterName === "السعر")
                return null;
              const hasCategories = true;
              const selectedFilterCount = selectedFilters?.[index]
                ? Object.keys(selectedFilters?.[index]?.selectedOptions).length
                : 0;
              const hasMultipleCategories = currentFilterList.find((option) => {
                if (
                  option?.filterName === "Category" ||
                  option?.filterName === "الفئة"
                ) {
                  return option?.filterOptions?.length > 1;
                }
              });
              for (const key in selectedFilters) {
                const selectedOptions: any = selectedFilters[key];
                if (selectedOptions?.name === data?.filterName) {
                  for (const key in selectedOptions?.selectedOptions) {
                    const option = selectedOptions?.selectedOptions?.[key];
                    if (
                      !data?.filterOptions?.find(
                        (item) => item?.optionName === option?.name
                      )
                    ) {
                      data?.filterOptions?.push({
                        optionName: option?.name,
                        value: option?.value,
                      });
                    }
                  }
                }
              }

              if (data?.filterOptions?.length < 1) return null;

              const hasSelectedCategory = Object.keys(selectedFilters).find(
                (key: any) =>
                  selectedFilters[key]?.name === "Category" ||
                  selectedFilters[key]?.name === "الفئة"
              );
              return (
                <div
                  role={"links"}
                  key={`${index}-${data?.filterOptions?.length}`}
                  className={styles["links"]}
                  data-disabled={
                    hasMultipleCategories &&
                    (data?.filterName === "Type" ||
                      data?.filterName === "النوع") &&
                    !hasSelectedCategory
                  }
                  ref={
                    linkRefs && linkRefs?.current
                      ? linkRefs?.current[index]
                      : null
                  }
                  data-has-count={selectedFilterCount > 0}
                  onMouseOver={(event) => {
                    event.stopPropagation();

                    if (hasCategories) {
                      setIsOpened({ opened: true, selected: data?.filterName });
                      setDropdownData({
                        filterName: data?.filterName,
                        filterIndex: index,
                        dropdownData: data?.filterOptions,
                        positionOffset:
                          appState?.lang === "en"
                            ? linkRefs?.current[
                              index
                            ]?.current?.getBoundingClientRect().left
                            : width -
                            linkRefs?.current[
                              index
                            ]?.current?.getBoundingClientRect().right -
                            17.4,
                      });
                    } else {
                      setIsOpened({
                        opened: false,
                        selected: data?.filterName,
                      });
                    }
                  }}
                  // onMouseLeave={() => {
                  //   if (hasCategories) {
                  //     setIsOpened({
                  //       opened: false,
                  //       selected: data?.filterName,
                  //     });
                  //   } else {
                  //     setIsOpened({ opened: false, selected: "-1" });
                  //   }
                  // }}
                  data-selected={
                    hasCategories
                      ? isOpened?.opened === true &&
                      isOpened?.selected === data?.filterName
                      : isOpened?.selected === data?.filterName
                  }
                >
                  <span>{data?.filterName}</span>
                  <div data-visible={selectedFilterCount > 0}>
                    <span>
                      {selectedFilterCount > 0 && selectedFilterCount}
                    </span>
                  </div>
                </div>
              );
            })}
          <PriceFilter
            key={"price"}
            filterList={currentFilterList}
            setIsOpened={setIsOpened}
            setDropdownData={setDropdownData}
            linkRefs={linkRefs}
            selectedFilters={selectedFilters}
          />
        </div>
        <div
          className={styles["div-clear-btn"]}
          data-opened={isOpened?.opened}
          data-has-count={hasFilteredData || totalSelectedFilterCount > 0}
        >
          <Button
            buttonText={t("Clear All Filters")}
            buttonStyle={"underline"}
            buttonSize={"sm"}
            onClick={() => {
              updateProducts({
                filters: {},
                sortingValue: currentSortingValue,
                pageNum: 1,
              });
            }}
          />
        </div>
        <div
          key={optionData?.defaultValue}
          className={styles["div-order-dropdown"]}
          data-opened={isOpened?.opened}
        >
          <BorderlessSelect
            options={_arabicSortingFilter}
            defaultValue={optionData?.defaultValue}
            selectedLabel={`${t("Sort By")}:`}
            onChange={(value: { label: string; value: string }) => {
              setCurrentSortingValue(value?.value);
              updateProducts({
                filters: selectedFilters,
                sortingValue: value?.value,
                pageNum: 1,
              });
            }}
          />
        </div>
      </div>

      <div
        key={dropdownData?.dropdownData?.length}
        className={styles["category-dropdown"]}
        data-opened={isOpened?.opened}
      >
        <DropDown
          setIsOpened={setIsOpened}
          categoryData={dropdownData}
          selectedFilters={selectedFilters}
          onApplyFilters={onApplyButtonClick}
          hasFilteredData={hasFilteredData}
          totalSelectedFilterCount={totalSelectedFilterCount}
        // listLoading={listLoading}
        // setListLoading={setListLoading}
        ></DropDown>
      </div>
      <div
        role={"overlay"}
        className={styles["overlay"]}
        data-opened={isOpened?.opened}
        onClick={() => setIsOpened({ ...isOpened, opened: false })}
        onMouseOver={() => setIsOpened({ ...isOpened, opened: false })}
      ></div>
    </div>
  );
};

export default FilterBar;

const PriceFilter = ({
  filterList = [],
  setIsOpened,
  setDropdownData,
  linkRefs,
  selectedFilters = {},
}: any) => {
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const priceLabel = appState?.lang == "en" ? "Price" : "السعر";
  let priceData = filterList?.find(
    (item: any) => item?.filterName === priceLabel
  );
  const selectedOption: any = selectedFilters[7]?.selectedOptions?.["price"];
  if (selectedOption?.selected) {
    const range =
      selectedOption?.value?.replace(/[\[\]']+/g, "")?.split(" TO ") || null;
    priceData = {
      filterName: priceLabel,
      filterOptions: [
        {
          optionName: "min",
          value: range[0],
        },
        {
          optionName: "max",
          value: range[1],
        },
      ],
    };
  }
  if (
    !priceData?.filterOptions?.[0]?.value ||
    !priceData?.filterOptions?.[1]?.value
  )
    return null;
  return (
    <div
      role={"links"}
      key={`Price`}
      className={styles["links"]}
      // data-disabled={
      //   hasMultipleCategories &&
      //   data?.filterName === "Type" &&
      //   !hasSelectedCategory
      // }
      // ref={
      //   linkRefs && linkRefs?.current
      //     ? linkRefs?.current[index]
      //     : null
      // }
      // data-has-count={selectedFilterCount > 0}
      onMouseOver={(event) => {
        event.stopPropagation();
        const hasCategories = true;
        const index = 7;
        const data = {
          filterName: priceLabel,
          filterOptions: priceData?.filterOptions,
        };

        if (hasCategories) {
          setIsOpened({ opened: true, selected: data?.filterName });
          setDropdownData({
            filterName: data?.filterName,
            filterIndex: index,
            dropdownData: data?.filterOptions,
            positionOffset:
              appState?.lang === "en"
                ? linkRefs?.current[index]?.current?.getBoundingClientRect()
                  .left
                : width -
                linkRefs?.current[index]?.current?.getBoundingClientRect()
                  .right -
                17.4,
          });
        } else {
          setIsOpened({
            opened: false,
            selected: data?.filterName,
          });
        }
      }}
    // onMouseLeave={() => {
    //   const hasCategories = true;
    //   const index = 7;
    //   const data = {
    //     filterName: priceLabel,
    //     filterOptions: priceData?.filterOptions,
    //   };

    //   if (hasCategories) {
    //     setIsOpened({
    //       opened: false,
    //       selected: data?.filterName,
    //     });
    //   } else {
    //     setIsOpened({ opened: false, selected: "-1" });
    //   }
    // }}
    // data-selected={
    //   hasCategories
    //     ? isOpened?.opened === true &&
    //       isOpened?.selected === data?.filterName
    //     : isOpened?.selected === data?.filterName
    // }
    >
      <span>{priceLabel}</span>
      <div data-visible={false}>
        <span>{0}</span>
      </div>
    </div>
  );
};
