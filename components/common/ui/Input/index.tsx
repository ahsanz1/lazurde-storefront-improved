import { InputType } from "lib/types/ui";
import React, { useRef, useEffect, useContext, useState } from "react";
import styles from "./Input.module.scss";
import { AppContext } from "lib/context";
import Image from "next/image";
import InputLoading from "../skeletons/input-loader";
import PhoneField from "./phoneField";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "components/icons";

const Input = ({
  inputRef = undefined,
  className,
  role,
  wrapperStyle,
  style,
  value,
  defaultValue,
  type = "text",
  placeHolder = "",
  label = "Placeholder",
  labelClassName,
  onChange = (e) => {},
  onBlur = (e) => {},
  onKeyDown = (e) => {},
  onKeyPress = (e) => {},
  showLabel = true,
  handleSubmit = (e) => {},
  name = "",
  error = "",
  inputIcon = "",
  pattern = null,
  onImageClick = () => {},
  onClick = () => {},
  inputContainerClass = "",
  divInputClass = "",
  inputIconClassName = "",
  readOnly = false,
  bottomLabel = "",
  errorDivClassName = "",
  countryCodeClassname = "",
  isCountryCode = false,
  isLoading = false,
  setFieldValue,
}: InputType): JSX.Element => {
  const tempRef = useRef();
  inputRef = inputRef ? inputRef : tempRef;

  const currentDate = new Date();

  return (
    <div
      className={`${styles["container"]} ${inputContainerClass}`}
      style={wrapperStyle}
    >
      {showLabel && (
        <label className={`${styles["label"]} ${labelClassName}`}>
          {label}
        </label>
      )}

      {type === "date" ? (
        <div
          className={`div-input-date ${value ? "disable" : ""} ${
            error ? "border-color" : ""
          }`}
        >
          <DatePicker
            value={value}
            onChange={(value) => setFieldValue && setFieldValue(name, value)}
            maxDate={currentDate}
            placeholder="dd/mm/yyyy"
            format="DD/MM/YYYY"
          />
          {value ? null : (
            <div className="calendar-icon">
              <Calendar />
            </div>
          )}
        </div>
      ) : (
        <div
          className={`${styles["div-input"]} ${
            styles[error && "border-color"]
          } ${divInputClass}`}
        >
          {isLoading ? (
            <InputLoading />
          ) : (
            <>
              {isCountryCode || name === "phoneNumber" || name === "phone" ? (
                <PhoneField
                  readOnly={readOnly}
                  ref={inputRef}
                  className={`${styles["input-c"]} ${className}`}
                  type={type}
                  role={role}
                  name={name}
                  style={style}
                  value={value}
                  defaultValue={defaultValue}
                  pattern={pattern}
                  placeHolder={placeHolder}
                  onChange={(e) => onChange(e)}
                  onBlur={(e) => onBlur(e)}
                  onKeyDown={(e) => {
                    handleSubmit && handleSubmit(e);
                    onKeyDown && onKeyDown(e);
                  }}
                  onKeyPress={(e) => onKeyPress && onKeyPress(e)}
                  onClick={onClick && onClick()}
                />
              ) : (
                <>
                  <input
                    readOnly={readOnly}
                    ref={inputRef}
                    className={`${styles["input-c"]} ${className}`}
                    type={type}
                    role={role}
                    name={name}
                    style={style}
                    value={value}
                    defaultValue={defaultValue}
                    pattern={pattern}
                    placeholder={placeHolder}
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    onKeyDown={(e) => {
                      handleSubmit && handleSubmit(e);
                      onKeyDown && onKeyDown(e);
                    }}
                    onKeyPress={(e) => onKeyPress && onKeyPress(e)}
                    onClick={onClick && onClick()}
                    max={
                      type === "date"
                        ? new Date().toISOString().split("T")[0]
                        : ""
                    }
                  />
                  <div
                    className={`${styles["input-icon"]} ${inputIconClassName}`}
                    onClick={() => {
                      onImageClick && onImageClick();
                    }}
                  >
                    {inputIcon}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}

      <div
        className={`${styles["error-msg"]} ${
          error ? "div-error-msg" : ""
        } ${errorDivClassName}`}
      >
        {error}
      </div>
      {bottomLabel ? (
        <div className={styles["bottom-label"]}>{bottomLabel}</div>
      ) : null}
    </div>
  );
};

export default Input;
