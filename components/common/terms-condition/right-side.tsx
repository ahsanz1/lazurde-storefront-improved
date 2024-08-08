import React, { FC, useState, useContext, useEffect } from "react";
import ContentBlock from "../content-block";
import Image from "next/image";
import Label from "../ui/label";
import styles from "./term-condition.module.scss";
import Accordion from "components/common/ui/accordion/Accordion";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Spinner from "../ui/spinner";
import CGIR from "../corporate-governance-and-investor-relations";

const RightSide = ({
  currentObj = {},
  contentBgcolor = "",
  isHelpCenterPage = false,
  title,
  setLoading,
  loading,
  breadcrumbs,
  isCgirPage = false,
  currentArr,
}: any) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const currentPath = router?.query?.help_centre_page_url;
  return (
    <>
      <div
        className={styles["term-right"]}
        style={{ backgroundColor: contentBgcolor }}
      >
        <ContentBlock
          className={"terms-conditions"}
          key={Math.random()}
          content={currentObj}
          contentArr={currentArr}
          isHelpCenterPage={isHelpCenterPage}
          setLoading={setLoading}
          loading={loading}
          isCgirPage={isCgirPage}
        />
      </div>
      {currentObj?.objectData?.cgirData ? (
        <div className={styles["term-rights"]}>
          <div className={styles["text-wrapper"]}>
            <p
              className={styles["text-block"]}
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html:
                  currentObj?.objectData?.cgirData?.sectionContent?.content
                    ?.value,
              }}
            ></p>
          </div>

          <div className={styles["iframe-wrapper"]}>
            <iframe
              id={"euroland_frame_id"}
              title="Euroland Homepage iFrame"
              className="EurolandTool"
              src={currentObj?.objectData?.cgirData?.linkExternal}
              style={{
                width: "100%",
                height: "350px",
              }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          {isCgirPage ? (
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
          ) : null}
        </div>
      ) : (
        <>
          {currentObj?.ancillaryData?.length > 0 && (
            <div className={styles["term-rights"]}>
              {currentObj?.ancillaryData?.length > 0 && (
                <div className={styles["accordion-block"]}>
                  {currentObj?.ancillaryData?.map(
                    (object: any, index: number) => {
                      const {
                        accordionData = [],
                        tabContent,
                        cgirData,
                        contentWithLinks,
                        dividends,
                        postContent,
                      } = object || {};
                      if (
                        cgirData &&
                        currentObj?.tabContent == contentWithLinks?.text
                      ) {
                        return (
                          <CGIR
                            key={index}
                            tabName={currentObj?.tabContent || currentObj?.name}
                            cgirPages={cgirData}
                            dividends={dividends}
                            posts={postContent}
                            loading={loading}
                            setLoading={setLoading}
                          />
                        );
                      }
                      if (
                        currentPath ==
                        tabContent?.title?.replace(/\s+/g, "-").toLowerCase()
                      ) {
                        return (
                          <>
                            {accordionData &&
                              accordionData?.length > 0 &&
                              accordionData?.map(
                                (accordianObj: any, index: number) => {
                                  const { title, content } = accordianObj;

                                  if (!title || !content?.value) return;

                                  return (
                                    <Accordion
                                      key={index}
                                      className={"accordion-help"}
                                      heading={title}
                                      arrowDown={true}
                                    >
                                      <p
                                        key={Math.random()}
                                        dangerouslySetInnerHTML={{
                                          __html: content?.value,
                                        }}
                                      ></p>
                                    </Accordion>
                                  );
                                }
                              )}
                            {isHelpCenterPage ? (
                              <div className={styles["mobile-back-block"]}>
                                <button
                                  className={styles["button"]}
                                  onClick={() => {
                                    setLoading(true);
                                    router.push("/contact-us");
                                  }}
                                >
                                  {loading ? (
                                    <Spinner
                                      width={12}
                                      height={12}
                                      stroke={6}
                                      color={"white"}
                                    />
                                  ) : (
                                    <Image
                                      src={"/question.png"}
                                      width={20}
                                      height={20}
                                      alt=""
                                    />
                                  )}
                                  <p>{t("haveAQuestion")}</p>
                                </button>
                              </div>
                            ) : null}
                          </>
                        );
                      }
                    }
                  )}
                </div>
              )}
            </div>
          )}
          {currentArr?.length > 0 && (
            <div className={styles["term-rights"]}>
              {currentArr?.length > 0 && (
                <div className={styles["accordion-block"]}>
                  {currentArr?.map((object: any, index: number) => {
                    const {
                      accordionData = [],
                      tabContent,
                      cgirData,
                      contentWithLinks,
                      dividends,
                      postContent,
                    } = object || {};
                    if (
                      cgirData &&
                      currentObj?.tabContent == contentWithLinks?.text
                    ) {
                      return (
                        <CGIR
                          key={index}
                          tabName={currentObj?.tabContent || currentObj?.name}
                          cgirPages={cgirData}
                          dividends={dividends}
                          posts={postContent}
                          loading={loading}
                          setLoading={setLoading}
                        />
                      );
                    }
                    if (
                      currentPath ==
                      tabContent?.title?.replace(/\s+/g, "-").toLowerCase()
                    ) {
                      return (
                        <>
                          {accordionData &&
                            accordionData?.length > 0 &&
                            accordionData?.map(
                              (accordianObj: any, index: number) => {
                                const { title, content } = accordianObj;

                                if (!title || !content?.value) return;

                                return (
                                  <Accordion
                                    key={index}
                                    className={"accordion-help"}
                                    heading={title}
                                    arrowDown={true}
                                  >
                                    <p
                                      key={Math.random()}
                                      dangerouslySetInnerHTML={{
                                        __html: content?.value,
                                      }}
                                    ></p>
                                  </Accordion>
                                );
                              }
                            )}
                          {isHelpCenterPage ? (
                            <div className={styles["mobile-back-block"]}>
                              <button
                                className={styles["button"]}
                                onClick={() => {
                                  setLoading(true);
                                  router.push("/contact-us");
                                }}
                              >
                                {loading ? (
                                  <Spinner
                                    width={12}
                                    height={12}
                                    stroke={6}
                                    color={"white"}
                                  />
                                ) : (
                                  <Image
                                    src={"/question.png"}
                                    width={20}
                                    height={20}
                                    alt=""
                                  />
                                )}
                                <p>{t("haveAQuestion")}</p>
                              </button>
                            </div>
                          ) : null}
                        </>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          )}
          {
            <div className={styles["term-rights"]}>
              <div className={styles["accordion-block"]}>
                {currentArr?.accordionData &&
                  currentArr?.accordionData?.length > 0 &&
                  currentArr?.accordionData?.map(
                    (accordianObj: any, index: number) => {
                      const { title, content } = accordianObj;

                      if (!title || !content?.value) return;

                      return (
                        <Accordion
                          key={index}
                          className={"accordion-help"}
                          heading={title}
                          arrowDown={true}
                        >
                          <p
                            key={Math.random()}
                            dangerouslySetInnerHTML={{
                              __html: content?.value,
                            }}
                          ></p>
                        </Accordion>
                      );
                    }
                  )}
              </div>
            </div>
          }
        </>
      )}
    </>
  );
};

export default RightSide;
