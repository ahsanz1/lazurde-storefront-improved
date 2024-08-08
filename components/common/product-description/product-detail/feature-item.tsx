import React, { useContext } from "react";
import styles from "./style.module.scss";
import Label from "components/common/ui/label";
import useTranslation from "next-translate/useTranslation";

interface FeatureItemProps {
  attrName?: string;
  attrValue?: string;
  attributeHeading?: string;
  dimensionGroup?: boolean;
}

const FeatureItem = ({
  attrName = "",
  attrValue = "",
  dimensionGroup = false,
}: FeatureItemProps) => {
  const { t } = useTranslation("common");

  const pandentAttributes =
    attrName === "Pendant Length" ||
    attrName === "Pendant Width" ||
    attrName === "Pendant Depth" ||
    attrName === "Pendant Length AR" ||
    attrName === "Pendant Width AR" ||
    attrName === "Pendant Depth AR";

  const earringAttributes =
    attrName === "Earring Length" ||
    attrName === "Earring Width" ||
    attrName === "Earring Depth" ||
    attrName === "Earring Length AR" ||
    attrName === "Earring Width AR" ||
    attrName === "Earring Depth AR";

  const chainAttributes =
    attrName === "Chain Length" ||
    attrName === "Chain Width" ||
    attrName === "Chain Depth" ||
    attrName === "Chain Length AR" ||
    attrName === "Chain Width AR" ||
    attrName === "Chain Depth AR";

  const ringAttributes =
    attrName === "Ring Length" ||
    attrName === "Ring Width" ||
    attrName === "Ring Depth" ||
    attrName === "Ring Length AR" ||
    attrName === "Ring Width AR" ||
    attrName === "Ring Depth AR";

  const braceletAttributes =
    attrName === "Bracelet Length" ||
    attrName === "Bracelet Width" ||
    attrName === "Bracelet Depth" ||
    attrName === "Bracelet Length AR" ||
    attrName === "Bracelet Width AR" ||
    attrName === "Bracelet Depth AR";

  const dimensions =
    attrName === "Length" ||
    attrName === "Width" ||
    attrName === "Depth" ||
    attrName === "Length AR" ||
    attrName === "Width AR" ||
    attrName === "Depth AR";

  const isDimensionGroup =
    !pandentAttributes &&
    !earringAttributes &&
    !chainAttributes &&
    !ringAttributes &&
    !braceletAttributes &&
    !dimensions;

  return (
    <>
      {isDimensionGroup && attrValue ? (
        <div className={styles["feature-item"]}>
          <Label className={`clamp-fontsize ${styles["title"]}`}>
            {attrName?.split("AR")?.[0]}
          </Label>
          <Label
            className={`clamp-fontsize ${styles["description"]}`}
            style={{
              width:
                attrName == "Diamond" || attrName == "الألماس"
                  ? "75px"
                  : "initial",
            }}
          >
            {attrValue}
          </Label>
        </div>
      ) : null}
      {dimensionGroup ? (
        <>
          {pandentAttributes ? (
            <AttributeDiv
              attributeHeading={t("Pendant Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
          {earringAttributes ? (
            <AttributeDiv
              attributeHeading={t("Earring Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
          {chainAttributes ? (
            <AttributeDiv
              attributeHeading={t("Chain Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
          {ringAttributes ? (
            <AttributeDiv
              attributeHeading={t("Ring Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
          {braceletAttributes ? (
            <AttributeDiv
              attributeHeading={t("Bracelet Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
          {dimensions ? (
            <AttributeDiv
              attributeHeading={t("Dimensions")}
              attrName={attrName}
              attrValue={attrValue}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
};

const AttributeDiv = ({
  attributeHeading,
  attrValue,
  attrName,
}: FeatureItemProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["feature-item"]}>
      <Label className={`clamp-fontsize ${styles["title"]}`}>
        {attributeHeading}
      </Label>
      <div className={`clamp-fontsize ${styles["description"]}`}>
        {attrName?.includes("Length") ? (
          <span>{`${t("length")}: ${attrValue}`}</span>
        ) : null}
        {attrName?.includes("Width") ? (
          <span>{`${t("width")}: ${attrValue}`}</span>
        ) : null}
        {attrName?.includes("Depth") ? (
          <span>{`${t("depth")}: ${attrValue}`}</span>
        ) : null}
      </div>
    </div>
  );
};

export default FeatureItem;
