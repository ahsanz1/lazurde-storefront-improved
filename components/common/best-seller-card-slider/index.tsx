import React, { useContext, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "lib/utils/useWindowSize";
import Cards from "../card";
import styles from "./style.module.scss";
import Slider from "components/common/ui/slider/slider";
import { useRouter } from "next/router";
import Button from "../ui/button";
import Heading from "../ui/heading";
import { engagementCustomerAttr } from "lib/middleware-apis/customers";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AnimationWrapper from "../ui/animation-wrapper";
import { AppContext } from "lib/context";

const SellerCardSlider = ({
  sectionTitle = "",
  className = "",
  bgColor = "",
  testId = "",
  component,
  page,
  engagementid,
  heading,
  items = null,
  buttonText,
  buttonLink,
  isCartPage = false,
}: any): JSX.Element => {
  const [width] = useWindowSize();
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const { appState, exponeaCookie } = useContext(AppContext);
  const [customerId, setCustomerId] = useState(
    customerData?.email || exponeaCookie?.[appState?.region]
  );

  const findContent = component?.getContent(page);
  const recommendationID = findContent && findContent?.id;
  const btnText = findContent?.buttonText || buttonText;
  const getBtnLink = findContent && findContent?.btnLink;
  const btnLinkdata =
    (getBtnLink && page?.getContent(getBtnLink)?.getUrl()) || buttonLink;
  const sectionHeading = findContent?.titleandtext?.title || sectionTitle;

  const router = useRouter();
  const currentPath = router.pathname;
  const isInThePress = currentPath === "/in-the-press";
  const plpColelctionPage = currentPath === "/plp-collection";
  const isAboutUs = currentPath === "/about-us";
  const fourSlides = isInThePress || plpColelctionPage;

  // // @ts-ignore
  // let cookieValue =
  //   typeof window != "undefined" &&
  //   (window as any)?.exponea &&
  //   (window as any)?.exponea.configuration?.customer?.cookie;

  const { data: recommendedProducts } = useQuery(
    [
      "recommendations",
      engagementid,
      recommendationID,
      customerId,
      appState?.region,
      items,
    ],
    async ({ queryKey }) => {
      const id = customerData?.email ? "email_id" : "cookie";
      const engagementid = queryKey[1];
      const recommendationID = queryKey[2];
      const customerId = queryKey[3];
      const region = queryKey[4];
      if (!customerId) return null;
      const recommendationPayload = {
        customer_ids: {
          [id]: customerId,
        },
        attributes: [
          {
            type: "recommendation",
            id: engagementid || recommendationID,
            fillWithRandom: true,
            size: 10,
            items: items,
          },
        ],
      };
      const resp = await engagementCustomerAttr(recommendationPayload, region);
      return resp?.response?.results?.[0]?.value || null;
    },
    {
      enabled: !!customerId,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    setCustomerId(customerData?.email || exponeaCookie?.[appState?.region]);
  }, [customerData?.email, exponeaCookie?.[appState?.region]]);

  return (
    <>
      {(engagementid || recommendationID) && recommendedProducts?.length > 0 ? (
        <AnimationWrapper lazyLoad={true}>
          <section
            className={`${styles["bambuser-card-slider__wrapper"]} ${className}`}
            style={{ backgroundColor: bgColor }}
            data-isCartPage={isCartPage}
          >
            <Heading
              element="h2"
              testId={testId}
              className={styles["bambuser-card-slider__section-heading"]}
            >
              {sectionHeading || heading}
            </Heading>
            <Slider
              desktopSlidePerView={isCartPage ? 3 : fourSlides ? 4 : 5}
              mobileSlidePerView={1.349}
              navigation={true}
              scrollbar={true}
              className={`bambuser-card-slider ${
                isCartPage ? "cart-page-slider" : ""
              }`}
            >
              <>
                {recommendedProducts?.length > 0 &&
                  recommendedProducts.map((content: any, index: number) => {
                    const {
                      title,
                      brand,
                      price,
                      sale_price,
                      discount_percentage,
                      active,
                      image,
                      rating,
                      rating_count,
                      url,
                    } = content;

                    let modifiedURL = "";
                    const wordToRemove = "/miss-l";

                    if (appState?.brandEN == "L'azurde") {
                      modifiedURL = url.replace(
                        new RegExp(wordToRemove, "g"),
                        ""
                      );
                    } else {
                      modifiedURL = url;
                    }

                    const imageUrl = {
                      url: image,
                      altText: image?.altText,
                    };
                    const prices = {
                      basePrice: price,
                      salePrice: sale_price,
                      discount:
                        discount_percentage && `${discount_percentage}%`,
                    };

                    const reviews = {
                      starCount: 5,
                      reviewCounts: rating,
                      ratingCounts: rating_count,
                    };
                    const _modifiedUrl = modifiedURL
                      ?.replace(/&/, "and")
                      .toLocaleLowerCase();

                    return (
                      <>
                        <SwiperSlide key={index}>
                          <Cards
                            cardUrl={_modifiedUrl}
                            cardImage={imageUrl}
                            cardTitle={brand}
                            description={title}
                            reviews={reviews}
                            prices={prices}
                            tag={active}
                            isInThePress={fourSlides}
                            isAboutUs={isAboutUs}
                            width={width > 1023 ? 250 : 264}
                            height={width > 1023 ? 250 : 264}
                            className={
                              isCartPage ? "cart-page-card" : "best-slider-card"
                            }
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
              </>
            </Slider>
            {btnText ? (
              <div className={styles["bambuser-btn-wrapper"]}>
                <Button
                  onClick={() => {
                    if (btnLinkdata) {
                      router.push(btnLinkdata);
                    }
                  }}
                  className={styles["bambuser-btn"]}
                  buttonText={btnText}
                />
              </div>
            ) : null}
          </section>
        </AnimationWrapper>
      ) : (
        <section
          className={`${styles["bambuser-card-slider__wrapper"]} ${className}`}
          style={{ backgroundColor: bgColor, height: "680px" }}
        ></section>
      )}
    </>
  );
};
export default SellerCardSlider;
