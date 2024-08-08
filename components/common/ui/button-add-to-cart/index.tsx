import { MinusIcon, PlusIcon } from "components/icons";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Spinner from "../spinner";
import styles from "./buttonATC.module.scss";
import useTranslation from "next-translate/useTranslation";
import ReactDOM from "react-dom";
import WishList from "components/common/wishlist";
import Label from "../label";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";

interface ButtonATCProps {
  className?: string;
  buttonText?: string | Function;
  buttonStyle?: string;
  buttonSize?: "sm" | "md" | "lr" | "xl" | "xxl" | "fill";
  onClick?: MouseEventHandler<HTMLDivElement>;
  type?: "button" | "submit";
  children?: JSX.Element | string;
  showCounter?: boolean;
  onQuantityChange?: Function;
  quantityCounter?: number;
  setQuantityCounter?: Function;
  isLoading?: boolean;
  spinnerSize?: number;
  spinnerColor?: string;
  style?: object;
  spinnerText?: string;
  spinnerWidth?: number;
  handleQuantity?: Function;
  itemID?: string;
  updateQuantity?: Function;
  productName?: string;
  item: any;
  productPricing?: Function;
  hasVariantsOptions?: boolean
}

interface QuantitySectionProps {
  quantityCounter?: number;
  setQuantityCounter?: Function;
  click?: any;
  buttonText?: any;
  handleQuantity?: Function;
  itemID?: string;
  updateQuantity?: Function;
  hasVariantsOptions?: boolean
}

const ButtonATC = ({
  className = "",
  type = "button",
  buttonText = "",
  buttonStyle = "black",
  buttonSize = "md",
  children,
  showCounter = false,
  onClick = () => {},
  onQuantityChange = () => {},
  quantityCounter = 1,
  setQuantityCounter = () => {},
  handleQuantity = () => {},
  updateQuantity = () => {},
  isLoading = false,
  spinnerSize = 12,
  spinnerWidth = 6,
  spinnerColor = "#fff",
  style = {},
  spinnerText = "",
  itemID = "",
  productName = "",
  item = {},
  productPricing,
  hasVariantsOptions = false
}: ButtonATCProps): JSX.Element => {
  // const [quantityCounter, setQuantityCounter] = useState(1);
  const [size] = useWindowSize();
  useEffect(() => {
    onQuantityChange(quantityCounter);
  }, [quantityCounter]);

  const targetRef = useRef(null);
  const [isAddtocartOnScreen, setIsAddtocartOnScreen] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAddtocartOnScreen(true);
        } else if (entry.boundingClientRect.top) {
          setIsAddtocartOnScreen(false);
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const addToCartBtn = () => {
    return (
      <button
        ref={targetRef}
        data-testid={"buttonATC"}
        data-style={buttonStyle}
        data-size={buttonSize}
        data-counter={isLoading ? !isLoading : showCounter}
        className={`${styles["buttonATC"]} ${className}`}
        type={type}
      >
        {isLoading ? (
          <div className={styles["div-spinner"]}>
            {spinnerText && (
              <span
                className={styles["spinner-text"]}
                style={{ fontSize: spinnerSize }}
              >
                {spinnerText}
              </span>
            )}
            <Spinner
              width={spinnerSize}
              height={spinnerSize}
              stroke={spinnerWidth}
              color={spinnerColor}
            ></Spinner>
          </div>
        ) : (
          <>
            {showCounter && (
              <QuantitySection
                quantityCounter={quantityCounter}
                setQuantityCounter={setQuantityCounter}
                click={onClick}
                buttonText={buttonText}
                handleQuantity={handleQuantity}
                itemID={itemID}
                updateQuantity={updateQuantity}
                hasVariantsOptions={hasVariantsOptions}
              ></QuantitySection>
            )}
            {/* <div onClick={onClick}>{buttonText || ""}</div> */}
            {children || ""}
          </>
        )}
      </button>
    );
  };

  return (
    <>
      {addToCartBtn()}
      {!isAddtocartOnScreen && (
        <BottomFixedAddToCartBtn>
          <div className={styles["bottom-bar-wrapper"]}>
            {size > desktopScreenSize ? (
              <div className={styles["left-side"]}>
                <Label className={styles["title"]}>{productName.split("-")[1]}</Label>
              </div>
            ) : null}
            <div className={styles["right-side"]}>
              <div className={styles["price-wrapper"]}>
                {productPricing("bottom-div-pricing")}
              </div>
              {addToCartBtn()}
              {size > desktopScreenSize ? (
                <WishList
                  itemId={item?.entityId}
                  className={styles["wishlist-div"]}
                />
              ) : null}
            </div>
          </div>
        </BottomFixedAddToCartBtn>
      )}
    </>
  );
};
export default ButtonATC;

const QuantitySection = ({
  quantityCounter,
  setQuantityCounter,
  click = () => {},
  buttonText,
  handleQuantity,
  itemID,
  updateQuantity,
  hasVariantsOptions
}: QuantitySectionProps): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles["div-quantity-counter"]}>
        {!hasVariantsOptions && quantityCounter > 0 ? (
          <>
            <div
              onClick={() => {
                if (quantityCounter > 1) {
                  updateQuantity(quantityCounter - 1, itemID);
                }
              }}
              className={styles["counter-decrement"]}
            >
              <MinusIcon color="white" width="20px" height="20px" />
            </div>
            <span className={styles["counter-span"]}>
              {quantityCounter} {t("added")}
            </span>
            <div
              onClick={() => {
                handleQuantity();
              }}
              className={styles["counter-increment"]}
            >
              <PlusIcon width="20px" height="20px" color="white" />
            </div>
          </>
        ) : (
          <div style={{ width: "100%" }} onClick={click}>
            {buttonText || ""}
          </div>
        )}
      </div>
    </>
  );
};

const BottomFixedAddToCartBtn = ({ children }: { children: JSX.Element }) => {
  const [bottomBtnDiv, setBottomBtnDiv] = useState<any>("");

  useEffect(() => {
    const div = document.getElementById("portal");
    div && setBottomBtnDiv(div);
  }, []);

  return bottomBtnDiv
    ? ReactDOM.createPortal(
        <div className={styles["bottom-addtocart-wrapper"]}>
          <div className={styles["btn-div"]}>{children}</div>
        </div>,
        bottomBtnDiv
      )
    : null;
};
