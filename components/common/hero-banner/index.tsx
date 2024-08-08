import { ImageType } from "lib/types/common";
import Image from "next/image";
import React, { FC, useContext, useEffect, useState } from "react";
import styles from "./Hero-banner.module.scss";
import Button from "components/common/ui/button/index";
import { useRouter } from "next/router";
import AnimationWrapper from "../ui/animation-wrapper";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import { AppContext } from "lib/context";
import Heading from "../ui/heading";
import PromotionTimer from "../promotion-timer";
import Link from "next/link";
import useWindowSize from "lib/utils/useWindowSize";
import ContentLoader from "react-content-loader";
import { homePageBanner } from "lib/utils/datalayer-events";
import Spinner from "../ui/spinner";

type LazurdeHeroBannerTypes = {
  backgroundImage?: ImageType;
  bannerText?: string;
  buttonText?: string;
  buttonLink?: string;
  bannerBodyText?: string;
  heroBannerLink?: string;
};

interface LazurdeHeroBannerProps {
  heroBannerArray: LazurdeHeroBannerTypes[];
  component: any;
  page: any;
}

const LazurdeHeroBanner: FC<any> = ({
  heroBannerArray = [],
  component,
  page,
  currentPage = "",
}: any): JSX.Element => {
  const router = useRouter();
  const [size] = useWindowSize();
  const { appState } = useContext(AppContext);
  const findBanner = component?.getParameters()?.["Banner One"];
  const getBanner = !!findBanner && page?.getContent(findBanner);
  const findData = !!getBanner && getBanner?.getData();
  const getTitle = !!findData && findData?.title;
  const getMultiColorTitle = !!findData && findData?.multiColorTitle?.value;
  const getMultiColorDescription =
    !!findData && findData?.multiColorDescription?.value;
  const getMultiBtns = !!findData && findData?.multiButtons1;
  const getDescription = findData?.description;
  const getCTA = findData?.btnCTA;
  const getCTALink = findData?.btnLink;
  const btnLink = getCTALink && page?.getContent(getCTALink)?.getUrl();
  const externalLink = findData?.externalCTA;
  const imgRef = findData?.banne;
  const mobileimgRef = findData?.mobileBanner;
  const bannerImg = getBloomreachImg(page, imgRef);
  const mobileBannerImg = getBloomreachImg(page, mobileimgRef);
  const banner = size > desktopScreenSize ? bannerImg : mobileBannerImg;
  const bannerBtnColor =
    findData?.bannerCTAColor?.selectionValues?.[0]?.key?.toLowerCase();
  const [isLoaded, setIsLoading] = useState(false);

  const bannerVideo =
    findData?.bannerVideo &&
    page?.getContent(findData?.bannerVideo)?.data?.asset?.links?.site?.href;

  const mobileBannerVideo =
    findData?.mobileVideo &&
    page?.getContent(findData?.mobileVideo)?.data?.asset?.links?.site?.href;
  const isPLPCollection = router?.asPath === "/plp-collection";
  const bannerPosition =
    findData?.bannerTextPosition?.bannertextPosition?.selectionValues;

  const promotion = findData?.promoTime?.promotionTimer;
  const promoTitle = findData && findData?.promoTime?.promoTitle;
  const promotionName = findData && findData?.promoTime?.promotionName;
  const promotionID = findData && findData?.promoTime?.promotionId;
  const creativeName = findData && findData?.promoTime?.creativeName;
  const creativeSlot = findData && findData?.promoTime?.creativeSlot;
  const [promotionTimer, setPromotionTimer] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(false);
  const handleCountdownComplete = () => {
    setPromotionTimer(false);
  };

  useEffect(() => {
    if (!findData?.promoTime?.promotion) {
      window.localStorage.removeItem("Promotion");
    }
    component && setIsLoading(true);
  }, [component]);

  useEffect(() => {
    homePageBanner(
      "homepage_banner_view",
      promotionName,
      promotionID,
      creativeName,
      creativeSlot
    );
  }, [promotionName, promotionID, creativeName, creativeSlot]);

  promotion &&
    typeof window !== "undefined" &&
    window?.localStorage.setItem("Promotion", JSON.stringify(promotion));
  const flashTimeFromCMS = findData && findData?.dateWithTime;

  const bannerContentDiv = (isVideoWrapper: boolean) => {
    return (
      <AnimationWrapper animationName="slide-up" animationDelay="1.0s">
        {bannerLoading ? (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner width={50} height={50} stroke={6} color="#A9A9A9" />
          </div>
        ) : null}

        <div
          onClick={() => {
            homePageBanner(
              "homepage_banner_click",
              promotionName,
              promotionID,
              creativeName,
              creativeSlot
            );
            if (!externalLink && !btnLink) return;
            if (router?.asPath === btnLink) return;
            router.push(externalLink || btnLink);
          }}
          className={`${styles["content-wrapper"]} ${styles[isPLPCollection ? "center-content" : ""]
            }`}
          data-content-position={bannerPosition?.[0]?.key?.trim() || "Top Left"}
        >
          <div
            className={
              styles[
              promotion
                ? "timer-div"
                : getMultiBtns?.length > 0
                  ? "multi-btns-div"
                  : "content-div"
              ]
            }
          >
            {promoTitle || getTitle || getMultiColorTitle || getMultiColorDescription || getDescription ? <div className={styles["banner-text-div"]}>
              {flashTimeFromCMS && promotionTimer ? (
                <PromotionTimer
                  timeUTC={flashTimeFromCMS}
                  title={promoTitle || getTitle}
                  handleCountdownComplete={handleCountdownComplete}
                />
              ) : (
                <>
                  {getMultiColorTitle || getTitle ? <Heading
                    element="h1"
                    className={styles["banner-text"]}
                    data-testid="banner-text"
                  >
                    {getMultiColorTitle ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: getMultiColorTitle,
                        }}
                      ></p>
                    ) : (
                      getTitle
                    )}
                  </Heading> : null}
                </>


              )}
              {getMultiColorDescription || getDescription ? <Heading
                element="h2"
                className={styles["sample-text"]}
                data-testid="bannerBodyText"
              >
                {getMultiColorDescription ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: getMultiColorDescription,
                    }}
                  ></p>
                ) : (
                  getDescription
                )}
              </Heading> : null}

            </div> : null}

            <div
              className={
                styles[getMultiBtns?.length > 0 ? "banner-multi-buttons" : ""]
              }
            >
              {getMultiBtns?.length > 0 ? (
                getMultiBtns?.map((button: any) => {
                  const {
                    newTabCheck,
                    bannerCTA,
                    internalCTALink,
                    externalCTALink,
                    buttonSize,
                    colorCTA,
                  } = button;
                  const internalLink =
                    internalCTALink &&
                    page?.getContent(internalCTALink)?.getUrl();
                  const btnColor =
                    colorCTA?.selectionValues?.[0]?.key?.toLowerCase();
                  const btnSize = buttonSize?.selectionValues?.[0]?.key;
                  let size: any = "lr";
                  if (btnSize === "Large") {
                    size = "xxl";
                  } else if (btnSize === "Medium") {
                    size = "lr";
                  } else if (btnSize === "Small") {
                    size = "md";
                  }
                  return (
                    <>
                      <div className={styles["banner-button-div"]}>
                        <Button
                          buttonStyle={btnColor ? btnColor : "transparent"}
                          buttonText={bannerCTA}
                          buttonSize={size}
                          onClick={() => {
                            if (!externalCTALink && !internalLink) return;
                            if (newTabCheck) {
                              window.open(externalCTALink, "_blank");
                            } else {
                              router.push(externalCTALink || internalLink);
                            }
                          }}
                          type={"button"}
                        />
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className={styles["banner-button-div"]}>
                    {getCTA ? (
                      <Button
                        buttonStyle={bannerBtnColor ? bannerBtnColor : "black"}
                        buttonText={getCTA}
                        buttonSize={"lr"}
                        onClick={() => {
                          if (!externalLink && !btnLink) return;
                          router.push(externalLink || btnLink);
                        }}
                        type={"button"}
                      />
                    ) : null}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </AnimationWrapper>
    );
  };

  if (!isLoaded) {
    return <div className={styles["hero-banner-skeleton"]}></div>;
  }

  if (isLoaded && (bannerVideo || mobileBannerVideo)) {
    return (
      <div
        onClick={() => {
          if (!externalLink && !btnLink) return;
          if (router?.asPath === btnLink) return;
          setBannerLoading(true);
          router.push(externalLink || btnLink);
        }}
        className={styles["video-wrapper"]}
      >
        <AnimationWrapper lazyLoad={true} lazyLoadThreshold={0.1}>
          <div className={styles["video-div"]}>
            <Link href={externalLink || btnLink || ""}>
              <a>
                <video
                  key={size > desktopScreenSize ? "0" : "1"}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  height="100%"
                  width="100%"
                  controls={false}
                >
                  <source
                    src={
                      size > desktopScreenSize ? bannerVideo : mobileBannerVideo
                    }
                    type="video/mp4"
                  />
                </video>
              </a>
            </Link>
          </div>
          <div
            data-show-data={bannerLoading}
            className={styles["video-content-div"]}
          >
            {bannerContentDiv(true)}
          </div>
        </AnimationWrapper>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => {
          if (!externalLink && !btnLink) return;
          if (router?.asPath === btnLink) return;
          setBannerLoading(true);
          router.push(externalLink || btnLink);
        }}
        className={`${styles["hero-banner-block"]}  ${heroBannerArray.length > 1 && styles["block-spacing"]
          } ${router?.asPath == "/miss-l" || router?.asPath == "/waves"
            ? styles["top-spacing"]
            : ""
          } ${styles[currentPage]}`}
      >
        <>
          <AnimationWrapper animationName="zoom-out" animationDuration="1s">
            <div className={styles["banner-image"]}>
              <div
                className={`${styles["hero-banner-container"]} ${classNames(
                  heroBannerArray,
                  router
                )}`}
                onClick={() => {
                  if (externalLink || btnLink) {
                    if (router?.asPath === btnLink) return;
                    setBannerLoading(true);
                    router.push(externalLink || btnLink);
                  }
                }}
              >
                <Image
                  key={size > desktopScreenSize ? "0" : "1"}
                  src={banner?.imgUrl || "/"}
                  layout="fill"
                  objectFit={"cover"}
                  className={`${styles["bg-image"]}`}
                  priority
                  alt={banner?.altText || appState?.brand}
                  quality={100}
                />
              </div>

              <div
                data-show-data={bannerLoading}
                className={`${styles["banner-text-section"]} ${styles[isPLPCollection ? "bg-overlay" : ""]
                  } ${classNames(heroBannerArray, router)}`}
              >
                {bannerContentDiv(false)}
              </div>
            </div>
          </AnimationWrapper>
        </>
      </div>
    </>
  );
};
const classNames = (component: any, router: any) => {
  return `${component && styles["block-divison"]} ${router?.asPath == "/waves" ? styles["waves-block"] : ""
    } ${router?.asPath == "/miss-l" ? styles["missl-block"] : ""}`;
};

export default LazurdeHeroBanner;
