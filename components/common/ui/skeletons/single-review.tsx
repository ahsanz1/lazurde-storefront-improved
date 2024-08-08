import React from "react";
import ContentLoader from "react-content-loader";

const SingleReviewLoader = () => {
  return (
    <ContentLoader
      speed={3}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 100% 100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#bababa"
    >
      <rect x="7" y="0" rx="0" ry="0" width="200" height="8" />
      <rect x="7" y="70" rx="0" ry="0" width="200" height="4" />
      <rect x="7" y="100" rx="0" ry="0" width="150" height="4" />
      <rect x="7" y="110" rx="0" ry="0" width="200" height="4" />

      <rect x="7" y="20" rx="0" ry="0" width="14" height="12" />
      <rect x="37" y="20" rx="0" ry="0" width="14" height="12" />
      <rect x="67" y="20" rx="0" ry="0" width="14" height="12" />
      <rect x="97" y="20" rx="0" ry="0" width="14" height="12" />
      <rect x="127" y="20" rx="0" ry="0" width="14" height="12" />
    </ContentLoader>
  );
};

export default SingleReviewLoader;
