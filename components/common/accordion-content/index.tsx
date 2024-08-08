import React, { FC } from "react";
import styles from "./style.module.scss";
import AccordionData from "./AccordionContent";

const AccordionContent: FC<any> = ({
  page,
  component,
  staticContent = null,
  externalStyles = {},
}): JSX.Element => {
  const findContent = component?.getContent(page);
  let getContent = null;
  if (!staticContent) {
    getContent = findContent && findContent?.textWithRichText;
  }
  if (staticContent) {
    getContent = staticContent;
  }

  return (
    <div className={styles["main-wrapper"]} style={{ ...externalStyles }}>
      {getContent?.map((data: any, index: number) => {
        return (
          <>
            <div
              className={styles["upper-border"]}
              dangerouslySetInnerHTML={{
                __html: data?.text?.value,
              }}
            ></div>
            {data?.text?.value && (
              <AccordionData
                key={index}
                className={"accordion-details"}
                contentClassName={"accordion-texts"}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.content?.value,
                  }}
                ></div>
              </AccordionData>
            )}
          </>
        );
      })}
    </div>
  );
};

export default AccordionContent;
