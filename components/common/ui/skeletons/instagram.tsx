import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import React from "react";
import ContentLoader from "react-content-loader";

const InstagramLoader = () => {
  const [size] = useWindowSize();
  const isDesktop = size >= desktopScreenSize;
  const width = "100%";

  return (
    <ContentLoader
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#bababa"
    >
      <rect x="4" y="8" rx="3" ry="3" width="7" height={width} />
      <rect x="6" y="99%" rx="3" ry="3" width="99%" height="6" />
      <rect x="99%" y="9" rx="3" ry="3" width="6" height={width} />
      <rect
        x="55"
        y="42"
        rx="16"
        ry="16"
        width={isDesktop ? "50%" : "80%"}
        height={isDesktop ? "85%" : "50%"}
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y={isDesktop ? "113" : "515"}
        rx="3"
        ry="3"
        width="102"
        height="7"
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y="91"
        rx="3"
        ry="3"
        width="178"
        height="6"
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y={isDesktop ? "139" : "535"}
        rx="3"
        ry="3"
        width="178"
        height="6"
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y={isDesktop ? "162" : "555"}
        rx="3"
        ry="3"
        width="102"
        height="7"
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y={isDesktop ? "189" : "575"}
        rx="3"
        ry="3"
        width="178"
        height="6"
      />
      <rect x="5" y="8" rx="3" ry="3" width="99%" height="7" />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y={isDesktop ? "224" : "595"}
        rx="14"
        ry="14"
        width="72"
        height="32"
      />
      <rect
        x={isDesktop ? "60%" : "10%"}
        y="41"
        rx="3"
        ry="3"
        width="231"
        height="29"
      />
    </ContentLoader>
  );
};

export default InstagramLoader;
