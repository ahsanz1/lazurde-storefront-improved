import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import { fetchProduct } from "lib/utils/product";

interface VariantsByPriceProps {
  variantsArray?: { node: { options: { edges: [] }; entityId: number } }[];
  onPriceChange?: Function;
  variantId?: number;
  setVariantPrice?: Function;
  variantPrice?: number;
  setVariantAdded?: Function;
}

const VariantsByPrice = ({
  variantsArray = [],
  onPriceChange = () => {},
  variantId,
  setVariantPrice,
  variantPrice,
}: VariantsByPriceProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [selectedPrice, setSelectedPrice] = useState({
    price: -1,
    index: -1,
    variantId: variantId,
    variantSku: "",
  });
  const [priceArray, setPriceArray] = useState([]);

  const getPrices = () => {
    const priseSet = new Set();
    variantsArray?.map((item: any) => {
      priseSet.add({
        price:
          item?.node?.options?.edges?.[0]?.node.values?.edges[0]?.node?.label,
        variantId: item?.node?.entityId,
        sku: item?.node?.sku,
        currency: item?.node?.prices?.price?.currencyCode,
        default:
          item?.node?.productOptions?.edges?.[0]?.node?.values?.edges?.[0]?.node
            ?.isDefault,
      });
    });
    setPriceArray([...priseSet]);
  };

  useEffect(() => {
    if (variantsArray.length < 1) return;
    getPrices();
  }, [variantsArray]);

  useEffect(() => {
    selectedPrice?.price &&
      onPriceChange &&
      onPriceChange(selectedPrice?.variantId);
  }, [selectedPrice, appState?.region]);

  const getVariantDetail = async (sku: string) => {
    const varDetail = await fetchProduct(sku, appState?.region);
    const variantPrice = varDetail?.prices?.price?.value;
    setVariantPrice(variantPrice);
  };
  return (
    <div className={`${styles["price-wrapper"]}`}>
      {priceArray && priceArray.length > 0 ? (
        <>
          <Label className={styles["price-heading"]}>
            {t("ChooseGiftAmount")}
          </Label>

          <div className={styles["product-prices"]}>
            {priceArray?.map((value, index) => {
              if (!value?.price) return null;
              return (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedPrice({
                        price: value?.price,
                        variantId: value?.variantId,
                        index: index,
                        variantSku: value?.sku,
                      });
                      getVariantDetail(value?.sku);
                    }}
                    className={`${styles["product-price"]} ${
                      Number(variantPrice) === Number(value?.price) ||
                      (variantPrice === 0 && value?.default)
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    {value?.currency} {value?.price}
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
export default VariantsByPrice;
