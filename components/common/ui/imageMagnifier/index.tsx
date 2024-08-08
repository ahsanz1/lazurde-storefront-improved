import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./image-magnifier.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { isDev } from "general-config";

interface ImageMagnifierProps {
  width: number;
  height: number;
  zoomNum: number;
  imageIndex?: number;
  url: any;
  versionOne?: boolean;
  title: string;
}

const ImageMagnifier = ({
  width = 300,
  height = 300,
  zoomNum = 2,
  url = "/",
  imageIndex = 0,
  versionOne = false,
  title,
}: ImageMagnifierProps): JSX.Element => {
  const lazyRoot = useRef(null);
  const [showZoomed, setShowZoomed] = useState(true);
  const [size] = useWindowSize();

  useEffect(() => {
    if (size < desktopScreenSize) return;
    const element = document.getElementsByClassName("popup-zoom-container");

    if (showZoomed) {
      element[imageIndex].addEventListener("pointermove", (event) => {
        zoomOnImage(event);
      });
    } else {
      element[imageIndex].removeEventListener("pointermove", zoomOnImage);
    }
  }, [showZoomed]);

  const zoomOnImage = (e: any) => {
    // var zoomer = e.currentTarget;
    let offSetX = 0;
    let offSetY = 0;

    if (e?.type === "pointermove") {
      offSetX = e.offsetX;
      offSetY = e.offsetY;
    } else {
      // const rect = e.target.getBoundingClientRect();
      // offSetX = e.touches[0].clientX - window.pageXOffset - rect.left;
      // offSetY = e.touches[0].clientY - window.pageYOffset - rect.top;
      return;
    }

    let x = width * zoomNum - offSetX;
    // let y = height * zoomNum - offSetY;
    let y = height * zoomNum - (e.target.offsetHeight + offSetY);

    // let x = (offSetX / zoomer.offsetWidth) * 60;
    // let y = (offSetY / e.offsetHeight) * 100
    // zoomer.style.backgroundPosition = x + '% ' + y + '%';
    // zoomer.style.opacity = zoomer.style.opacity == 0 ? 1 : 0;
    // console.log("something1",e, offSetY, y);

    lazyRoot.current.children[0].children[0].style.top = `${y}px`;
    // lazyRoot.current.children[0].children[0].style.transform = `translateY(${y}px)`;
    // lazyRoot.current.children[0].children[0].style.left = `${x}px`;
  };

  return (
    <div
      ref={lazyRoot}
      id={"main-image-magnifier"}
      className={`${styles["main-image-magnifier"]} popup-zoom-container ${
        styles[versionOne ? "version-one-style" : ""]
      }`}
      data-zoomed={showZoomed}
      onClick={() => {
        // if (versionOne) return;
        if (showZoomed) {
          setShowZoomed(false);
          return null;
        }
        setShowZoomed(true);
      }}
      // onPointerMove={(event) => {
      //   zoomOnImage(event);
      // }}
      // style={{width: width * zoomNum, height: height * zoomNum}}
    >
      <Image
        alt={url?.alt}
        title={url?.alt}
        width={width * zoomNum}
        height={height * zoomNum}
        className={styles["image-large"]}
        src={url?.url}
        layout="fixed"
        quality={100}
        // unoptimized={isDev}
      />
      <Image
        alt={url?.alt}
        title={url?.alt}
        className={styles["image-small"]}
        width={width}
        height={height}
        src={url?.url}
        layout="fixed"
        objectFit={size > desktopScreenSize ? "fill" : "contain"}
        quality={100}
        // unoptimized={isDev}
      />
    </div>
  );
};

export default ImageMagnifier;
