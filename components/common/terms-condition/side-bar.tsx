import React, { useContext, useEffect, useState } from "react";
import styles from "./term-condition.module.scss";
import Image from "next/image";
import Label from "../ui/label";
import { useRouter } from "next/router";
import { BrPageContext } from "@bloomreach/react-sdk";
import Spinner from "../ui/spinner";

const SideBarButtons = ({
  currentArr = [],
  policySidebar,
  setShowPolicies = () => { },
  isHelpCenterPage = false,
  isCgirPage = false,
  setTabObj = () => { },
}: any) => {
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState(-1)
  
  let policyContentArray: any = [];
  const page: any = useContext(BrPageContext);
  useEffect(() => {
    const getPolicyIcon = currentArr?.[0]?.objectData?.imageLink;
    const cgirIcon = currentArr?.[0]?.cgirData?.imageLink?.[0];
    setTabObj({
      objectData: currentArr?.[0],
      ancillaryData: [],
      tabContent:
        currentArr?.[0]?.titleContent?.content?.value ||
        (isHelpCenterPage ? currentArr : currentArr?.[0]?.tabContent) ||
        currentArr?.[0]?.contentWithLinks,
      name:
        currentArr?.[0]?.titleContent?.title ||
        currentArr?.[0]?.contentWithLinks?.text,
      icon: { imgUrl: getPolicyIcon || cgirIcon },
    });
  }, [router?.pathname]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOnClickLoading(-1);
    });
  }, [router.events]);

  return (
    <>
      {currentArr &&
        currentArr?.length > 0 &&
        currentArr?.map((obj: any, index: number) => {
          const {
            accordionData,
            imgLink,
            iconLink,
            tabContent,
            titleContent,
            imageLink,
            link,
            contentWithLinks,
            cgirData,
          } = obj;
          policyContentArray.push(contentWithLinks ? obj : titleContent);
          // const getPageLink = link && page?.getContent(link);
          // const pageLink = getPageLink && getPageLink?.getUrl();
          const getCgirIcon = cgirData && cgirData?.imageLink?.[0];
          return (
            <>
              <div
                className={styles["term-block"]}
                key={index}
                onClick={async () => {
                  setOnClickLoading(index)
                  if (isHelpCenterPage && accordionData?.length > 0 && link) {
                    titleContent &&
                      policySidebar &&
                      policySidebar(titleContent?.title);
                    await router.push(`${link}`);
                  }

                  if (isHelpCenterPage === false) {
                    link?.url
                      ? router.push(link?.url)
                      : setTabObj({
                        objectData: {},
                        ancillaryData: accordionData || policyContentArray,
                        tabContent:
                          titleContent?.content?.value ||
                          contentWithLinks?.text,
                        name: titleContent?.title || contentWithLinks?.text,
                        icon: {
                          imgUrl: imageLink || getCgirIcon || iconLink,
                        },
                      });
                  } else {
                    setTabObj({
                      objectData: {},
                      ancillaryData: accordionData || policyContentArray,
                      tabContent: tabContent,
                      name: titleContent?.title || contentWithLinks?.text,
                      icon: {
                        imgUrl: imageLink || getCgirIcon || iconLink,
                      },
                    });
                  }
                  setShowPolicies(false);
                }}
              >
                {imageLink?.imgUrl || iconLink ? (
                  <div className={styles["term-image"]}>

                    {index == onClickLoading && isHelpCenterPage ? <Spinner /> : <Image
                      src={imageLink?.imgUrl || iconLink}
                      alt={imageLink?.altText || ""}
                      width={40}
                      height={40}
                    />}
                  </div>
                ) : (
                  <>
                    {cgirData?.imageLink?.map((img: any) => {
                      const getIconCGIR = img && page?.getContent(img);
                      const getIconUrlCGIR =
                        getIconCGIR && getIconCGIR?.getOriginal()?.getUrl();
                      return (
                        <>
                          <div className={styles["term-image"]}>
                            <Image
                              src={img?.imgUrl || "/"}
                              alt={img?.altText || ""}
                              width={40}
                              height={40}
                            />
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {contentWithLinks?.text ? (
                  <Label>{contentWithLinks?.text}</Label>
                ) : isHelpCenterPage && tabContent ? (
                  <Label>{tabContent?.title}</Label>
                ) : (
                  <Label>{titleContent?.title}</Label>
                )}
              </div>
            </>
          );
        })}
    </>
  );
};

export default SideBarButtons;
