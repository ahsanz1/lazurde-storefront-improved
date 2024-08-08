/* eslint-disable react/no-children-prop */
import React, { FC, useState, useContext, useEffect } from "react";
import { ImageType } from "lib/types/common";
import styles from "./cgir.module.scss";
import BackArrow from "components/icons/BackArrow";
import { useRouter } from "next/router";
import { AppContext } from "lib/context";
import IRHomePage from "./IR-home-page";
import Prospectus from "./prospectus";
import StockInformation from "./stock-information";
import FinancialInformation from "./financial-information";
import CorporateGovernance from "./corporate-governance";
import Dividends from "./dividends";
import Announcements from "./announcements";
import FinancialCalender from "./financial-calender";
import EmailSubscription from "./email-subscription";
import ContactIR from "./contact-IR";
import InPress from "./in-press";
import { IframToolScript } from "../iframe-script";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import FactSheet from "./fact-sheet";
import Spinner from "../ui/spinner";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

type CGIRPagesProps = {
  name?: string | "";
  content?: string | "";
  icon?: ImageType;
  width?: string | "";
  height?: string | "";
  moreContent?: MoreContentProps[];
  dividend?: DividendProps[];
  post?: PostArrProps[];
  members?: MembersProps[];
  executive?: ExecutiveProps[];
};
type MoreContentProps = {
  heading?: string | "";
  text?: string | "";
  image?: ImageType;
  imageTitle?: string;
  pdfUrl?: string;
};

type DividendProps = {
  heading?: string | "";
  text?: string | "";
  dividendHistory?: DividendHistoryProps[];
  content?: string;
};

type PostArrProps = {
  image?: ImageType;
  text?: string | "";
  date?: string | "";
  month?: string | "";
  year?: string | "";
  contact?: string | "";
};

type MembersProps = {
  heading?: string | "";
  text?: string | "";
  membersArabic?: ManagementProps[];
};

type ExecutiveProps = {
  heading?: string | "";
  text?: string | "";
  executiveArabic?: ManagementProps[];
};

type DividendHistoryProps = {
  heading?: string | "";
  year?: string | "";
  value?: string | "";
};

type ManagementProps = {
  heading?: string | "";
  text?: string | "";
};
interface CGIRProps {
  cgirPages?: CGIRPagesProps[];
  sideBarBgcolor?: string | "";
  contentBgcolor?: string | "";
  title?: string | "";
  tabName?: string | "";
  dividends?: any;
  posts?: any;
  loading?: boolean;
  setLoading?: Function;
}

const CGIR: FC<CGIRProps> = ({
  cgirPages,
  sideBarBgcolor,
  contentBgcolor,
  posts,
  tabName,
  dividends,
  loading,
  setLoading,
}) => {
  const { appState } = useContext(AppContext);
  const { push } = useRouter() || { push: () => {} };
  const { t } = useTranslation("common");
  const router = useRouter();
  useEffect(() => {
    getSelectedComp(tabName);
  }, [appState?.lang, tabName]);

  const getSelectedComp = (name: string) => {
    switch (name?.trim()) {
      case "Fact Sheet":
        return <FactSheet currentObject={cgirPages} />;
      case "بيان حقائق":
        return <FactSheet currentObject={cgirPages} />;
      case "Announcements":
        return <Announcements currentObject={cgirPages} />;
      case "الإعلانات":
        return <Announcements currentObject={cgirPages} />;
      case "Financial Calendar":
        return <FinancialCalender currentObject={cgirPages} />;
      case "التقويم المالي":
        return <FinancialCalender currentObject={cgirPages} />;
      case "Email Subscription Center":
        return <EmailSubscription currentObject={cgirPages} />;
      case "اشتراك النشرة البريدية":
        return <EmailSubscription currentObject={cgirPages} />;
      case "Stock Information":
        return <StockInformation currentObject={cgirPages} tabName={tabName} />;
      case "بيانات الأسهم":
        return <StockInformation currentObject={cgirPages} tabName={tabName} />;
      case "Financial Information":
        return (
          <FinancialInformation currentObject={cgirPages} tabName={tabName} />
        );
      case "البيانات المالية":
        return (
          <FinancialInformation currentObject={cgirPages} tabName={tabName} />
        );
      case "Corporate Governance":
        return (
          <CorporateGovernance currentObject={cgirPages} tabName={tabName} />
        );
      case "حوكمة الشركة":
        return (
          <CorporateGovernance currentObject={cgirPages} tabName={tabName} />
        );
      case "Prospectus":
        return <Prospectus currentObject={cgirPages} />;
      case "نشرات الإصدار":
        return <Prospectus currentObject={cgirPages} />;
      case "Dividends":
        return <Dividends currentObject={dividends} />;
      case "الأرباح":
        return <Dividends currentObject={dividends} />;
      case "Contact IR":
        return <ContactIR currentObject={cgirPages} />;
      case "التواصل مع علاقات المستثمرين":
        return <ContactIR currentObject={cgirPages} />;
      case "IR Home Page":
        return <IRHomePage currentObject={cgirPages} />;
      case "الصفحة الرئيسية لعلاقات المستثمرين":
        return <IRHomePage currentObject={cgirPages} />;
      case "In Press":
        return <InPress currentObject={posts} />;
      case "في الصحافة":
        return <InPress currentObject={posts} />;

      default:
        break;
    }
  };

  const inPressStyle = tabName === "In Press" || tabName === "في الصحافة";

  return (
    <>
      {tabName ? (
        <div
          className={styles[inPressStyle ? "in-press" : "more-content-block"]}
        >
          {getSelectedComp(tabName)}
        </div>
      ) : null}

      <div className={styles["mobile-back-block"]}>
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

      {IframToolScript()}
    </>
  );
};
export default CGIR;
