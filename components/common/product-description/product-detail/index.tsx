import React, { useContext } from "react";
import styles from "./style.module.scss";
import Heading from "components/common/ui/heading";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import FeatureItem from "./feature-item";
import { dimensionAttributes } from "./attributes-name";

interface ProductDetailProps {
  productDetail?: string;
  productData?: any;
}

const ProductDetail = ({
  productData = {},
}: ProductDetailProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const { description, customFields, metafields } = productData;
  const customeFieldsPDP: any = t(
    "customeFieldsPDP",
    {},
    { returnObjects: true }
  );
  // const arabicDescription = customFields?.edges?.find(
  //   (item: { node: { name: string } }) =>
  //     item?.node?.name === "New Description AR"
  // );
  const arabicDescription = metafields?.edges?.find(
    (item: { node: { key: string } }) =>
      item?.node?.key === "description_ar"
  );
  const englishFilterAttr = (feilds: []) => {
    return feilds?.filter((item: any) => !item?.node?.name?.includes("AR"));
  };

  const arabicFilterAttr = (feilds: []) => {
    return feilds?.filter((item: any) => item?.node?.name?.includes("AR"));
  };

  const customeFieldsToMap = [
    // {
    //   key: customeFieldsPDP?.Brand,
    //   value: "Brand",
    // },
    // {
    //   key: customeFieldsPDP?.Collection,
    //   value: "Collection",
    // },
    {
      key: customeFieldsPDP?.Metal,
      value: "Metal",
    },
    {
      key: customeFieldsPDP?.Gold,
      value: "Gold Weight",
    },
    {
      key: customeFieldsPDP?.Gold,
      value: "Gold Weight AR",
    },
    {
      key: customeFieldsPDP?.Diamond,
      value: "Diamond Carat & Cut ONLY",
    },
    // {
    //   key: customeFieldsPDP?.Diamond,
    //   value: "Diamonds",
    // },
    // {
    //   key: customeFieldsPDP?.Stone,
    //   value: "Stone Color Carat & Cut",
    // },
    {
      key: customeFieldsPDP?.Stone,
      value: "Stone",
    },
    {
      key: customeFieldsPDP?.["Ring Size"],
      value: "Ring Size",
    },
    // {
    //   key: customeFieldsPDP?.["Bracelet Size"],
    //   value: "Bracelet Size",
    // },
    // {
    //   key: customeFieldsPDP?.["Bracelet Length"],
    //   value: "Bracelet Length",
    // },
    {
      key: customeFieldsPDP?.["Earring Size"],
      value: "Earring Size",
    },
    {
      key: customeFieldsPDP?.["Pendant Size"],
      value: "Pendant Size",
    },
    {
      key: customeFieldsPDP?.["Charm Size"],
      value: "Charm Size",
    },
    // {
    //   key: "Style Number",
    //   value: "Style Number",
    // },
    // {
    //   key: customeFieldsPDP?.Collection,
    //   value: "Collection AR",
    // },
    {
      key: customeFieldsPDP?.Metal,
      value: "Metal AR",
    },
    // {
    //   key: customeFieldsPDP?.Brand,
    //   value: "Brand AR",
    // },
    {
      key: customeFieldsPDP?.Diamond,
      value: "Diamond Carat & Cut AR",
    },
    // {
    //   key: customeFieldsPDP?.Diamond,
    //   value: "Diamonds AR",
    // },
    {
      key: customeFieldsPDP?.Stone,
      value: "Stone AR",
    },
    // {
    //   key: customeFieldsPDP?.Stone,
    //   value: "Stone Color Carat & Cut AR",
    // },
    {
      key: customeFieldsPDP?.["Ring Size"],
      value: "Ring Size AR",
    },
    // {
    //   key: customeFieldsPDP?.["Bracelet Size"],
    //   value: "Bracelet Size AR",
    // },
    // {
    //   key: customeFieldsPDP?.["Bracelet Length"],
    //   value: "Bracelet Length AR",
    // },
    {
      key: customeFieldsPDP?.["Earring Size"],
      value: "Earring Size AR",
    },
    {
      key: customeFieldsPDP?.["Pendant Size"],
      value: "Pendant Size AR",
    },
    {
      key: customeFieldsPDP?.["Charm Size"],
      value: "Charm Size AR",
    },
  ];

  const attrNameArray = customeFieldsToMap?.map((item) => item.value);

  const filteredObjects = customFields?.edges?.filter((obj: any) =>
    attrNameArray?.includes(obj?.node?.name)
  );

  const engCustomFields: any = englishFilterAttr(filteredObjects);
  const arabicCustomFields = arabicFilterAttr(filteredObjects);

  // const brandObj = {
  //   node: {
  //     name: "Brand",
  //     value: productData?.brand?.name,
  //   },
  // };

  // engCustomFields?.unshift(brandObj);

  const customFieldsToMap =
    appState?.lang === "ar" ? arabicCustomFields : engCustomFields;

  let attributes: any = [];
  attrNameArray?.forEach((item) => {
    const attrObject: { key: string; value: string } = {
      key: item,
      value: item,
    };
    attributes?.push(attrObject);
  });
  
  const dimensionAttrArray = dimensionAttributes?.map((item) => item.value);
  
  const _filteredObjects = customFields?.edges?.filter((obj: any) =>
  dimensionAttrArray?.includes(obj?.node?.name)
  );

  const engDimensionFields: any = englishFilterAttr(_filteredObjects);
  const arabicDimensionFields = arabicFilterAttr(_filteredObjects);

  const dimensionFieldsToMap =
    appState?.lang === "ar" ? arabicDimensionFields : engDimensionFields;

  return customFieldsToMap?.length > 0 || description ? (
    <div className={styles["detail-wrapper"]}>
      {description || arabicDescription?.node?.value ? (
        <div className={`${styles["column"]} ${styles["left-side"]}`}>
          <Heading element="h2" className={`${styles["heading"]}`}>
            {t("designerNote")}
          </Heading>
          <div className={`clamp-fontsize ${styles["detail"]}`}>
            {appState?.lang === "en" ? (
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
            ) : (
              arabicDescription?.node?.value
            )}
          </div>
        </div>
      ) : null}
      {customFieldsToMap?.length > 0 ? (
        <div className={`${styles["column"]} ${styles["right-side"]}`}>
          <Heading element="h2" className={`${styles["heading"]}`}>
            {t("productDetailsH")}
          </Heading>
          <div className={styles["detail-features"]}>
            {customFieldsToMap && customFieldsToMap?.length > 0
              ? customFieldsToMap?.map((currentAttr: any, index: number) => {
                  const {
                    node: { name, value },
                  } = currentAttr;

                  return (
                    <FeatureItem
                      key={index}
                      attrName={
                        customeFieldsToMap?.find((item) => name === item?.value)
                          ?.key
                      }
                      attrValue={value}
                    />
                  );
                })
              : null}
            {dimensionFieldsToMap && dimensionFieldsToMap?.length > 0
              ? dimensionFieldsToMap?.map((currentAttr: any, index: number) => {
                  const {
                    node: { name, value },
                  } = currentAttr;

                  return (
                    <FeatureItem
                      key={index}
                      attrName={name}
                      attrValue={value}
                      dimensionGroup={true}
                    />
                  );
                })
              : null}
            <MandatoryAttributes
              appState={appState}
              productData={productData}
              customeFieldsPDP={customeFieldsPDP}
            />
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
};

const MandatoryAttributes = ({
  productData = {},
  customeFieldsPDP,
  appState,
}: any) => {
  const { t } = useTranslation("common");
  const collectionEng = productData?.customFields?.edges?.find(
    (item: { node: { name: string } }) => item?.node?.name === "Collection"
  );
  const collectionAr = productData?.customFields?.edges?.find(
    (item: { node: { name: string } }) => item?.node?.name === "Collection AR"
  );

  const brandEng = productData?.brand?.name;
  const brandAr = productData?.customFields?.edges?.find(
    (item: { node: { name: string } }) => item?.node?.name === "Brand AR"
  );

  const collection = appState?.lang === "ar" ? collectionAr : collectionEng;
  const brand = appState?.lang === "ar" ? brandAr?.node?.value : brandEng;

  return (
    <>
      <FeatureItem
        attrName={customeFieldsPDP?.Collection}
        attrValue={collection?.node?.value}
      />
      <FeatureItem attrName={customeFieldsPDP?.Brand} attrValue={brand} />
      <FeatureItem attrName={t("Style Number")} attrValue={productData?.sku} />
    </>
  );
};

export default ProductDetail;
