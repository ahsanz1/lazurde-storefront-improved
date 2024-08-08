import React from "react";
import ContentLoader from "react-content-loader";

const InputLoading = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={20}
    viewBox="0 0 400 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#bababa"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="20" />
  </ContentLoader>
);

export default InputLoading;
