import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import SingleProductCard from "./single-product-card";

const MultipleProductsDetail = ({
  multipleProducts = [],
}: any): JSX.Element => {
  return (
    <div className={styles["insta-product-wrapper"]}>
      {multipleProducts &&
        multipleProducts?.length > 0 &&
        multipleProducts?.map((data: any, index: number) => {
          return (
            <SingleProductCard key={index} index={index} productData={data} />
          );
        })}
    </div>
  );
};

export default MultipleProductsDetail;
