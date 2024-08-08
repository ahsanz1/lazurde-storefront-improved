import React from "react";
import ContentLoader from "react-content-loader";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";

const AccountOrderLoader = () => {
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;

  return (
    <ContentLoader
      speed={3}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 100% 100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#bababa"
    >
      <rect
        x={isDesktop ? "355" : "225"}
        y="0"
        rx="20"
        ry="20"
        width={isDesktop ? "138" : "100"}
        height="40"
      />
      <rect x="0" y="204" rx="0" ry="0" width="100%" height="2" />
      <rect x="0" y="60" rx="0" ry="0" width="100" height="100" />
      <rect x="0" y="233" rx="0" ry="0" width="200" height="4" />
      <rect x="0" y="245" rx="0" ry="0" width="14" height="0" />
      <rect
        x={isDesktop ? "355" : "225"}
        y="218"
        rx="20"
        ry="20"
        width={isDesktop ? "138" : "100"}
        height="40"
      />
      <rect x="0" y="251" rx="0" ry="0" width="225" height="5" />
      <rect x="0" y="277" rx="0" ry="0" width="155" height="3" />
    </ContentLoader>
  );
};

export default AccountOrderLoader;
