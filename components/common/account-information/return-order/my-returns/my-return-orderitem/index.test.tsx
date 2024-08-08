/* eslint-disable react/display-name */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ReturnOrderItem from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

jest.mock("@react-pdf/renderer", () => ({
  __esModule: true,
  BlobProvider: () => {
    return <div></div>;
  },
}));

jest.mock("components/common/order-invoice", () => ({
  __esModule: true,
  default: (): null => {
    return null;
  },
}));

jest.mock("axios");
const index = 0;
const handleOrderDetail = jest.fn();
const order = {
  status: "ORDER_COLLECTION_FAILED",
  items: [
    {
      itemId: 90,
    },
    {
      itemId: 910,
    },
  ],
};
const status = "ORDER_COLLECTION_FAILED";
const orderCreatedDate = "2022-16-9Tssas";
const setIsShipmentModalOpen = jest.fn();
const setOrderData = jest.fn();
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
  render(
    <ContextProvider>
      <ReturnOrderItem
        singleOrderData={order}
        handleOrderDetail={handleOrderDetail}
        status={status}
        orderCreatedDate={orderCreatedDate}
        setIsShipmentModalOpen={setIsShipmentModalOpen}
        setOrderData={setOrderData}
        setIsStaticContentModal={setIsStaticContentModal}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ReturnOrderItem
        singleOrderData={order}
        handleOrderDetail={handleOrderDetail}
        status={status}
        orderCreatedDate={orderCreatedDate}
        setIsShipmentModalOpen={setIsShipmentModalOpen}
        setOrderData={setOrderData}
        setIsStaticContentModal={setIsStaticContentModal}
      />
    </AppContext.Provider>
  );
};

test("order item Test", async () => {
  waitFor(() => {
    renderComponent();

    const returnDateBtn = screen.getByTestId("returnDateBtn");
    expect(returnDateBtn).toBeInTheDocument();
    fireEvent.click(returnDateBtn);

    const viewBtn = screen.getByTestId("view-btn");
    expect(viewBtn).toBeInTheDocument();
    fireEvent.click(viewBtn);
  });
});

test("render arabic version", async () => {
  waitFor(() => {
    renderComponentAR();
  });
});
