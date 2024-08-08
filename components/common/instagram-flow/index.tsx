import React, { useEffect, useState, useContext } from "react";
import { FacebookIcon, InstagramIcon } from "components/icons";
import Label from "components/common/ui/label";
import styles from "./style.module.scss";
import { fetchInstaData, fetchSinglePostInstaData } from "lib/api/instagram";
import InstagramSinglePost from "./insta-post";
import InstaPostModal from "./insta-post-modal";
import { fetchProduct } from "lib/utils/product";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import Heading from "../ui/heading";

const Instagram = ({
  heading = "",
  description = "",
  hashTags = "",
  instaFollowerText = "",
  facebookLikeText = "",
  arabicFacebookLikeText = "",
  arabicInstaFollowerText = "",
  instaSocialLinks = [],
  // authToken = "IGQVJWNXhQeWNodWFTV0FoX0ktWnQxVkU4NHR2WFBGd2Y1cnI3Y1JsNnhqVnNrcjR3YzNZAQm1tSGhlSGt2S1NVcUhKUU1XUXZAyVnJKcHlHYXdkLXVDZAl8yV2JqOUZAGNFloN3FuRGx3",
  dummyDataForUnitTest = [],
  component,
  page,
}: any): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const [instagramData, setInstagramData] = useState(dummyDataForUnitTest);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singlePostData, setSinglePostData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [multipleProducts, setMultipleProducts] = useState([]);
  const { appState } = useContext(AppContext);

  const findData = component?.getContent(page);
  const getHeading = findData?.heading;
  const getDescription = findData?.description;
  const fbBtnText = findData?.buttonText;
  const instaBtText = findData?.buttonTextOne;
  const instaHashTags = findData?.hashTag;
  const tokenAccess = findData?.token;

  useEffect(() => {
    fetchData();
  }, [tokenAccess]);

  const fetchData = async () => {
    const response = await fetchInstaData("id,caption,media_url", tokenAccess);
    response && setInstagramData(response?.data?.data);
  };

  const getSingleInstaPostData = async (postId: string | number) => {
    const response = await fetchSinglePostInstaData(
      postId,
      "id,caption,media_type,media_url,username,timestamp",
      tokenAccess
    );
    response && setSinglePostData(response?.data);
    const skus = response && response?.data?.caption?.split(",");
    skus && fetchProductData(skus);

    return response;
  };

  const fetchProductData = async (skus: []) => {
    setIsloading(true);
    setMultipleProducts([]);
    const promises = skus?.map((sku) =>
      fetchProduct(Number(sku), appState?.region)
    );
    try {
      const resp = await Promise.all(promises);
      const response = resp?.filter((response) => response);
      if (!response?.[0]?.isAxiosError && response?.length > 0) {
        setMultipleProducts(response);
      }
      setIsloading(false);
    } catch (error) {
      console.error("Error occurred while fetching product data:", error);
      setIsloading(false);
    }
  };

  return (
    <>
      <div className={styles.insta_wrapper}>
        <div className={styles.content}>
          <Heading element="h2" className={styles.heading} role="heading">
            {getHeading}
          </Heading>
          <Label className={styles.sub_heading} role="description">
            <>{getDescription}</>
          </Label>
          {instaHashTags?.map((tag: string, index: number) => {
            return (
              <span key={index} className={styles.hashtag}>
                #{tag}
              </span>
            );
          })}
        </div>
        <div className={styles.btns}>
          <button role="facebook-btn">
            <FacebookIcon />
            {facebookLikeText || fbBtnText}
          </button>
          <button role="insta-btn">
            <InstagramIcon />
            {instaFollowerText || instaBtText}
          </button>
        </div>
        <div className={styles.posts}>
          {instagramData &&
            instagramData?.length > 0 &&
            instagramData
              ?.slice(0, width > desktopScreenSize ? 9 : 8)
              .map((data: any, index: number) => {
                const { id, media_url, caption } = data;
                return (
                  <div
                    key={index}
                    className={`${styles[`insta-post-${index}`]} ${
                      styles["single-post"]
                    }`}
                    onClick={async () => {
                      if (id) {
                        await getSingleInstaPostData(id);
                        setIsModalOpen(true);
                        setMultipleProducts([]);
                      }
                    }}
                    role="insta-post"
                  >
                    <InstagramSinglePost src={media_url} />
                    <div className={styles["hover-content"]}>
                      <div className={styles.bg_color}></div>
                      <div className={styles.content}>
                        <Label
                          className={styles.title}
                          role="insta-hover-label"
                        >
                          {t("shopTheLook")}
                        </Label>
                        <InstagramIcon color="#fff" width="20" height="20" />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <InstaPostModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        postData={singlePostData}
        isLoading={isLoading}
        multipleProducts={multipleProducts}
        socialLinks={instaSocialLinks}
      />
    </>
  );
};
export default Instagram;
