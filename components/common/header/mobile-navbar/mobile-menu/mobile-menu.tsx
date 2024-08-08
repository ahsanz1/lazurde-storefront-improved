import React, { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import styles from "../style.module.scss";
import { CrossSmall } from "components/icons";
import Link from "next/link";
import { ArrowRight, BackArrow } from "components/icons";
import MobileSubMenu from "../mobile-sub-menu/mobile-sub-menu";
import UserLinks from "../user-links";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { MenuProps, DropdownDataProps } from "lib/types/mobile-header";
import { brandNames, brandNamesAR, getBrandKey } from "lib/utils/constants";
import AnimationWrapper from "components/common/ui/animation-wrapper";
import ContentLoading from "components/common/ui/skeletons/content-loading";
import Spinner from "components/common/ui/spinner";

const MobileMenu = ({
  active = false,
  closeMenu,
  menuData,
  headerId,
  handleAccountSidebar,
}: MenuProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<Boolean>(false);
  const [subMenuData, setSubMenuData] = useState<DropdownDataProps>();
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
  const [isLoadingBrand, setIsLoadingBrand] = useState(false);
  const [onClickLoading, setOnClickLoading] = useState("");

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [active]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoading("");
      closeMenu();
    });

  }, [router.events]);

  return (
    <>
      <div
        className={`${styles[`mobile-header__menu-wrapper`]} ${active ? `${styles[`mobile-header__menu-active`]}` : ``
          } ${styles[isSubMenuOpen ? "is-submenu-open" : ""]}`}
      >
        <div
          className={`${headerId === "lazurdeHeader"
            ? styles["mobile-header__menu-close-icon"]
            : styles["mobile-header__menu-close-icon"]
            }`}
          data-flex={languageSelectorOpen}
          data-styling-for-tabs={languageSelectorOpen}
        >
          {/* {headerId !== "lazurdeHeader" && (
            <div
              data-testid={"site-logo"}
              className={`c-opacity-60 ${styles["mobile-header__rotate-icon"]}`}
              onClick={() => {
                closeMenu();
                updateAppStateBrand("lazurde");
                router?.push("/");
              }}
            >
              <BackArrow fill="#000000" opacity="0.6" />
              <span className="c-opacity-60">{t("Back to L’azurde")}</span>
            </div>
          )} */}
          {languageSelectorOpen && (
            <div
              data-testid="close-sub-menu"
              onClick={() => {
                setLanguageSelectorOpen(false);
              }}
              className={styles["mobile-header__sub-menu-back-btn"]}
            >
              <BackArrow fill="#000000" opacity="0.6" />
              <span data-testid="back" className="c-opacity-60">
                {t("back")}
              </span>
            </div>
          )}
          <button
            data-testid="cross-btn1"
            className=""
            onClick={() => {
              closeMenu();
              setLanguageSelectorOpen(false);
              setOnClickLoading("")
            }}
          >
            <CrossSmall width={"12px"} height={"12px"} showStyleDiv={false} />
          </button>
        </div>
        {!languageSelectorOpen && (
          <div className={styles["tabs-wrapper"]}>
            <div
              className={styles["btn-div"]}
              data-active={!router.pathname.includes("/miss-l")}
            >
              <button
                onClick={async () => {
                  if (!router.pathname.includes("/miss-l")) return;
                  setIsLoadingBrand(true);
                  await router.push("/");
                  setIsLoadingBrand(false);
                  document.documentElement.style.overflowY = "hidden";
                }}
              >
                {appState?.lang === "en"
                  ? brandNames?.lazurde
                  : brandNamesAR?.lazurde}
              </button>
            </div>
            <div
              className={styles["btn-div"]}
              data-active={router.pathname.includes("/miss-l")}
            >
              <button
                onClick={async () => {
                  if (router.pathname.includes("/miss-l")) return;
                  setIsLoadingBrand(true);
                  await router.push("/miss-l");
                  setIsLoadingBrand(false);
                }}
              >
                {appState?.lang === "en"
                  ? brandNames?.missl
                  : brandNamesAR?.missl}
              </button>
            </div>
          </div>
        )}

        {isLoadingBrand ? (
          <div>
            <ContentLoading count={3} />
          </div>
        ) : (
          <AnimationWrapper
            animationName={active ? "slide-up" : "none"}
            lazyLoad={true}
          >
            <div className={styles["menu-wrapper"]}>
              {/* <div className={styles["mobile-header__brand-name"]}>
              {headerId === "wavesHeader"
                ? brandNames.waves
                : headerId === "missLHeader"
                ? brandNames?.missl
                : brandNames.lazurde}
            </div> */}
              <nav className={styles["mobile-header__menu-list-wrapper"]}>
                <ul className={styles["mobile-header__menu-list"]}>
                  {menuData &&
                    menuData?.getItems()?.length > 0 &&
                    menuData
                      ?.getItems()
                      ?.map((mainMenu: any, index: number) => {
                        const hasCategories = mainMenu?.children?.length > 0;
                        const url = mainMenu?.getUrl();
                        const name = mainMenu?.getName();
                        const isGolden = name?.includes("=golden")
                          ? true
                          : false;

                        return (
                          <React.Fragment key={index}>
                            <li
                              key={index}
                              className={
                                styles["mobile-header__menu-list-item"]
                              }
                              onClick={() => {
                                if (hasCategories) {
                                  setIsSubMenuOpen(!isSubMenuOpen);
                                  setSubMenuData({
                                    dropdownData: mainMenu?.children,
                                    mainMenuName: name,
                                    url: url,
                                  });
                                  setOnClickLoading("")
                                }
                              }}
                              data-golden-color={isGolden}
                            >
                              {url && !hasCategories ? (
                                <>
                                  <Link href={url !== "/" ? url : ""}>
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push(url);
                                        setIsSubMenuOpen(false);
                                        // closeMenu();
                                        setOnClickLoading(name);
                                      }}
                                    >

                                      {name == onClickLoading ? (
                                        <>
                                          {isGolden ? name?.split("=")?.[0] : name} ...{" "}
                                          <Spinner
                                            width={14}
                                            height={14}
                                            color="Black"
                                          />
                                        </>
                                      ) : (
                                        <> {isGolden ? name?.split("=")?.[0] : name}</>
                                      )}

                                    </a>
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <span>{name == onClickLoading ? (
                                    <>
                                      {name} ...{" "}
                                      <Spinner
                                        width={14}
                                        height={14}
                                        color="Black"
                                      />
                                    </>
                                  ) : (
                                    <>{name}</>
                                  )}</span>
                                </>
                              )}
                              {hasCategories && (
                                <ArrowRight
                                  fill="#000000"
                                  width="6"
                                  height="8px"
                                  onclick={() => {
                                    setIsSubMenuOpen(!isSubMenuOpen);
                                    setOnClickLoading("")
                                  }}
                                />
                              )}
                            </li>
                          </React.Fragment>
                        );
                      })}
                </ul>
              </nav>
              {/* 
            <div
              className={styles["mobile-header__boutique-btn"]}
              onClick={() => {
                setIsOpened(true);
              }}
            >
              <span>{t("userNavBarTitle")}</span>
              <ArrowRight fill="#000000" width="6" height="8px" />
            </div> */}
              <UserLinks
                handleAccountSidebar={handleAccountSidebar}
                languageSelectorOpen={languageSelectorOpen}
                setLanguageSelectorOpen={setLanguageSelectorOpen}
                closeMenu={() => {
                  setLanguageSelectorOpen(false);
                  closeMenu && closeMenu();
                }}
              />
            </div>
          </AnimationWrapper>
        )}
      </div>

      <MobileSubMenu
        active={isSubMenuOpen}
        closeMenu={() => {
          closeMenu();
        }}
        closeSubMenu={setIsSubMenuOpen}
        subMenuData={subMenuData}
        menuTitle={subMenuData?.mainMenuName}
      />

      {/* <BrandSideBar
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        closeIcon={true}
        closeMenu={closeMenu}
      /> */}
    </>
  );
};

export default MobileMenu;
