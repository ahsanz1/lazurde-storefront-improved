import React from "react";
import ContentLoader from "react-content-loader";

const DotsLoader = ({
  backgroundColor = "rgba(0,0,0,0.1)",
  foregroundColor = "#ecebeb",
}) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={60}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
  >
    <circle cx="20" cy="86" r="20" />
    <circle cx="200" cy="86" r="20" />
    <circle cx="380" cy="86" r="20" />
  </ContentLoader>
);

export default DotsLoader;
