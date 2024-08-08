import React from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Label from "../ui/label";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import Accordion from "../ui/accordion/Accordion";
import useWindowSize from "lib/utils/useWindowSize";
import AnimationWrapper from "../ui/animation-wrapper";

const FaqsWithBackground = ({ page, component }: any) => {
  const router = useRouter();
  const [size] = useWindowSize();

  const findContent = component && component?.getContent(page);
  const dataMAP = findContent && findContent?.faqs?.textWithRichText;
  const heading = findContent && findContent?.heading;
  const image = getBloomreachImg(page, findContent?.imageLink);
  const mobileImage = getBloomreachImg(page, findContent?.mobileImg);
  const backgroundImg = {
    url: size > desktopScreenSize ? image?.imgUrl : mobileImage?.imgUrl,
    altText: size > desktopScreenSize ? image?.altText : mobileImage?.altText,
  };
  const headingColor = findContent?.headingColor?.selectionValues?.[0]?.key;
  let color = "Black";
  if (headingColor == "false") {
    color = "White";
  }
  return (
    <AnimationWrapper animationName="slide-up" animationDelay="0.4s" lazyLoad={true}>
      <section className={styles["content-container"]}>
        <div
          style={{
            backgroundImage: `url(${backgroundImg?.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={styles["bg-faq-sections"]}
        >
          <div className={styles["faq-heading"]}>
            <Label
              style={{
                color: color,
              }}
            >
              {heading}
            </Label>
          </div>
          <div className={styles["faq-details"]}>
            {dataMAP?.map((data: any, index: number) => {
              const { content, text } = data;
              const headingSanitize = (
                <p
                  key={Math.random()}
                  dangerouslySetInnerHTML={{
                    __html: text?.value,
                  }}
                ></p>
              );
              const contentSanitize = (
                <p
                className={styles["content-para"]}
                key={Math.random()}
                  dangerouslySetInnerHTML={{
                    __html: content?.value,
                  }}
                ></p>
              );
              return (
                <Accordion
                  key={index}
                  className={"collection-faqs"}
                  heading={headingSanitize}
                  arrowDown={true}
                >
                  {contentSanitize}
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default FaqsWithBackground;
