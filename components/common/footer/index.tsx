import React, { useContext, useState } from "react";
import { BrPageData, FooterProps } from "lib/types/common";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Label from "components/common/ui/label";
import Heading from "components/common/ui/heading";
import FooterIcons from "./footer-icons-list/index";
import FooterLinks from "./footer-links";
import Image from "next/image";
import LanguageSelector from "../language-selector";
import useWindowSize from "lib/utils/useWindowSize";
import Accordion from "components/common/ui/accordion/Accordion";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import { desktopScreenSize } from "lib/utils/common";
import { socialIconSize, paymentIconSize } from "lib/mock-data/data";
import { ImageSet } from "@bloomreach/spa-sdk";
import BloomreachPixel from "../bloomreach-pixel";
import { BrComponentContext, BrPageContext } from "@bloomreach/react-sdk";
import Router, { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../ui/spinner";

const Footer = ({ pageType = "" }: FooterProps): JSX.Element => {
  const router = useRouter();
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const { appState, setHandleAuthModal } = useContext(AppContext);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const component = React.useContext(BrComponentContext);
  const page = React.useContext(BrPageContext);
  const footerContentRef = component?.getModels()?.footerContent;
  const footerContentDoc =
    footerContentRef && page?.getContent(footerContentRef);
  const footerContent =
    (footerContentDoc && footerContentDoc?.getData()) || undefined;
  if (!footerContent) return null;
  const {
    subscriptionTerms = "",
    subscriptionText = "",
    subscriptionTitle = "",
    pageLinks = [],
    socialLinks = [],
    maroof = {},
    popularSearch = [],
    paymentImages = [],
  } = footerContent;
  const maroofImage =
    maroof?.image &&
    page?.getContent<ImageSet>(maroof?.image)?.getOriginal()?.getUrl();
  const maroofLink = page?.getContent(maroof?.imageLink)?.getUrl() || "/";

  const findPage: BrPageData = page?.getDocument();
  const getPageData = findPage && findPage?.model?.data;
  const seoTitle = getPageData && getPageData?.title;
  const getPageType = getPageData && getPageData?.pageType;
  const { product_sku } = router.query;
  const handleSignUp = () => {
    router?.push("/sign-up");
  };

  return (
    <footer
      className={`${styles["footer__container"]} ${
        styles[product_sku ? "padding-for-pdp" : ""]
      }`}
    >
      <div className={styles["footer__content-wrapper"]}>
        <div data-testid="wrapper" className={styles["footer-grid"]}>
          <div className={`${styles["footer__sub-container_left"]}`}>
            <p className={styles["footer__heading"]}>{subscriptionTitle}</p>
            <Label
              className={`${styles["footer__label"]} ${styles["footer__sub-heading"]}`}
            >
              {subscriptionText}
            </Label>
            {/* <Link href={"/"}> */}
            {!customerData || customerData?.entityId == 0 ? (
              <a
                onClick={() => {
                  setIsBtnLoading(true);
                  handleSignUp();
                }}
                className={styles["footer__signup-link"]}
              >
                {isBtnLoading ? <Spinner /> : <>{t("signUp")}</>}
              </a>
            ) : (
              <Link href={"/account"}>
                <a
                  onClick={() => {
                    setIsBtnLoading(true);
                    router.push("/account");
                  }}
                  className={styles["footer__signup-link"]}
                >
                  {isBtnLoading ? <Spinner /> : <>{t("signUp")}</>}
                </a>
              </Link>
            )}

            {/* </Link> */}
            {/* <Label
              className={`c-opacity-60 ${styles["footer__label"]}
            ${styles["footer__signup-text"]}`}
            >
              {subscriptionTerms}
            </Label> */}
          </div>
          <div className={styles["footer__sub-container_right"]}>
            {pageLinks &&
              pageLinks.length > 0 &&
              pageLinks?.map((footerLink: any, index: number) =>
                width > desktopScreenSize ? (
                  <FooterLinks
                    key={index}
                    heading={footerLink?.heading}
                    parentLinks={footerLink?.categoryExternalLink}
                    links={footerLink?.contentWithLinks}
                    index={index}
                    role={"footerLinks"}
                    page={page}
                    className={styles["footer-link-div"]}
                  />
                ) : (
                  <Accordion
                    key={index}
                    className={"footer-accordion"}
                    index={index}
                    heading={footerLink?.heading}
                    parentLinks={footerLink?.categoryExternalLink}
                    links={footerLink?.contentWithLinks}
                    arrowIcon={true}
                    role={"footerLinks-accordion"}
                    page={page}
                  />
                )
              )}
          </div>
        </div>
        <div className={styles["footer__inner-container"]}>
          <div className={styles["footer__social-links-wrapper"]}>
            <Label
              className={`c-opacity-60 ${styles["footer__social-link-text"]}`}
            >
              {socialLinks?.heading}
            </Label>
            <FooterIcons
              iconsList={socialLinks?.contentWithLinks}
              iconSize={socialIconSize}
              isFooterIcons={false}
              role={"socialicons"}
            />
          </div>
          {appState?.region === "sa" && maroofImage && (
            <div className={styles["footer__maroof-logo"]}>
              <Link href={maroofLink || "/"}>
                <a target="_blank">
                  {maroofImage ? (
                    <Image
                      src={maroofImage || "/"}
                      alt={"maroof"}
                      width={214}
                      height={66}
                      layout="fixed"
                    />
                  ) : null}
                </a>
              </Link>
            </div>
          )}
        </div>
        {/* <BloomreachPixel
          pageType={getPageType || pageType}
          pageTitle={seoTitle}
          scriptId={"homePageView"}
        /> */}
      </div>
      <div className={styles["footer__popular-section"]}>
        <p className={styles["heading"]}>{t("Popular Categories")}</p>
        <div className={styles["footer__popular-categories"]}>
          {popularSearch &&
            popularSearch.length > 0 &&
            popularSearch?.map((category: any, index: number) =>
              width > desktopScreenSize ? (
                <FooterLinks
                  key={index}
                  heading={category?.heading}
                  parentLinks={category?.categoryExternalLink}
                  links={category?.contentWithLinks}
                  index={index}
                  role={"footerLinks"}
                  page={page}
                />
              ) : (
                <Accordion
                  key={index}
                  className={"footer-accordion"}
                  index={index}
                  heading={category?.heading}
                  parentLinks={category?.categoryExternalLink}
                  links={category?.contentWithLinks}
                  arrowIcon={true}
                  role={"footerLinks-accordion"}
                  page={page}
                />
              )
            )}
        </div>
      </div>
      <div className={styles["footer__sub-footer"]}>
        <div className={styles["footer__footer-lang-selector"]}>
          <LanguageSelector
            className={styles["footer__footer-dropdowns"]}
            mainWrapperClass={styles["footer__footer-dropdowns-wrapper"]}
            showButton={false}
            optionClassName={styles["footer-dropdown-options"]}
          />
        </div>
        <FooterIcons
          className={styles["footer__footer-icons"]}
          iconsList={paymentImages}
          iconSize={paymentIconSize}
          isFooterIcons={true}
        />
      </div>
    </footer>
  );
};

export default Footer;
