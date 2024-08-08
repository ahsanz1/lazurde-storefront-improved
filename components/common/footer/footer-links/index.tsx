import React, { useContext, useState } from "react";
import Link from "next/link";
import Heading from "components/common/ui/heading";
import styles from "./style.module.scss";
import { Page } from "@bloomreach/spa-sdk";
import { useRouter } from "next/router";
import Spinner from "components/common/ui/spinner";

type LinksArrType = {
  text?: string;
  url?: string;
};
interface FooterLinkProps {
  heading?: string;
  parentLinks?: string;
  links?: {
    text: string;
    textLink: string;
    externalTextLink: string;
    newTab: boolean;
  }[];
  index?: number;
  role?: string;
  page?: Page;
  className?: string;
}

const FooterLinks = ({
  heading = "",
  links = [],
  parentLinks = "",
  index,
  role = "role",
  page,
  className,
}: FooterLinkProps): JSX.Element => {
  const router = useRouter();
  const [onClickLoading, setOnClickLoading] = useState(-1);
  if (onClickLoading !== -1) {
    setTimeout(() => {
      setOnClickLoading(-1)
    }, 5000);
  }
  if (typeof window == undefined) return;
  const baseUrl =
    typeof window !== "undefined" &&
    `${window?.location.origin}/${router?.locale}`;
  return (
    <div
      role={role}
      className={`${className} ${styles["menu__column"]}`}
      key={index}
    >
      <p className={styles["menu__heading"]}>
        {parentLinks ? (
          <Link href={parentLinks || "/"} prefetch={false}>
            <a className="c-link">{heading}</a>
          </Link>
        ) : (
          <p className={styles["menu__heading"]}>{heading}</p>
        )}
      </p>
      <ul className={styles["menu__links"]}>
        {links &&
          links.length > 0 &&
          links.map((link, index) => {
            let url = "/";
            let hasExternalLink = false;
            let openInNewTab = link?.newTab;

            if (link?.externalTextLink) {
              url = link?.externalTextLink;
              hasExternalLink = true;
            } else {
              url = page?.getContent(link?.textLink)?.getUrl();
            }
            const completeUrl = `${baseUrl}${url}`;

            return (
              <li
                onClick={() => {
                  setOnClickLoading(index);
                }}
                key={index}
              >
                {hasExternalLink ? (
                  <Link href={url || "/"} prefetch={false}>
                    <a
                      className="c-opacity-60"
                      target={openInNewTab && "_blank"}
                    >
                      {index == onClickLoading && !openInNewTab ? (
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
                  <Link href={completeUrl || "/"} prefetch={false}>
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
    </div>
  );
};

export default FooterLinks;
