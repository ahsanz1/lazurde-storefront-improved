import React from "react";
import ContentLoader from "react-content-loader";

const PpdLoader = () => {
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


      <rect x="10" y="140" rx="5" ry="0" width="70%" height="70%" />

      <rect x="75%" y="150" rx="3" ry="3" width="150" height="18" />
      <rect x="75%" y="190" rx="3" ry="3" width="250" height="22" />
      <rect x="75%" y="230" rx="3" ry="3" width="180" height="22" />

      <rect x="75%" y="300" rx="3" ry="3" width="100" height="15" />
      <rect x="75%" y="340" rx="3" ry="3" width="100" height="15" />

      <rect x="75%" y="400" rx="3" ry="3" width="250" height="5" />
      <rect x="75%" y="420" rx="3" ry="3" width="250" height="5" />
      <rect x="75%" y="440" rx="3" ry="3" width="250" height="5" />

      <rect x="75%" y="500" rx="3" ry="3" width="250" height="5" />
      <rect x="75%" y="520" rx="3" ry="3" width="250" height="5" />
      <rect x="75%" y="540" rx="3" ry="3" width="250" height="5" />

    </ContentLoader>
  );
};

export default PpdLoader;
