import { AppContext } from "lib/context";
import { useContext, useEffect, useState } from "react";
import Slider from "rc-slider";
import { getCurrency } from "lib/utils/common";

const PriceSlide = ({
  values = [],
  filterName,
  filterIndex,
  selectedFilters = () => {},
  onApplyFilters = () => {},
  optionName = "price",
}: any) => {
  const min = Number(values?.[0]?.value) ?? 0;
  const max = Number(values?.[1]?.value) ?? 0;
  const [sliderRange, setSliderRange] = useState([min, max]);
  const { appState, defaultValue, setDefaultValue } = useContext(AppContext);
  useEffect(() => {
    if (!selectedFilters[7]?.selectedOptions?.price?.selected) {
      setDefaultValue({
        defaultMin: min,
        defaultMax: max,
      });
      setSliderRange([min, max]);
    }
    if (
      Number.isNaN(defaultValue?.defaultMin) ||
      Number.isNaN(defaultValue?.defaultMax)
    )
      setDefaultValue({
        defaultMin: min,
        defaultMax: max,
      });
  }, [min, max]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <div>
        <Slider
          range
          min={defaultValue?.defaultMin}
          max={defaultValue?.defaultMax}
          allowCross={false}
          defaultValue={[min, max]}
          reverse={appState?.lang === "ar"}
          value={sliderRange}
          step={100}
          onChange={(value: any) => {
            setSliderRange([value?.[0], value?.[1]]);
          }}
          onAfterChange={(value: any) => {
            // if (
            //   selectedFilters?.[filterIndex]?.selectedOptions?.[optionName]
            //     ?.selected
            // ) {
            //   const filterCopy = { ...selectedFilters };
            //   delete filterCopy?.[filterIndex]?.selectedOptions?.[optionName];
            //   if (
            //     Object.keys(filterCopy?.[filterIndex]?.selectedOptions)
            //       ?.length < 1
            //   ) {
            //     // delete filterCopy?.[filterIndex];
            //   }
            //   onApplyFilters({ ...filterCopy });
            // } else {
            const updatedFilters = {
              ...selectedFilters,
              [filterIndex]: {
                name: filterName,
                selectedOptions: {
                  ...selectedFilters?.[filterIndex]?.selectedOptions,
                  [optionName]: {
                    selected: true,
                    name: optionName,
                    value: `[${value?.[0]} TO ${value?.[1]}]`,
                  },
                },
              },
            };
            onApplyFilters({ ...updatedFilters });
            // }
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "310px",
        }}
      >
        <span>{`${getCurrency(
          appState?.region
        )} ${sliderRange?.[0].toLocaleString()}`}</span>
        <span>{`${getCurrency(
          appState?.region
        )} ${sliderRange?.[1].toLocaleString()}`}</span>
      </div>
    </div>
  );
};

export default PriceSlide;
