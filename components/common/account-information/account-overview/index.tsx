import React, { useContext } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { AppContext } from "lib/context/index";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";

const AccountOverView = () => {
  const [size] = useWindowSize();
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles["account-detail-section"]}>
        <div className={styles["account-image-section"]}>
          <div data-testid="heading" className={styles["account-image-text"]}>
            {t("welcome")}
          </div>
          <div className={styles["account-right"]}>
            <Image
              role="image"
              src={
                size > desktopScreenSize
                  ? accountImage?.desktopImg
                  : accountImage?.mobileImg
              }
              width={650}
              height={760}
              layout="responsive"
              alt="main-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountOverView;

export const accountImage = {
  desktopImg:
    "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/my-account_desktop.jpg",
  mobileImg:
    "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/new-3-by-3-images/lazurde/my-account/my-account_mobile-at-3x.jpg",
};
