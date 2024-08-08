import React, { useState } from "react";
import Cards from "components/common/card";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "components/common/ui/slider/slider";
import { Navigation, FreeMode, Thumbs } from "swiper";
import styles from "../style.module.scss";

interface CardSliderProps {
  cards?: CardDataType[];
  page?: any;
}

interface CardDataType {
  titleContent?: { title?: string; content?: { value?: string } };
  description?: string;
  imageLink?: string;
}

const MobileHeritageSlider = ({
  cards = [],
  page,
}: CardSliderProps): JSX.Element => {
  const [size] = useWindowSize();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [tab, setTab] = useState(0);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper heritage__slider ${styles["slider-link-wrapper"]}`}
      >
        {cards &&
          cards?.length > 0 &&
          cards?.map((cardData: CardDataType, index: number) => {
            const { titleContent } = cardData;
            return (
              <React.Fragment key={index}>
                <SwiperSlide
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(index);
                  }}
                  className={`slider-link ${
                    tab === index ? "active-slide" : ""
                  }`}
                >
                  {titleContent?.title}
                </SwiperSlide>
              </React.Fragment>
            );
          })}
      </Swiper>
      <Slider
        desktopSlidePerView={4}
        mobileSlidePerView={1.114}
        navigation={true}
        scrollbar={true}
        className={`bambuser-card-slider heritage-sldies`}
        thumbs={{ swiper: thumbsSwiper }}
        isDraggable={true}
      >
        {Array.isArray(cards) &&
          cards?.length > 0 &&
          cards?.map((cardData: CardDataType, index: number) => {
            const {
              titleContent: { title, content },
              description,
              imageLink,
            }: any = cardData;
            const cardImage = {
              url: imageLink?.imgUrl,
              altText: imageLink?.altText,
            };
            const heading = (
              <p dangerouslySetInnerHTML={{ __html: content?.value }}></p>
            );

            return (
              <SwiperSlide
                key={index}
                style={{
                  width: "300px",
                }}
              >
                <Cards
                  key={index}
                  id={`card_${index}`}
                  cardHeading={title}
                  cardImage={cardImage}
                  cardTitle={heading}
                  description={description}
                  width={size > desktopScreenSize ? 314 : 332}
                  height={size > desktopScreenSize ? 304 : 352}
                  className="heritage-slider-card"
                />
              </SwiperSlide>
            );
          })}
      </Slider>
    </>
  );
};

export default MobileHeritageSlider;
