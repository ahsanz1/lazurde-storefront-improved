import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Label from "../ui/label";
import UspsMessageModal from "./usps-modal";
import { isDev } from "general-config";

const UspsSingle = ({
  imgSrc = "",
  label = "",
  infoIconUrl = "",
  modalHeading = "",
  modalText = {},
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles["sub-detail-point"]}>
        {imgSrc && (
          <Image
            src={imgSrc || "/"}
            width={20}
            height={20}
            layout="fixed"
            alt="usps-icon"
            quality={100}
            // unoptimized={isDev}
          />
        )}
        <p
          className={`${styles["label"]} clamp-fontsize`}
          dangerouslySetInnerHTML={{ __html: label }}
        ></p>
        <div className={styles["info-icon"]} onClick={() => setOpen(!open)}>
          {infoIconUrl && (
            <Image
              src={infoIconUrl || "/"}
              width={16.67}
              height={16.67}
              layout="fixed"
              alt="info"
              quality={100}
              // unoptimized={isDev}
            />
          )}
        </div>
      </div>
      <UspsMessageModal
        isOpen={open}
        setIsOpen={setOpen}
        heading={modalHeading}
        content={modalText}
      />
    </>
  );
};

export default UspsSingle;
