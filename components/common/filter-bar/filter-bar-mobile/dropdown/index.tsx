import styles from "./style.module.scss";
import Tick from "components/icons/Tick";
import PriceSlide from "../../price-slider";

interface DropDownProps {
  dropdownData: { [key: string]: string }[];
  filterName: string;
  filterIndex: number;
}

type filterProps = {
  [key: string]: {
    name: string;
    selectedOptions: { [key: string]: { selected: boolean; name: string } };
  };
};

interface CategoryDropDownProps {
  categoryData: DropDownProps;
  setIsOpened: Function;
  selectedFilters: filterProps;
  onApplyFilter?: Function;
  listLoading?: Boolean;
  setListLoading?: Function;
}

const DropDown = ({
  categoryData,
  setIsOpened = () => {},
  selectedFilters = {},
  onApplyFilter = () => {},
}: // listLoading = false,
// setListLoading = () => {},
CategoryDropDownProps): JSX.Element => {
  const filterName = categoryData?.filterName || "";
  const filterIndex = categoryData?.filterIndex || 0;
  const filteredOptions = categoryData?.dropdownData?.filter(
    (option) => !option?.optionName?.includes("Dynamic")
   );
  return (
    <div
      data-testid={"dropdown-div"}
      className={styles["category-dropdown"]}
      onMouseOver={() => {
        setIsOpened((prev: object) => {
          return { ...prev, opened: true };
        });
      }}
      onMouseLeave={() => {
        setIsOpened((prev: object) => {
          return { ...prev, opened: false };
        });
      }}
    >
      {filterName === "Price" || filterName === "السعر" ? (
        <div key={"price"} className={styles["div-titles"]}>
          <PriceSlide
            key={filterName}
            values={categoryData?.dropdownData}
            filterName={filterName}
            filterIndex={filterIndex}
            selectedFilters={selectedFilters}
            onApplyFilters={onApplyFilter}
          />
        </div>
      ) : null}
      {filterName !== "Price" && filterName !== "السعر" && (
        <div className={styles["div-titles"]}>
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
                    // setListLoading && setListLoading(true)
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
                        Object.keys(filterCopy?.[filterIndex]?.selectedOptions)
                          .length < 1
                      ) {
                        delete filterCopy?.[filterIndex];
                      }
                      onApplyFilter({ ...filterCopy });
                    } else {
                      const filterObj = {
                        ...selectedFilters,
                        [filterIndex]: {
                          name: filterName,
                          selectedOptions: {
                            ...selectedFilters?.[filterIndex]?.selectedOptions,
                            [optionName]: {
                              selected: true,
                              name: optionName,
                              value: value,
                            },
                          },
                        },
                      };
                      onApplyFilter(filterObj);
                    }
                  }}
                >
                  {optionName}
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
    </div>
  );
};

export default DropDown;
