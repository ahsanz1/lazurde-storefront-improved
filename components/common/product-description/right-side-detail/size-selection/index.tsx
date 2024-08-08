import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import SizeChartModal from "./size-chart-modal";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { fetchProduct } from "lib/utils/product";

interface SizeChartProps {
  className?: string;
  productData?: { Size?: number; Color?: string };
  sizeChartUrl?: string;
  productSizeArray?: { node: { options: { edges: [] }; entityId: number } }[];
  onSizeChange?: Function;
  setSelectedSize?: Function;
  setSelectedColor?: Function;
  selectedSize?: { size: number; index: number };
  sizePopup?: boolean;
  categoryName?: string;
  lowestPrice?: number;
  variantId?: number;
}

const SizeChart = ({
  className = "",
  productData = {},
  sizeChartUrl = "https://lazurdesandbox.imgix.net/Frame%20208150.jpg",
  productSizeArray = [],
  onSizeChange = () => {},
  setSelectedColor = () => {},
  sizePopup = false,
  categoryName = "",
  lowestPrice = 0,
  variantId,
}: SizeChartProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [sizeChartModalOpen, setSizeChartModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState({
    size: -1,
    index: 0,
    variantId: variantId,
  });
  const [activeSize, setActiveSize] = useState(0);
  const [sizeArray, setSizeArray] = useState([]);

  const getSizes = () => {
    const sizeSet = new Set();

    // if (productData && productData.hasOwnProperty("Size")) {
    //   sizeSet.add(productData.Size);
    // }

    productSizeArray?.map((item: any) => {
      // const currentAttribute: any =
      //   plpAttrForSize &&
      //   plpAttrForSize?.flatMap((currItem) => {
      //     return Object.keys(item)?.filter((currAtt) => {
      //       if (currAtt == currItem.value && item?.[currAtt]) {
      //         return true;
      //       }
      //     });
      //   });

      // const numberPattern = /\d+/g;
      // currentAttribute?.length > 0 &&
      //   sizeSet.add({
      //     // size: item?.Size,
      //     size: item?.[currentAttribute?.[0]]?.match(numberPattern)?.[0],
      //     item: item,
      //     price: item?.promotion?.price?.base,
      //   });
      const sizeOption = item?.node?.options?.edges.find(
        (option: { node: { displayName: string } }) =>
          option?.node.displayName === "Price"
      );

      sizeSet.add({
        size: sizeOption?.node.values?.edges[0]?.node?.label,
        variantId: item?.node?.entityId,
      });
    });

    // const setArray: any = Array.from(sizeSet).sort((a: any, b: any) => {
    //   return Number(a?.size) > Number(b?.size) ? 1 : -1;
    // });
    // if (setArray?.length < 1) return;

    // if (activeSize === 0) {
    //   const lowestPriceItem = setArray.find(
    //     (item: { price: number }) => item?.price === lowestPrice
    //   );
    //   const lowestPriceItemIndex = setArray.findIndex(
    //     (item: { price: number }) => item?.price === lowestPrice
    //   );
    //   setSelectedSize({
    //     size: lowestPriceItem?.size || [...setArray][0]?.size,
    //     item: lowestPriceItem?.item || [...setArray][0]?.item,
    //     index: lowestPriceItemIndex === -1 ? 0 : lowestPriceItemIndex,
    //   });
    // }
    // setSizeArray([...setArray]);
    setSizeArray([...sizeSet]);
  };

  useEffect(() => {
    if (productSizeArray.length < 1) return;
    getSizes();
  }, [productSizeArray]);

  useEffect(() => {
    // setSelectedColor({ color: "", index: 0 });
    selectedSize?.size && onSizeChange && onSizeChange(selectedSize?.variantId);
  }, [selectedSize, appState?.region]);

  return (
    <div className={`${styles["sizechart-wrapper"]} ${className}`}>
      {sizeArray && sizeArray.length > 0 ? (
        <>
          {sizePopup ? (
            <Label className={styles["plp-popup"]}>
              {`${categoryName} ${t("Size")}`}
            </Label>
          ) : (
            <Label className={styles["size-heading"]}>{t("Select Size")}</Label>
          )}
          <div className={styles["product-sizes"]}>
            {sizeArray?.map((value, index) => {
              if (!value?.size) return null;
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveSize(index);
                    setSelectedSize({
                      size: value?.size,
                      variantId: value?.variantId,
                      index: index,
                    });
                  }}
                  className={`${styles["product-size"]} ${
                    selectedSize?.index === index ? styles["active"] : ""
                  }`}
                >
                  {value?.size}
                </div>
              );
            })}
          </div>
          {!sizePopup && (
            <div className={styles["size-chart-btn"]}>
              <button onClick={() => setSizeChartModalOpen(true)}>
                {t("Sizing Chart")}
              </button>
            </div>
          )}
        </>
      ) : null}
      {sizeChartModalOpen && (
        <SizeChartModal
          isOpened={sizeChartModalOpen}
          onClose={() => setSizeChartModalOpen(false)}
          sizeChartUrl={sizeChartUrl}
        />
      )}
    </div>
  );
};
export default SizeChart;
