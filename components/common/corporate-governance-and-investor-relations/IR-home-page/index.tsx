import React, { FC, useRef, useEffect } from "react";
import { ImageType } from "lib/types/common";
import Script from "next/script";
import styles from "../cgir.module.scss";

type CurrentObjectType = {
  name?: string | "";
  content?: string | "";
  icon?: ImageType;
  width?: string | "";
  height?: string | "";
  moreContent?: MoreContentProps[];
  engName?: string;
  dividend?: DividendProps[];
  members?: MembersProps[];
  executive?: ExecutiveProps[];
  post?: PostArrProps[];
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

type HomeIRType = {
  currentObject?: CurrentObjectType;
};

const IRHomePage: FC<any> = ({ currentObject }): JSX.Element => {
  const refId = "euroland_frame_id";

  const scriptId = useRef(Math.random());
  useEffect(() => {
    return () => {
      const scripts = document.querySelectorAll("script");
      const arr = Array.from(scripts);
      const script = arr.find((a) => a.id == scriptId.current.toString());
      script && script.parentNode.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className={styles["text-wrapper"]}>
        <p
          key={Math.random()}
          dangerouslySetInnerHTML={{
            __html: currentObject?.sectionContent?.content?.value,
          }}
        ></p>
      </div>

      <div className={styles["iframe-wrapper"]}>
        <iframe
          id={refId}
          title="Euroland Homepage iFrame"
          className="EurolandTool"
          src={currentObject?.linkExternal}
          style={{
            width: "100%",
            height: "350px",
          }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      {
        <Script
          id={scriptId.current.toString()}
          strategy="lazyOnload"
          type="text/javascript"
        >
          {`EurolandToolIntegrationObject.set("${refId}")`}
        </Script>
      }
    </>
  );
};

export default IRHomePage;
