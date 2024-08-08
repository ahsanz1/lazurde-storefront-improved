import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
interface AnimationWrapperProps {
  className?: string;
  externalClass?: string;
  children?: any;
  animationName?: "none" | "slide-up" | "slide-down" | "zoom-out" | "zoom-in";
  animationDuration?: string;
  animationDelay?: string;
  lazyLoad?: boolean;
  lazyLoadThreshold?: number;
  animationWrapperDivStyle?: {
    [key: string]: string;
  };
}

const AnimationWrapper = ({
  children,
  animationName = "slide-up",
  animationDuration = "0.5s",
  animationDelay = "0.2s",
  lazyLoad = false,
  lazyLoadThreshold = 0.2,
  animationWrapperDivStyle,
  className = "",
  externalClass = "",
}: AnimationWrapperProps): JSX.Element => {
  const mainDiv = useRef();
  const observer: any = useRef();
  const [showChildren, setShowChildren] = useState(false);

  const callbackFunction = (item: any) => {
    item.forEach(async (entry: any) => {
      if (entry?.isIntersecting) {
        setShowChildren(true);
      }
    });
  };

  useEffect(() => {
    if (!lazyLoad) {
      setShowChildren(true);
      return null;
    }
    if (!mainDiv.current) return null;
    observer.current =
      mainDiv.current &&
      new IntersectionObserver(callbackFunction, {
        threshold: lazyLoadThreshold,
      });
    mainDiv.current && observer.current.observe(mainDiv.current);

    return () => {};
  }, []);

  return (
    <>
      <div
        className={`${styles["animation-wrapper"]} ${styles[className]} ${externalClass}`}
        data-animation={showChildren && animationName}
        ref={mainDiv}
        style={{
          ...animationWrapperDivStyle,
          animationDuration: animationDuration,
          animationDelay: animationDelay,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default AnimationWrapper;
