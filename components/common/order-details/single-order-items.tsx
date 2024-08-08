import React, { useContext } from "react";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import { fetchProduct } from "lib/utils/product";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/spinner";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
interface SingleOrderItemsImgProps {
  sku?: string;
  onClick?: Function;
}

const SingleOrderItemsImg = ({
  sku = "",
  onClick = () => {},
}: SingleOrderItemsImgProps): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);

  const { data: product, isLoading } = useQuery(
    [`singleProductData-${sku}`],
    () => fetchProduct(sku, appState?.region),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const image = product?.defaultImage?.url960wide;

  if (isLoading) {
    return (
      <>
        <Spinner />
        {t("loading")}
      </>
    );
  }
  return (
    <>
      <ImageWithBrandTag
        imageSrc={image || "/"}
        alt={product?.name || ""}
        width={100}
        height={100}
        brand={product?.brand?.name}
        onClick={() => {
          onClick && onClick();
        }}
      />
    </>
  );
};

export default SingleOrderItemsImg;
