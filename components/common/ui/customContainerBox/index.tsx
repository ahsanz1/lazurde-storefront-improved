import { BrProps } from "@bloomreach/react-sdk";
import React from "react";

const CustomContainerBox = ({
  children,
}: React.PropsWithChildren<BrProps>): JSX.Element => {
  return <>{children}</>;
};

export default CustomContainerBox;
