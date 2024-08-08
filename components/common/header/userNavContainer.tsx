import React from "react";
import UserNavBar from "./user-navbar";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";

const UserNavbarContainer = () => {
  const [width] = useWindowSize();
  return <>{width < desktopScreenSize ? null  : <UserNavBar />}</>;
};

export default UserNavbarContainer;
