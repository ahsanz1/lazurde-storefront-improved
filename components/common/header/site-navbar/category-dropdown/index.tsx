import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { AppContext } from "lib/context";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";
import Button from "components/common/ui/button";
import { isDev } from "general-config";
import Spinner from "components/common/ui/spinner";
import { useRouter } from "next/router";

type LinkProps = {
  title: string;
  url: string;
  isBold: Boolean;
};

interface ArabicCategoryProps {
  linkHeading: string;
  linkTitle: [
    {
      title: string;
    }
  ];
}

interface DropDownProps {
  dropdownData: [
    {
      title: string;
      catArr: [LinkProps];
    }
  ];
  parentCategory: string;
}

interface CategoryDropDownProps {
  categoryData: DropDownProps;
  setIsOpened: Function;
  isOpened?: any;
  timerRef?: any;
  customer?: any;
}

const CategoryDropDown = ({
  categoryData,
  setIsOpened,
  isOpened = { opened: true },
  timerRef,
  customer,
}: CategoryDropDownProps): JSX.Element => {
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState({ child: "", parent: "" });

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoading({ child: "", parent: "" });
    });

  }, [router.events]);

  return (
    <>
      <div
        key={categoryData?.parentCategory}
        data-testid={"dropdown-div"}
        className={styles["dropdown-wrapper"]}
        style={{ width: "100%" }}
        onMouseOver={() => {
          clearTimeout(timerRef.current);
          setIsOpened((prev: object) => {
            return { ...prev, opened: true };
          });
        }}
        onMouseLeave={() => {
          timerRef.current = setTimeout(() => {
            setIsOpened((prev: object) => {
              return { ...prev, opened: false, selected: -1 };
            });
          }, 100);
        }}
      >
        <AnimationWrapper
          animationName={isOpened?.opened ? "slide-down" : "none"}
          lazyLoad={true}
          animationWrapperDivStyle={{ width: "100%" }}
        >
          <div className={styles["category-dropdown"]}>
            <div className={styles["links-wrapper"]}>
              {categoryData?.dropdownData?.map((data: any, index: number) => {
                const { children } = data;
                const name = data?.getName();
                return (
                  <div key={index} className={styles["link-wrapper"]}>
                    <div className={styles["title"]}>{name}</div>

                    <div className={styles["links"]}>
                      {children?.map((data: any, index: number) => {
                        const name = data?.getName();
                        const isGolden = name?.includes("=golden")
                          ? true
                          : false;
                        const newname = name?.split("=");
                        const url = data?.getUrl();
                        const isBold = data?.params?.find(
                          (param: any) => param?.kind?.toLowerCase() == "bold"
                        );
                        // const filteredArray = newname?.filter(
                        //   (str: string) => str !== "Gift Card"
                        // );
                        return (
                          <>
                            {url ? (
                              <Link
                                key={index}
                                href={url !== "/" ? url : "/"}
                                prefetch={false}
                              >
                                <a
                                  onClick={() => {
                                    setOnClickLoading({ child: name, parent: categoryData?.parentCategory });
                                  }}
                                  data-is-bold={newname?.[1] === "bold"}
                                  data-golden-color={isGolden}
                                >
                                  {(name === onClickLoading?.child) && (onClickLoading?.parent === categoryData?.parentCategory) ? (
                                    <>
                                      {newname?.[0]} ...{" "}
                                      <Spinner
                                        width={14}
                                        height={14}
                                        color="Black"
                                      />
                                    </>
                                  ) : (
                                    <>{newname?.[0]}</>
                                  )}
                                  {/* {
                                    ? newname?.[0]
                                    : filteredArray?.[0]} */}
                                </a>
                              </Link>
                            ) : (
                              <span
                                onClick={() => {
                                  setOnClickLoading({ child: name, parent: categoryData?.parentCategory });
                                }}
                                className={styles["has-category-link"]}
                              >
                                {(name === onClickLoading?.child) && (onClickLoading?.parent === categoryData?.parentCategory) ? (
                                  <>
                                    {newname?.[0]} ...{" "}
                                    <Spinner
                                      width={14}
                                      height={14}
                                      color="Black"
                                    />
                                  </>
                                ) : (
                                  <>{newname?.[0]}</>
                                )}
                                {/* {
                                  ? newname?.[0]
                                  : filteredArray?.[0]} */}
                              </span>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <DropDownImage categoryData={categoryData} />
          </div>
        </AnimationWrapper>
      </div>
    </>
  );
};

export default CategoryDropDown;

const DropDownImage = ({ categoryData }: any) => {
  const { t } = useTranslation("common");
  const [size] = useWindowSize();
  return (
    <>
      {size > desktopScreenSize ? (
        <>
          {categoryData?.parentCategory
            ?.toLocaleLowerCase()
            .localeCompare("lab grown diamonds") === 0 ||
            categoryData?.parentCategory
              ?.toLocaleLowerCase()
              .localeCompare("ألماس مختبرات") === 0 ? (
            <div className={styles["dropdown-image-wrapper"]}>
              <Link href={"/lab-grown-diamonds"} prefetch={false}>
                <a>
                  <Image
                    className={styles["dropdown-image"]}
                    src={
                      "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/site-navigation/ldg-nav-dropdown.jpg"
                    }
                    alt={"Lab Grown Diamonds"}
                    width={100}
                    height={100}
                    layout="fill"
                    quality={100}
                  // unoptimized={isDev}
                  />
                </a>
              </Link>
              <div className={styles["image-text-wrapper"]}>
                <span
                  className={`${styles["image-text"]} ${styles["heading"]}`}
                >
                  {t("eterna")}
                </span>
                <span className={styles["image-text"]}>{t("LGD")}</span>
                {/* <span className={styles["image-text"]}>{t("collection")}</span> */}
                <Button
                  className={styles["image-button"]}
                  buttonStyle={"transparent-white"}
                >
                  {t("shopNow")}
                </Button>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <Link href={"/lab-grown-diamonds"} prefetch={false}>
            <a>
              <span>{t("LGDlearn")}</span>
            </a>
          </Link>
        </>
      )}
    </>
  );
};
