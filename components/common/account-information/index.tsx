import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Label from "components/common/ui/label";
import styles from "./account-information.module.scss";
import { ImageType, StoreLocatorXMProps } from "lib/types/common";
import useWindowSize from "lib/utils/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context/index";
import { useRouter } from "next/router";
import SideBar from "components/common/side-bar/index";
import AccountOverView from "components/common/account-information/account-overview";
import OrderDetails from "components/common/order-details/index";
import NewsSubscriptions from "components/common/newsletter-subscriptions/index";
import MyDetails from "components/common/my-details/index";
import UserReviews from "./account-reviews";
import AddressBook from "./account-addresses";
import MyWishList from "../wishlist/my-wish-list/my-wish-list";
import PaymentMethod from "./account-payment-method";
import MyReturns from "./return-order/my-returns";
import { useQueryClient } from "@tanstack/react-query";

interface AccountInformationProps {
  title?: string | "";
  titleImage?: ImageType | { url: ""; altText: "" };
  barCode?: ImageType | { url: ""; altText: "" };
  firstName?: string | "";
  lastName?: string | "";
  reviewImage?: ImageType;
  reviewText?: string | "";
  orderId?: string | "";
  details?: DetailsProps[];
  order?: any;
  storeLocatorProps?: StoreLocatorXMProps[];
}

type AccountsProps = {
  image: ImageType;
  text: string | "";
  width: string | number;
  height: string | number;
  link: string | "";
};

type DetailsProps = {
  accounts: AccountsProps[];
};

const AccountInformation: FC<AccountInformationProps> = ({
  title = "",
  titleImage,
  barCode,
  firstName = "",
  lastName = "",
  reviewImage,
  reviewText = "",
  details = [],
  storeLocatorProps = [],
}) => {
  const { t } = useTranslation("common");
  const [width] = useWindowSize();
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const [activeComponent, setActiveComponent] = useState("");
  const [refreshComponent, setRefreshComponent] = useState("");
  const [renderCom, setRenderCom] = useState(false);
  const [singleOrderDetail, setSingleOrderDetail] = useState([]);
  const [isOrderHistoryActive, setIsOrderHistoryActive] = useState(false);
  const [updateOrderComp, setUpdateOrderComp] = useState(false);
  const [isReturnItems, setIsReturnItems] = useState(false);
  const [selectedItemForReturn, setSelectedItemForReturn] = useState({});
  const [isStaticContentModal, setIsStaticContentModal] = useState({
    isCourierCollection: false,
    isStoreDropOff: false,
    isGiftCard: false,
    isTabbyModal: false,
    isPaypalModal: false,
    isCodModal: false,
  });

  const myReturnTabActive = () => {
    setActiveComponent("my-returns");
  };

  useEffect(() => {
    setIsOrderHistoryActive(false);
  }, [updateOrderComp]);

  useEffect(() => {
    setRenderCom(true);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const currentTab: any = router.asPath?.split("tab=")?.[1];
      setActiveComponent(currentTab || "account-overview");
    }
  }, [router.isReady, router.asPath]);

  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const redirectToHome = () => {
    if (customerData?.entityId < 1) {
      return router.push("/");
    }
  };

  useEffect(() => {
    redirectToHome();
  }, [customerData]);

  return (
    <>
      {renderCom && (
        <div className={styles["account-container"]}>
          <div
            className={styles["account-main"]}
            onClick={() => {
              router.push("/account");
            }}
          >
            <div className={styles["account-mainImage"]}>
              <Image
                src={titleImage?.url || "/"}
                alt={titleImage?.altText}
                width={28.5}
                height={30}
              />
            </div>
            <Label>{appState?.lang === "ar" ? "حسابي" : title}</Label>
          </div>
          <div className={styles["details-section"]}>
            <SideBar
              barCode={barCode}
              firstName={firstName}
              lastName={lastName}
              reviewImage={reviewImage}
              reviewText={reviewText}
              details={details}
              setActiveComponent={setActiveComponent}
              setRefreshComponent={setRefreshComponent}
              activeComponent={activeComponent}
            />
            <div
              className={styles["account-right-side"]}
              key={refreshComponent}
            >
              {activeComponent == "account-overview" && <AccountOverView />}
              {activeComponent == "my-orders" && (
                <OrderDetails
                  setActiveComponent={setActiveComponent}
                  orderObject={singleOrderDetail}
                  setOrderObject={setSingleOrderDetail}
                  isOrderHistoryActive={isOrderHistoryActive}
                  isReturnItems={isReturnItems}
                  myReturnTabActive={myReturnTabActive}
                  isStaticContentModal={isStaticContentModal}
                  setIsStaticContentModal={setIsStaticContentModal}
                  storeLocatorProps={storeLocatorProps}
                />
              )}
              {activeComponent == "my-reviews" && <UserReviews />}
              {activeComponent == "address-book" && <AddressBook />}
              {activeComponent == "my-wishlist" && <MyWishList />}
              {activeComponent == "newsletter" && <NewsSubscriptions />}
              {activeComponent == "my-details" && <MyDetails />}
              {activeComponent == "payment-methods" && <PaymentMethod />}
              {activeComponent == "my-returns" && (
                <MyReturns
                  orderObject={singleOrderDetail}
                  setOrderObject={setSingleOrderDetail}
                  setActiveComponent={setActiveComponent}
                  setIsOrderHistoryActive={setIsOrderHistoryActive}
                  setUpdateOrderComp={setUpdateOrderComp}
                  updateOrderComp={updateOrderComp}
                  setIsReturnItems={setIsReturnItems}
                  myReturnTabActive={myReturnTabActive}
                  isStaticContentModal={isStaticContentModal}
                  setIsStaticContentModal={setIsStaticContentModal}
                  storeLocatorProps={storeLocatorProps}
                  selectedItemForReturn={selectedItemForReturn}
                  setSelectedItemForReturn={setSelectedItemForReturn}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AccountInformation;
