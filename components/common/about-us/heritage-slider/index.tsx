import React, { useState, useEffect } from "react";
import useWindowSize from "lib/utils/useWindowSize";
import Cards from "components/common/card";
import styles from "../style.module.scss";
import { desktopScreenSize } from "lib/utils/common";
import MobileHeritageSlider from "./mobile-slider";
import Heading from "components/common/ui/heading";

interface CardSliderProps {
  className?: string;
  sectionHeading?: string;
  bgColor?: string;
  cards?: CardDataType[];
  testId?: string;
  text?: any;
}

interface CardDataType {
  titleContent?: { title?: string; content?: { value?: string } };
  description?: string;
  imageLink?: string;
}

const HeritageSlider = ({
  cards = [],
  className = "",
  sectionHeading = "",
  bgColor = "#fff",
}: CardSliderProps): JSX.Element => {
  const [size] = useWindowSize();
  const [isActive, setIsActive] = useState(0);

  const toSlide = (index: string) => {
    const id = document.getElementById(`card_${index}`);
    const value = id.getBoundingClientRect();
    const parent = document.getElementById("main-cards");
    const pValues = parent.getBoundingClientRect();

    parent.scrollLeft += value.left - pValues.left;
  };

  const cardDraggable = () => {
    const slider = document.getElementById("main-cards");
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    slider?.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = "unset";
      slider.style.scrollSnapType = "unset";
    });
    slider?.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider?.addEventListener("mouseup", () => {
      isDown = false;
      slider.style.scrollBehavior = "smooth";
      slider.style.scrollSnapType = "x mandatory";
    });
    slider?.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  useEffect(() => {
    cardDraggable();
  }, []);
  return (
    <>
      <div
        role="card-slider"
        className={`${styles["card-slider__wrapper"]} ${styles[className]}`}
        id="heritage-slider"
        style={{ backgroundColor: bgColor }}
      >
        <Heading
          element="h2"
          role="heritage-heading"
          className={styles["section-heading"]}
        >
          {sectionHeading}
        </Heading>

        <>
          {size > desktopScreenSize ? (
            <>
              <div className={styles["div-card-tabs"]}>
                {cards &&
                  cards?.length > 0 &&
                  cards?.map((cardData: CardDataType, index: number) => {
                    const { titleContent } = cardData;
                    return (
                      <React.Fragment key={index}>
                        <button
                          className={
                            isActive === index
                              ? styles["tab-active"]
                              : styles["tabs-btn"]
                          }
                          onClick={() => {
                            toSlide(String(index));
                            setIsActive(index);
                          }}
                          data-testid="click-btn"
                        >
                          {titleContent?.title}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              <div
                role="main-cards"
                className={`${styles["main-cards"]}`}
                id={"main-cards"}
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
                      <p
                        dangerouslySetInnerHTML={{ __html: content?.value }}
                      ></p>
                    );

                    return (
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
                    );
                  })}
              </div>
            </>
          ) : (
            <MobileHeritageSlider cards={cards} />
          )}
        </>
      </div>
    </>
  );
};

export default HeritageSlider;
