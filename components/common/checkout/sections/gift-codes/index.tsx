import React, { useState, FC, useContext, useEffect, useRef } from "react";
import Button from "components/common/ui/button/index";
import Input from "components/common/ui/Input";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";

import styles from "./style.module.scss";
import { useCart } from "lib/utils/cart";

type GiftCodeProps = {
  setPromoDiscount?: Function;
  cartData?: any;
};

const GiftCodes: FC<GiftCodeProps> = ({
  setPromoDiscount = () => {},
  cartData,
}) => {
  const [discountValue, setDiscountValue] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [codeApplied, setCodeApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoading, setHasLoading] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");
  const { cartId } = useContext(AppContext);
  const { t } = useTranslation("common");
  let savedVal: any = useRef();
  const { addPromotion, removePromotion } = useCart();

  useEffect(() => {
    checkPromo(cartData);
  }, [cartData]);

  useEffect(() => {
    discountValue && setCodeApplied(true);
  }, []);

  const checkPromo = (cartDetails: any) => {
    let arr: any = [];
    let checkPromoValue = "";
    let discountArray = discountValue;
    cartDetails?.allPromosApplied?.map(
      (data: { promoCode: string }, index: number) => {
        if (data?.promoCode) {
          checkPromoValue = data?.promoCode;
          discountArray[index] = {
            type: "Code applied",
            value: checkPromoValue,
          };
          arr.push(discountArray[index]);
        }
      }
    );
    setDiscountValue(arr);
    if (checkPromoValue) {
      discountValue?.length == 1 && setCodeApplied(true);
      setShowInput(false);
    }
    if (codeApplied && checkPromoValue) {
      setPromoDiscount(cartDetails?.totalDiscount);
    } else {
      setPromoDiscount(0);
    }
  };

  const promoCodeApplied = async (value: string) => {
    let CodeType = "";
    let discountArray = discountValue;
    if (value) {
      CodeType = "Code applied";
    }
    const response = await addPromotion(cartId, value);
    setIsLoading(false);
    if (response?.hasError || response?.error) {
      const error =
        response?.error?.response?.data?.message ||
        response?.error?.response?.data?.description;
      setErrorMsg(error);
      return;
    }

    if (response?.cartId) {
      discountArray.push({
        type: CodeType,
        value: value,
      });
      setDiscountValue([...discountArray]);
      setPromoDiscount(response?.totalDiscount);
      setIsLoading(false);
      setShowInput(false);
      setCodeApplied(true);
      setErrorMsg("");
    }
  };

  const promoCodeRemoved = async (value: string) => {
    const response = await removePromotion(cartId, value);
    checkPromo(response);
    setHasLoading(-1);
    setShowInput(true);
    setErrorMsg("");
  };
  return (
    <>
      <div className={styles["main-wrapper"]}>
        <span role="main-heading" className={styles["main-heading"]}>
          {t("giftCardVoucherPromoCode")}
        </span>
        {discountValue?.map((val, i) => {
          return (
            <React.Fragment key={i}>
              {discountValue?.length > 0 && codeApplied ? (
                <div key={i} className={styles["div-dis-applied"]}>
                  <div role="typeValue" className={styles["dis-code"]}>
                    <p>
                      {val?.type}: {val?.value}
                    </p>
                  </div>
                  <div className={styles["div-remove-button"]}>
                    <Button
                      testId={"codeRemoveBtn"}
                      buttonStyle="underline"
                      buttonText={t("Remove")}
                      className={styles["code-remove-btn"]}
                      isLoading={i == hasLoading}
                      spinnerColor={"black"}
                      onClick={() => {
                        setHasLoading(i);
                        promoCodeRemoved(discountValue[i].value);
                      }}
                    ></Button>
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}

        <div className={styles["div-discount-box"]}>
          {showInput ? (
            <>
              <div className={styles["discount-input"]}>
                <Input
                  className={styles["input"]}
                  label={t("giftCardVoucherPromoCode")}
                  type="text"
                  name="testerCode"
                  error={errorMsg}
                  placeHolder={t("cardNumPlaceHolder")}
                  onChange={(e) => {
                    setErrorMsg("");
                    savedVal.current = e.target.value.toLowerCase();
                  }}
                  role="textInput"
                />
              </div>
              <div className={styles["discount-btn"]}>
                <Button
                  className={styles["apply-btn"]}
                  testId={"applyBtn"}
                  buttonSize={"xxs"}
                  buttonText={t("Apply")}
                  isLoading={isLoading}
                  onClick={() => {
                    savedVal.current && setIsLoading(true);
                    savedVal.current && promoCodeApplied(savedVal.current);
                  }}
                ></Button>
              </div>
            </>
          ) : null}
        </div>
        <>
          <div className={styles["link-box"]}>
            <div
              role="linkBox"
              onClick={() => {
                setShowInput(true);
              }}
            >
              Add {t("giftCardVoucherPromoCode")}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default GiftCodes;
