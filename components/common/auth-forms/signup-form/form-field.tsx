import React, { useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Input from "components/common/ui/Input";
import Select from "components/common/ui/select";
import { Calendar, PasswordEyeIcon, PasswordIcon } from "components/icons";

const FormFields = ({
  index = 0,
  titleOptions = [],
  values,
  errors,
  setFieldValue,
  fields,
  handleChange,
  touched,
}: any) => {
  const { t } = useTranslation("common");
  const [showPassword, setShowPassword] = useState(false);

  function getIcons(type: string) {
    if (!type) return;
    const icons: any = {
      calendar: <Calendar width="20px" height="20px" fill="#000" />,
      password: <PasswordEyeIcon showPassword={showPassword} />,
    };
    return icons?.[type];
  }

  return (
    <div
      className={`${styles["input-field"]} ${
        styles[index === 1 || index === 2 ? "row" : ""]
      }`}
      key={index}
    >
      {fields?.dropdown ? (
        <Select
          role="title"
          showLabel={true}
          label={`${t("Title")}*`}
          className={styles["select"]}
          name={"title"}
          options={titleOptions}
          defaultValue={titleOptions?.[0]?.value}
          onChange={(value: { value: string }) => {
            setFieldValue("title", value.value);
          }}
        />
      ) : (
        <Input
          type={
            fields?.onIconClick
              ? !showPassword
                ? fields?.type
                : "text"
              : fields?.type
          }
          label={fields?.label}
          bottomLabel={fields?.bottomLabel}
          name={fields?.name}
          placeHolder={fields?.placeholder}
          value={values?.name}
          defaultValue={values?.name}
          setFieldValue={setFieldValue}
          className={`${styles["signup-inputs"]} ${
            styles[fields?.name === "dob" && !values?.dob ? "empty" : ""]
          } ${
            styles[
              fields?.name === "anniversaryDate" && !values?.anniversaryDate
                ? "empty"
                : ""
            ]
          }`}
          errorDivClassName={styles["signup-error-div"]}
          inputIconClassName={`${
            styles[
              fields?.name === "dob" || fields?.name === "anniversaryDate"
                ? "pointor-none"
                : ""
            ]
          } ${styles["password-icon"]}`}
          inputIcon={fields?.hasIcon ? getIcons(fields?.icon) : null}
          error={
            errors?.[fields?.name] &&
            touched?.[fields?.name] &&
            errors?.[fields?.name]
          }
          onImageClick={() => {
            if (fields?.onIconClick) {
              setShowPassword(!showPassword);
            }
          }}
          onChange={(e) => {
            handleChange && handleChange(e);
          }}
          role="input"
        />
      )}
    </div>
  );
};

export default FormFields;
