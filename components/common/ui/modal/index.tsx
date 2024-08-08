import React, { useState, useEffect, useRef } from "react";
import CrossSmall from "components/icons/CrossSmall";
import styles from "./modal.module.scss";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import AnimationWrapper from "../animation-wrapper";
import { createPortal } from "react-dom";
interface ModalProps {
  className?: string;
  modalBodyClassName?: string;
  isOpened?: boolean;
  children?: JSX.Element | string;
  onClose?: Function;
  crossBtn?: boolean;
  bgBluryModal?: boolean;
  modalHeading?: string;
  modalWidth?: string;
  modalHeight?: string;
  divModalBody?: string;
  divTopBar?: string;
  divModalRight?: string;
  modalWidthMobile?: string;
  modalHeightMobile?: string;
  overlayClass?: string;
  role?: string;
  forceLoadChildren?: boolean;
  hasAnimation?: boolean;
  modalAnimation?: any;
}

const Modal = ({
  className = "",
  modalBodyClassName = "",
  divModalBody = "",
  isOpened = false,
  children,
  onClose = () => {},
  crossBtn = true,
  bgBluryModal = false,
  modalHeading = "",
  modalWidth = "100%",
  modalHeight = "100%",
  modalWidthMobile = "",
  modalHeightMobile = "",
  divTopBar = "",
  divModalRight = "",
  overlayClass = "",
  role = "",
  forceLoadChildren = false,
  hasAnimation = true,
  modalAnimation = "slide-up",
}: ModalProps): JSX.Element => {
  const [openState, setOpenState] = useState(isOpened);
  const [loadForce, setLoadForce] = useState<any>(false);
  const [size] = useWindowSize();
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.querySelector("#portal");
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  useEffect(() => {
    forceLoadChildren && setLoadForce(true);
    if (isOpened) {
      document.documentElement.style.overflowY = "hidden";
      // const html = document.querySelector("html");
      // html.style.overflow = "hidden";
    }
    setOpenState(isOpened);

    return () => {
      document.documentElement.style.overflowY = "auto";
      // const html = document.querySelector("html");
      // html.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <>
      {portalRef.current
        ? createPortal(
            <>
              <div
                role={"overlay"}
                className={`${styles["overlay"]} ${overlayClass}`}
                data-open={openState}
                data-is-blurry={bgBluryModal}
              />
              <div
                className={`${styles["div-modal-main"]} ${className}`}
                data-open={openState}
                onPointerDown={() => {
                  onClose && onClose();
                }}
                role={role}
              >
                <div
                  className={`${styles["modal-body"]} ${modalBodyClassName}`}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                  style={{
                    width:
                      size > desktopScreenSize ? modalWidth : modalWidthMobile,
                    height:
                      size > desktopScreenSize
                        ? modalHeight
                        : modalHeightMobile,
                  }}
                >
                  <div className={`${styles["div-top-bar"]} ${divTopBar}`}>
                    <div className={styles["div-left"]}>
                      {modalHeading ? (
                        <div className={styles["div-modal-heading"]}>
                          {modalHeading}
                        </div>
                      ) : null}
                    </div>
                    {crossBtn ? (
                      <div
                        className={`${styles["div-right"]} ${divModalRight}`}
                      >
                        <CrossSmall
                          width={"12px"}
                          height={"12px"}
                          onClick={() => {
                            onClose && onClose();
                          }}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div
                    className={`${styles["div-modal-body"]} ${divModalBody}`}
                  >
                    {(loadForce || isOpened) && (
                      <AnimationWrapper
                        animationName={hasAnimation ? modalAnimation : "none"}
                      >
                        {children}
                      </AnimationWrapper>
                    )}
                  </div>
                </div>
              </div>
            </>,
            portalRef.current
          )
        : null}
    </>
  );
};

export default Modal;
