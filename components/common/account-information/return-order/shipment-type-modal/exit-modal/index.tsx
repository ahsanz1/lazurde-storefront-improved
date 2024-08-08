import React from "react";
import styles from "../style.module.scss";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button";
import useTranslation from "next-translate/useTranslation";

interface ExitShipmentModalProps {
  onExitClick?: Function;
}

const ExitShipmentModal = ({
  onExitClick = () => {},
}: ExitShipmentModalProps): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["modal-content"]}>
      <Heading element="h3" className={styles["heading"]}>
        {t("Exit Returns")}
      </Heading>
      <Label className={styles["refund-content"]}>{t("ExitDetail")}</Label>
      <div className={styles["close-refund-modal"]}>
        <Button
          buttonText={t("exit")}
          buttonSize="lr"
          onClick={() => {
            onExitClick();
          }}
          testId="exit-modal-click"
        />
      </div>
    </div>
  );
};

export default ExitShipmentModal;
