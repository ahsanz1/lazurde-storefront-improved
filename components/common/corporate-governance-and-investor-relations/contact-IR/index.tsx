import React, { FC } from "react";
import { ImageType } from "lib/types/common";
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

type ContactIRType = {
  currentObject?: any;
};

const ContactIR: FC<ContactIRType> = ({ currentObject }): JSX.Element => {
  return (
    <>
      <div className={styles["text-wrapper"]}>
        <div className={styles["text-block"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: currentObject?.sectionContent?.content?.value,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default ContactIR;
