import React, { FC, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./content-block.module.scss";
import { AppContext } from "lib/context";
import { IframeScript, IframToolScript } from "../iframe-script";
import { BrPageContext } from "@bloomreach/react-sdk";
import { useRouter } from "next/router";
import Spinner from "../ui/spinner";
import useTranslation from "next-translate/useTranslation";
import Heading from "../ui/heading";
import { isDev } from "general-config";
interface ContentBlockProps {
  content?: any;
  className?: string;
  isHelpCenterPage?: boolean;
  setLoading?: Function;
  loading?: boolean;
  isCgirPage?: boolean;
  contentArr?: any;
}

const ContentBlock: FC<ContentBlockProps> = ({
  content = {},
  className = "",
  isHelpCenterPage = false,
  setLoading,
  loading = false,
  isCgirPage = false,
  contentArr,
}) => {
  const { appState } = useContext(AppContext);
  const refId = "euroland_frame_id_cb";
  const router = useRouter();
  const { t } = useTranslation("common");
  const page: any = useContext(BrPageContext);
  const currentPath: any = router?.query?.help_centre_page_url;

  return (
    <>
      <div className={`${styles["content-container"]} ${styles[className]}`}>
        {contentArr && (
          <>
            {" "}
            <div className={styles["image"]}>
              <Image
                src={contentArr?.iconLink}
                alt={contentArr?.iconLink || ""}
                width={20}
                height={20}
                quality={100}
                // // unoptimized={isDev}
              />
            </div>
            <h2 className={styles["heading"]}>
              {contentArr?.tabContent?.title}
            </h2>
            <div className={styles["content"]}>
              {contentArr?.tabContent?.text}
            </div>
          </>
        )}
        {/* {contentArr?.length > 0 &&
          contentArr?.map((object: any) => {
            const { contentWithLinks, iconLink, imcgirData, tabContent, link } =
              object;
            console.log(
              currentPath,
              tabContent?.title?.replace(/\s+/g, "-").toLowerCase()
            );
            if (
              content?.tabContent === tabContent ||
              currentPath ==
                tabContent?.title?.replace(/\s+/g, "-").toLowerCase()
            ) {
              return (
                <>
                  {iconLink && (
                    <div className={styles["image"]}>
                      <Image
                        src={iconLink}
                        alt={iconLink || ""}
                        width={20}
                        height={20}
                      />
                    </div>
                  )}
                  {tabContent?.title && (
                    <div className={styles["heading"]}>{tabContent?.title}</div>
                  )}

                  {tabContent?.text && (
                    <div className={styles["content"]}>{tabContent?.text}</div>
                  )}
                </>
              );
            }
          })} */}

        {!isHelpCenterPage && !currentPath ? (
          <>
            {!content?.cgirData ? (
              <>
                {content?.objectData?.name ||
                (content?.tabContent &&
                  (content?.icon?.imgUrl?.imgUrl ||
                    content?.objectData?.imageLink)) ? (
                  <>
                    <div className={styles["image"]}>
                      <Image
                        src={
                          content?.icon?.imgUrl?.imgUrl ||
                          content?.objectData?.imageLink?.imgUrl
                        }
                        alt={content?.icon?.altText || "Icon"}
                        width={20}
                        height={20}
                        quality={100}
                        // // unoptimized={isDev}
                      />
                    </div>
                    {content?.tabContent?.externalTextLink && (
                      <>
                        <Heading element="h2" className={styles["heading"]}>
                          {content?.objectData?.contentWithLinks?.text ||
                            content?.tabContent?.text}
                        </Heading>
                        <iframe
                          id={refId}
                          className="EurolandTool"
                          src={content?.tabContent?.externalTextLink}
                          style={{
                            width: "100%",
                            height: "14px",
                          }}
                          frameBorder="0"
                          scrolling="no"
                        >
                          <br />
                        </iframe>
                      </>
                    )}
                  </>
                ) : null}
              </>
            ) : null}

            {router?.pathname == "/lazurde-policies" && (
              <>
                <Heading element="h2" className={styles["heading"]}>
                  {content?.name}
                </Heading>
                <>
                  <p
                    className={styles["content"]}
                    dangerouslySetInnerHTML={{
                      __html: content?.tabContent,
                    }}
                  ></p>
                </>
              </>
            )}

            {content?.ancillaryData?.length > 0 &&
              content?.ancillaryData?.map((object: any) => {
                const { contentWithLinks, cgirData } = object;
                const findIcon = cgirData?.imageLink;

                if (content?.tabContent == contentWithLinks?.text) {
                  return (
                    findIcon &&
                    findIcon?.map((icon: string) => {
                      const getIconRef = icon && page?.getContent(icon);
                      const iconLink =
                        getIconRef && getIconRef?.getOriginal()?.getUrl();
                      return (
                        <>
                          {iconLink && (
                            <div className={styles["image"]}>
                              <Image
                                src={iconLink}
                                alt={iconLink || ""}
                                width={20}
                                height={20}
                                quality={100}
                                // // unoptimized={isDev}
                              />
                            </div>
                          )}
                          {contentWithLinks?.text && (
                            <div className={styles["heading"]}>
                              {contentWithLinks?.text}
                            </div>
                          )}

                          <iframe
                            id={refId}
                            className="EurolandTool"
                            src={contentWithLinks?.externalTextLink}
                            style={{
                              width: "100%",
                              height: "20px",
                            }}
                            frameBorder="0"
                            scrolling="no"
                          >
                            <br />
                          </iframe>
                        </>
                      );
                    })
                  );
                }
              })}
          </>
        ) : (
          <>
            {content?.ancillaryData?.length > 0 &&
              content?.ancillaryData?.map((object: any) => {
                const { tabContent, imgLink, iconLink } = object;
                const getIcon = page?.getContent(imgLink);
                const getIconUrl = getIcon && getIcon?.getOriginal()?.getUrl();
                if (
                  currentPath ==
                  tabContent?.title?.replace(/\s+/g, "-").toLowerCase()
                ) {
                  return (
                    <>
                      {(content?.icon?.url || iconLink) && (
                        <div className={styles["image"]}>
                          <Image
                            src={content?.icon?.url || iconLink}
                            alt={content?.icon?.altText}
                            width={20}
                            height={20}
                            quality={100}
                            // // unoptimized={isDev}
                          />
                        </div>
                      )}
                      <Heading element="h2" className={styles["heading"]}>
                        {tabContent?.title || content?.name}
                      </Heading>

                      <p
                        className={styles["content"]}
                        dangerouslySetInnerHTML={{
                          __html: tabContent?.text || content?.content,
                        }}
                      ></p>
                    </>
                  );
                }
              })}
          </>
        )}

        <>
          {IframToolScript()}
          {IframeScript(refId)}
        </>
      </div>
      {isCgirPage || isHelpCenterPage ? null : (
        <div className={styles["mobile-back-block"]}>
          <button
            className={styles["button"]}
            onClick={() => {
              setLoading && setLoading(true);
              router.push("/contact-us");
            }}
          >
            {loading ? (
              <Spinner width={12} height={12} stroke={6} color={"white"} />
            ) : (
              <Image
                src={"/question.png"}
                width={20}
                height={20}
                alt=""
                quality={100}
                // // unoptimized={isDev}
              />
            )}
            <p>{t("haveAQuestion")}</p>
          </button>
        </div>
      )}
    </>
  );
};
export default ContentBlock;
