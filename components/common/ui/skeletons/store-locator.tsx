import React from "react";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import ContentLoader from "react-content-loader";

const StoreLocatorLoader = () => {
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;

  return (
    <ContentLoader
      speed={3}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 1440 1000"
      preserveAspectRatio="none"
      backgroundColor="#f3f3f3"
      foregroundColor="#bababa"
    >
      <rect x="0" y="5" rx="4" ry="4" width="20%" height="5" />
      <rect
        x="0"
        y={isDesktop ? "40" : "300"}
        rx="0"
        ry="0"
        width={"100%"}
        height="3"
      />
      <rect
        x="0"
        y={isDesktop ? "56" : "330"}
        rx="0"
        ry="0"
        width={isDesktop ? "35%" : "80%"}
        height="10"
      />
      <rect
        x="0"
        y={isDesktop ? "80" : "350"}
        rx="0"
        ry="0"
        width={isDesktop ? "35%" : "60%"}
        height="10"
      />
      <rect
        x="0"
        y={isDesktop ? "132" : "370"}
        rx="0"
        ry="0"
        width={isDesktop ? "35%" : "70%"}
        height="10"
      />
      <rect
        x="0"
        y="109"
        rx="0"
        ry="0"
        width={isDesktop ? "35%" : "100%"}
        height="10"
      />
      <rect
        x="0"
        y="158"
        rx="0"
        ry="0"
        width={isDesktop ? "35%" : "100%"}
        height="10"
      />
      <rect
        x={isDesktop ? "40%" : "0"}
        y="55"
        rx="0"
        ry="0"
        width={isDesktop ? "60%" : "100%"}
        height={isDesktop ? "100%" : "200"}
      />
    </ContentLoader>
  );
};

export default StoreLocatorLoader;
