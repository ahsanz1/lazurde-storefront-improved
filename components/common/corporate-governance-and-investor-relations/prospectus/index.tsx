import React, { FC } from "react";
import { ImageType } from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Image from "next/image";
import styles from "../cgir.module.scss";

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

type ProspectusType = {
  currentObject?: any;
};
const Prospectus: FC<ProspectusType> = ({ currentObject }): JSX.Element => {
  const [size] = useWindowSize();
  return (
    <>
      <div className={styles["images-wrapper"]}>
        {currentObject?.contentWithLinks?.length > 0 &&
          currentObject?.contentWithLinks?.map(
            (content: any, index: number) => {
              const { image, text, externalImageLink } = content;
              return (
                <div key={index} className={styles["image-block"]}>
                  <a href={externalImageLink} target="_blank" rel="noreferrer">
                    <Image
                      alt=""
                      src={image?.imgUrl}
                      width={size > desktopScreenSize ? 213 : 150}
                      height={size > desktopScreenSize ? 276 : 195}
                    />
                  </a>
                  <span>{text || "Image"}</span>
                </div>
              );
            }
          )}
      </div>
    </>
  );
};

export default Prospectus;
