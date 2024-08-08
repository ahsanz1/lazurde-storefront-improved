/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useContext } from "react";
import { OptionProps } from "lib/types/mobile-header";
import styles from "../style.module.scss";
import Image from "next/image";
import { AppContext } from "lib/context";
import AnimationWrapper from "components/common/ui/animation-wrapper";
// import UpdatedLanguageSelector from "components/common/right-sidebars/language-sidebar/updated-lang-selector";
import dynamic from "next/dynamic";

interface LanguageSelectorProps {
  options?: OptionProps[];
  onChange?: Function;
  defaultValue?: string;
  iconWidth?: string | number;
  selectedVal?: any;
  setSelectedVal?: Function;
  isOpen?: boolean;
  setIsOpen?: Function;
  closeMenu?: Function;
}

const DynamicUpdatedLanguageSelector = dynamic(
  () =>
    import(
      "components/common/right-sidebars/language-sidebar/updated-lang-selector"
    )
);

const LanguageSelector = ({
  options = [{ label: "label", img: "", value: "value", langTitle: "" }],
  onChange,
  defaultValue,
  iconWidth = "16",
  selectedVal = {},
  setSelectedVal,
  isOpen = false,
  setIsOpen = () => {},
  closeMenu = () => {},
}: LanguageSelectorProps): JSX.Element => {
  const dropdown = useRef(null);
  const { appState } = useContext(AppContext);
  useEffect(() => {
    setSelectedVal({ label: "", img: "", value: defaultValue, langTitle: "" });
  }, [defaultValue]);

  useEffect(() => {}, [selectedVal]);

  return (
    <div
      key={selectedVal?.value}
      ref={dropdown}
      tabIndex={0}
      className={`${styles["mobile-header__lang-dropdown"]} ${styles["sibebar-open"]}`}
      data-open={isOpen}
    >
      <AnimationWrapper
        animationName={isOpen ? "slide-up" : "none"}
        lazyLoad={true}
        animationWrapperDivStyle={{
          display: "none",
        }}
      >
        <span
          className={`${styles["mobile-header__lang-selected"]}`}
          style={{
            display: "none",
          }}
        >
          <div className={styles["mobile-header__lang-left-side"]}>
            {selectedVal?.img && (
              <Image
                src={selectedVal?.img || "/flag-uae.svg"}
                width={iconWidth || 16}
                height={iconWidth || 16}
                alt="image"
                layout="fixed"
              />
            )}
            <span>{selectedVal?.label}</span>
          </div>
          <div className={styles["mobile-header__lang-right-side"]}>
            {selectedVal?.langTitle && <span>{selectedVal?.langTitle}</span>}
          </div>
        </span>
        <ul
          style={{
            display: "none",
          }}
          className={styles["mobile-header__lang-options"]}
        >
          {options?.map((opData, index) => {
            selectedVal?.value === opData.value &&
              selectedVal?.label === "" &&
              setSelectedVal({ ...opData });
            return (
              <li
                key={`${selectedVal?.value}-${index}`}
                className={`${styles["option"]}`}
                data-selected={selectedVal?.value === opData.value}
                onClick={() => {
                  if (selectedVal?.value === opData.value) {
                    setIsOpen(false);
                  } else {
                    setSelectedVal(opData);
                    setIsOpen(false);
                    onChange(opData);
                  }
                }}
              >
                <a>
                  <span>
                    {opData?.img && (
                      <span className={styles["country-icon"]}>
                        <Image
                          src={opData?.img || "/flag-uae.svg"}
                          width={iconWidth || 16}
                          height={iconWidth || 16}
                          alt="image"
                          layout="fixed"
                        />
                      </span>
                    )}
                    <span>{opData?.label}</span>
                  </span>
                  <span>{opData?.langTitle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </AnimationWrapper>
      {isOpen ? (
        // <UpdatedLanguageSelector showButton={true} closeSideBar={closeMenu} />
        <DynamicUpdatedLanguageSelector
          showButton={true}
          closeSideBar={closeMenu}
        />
      ) : null}
    </div>
  );
};

export default LanguageSelector;
