import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import Modal from "components/common/ui/modal";
import Image from "next/image";
import useWindowSize from "lib/utils/useWindowSize";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import MultipleProductsDetail from "../multiple-product-detail";
import SingleProductDetail from "../single-product-detail";
import Label from "components/common/ui/label";
import { socialiconsData, socialIconSize } from "lib/mock-data/data";
import { monthNames } from "lib/utils/common";
import SocialIconLinks from "../social-links";
import { ImageType } from "lib/types/common";
import NotifyMeForm from "components/common/notify-me-form";
import InstagramLoader from "components/common/ui/skeletons/instagram";

type postData = {
  id?: string | number;
  caption?: string;
  media_type?: string;
  media_url?: string;
  timestamp?: string;
  username?: string;
};

type iconsObjType = {
  link: string;
  icon: ImageType;
};
interface InstaPostModalProps {
  isOpen?: boolean;
  onClose?: Function;
  postData?: postData;
  isLoading?: boolean;
  multipleProducts?: any;
  socialLinks?: iconsObjType[];
}

const InstaPostModal = ({
  isOpen = false,
  onClose = () => {},
  postData = {},
  isLoading = false,
  multipleProducts = [],
  socialLinks = [],
}: InstaPostModalProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const date = new Date(postData?.timestamp);
  const dateFormate = (date: Date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const d = date?.getDate();
    return `${d} ${monthNames[month]} ${year}`;
  };

  return (
    <>
      <Modal
        modalBodyClassName={`${styles["insta-post-modal"]} ${
          notifyModalOpen ? styles["notify-modal"] : ""
        }`}
        modalWidth={notifyModalOpen ? "562px" : "927px"}
        modalHeight={notifyModalOpen ? "381px" : "703px"}
        isOpened={isOpen}
        onClose={() => {
          if (notifyModalOpen) {
            setNotifyModalOpen(false);
          } else {
            onClose && onClose();
          }
        }}
        bgBluryModal={true}
        divTopBar={styles["top-close-bar"]}
        divModalBody={
          isLoading
            ? styles["insta-modal-body"]
            : styles["insta-modal-body-wrapper"]
        }
        role="modal-close-btn"
      >
        <>
          {isLoading ? (
            <div className={styles.loader}>
              <InstagramLoader />
            </div>
          ) : (
            <div
              className={`${styles.intsa_modal_wrapper} ${
                multipleProducts?.length <= 0 ? styles.no_product : ""
              }`}
              data-open={notifyModalOpen ? false : true}
            >
              <div className={styles.left_side}>
                <Image
                  src={postData?.media_url || "/"}
                  alt={"instagram post image"}
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              {multipleProducts?.length > 0 ? (
                <div className={styles.right_side}>
                  {multipleProducts?.length > 1 ? (
                    <MultipleProductsDetail
                      multipleProducts={multipleProducts}
                    />
                  ) : (
                    <>
                      <SingleProductDetail
                        singleProductData={multipleProducts}
                        setNotifyModalOpen={setNotifyModalOpen}
                      />
                    </>
                  )}
                  <Label className={styles.tag_line} role="tag-line">{`${
                    appState?.brand
                  } // ${t("instagram")} // ${
                    date && dateFormate(date)
                  } `}</Label>
                  <div className={styles.social_icon}>
                    <SocialIconLinks
                      iconsList={
                        socialLinks?.length > 0 ? socialLinks : socialiconsData
                      }
                      iconSize={socialIconSize}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          )}
          {notifyModalOpen && <NotifyMeForm isOpened={notifyModalOpen} />}
        </>
      </Modal>
    </>
  );
};

export default InstaPostModal;
