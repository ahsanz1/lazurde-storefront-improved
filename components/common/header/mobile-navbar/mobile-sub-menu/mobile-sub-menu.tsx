import React, { useEffect, useState } from "react";
import styles from "../style.module.scss";
import { Cross, BackArrow, CrossSmall } from "components/icons";
import Link from "next/link";
import Label from "components/common/ui/label";
import { useRouter } from "next/router";
import { MobileSubMenuProps } from "lib/types/mobile-header";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import useTranslation from "next-translate/useTranslation";
import Spinner from "components/common/ui/spinner";

type ArabicCategoryType = {
  linkHeading?: string;
  linkTitle?: [{ title?: string }];
};

const MobileSubMenu = ({
  active = false,
  closeMenu,
  closeSubMenu,
  subMenuData,
  menuTitle = "",
}: MobileSubMenuProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState("");

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoading("");
      closeMenu();
      closeSubMenu();
    });

  }, [router.events]);

  return (
    <div
      className={`${styles[`mobile-header__sub-menu-wrapper`]} ${active ? `${styles[`mobile-header__sub-menu-active`]}` : ``
        }`}
      data-testid="submenu"
    >
      <div className={styles["mobile-header__sub-menu-close-icon"]}>
        <div
          data-testid="close-sub-menu"
          onClick={() => {
            closeSubMenu();
          }}
          className={styles["mobile-header__sub-menu-back-btn"]}
        >
          <BackArrow fill="#000000" opacity="0.6" />
          <span data-testid="back" className="c-opacity-60">
            {t("back")}
          </span>
        </div>
        <button data-testid="cross-btn">
          {width >= desktopScreenSize ? (
            <Cross
              width="20px"
              height="20px"
              onClick={() => {
                closeMenu();
                closeSubMenu();
              }}
            />
          ) : (
            <CrossSmall
              onClick={() => {
                closeMenu();
                closeSubMenu();
                setOnClickLoading("")
              }}
            ></CrossSmall>
          )}
        </button>
      </div>
      <AnimationWrapper animationName={active ? "slide-up" : "none"}>
        <div className={styles["menu-wrapper"]}>
          {menuTitle ? (
            <div className={styles["mobile-header__menu-title"]}>
              <a
                onClick={(e) => {
                  setOnClickLoading(menuTitle);
                  e.preventDefault();
                  router.push(subMenuData.url);
                  // closeMenu();
                  // closeSubMenu();
                }}
              >
                {menuTitle == onClickLoading ? (
                  <>
                    {menuTitle} ...{" "}
                    <Spinner
                      width={14}
                      height={14}
                      color="Black"
                    />
                  </>
                ) : (
                  <>{menuTitle}</>
                )}
              </a>
            </div>
          ) : null}
          <div
            data-testid="sub-links"
            className={styles["mobile-header__sub-menu-list-wrapper"]}
          >
            <ul className={styles["mobile-header__sub-menu-list"]}>
              {subMenuData &&
                subMenuData?.dropdownData?.length > 0 &&
                subMenuData?.dropdownData?.map((data: any, index: number) => {
                  const { children } = data;
                  const name = data?.getName();

                  return (
                    <li
                      key={index}
                      className={styles["mobile-header__sub-menu-list-items"]}
                    >
                      <Label
                        className={styles["mobile-header__sub-menu-heading"]}
                      >
                        {name}
                      </Label>
                      <ul>
                        {children &&
                          children?.length > 0 &&
                          children?.map((data: any, index: number) => {
                            const name = data?.getName();
                            const isGolden = name?.includes("=golden")
                              ? true
                              : false;
                            const newname = name?.split("=");
                            const url = data?.getUrl();
                            const isBold = data?.params?.find(
                              (param: any) =>
                                param?.kind?.toLowerCase() == "bold"
                            );
                            return (
                              <li
                                key={index}
                                className={`${styles["mobile-header__sub-menu-list-item"]}`}
                              // onClick={() => {
                              //   closeMenu();
                              //   closeSubMenu();
                              // }}
                              >
                                {url ? (
                                  <Link href={url !== "/" ? url : ""}>
                                    <a
                                      onClick={() => {
                                        setOnClickLoading(name);
                                      }}
                                      data-golden-color={isGolden}
                                      data-is-bold={newname?.[1] === "bold"}
                                    >
                                      {name == onClickLoading ? (
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
                                    </a>
                                  </Link>
                                ) : (
                                  <a
                                    onClick={() => {
                                      setOnClickLoading(name);
                                    }}
                                    data-is-bold={isBold?.value}>
                                    <a data-is-bold={newname?.[1] === "bold"}>
                                      {name == onClickLoading ? (
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
                                    </a>
                                  </a>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
              {menuTitle
                ?.toLocaleLowerCase()
                .localeCompare("lab grown diamonds") === 0 ||
                menuTitle?.toLocaleLowerCase().localeCompare("ألماس مختبرات") ===
                0 ? (
                <Link href={"/lab-grown-diamonds"}>
                  <a>
                    <li
                      className={styles["mobile-header__sub-menu-list-items"]}
                      onClick={() => {
                        closeMenu();
                        closeSubMenu();
                      }}
                    >
                      <Label
                        className={styles["mobile-header__sub-menu-heading"]}
                      >
                        {t("LGDlearn")}
                      </Label>
                    </li>
                  </a>
                </Link>
              ) : null}
            </ul>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default MobileSubMenu;
