import Button from "components/common/ui/button";
import Input from "components/common/ui/Input";
import { LocationMark } from "components/icons";
import styles from "../store-search/store-search.module.scss";
import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "lib/utils/useWindowSize";
import { desktopScreenSize } from "lib/utils/common";
import useTranslation from "next-translate/useTranslation";

interface StoreSearchProps {
  searchableArray?: any[];
  setSearchedArray?: Function;
  resetSearch?: number;
  defaultValue?: string;
  setSearchInputValue?: Function;
  onSearch?: Function;
  placeHolder?: string;
  mapModalOpen?: boolean;
}

const StoreSearch = ({
  searchableArray,
  setSearchedArray = () => {},
  resetSearch,
  defaultValue = "",
  setSearchInputValue = () => {},
  onSearch = () => {},
  placeHolder = "",
  mapModalOpen = false,
}: StoreSearchProps) => {
  const inputRef = useRef<{ [key: string]: string }>();
  // const inputValueRef = useRef("");
  const [inputValue, setInputValue] = useState("");
  const searchedArrayRef = useRef<any>("");
  const [width] = useWindowSize();

  const getSearchedResult = (value: string): void => {
    const inputVal = value.toLowerCase();
    if (!inputVal) {
      searchedArrayRef.current = "";
      setSearchedArray && setSearchedArray();
      setSearchInputValue && setSearchInputValue();
      setInputValue("");
      return null;
    }

    const searchedArray =
      searchableArray &&
      searchableArray?.filter(
        (item: { locationHeading: string; locationAddress: string }) => {
          const addressString = `${item?.locationHeading} ${item?.locationAddress}`;
          return addressString?.toLowerCase().indexOf(inputVal) > -1;
        }
      );
    searchedArrayRef.current = searchedArray;
    setInputValue(value);
  };

  const submitData = () => {
    setSearchedArray && setSearchedArray(searchedArrayRef.current);
    setSearchInputValue && setSearchInputValue(inputRef.current.value);
  };

  const { t } = useTranslation("common");

  useEffect(() => {
    if (!mapModalOpen || !defaultValue) {
      searchedArrayRef.current = "";
      setSearchedArray && setSearchedArray();
      setSearchInputValue && setSearchInputValue();
      setInputValue("");
      return;
    }
    if (!searchableArray && searchableArray?.length < 1) return;
    getSearchedResult(defaultValue);
    submitData();
  }, [mapModalOpen]);

  useEffect(() => {
    getSearchedResult(defaultValue);
    submitData();
  }, [searchableArray]);

  useEffect(() => {
    if (inputRef && inputRef?.current) {
      inputRef.current.value = "";
    }
  }, [resetSearch]);

  return (
    <div className={styles["main-store-search"]}>
      <div className={styles["div-input"]}>
        <Input
          inputRef={inputRef}
          showLabel={true}
          label={t("Search by Address")}
          inputIcon={<LocationMark />}
          value={inputValue}
          placeHolder={placeHolder}
          onChange={(e) => {
            getSearchedResult(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              inputRef.current.value && submitData();
              inputRef.current.value && onSearch && onSearch();
            }
          }}
        ></Input>
      </div>
      <div className={styles["div-button"]}>
        <Button
          buttonText={t("search")}
          buttonSize={width > desktopScreenSize ? "sm" : "xxs"}
          onClick={() => {
            inputRef.current.value && submitData();
            inputRef.current.value && onSearch && onSearch();
          }}
          style={{
            height: "40px",
          }}
        ></Button>
      </div>
    </div>
  );
};

export default StoreSearch;
