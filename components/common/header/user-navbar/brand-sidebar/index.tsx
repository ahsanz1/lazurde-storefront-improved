/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BackArrow, CrossSmall } from "components/icons";
import styles from "./brand-sidebar.module.scss";
import { BrandArrType, BrandNameTypes, ImageType } from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import { desktopScreenSize } from "lib/utils/common";
import { useCustomHook } from "lib/utils/hooks";
import useTranslation from "next-translate/useTranslation";
import { brandNames } from "lib/utils/constants";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import { BrComponentContext, BrPageContext } from "@bloomreach/react-sdk";
import { Content, ImageSet } from "@bloomreach/spa-sdk";

interface SidebarProps {
  mainImg?: ImageType;
  mainTitle?: string;
  logoArr?: {
    width?: string | number;
    height?: string | number;
    mobileWidth?: string | number;
    logoImg: {
      url?: string;
      altText?: string;
    };
  }[];
  brandArr?: BrandArrType[];
  isOpened?: boolean;
  setIsOpened?: Function;
  closeIcon?: boolean;
  closeMenu?: Function;
  brandImg?: string;
}

const BrandContainer: FC<BrandArrType> = ({
  brandImg,
  label,
  labelUrl,
}): JSX.Element => {
  const [width] = useWindowSize();
  const router = useRouter();
  const { updateAppStateBrand } = useCustomHook();
  let currentBrand: BrandNameTypes = "lazurde";

  if (brandNames.lazurde === label) {
    currentBrand = "lazurde";
  }
  if (brandNames?.missl === label) {
    currentBrand = "missl";
  }
  if (brandNames.waves === label) {
    currentBrand = "waves";
  }

  return (
    <div
      className={styles["brands-list"]}
      onClick={() => {
        updateAppStateBrand(currentBrand);
        router.push(labelUrl);
      }}
    >
      {width > desktopScreenSize && (
        <Image
          src={brandImg || "/"}
          alt={""}
          width={"186px"}
          height={"183px"}
          layout="intrinsic"
        />
      )}

      <Link href={labelUrl || ''}>
        <a onClick={() => updateAppStateBrand(currentBrand)}>{label}</a>
      </Link>
    </div>
  );
};

const BrandSideBar: FC<SidebarProps> = ({
  mainImg,
  mainTitle = "",
  logoArr = [],
  brandArr = [],
  isOpened,
  setIsOpened,
  closeIcon,
  closeMenu,
}): JSX.Element => {
  const router = useRouter();
  const [size] = useWindowSize();
  const { updateAppStateBrand } = useCustomHook();
  const { t } = useTranslation("common");
  const component = React.useContext(BrComponentContext);
  const page = React.useContext(BrPageContext);

  useEffect(() => {
    if (isOpened) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [isOpened]);

  // let brandCardsRef = component?.getModels()?.brandCards;
  // if (!brandCardsRef) {
    const header = page
      ?.getComponent()
      ?.getChildren()
      ?.find((component) => component?.getName() === "header");

    if (!header) return null;

    const container = header
      ?.getChildren()
      ?.find((component) => component?.getName() === "container");

    if (!container) return null;

    const userNav = container
      ?.getChildren()
      ?.find((component) => component?.getName() === "user-navbar");

    if (!userNav) return null;

   let brandCardsRef = userNav?.getModels()?.brandCards;
  // }
  const brandData =
    brandCardsRef && !Object.hasOwn(brandCardsRef, "mainImage")
      ? page?.getContent(brandCardsRef)
      : brandCardsRef;

  const cardsData = brandData && brandData?.getData();
  const mainImage =
    cardsData?.mainImage &&
    page?.getContent<ImageSet>(cardsData?.mainImage)?.getOriginal();
  if (!cardsData) {
    return null;
  }

  return (
    <div
      role={"brandSideBarMain"}
      className={styles["brand_sidebar_div"]}
      data-opened={isOpened}
      style={{
        transform: isOpened ? "translateX(0)" : "translateX(-100%)",
      }}
      onClick={() => {
        setIsOpened(false);
      }}
    >
      <div
        role={"brandSideBarDiv"}
        className={styles["brand_sidebar"]}
        data-opened={isOpened}
        onClick={(event) => event.stopPropagation()}
      >
        {closeIcon && (
          <div className={styles["menu-close-icon"]}>
            <div
              className={`c-opacity-60`}
              onClick={() => {
                setIsOpened(false);
                closeMenu();
                updateAppStateBrand("lazurde");
                router.push("/");
              }}
            >
              <BackArrow fill="#000000" opacity="0.6" />
              <span className="c-opacity-60">{t("Back to L’azurde")}</span>
            </div>
            <button
              style={{
                padding: "0",
              }}
            >
              <CrossSmall
                width={"12px"}
                height={"12px"}
                onClick={() => setIsOpened(false)}
              />
            </button>
          </div>
        )}
        {isOpened && (
          <AnimationWrapper animationName="slide-up">
            <div className={styles["text_div"]}>
              <div>
                <Image
                  src={mainImage?.getUrl() || "/"}
                  alt={mainImage?.getName() || ""}
                  layout="fixed"
                  width={184}
                  height={24}
                />
              </div>
              <div className={styles["slogan_div"]}>
                <span>{cardsData?.heading || ""}</span>
              </div>
              <div className={`${styles["brands-logo"]}`}>
                {cardsData?.brandImages &&
                  cardsData?.brandImages?.length > 0 &&
                  cardsData?.brandImages.map(
                    (imageRef: string, index: number) => {
                      const image =
                        imageRef &&
                        page?.getContent<ImageSet>(imageRef)?.getOriginal();
                      return (
                        <div key={index}>
                          <Image
                            key={index}
                            src={image?.getUrl() || "/"}
                            alt={image?.getName() || ""}
                            layout="fixed"
                            width={size > desktopScreenSize ? 89 : 80}
                            height={15}
                          />
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <div className={styles["brand_div"]}>
              {cardsData &&
                cardsData?.cardFG?.length > 0 &&
                cardsData?.cardFG?.map(
                  (
                    card: { link: string; image: string; title: string },
                    index: number
                  ) => {
                    const link = page?.getContent(card?.link)?.getUrl();
                    const brandImg = page
                      ?.getContent<ImageSet>(card?.image)
                      ?.getOriginal()
                      ?.getUrl();
                    return (
                      <React.Fragment key={index}>
                        <BrandContainer
                          brandImg={brandImg}
                          labelUrl={link}
                          label={card?.title}
                        />
                      </React.Fragment>
                    );
                  }
                )}
            </div>
          </AnimationWrapper>
        )}
      </div>
    </div>
  );
};

export default BrandSideBar;
