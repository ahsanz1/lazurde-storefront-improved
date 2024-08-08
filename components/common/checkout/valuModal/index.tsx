import React, { FC, useEffect } from "react";
import Modal from "components/common/ui/modal";
import { VALU_IFRAME_ID } from "general-config";
import styles from "./valu-modal.module.scss";

interface valuProps {
  isOpened?: boolean;
  paymentToken?: string;
  setValuModalData?: Function;
}

const ValuModal: FC<valuProps> = ({
  isOpened,
  paymentToken,
  setValuModalData,
}): JSX.Element => {
  useEffect(() => {
    const frame = document.getElementsByTagName("object")[0];
    if (frame) {
      // for (const attr of frame.attributes) {
      //   console.log("asdasd", `${attr.name} -> ${attr.value}`);
      // }
      // console.log("asdasd", frame?.contentWindow.document)
    }
  }, [isOpened]);
  return (
    <Modal
      isOpened={isOpened}
      bgBluryModal={true}
      onClose={() => setValuModalData({ showModal: false, paymentToken: "" })}
    >
      <object
        className={styles["valu-iframe"]}
        data={`https://accept.paymobsolutions.com/api/acceptance/iframes/${VALU_IFRAME_ID}?payment_token=${paymentToken}`}
        // frameBorder={0}
      ></object>
    </Modal>
  );
};

export default ValuModal;
