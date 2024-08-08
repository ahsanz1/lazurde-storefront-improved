/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";

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
};
interface IconsListProps {
  iconsList?: IconsType[];
  className?: string;
  iconSize?: sizeType[];
  role?: string;
}

const SocialIconLinks = ({
  iconsList = [],
  iconSize = [],
  className = "",
  role = "",
}: IconsListProps): JSX.Element => {
  const [size] = useWindowSize();
  return (
    <>
      <ul role={role} className={`${className} ${styles["icons-container"]}`}>
        {iconsList?.length > 0 &&
          iconsList.map((socialIcon, index) => {
            const { link, icon, width, mobileWidth, height, mobileHeight } =
              socialIcon;
            return (
              <li className="icons__item" key={index}>
                <Link href={link}>
                  <a role={"icons"}>
                    <Image
                      className={styles["icons__custom-img-style"]}
                      src={icon?.url || "/"}
                      alt={icon?.altText || "icon"}
                      width={20}
                      height={18}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SocialIconLinks;
