import React from "react";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "lib/utils/useWindowSize";
import Cards from "../card";
import styles from "./style.module.scss";
import Slider from "components/common/ui/slider/slider";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "../ui/heading";
import AnimationWrapper from "../ui/animation-wrapper";

const CardSlider = ({
  className = "",
  bgColor = "",
  testId = "",
  component,
  page,
}: any): JSX.Element => {
  const router = useRouter();
  const [width] = useWindowSize();

  const findContent = component?.getContent(page);
  const sectionHeading = findContent?.categoryHeading;
  const findProducts = findContent?.productCard;
  const desktopSlidePerView = findContent?.slidePerView;
  const flexEnable = findProducts?.length === 3;
  return (
    <AnimationWrapper lazyLoad={true}>
      <section
        className={`${styles["card-slider__wrapper"]} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <Heading
          element="h2"
          testId={testId}
          className={styles["card-slider__section-heading"]}
        >
          {sectionHeading}
        </Heading>
        {width > desktopScreenSize ? (
          <Slider
            desktopSlidePerView={flexEnable ? desktopSlidePerView : 4}
            navigation={true}
            scrollbar={true}
            className={`card-slider`}
          >
            {Array.isArray(findProducts) &&
              findProducts.length > 0 &&
              findProducts.map((content, index) => {
                const { cardContent, cardLink } = content;
                const domain = `https://www.lazurde.com`;
                const completeUrl = `${domain}/${
                  router?.locale
                }${cardLink?.trim()}`;
                const image = getBloomreachImg(page, content?.imagelink);
                const imageUrl = {
                  url: image?.imgUrl,
                  altText: image?.altText,
                };
                return (
                  <SwiperSlide key={index}>
                    <Link href={completeUrl || "/"}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();

                          router.push(completeUrl);
                        }}
                      >
                        <Cards
                          cardImage={imageUrl}
                          cardTitle={cardContent?.title}
                          width={width > desktopScreenSize ? 314 : 157}
                          height={width > desktopScreenSize ? 314 : 178}
                          className="category-slider-card"
                        />
                      </a>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Slider>
        ) : (
          <div
            className={styles[flexEnable ? "categories-flex" : "categories"]}
          >
            {Array.isArray(findProducts) &&
              findProducts.length > 0 &&
              findProducts.map((content, index) => {
                const { cardContent, cardLink } = content;
                const domain = `https://www.lazurde.com`;
                const completeUrl = `${domain}/${router?.locale}${cardLink}`;
                const image = getBloomreachImg(page, content?.mobileImage);
                const imageUrl = {
                  url: image?.imgUrl,
                  altText: image?.altText,
                };
                return (
                  <SwiperSlide
                    key={index}
                    className={`${flexEnable && "custom-swiper-slide"}`}
                  >
                    <Link href={completeUrl || "/"}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();

                          router.push(completeUrl);
                        }}
                      >
                        <Cards
                          cardImage={imageUrl}
                          cardTitle={cardContent?.title}
                          width={width > desktopScreenSize ? 314 : 332}
                          height={width > desktopScreenSize ? 429 : 352}
                          className="category-slider-card"
                        />
                      </a>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </div>
        )}
      </section>
    </AnimationWrapper>
  );
};

export default CardSlider;
