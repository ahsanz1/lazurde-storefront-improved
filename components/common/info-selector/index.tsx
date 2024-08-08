import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Select from "../ui/select";

type optionProps = { key: string; label: string; value: string };

const InfoSelector = ({
  className = "",
  mainWrapperClass = "",
  optionClassName = "",
  setValue = () => {},
  selectedVal = "",
  currentObject = "",
  scriptId = () => {},
  tabName = "",
}: {
  className?: string;
  mainWrapperClass?: string;
  optionClassName?: string;
  setValue?: Function;
  selectedVal?: string | "";
  currentObject: any;
  scriptId?: Function;
  tabName?: string;
}): JSX.Element => {
  const [componentRender, setComponentRender] = useState(false);
  const cgirInfoDropdown: any = useRef([]);

  useEffect(() => {
    currentObject?.dropdownSection?.map((content: any) => {
      const { dropDownValue } = content;

      tabName && setValue(dropDownValue);

      cgirInfoDropdown?.current?.push({
        value: dropDownValue,
        label: dropDownValue,
      });
    });
    setComponentRender(true);
  }, [currentObject, setValue, tabName]);

  const onInfoChange = (selectedData: optionProps) => {
    scriptId();
    setValue(selectedData?.value);
  };
  return (
    componentRender && (
      <div
        ref={cgirInfoDropdown?.current}
        data-testid={"main-wrapper"}
        className={`${styles["info-selector"]} ${mainWrapperClass}`}
      >
        <Select
          options={cgirInfoDropdown?.current}
          onChange={onInfoChange}
          defaultValue={cgirInfoDropdown?.current?.[0]?.value}
          optionClassName={className}
        ></Select>
      </div>
    )
  );
};
export default InfoSelector;
