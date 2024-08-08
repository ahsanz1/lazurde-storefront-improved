import React from "react";
import ContentLoader from "react-content-loader";

interface ReviewsLoaderProps {
  width?: string | number;
  height?: string | number;
}

const ReviewsLoader = ({
  width = "",
  height = "",
}: ReviewsLoaderProps): JSX.Element => (
  <ContentLoader
    speed={3}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 100% 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#bababa"
  >
    <rect x="0" y="7" rx="0" ry="0" width="300" height="24" />
    <rect x="7" y="50" rx="0" ry="0" width="14" height="12" />
    <rect x="37" y="50" rx="0" ry="0" width="14" height="12" />
    <rect x="67" y="50" rx="0" ry="0" width="14" height="12" />
    <rect x="97" y="50" rx="0" ry="0" width="14" height="12" />

    <rect x="127" y="50" rx="0" ry="0" width="14" height="12" />
    <rect x="7" y="204" rx="0" ry="0" width="100%" height="2" />
    <rect x="7" y="121" rx="15" ry="15" width="300" height="42" />
    
    <rect x="7" y="225" rx="0" ry="0" width="200" height="8" />
    <rect x="7" y="312" rx="0" ry="0" width="200" height="4" />
    <rect x="7" y="326" rx="0" ry="0" width="150" height="4" />
    <rect x="7" y="347" rx="0" ry="0" width="200" height="4" />

    <rect x="7" y="250" rx="0" ry="0" width="14" height="12" />
    <rect x="37" y="250" rx="0" ry="0" width="14" height="12" />
    <rect x="67" y="250" rx="0" ry="0" width="14" height="12" />
    <rect x="97" y="250" rx="0" ry="0" width="14" height="12" />
    <rect x="127" y="250" rx="0" ry="0" width="14" height="12" />
  </ContentLoader>
);

export default ReviewsLoader;
