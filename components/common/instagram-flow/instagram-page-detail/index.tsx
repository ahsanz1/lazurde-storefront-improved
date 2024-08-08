import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";
import Image from "next/image";
import { InstagramIcon } from "components/icons";
import InstaPostModal from "components/common/instagram-flow/insta-post-modal";
import {
  getAccessToken,
  getLongLiveAccessToken,
  fetchInstaData,
  fetchSinglePostInstaData,
} from "lib/api/instagram";
import {
  INSTAGRAM_APP_ID,
  INSTAGRAM_APP_SECRET,
  REDIRECT_URI,
} from "general-config";
import useTranslation from "next-translate/useTranslation";

import { fetchMultipleProductsBySku } from "lib/utils/product";
import { AppContext } from "lib/context";

const destructureAttributes = (product: any) => {
  const obj: { [key: string]: string } = {};
  product?.attributes?.map((attr: any) => {
    obj[attr?.name] = attr?.value;
  });
  return { ...product, ...obj };
};

type pointersArray = {
  positionTop?: string;
  positionLeft?: string;
};

interface InstagramPageDetailProps {
  pointers?: pointersArray[];
  testerCode?: string;
  heading?: string;
}

const InstagramPageDetail = ({
  pointers = [],
  testerCode = "",
  heading = "",
}: InstagramPageDetailProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  // const testerCode =
  //   "AQA6-O1Ku8Y3WnIInIKZoRAn2WtS2tbf-dPV_cZd_8gGCx56ARBSEgyEqMkxlF6wCeojrWw7bOojf5WNLTTokbA22VrSgBQZnW-dAoGqlHX4f7lwTTP4vEARS37K2kJabAYO0yMIBsFk83x-SY5OZ0TIKd1uMajmrPGmvZh_XTOY7nkV7qDgy0a00rUvn1Rl1FCwwtBF_w3iAXdZmTNARnwNT6aS8QFWCrOlzz--SsqA4w";
  const [accessToken, setAccessToken] = useState<any>("");
  const [longLiveAccessToken, setLongLiveAccessToken] = useState<any>("");
  const [instagramData, setInstagramData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singlePostData, setSinglePostData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [multipleProducts, setMultipleProducts] = useState([]);
  const [multipleProductData, setMultipleProductData] = useState([]);
  const [isLongLiveTokenExpired, setIsLongLiveTokenExpired] = useState(false);

  const authToken =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("instagram_access_token")) ||
    "IGQVJYR3diSV9JT3NjR3ZABaERlU2J3MDd1ZAHh4MzE5Y0UyQ3ZAPd3Q3Mm5VTF9mblpxTG9kckstYS1sVW03LUl4UEVEVDMtZA1phRDNNOEJKYm94eW1GUWZAVT1pVSnp1bC1ZAdUlIVHFB";

  const getAllProductattributes = () => {
    let modifiedProdArray = [];
    for (let index = 0; index < multipleProducts.length; index++) {
      const currentArr = multipleProducts[index];
      modifiedProdArray.push(destructureAttributes(currentArr));
      setMultipleProductData(modifiedProdArray);
    }
  };

  useEffect(() => {
    getAllProductattributes();
  }, [multipleProducts]);

  useEffect(() => {
    fetchData();
    if (isLongLiveTokenExpired) {
      getAuthToken();
    }
  }, [isLongLiveTokenExpired]);

  const getAuthToken = async () => {
    let formData: any = new FormData();
    formData.append("client_id", INSTAGRAM_APP_ID);
    formData.append("client_secret", INSTAGRAM_APP_SECRET);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", REDIRECT_URI);
    formData.append("code", testerCode);
    const response = await getAccessToken(formData);
    response && setAccessToken(response?.data);
    response && getLongLiveAuthToken(response?.data);
  };

  const getLongLiveAuthToken = async (accessToken: any) => {
    const response = await getLongLiveAccessToken(
      accessToken?.user_id,
      accessToken?.access_token
    );
    response && setLongLiveAccessToken(response?.data?.access_token);
  };

  const fetchData = async () => {
    const response = await fetchInstaData("id,caption,media_url", authToken);
    response && setInstagramData(response?.data?.data);
    if (response?.status === 200) {
      setIsLongLiveTokenExpired(false);
    } else {
      setIsLongLiveTokenExpired(true);
    }
  };

  const getSingleInstaPostData = async (postId: string | number) => {
    const response = await fetchSinglePostInstaData(
      postId,
      "id,caption,media_type,media_url,username,timestamp",
      authToken
    );
    response && setSinglePostData(response?.data);
    const skus = response && response?.data?.caption?.split(",");
    skus && fetchProductData(skus);

    return response;
  };

  const fetchProductData = async (skus: []) => {
    setIsloading(true);
    setMultipleProductData([]);
    const response = await fetchMultipleProductsBySku(skus);
    response && setMultipleProducts(response?.data?.products);
    setIsloading(false);
  };

  return (
    <>
      <div className={styles["insta-page-wrapper"]}>
        <div className={styles.heading}>
          <Label>
            {appState?.lang === "en"
              ? heading || `Shop Our Instagram`
              : t("shopOurInstagram")}
          </Label>
        </div>
        <div className={styles.posts}>
          {instagramData &&
            instagramData?.length > 0 &&
            instagramData?.map((data, index) => {
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
                    }
                  }}
                >
                  <div className={styles.img}>
                    <Image
                      src={media_url || "/"}
                      alt={"post image"}
                      width={250}
                      height={250}
                      layout="responsive"
                    />
                  </div>

                  <div className={styles["hover-content"]}>
                    <div className={styles.bg_color}></div>
                    <div className={styles.content}>
                      <Label className={styles.title}>{t("shopTheLook")}</Label>
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
        multipleProducts={multipleProductData}
      />
    </>
  );
};

export default InstagramPageDetail;
