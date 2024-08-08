import React, { useContext } from "react";
import Modal from "../ui/modal";
import styles from "./style.module.scss";
import Heading from "../ui/heading";
import { AppContext } from "lib/context";

const UspsMessageModal = ({
  isOpen = false,
  setIsOpen,
  heading,
  content,
}: any) => {
  const { appState } = useContext(AppContext);
  const pointsToMap = content?.[appState?.region];

  return (
    <Modal
      modalBodyClassName={styles["new-address-modal"]}
      modalWidth={"660px"}
      modalHeight={"auto"}
      isOpened={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      bgBluryModal={true}
      modalAnimation="none"
    >
      <div>
        <Heading element="h3">{heading}</Heading>
        <ol className={styles["points"]}>
          {pointsToMap &&
            pointsToMap?.length > 0 &&
            pointsToMap?.map((item: any) => {
              return (
                <>
                  <li dangerouslySetInnerHTML={{ __html: item }}></li>
                </>
              );
            })}
        </ol>
      </div>
    </Modal>
  );
};

export default UspsMessageModal;
