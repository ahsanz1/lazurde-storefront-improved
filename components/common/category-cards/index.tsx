import React, { FC, useContext } from "react";
import { ImageType } from "lib/types/common";
import styles from "./category-cards.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import { getBloomreachImg } from "lib/utils/common";
import { useRouter } from "next/router";
import Heading from "../ui/heading";
import BlogCards from "../blog-card";
import AnimationWrapper from "../ui/animation-wrapper";

type CategoryCardsType = {
  cardTitle: string | "";
  cardImage: ImageType;
  cardLinks: string | "";
};

interface CategoryCardsProps {
  heading: string;
  brandCards: CategoryCardsType[];
}

const CategoryCards: FC<any> = ({
  heading,
  brandCards,
  component,
  page,
}: any): JSX.Element => {
  const [width] = useWindowSize();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const router = useRouter();

  const findContent = component?.getContent(page);
  const sectionHeading = findContent?.titleRichText?.title;
  const sectionDescription = findContent?.titleRichText?.content?.value;
  const findProducts = findContent?.contentSection;
  const shapesIncluded =
    sectionHeading?.includes("Shapes") ||
    sectionHeading?.includes("shapes") ||
    sectionHeading?.includes("Shape") ||
    sectionHeading?.includes("shape");
  const textWidth = findContent?.textWidth?.selectionValues;


  let fullWidth = false;

  if (textWidth?.[0]?.key === "Full") {
    fullWidth = true;
  }

  return (
    <AnimationWrapper
      animationName="slide-up"
      animationDelay="0.4s"
      lazyLoad={true}
    >
      <section className={styles["cards-container"]}>
        {sectionHeading && (
          <Heading
            element="h2"
            data-testid="heading"
            className={styles["section-heading"]}
          >
            {sectionHeading}
          </Heading>
        )}

        {sectionDescription && (
          <div
            className={
              styles[
              fullWidth ? "section-description-full" : "section-description"
              ]
            }
          >
            <p
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html: sectionDescription,
              }}
            ></p>
          </div>
        )}

        {findProducts?.length > 0 ? (
          <div
            className={styles[shapesIncluded ? "shapes-card" : "card-blogs"]}
          >
            {findProducts &&
              findProducts.map((content: any, index: number) => {
                const { titleContent, imageLink, linkText, link } = content;
                const image = getBloomreachImg(page, imageLink);
                const imageUrl = {
                  url: image?.imgUrl,
                  altText: image?.altText,
                };
                const btnLink = link && page?.getContent(link)?.getUrl();
                return (
                  <div
                    className={`${styles[shapesIncluded ? "shapes" : "cards"]
                      } ${appState?.lang == "ar" && styles["arabic-card"]}`}
                    key={index}
                  >
                    <BlogCards
                      className={"brand-card"}
                      height="100%"
                      width="100%"
                      cardTitle={titleContent?.title}
                      description={titleContent?.content?.value}
                      cardImage={imageUrl}
                      btnText={linkText}
                      btnLink={btnLink}
                      sectionTwo={shapesIncluded}
                      cardUrl={btnLink}
                    />
                  </div>
                );
              })}
          </div>
        ) : null}
      </section>
    </AnimationWrapper>
  );
};
export default CategoryCards;
