import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { findProducts } from "lib/utils/constants";
import useTranslation from "next-translate/useTranslation";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import AnimationWrapper from "../ui/animation-wrapper";
import Heading from "../ui/heading";
import Button from "../ui/button";
import useWindowSize from "lib/utils/useWindowSize";

const Error404 = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [size] = useWindowSize();

  return (
    <div className={styles["container-404"]}>

      <Heading className={styles["title-404"]} element="h1">Error 404</Heading>
      <span className={styles["text-404"]}>Sorry we can't find the page you're looking for</span>
      <span className={styles["link-lable-404"]}>Lets get back on track...</span>
      <div className={styles["blocks"]}>
        {Array.isArray(findProducts) &&
          findProducts?.length > 0 &&
          findProducts?.map((content, index) => {
            const {
              img,
              logo,
              ctaText,
              brand
            } = content;
            return (
              <>
                <AnimationWrapper
                  externalClass={styles["promotion-anmi-wrapper"]}
                  lazyLoad={true}
                >
                  <div className={styles["collection-block"]} key={index}>
                    <div
                      className={`${styles["image-section"]}`}
                      data-content-position={"Center"}
                    >
                      <Image
                        key={index}
                        className={styles["image"]}
                        src={size > desktopScreenSize ? img?.imgUrl : img?.mobileImgUrl || "/"}
                        alt={img?.altText || "Collection Card"}
                        width={100}
                        height={445}
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={"imageFallback"}
                        quality={100}
                      // unoptimized={isDev}
                      />

                      <div className={`${styles["collection-content"]}`}>


                        <div className={styles["inner-logo-img"]}>
                          <Image
                            key={index}
                            src={logo || "/"}
                            alt={
                              img?.altText || "Collection Card"
                            }
                            width={150}
                            height={100}
                            layout="fixed"
                            quality={100}
                          // unoptimized={isDev}
                          />
                        </div>

                        <Button
                          // onClick={() => {
                          //   setButtonLoading(index);
                          // }}
                          // isDisabled={buttonLoading !== -1}
                          // isLoading={index == buttonLoading}
                          buttonSize={
                            size > 1300 ? "lr" : size > 1023 ? "sm" : "lr"
                          }
                          className={styles["collection-button"]}
                        >
                          <Link href={`/${router?.locale}/${brand}`}>
                            <a style={{ color: "white" }}>{ctaText}</a>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                </AnimationWrapper>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Error404;
