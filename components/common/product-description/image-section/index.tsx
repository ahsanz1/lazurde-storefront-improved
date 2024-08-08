import Slider from "components/common/ui/slider/slider";
import ZoomIcon from "components/icons/zoomIcon";
import Image from "next/image";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./image-section.module.scss";
import PopupImageView from "./popup-image-view";
import PopupImageViewV2 from "./popup-image-view-v2";
import { checkMediaType, desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { brandNames } from "lib/utils/constants";
import { AppContext } from "lib/context";
import viewerIcon from "../../../../public/icons/3d-viewer.svg";
import fullwidthIcon from "../../../../public/icons/fullwidth.svg";
import TrillionViewer from "../../trillion-viewer";
import { jewelryExists } from "../../check-jewelry-exist";

interface ImageSectionProps {
  imageArray: {
    url: { node?: { [key: string]: string; altText?: string } };
    alt: string;
  }[];
  setShowPopup: Function;
  setSelectedImageUrl?: Function;
  setSelectedImageIndex?: Function;
  selectedImageIndex?: number;
  title?: string;
  setTrillionViewerActive?: Function;
  isTrillionViewerActive?: boolean;
  isJewelryExist?: boolean;
  jewelryId?: string;
}
interface ImageArrayProps {
  imageArray: {
    url: { node?: { [key: string]: string; altText?: string } };
    alt: string;
  }[];
  title: string;
  sku: string;
}
const imageQuality: string = "url1280wide";

const ImageSection = ({
  imageArray = [],
  title,
  sku,
}: ImageArrayProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<any>("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 300, height: 300 });
  const [width] = useWindowSize();
  const [isTrillionViewerActive, setTrillionViewerActive] =
    useState<boolean>(false);

  // Hardcoded jewelryId. To work properly here should be productId or sku of a product which is equal sku field in trillion dashboard
  const jewelryId = sku;
  // const jewelryId = 'lazurde-earrings'
  //Checking if jewelryId exist in trillion database
  const [isJewelryExist, setJewelryExist] = useState<boolean>(false);
  // useEffect(() => {
  //   jewelryExists(jewelryId).then((response) => {
  //     setJewelryExist(response);
  //   });
  // }, []);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  useEffect(() => {
    if (width > desktopScreenSize) {
      setImageSize({ width: 600, height: 600 });
    } else {
      setImageSize({ width: 400, height: 400 });
    }
  }, [width]);

  return (
    <>
      <div className={styles["main-image-section"]}>
        {width > desktopScreenSize ? (
          imageArray &&
          imageArray?.length > 0 && (
            <>
              {appState?.brandEN === brandNames.missl ? (
                <AnimationWrapper
                  animationName="slide-up"
                  animationDelay="0.4s"
                >
                  <DesktopImageSectionV1
                    imageArray={imageArray}
                    setShowPopup={setShowPopup}
                    setSelectedImageUrl={setSelectedImageUrl}
                    setSelectedImageIndex={setSelectedImageIndex}
                    title={title}
                  />
                </AnimationWrapper>
              ) : (
                <>
                  <AnimationWrapper
                    animationName="slide-up"
                    animationDelay="0.4s"
                  >
                    <DesktopImageSectionV2
                      imageArray={imageArray}
                      setShowPopup={setShowPopup}
                      setSelectedImageUrl={setSelectedImageUrl}
                      setSelectedImageIndex={setSelectedImageIndex}
                      title={title}
                      setTrillionViewerActive={setTrillionViewerActive}
                      // isTrillionViewerActive={isTrillionViewerActive}
                      isJewelryExist={isJewelryExist}
                      jewelryId={jewelryId}
                    />
                  </AnimationWrapper>
                </>
              )}
            </>
          )
        ) : (
          <AnimationWrapper animationName="slide-up" animationDelay="0.4s">
            <MobileImageSection
              imageArray={imageArray}
              setShowPopup={setShowPopup}
              setSelectedImageUrl={setSelectedImageUrl}
              setSelectedImageIndex={setSelectedImageIndex}
              title={title}
              isJewelryExist={isJewelryExist}
              jewelryId={jewelryId}
            />
          </AnimationWrapper>
        )}
      </div>
      {showPopup ? (
        <>
          {appState?.brandEN === brandNames.missl ? (
            <PopupImageView
              closePopup={() => {
                setShowPopup(false);
              }}
              showPopup={showPopup}
              imageArray={imageArray}
              selectedImageUrl={selectedImageUrl}
              selectedImageIndex={selectedImageIndex}
              imageSize={imageSize}
              title={title}
            ></PopupImageView>
          ) : (
            <PopupImageViewV2
              closePopup={() => {
                setShowPopup(false);
              }}
              showPopup={showPopup}
              imageArray={imageArray}
              selectedImageUrl={selectedImageUrl}
              selectedImageIndex={selectedImageIndex}
              imageSize={imageSize}
              title={title}
              isJewelryExist={isJewelryExist}
              jewelryId={jewelryId}
            ></PopupImageViewV2>
          )}
        </>
      ) : null}
    </>
  );
};

export default ImageSection;

const DesktopImageSectionV1 = ({
  imageArray,
  setShowPopup,
  setSelectedImageUrl,
  setSelectedImageIndex,
  title,
}: ImageSectionProps): any => {
  const [width] = useWindowSize();
  return (
    <div
      className={styles["v1-image-container"]}
      data-images-length={imageArray?.length}
    >
      {imageArray?.slice(0, 4)?.map((image, index) => {
        return (
          <div
            key={index}
            className={styles["div-image-container-v1"]}
            onClick={() => {
              setSelectedImageIndex(index);
              setSelectedImageUrl({
                url: image?.url?.node?.[imageQuality],
                alt: image?.alt,
              });
              setShowPopup(true);
            }}
          >
            {/* <MultiMediaDisplay
              imageUrl={image?.node?.[imageQuality]}
              showLabel={true}
            /> */}

            <Image
              src={image?.url?.node?.[imageQuality] || "/"}
              alt={image?.alt || ""}
              title={image?.alt || ""}
              width={width > desktopScreenSize ? 314 : 167.5}
              height={width > desktopScreenSize ? 314 : 167.5}
              className={styles["product-img"]}
              layout="responsive"
              quality={100}
              // unoptimized={isDev}
              priority={true}
            ></Image>
            <div className={styles["div-zoom-icon"]}>
              <ZoomIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DesktopImageSectionV2 = ({
  imageArray,
  setShowPopup,
  setSelectedImageUrl,
  setSelectedImageIndex,
  title,
  setTrillionViewerActive,
  isTrillionViewerActive,
  isJewelryExist,
  jewelryId,
}: ImageSectionProps): any => {
  const imageQuality: string = "url1280wide";
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const firstUrl = imageArray?.[0]?.url?.node?.[imageQuality];
  const [imageUrl, setImageUrl] = useState({
    url: firstUrl,
    alt: imageArray?.[0]?.alt,
  });

  // get parent element with all gallery objects
  const productObjectsRef: any = useRef();

  // make viewer visible and set index to show the right slide when fullwidth
  const handle3DViewerClick = () => {
    setTrillionViewerActive(true);
    if (productObjectsRef.current) {
      setActiveImageIndex(productObjectsRef.current.childElementCount - 1);
    }
  };

  useEffect(() => {
    setImageUrl({
      url: firstUrl,
      alt: imageArray?.[0]?.alt,
    });
  }, [firstUrl]);
console.log("imageArray", imageArray)
  return (
    <div className={styles["img-content-wrapper"]}>
      <div key={imageUrl?.url} className={styles["div-image-container-v2"]}>
        <div
          onClick={() => {
            setSelectedImageIndex(activeImageIndex);
            setSelectedImageUrl(imageUrl);
            setShowPopup(true);
          }}
          className={styles["div-selected-image"]}
        >
          <MultiMediaDisplay
            imageUrl={imageUrl}
            showLabel={false}
            title={title}
          />
          <div className={styles["div-zoom-icon"]}>
            <ZoomIcon />
          </div>
        </div>

        {/* Trillion viewer slide show on desktop if jewelry exist and is selected */}
        {/* {isTrillionViewerActive && isJewelryExist && (
          <>
            <div
              className={styles["fullwidth-button-desktop"]}
              onClick={() => {
                setShowPopup(true);
                setSelectedImageIndex(activeImageIndex);
              }}
            >
              <Image
                src={fullwidthIcon}
                layout={"fill"}
                alt={"Fullwidth Icon"}
              />
            </div>
            <TrillionViewer jewelryId={jewelryId} />
          </>
        )} */}
      </div>
      <div className={styles["div-images-column"]} ref={productObjectsRef}>
        {imageArray &&
          imageArray?.length > 1 &&
          imageArray?.map((image, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={() => {
                    setImageUrl({
                      url: image?.url?.node?.[imageQuality],
                      alt: image?.alt,
                    });
                    setActiveImageIndex(index);
                    // hide trillion viewer
                    setTrillionViewerActive(false);
                  }}
                  data-active={activeImageIndex === index}
                >
                  <MultiMediaDisplay
                    imageUrl={{
                      url: image?.url?.node?.[imageQuality],
                      alt: image?.alt,
                    }}
                    showLabel={true}
                    title={`${title} - ${index + 2}`}
                  />
                </div>
                <div
                  key={index}
                  onClick={() => {
                    setImageUrl({
                      url: image?.url?.node?.[imageQuality],
                      alt: image?.alt,
                    });
                    setActiveImageIndex(index);
                    // hide trillion viewer
                    setTrillionViewerActive(false);
                  }}
                  data-active={activeImageIndex === index}
                  className={styles["tng-thumb"]}
                >
                  <MultiMediaDisplay
                    imageUrl={{
                      url: image?.url?.node?.[imageQuality],
                      alt: image?.alt,
                    }}
                    showLabel={true}
                    title={`${title} - ${index + 2}`}
                    duplicate={true}
                  />
                </div>
              </>
            );
          })}
        {/* Trillion viewer button to start viewer initializing if jewelry exist */}
        {/* {isJewelryExist && (
          <div onClick={handle3DViewerClick}>
            <Image src={viewerIcon} layout={"fill"} alt={"Viewer Icon"} />
          </div>
        )} */}
      </div>
    </div>
  );
};

const MobileImageSection = ({
  imageArray,
  setShowPopup,
  setSelectedImageUrl,
  setSelectedImageIndex,
  selectedImageIndex,
  title,
  isJewelryExist,
  jewelryId,
}: ImageSectionProps): any => {
  const imageQuality: string = "url1440wide";
  const [lastSLide, setLastSlide] = useState(0);

  return (
    <Slider
      mobileSlidePerView={1}
      productSlider={true}
      initialSlide={selectedImageIndex}
      setLastSlide={setLastSlide}
    >
      {imageArray?.map((image, index) => {
        const url = image?.url?.node?.[imageQuality];
        const alt = image?.alt;
        return (
          <SwiperSlide key={index}>
            <div
              key={index}
              className={styles["div-image-container-v2"]}
              onClick={() => {
                setShowPopup(true);
                setSelectedImageUrl({ url, alt });
                setSelectedImageIndex(index);
              }}
            >
              {checkMediaType(url) !== "img" ? (
                <>
                  <video
                    autoPlay={false}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    height="100%"
                    width="100%"
                    controls={false}
                  >
                    <source src={`${url}#t=0.1`} type="video/mp4" />
                  </video>
                  <div className={styles["label-360-view"]}>360 view</div>
                </>
              ) : (
                url && (
                  <Image
                    src={url || "/"}
                    alt={alt || image?.url?.node?.altText || ""}
                    title={alt || image?.url?.node?.altText || ""}
                    layout={"fill"}
                    quality={100}
                    // unoptimized={isDev}
                    priority={true}
                  />
                )
              )}

              {/* <div className={styles["div-zoom-icon"]}>
              <ZoomIcon />
            </div> */}
            </div>
          </SwiperSlide>
        );
      })}

      {/* Add swiper slide with trillion viewer on mobile if jewelry exist */}
      {/* {isJewelryExist && (
        <SwiperSlide>
          <div
            className={styles["fullwidth-button"]}
            onClick={() => {
              setShowPopup(true);
              setSelectedImageIndex(lastSLide);
            }}
          >
            <Image src={fullwidthIcon} layout={"fill"} alt={"Fullwidth Icon"} />
          </div>
          <div className={styles["mobile-trillion-viewer"]}>
            <TrillionViewer jewelryId={jewelryId} isMobile={true} />
          </div>
        </SwiperSlide>
      )} */}
    </Slider>
  );
};

const MultiMediaDisplay = ({
  imageUrl,
  showLabel,
  title,
  duplicate,
}: {
  imageUrl: { url: string; alt: string };
  showLabel: boolean;
  title: string;
  duplicate?: boolean;
}): JSX.Element => {
  if (!imageUrl?.url) return null;
  return (
    <React.Fragment key={imageUrl?.url}>
      {checkMediaType(imageUrl?.url) !== "img" ? (
        <>
          <video
            autoPlay={false}
            muted={true}
            loop={true}
            playsInline={true}
            height="100%"
            width="100%"
            controls={false}
          >
            <source src={`${imageUrl?.url}#t=0.1`} type="video/mp4" />
          </video>
          {showLabel && (
            <div className={styles["label-360-view"]}>360 view</div>
          )}
        </>
      ) : duplicate ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="" alt={imageUrl?.alt} title={imageUrl?.alt}></img>
      ) : (
        <Image
          src={imageUrl?.url || "/"}
          alt={imageUrl?.alt}
          title={imageUrl?.alt}
          layout={"fill"}
          quality={100}
          priority={true}
          // unoptimized={isDev}
        ></Image>
      )}
    </React.Fragment>
  );
};
