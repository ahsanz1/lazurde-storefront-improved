import React, { FC, useState, useContext } from "react";
import Image from "next/image";
import { ImageType } from "lib/types/common";
import styles from "./style.module.scss";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";
import { BrPageContext } from "@bloomreach/react-sdk";
import { isDev } from "general-config";
interface PostProps {
  post?: PostArrType[];
}

type PostArrType = {
  image?: any;
  title?: string;
  date?: string;
  content?: any;
  introduction?: string;
};

const PostCard = ({ post = [] }: PostProps): JSX.Element => {
  const [size] = useWindowSize();
  const page: any = useContext(BrPageContext);
  return (
    <>
      <div className={styles["post-container"]}>
        {post?.map((data, index) => {
          const { image, date, introduction } = data;
          const getPostImage = image && page?.getContent(image);
          const getImageLink =
            getPostImage && getPostImage?.getOriginal()?.getUrl();

          const findDate = new Date(date);
          const getDate = findDate && findDate?.getDate();

          const getMonth = findDate && findDate?.getMonth() + 1;
          findDate.setMonth(getMonth - 1);
          const monthName = findDate.toLocaleString("default", {
            month: "short",
          });

          return (
            <>
              <div key={index} className={styles["post-wrapper"]}>
                <div className={styles["post-text"]}>
                  <p
                    key={Math.random()}
                    dangerouslySetInnerHTML={{
                      __html: introduction,
                    }}
                  ></p>
                </div>
                <div className={styles["date-box"]}>
                  <span className={styles["post-date"]}>
                    {("0" + getDate).slice(-2)}
                  </span>
                  <span className={styles["post-month"]}>{monthName}</span>
                </div>
                <div className={styles["post-img"]}>
                  {image?.imgUrl ? (
                    <Image
                      src={image?.imgUrl || ""}
                      layout={"responsive"}
                      width={100}
                      height={size > desktopScreenSize ? 66.5 : 73.5}
                      quality={100}
                      alt=""
                      // unoptimized={isDev}
                    />
                  ) : null}
                </div>
              </div>
            </>
          );
        })}
        {size < desktopScreenSize ? (
          <div className={styles["contact-info-inpress"]}>
            <p
              key={Math.random()}
              dangerouslySetInnerHTML={{
                __html: post?.[0]?.content?.value,
              }}
            ></p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PostCard;
