import React, { FC, useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "lib/context";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { ImageType } from "lib/types/common";
import Script from "next/script";
import styles from "../cgir.module.scss";
import InfoSelector from "components/common/info-selector";
import { BrPageContext } from "@bloomreach/react-sdk";

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

type StockInformationType = {
  currentObject?: any;
  tabName?: string | "";
};

const StockInformation: FC<StockInformationType> = ({
  currentObject,
  tabName,
}): JSX.Element => {
  const [selectedVal, setSelectedVal] = useState(
    currentObject?.dropdownSection?.[0]?.dropDownValue
  );
  const scriptId = useRef(Math.random());
  const page: any = useContext(BrPageContext);

  useEffect(() => {
    setSelectedVal(selectedVal);
  }, [selectedVal]);

  const remScript = () => {
    return () => {
      const scripts = document.querySelectorAll("script");
      const arr = Array.from(scripts);
      const script = arr.find((a) => a.id == scriptId.current.toString());
      script && script.parentNode.removeChild(script);
      scriptId.current = Math.random();
    };
  };

  return (
    <>
      <InfoSelector
        className={styles["info-selector-dropdown"]}
        setValue={setSelectedVal}
        currentObject={currentObject}
        scriptId={remScript()}
        tabName={tabName}
      />

      <div className={styles["main-wrapper"]}>
        {currentObject?.dropdownSection?.length > 0 &&
          currentObject?.dropdownSection?.map((obj: any) => {
            const { contentWithLinks, dropDownValue } = obj;

            if (dropDownValue === (selectedVal || dropDownValue)) {
              return (
                contentWithLinks &&
                contentWithLinks?.map((content: any) => {
                  const { externalTextLink } = content;

                  return (
                    <>
                      <React.Fragment>
                        <iframe
                          role="annual-iframe"
                          id="euroland_frame_id"
                          className="EurolandTool"
                          src={externalTextLink}
                          style={{
                            width: "100%",
                            height: "500",
                          }}
                          frameBorder="0"
                          scrolling="no"
                        ></iframe>
                        <Script
                          id={scriptId.current.toString()}
                          strategy="lazyOnload"
                          type="text/javascript"
                        >
                          {`EurolandToolIntegrationObject.set('euroland_frame_id')`}
                        </Script>
                      </React.Fragment>
                    </>
                  );
                })
              );
            }
          })}
      </div>
    </>
  );
};

export default StockInformation;
