/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { RadioBtnIcon } from "components/icons";

type optionProps = { label?: string; img?: string; value?: string | number };

interface SelectProps {
  options?: optionProps[];
  role?: string;
  onChange?: Function;
  onInitialize?: Function;
  defaultValue?: string | number;
  className?: string;
  optionClassName?: string;
  showLabel?: boolean;
  labelClassName?: string;
  label?: string;
  name?: string;
  error?: string;
  isDisabled?: boolean;
  placeholder?: string;
  hasPlaceholder?: boolean;
  optionUlClassName?: string;
  optionListClassName?: string;
  containerSelectClass?: string;
  arrowClassName?: string;
  readOnly?: boolean;
  showIcon?: boolean;
}

const LangCountryOptions = ({
  options = [{ label: "label", img: "", value: "value" }],
  onChange,
  role = "",
  onInitialize,
  defaultValue,
  className = "",
  showLabel = false,
  labelClassName = "",
  label = "",
  error = "",
  isDisabled = false,
  hasPlaceholder = false,
  optionUlClassName = "",
  optionListClassName = "",
  containerSelectClass = "",
}: SelectProps): JSX.Element => {
  const dropdown = useRef(null);
  const isSelected = useRef(false);
  const [selectedVal, setSelectedVal] = useState<optionProps>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("bottom");
  useEffect(() => {
    if (hasPlaceholder) {
      setSelectedVal({ label: "", img: "", value: "" });
      return;
    }
    if (!options || !Array.isArray(options)) return;
    let defaultValueRef: string | number = "";
    const matchedItem = options?.find((item) => item?.value === defaultValue);

    if (matchedItem) {
      defaultValueRef = defaultValue;
    } else {
      defaultValueRef = options?.[0]?.value;
    }
    if (!defaultValueRef) return;

    setSelectedVal({ label: "", img: "", value: defaultValueRef });
    onInitialize && onInitialize({ value: defaultValueRef });
  }, [options, defaultValue, hasPlaceholder]);

  return (
    <div
      key={selectedVal?.value}
      ref={dropdown}
      tabIndex={0}
      className={`${className} ${styles["dropdown"]}`}
      data-open={isOpen}
      data-disabled={isDisabled}
      onBlur={() => setIsOpen(false)}
    >
      {showLabel && (
        <label className={`${styles["label"]} ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className={`${containerSelectClass} ${styles["container-select"]}`}>
        <ul
          className={`${styles["options-ul"]} ${optionUlClassName}`}
          data-position={position}
        >
          {options && Array.isArray(options)
            ? options?.map((opData, index) => {
                selectedVal?.value === opData?.value &&
                  selectedVal?.label === "" &&
                  setSelectedVal({ ...opData });
                return (
                  <SelectOptions
                    key={index}
                    isSelected={isSelected}
                    selectedVal={selectedVal}
                    setSelectedVal={setSelectedVal}
                    setIsOpen={setIsOpen}
                    onChange={onChange}
                    index={index}
                    opData={opData}
                    optionListClassName={optionListClassName}
                    role={role}
                  />
                );
              })
            : [{ label: "label", img: "", value: "value" }].map(
                (opData, index) => {
                  return (
                    <SelectOptions
                      key={index}
                      isSelected={isSelected}
                      selectedVal={selectedVal}
                      setSelectedVal={setSelectedVal}
                      setIsOpen={setIsOpen}
                      onChange={onChange}
                      index={index}
                      opData={opData}
                      optionListClassName={optionListClassName}
                      role={role}
                    />
                  );
                }
              )}
        </ul>
      </div>
      <div className={styles["error-msg"]}>{error}</div>
    </div>
  );
};

export default LangCountryOptions;

const SelectOptions = ({
  isSelected,
  selectedVal,
  setSelectedVal,
  setIsOpen,
  onChange,
  index,
  opData,
  optionListClassName,
  role,
}: any): JSX.Element => {
  return (
    <li
      key={`${selectedVal?.value}-${index}`}
      className={`${styles["option"]} ${optionListClassName}`}
      data-selected={selectedVal?.value === opData?.value}
      onClick={(e) => {
        isSelected.current = true;
        setSelectedVal(opData);
        setIsOpen(false);
        onChange(opData);
      }}
    >
      <a role={role}>
        <div className={styles["option-content"]}>
          <RadioBtnIcon selected={selectedVal?.value === opData?.value} />
          <div className={styles["flag-country-div"]}>
            {opData?.img && (
              <div className={styles["flag-div"]}>
                <Image
                  className={styles["dropdown-flag"]}
                  src={opData?.img || "/flag-uae.svg"}
                  width={32}
                  height={32}
                  alt="image"
                  layout="fixed"
                />
              </div>
            )}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <span>
                {opData?.label} {opData?.arabicLabel ? `/` : null}
              </span>
              {opData?.arabicLabel ? (
                <span className={styles["arabic-label"]}>
                  {opData?.arabicLabel}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
