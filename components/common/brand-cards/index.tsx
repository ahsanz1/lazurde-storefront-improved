import React, { FC, useContext } from "react";
import Cards from "components/common/card";
import { ImageType } from "lib/types/common";
import styles from "./Brand-cards.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { SwiperSlide } from "swiper/react";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import Slider from "components/common/ui/slider/slider";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import { useRouter } from "next/router";
import { brandNames, currentBrandName } from "lib/utils/constants";
import { useCustomHook } from "lib/utils/hooks";
import Heading from "../ui/heading";

type BrandCardsType = {
  cardTitle: string | "";
  cardImage: ImageType;
  cardLinks: string | "";
};

interface BrandCardsProps {
  heading: string;
  brandCards: BrandCardsType[];
}

const BrandCards: FC<any> = ({
  heading,
  brandCards,
  component,
  page,
}: any): JSX.Element => {
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { updateAppStateBrand } = useCustomHook();

  const findContent = component?.getContent(page);
  const sectionHeading = findContent?.categoryHeading;
  const findProducts = findContent?.productCard;

  return (
    <section className={styles["cards-container"]}>
      <Heading element="h2" data-testid="heading" className={styles["cards-heading"]}>
        {sectionHeading}
      </Heading>
      <Slider
        desktopSlidePerView={3}
        mobileSlidePerView={1.1}
        navigation={width > desktopScreenSize ? true : false}
        scrollbar={true}
        className={`card-brands`}
      >
        <div className={styles["brand-cards"]}>
          {findProducts &&
            findProducts.map((content: any, index: number) => {
              const { cardContent } = content;
              const image = getBloomreachImg(page, content?.imagelink);
              const imageUrl = { url: image?.imgUrl, altText: image?.altText };
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`${styles["cards"]} ${
                      appState?.lang == "ar" && styles["arabic-card"]
                    }`}
                    key={index}
                  >
                    <Cards
                      // onClick={() => {
                      //   router?.push(cardLinks);
                      //   if (cardLinks === "/missl") {
                      //     updateAppStateBrand("missl");
                      //   }
                      //   if (cardLinks === "/waves") {
                      //     updateAppStateBrand("waves");
                      //   }
                      // }}
                      className={"brand-card"}
                      height="100%"
                      width="100%"
                      cardTitle={cardContent?.title}
                      cardImage={imageUrl}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </div>
      </Slider>
    </section>
  );
};
export default BrandCards;
