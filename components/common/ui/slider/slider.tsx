import React, { useContext, useState, useEffect } from "react";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import {
  Zoom,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { desktopScreenSize } from "lib/utils/common";

interface SliderProps {
  children?: any | JSX.Element | string;
  desktopSlidePerView?: number;
  mobileSlidePerView?: number;
  pagination?: boolean;
  navigation?: boolean;
  scrollbar?: boolean;
  className?: string;
  productSlider?: boolean;
  hasScrollbar?: boolean;
  isDraggable?: boolean;
  hasZoom?: boolean;
  initialSlide?: number;
  thumbs?: any;
  style?: { [key: string]: string | number };
  setLastSlide?: (lastSlide: number) => void
}

const Slider = ({
  children,
  desktopSlidePerView = 4,
  mobileSlidePerView = 1.1,
  navigation = false,
  hasScrollbar = true,
  isDraggable = true,
  scrollbar = false,
  pagination = false,
  productSlider = false,
  className = "",
  hasZoom = false,
  initialSlide = 0,
  thumbs,
  style,
  setLastSlide
}: SliderProps): JSX.Element => {
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  const [renderSlider, setRendeSlider] = useState(false);

  useEffect(() => {
    setRendeSlider(true);
  }, [appState]);

  // get last slide of a swiper
  const handleSwiper = (swiper: any) => {
    const lastIndex = swiper.slides.length
    if (setLastSlide && typeof setLastSlide === 'function') {
      setLastSlide(lastIndex);
    }
  };

  const sliderSetting = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      Thumbs,
    ],
    spaceBetween: 8,
    slidesPerView:
      width > desktopScreenSize ? desktopSlidePerView : mobileSlidePerView,
    navigation: navigation,
    scrollbar: hasScrollbar ? { draggable: isDraggable } : hasScrollbar,
    cssMode: true,
    zoom: hasZoom,
    className: className,
    key: appState?.lang,
    dir: appState?.lang === "en" ? "ltr" : "rtl",
    initialSlide: initialSlide,
  };

  const productSliderSetting = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      Thumbs,
    ],
    spaceBetween: 0,
    slidesPerView:
      width > desktopScreenSize ? desktopSlidePerView : mobileSlidePerView,
    pagination: { clickable: pagination },
    navigation: navigation,
    cssMode: true,
    zoom: hasZoom,
    className: className,
    key: appState?.lang,
    dir: appState?.lang === "en" ? "ltr" : "rtl",
    initialSlide: initialSlide,
  };

  return (
    <>
      {renderSlider ? (
        <Swiper
          {...(!productSlider ? sliderSetting : productSliderSetting)}
          thumbs={thumbs}
          style={style}
          onSwiper={handleSwiper}
        >
          {children}
        </Swiper>
      ) : (
        <Swiper
          {...(!productSlider ? sliderSetting : productSliderSetting)}
          thumbs={thumbs}
          style={style}
          onSwiper={handleSwiper}
        >
          {children}
        </Swiper>
      )}
    </>
  );
};
export default Slider;
