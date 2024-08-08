import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = ({ count = 1 }): JSX.Element => {
  return Array(count)
    .fill(count)
    .map((item, index) => {
      return (
        <ContentLoader
          key={index}
          speed={2}
          width={300}
          viewBox="0 0 700 350"
          backgroundColor="rgba(0,0,0,0.1)"
          foregroundColor="#ecebeb"
        >
          <rect x="14" y="52" rx="6" ry="6" width="483" height="15" />
          <rect x="14" y="105" rx="6" ry="6" width="420" height="15" />
          <rect x="14" y="158" rx="6" ry="6" width="483" height="15" />
          <rect x="14" y="211" rx="6" ry="6" width="444" height="15" />
          <rect x="14" y="263" rx="6" ry="6" width="483" height="15" />
        </ContentLoader>
      );
    }) as any;
};

export default ContentLoading;
