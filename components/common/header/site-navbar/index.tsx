import React, { FC, useContext, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { BackArrow, Search } from "components/icons";
import { ImageType } from "lib/types/common";
import CategoryDropDown from "./category-dropdown";
import { BrManageMenuButton } from "@bloomreach/react-sdk";
import { ImageSet, Menu as BrMenu } from "@bloomreach/spa-sdk";
import { AppContext } from "lib/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "components/common/ui/spinner";
type LinkProps = {
  title: string;
  url: string;
  isBold: Boolean;
};
interface siteNavBarProps {
  arabicSiteLogo?: ImageType;
  headerId?: string;
  setOpenSearchDialog?: (val: boolean) => void;
  menuData?: any;
  isLoadingMenu?: boolean;
  siteLogoHeight?: string | number;
  className?: string;
  menu?: any;
  brandImage?: ImageSet;
  brandLink?: string;
}

interface DropdownDataProps {
  dropdownData: [
    {
      title: string;
      catArr: [LinkProps];
    }
  ];
  parentCategory: string;
}

const SiteNavBar: FC<siteNavBarProps> = ({
  className,
  headerId,
  setOpenSearchDialog,
  siteLogoHeight = "",
  menu,
  brandImage,
  brandLink,
}): JSX.Element => {
  const { t } = useTranslation("common");
  const exitTimerRef = useRef(null);
  const enterTimerRef = useRef(null);
  const [isOpened, setIsOpened] = useState({ opened: false, selected: -1 });
  const [dropdownData, setDropdownData] = useState<DropdownDataProps>();
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const queryClient = useQueryClient();
  const customer: any = queryClient.getQueryData(["customerData"]);
  const [onClickLogoLoading, setOnClickLogoLoading] = useState(false)
  const [onClickLoading, setOnClickLoading] = useState("")

  useEffect(() => {
    setIsOpened({ opened: false, selected: -1 });
  }, [router?.asPath]);

  // if (typeof window == undefined) return;
  const baseUrl =
    typeof window !== "undefined" &&
    `${window?.location.origin}/${router?.locale}`;

  router.events.on("routeChangeComplete", () => {
    setOnClickLogoLoading(false)
    setOnClickLoading("")
  });

  return (
      <nav>
        <div style={{ position: "relative" }}>
          <BrManageMenuButton menu={menu} />
        </div>
        <div
          id="sitenav-bar"
          data-testid="id"
          className={`${styles["site-navbar"]} ${className}`}
          data-header-id={
            appState?.brandEN === "Miss L'" ? "missLHeader" : "lazurdeHeader"
          }
        >
          <div
            style={{
              display: "none",
            }}
            className={styles["back-btn"]}
          >
            <Link href={"/"}>
              <a>
                <div>
                  <BackArrow />
                </div>
                {t("Back to L’azurde")}
              </a>
            </Link>
          </div>
          <div
            onClick={() => {
              setOnClickLogoLoading(true)
            }}
            className={`${styles["navbar-logo"]} ${styles[appState?.brandEN === "Miss L'" ? "missl-mt" : ""]
              }`}
          >
            <Link href={brandLink || "/"}>
              <a>
                {onClickLogoLoading ? <Spinner /> : <>
                  <Image
                    src={brandImage?.getOriginal()?.getUrl() || "/"}
                    width={"100%"}
                    height={
                      siteLogoHeight || appState?.brandEN === "Miss L'" ? 49 : 28
                    }
                    alt={brandImage?.getOriginal()?.getName()}
                    layout="fixed"
                    quality={100}
                  // unoptimized={isDev}
                  // placeholder="blur"
                  // blurDataURL={imageFallback}
                  />
                </>}
              </a>
            </Link>
          </div>
          <div
            className={`${styles["nav-links"]} ${"site-nav-links"}`}
            onMouseLeave={() => {
              clearTimeout(enterTimerRef.current);
              exitTimerRef.current = setTimeout(() => {
                setIsOpened({ selected: -1, opened: false });
              }, 100);
            }}
          >
            {menu &&
              menu?.getItems()?.length > 0 &&
              menu?.getItems()?.map((mainMenu: any, index: number) => {
                const hasCategories = mainMenu?.children?.length > 0;
                const url = mainMenu?.getUrl();
                const completeUrl = `${baseUrl}${url}`;
                const name = mainMenu?.getName();
                const isGolden = name?.includes("=golden") ? true : false;

                return (
                  <div
                    key={index}
                    role={"links"}
                    className={styles["links"]}
                    data-selected={
                      hasCategories
                        ? isOpened.opened === true && isOpened.selected === index
                        : isOpened.selected === index
                    }
                    onClick={() => {
                      if (hasCategories) {
                        setIsOpened({ opened: false, selected: index });
                      } else {
                        setIsOpened({ opened: false, selected: -1 });
                      }
                    }}
                    data-golden-color={isGolden}
                  >
                    {completeUrl ? (
                      <Link href={completeUrl !== "/" ? completeUrl : "/"}>
                        <a
                          onClick={() => {
                            setOnClickLoading(name)
                          }}
                          onMouseOver={() => {
                            clearTimeout(exitTimerRef.current);
                            clearTimeout(enterTimerRef.current);

                            if (isOpened?.selected === index) return null;
                            if (hasCategories) {
                              enterTimerRef.current = setTimeout(() => {
                                setIsOpened({ opened: true, selected: index });
                                setDropdownData({
                                  dropdownData: mainMenu?.children,
                                  parentCategory: name,
                                });
                              }, 200);
                            } else {
                              clearTimeout(enterTimerRef.current);
                              setIsOpened({ opened: false, selected: index });
                            }
                          }}
                        >
                          {name == onClickLoading ? (
                            <>

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
                    ) : (
                      <span className={styles["has-category-link"]}>   {name == onClickLoading ? (
                        <>

                          <Spinner
                            width={14}
                            height={14}
                            color="Black"
                          />
                        </>
                      ) : (
                        <> {name}</>
                      )}</span>
                    )}
                  </div>
                );
              })}
          </div>
          <div
            role={"search"}
            onClick={() => {
              setOpenSearchDialog(true);
              document.documentElement.className = "hide-scrollbar";
            }}
            className={styles["search-icon"]}
          >
            <Search></Search>
          </div>
          <div
            className={styles["category-dropdown"]}
            data-opened={isOpened.opened}
          >
            <CategoryDropDown
              setIsOpened={setIsOpened}
              isOpened={isOpened}
              categoryData={dropdownData}
              timerRef={exitTimerRef}
              customer={customer}
            ></CategoryDropDown>
          </div>
          <div
            role={"overlay"}
            className={styles["overlay"]}
            data-opened={isOpened.opened}
            onClick={() => setIsOpened({ ...isOpened, opened: false })}
          ></div>
        </div>
      </nav>
  );
};

export default SiteNavBar;
