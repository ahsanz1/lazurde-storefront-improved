import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import React from "react";
import ContentLoader from "react-content-loader";

const PlpListSkeleton = ({ count = 5 }): JSX.Element => {
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;
  const responsiveWidth = isDesktop ? "250" : "200";
  const responsiveHeight = Number(isDesktop ? "300" : "250");

  return Array(count)
    .fill(count)
    .map((item, index) => {
      return (
        <ContentLoader
          key={index}
          speed={2}
          width={350 || responsiveWidth}
          height={400|| responsiveHeight}
          viewBox={`0 0 ${responsiveWidth} ${responsiveHeight}`}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{ padding: '10px' }} 
        >
          <rect
            x="0"
            y="0"
            rx="4"
            ry="4"
            width="100%"
            height={isDesktop ? 250 : 200}
          />
          <rect x="0" y={isDesktop ? 260 : 210} rx="4" ry="4" width="75%" height="14" />
          <rect x="0" y={isDesktop ? 280 : 230} rx="4" ry="4" width="35%" height="14" />
        </ContentLoader>
      );
    }) as any;
};

export default PlpListSkeleton;
