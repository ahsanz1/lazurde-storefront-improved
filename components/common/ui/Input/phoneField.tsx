import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";
import { InputType } from "lib/types/ui";
import Image from "next/image";
import { AppContext } from "lib/context";
import { isDev } from "general-config";

const PhoneField = ({
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
}: InputType): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [countryCode, setCountryCode] = useState("+966");
  const currentValueRef = useRef(null);
  const getIcon: { [key: string]: string } = {
    sa: "/flag-sa.png",
    ae: "/flag-uae.png",
    eg: "/flag-egypt.png",
  };
  const flagIcon = getIcon?.[appState?.region];
  const phoneFieldLimit: { [key: string]: number } = {
    eg: 10,
    sa: 9,
    ae: 9,
  };

  useEffect(() => {
    const currentCountryCode =
      appState?.region === "ae"
        ? "+971"
        : appState?.region === "eg"
        ? "+20"
        : "+966";
    currentCountryCode && setCountryCode(currentCountryCode);
  }, [appState?.region]);

  const formatInputData = ({
    callBack,
    event,
  }: {
    callBack: any;
    event: any;
  }) => {
    if (!event.target.value) {
      event.target.value =
        String(currentValueRef.current).length == 1
          ? ""
          : currentValueRef.current;
      currentValueRef.current = event.target.value;
      callBack(event);
      return;
    }
    event.target.value = event.target.value.replace(/\D/g, "");
    event.target.value = String(event.target.value).substring(
      0,
      phoneFieldLimit[appState?.region]
    );
    currentValueRef.current = event.target.value;
    callBack(event);
  };

  return (
    <>
      <div
        className={`${styles[readOnly ? "read-only" : ""]} ${
          styles["input-country_code"]
        } ${countryCodeClassname}`}
      >
        <Image
          src={flagIcon || "/flag-sa.png"}
          alt="flag-icon"
          width={20}
          height={20}
          layout="fixed"
          // unoptimized={isDev}
        />
        <span>{countryCode}</span>
      </div>
      <input
        readOnly={readOnly}
        ref={inputRef}
        className={`${styles["input-c"]} ${className}`}
        type={"tel" || type}
        role={role}
        name={name}
        style={style}
        value={value}
        defaultValue={defaultValue}
        pattern={pattern}
        placeholder={placeHolder}
        onChange={(e) => formatInputData({ callBack: onChange, event: e })}
        onBlur={(e) => formatInputData({ callBack: onBlur, event: e })}
        onKeyDown={(e) => {
          handleSubmit && formatInputData({ callBack: handleSubmit, event: e });
          onKeyDown && formatInputData({ callBack: onKeyDown, event: e });
        }}
        onKeyPress={(e) =>
          onKeyPress && formatInputData({ callBack: onKeyPress, event: e })
        }
        onClick={onClick && onClick()}
      />
    </>
  );
};

export default PhoneField;
