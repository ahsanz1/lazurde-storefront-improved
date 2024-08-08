import React from "react";
import ContentLoader from "react-content-loader";

const PdpLoaderMobile = () => {
  return (
    <ContentLoader
      speed={3}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 450 900"
      preserveAspectRatio="none"
      backgroundColor="#f3f3f3"
      foregroundColor="#bababa"
    >

      <rect x="0" y="50" rx="5" ry="0" width="100%" height="500px" />

      <rect x="10" y="580" rx="3" ry="3" width="150" height="18" />
      <rect x="10" y="610" rx="3" ry="3" width="250" height="20" />
      <rect x="10" y="640" rx="3" ry="3" width="180" height="20" />


      <rect x="10" y="680" rx="3" ry="3" width="80" height="10" />
      <rect x="10" y="700" rx="3" ry="3" width="80" height="10" />
      <rect x="10" y="440" rx="3" ry="3" width="250" height="5" />

    </ContentLoader>
  );
};

export default PdpLoaderMobile;
