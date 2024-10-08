import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";

interface ColorSelectionProps {
  productData?: { Size?: number; Color?: string };
  productSizeArray?: { Size?: number; Color?: string }[];
  onColorChange?: Function;
  setSelectedColor?: Function;
  // selectedColor: { color: string; index: number };
  // selectedSize: { size: number; index: number };
}

const ColorSelection = ({
  productData = {},
  productSizeArray = [],
  onColorChange = () => {},
  setSelectedColor = () => {},
}: // selectedColor,
// selectedSize,
ColorSelectionProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [activeColor, setActiveColor] = useState(0);
  const [colorArray, setColorArray] = useState([]);

  const getColors = () => {
    const colorSet = new Set();
    // if (productData.hasOwnProperty("Color")) {
    //   if (selectedSize.size > -1) {
    //     productData.Size === selectedSize.size &&
    //       productData.Color &&
    //       colorSet.add(productData.Color);
    //   } else {
    //     productData.Color && colorSet.add(productData.Color);
    //   }
    // }
    productSizeArray.length > 0 &&
      productSizeArray.map((item: { Size?: number; Color?: string }) => {
        // if (selectedSize.size > -1) {
        //   item.Size === selectedSize.size &&
        //     item.Color &&
        //     colorSet.add(item.Color);
        // } else {
        item.Color && colorSet.add(item.Color);
        // }
      });

    setSelectedColor({
      color: [...Array.from(colorSet)][0],
      index: 0,
    });
    setActiveColor(0);

    setColorArray([...Array.from(colorSet)]);
  };

  useEffect(() => {
    getColors();
  }, []);

  // useEffect(() => {
  // selectedColor.color && onColorChange && onColorChange( selectedColor.color);
  // }, [selectedColor]);

  return (
    <>
      <div className={styles["color-wrapper"]}>
        {colorArray && colorArray.length > 0 ? (
          <>
            <Label className={styles["color-heading"]}>
              {t("Color")}
            </Label>
            <div className={styles["product-colors"]}>
              {colorArray?.map((color, index) => {
                if (!color) return null;
                return (
                  <div
                    key={index}
                    className={`${styles["outer-div"]} ${
                      activeColor === index ? styles["active"] : ""
                    }`}
                  >
                    <div
                      role={"closeButton"}
                      onClick={() => {
                        // setActiveColor(index);
                        // setSelectedColor({
                        //   color: color,
                        //   index: index,
                        // });
                      }}
                      style={{
                        background: `linear-gradient(to right, ${color} 0%,#ffffff 100%)`,
                      }}
                      className={`${styles["product-color"]} ${
                        activeColor === index ? styles["active"] : ""
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default ColorSelection;
