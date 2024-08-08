import { currentBrandName } from "lib/utils/constants";
import { AppContext } from "lib/context";
import { useContext, useEffect, useState } from "react";
import { BrandNameTypes } from "lib/types/common";
import { useRouter } from "next/router";

export const useCustomHook = () => {
  const { appState, saveAppState } = useContext(AppContext);

  const updateAppStateBrand = async (brand: BrandNameTypes = "lazurde") => {
    const brandData = currentBrandName(brand, appState?.lang);
    saveAppState({
      ...appState,
      ...brandData,
    });
    return brandData;
  };
  return {
    updateAppStateBrand,
  };
};

export const useLoading = () => {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setisLoading(false);
  }, []);

  return isLoading;
};
