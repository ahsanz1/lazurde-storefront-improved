import React from "react";
import OrderDetails from "./index";
import { screen, render } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
jest.mock("@react-pdf/renderer", () => ({
  BlobProvider: () => {
    return <div></div>;
  },
}));
jest.mock("../order-invoice", () => ({
  OrderInvoice: () => {
    return <div></div>;
  },
}));

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const setActiveComponent = jest.fn();
const orderObject = {
  orderId: "677-078889-0987",
};
const setOrderObject = jest.fn();
const isOrderHistoryActive = false;
const isReturnItems = false;
const myReturnTabActive = jest.fn();
const setIsStaticContentModal = jest.fn();
const isStaticContentModal = {
  isCourierCollection: false,
  isStoreDropOff: false,
  isGiftCard: false,
  isTabbyModal: false,
  isPaypalModal: false,
  isCodModal: false,
};

const renderComponent = () => {
  <ContextProvider>
    <OrderDetails
      setActiveComponent={setActiveComponent}
      orderObject={orderObject}
      setOrderObject={setOrderObject}
      isOrderHistoryActive={isOrderHistoryActive}
      isReturnItems={isReturnItems}
      myReturnTabActive={myReturnTabActive}
      isStaticContentModal={isStaticContentModal}
      setIsStaticContentModal={setIsStaticContentModal}
    />
  </ContextProvider>;
};

const renderComponentAR = () => {
  <AppContext.Provider value={{ appState: { lang: "ar" } }}>
    <OrderDetails />
  </AppContext.Provider>;
};

test("Order Details Testing", () => {
  renderComponent();
});

test("Order Details Testing arabic", () => {
  renderComponentAR();
});
