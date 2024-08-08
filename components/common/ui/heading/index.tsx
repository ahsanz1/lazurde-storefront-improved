import React, { MouseEventHandler } from "react";

interface headingType {
  element: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: JSX.Element | string;
  className?: string;
  style?: object;
  testId?: string;
  role?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Heading = ({
  className = "",
  role = "",
  children,
  element,
  style = {},
  testId = "",
  onClick = () => {},
}: headingType): JSX.Element => {
  const TitleTag = element;
  return (
    <div onClick={onClick}>
      <TitleTag
        data-testid={testId}
        className={`heading-c ${className}`}
        style={style}
        role={role}
      >
        {children}
      </TitleTag>
    </div>
  );
};

export default Heading;
