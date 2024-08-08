import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize, useIsomorphicLayoutEffect } from "lib/utils/common";
import Label from "components/common/ui/label";
import CheckBox from "components/common/ui/checkbox";
import { useRouter } from "next/router";
import Button from "components/common/ui/button";
import CheckoutUserForm from "../checkout/checkout-user-form";
import Link from "next/link";
import SummaryItem from "../checkout/summary-section/summary-item";
import Spinner from "../ui/spinner";
import Image from "next/image";
import HelpCenterSection from "../help-center-section";
import OrderSection from "../checkout/summary-section/order";
import SummarySection from "../checkout/summary-section/summary";
import Splash from "../ui/splash";
import ImageWithBrandTag from "../ui/image-with-brandtag";
import { getBrandByPriceListId } from "lib/utils/constants";

const Confirmation = (): JSX.Element => {
  const [width] = useWindowSize();
  const { t } = useTranslation("common");
  const router = useRouter();
  const { push } = useRouter() || { push: () => {} };
  const [loginUser, setLoginUser] = useState(false);
  const { appState } = useContext(AppContext);

  const checkoutData =
    (typeof window !== "undefined" &&
      JSON.parse(window?.sessionStorage?.getItem("checkoutData"))) ||
    null;

  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));

  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    customer?.entityId > 0 && setLoginUser(true);
    window.sessionStorage.removeItem("form_data");
    window.sessionStorage.removeItem("shippingMethods");
    window.sessionStorage.removeItem("cartId");
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!checkoutData?.checkoutComplete) {
      push("/");
      return;
    }
  }, []);

  const totalAmountWithoutShippingPrice =
    checkoutData?.subTotal -
    (checkoutData?.shippingCost || checkoutData?.shipMethod?.cost?.amount);

  const mockCalculations =
    checkoutData?.shippingCost + checkoutData?.totalAmount;

  if (!checkoutData?.checkoutComplete) {
    return null;
  }
  return (
    <>
      <div className={styles["confirm-wrapper"]}>
        <div className={styles["checkout-wrapper"]}>
          <div className={styles["checkout-cont"]}>
            <span>{t("Checkout")}</span>
          </div>
        </div>
        <div className={styles["flex-wrap"]}>
          <div className={styles["inner-wrapper"]}>
            {width < desktopScreenSize ? (
              <OrderSection
                isCheckoutComplete={checkoutData?.checkoutComplete}
                data={checkoutData}
              />
            ) : null}
            <div className={styles["confirm-wrapper"]}>
              <span role="main-heading" className={styles["main-heading"]}>
                {t("orderConfirmMain")}
              </span>

              <div className={styles["order-details"]}>
                <div className={styles["order-num"]}>
                  {t("order")}#:{checkoutData?.orderId}
                </div>
                <div className={styles["order-msg"]}>{t("receiptNotice")}</div>
              </div>

              <div className={styles["div-main"]}>
                <div className={styles["div-left"]}>
                  <div className={styles["tab-address-heading"]}>
                    {t("shippingTo")}
                  </div>

                  {checkoutData ? (
                    <>
                      <Label>{`${checkoutData?.address?.name?.first} ${checkoutData?.address?.name?.last}`}</Label>
                      <Label>{`${checkoutData?.address?.street1}`}</Label>
                      <Label>{`${checkoutData?.address?.city}, ${checkoutData?.address?.state}, ${checkoutData?.address?.zipCode}`}</Label>
                      <Label>{`${checkoutData?.address?.country}`}</Label>
                      <Label>{`T: ${checkoutData?.address?.phone?.number}`}</Label>{" "}
                    </>
                  ) : null}

                  <div className={styles["delivery-est"]}>
                    {checkoutData?.deliveryEstimate}
                  </div>
                </div>
                <div className={styles["div-right"]}>
                  <div className={styles["purchase-heading"]}>
                    {t("purchaseWith")}
                  </div>
                  <div className={styles["payment-method"]}>
                    {checkoutData?.paymentType.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {loginUser ? (
              <>
                {" "}
                <div
                  className={styles["save-wrapper"]}
                  style={{
                    marginTop: width > desktopScreenSize ? "8px" : "",
                  }}
                >
                  <span role="main-heading" className={styles["main-heading"]}>
                    {t("whatNext")}
                  </span>
                  <div className={styles["main-points"]}>
                    <ul className={styles["order-steps"]}>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div>

                  <div className={styles["checkout-btns"]}>
                    <Button
                      testId={"homePageBtn"}
                      buttonSize={"xl"}
                      buttonText={t("GoHomePageBtnText")}
                      onClick={() => {
                        push("/");
                        window.sessionStorage.removeItem("checkoutData");
                      }}
                    ></Button>

                    <Button
                      testId={"accPageBtn"}
                      buttonSize={"xl"}
                      buttonStyle={"white"}
                      buttonText={t("accountPage")}
                      onClick={() => {
                        push("/account");
                        window.sessionStorage.removeItem("checkoutData");
                      }}
                    ></Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div
                  className={styles["save-wrapper"]}
                  style={{
                    marginTop: width > desktopScreenSize ? "8px" : "",
                  }}
                >
                  <span role="main-heading" className={styles["main-heading"]}>
                    {t("savedDetails")}
                  </span>

                  <div className={styles["main-points"]}>
                    <ul className={styles["order-steps"]}>
                      <li>{t("managePaymentPreference")}</li>
                      <li>{t("createAddressBook")}</li>
                      <li>{t("orderStatusView")}</li>
                    </ul>
                  </div>

                  <div className={styles["div-main"]}>
                    <CheckoutUserForm isOpen={true} />
                  </div>
                  <Button
                    buttonSize="xl"
                    buttonText={t("createAccBtn")}
                    className={styles["create-acc-btn"]}
                    onClick={() => {
                      router.push("/account-success");
                      window.sessionStorage.removeItem("checkoutData");
                    }}
                  ></Button>
                  <div className={styles["div-checkbox-main"]}>
                    <div className={styles["div-checkbox-data"]}>
                      <CheckBox
                        className={styles["check-box"]}
                        name={"checkbox"}
                        defaultChecked={true}
                      />
                      <div className={styles["check-box"]}>
                        <div>{t("signUpText")}</div>
                      </div>
                    </div>
                    <div className={styles["div-checkbox-data"]}>
                      <CheckBox
                        className={styles["check-box"]}
                        name={"checkboxes"}
                        defaultChecked={true}
                      />
                      <div className={styles["check-box"]}>
                        <div>{t("savePaymentDetails")}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["privacy-note"]}>
                    {t("personal data")}
                    <span
                      className={styles["privacy-note-click"]}
                      onClick={() => {}}
                    >
                      {t("Privacy Notice Here.")}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
          {width < desktopScreenSize ? <HelpCenterSection /> : null}
          {width > desktopScreenSize ? (
            <>
              <div className={styles["inner-wrapper"]}>
                <div className={styles["summary-card"]}>
                  <span role="summary-heading">{t("summary")}</span>
                  {checkoutData?.items?.map((item: any, index: number) => {
                    const ItemImage = item?.attributes?.find(
                      (img: any) => img?.name === "Image URL"
                    );
                    return (
                      <>
                        <div className={styles["div-summary-box"]}>
                          <>
                            <div className={styles["summary-item-details"]}>
                              <div className={styles["item-img"]}>
                                <ImageWithBrandTag
                                  imageSrc={ItemImage?.value}
                                  brand={getBrandByPriceListId(
                                    item?.priceListId
                                  )}
                                  width={100}
                                  height={100}
                                  isAvailable={item?.isAvailable}
                                />
                              </div>
                              <div className={styles["item-details"]}>
                                <div className={styles["item-title"]}>
                                  {item?.title}
                                </div>
                                {
                                  <div className={styles["price-wrapper"]}>
                                    <div
                                      className={`${styles["base-price"]} ${
                                        item?.totalPrice?.discount?.discounts
                                          ? styles["line-through"]
                                          : ""
                                      }`}
                                    >
                                      {item?.totalPrice && (
                                        <>{`${item?.totalPrice?.currency} ${
                                          item?.totalPrice?.amount?.toFixed(
                                            2
                                          ) || "0.00"?.toLocaleString()
                                        }`}</>
                                      )}
                                    </div>
                                    <div className={styles["final-price"]}>
                                      {item?.totalPrice?.discount
                                        ?.discounts && (
                                        <>{`${item?.totalPrice?.currency} ${
                                          item?.totalPrice?.sale?.toFixed(2) ||
                                          "0.00"?.toLocaleString()
                                        }`}</>
                                      )}
                                    </div>
                                  </div>
                                }
                                <div className={styles["item-qty"]}>
                                  {t("Quantity")}:{item?.quantity}
                                </div>
                              </div>
                            </div>
                          </>
                        </div>

                        {index === checkoutData?.items.length - 1 ? null : (
                          <div className={styles["half-divider-light"]}>
                            <hr />
                          </div>
                        )}
                      </>
                    );
                  })}

                  <div className={styles["order-details"]}>
                    <div>
                      <span role="subHeading">{t("subTotal")}</span>
                      <span data-amount={true}>
                        {checkoutData?.shipMethod?.cost?.currency}{" "}
                        {(
                          checkoutData?.subTotal ||
                          totalAmountWithoutShippingPrice
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span role="shpping-text">
                        {t("estimatedShippingHandeling")}
                      </span>
                      <span data-amount={true}>
                        {checkoutData?.shippingCost ||
                        checkoutData?.shipMethod?.cost?.amount > 0
                          ? `${checkoutData?.shipMethod?.cost?.currency} ${
                              checkoutData?.shippingCost.toFixed(2) ||
                              checkoutData?.shipMethod?.cost?.amount.toFixed(2)
                            }`
                          : "FREE"}
                      </span>
                    </div>
                    <div>
                      <span role="tax">{t("taxVat")}</span>
                      <span data-amount={true}>
                        {`${checkoutData?.shipMethod?.cost?.currency}`}{" "}
                        {checkoutData?.vatTax}
                      </span>
                    </div>
                    {checkoutData?.totalDiscount ? (
                      <>
                        <hr className={styles["horizontal-divider-summary"]} />
                        <div className={styles["discount-offers"]}>
                          <span role="discount">{"Total Discount"}</span>
                          <span
                            className={styles["discount-value"]}
                            data-amount={true}
                          >
                            -{checkoutData?.shipMethod?.cost?.currency}{" "}
                            {checkoutData?.totalDiscount.toFixed(2)}
                          </span>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <hr className={styles["horizontal-divider-summary"]} />
                  <div className={styles["order-details"]}>
                    <div>
                      <span role="totalPay" data-amount={true}>
                        {t("totalPaid")}
                      </span>
                      <span data-amount={true}>
                        {checkoutData?.totalAmount
                          ? `${
                              checkoutData?.shipMethod?.cost?.currency
                            } ${mockCalculations.toFixed(2)}`
                          : `${checkoutData?.shipMethod?.cost?.currency} 0.00`}
                      </span>
                    </div>
                  </div>
                </div>
                {width > desktopScreenSize ? <HelpCenterSection /> : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles["back-block"]}>
        <button
          role="contactUsBtn"
          className={styles["button"]}
          onClick={() => {
            // setIsLoading(true);
            push("/contact-us");
          }}
        >
          <Image src={"/question.png"} width={20} height={20} alt="" />

          <p>{t("haveAQuestion")}</p>
        </button>
      </div>
    </>
  );
};

export default Confirmation;
