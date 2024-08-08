import React, { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import { useRouter } from "next/router";
import { BrComponentContext, BrPageContext } from "@bloomreach/react-sdk";
import SellerCardSlider from "../best-seller-card-slider";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import BreadCrumbs from "../ui/bread-crumbs";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import AnimationWrapper from "../ui/animation-wrapper";
import Link from "next/link";
import { isDev } from "general-config";

const PlpCollection = ({}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [width] = useWindowSize();
  const component = React.useContext(BrComponentContext);
  const page: any = React.useContext(BrPageContext);
  const { appState } = useContext(AppContext);

  const mainTag = component && component?.getParameters()?.mainTag;
  const midTag = component && component?.getParameters()?.midBannerTag;

  const findMainBanner = component && component?.getModels()?.mainBanner;
  const getMainBannerRef = findMainBanner && page?.getContent(findMainBanner);
  const getMainBannerData = getMainBannerRef && getMainBannerRef?.getData();

  const bannerVideo =
    getMainBannerData?.desktopVideo &&
    page?.getContent(getMainBannerData?.desktopVideo)?.data?.asset?.links?.site
      ?.href;

  const mobileBannerVideo =
    getMainBannerData?.mobileVideo &&
    page?.getContent(getMainBannerData?.mobileVideo)?.data?.asset?.links?.site
      ?.href;

  const findMainContent = component && component?.getModels()?.mainContent;
  const getMainContentRef =
    findMainContent && page?.getContent(findMainContent);
  const getMainContentData = getMainContentRef && getMainContentRef?.getData();

  const mainBannerTitle = getMainBannerData && getMainBannerData?.title;
  const mainBannerContent =
    getMainBannerData && getMainBannerData?.content?.value;
  const mainBannerImage = getMainBannerData && getMainBannerData?.image;
  // const findMainBannerImgLink: any =
  //   mainBannerImage && page?.getContent(mainBannerImage);
  // const getMainBannerImgLink =
  //   findMainBannerImgLink && findMainBannerImgLink?.getOriginal()?.getUrl();

  const findMidBanner = component && component?.getModels()?.midBanner;
  const getMidBannerRef = findMidBanner && page?.getContent(findMidBanner);
  const getMidBannerData = getMidBannerRef && getMidBannerRef?.getData();
  const midBannerTitle = getMidBannerData && getMidBannerData?.title;
  const midBannerContent = getMidBannerData && getMidBannerData?.content?.value;
  const midBannerCTA = getMidBannerData && getMidBannerData?.cta;
  const midBannerLink = getMidBannerData && getMidBannerData?.link;
  const midBannerExternalLink =
    getMidBannerData && getMidBannerData?.externalLink;
  const newTabEnable = getMidBannerData && getMidBannerData?.newTab;
  const findMidBannerLink: any =
    midBannerLink && page?.getContent(midBannerLink);
  const getMidBannerLink = findMidBannerLink && findMidBannerLink?.getUrl();
  // const midBannerImage = getMidBannerData && getMidBannerData?.image;
  // const findMidBannerImgLink: any =
  //   midBannerImage && page?.getContent(midBannerImage);
  // const getMidBannerImgLink =
  //   findMidBannerImgLink && findMidBannerImgLink?.getOriginal()?.getUrl();
  const midBackgroundImage = getMidBannerData && getMidBannerData?.bgImageLink;
  const findMidBackgroundImgLink: any =
    midBackgroundImage && page?.getContent(midBackgroundImage);
  const getMidBackgroundImgLink =
    findMidBackgroundImgLink &&
    findMidBackgroundImgLink?.getOriginal()?.getUrl();

  const recommendationID =
    component && component?.getParameters()?.recommendationId;
  const recommendationHeading =
    component && component?.getParameters()?.recommendationHeading;

  const desktopBannerRef = getMainBannerData && getMainBannerData?.image;
  const mobileBannerRef = getMainBannerData && getMainBannerData?.mobileImage;
  const desktopBanner = getBloomreachImg(page, desktopBannerRef);
  const mobileImage = getBloomreachImg(page, mobileBannerRef);
  const desktopMidBannerRef = getMidBannerData && getMidBannerData?.image;
  const mobileMidBannerRef = getMidBannerData && getMidBannerData?.mobileImage;
  const getMidBannerImgLink = getBloomreachImg(
    page,
    width > desktopScreenSize ? desktopMidBannerRef : mobileMidBannerRef
  );
  // const mobileImage = getBloomreachImg(page, mobileBannerRef);

  const bannerImg = width > desktopScreenSize ? desktopBanner : mobileImage;

  const isCollection = router?.asPath === "/collection";

  const CTA_LINK = midBannerExternalLink
    ? midBannerExternalLink
    : getMidBannerLink;

  if (bannerVideo || mobileBannerVideo) {
    return (
      <div className={styles["video-wrapper"]}>
        <div className={styles["video-div"]}>
          <video
            key={width > desktopScreenSize ? "0" : "1"}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted={true}
            height="100%"
            width="100%"
            controls={false}
          >
            <source
              src={width > desktopScreenSize ? bannerVideo : mobileBannerVideo}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }

  return (
    <>
      {width > desktopScreenSize && isCollection ? (
        <div className={styles["collection-breadcrumb"]}>
          <BreadCrumbs
            showBrand={false}
            parent={t("home")}
            parentLink={"/"}
            child={appState?.lang === "en" ? "Collections" : t("collection")}
          />
        </div>
      ) : null}
      <section className={styles.section}>
        <div className={styles["hero-banner"]}>
          {findMainBanner && (
            <div
              className={styles[isCollection ? "banner-img" : "banner-lgd"]}
              style={{
                backgroundColor:
                  (mainBannerTitle || mainBannerContent) && bannerImg?.imgUrl
                    ? ""
                    : "black",
              }}
            >
              <Image
                src={bannerImg?.imgUrl || "/"}
                alt={bannerImg?.altText || "Collection Banner"}
                width={100}
                height={100}
                layout="fill"
                quality={100}
                // unoptimized={isDev}
              />
            </div>
          )}
          <AnimationWrapper
            animationName="slide-up"
            animationDelay="0.4s"
            lazyLoad={true}
          >
            <div className={styles["banner-content"]}>
              {mainBannerTitle ? (
                <Heading
                  element="h2"
                  className={styles["banner-content-title"]}
                >
                  {mainBannerTitle}
                </Heading>
              ) : null}
              {mainBannerContent ? (
                <Label className={styles["banner-content-des"]}>
                  <p
                    key={Math.random()}
                    dangerouslySetInnerHTML={{
                      __html: mainBannerContent,
                    }}
                  ></p>
                </Label>
              ) : null}
            </div>
          </AnimationWrapper>
        </div>
        {/* <div className={styles["floating-div"]}>
          <div className={styles["floating-div-content"]}>
            {getMainContentData?.title}
          </div>
        </div> */}
      </section>
      <section className={`${styles.section} ${styles["section-two"]}`}>
        <AnimationWrapper
          animationName="slide-up"
          animationDelay="0.4s"
          lazyLoad={true}
        >
          <div className={styles["content-div"]}>
            <Heading element="h2">
              {mainTag || getMainContentData?.title}
            </Heading>
            <Label>
              <p
                dangerouslySetInnerHTML={{
                  __html: getMainContentData?.content?.value,
                }}
              ></p>
            </Label>
          </div>
        </AnimationWrapper>
        <AnimationWrapper animationName="slide-up" animationDelay="0.4s">
          {recommendationID && (
            <SellerCardSlider
              heading={recommendationHeading}
              engagementid={recommendationID}
            />
          )}
        </AnimationWrapper>
        <AnimationWrapper
          animationName="slide-up"
          animationDelay="0.4s"
          lazyLoad={true}
        >
          <div className={styles["bg-img-wrapper"]}>
            <div
              className={styles[isCollection ? "bg-image" : "bg-image-lgd"]}
              style={{
                backgroundImage: `url(${
                  getMidBackgroundImgLink || getMidBannerImgLink?.imgUrl
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className={styles["inner-div"]}
                style={{
                  backgroundImage: `url(${getMidBannerImgLink?.imgUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={styles["inner-div-content"]}>
                  <Heading element="h2">{midBannerTitle}</Heading>
                  <Label className={styles["mid-content"]}>
                    <div
                      key={Math.random()}
                      dangerouslySetInnerHTML={{
                        __html: midBannerContent,
                      }}
                    ></div>
                  </Label>
                  <Label className={styles["hash-tag"]}>{midTag}</Label>
                  <div className={styles["btn"]}>
                    <Button
                      // buttonText={midBannerCTA}
                      buttonStyle="transparent"
                      buttonSize="lr"
                      style={{
                        border: "1px solid #fff",
                      }}
                      // onClick={() => {
                      //   if (CTA_LINK) {
                      //     router.push(CTA_LINK);
                      //   }
                      // }}
                    >
                      <Link href={CTA_LINK || "/"}>
                        <a
                          style={{ color: "white" }}
                          target={newTabEnable && "_blank"}
                        >
                          {midBannerCTA}
                        </a>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </section>
    </>
  );
};

export default PlpCollection;
