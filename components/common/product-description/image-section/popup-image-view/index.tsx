import React, { useEffect, useState } from "react";
import ImageMagnifier from "components/common/ui/imageMagnifier";
import { Cross, CrossSmall } from "components/icons";
import Image from "next/image";
import styles from "./popup-image-view.module.scss";
import ReactDOM from "react-dom";
import { isDev } from "general-config";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";

interface PopupImageViewProps {
  closePopup: Function;
  imageArray: {
    url: { node?: { [key: string]: string; altText?: string } };
    alt: string;
  }[];
  selectedImageUrl: { url: string; alt: string };
  selectedImageIndex: string | number;
  imageSize: { width: number; height: number };
  title: string;
  showPopup: boolean;
}

const PopupImageView = ({
  closePopup,
  imageArray,
  selectedImageUrl,
  selectedImageIndex,
  imageSize,
  showPopup,
  title,
}: PopupImageViewProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState(selectedImageUrl);
  const [activeImageIndex, setActiveImageIndex] = useState(selectedImageIndex);
  const imageQuality: string = "url1440wide";
  const [width] = useWindowSize();

  useEffect(() => {
    if (showPopup) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [showPopup]);

  return (
    <>
      <ImagePopUpContainer>
        <div className={styles["main-popup-view"]}>
          <div className={styles["div-images-column"]}>
            {imageArray?.map((image, index) => {
              const url = image?.url?.node?.[imageQuality];
              const alt = image?.alt;
              return (
                <div
                  key={index}
                  onClick={() => {
                    setImageUrl({
                      url: url,
                      alt: alt,
                    });
                    setActiveImageIndex(index);
                  }}
                  data-active={activeImageIndex === index}
                >
                  <Image
                    src={url}
                    alt={alt || image?.url?.node?.altText}
                    title={alt || image?.url?.node?.altText}
                    layout={"fill"}
                    quality={100}
                    // unoptimized={isDev}
                  ></Image>
                </div>
              );
            })}
          </div>
          {imageUrl && (
            <ImageMagnifier
              width={imageSize?.width}
              height={imageSize?.height}
              zoomNum={2}
              url={imageUrl}
              versionOne={true}
              title={title}
            />
          )}
          <div
            className={styles["div-close-button"]}
            onClick={() => {
              closePopup && closePopup();
            }}
          >
            {width >= desktopScreenSize ? (
              <Cross width={20}></Cross>
            ) : (
              <CrossSmall
                onClick={() => {
                  closePopup && closePopup();
                }}
              ></CrossSmall>
            )}
          </div>
        </div>
      </ImagePopUpContainer>
    </>
  );
};

const ImagePopUpContainer = ({ children }: { children: JSX.Element }) => {
  const [bottomBtnDiv, setBottomBtnDiv] = useState<any>("");

  useEffect(() => {
    const div = document.getElementById("portal");
    div && setBottomBtnDiv(div);
  }, []);

  return bottomBtnDiv
    ? ReactDOM.createPortal(<div>{children}</div>, bottomBtnDiv)
    : null;
};

export default PopupImageView;
