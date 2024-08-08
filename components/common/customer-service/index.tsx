import * as React from "react";
import Label from "components/common/ui/label";
import Image from "next/image";
import styles from "./customer-service.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize, getBloomreachImg } from "lib/utils/common";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { ContainerItem, Page } from "@bloomreach/spa-sdk";
import { ImageSet } from "@bloomreach/spa-sdk";
import { Search } from "components/icons";
import { AppContext } from "lib/context";
import Heading from "../ui/heading";
import { helpCentreMainStatic } from "lib/api/static-ancillary/helpCentreMainStatic";

interface ServicesProps {
  icon?: { url?: ""; altText?: "" };
  iconTitle?: string;
  iconText?: string;
  url?: string;
  width?: string | number;
  height?: string | number;
}

interface CustomerServiceProps {
  bannerImage?: { url?: ""; altText?: "" };
  heading?: string | "";
  services?: ServicesProps[];
  inputIcon?: { url?: ""; altText?: "" };
  title?: string | "";
  component?: ContainerItem;
  page?: Page;
  locale?: any;
}

const CustomerService = ({
  bannerImage = {},
  inputIcon = {},
  component,
  page,
  locale,
}: CustomerServiceProps): JSX.Element => {
  const { appState } = React.useContext(AppContext);

  const findData = helpCentreMainStatic?.[locale];

  const pageHeading = findData?.titleandtext?.title;
  const getCards = findData?.contactUsCards?.contactUsCard;
  const bannerHeading = findData?.bannercompound?.title;
  const getBanner = findData?.bannercompound?.image;

  const { t } = useTranslation("common");
  const [size] = useWindowSize();
  const router = useRouter();

  const [filterBlock, setFilterBlock] = React.useState(getCards);

  React.useEffect(() => {
    setFilterBlock(getCards);
  }, [locale]);

  const handleFilter = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    const nameFilter = getCards.filter(
      (val: any) =>
        val?.cardTitle?.toString().toLowerCase().indexOf(inputValue) > -1
    );
    setFilterBlock(nameFilter);
  };

  return (
    <div className={styles["services-container"]}>
      <div className={styles["services_search-section"]}>
        <div>
          <Image
            className={styles["services_banner-image"]}
            src={
              size > desktopScreenSize
                ? getBanner?.imgUrl
                : getBanner?.imgUrlMbl
            }
            alt={getBanner?.altText || appState?.brand}
            width={size > desktopScreenSize ? 1280 : 375}
            height={size > desktopScreenSize ? 308 : 120}
            layout="responsive"
          />
        </div>
        <div
          className={styles["text-section"]}
          data-content-position={"Center"}
        >
          <div>
            {bannerHeading && (
              <Heading
                element="h1"
                role="heading"
                className={styles["heading"]}
              >
                {bannerHeading}
              </Heading>
            )}
            <div className={styles["search-bar"]}>
              <div className={styles["search-icon"]}>
                <Search width="16" height="16" color="rgba(0, 0, 0, 0.4)" />
              </div>
              <div>
                <input
                  placeholder={t("search")}
                  onChange={(e) => {
                    handleFilter(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {pageHeading && (
        <Heading element="h2" role="title" className={styles["title"]}>
          {pageHeading}
        </Heading>
      )}
      <div className={styles["service-section"]}>
        {filterBlock?.map((object: any, index: number) => {
          const { cardTitle, cardText, imgLink, cardLink } = object;
          return (
            <div
              onClick={() => {
                cardLink?.url &&
                  router?.push(`${router?.pathname}/${cardLink?.url}`);
              }}
              key={index}
              className={styles["service-block"]}
            >
              <div>
                <div className={styles["icon-block"]}>
                  {imgLink?.imgUrl && (
                    <Image
                      src={imgLink?.imgUrl}
                      alt={""}
                      width={27.5}
                      height={30.56}
                    />
                  )}
                  {cardTitle && (
                    <Heading
                      element="h2"
                      role="iconTitle"
                      className={styles["icon-title"]}
                    >
                      {cardTitle}
                    </Heading>
                  )}
                </div>
                {cardText && (
                  <Label role="iconText" className={styles["icon-text"]}>
                    {cardText}
                  </Label>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles["button"]}>
        <Image alt="question" src={"/question.png"} width={20} height={20} />
        <p>{t("haveAQuestion")}</p>
      </button>
    </div>
  );
};
export default CustomerService;
