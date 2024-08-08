import React from "react";
import styles from "components/common/storeLocator/storeLocator.module.scss";
import Label from "components/common/ui/label";
import Link from "next/link";

interface StoreEmailPhoneProps {
  selectedStore: { [key: string]: any };
  className?: string;
}

const StoreEmailPhone = ({
  selectedStore,
  className = "",
}: StoreEmailPhoneProps) => {
  const phoneNumberForCall = selectedStore?.phoneNumber?.includes("-")
    ? selectedStore?.phoneNumber?.replaceAll("-", "")
    : selectedStore?.phoneNumber;

  return (
    <div className={`${styles["store-info-div"]} ${styles[className]}`}>
      {selectedStore?.email ? (
        <Label className={styles["email"]}>
          <Link href={`mailto:${selectedStore?.email}`}>
            <a>{selectedStore?.email}</a>
          </Link>
        </Label>
      ) : null}
      {selectedStore?.phoneNumber ? (
        <Label className={styles["phone-number"]}>
          <Link href={`tel:${phoneNumberForCall}`}>
            <a>{selectedStore?.phoneNumber}</a>
          </Link>
        </Label>
      ) : null}
    </div>
  );
};

export default StoreEmailPhone;
