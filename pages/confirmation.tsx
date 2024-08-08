import React, { FC, useContext, useEffect } from "react";
import { PageProps } from "lib/types/common";
import AppContentWrapper from "components/common/app-content-wrapper";
import { AppContext } from "lib/context";
import Confirmation from "components/common/confirmation";
import BloomreachOtherPixel from "components/common/bloomreach-pixel/other-page";

const ConfirmationPage: FC<PageProps> = () => {
  const { setCartData, setCartId } = useContext(AppContext);

  useEffect(() => {
    setCartData(null);
    window.localStorage.removeItem("cartId");
    window.sessionStorage.removeItem("cartData");
    setCartId(null);
  }, []);

  return (
    <>
      <AppContentWrapper>
        <div
          className={"component-container"}
          style={{ background: "#f2f2f2" }}
        >
          <Confirmation />
          <BloomreachOtherPixel pageTitle="Confirmation" pageType="other" />
        </div>
      </AppContentWrapper>
    </>
  );
};

export default ConfirmationPage;
