import React, { FC, useContext, useEffect, useState } from "react";
import { ImageType } from "lib/types/common";
import Label from "../ui/label";
import Image from "next/image";
import styles from "./side-bar.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import { useRouter } from "next/router";
import { desktopScreenSize, redirectToCurrentBrand } from "lib/utils/common";
import { BackArrow } from "components/icons";
import { useCustomer } from "lib/middleware-apis/customers";
import { accountImage } from "../account-information/account-overview";

type AccountsProps = {
  image?: ImageType;
  text?: string | "";
  width?: string | number;
  height?: string | number;
  link?: string | "";
};

type DetailsProps = {
  accounts: AccountsProps[];
};

interface SideBarProps {
  barCode?: ImageType;
  firstName?: string;
  lastName?: string;
  reviewImage?: ImageType;
  reviewText?: string;
  details?: DetailsProps[];
  setActiveComponent?: Function;
  setRefreshComponent?: Function;
  activeComponent?: string | boolean;
}

const SideBar: FC<SideBarProps> = ({
  barCode,
  firstName,
  lastName,
  reviewText,
  reviewImage,
  details,
  setActiveComponent,
  setRefreshComponent,
  activeComponent,
}) => {
  const [width] = useWindowSize();
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [renderCom, setRenderCom] = useState(false);
  const { logoutMutation, useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const userName = customerData?.firstName;

  const _detailsProps: DetailsProps[] = t(
    "detailsProps",
    {},
    { returnObjects: true }
  );

  const signOut = async () => {
    await logoutMutation.mutate();
    router.push(redirectToCurrentBrand(appState?.brandEN));
  };

  useEffect(() => {
    setRenderCom(true);
  }, []);

  return (
    <>
      {renderCom &&
      activeComponent !== "account-overview" &&
      width < desktopScreenSize ? (
        <div
          className={styles["account-button"]}
          onClick={() => {
            setActiveComponent("account-overview");
          }}
        >
          <BackArrow />
          <span>{t("Back To My Account")}</span>
        </div>
      ) : (
        <div className={styles["account-left"]}>
          <div>
            {width >= desktopScreenSize && (
              <div className={styles["account-profile"]}>
                {/* {barCode?.url && (
                  <Image
                    alt="icon"
                    src={barCode?.url || "/"}
                    width={100}
                    height={100}
                    layout="fixed"
                  />
                )} */}
                <Label>
                  <>
                    <span className={styles["firstName-desktop"]}>
                      {t("Hi")}{" "}  {userName &&
                        userName?.charAt(0).toUpperCase() + userName?.slice(1)}
                    </span>
                    {/* <span>
                      {userName &&
                        userName?.charAt(0).toUpperCase() + userName?.slice(1)}
                    </span> */}
                  </>
                </Label>
              </div>
            )}
            {width < desktopScreenSize && (
              <div className={styles["account-profile-mobile"]}>
                <div className={styles["account-image-mobile"]}>
                  <Image
                    alt="icon"
                    src={accountImage?.mobileImg || "/"}
                    width={375}
                    height={120}
                    layout="responsive"
                  />
                </div>
                <div className={styles["account-banner"]}>
                  {/* {barCode?.url && (
                    <Image
                      alt="icon"
                      src={barCode?.url || "/"}
                      width={100}
                      height={100}
                    />
                  )} */}
                  <Label>
                    <>
                      <span className={styles["firstname-mobile"]}>
                        {t("Hi")}
                      </span>
                      <span className={styles["lastname-mobile"]}>
                        {userName && userName}
                      </span>
                    </>
                  </Label>
                </div>
              </div>
            )}
            {/* <div className={styles["account-review"]}>
              <div className={styles["account-reviewsImage"]}>
                {reviewImage?.url && (
                  <Image
                    alt="icon"
                    src={reviewImage?.url || "/"}
                    width={16.67}
                    height={16.67}
                    layout="fixed"
                  />
                )}
              </div>
              {reviewText && (
                <Label>
                  {appState?.lang == "en" ? reviewText : t("reviewText")}
                </Label>
              )}
            </div> */}
            {details &&
              details?.length > 0 &&
              details?.map((object, i) => {
                const { accounts } = object;
                return (
                  <div key={i} className={styles["account-details"]}>
                    {accounts &&
                      accounts?.length > 0 &&
                      accounts?.map((account, index) => {
                        const { text, image, width, height, link } = account;
                        return (
                          <div
                            className={`${styles["account-detail"]} ${
                              link == activeComponent
                                ? styles["active-block"]
                                : ""
                            }`}
                            key={index}
                            onClick={() => {
                              if (text?.toLowerCase().includes("sign out")) {
                                signOut();
                              } else if (
                                text?.toLowerCase().includes("need help")
                              ) {
                                router.push(`/help-centre/order`);
                              } else {
                                router.push(
                                  {
                                    pathname: `${redirectToCurrentBrand(
                                      appState?.brandEN
                                    )}/account`,
                                    query: { tab: link },
                                  },
                                  undefined,
                                  { shallow: true }
                                );
                                setActiveComponent(link);
                                setRefreshComponent(Math.random());
                              }
                            }}
                          >
                            <div className={styles["account-image"]}>
                              {image?.url ? (
                                <Image
                                  src={image?.url || "/"}
                                  alt={image?.altText}
                                  width={width}
                                  height={height}
                                  layout="fixed"
                                />
                              ) : null}
                            </div>
                            <Label
                              className={
                                text == activeComponent &&
                                styles["active-state"]
                              }
                            >
                              {appState?.lang === "ar"
                                ? _detailsProps?.[i]?.accounts?.[index]?.text
                                : text}
                            </Label>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;
