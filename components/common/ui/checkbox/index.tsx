import React, { useEffect, useRef } from "react";
import { IconTick } from "components/icons";
import styles from "./checkbox.module.scss";

const CheckBox = ({
  className = "",
  defaultChecked = false,
  onChange = (value: string) => {},
  label = "",
  name = "",
  role = "",
}) => {
  const checked = useRef(defaultChecked);
  useEffect(() => {
    checked.current = defaultChecked;
  }, [defaultChecked]);
  return (
    <div
      className={`${styles["checkbox-wrapper"]} ${className}`}
      key={defaultChecked.toString()}
    >
      <input
        defaultChecked={defaultChecked}
        type="checkbox"
        name={name}
        id={name}
        value={checked.current.toString()}
        onChange={() => {
          checked.current = !checked.current;
          onChange(checked.current.toString());
        }}
        role={role}
      />
      <label htmlFor={name} className={styles["checkbox-label"]}>
        <span className={styles["checkbox-icon"]}>
          <IconTick stroke="#fff" />
        </span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
