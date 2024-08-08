import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import React from "react";
import ContentLoader from "react-content-loader";

const MiniCartCardSkeleton = ({ count = 5 }): JSX.Element => {
  const [width] = useWindowSize();
  const isDesktop = width >= desktopScreenSize;

  const _width = isDesktop ? "380" : "320";

  return Array(count)
    .fill(count)
    .map((item, index) => {
      return (
        <ContentLoader
          key={index}
          speed={2}
          width={_width}
          height={130}
          viewBox={`0 0 ${_width} 130`}
          backgroundColor="#f3f3f3"
          foregroundColor="#bababa"
          style={{ marginBlockStart: "40px" }}
        >
          <rect x="0" y="16" rx="4" ry="4" width="100" height="100" />
          <rect x="113" y="20" rx="4" ry="4" width="150" height="18" />
          <rect x="113" y="60" rx="4" ry="4" width="90" height="18" />
          <rect x="113" y="90" rx="4" ry="4" width="90" height="18" />
          {/* <rect x="113" y="90" rx="4" ry="4" width="83" height="10" /> */}
        </ContentLoader>
      );
    }) as any;
};

export default MiniCartCardSkeleton;
