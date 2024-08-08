import React, { FC, useContext, useState, useEffect } from "react";
import { AppContext } from "lib/context";
import { ImageType } from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Image from "next/image";
import styles from "../cgir.module.scss";
import InfoSelector from "components/common/info-selector";
import Accordion from "components/common/ui/accordion/Accordion";
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

type CorporateGovernanceType = {
  currentObject?: any;
  tabName?: string;
};

const CorporateGovernance: FC<CorporateGovernanceType> = ({
  currentObject,
  tabName = "",
}): JSX.Element => {
  const [size] = useWindowSize();
  const [selectedValue, setSelectedValue] = useState(
    currentObject?.dropdownSection?.[0]?.dropDownValue
  );
  const page: any = useContext(BrPageContext);

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  let membersData = false

  if (selectedValue === "Board Member" || selectedValue === "مجلس الإدارة") {
    membersData = true
  }


  return (
    <>
      <InfoSelector
        className={styles["info-selector-dropdown"]}
        setValue={setSelectedValue}
        currentObject={currentObject}
        tabName={tabName}
      />

      {size < desktopScreenSize &&
        (selectedValue === "Board Member" ||
          selectedValue === "Executive Management") && (
          <div className={styles["option-text"]}>
            <p
              dangerouslySetInnerHTML={{
                __html: currentObject?.sectionContent?.content?.value,
              }}
            ></p>
          </div>
        )}

      {currentObject?.dropdownSection.map((data: any) => {
        const { contentWithLinks, accordionSection, dropDownValue } = data;

        if (dropDownValue === selectedValue) {
          return accordionSection?.length > 0 ? (
            accordionSection?.length > 0 &&
            accordionSection?.map((accordion: any, index: number) => {
              const { title, content } = accordion;
              return (
                <Accordion
                  key={index}
                  className={"accordion-detail"}
                  heading={title}
                  arrowDown={true}
                  contentClassName={"accordion-text"}
                  disabled={membersData ? true : false}
                >
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content?.value,
                      }}
                    ></p>
                  </div>
                </Accordion>
              );
            })
          ) : (
            <div className={styles["images-wrapper"]}>
              {contentWithLinks?.length > 0 &&
                contentWithLinks
                  .slice()
                  .sort((a: any, b: any) => a.sortNo - b.sortNo)
                  .map((content: any, index: number) => {
                    const {
                      text,
                      image,
                      externalImageLink,
                      externalTextLink,
                      sortNo,
                    } = content;
                    return (
                      <React.Fragment key={index}>
                        <div
                          key={sortNo}
                          role="qfs-pdf"
                          className={styles["image-block"]}
                        >
                          <a
                            href={externalImageLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              width: size > desktopScreenSize ? "100%" : 150,
                            }}
                          >
                            {image?.imgUrl && (
                              <Image
                                alt=""
                                src={image?.imgUrl || ""}
                                width={size > desktopScreenSize ? 190 : 150}
                                height={size > desktopScreenSize ? 256 : 195.21}
                                layout="responsive"
                              />
                            )}
                          </a>
                          <span>{text}</span>
                        </div>
                      </React.Fragment>
                    );
                  })}
            </div>
          );
        }
      })}
    </>
  );
};

export default CorporateGovernance;
