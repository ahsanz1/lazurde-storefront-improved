/* eslint-disable react/no-children-prop */
import React, { FC, useState, useContext, useEffect } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./term-condition.module.scss";
import BackArrow from "components/icons/BackArrow";
import { useRouter } from "next/router";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import Spinner from "../ui/spinner";
import SideBarButtons from "./side-bar";
import RightSide from "./right-side";
import Heading from "../ui/heading";
import { lazurdePoliciesStatic } from "lib/api/static-ancillary/lazurdePolicies";
import { cgirStatic } from "lib/api/static-ancillary/cgir";
import {
  helpCentreChildStatic,
  helpCentreChildStaticNames,
} from "lib/api/static-ancillary/helpCentreChildStatic";

type HyperLinksProps = {
  name?: string | "";
  content?: string | "";
  icon?: ImageType;
  width?: string | "";
  height?: string | "";
  accordion?: AccordionProps[];
};

type AccordionProps = {
  heading?: string | "";
  text?: string | "";
};

interface TermCondtionProps {
  helpCenterData?: any;
  hyperLinks?: HyperLinksProps[];
  sideBarBgcolor?: string | "";
  contentBgcolor?: string | "";
  title?: string | "";
  isHelpCenterPage?: boolean;
}

const TermCondtion: FC<any> = ({
  contentBgcolor,
  isHelpCenterPage = false,
  isCgirPage = false,
  isLazurdePolicies = false,
  page,
  component,
  locale,
}) => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const [showPolicies, setShowPolicies] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tabObj, setTabObj] = useState({});

  const arabicHeading = (value: string) => {
    const obj: any = {
      "help centre": "مركز المساعدة",
      "lazurde policies": "سياسات لازوردي",
      "lazurde investor relations": "علاقات المستثمرين في لازوردي",
    };
    return obj?.[value];
  };

  const englishHeading = (value: string) => {
    const obj: any = {
      "lazurde investor relations": "l’azurde investor relations",
      "lazurde policies": "l’azurde policies",
    };
    return obj?.[value];
  };
  const currentPath: any = router?.query?.help_centre_page_url;
  const policiesDataArr = lazurdePoliciesStatic?.[locale]?.contentWithLinks;
  const cgirDataArr = cgirStatic?.[locale]?.cgir;
  const helpCentreDataArr = helpCentreChildStatic?.[locale]?.[currentPath];
  const helpCentreDataNames = helpCentreChildStaticNames?.[locale];

  let ancillaryData = [];
  if (isCgirPage) {
    ancillaryData = cgirDataArr;
  } else if (isLazurdePolicies) {
    ancillaryData = policiesDataArr;
  } else {
    ancillaryData = helpCentreDataNames;
  }

  const getHeading = router?.pathname?.split("/")[1];
  const mainHeading =
    appState?.lang === "ar"
      ? arabicHeading(getHeading?.replace(/-/g, " "))
      : (getHeading === "lazurde-investor-relations" ||
        getHeading === "lazurde-policies")
      ? englishHeading(getHeading?.replace(/-/g, " "))
      : getHeading?.replace(/-/g, " ");
  const parentPageName = router?.pathname?.split("[")[0];
  const childPageName = router?.query?.help_centre_page_url;
  const breadcrumbs = { main: parentPageName, path: childPageName };

  const arabicBreadcrumbsPath = (path: any) => {
    switch (path) {
      case "order":
        return "طلب";
      case "refund-and-return":
        return "الاسترداد والإرجاع";
      case "my-account":
        return "حسابي";
      case "tracking-and-delivery":
        return "التتبع والتسليم";
      case "payments":
        return "طرق الدفع";
      default:
        break;
    }
  };

  const titleAndBreadCrumb = () => {
    return (
      <>
        <Heading element="h1" className={styles["term-heading"]}>
          {mainHeading}
        </Heading>
        {isHelpCenterPage ? (
          <div
            className={
              styles[
                isHelpCenterPage
                  ? "term-breadcrumb-main"
                  : "term-breadcrumb-wrapper"
              ]
            }
          >
            <span
              className={styles["term-breadcrumb"]}
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(breadcrumbs?.main);
              }}
            >
              {appState?.lang == "en"
                ? breadcrumbs?.main.split("/")
                : isHelpCenterPage && "مركز المساعدة"}{" "}
            </span>
            <span className={styles["term-breadcrumb"]}>
              {" "}
              {appState?.lang == "en"
                ? isHelpCenterPage && `/${breadcrumbs?.path}`
                : isHelpCenterPage &&
                  `/${arabicBreadcrumbsPath(breadcrumbs?.path)}`}
            </span>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div
      className={
        styles[
          cgirDataArr?.length > 0 ? "term-container-cgir" : "term-container"
        ]
      }
    >
      {!showPolicies && (
        <div
          className={styles["back-button"]}
          style={{ backgroundColor: contentBgcolor }}
          onClick={() => {
            setShowPolicies(true);
          }}
        >
          <div>
            <BackArrow />
          </div>
          <button className={styles["back-content"]}>
            {appState?.lang == "en" ? `Back` : `رجوع`}
          </button>
        </div>
      )}

      <div className={styles[isCgirPage ? "cgir-style" : "general-style"]}>
        {!isCgirPage ? (
          <div className={styles["right-heading"]}>
            <div className={styles["left-col"]}></div>
            <div className={styles["right-col"]}>{titleAndBreadCrumb()}</div>
          </div>
        ) : (
          titleAndBreadCrumb()
        )}
      </div>

      <div className={`${styles["term-section"]}`}>
        <div className={styles["term-left"]} data-opened={showPolicies}>
          <SideBarButtons
            currentArr={ancillaryData}
            setShowPolicies={setShowPolicies}
            isHelpCenterPage={isHelpCenterPage}
            isCgirPage={isCgirPage}
            setTabObj={setTabObj}
          />
          <div className={styles["back-block"]}>
            <button
              className={styles["button"]}
              onClick={() => {
                setLoading(true);
                router.push("/contact-us");
              }}
            >
              {loading ? (
                <Spinner width={12} height={12} stroke={6} color={"white"} />
              ) : (
                <Image src={"/question.png"} width={20} height={20} alt="" />
              )}

              <p>{t("haveAQuestion")}</p>
            </button>
          </div>
        </div>

        <div
          className={styles["term-right-container"]}
          data-opened={showPolicies}
        >
          <RightSide
            currentObj={tabObj}
            currentArr={helpCentreDataArr}
            cgirArr={cgirDataArr}
            contentBgcolor={contentBgcolor}
            title={mainHeading}
            isCgirPage={isCgirPage}
            isHelpCenterPage={isHelpCenterPage}
            breadcrumbs={isHelpCenterPage ? breadcrumbs : null}
          />
        </div>
      </div>
    </div>
  );
};
export default TermCondtion;
