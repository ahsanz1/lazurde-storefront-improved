import React from "react";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import ContentLoader from "react-content-loader";

const SkeletonImage = ({
  routeToPdp = () => {},
}: {
  routeToPdp?: Function;
}) => {
  const [width] = useWindowSize();
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      animate={false}
      viewBox={`0 0 100% 200%`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ aspectRatio: width > desktopScreenSize ? "1/1.03" : "1/1.14" }}
      onClick={() => {
        routeToPdp();
      }}
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="200%" />
    </ContentLoader>
  );
};

export default SkeletonImage;
