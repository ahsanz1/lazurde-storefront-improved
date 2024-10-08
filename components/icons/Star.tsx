import React from "react";
const Star = ({ ...props }) => {
  return (
    <svg
      key={props.key}
      width={props?.width || "18"}
      height={props?.height || "18"}
      viewBox="0 0 18 18"
      fill={props?.fill}
      onClick={props?.onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5748 6.15275L8.99984 0.666504L6.42484 6.15275L0.666504 7.03275L4.83317 11.3032L3.84942 17.3332L8.99984 14.4861L14.1503 17.3332L13.1665 11.3032L17.3332 7.03275L11.5748 6.15275ZM12.344 11.4373L13.0515 15.7736L9.40317 13.7569L8.99984 13.534L8.5965 13.7569L4.94817 15.7736L5.65567 11.4373L5.72317 11.0223L5.42942 10.7215L2.39567 7.6115L6.55067 6.9765L6.99025 6.90942L7.179 6.50692L8.99984 2.62775L10.8207 6.50692L11.0094 6.90942L11.449 6.9765L15.604 7.6115L12.5698 10.7211L12.2761 11.0219L12.344 11.4373Z"
        fill={props?.fill || "#C3A956"}
        stroke={props?.fill || "#C3A956"}
        strokeWidth="0.3"
      />
    </svg>
  );
};
export default Star;
