import React from "react";

const Clock = ({ ...props }) => {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4.625L8 8.625L9.5 10.625M15 8.625C15 12.491 11.866 15.625 8 15.625C4.13401 15.625 1 12.491 1 8.625C1 4.75901 4.13401 1.625 8 1.625C11.866 1.625 15 4.75901 15 8.625Z"
          stroke="black"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};

export default Clock;
