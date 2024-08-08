import React from "react";
const FacebookIcon = ({ ...props }) => {
  return (
    <svg
      width={props?.width || "9"}
      height={props?.height || "16"}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22222 5.33333H0V8H2.22222V16H5.92593V8H8.6237L8.88889 5.33333H5.92593V4.222C5.92593 3.58533 6.06815 3.33333 6.75185 3.33333H8.88889V0H6.06815C3.40444 0 2.22222 1.05533 2.22222 3.07667V5.33333Z"
        fill="black"
      />
    </svg>
  );
};

export default FacebookIcon;
