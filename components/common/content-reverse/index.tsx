import React from "react";
import styles from "./ImageTextBlock.module.scss";
import Image from "next/image";
import Button from "../ui/button";
import { useRouter } from "next/router";
import Heading from "../ui/heading";
import Label from "../ui/label";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import AnimationWrapper from "../ui/animation-wrapper";
import { isDev } from "general-config";

const ReverseContentBlock = ({ page, component }: any) => {
  const router = useRouter();
  const [width] = useWindowSize();
  const findContent = component && component?.getContent(page);
  const dataMAP = findContent && findContent?.productCard;
  const heading = findContent && findContent?.heading;
  const imagePosition = findContent?.imagePosition?.selectionValues;

  let startsFromRight = false;

  if (imagePosition?.[0]?.key === "Right") {
    startsFromRight = true;
  }

  const blogPage = router?.asPath?.includes("/blog/");

  return (
    <section
      className={
        styles[
          startsFromRight
            ? "right-content-container"
            : "reverse-content-container"
        ]
      }
    >
      {heading && (
        <Heading element="h2" className={styles["section-heading"]}>
          {heading}
        </Heading>
      )}
      {dataMAP &&
        dataMAP?.length > 0 &&
        dataMAP?.map((product: any, index: number) => {
          const {
            cardContent,
            imagelink,
            mobileImage,
            ctatext,
            ctalink,
            externalLink,
            titleRichText,
          } = product;

          const image = getBloomreachImg(page, imagelink);
          const imageUrl = { url: image?.imgUrl, altText: image?.altText };
          const mobImg = getBloomreachImg(page, mobileImage);
          const mobImgUrl = { url: mobImg?.imgUrl, altText: mobImg?.altText };
          const btnLink = ctalink && page?.getContent(ctalink)?.getUrl();
          return (
            <>
              <AnimationWrapper
                animationName="slide-up"
                animationDelay="0.4s"
                lazyLoad={true}
                externalClass={styles.reverse}
              >
                <div
                  key={index}
                  className={`${
                    blogPage
                      ? styles.imageTextBlock_blog
                      : styles.imageTextBlock
                  }`}
                >
                  <div className={styles.imageContainer}>
                    {width > desktopScreenSize && imageUrl?.url ? (
                      <Image
                        key={index}
                        className={styles["image"]}
                        src={imageUrl?.url || "/"}
                        alt={"image"}
                        width={100}
                        height={100}
                        layout="fill"
                        quality={100}
                        // // unoptimized={isDev}
                      />
                    ) : null}
                    {width < desktopScreenSize && mobImgUrl?.url ? (
                      <Image
                        key={index}
                        className={styles["image"]}
                        src={mobImgUrl?.url || "/"}
                        alt={"image"}
                        width={100}
                        height={100}
                        layout="fill"
                        quality={100}
                        // // unoptimized={isDev}
                      />
                    ) : null}
                  </div>
                  <div className={styles.container}>
                    <Heading element="h2" className={styles.titleContainer}>
                      {cardContent?.title || titleRichText?.title}
                    </Heading>
                    <Label className={styles.textContainer}>
                      <p
                        key={Math.random()}
                        dangerouslySetInnerHTML={{
                          __html:
                            cardContent?.text || titleRichText?.content?.value,
                        }}
                      ></p>
                    </Label>

                    {externalLink ? (
                      <Button
                        onClick={() => {
                          if (externalLink) {
                            router.push(externalLink);
                          }
                        }}
                        buttonSize={"lr"}
                        buttonStyle={"black"}
                        buttonText={ctatext}
                        className={styles["sec-btn"]}
                      />
                    ) : (
                      <>
                        {btnLink && (
                          <Button
                            onClick={() => {
                              if (btnLink) {
                                router.push(btnLink);
                              }
                            }}
                            buttonSize={"lr"}
                            buttonStyle={"black"}
                            buttonText={ctatext}
                            className={styles["sec-btn"]}
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </AnimationWrapper>
            </>
          );
        })}
    </section>
  );
};

export default ReverseContentBlock;
