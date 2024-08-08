import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ExitShipmentModal from "./index";
import ContextProvider, { AppContext } from "lib/context";

const isOpen = true;
const onClose = jest.fn();
const setIsModalOpen = jest.fn();
const setIsStaticContentModal = jest.fn();
const setMyReturnComponentActive = jest.fn();
const selectedOrderData = {
  181: {
    id: "244",
    imageSrc: "/dummy.png",
    brand: "missL",
    orderLineItemId: "11",
    returnQuantity: "23",
    reasonCode: "",
    subReasonCode: "",
    policyOveride: false,
    returnAmount: "1100",
  },
  182: {
    id: "243",
    imageSrc: "/dummy.png",
    brand: "Waves",
    orderLineItemId: "1",
    returnQuantity: "2",
    reasonCode: "",
    subReasonCode: "",
    policyOveride: false,
    returnAmount: "1100",
  },
};
const isStaticContentModal = {
  isCourierCollection: false,
  isStoreDropOff: false,
  isGiftCard: false,
  isTabbyModal: false,
  isPaypalModal: false,
  isCodModal: false,
};
jest.mock("axios");

const renderComponent = () => {
  render(
    <ContextProvider>
      <ExitShipmentModal onExitClick={jest.fn()} />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ExitShipmentModal />
    </AppContext.Provider>
  );
};

test("shipment exit modal Test", () => {
  renderComponent();
  const exitModalClick = screen.getByTestId("exit-modal-click");
  expect(exitModalClick).toBeInTheDocument();
  fireEvent.click(exitModalClick);
});

test("render arabic version", () => {
  renderComponentAR();
});
