import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import Cards from "../card";
import styles from "./style.module.scss";
import Slider from "components/common/ui/slider/slider";
import BambuserPopup from "../bambuser-popup";
import { BrProps } from "@bloomreach/react-sdk";
import { getBloomreachImg } from "lib/utils/common";
import Heading from "../ui/heading";
import BambuserOneToOne from "../bambuser-popup/oneToOne";

type CardsArrType = {
  image?: { url: string; altText: string };
  heading?: string;
  description?: string;
  bambuserId?: string;
  btnText?: string;
};
interface BambuserCardSliderProps extends BrProps {
  className?: string;
  bgColor?: string;
  cards?: CardsArrType[];
  testId?: string;
  component?: any;
  page?: any;
}

const BambuserCardSlider = ({
  className = "",
  bgColor = "",
  testId = "",
  component,
  page,
}: BambuserCardSliderProps): JSX.Element => {
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);


  const findContent = component?.getContent(page);
  const sectionHeading = findContent?.sectionHeading;
  const findProducts = findContent?.bambuserCard;
  return (
    <>
      <div
        className={`${styles["bambuser-card-slider__wrapper"]} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <Heading
          element="h2"
          testId={testId}
          className={styles["bambuser-card-slider__section-heading"]}
        >
          {sectionHeading}
        </Heading>
        <Slider
          desktopSlidePerView={4}
          mobileSlidePerView={1.349}
          navigation={true}
          scrollbar={true}
          className={`bambuser-card-slider`}
        >
          <>
            {Array.isArray(findProducts) &&
              findProducts.length > 0 &&
              findProducts.map((content, index) => {
                const {
                  cardContent,
                  ctaText,
                  bambuserID,
                  ctaBambuserID,
                  queueID,
                } = content;

                const bambuserFeature =
                  content?.bambuserDropdown?.bambuserDropdown?.selectionValues;
                const featureOneToOne = bambuserFeature?.filter(
                  (feature: any) => {
                    return feature?.key === "One to One";
                  }
                );
                const image = getBloomreachImg(page, content?.imageLink);
                const imageUrl = {
                  url: image?.imgUrl,
                  altText: image?.altText,
                };
                return (
                  <>
                    <SwiperSlide key={index}>
                      <Cards
                        cardImage={imageUrl}
                        cardTitle={cardContent?.title}
                        description={cardContent?.text}
                        width={width > 1023 ? 314 : 264}
                        height={width > 1023 ? 314 : 264}
                        className="bambuser-slider-card"
                        bambuserBtn={true}
                        bambuserBtnBody={
                          <div
                            className={
                              styles[findContent && "bambuser-btn-wrapper"]
                            }
                          >
                            {featureOneToOne?.length > 0 ? (
                              <>
                                <BambuserOneToOne
                                  key={appState?.lang}
                                  className={styles["bambuser-btn-arrow"]}
                                  scriptId={`s${index}`}
                                  videoPlayBtn={true}
                                  bId={bambuserID}
                                  queueID={queueID}
                                />
                              </>
                            ) : (
                              <>
                                <BambuserPopup
                                  key={appState?.lang}
                                  className={styles["bambuser-btn-arrow"]}
                                  scriptId={`0${index}`}
                                  videoPlayBtn={true}
                                  bId={bambuserID}
                                />
                              </>
                            )}
                          </div>
                        }
                      />

                      <div
                        className={
                          styles[findContent && "bambuser-btn-wrapper"]
                        }
                      >
                        {featureOneToOne?.length > 0 ? (
                          <>
                            <BambuserOneToOne
                              key={appState?.lang}
                              className={styles["bambuser-btn"]}
                              scriptId={`b${index}`}
                              bId={ctaBambuserID}
                              btnText={ctaText}
                              queueID={queueID}
                            />
                          </>
                        ) : (
                          <>
                            <BambuserPopup
                              key={appState?.lang}
                              className={styles["bambuser-btn"]}
                              scriptId={`1${index}`}
                              bId={ctaBambuserID}
                              btnText={ctaText}
                            />
                          </>
                        )}
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
          </>
        </Slider>
      </div>
    </>
  );
};

export default BambuserCardSlider;
