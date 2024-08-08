/* eslint-disable @next/next/no-img-element */
import ArrowDown from "components/icons/ArrowDown";
import Image from "next/image";
import React, { useState, useRef, useEffect, useContext } from "react";

import styles from "./style.module.scss";
import Input from "../Input";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";

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
  hasSearch?: boolean;
  selectedOptionWhiteSpaceWrap?: boolean;
}

const Select = ({
  options = [{ label: "label", img: "", value: "value" }],
  onChange,
  role = "",
  onInitialize,
  defaultValue,
  className = "",
  optionClassName = "",
  showLabel = false,
  labelClassName = "",
  label = "",
  name = "",
  error = "",
  isDisabled = false,
  placeholder = "Select",
  hasPlaceholder = false,
  optionUlClassName = "",
  optionListClassName = "",
  containerSelectClass = "",
  arrowClassName = "",
  readOnly = false,
  showIcon = true,
  hasSearch = false,
  selectedOptionWhiteSpaceWrap = true,
}: SelectProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const dropdown = useRef(null);
  const isSelected = useRef(false);
  const [selectedVal, setSelectedVal] = useState<optionProps>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("bottom");
  const [selectedOptions, setSelectedOptions] = useState(options);
  const { t } = useTranslation("common");

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
    setSelectedOptions(options);
    setSelectedVal({ label: "", img: "", value: defaultValueRef });
    onInitialize && onInitialize({ value: defaultValueRef });
  }, [options, defaultValue, hasPlaceholder]);

  useEffect(() => {
    if (!isOpen) setSelectedOptions(options);
  }, [isOpen]);

  return (
    <div
      key={selectedVal?.value}
      ref={dropdown}
      tabIndex={0}
      className={`${className} ${styles["dropdown"]}`}
      data-open={isOpen}
      data-disabled={isDisabled}
    >
      {showLabel && (
        <label className={`${styles["label"]} ${labelClassName}`}>
          {label}
        </label>
      )}
      <div
        className={`${containerSelectClass} ${styles["container-select"]}`}
        onBlur={(e) => {
          setTimeout(() => {
            setIsOpen(false);
          }, 300);
        }}
      >
        <div
          className={`${styles[readOnly ? "read-only" : ""]} ${
            styles["select"]
          } ${optionClassName}`}
          onClick={() => {
            if (
              window.innerHeight -
                dropdown.current.getBoundingClientRect().bottom <
              100
            ) {
              setPosition("top");
            } else {
              setPosition("bottom");
            }
            setIsOpen(!isOpen);
          }}
        >
          {isOpen && hasSearch ? (
            <input
              style={{
                border: "none",
                direction: appState?.lang == "en" ? "ltr" : "rtl",
                borderBottom: "1px solid #00000091",
                borderRadius: "0",
                width: "95%",
              }}
              placeholder={t("search")}
              autoFocus
              onChange={(e) => {
                const arr = [];
                const filter = e.target.value.toUpperCase();
                for (let i = 0; i < options.length; i++) {
                  const txtValue = options[i].label;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    arr.push(options[i]);
                  }
                }
                if (arr?.length === 0) {
                  setSelectedOptions([
                    { label: t("notFound"), value: "ignore" },
                  ]);
                  return;
                }
                setSelectedOptions(arr);
              }}
            />
          ) : (
            <span
              data-placeholder={!selectedVal?.value}
              data-white-space={selectedOptionWhiteSpaceWrap}
            >
              {selectedVal?.label || placeholder}
            </span>
          )}
          {selectedVal?.img && (
            <Image
              className={styles["selected-img"]}
              src={selectedVal?.img || "/flag-uae.svg"}
              width={20}
              height={16}
              alt="image"
              layout="fixed"
            />
          )}
        </div>
        <ul
          key={defaultValue}
          className={`${styles["options-ul"]} ${optionUlClassName}`}
          data-position={position}
        >
          {selectedOptions && Array.isArray(selectedOptions)
            ? selectedOptions?.map((opData, index) => {
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
        {showIcon && (
          <div className={`${arrowClassName} ${styles["select-arrow"]}`}>
            <ArrowDown />
          </div>
        )}
      </div>
      <div className={styles["error-msg"]}>{error}</div>
    </div>
  );
};

export default Select;

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
        if (opData?.value === "ignore") return;
        e.stopPropagation();
        e.preventDefault();
        isSelected.current = true;
        setSelectedVal(opData);
        onChange(opData);
        setIsOpen(false);
      }}
    >
      <a role={role}>
        {opData?.label}
        {opData?.img && (
          <Image
            className={styles["dropdown-flag"]}
            src={opData?.img || "/flag-uae.svg"}
            width={20}
            height={16}
            alt="image"
            layout="fixed"
          />
        )}
      </a>
    </li>
  );
};
