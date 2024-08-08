import React, { useState } from "react";
import FilterBarMobile from "./filter-bar-mobile";
import FilterBar from "./filter-sorting-bar";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";

type SelectedFilterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};

interface FilterBarMainProps {
  updateProductArray: Function;
  filterList: any[];
  hasFilteredData: Boolean;
  currentSortingValue?: string;
  setCurrentSortingValue?: Function;
  selectedFilters?: SelectedFilterProps;
  totalSelectedFilterCount?: number;
  defaultSorting?: Boolean;
}

const FilterBarMain = ({
  updateProductArray = () => {},
  filterList = [],
  hasFilteredData = false,
  currentSortingValue,
  setCurrentSortingValue = () => {},
  selectedFilters,
  totalSelectedFilterCount,
  defaultSorting,
}: FilterBarMainProps): JSX.Element => {
  const [width] = useWindowSize();

  if (width === 0) return null;
  return (
    <>
      {width < desktopScreenSize ? (
        <FilterBarMobile
          onApplyFilters={updateProductArray}
          sortingSelected={currentSortingValue}
          setSortingSelected={setCurrentSortingValue}
          filterList={filterList}
          hasFilteredData={hasFilteredData}
          selectedFilters={selectedFilters}
          totalSelectedFilterCount={totalSelectedFilterCount}
          defaultSorting={defaultSorting}
        ></FilterBarMobile>
      ) : (
        <FilterBar
          onApplyFilters={updateProductArray}
          currentSortingValue={currentSortingValue}
          setCurrentSortingValue={setCurrentSortingValue}
          filterList={filterList}
          hasFilteredData={hasFilteredData}
          selectedFilters={selectedFilters}
          totalSelectedFilterCount={totalSelectedFilterCount}
          defaultSorting={defaultSorting}
        ></FilterBar>
      )}
    </>
  );
};

export default FilterBarMain;
