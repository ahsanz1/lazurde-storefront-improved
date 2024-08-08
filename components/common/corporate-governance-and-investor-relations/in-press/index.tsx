import React, { FC } from "react";
import useWindowSize from "lib/utils/useWindowSize";
import PostCard from "components/common/post-card";
import { desktopScreenSize } from "lib/utils/common";
import { ImageType } from "lib/types/common";
import styles from "../cgir.module.scss";
import ArchiveData from "components/common/post-card/archive";

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

type InPressType = {
  currentObject?: any;
};

const InPress: FC<InPressType> = ({ currentObject }): JSX.Element => {
  const [size] = useWindowSize();

  return (
    <>
      <div
        className={styles["text-wrapper"]}
        style={{ backgroundColor: "#fff" }}
      >
        {currentObject?.length > 0 && (
          <>
            <div className={styles["text-block"]}>
              <PostCard post={currentObject} />
            </div>
          </>
        )}
      </div>
      {size > desktopScreenSize ? (
        <div
          className={styles["page-right-second-one"]}
          style={{ backgroundColor: "#fff" }}
        >
          <div className={styles["text-wrapper"]}>
            {currentObject?.length > 0 && (
              <>
                <ArchiveData post={currentObject} />
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InPress;
