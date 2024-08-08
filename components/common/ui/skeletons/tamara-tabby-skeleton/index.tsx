import React from "react";
import styles from "./skeleton.module.scss";

const Skeleton = ({ width, height }: any) => {
  const style = {
    width: width || "100%",
    height: height || "1em",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    animation: "pulse 1.5s infinite ease-in-out",
  };

  return <div className={styles["skeleton"]} style={style}></div>;
};

const TamaraTabbySkeleton = ({ style }: { style?: object }) => {
  return (
    <div className={styles["wrapper"]} style={style}>
      <Skeleton width="100%" height="1em" />
      <Skeleton width="80%" height="1em" />
      <Skeleton width="90%" height="1em" />{" "}
    </div>
  );
};

export default TamaraTabbySkeleton;
