import React, { useEffect, useState } from "react";
import ImageMagnifier from "components/common/ui/imageMagnifier";
import { Cross, CrossSmall } from "components/icons";
import Image from "next/image";
import styles from "./popup-image-view-v2.module.scss";
import Slider from "components/common/ui/slider/slider";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "lib/utils/useWindowSize";
import ReactDOM from "react-dom";

import {
  checkMediaType,
  desktopScreenSize,
  mobileScreenSize,
} from "lib/utils/common";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import TrillionViewer from "../../../trillion-viewer";
interface PopupImageViewProps {
  imageArray: {
    url: { node?: { [key: string]: string; altText?: string } };
    alt: string;
  }[];
  closePopup: Function;
  selectedImageUrl: string;
  selectedImageIndex: number;
  imageSize: { width: number; height: number };
  showPopup?: boolean;
  title: string;
  isJewelryExist?: boolean;
  jewelryId?: string;
}

const PopupImageViewV2 = ({
  closePopup,
  imageArray,
  selectedImageUrl,
  selectedImageIndex,
  imageSize,
  showPopup = false,
  title,
  isJewelryExist,
  jewelryId
}: PopupImageViewProps): JSX.Element => {
  const [width] = useWindowSize();
  const imageQuality: string = "url1440wide";

  useEffect(() => {
    if (showPopup) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [showPopup]);

  const InnerContent = () => {
    return (
        <AnimationWrapper animationName="slide-up" animationDelay="0.4s">
          <Slider
              className={"popup-image-slider"}
              desktopSlidePerView={1}
              mobileSlidePerView={1}
              productSlider={false}
              hasScrollbar={false}
              pagination={false}
              navigation={true}
              initialSlide={selectedImageIndex}
          >
            {imageArray?.map((image, index) => {
              const url = image?.url?.node?.[imageQuality];
              const alt = image?.alt;
              return (
                  <SwiperSlide key={index}>
                    <div
                        key={index}
                        className={`${
                            styles["div-image-container"]
                        } ${"swiper-zoom-container"}`}
                    >
                      {checkMediaType(url) !== "img" ? (
                          <video
                              autoPlay={true}
                              muted={true}
                              loop={true}
                              playsInline={true}
                              height="100%"
                              width="100%"
                              controls={false}
                          >
                            <source src={`${url}#t=0.1`} type="video/mp4"/>
                          </video>
                      ) : (
                          url && (
                              <ImageMagnifier
                                  width={imageSize.width}
                                  height={imageSize.height}
                                  zoomNum={2}
                                  url={{
                                    url: url,
                                    alt: alt,
                                  }}
                                  imageIndex={index}
                                  title={alt}
                              />
                          )
                      )}
                    </div>
                  </SwiperSlide>
              );
            })}

            {/* Add swiper slide with trillion viewer in fullwidth slider if jewelry exist */}
            {/* {isJewelryExist &&
                <SwiperSlide>
                  <div className={styles["popupTrillionViewer"]}>
                    <TrillionViewer jewelryId={jewelryId} isMobile={true}/>
                  </div>
                </SwiperSlide>
            } */}
          </Slider>

          <div
              className={styles["div-close-button"]}
              onClick={() => {
                width >= desktopScreenSize && closePopup && closePopup();
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
        </AnimationWrapper>
    );
  };
  return (
    <>
      <ImagePopUpContainer>
        <div
          className={styles["main-popup-view"]}
          data-open={showPopup ? "true" : "false"}
        >
          <>
            <InnerContent />
          </>
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

export default PopupImageViewV2;
