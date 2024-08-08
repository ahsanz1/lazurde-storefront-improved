import React, { FC, useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import BorderlessSelect from "components/common/ui/borderless-select";
import Accordion from "components/common/ui/accordion/Accordion";
import Button from "components/common/ui/button";
import SortingModal from "./sorting-modal";
import { AppContext } from "lib/context";
import DropDown from "./dropdown";
import Filter from "components/icons/Filter";
import Sort from "components/icons/Sort";

type FilterListProps = {
  filterName: string;
  filterOptions: { optionName: string; value?: string }[];
};

type SelectedFilterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};

interface FilterBarMobileProps {
  filterList?: FilterListProps[];
  headerId?: string;
  onApplyFilters: Function;
  hasFilteredData?: Boolean;
  sortingSelected?: string;
  setSortingSelected?: Function;
  selectedFilters?: SelectedFilterProps;
  totalSelectedFilterCount?: number;
  defaultSorting?: Boolean;
}
interface FilterAccordionProps {
  filterList: FilterListProps[] | string;
  setIsOpened?: Function;
  selectedFilters?: SelectedFilterProps;
  totalSelectedFilterCount?: number;
  onApplyButtonClick?: Function;
  setModalVisible?: Function;
  onClear?: Function;
  sortingSelected?: string;
  hasFilteredData?: Boolean;
  // listLoading: Boolean;
  // setListLoading: Function;
}

const FilterBarMobile: FC<FilterBarMobileProps> = ({
  filterList = [],
  onApplyFilters = () => { },
  hasFilteredData,
  sortingSelected,
  setSortingSelected = () => { },
  selectedFilters,
  totalSelectedFilterCount,
  defaultSorting,
}): JSX.Element => {
  const { t } = useTranslation("common");
  const _arabicSortingFilter: { label: string; value: string }[] = t(
    "sortingFilter",
    {},
    { returnObjects: true }
  );
  const { appState } = useContext(AppContext);
  const [isOpened, setIsOpened] = useState({ opened: false, selected: -1 });
  // const [sortingSelected, setSortingSelected] = useState(_arabicSortingFilter?.[0]?.value);
  const [modalVisible, setModalVisible] = useState(false);
  const [optionData, setOptionData] = useState<any>([]);
  // const [listLoading, setListLoading] = useState(false);
  const [currentFilterList, setCurrentFilterList] = useState<
    string | FilterListProps[]
  >(filterList);

  const onApplyButtonClick = (selectedFilter: SelectedFilterProps) => {
    onApplyFilters(selectedFilter, sortingSelected, 1);
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

  useEffect(() => {
    // setSelectedFilters((prev: {}) =>
    //   Object.keys(prev).length < 1 ? prev : {}
    // );
    setSortingSelected(
      defaultSorting ? _arabicSortingFilter?.[0]?.value : _arabicSortingFilter?.[3]?.value ||
        appState?.region !== "ae" || !defaultSorting
        ? _arabicSortingFilter?.[3]?.value
        : _arabicSortingFilter?.[0]?.value
    );
    setOptionData({
      data: _arabicSortingFilter,
      defaultValue: defaultSorting ? _arabicSortingFilter?.[0]?.value : _arabicSortingFilter?.[3]?.value,
    });

    if (appState?.lang === "en") {
      setCurrentFilterList(filterList);
    } else {
      // setCurrentFilterList(_arabicFilterBarData);
    }
  }, [appState?.lang, defaultSorting]);

  useEffect(() => {
    setCurrentFilterList(filterList);
    // setListLoading(false)
  }, [filterList]);

  return (
    <div id={"filter-bar"} className={styles["filter-bar_wrapper"]}>
      <div className={styles["filter-bar_items"]}>
        <div className={styles["filter-bar_item"]}>
          <BorderlessSelect
            className={styles["filter-mobile-select"]}
            optionClassName={styles["wrapper-label"]}
            onChange={() => { }}
            selectIcon={<Filter />}
            showArrow={false}
            selectedLabel={
              <FilterCounter
                appState={appState}
                count={totalSelectedFilterCount}
              />
            }
            visible={modalVisible}
            onOpen={(state: boolean) => {
              setModalVisible(state);
            }}
            showInModal={true}
            modalChildren={
              <FilterAccordion
                filterList={currentFilterList}
                setIsOpened={setIsOpened}
                selectedFilters={selectedFilters}
                totalSelectedFilterCount={totalSelectedFilterCount}
                onApplyButtonClick={onApplyButtonClick}
                onClear={(
                  filters: SelectedFilterProps,
                  sorting: string,
                  page: number
                ) =>
                  updateProducts({
                    filters: filters,
                    sortingValue: sorting,
                    pageNum: 1,
                  })
                }
                sortingSelected={sortingSelected}
                hasFilteredData={hasFilteredData}
                setModalVisible={setModalVisible}
              // listLoading={listLoading}
              // setListLoading={setListLoading}
              ></FilterAccordion>
            }
          />
        </div>
        <div
          className={styles["filter-bar_item"]}
          data-opened={isOpened?.opened}
        >
          <BorderlessSelect
            className={styles["filter-mobile-select"]}
            optionClassName={`${styles["wrapper-label"]} ${styles["filter-sort"]}`}
            selectIcon={<Sort />}
            showArrow={false}
            options={_arabicSortingFilter}
            onChange={() => { }}
            defaultValue={optionData?.defaultValue}
            selectedLabel={`${t("Sort By")}`}
            showInModal={true}
            selectedValue={sortingSelected}
            showSelectedValue={false}
            modalChildren={
              <SortingModal
                sortingDataArray={_arabicSortingFilter}
                defaultValue={optionData?.defaultValue}
                selectedVal={sortingSelected}
                onChange={(value: string) => {
                  setSortingSelected(value);
                  updateProducts({
                    filters: selectedFilters,
                    sortingValue: value,
                    pageNum: 1,
                  });
                }}
              ></SortingModal>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBarMobile;

const FilterAccordion = ({
  filterList,
  setIsOpened,
  selectedFilters,
  totalSelectedFilterCount,
  onApplyButtonClick,
  onClear,
  sortingSelected,
  hasFilteredData,
  setModalVisible,
}: // listLoading,
  // setListLoading,
  FilterAccordionProps): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <>
      {Array.isArray(filterList) &&
        filterList.length > 0 &&
        filterList.map((data, index) => {
          if (!data) return;
          const selectedFilterCount = selectedFilters?.[index]
            ? Object.keys(selectedFilters?.[index]?.selectedOptions).length
            : 0;
          if (data?.filterName === "Price" || data?.filterName === "السعر")
            return null;
          const hasMultipleCategories = filterList.find((option) => {
            if (
              option?.filterName === "Category" ||
              option?.filterName === "الفئة"
            ) {
              return option?.filterOptions?.length > 1;
            }
          });
          const hasSelectedCategory = Object.keys(selectedFilters).find(
            (key: any) =>
              selectedFilters[key]?.name === "Category" ||
              selectedFilters[key]?.name === "الفئة"
          );

          for (const key in selectedFilters) {
            const selectedOptions: any = selectedFilters[key];
            if (selectedOptions.name === data?.filterName) {
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
          return (
            <Accordion
              key={index}
              heading={
                <div
                  className={styles["div-counter"]}
                  data-disabled={
                    hasMultipleCategories &&
                    (data?.filterName === "Type" ||
                      data?.filterName === "النوع") &&
                    !hasSelectedCategory
                  }
                >
                  <span className={styles["filter-name"]}>
                    {data?.filterName}
                  </span>
                  <div data-visible={selectedFilterCount > 0}>
                    <span>
                      {selectedFilterCount > 0 && selectedFilterCount}
                    </span>
                  </div>
                </div>
              }
              disabled={
                hasMultipleCategories &&
                (data?.filterName === "Type" || data?.filterName === "النوع") &&
                !hasSelectedCategory
              }
              // links={data?.filterOptions}
              arrowIcon={false}
            >
              <DropDown
                key={index}
                setIsOpened={setIsOpened}
                categoryData={{
                  dropdownData: data?.filterOptions,
                  filterName: data?.filterName,
                  filterIndex: index,
                }}
                selectedFilters={selectedFilters}
                onApplyFilter={onApplyButtonClick}
              // listLoading={listLoading}
              // setListLoading={setListLoading}
              ></DropDown>
            </Accordion>
          );
        })}
      <PriceFilter
        key={"price"}
        filterList={filterList}
        setIsOpened={setIsOpened}
        selectedFilters={selectedFilters}
        onApplyButtonClick={onApplyButtonClick}
      />
      <div
        className={styles["div-filter-btns"]}
        data-has-count={hasFilteredData || totalSelectedFilterCount > 0}
      >
        <Button
          buttonText={t("Clear All Filters")}
          buttonStyle={"underline"}
          buttonSize={"sm"}
          onClick={() => {
            onClear && onClear({}, sortingSelected, 0);
          }}
        />
        <Button
          buttonText={`${t("Apply")} ${totalSelectedFilterCount > 0 ? `(${totalSelectedFilterCount})` : ""
            }`}
          buttonStyle={"black"}
          buttonSize={"sm"}
          onClick={() => {
            // onApplyButtonClick(selectedFilters);
            setModalVisible(false);
          }}
        />
      </div>
    </>
  );
};

const FilterCounter = ({
  count = 0,
}: {
  appState: { lang: String };
  count: number;
}): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["div-counter"]}>
      <span>{t("Filter")}</span>
      <div data-visible={count > 0}>
        <span>{count > 0 && count}</span>
      </div>
    </div>
  );
};

const PriceFilter = ({
  filterList = [],
  setIsOpened,
  selectedFilters = {},
  onApplyButtonClick,
}: any) => {
  const { appState } = useContext(AppContext);

  const priceLabel = appState?.lang == "en" ? "Price" : "السعر";
  let priceData = filterList?.find(
    (item: any) => item?.filterName === priceLabel
  );

  const selectedOption: any = selectedFilters[7]?.selectedOptions?.["price"];
  if (selectedOption?.selected) {
    const range = selectedOption?.value
      ?.replace(/[\[\]']+/g, "")
      ?.split(" TO ");
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

  if (!priceData) return null;
  return (
    <Accordion
      heading={
        <div className={styles["div-counter"]}>
          <span className={styles["filter-name"]}>{priceLabel}</span>
          <div data-visible={false}>
            <span>{0}</span>
          </div>
        </div>
      }
      arrowIcon={false}
    >
      <DropDown
        setIsOpened={setIsOpened}
        categoryData={{
          dropdownData: priceData?.filterOptions,
          filterName: priceData?.filterName,
          filterIndex: 7,
        }}
        selectedFilters={selectedFilters}
        onApplyFilter={onApplyButtonClick}
      ></DropDown>
    </Accordion>
  );
};
