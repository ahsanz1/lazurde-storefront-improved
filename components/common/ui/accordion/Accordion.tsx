/* eslint-disable react/no-unknown-property */
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Accordion.module.scss";
import { MinusIcon, PlusIcon, ChevronDown, ArrowDown } from "components/icons";
import { AppContext } from "lib/context";
import { Page } from "@bloomreach/spa-sdk";
import Spinner from "../spinner";
interface AccordionProps {
  className?: string;
  index?: number;
  heading?: string | JSX.Element;
  links?: { [key: string]: string }[] | [];
  isPlusMinusIcon?: boolean;
  children?: string | JSX.Element;
  arrowIcon?: Boolean;
  role?: string;
  arrowColor?: string;
  arrowDown?: Boolean;
  contentClassName?: string;
  headingClassName?: string;
  disabled?: boolean;
  page?: Page;
  parentLinks?: string;
}

const Accordion = ({
  className = "",
  index = 0,
  heading = "",
  links = [],
  children,
  arrowIcon = false,
  role = "",
  arrowColor,
  arrowDown = false,
  contentClassName = "",
  headingClassName = "",
  disabled = false,
  page,
  parentLinks = "",
}: AccordionProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  const [onClickLoading, setOnClickLoading] = useState(-1);
  useEffect(() => {
    disabled && setIsOpened(false);
  }, [disabled]);

  return (
    <div
      tabIndex={index}
      className={`${styles["wrapper"]} ${styles[className]}`}
      role={role}
    >
      <div
        className={`${styles["div-heading"]}`}
        onClick={() => {
          !disabled && setIsOpened(!isOpened);
        }}
      >
        <h2 className={`${headingClassName} ${styles["heading-text"]}`}>
          {parentLinks ? (
            <Link href={parentLinks || "/"}>
              <a className="c-link">{heading}</a>
            </Link>
          ) : (
            <>{heading}</>
          )}
        </h2>
        {className != "accordion-detail" && (
          <div className={`${styles["heading-icons"]}`} data-opened={isOpened}>
            {arrowDown ? (
              <div className={`${isOpened && styles["arrowDown-open"]}`}>
                <ArrowDown />
              </div>
            ) : arrowIcon ? (
              <div className={styles["angle-down"]}>
                <ChevronDown
                  color={arrowColor || "#ffffff"}
                  width="10px"
                  height="7px"
                />
              </div>
            ) : (
              <div className={`${styles["plus-icon"]}`}>
                {!isOpened ? <PlusIcon /> : <MinusIcon />}
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${styles["custom-content"]} ${styles[contentClassName]}`}
        data-opened={isOpened}
      >
        {children}
        {links && links.length > 0 && (
          <ul className={styles["menu__links"]}>
            {links.map((link, index) => {
              let url = "/";
              let hasExternalLink = false;

              if (link?.externalTextLink) {
                url = link?.externalTextLink;
                hasExternalLink = true;
              } else {
                url = page?.getContent(link?.textLink)?.getUrl();
              }
              return (
                <li
                  onClick={() => {
                    setOnClickLoading(index);
                  }}
                  key={index}
                >
                  {hasExternalLink ? (
                    <Link href={url || "/"} prefetch={false}>
                      <a className="c-opacity-60">
                        {index == onClickLoading ? (
                          <>
                            {link?.text} ...{" "}
                            <Spinner width={14} height={14} color="White" />
                          </>
                        ) : (
                          <>{link?.text}</>
                        )}
                      </a>
                    </Link>
                  ) : (
                    <Link href={url || "/"} prefetch={false}>
                      <a className="c-opacity-60">
                        {index == onClickLoading ? (
                          <>
                            {link?.text} ...{" "}
                            <Spinner width={14} height={14} color="White" />
                          </>
                        ) : (
                          <>{link?.text}</>
                        )}
                      </a>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Accordion;
