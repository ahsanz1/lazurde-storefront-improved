import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import React, { useEffect, useState } from "react";
import styles from "./tooltip.module.scss";

interface ToolTipProps {
  className?: string;
  parentId?: string;
  text?: string;
  desktopHeight?: number;
  mobileHeight?: number;
  desktopWidth?: number;
  mobileWidth?: number;
}

const ToolTip = ({
  className,
  parentId,
  text,
  desktopWidth,
  mobileWidth,
  desktopHeight,
  mobileHeight,
}: ToolTipProps): JSX.Element => {
  const [width] = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  useEffect(() => {
    const element = document.getElementById(parentId);
    const toolTip = document.getElementById("toolTip");

    const showToolTip = () => {
      const bounding = element?.getBoundingClientRect();
      if (toolTip) {
        toolTip.style.transform = `translate3d(${
          windowWidth > desktopScreenSize
            ? bounding.left
            : bounding.left - bounding.width
        }px, ${bounding.bottom}px, 0px)`;
        toolTip.style.opacity = "1";
      }
    };

    const hideToolTip = () => {
      if (toolTip) {
        toolTip.style.opacity = "0";
      }
    };

    const touchFunction = () => {
        if (toolTip.style.opacity.toString() == "1") {
          hideToolTip();
        } else {
          showToolTip();
        }
      };

    if (windowWidth > desktopScreenSize) {
      element?.addEventListener("pointerenter", showToolTip);

      element?.addEventListener("pointerleave", hideToolTip);
    } else {
      
      element?.addEventListener("click", touchFunction);
    }
    return () => {
        element?.removeEventListener('click', touchFunction)
      element?.removeEventListener("pointerenter", showToolTip);
      element?.removeEventListener("pointerleave", hideToolTip);
    };
  }, [windowWidth]);

  return (
    <div
      className={`${styles["div-toolTip"]} ${className}`}
      id={"toolTip"}
      style={{
        width: `${
          windowWidth > desktopScreenSize ? desktopWidth : mobileWidth
        }px`,
        height: `${
          windowWidth > desktopScreenSize ? desktopHeight : mobileHeight
        }px`,
      }}
    >
      <span>{text}</span>
    </div>
  );
};

export default ToolTip;
