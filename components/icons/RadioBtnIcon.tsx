import React from "react";

const RadioBtnIcon = ({ selected = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="15"
        height="15"
        rx="7.5"
        stroke="black"
        strokeOpacity="0.4"
      />
      {selected && (
        <rect x="5" y="5" width="10" height="10" rx="5" fill="black" />
      )}
    </svg>
  );
};

export default RadioBtnIcon;
