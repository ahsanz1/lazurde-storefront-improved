import React, { FC } from "react";


interface AppContentWrapperProps {}

const AppContentWrapper: FC<AppContentWrapperProps> = ({
  children,
}): JSX.Element => {

  return <>{children}</>;
};

export default AppContentWrapper;
