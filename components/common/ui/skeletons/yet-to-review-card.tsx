import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import React from "react";
import ContentLoader from "react-content-loader";

const YetToReviewCard = ({ count = 5 }): JSX.Element => {
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;
  const responsiveWidth = "100%";
  const responsiveHeight = Number(isDesktop ? "320" : "270");

  return (
    <ContentLoader
      speed={2}
      width={responsiveWidth}
      height={responsiveHeight}
      viewBox={`0 0 ${responsiveWidth} ${responsiveHeight}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect
        x="0"
        y="0"
        rx="4"
        ry="4"
        width={isDesktop ? "30%" : "65%"}
        height="14"
      />
      <rect
        x="0"
        y="20"
        rx="4"
        ry="4"
        width={isDesktop ? "50%" : "75%"}
        height={isDesktop ? 250 : 200}
      />
      <rect
        x="0"
        y={isDesktop ? 280 : 230}
        rx="4"
        ry="4"
        width={isDesktop ? "40%" : "60%"}
        height="10"
      />
      <rect
        x="0"
        y={isDesktop ? 300 : 250}
        rx="4"
        ry="4"
        width="35%"
        height="7"
      />
    </ContentLoader>
  );
};

export default YetToReviewCard;
