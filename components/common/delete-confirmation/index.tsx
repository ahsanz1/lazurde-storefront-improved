import React, { FC } from "react";
import Button from "components/common/ui/button/index";
import Modal from "components/common/ui/modal/index";
import styles from "./delete-confirmation-modal.module.scss";

import useTranslation from "next-translate/useTranslation";

interface ItemType {
  entityId?: number;
}

interface DeleteConfirmationTypes {
  item?: ItemType;
  isOpen?: boolean;
  setIsOpen?: Function;
  removeItem?: Function;
  setRemoving?: Function;
  heading?: string;
  content?: string;
  showCancelDeleteBtns?: boolean;
  className?: string;
  children?: any;
}

const DeleteConfirmationModal: FC<DeleteConfirmationTypes> = ({
  item = {},
  isOpen = false,
  setIsOpen = () => {},
  removeItem = () => {},
  setRemoving = () => {},
  heading = "",
  content = "",
  showCancelDeleteBtns = true,
  className = "",
  children,
}): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <Modal
      modalBodyClassName={styles["delete-modal"]}
      modalWidth={"562px"}
      modalHeight={"253px"}
      isOpened={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      bgBluryModal={true}
      modalAnimation="none"
    >
      <>
        <div
          key={`${isOpen}`}
          className={`${styles[className]} ${styles["content-wrapper"]}`}
        >
          {children ? (
            <>{children}</>
          ) : (
            <>
              <div key={`${isOpen}`} className={styles["div-form-heading"]}>
                <h2>{heading}</h2>
              </div>
              {content ? (
                <div className={styles["div-form-heading"]}>{content}</div>
              ) : null}
              {showCancelDeleteBtns ? (
                <div className={styles["div-button"]}>
                  <>
                    <Button
                      testId={"cancelDelete"}
                      buttonSize={"xsm"}
                      buttonStyle="underline"
                      buttonText={t("Cancel")}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    ></Button>
                    <Button
                      testId={"acceptDelete"}
                      buttonSize={"lr"}
                      buttonText={t("Delete")}
                      onClick={async () => {
                        setIsOpen(false);
                        setRemoving(true);
                        await removeItem(item);
                      }}
                    ></Button>
                  </>
                </div>
              ) : null}
            </>
          )}
        </div>
      </>
    </Modal>
  );
};

export default DeleteConfirmationModal;
