import React, { useState } from "react";
import styles from "./style.module.scss";
import Heading from "../ui/heading";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "../ui/animation-wrapper";
import Spinner from "../ui/spinner";

const ProcessBlock = ({ component, page }: any): JSX.Element => {
  const findData = component?.getContent(page);
  const sectionHeading = findData && findData?.heading;
  const blocks = findData && findData?.processBlocks;
  const [isImgLoading, setIsImgLoading] = useState(-1);


  return (
    <AnimationWrapper lazyLoad={true}>
      <>
        <section
          className={`${styles["picture-section"]}`}
          style={{ backgroundColor: "bgColor" }}
        >
          {sectionHeading && (
            <Heading
              element="h2"
              testId={"testId"}
              className={styles["bambuser-card-slider__section-heading"]}
            >
              {sectionHeading}
            </Heading>
          )}

          <div className={`${styles["picture-blocks"]}`}>
            {blocks?.map((block: any, index: number) => {
              const { color, process, iconLink, processExternalLink, link } =
                block;
              const getIconLink = iconLink && page?.getContent(iconLink);
              const icon = getIconLink && getIconLink?.getOriginal()?.getUrl();
              const internalLink = page?.getContent(link)?.getUrl();
              return (
                <>
                  <div className={styles["block"]}>
                    <div>
                      <div
                        className={styles["circle"]}
                        style={{ backgroundColor: `${color}` }}
                      >
                        {index == isImgLoading ? (
                          <Spinner />
                        ) : (
                          <Image
                            alt="icon"
                            src={`${icon}`}
                            layout="fill"
                            quality={100}
                            unoptimized
                          />
                        )}
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setIsImgLoading(index);
                      }}
                      className={styles["section-text"]}
                    >
                      {processExternalLink ? (
                        <Link href={processExternalLink || "/"}>
                          <a className={styles["process-text"]}>
                            {
                              <p
                                key={Math.random()}
                                dangerouslySetInnerHTML={{
                                  __html: process?.value,
                                }}
                              ></p>
                            }
                          </a>
                        </Link>
                      ) : (
                        <Link href={internalLink || "/"}>
                          <a className={styles["process-text"]}>
                            {
                              <p
                                key={Math.random()}
                                dangerouslySetInnerHTML={{
                                  __html: process?.value,
                                }}
                              ></p>
                            }
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </>
    </AnimationWrapper>
  );
};
export default ProcessBlock;
