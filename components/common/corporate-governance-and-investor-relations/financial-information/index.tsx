import React, { FC, useContext, useState, useEffect, useRef } from "react";
import { ImageType } from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Image from "next/image";
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

type FinancialInformationType = {
  currentObject?: any;
  intState?: string;
  inStateArabic?: string;
  tabName?: string;
};

const FinancialInformation: FC<FinancialInformationType> = ({
  currentObject,
  tabName = "",
}): JSX.Element => {
  const [size] = useWindowSize();
  const [selectVal, setSelectVal] = useState(
    currentObject?.dropdownSection?.[0]?.dropDownValue
  );
  const scriptId = useRef(Math.random());
  const page: any = useContext(BrPageContext);
  useEffect(() => {
    setSelectVal(selectVal);
  }, [selectVal]);

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
        setValue={setSelectVal}
        currentObject={currentObject}
        tabName={tabName}
        scriptId={remScript()}
      />
      <div className={styles["images-wrapper"]}>
        {currentObject?.dropdownSection?.length > 0 &&
          currentObject?.dropdownSection?.map((obj: any) => {
            const { contentWithLinks, dropDownValue } = obj;
            if (dropDownValue === (selectVal || dropDownValue)) {
              contentWithLinks.sort((a: any, b: any) => {
                const yearA = parseInt(a.text.match(/\d{4}/)[0]);
                const yearB = parseInt(b.text.match(/\d{4}/)[0]);

                return yearB - yearA;
              });

              return (
                contentWithLinks &&
                contentWithLinks?.map((content: any, index: number) => {
                  const { text, image, externalImageLink } = content;

                  const findImageLink = image && page?.getContent(image);
                  const imageLink =
                    findImageLink && findImageLink?.getOriginal()?.getUrl();

                  return (
                    <>
                      {image || text ? (
                        <>
                          <React.Fragment key={index}>
                            <div
                              key={index}
                              role="qfs-pdf"
                              className={styles["image-block"]}
                            >
                              <a
                                href={externalImageLink}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  width:
                                    size > desktopScreenSize ? "100%" : 150,
                                }}
                              >
                                {image?.imgUrl && (
                                  <Image
                                    alt=""
                                    src={image?.imgUrl || ""}
                                    width={size > desktopScreenSize ? 190 : 150}
                                    height={
                                      size > desktopScreenSize ? 256 : 195.21
                                    }
                                    layout="responsive"
                                  />
                                )}
                              </a>
                              <span>{text}</span>
                            </div>
                          </React.Fragment>
                        </>
                      ) : null}
                    </>
                  );
                })
              );
            }
          })}
      </div>
      {selectVal && (
        <div className={styles["main-wrapper"]}>
          {currentObject?.dropdownSection?.length > 0 &&
            currentObject?.dropdownSection?.map((obj: any) => {
              const { contentWithLinks, dropDownValue } = obj;
              if (dropDownValue === selectVal) {
                return (
                  contentWithLinks &&
                  contentWithLinks?.map((content: any) => {
                    const { externalTextLink } = content;

                    return (
                      <>
                        {externalTextLink ? (
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
                        ) : null}
                      </>
                    );
                  })
                );
              }
            })}
        </div>
      )}
    </>
  );
};

export default FinancialInformation;
