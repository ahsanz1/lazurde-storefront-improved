/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import { BrPageContext } from "@bloomreach/react-sdk";
import Link from "next/link";
import { ImageSet } from "@bloomreach/spa-sdk";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";

type IconsType = {
  link?: string;
  width?: string | number;
  mobileWidth?: string | number;
  height?: string | number;
  mobileHeight?: string | number;
  icon?: {
    url?: string;
    altText?: string;
  };
};

type sizeType = {
  width?: string | number;
  mobileWidth?: string | number;
  height?: string | number;
  mobileHeight?: string | number;
};
interface IconsListProps {
  iconsList?: { image: string; imageLink: string; externalImageLink: string }[];
  className?: string;
  iconSize?: sizeType[];
  isFooterIcons?: boolean;
  role?: string;
}

const FooterIcons = ({
  iconsList,
  iconSize = [],
  className = "",
  isFooterIcons = false,
  role = "",
}: IconsListProps): JSX.Element => {
  const [size] = useWindowSize();
  const page = useContext(BrPageContext);
  const { appState } = useContext(AppContext);
  const findDate = new Date();
  const currentYear = findDate?.getFullYear();
  const { t } = useTranslation("common");
  return (
    <div className={styles["icons_wrapper"]}>
      <ul role={role} className={`${className} ${styles["icons__container"]}`}>
        {iconsList?.length > 0 &&
          iconsList.map((socialIcon, index) => {
            const { image, imageLink }: { image: any; imageLink: any } =
              socialIcon;

            if (!socialIcon) return null;

            const url =
              image &&
              page?.getContent<ImageSet>(image)?.getOriginal()?.getUrl();

            let link = "/";

            let hasExternalLink = false;

            if (socialIcon?.externalImageLink) {
              link = socialIcon?.externalImageLink;
              hasExternalLink = true;
            } else {
              link =
                (imageLink && page?.getContent(imageLink)?.getUrl()) || "/";
            }

            if (!url) return null;

            return (
              <li className="icons__item" key={index}>
                <>
                  {hasExternalLink ? (
                    <RenderImage
                      url={url}
                      isFooterIcons={isFooterIcons}
                      iconSize={iconSize}
                      size={size}
                      link={link}
                      index={index}
                    />
                  ) : (
                    <Link href={link || "/"} passHref>
                      <RenderImage
                        url={url}
                        isFooterIcons={isFooterIcons}
                        iconSize={iconSize}
                        size={size}
                        index={index}
                      />
                    </Link>
                  )}
                </>
              </li>
            );
          })}
      </ul>
      <div>
        {isFooterIcons ? (
          <div className={styles["copy-rights"]}>
            &copy; {appState?.brand} {currentYear}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const RenderImage = ({
  url,
  isFooterIcons,
  iconSize,
  size,
  index,
  link = "/",
}: any) => {
  return (
    <a
      data-testid="footer-icon"
      role={"icons"}
      href={link}
      target="_blank"
      className={styles[`${isFooterIcons ? "footer-payment-icon" : ""}`]}
    >
      {url ? (
        <>
          {/* <Image
          className={styles["icons__custom-img-style"]}
          src={url || "/"}
          alt={"icon"}
          width={
            !isFooterIcons
              ? 20
              : size > desktopScreenSize
              ? iconSize[index]?.width || 75
              : iconSize[index]?.mobileWidth || 75
          }
          height={isFooterIcons ? (size > desktopScreenSize ? 24 : 20) : 20}
          layout="fixed"
          /> */}
          <Image
            src={url}
            alt={"icon"}
            width={
              size < desktopScreenSize
                ? iconSize[index]?.mobileWidth
                : iconSize[index]?.width || 75
            }
            height={0}
            layout={"intrinsic"}
          />
        </>
      ) : null}
    </a>
  );
};

export default FooterIcons;
