import React, { useEffect, useState } from "react";
import Header from "../header";
import AnimationWrapper from "../ui/animation-wrapper";
import { BrComponent } from "@bloomreach/react-sdk";
import styles from "./skip-content.module.scss";

const SkipToContentButton = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const [inVisible, setInVIsible] = useState(false);

  const handleSkipToContent = () => {
    setInVIsible(true);
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.tabIndex = -1;
      contentElement.focus();
      setVisible(false);
    }
  };

  useEffect(() => {
    const handleTabClick = (event: any) => {
      if (event.keyCode === 9) {
        setVisible(true);
      }
    };

    document.addEventListener("keydown", handleTabClick);
    return () => {
      document.removeEventListener("keydown", handleTabClick);
    };
  }, []);

  return (
    <div>
      {!inVisible && visible && (
        <button
          onClick={handleSkipToContent}
          className={styles["skip-to-content"]}
          tabIndex={0}
        >
          Skip Header
        </button>
      )}
      {children}
    </div>
  );
};

export default SkipToContentButton;
