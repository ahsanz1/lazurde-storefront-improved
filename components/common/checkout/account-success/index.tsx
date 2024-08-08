import React, { useEffect, useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize, getStoreAttributeId } from "lib/utils/common";
import Image from "next/image";
import { useRouter } from "next/router";
import { LazurdeLogo, LazurdeLSLogo, MisslLogo } from "components/icons";
import Button from "components/common/ui/button";
import {
  getACustomerGraphQL,
  updateCustomerAttributeValues,
  useCustomer,
} from "lib/middleware-apis/customers";
import { sendVerificationEmail } from "lib/utils/customer";
import { customerAttributesNames } from "lib/utils/constants";

const AccountSuccess = (): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const { appState, toast } = useContext(AppContext);
  const router = useRouter();
  const { push } = useRouter() || { push: () => {} };
  const { useGetStoreAttributes } = useCustomer();
  const { data: storeAttributes } = useGetStoreAttributes();

  useEffect(() => {
    if (storeAttributes?.length > 0) {
      sendVerifyEmail();
    }
  }, [storeAttributes]);

  const sendVerifyEmail = async () => {
    const { user_id } = router.query;
    if (user_id) {
      const res = await getACustomerGraphQL(Number(user_id), appState?.region);
      res && (await sendVerificationEmailFunction(res));
    }
  };

  const sendVerificationEmailFunction = async (response: any) => {
    sendVerificationEmail({
      email: response?.email,
      customerId: response?.entityId,
      first_name: response?.firstName,
      region: appState?.region,
      lang: appState?.lang,
      currentDomain: window.location.origin,
    })
      .then((verificationEmailRes: any) => {
        if (verificationEmailRes?.emailSent) {
          const attrPayload: any = [
            {
              attribute_id: getStoreAttributeId(
                storeAttributes,
                customerAttributesNames?.verificationEmailSent
              ),
              value: String(1),
              customer_id: response?.entityId,
            },
          ];
          updateCustomerAttributeValues(attrPayload, appState?.region)
            .then(() => {})
            .catch(() => {});
          toast(t("verificationLinkSent"));
          router.replace(router.pathname, router.pathname, { shallow: true });
        }
      })
      .catch((err) => {
        console.log("Error Sending Verification Email: ", err);
      });
  };

  return (
    <>
      <div className={styles["account-success-wrapper"]}>
        <div className={styles["account-success-bg"]}>
          <Image
            src={"/collection-missl1.png"}
            alt={"accountSuccess"}
            width={width > desktopScreenSize ? 1248 : 375}
            height={width > desktopScreenSize ? 608 : 416}
            layout="responsive"
          />
          <div className={styles["main-wrapper"]}>
            <div className={styles["inner-wrapper"]}>
              {width > desktopScreenSize ? (
                <div className={styles["div-left"]}>
                  <div className={styles["div-logo"]}>
                    <div>
                      <LazurdeLogo width={182} height={24} />
                    </div>
                    <div className={styles["slogan-div"]}>
                      <span>{t("accBrands")}</span>
                    </div>
                    <div className={`${styles["brands-logo"]}`}>
                      <MisslLogo /> <LazurdeLSLogo />
                    </div>
                  </div>
                </div>
              ) : null}
              {width > desktopScreenSize ? (
                <div className={styles["half-divider"]}>
                  <hr />
                </div>
              ) : null}

              <div className={styles["div-right"]}>
                <div className={styles["thankyou-heading"]}>
                  {t("ThankYou")}
                </div>
                <div className={styles["thankyou-des"]}>
                  {t("accCreatedMsg")}
                </div>
                <div className={styles["thankyou-btns"]}>
                  <Button
                    testId={"addNewBtn"}
                    buttonSize={"xl"}
                    buttonText={t("GoHomePageBtnText")}
                    onClick={() => {
                      push("/");
                    }}
                  ></Button>

                  <Button
                    testId={"addAccBtn"}
                    buttonSize={"xl"}
                    buttonStyle={"white"}
                    buttonText={t("accountPage")}
                    onClick={() => {
                      push("/account");
                    }}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSuccess;
