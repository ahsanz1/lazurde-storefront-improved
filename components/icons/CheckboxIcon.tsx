import React from "react";

const CheckBoxIcon = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={props?.color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="14.5"
        stroke={props?.color || "black"}
        strokeOpacity="0.2"
      />
      <path
        d="M8 14.5892L12.5892 19.1783L21.2837 10.4838L20.8 10L12.5892 18.2108L8.48375 14.1054L8 14.5892Z"
        fill={props?.tickColor || "black"}
        fillOpacity={props?.tickOpacity || "0.2"}
        stroke={props?.tickColor || "black"}
        strokeOpacity={props?.tickOpacity || "0.2"}
        strokeWidth="0.5"
      />
    </svg>
  );
};
export default CheckBoxIcon;
