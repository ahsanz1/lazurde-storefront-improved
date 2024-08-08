import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ShipmentTypeModal from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

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
jest.mock("axios")

const renderComponent = () => {
  render(
    <ContextProvider>
      <ShipmentTypeModal
        isOpen={isOpen}
        onClose={onClose}
        orderId={"678-8789-8788"}
        selectedOrderData={selectedOrderData}
        setIsModalOpen={setIsModalOpen}
        isStaticContentModal={isStaticContentModal}
        setIsStaticContentModal={setIsStaticContentModal}
        setMyReturnComponentActive={setMyReturnComponentActive}
        setCurrentCompActive={jest.fn()}
        setIsReturnOrderActive={jest.fn()}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ShipmentTypeModal />
    </AppContext.Provider>
  );
};

test("shipment Modal Test", () => {
  renderComponent();
  // const crossClick = screen.getByRole("cross-click");
  // expect(crossClick).toBeInTheDocument();

  // const submitBtn = screen.getByTestId("submit-btn");
  // expect(submitBtn).toBeInTheDocument();
  // fireEvent.click(submitBtn);
});

test("shipment exit modal Test", () => {
  renderComponent();
  // const crossClick = screen.getByRole("cross-click");
  // expect(crossClick).toBeInTheDocument();
  // fireEvent.click(crossClick);
  // const exitModalClick = screen.getByTestId("exit-modal-click");
  // expect(exitModalClick).toBeInTheDocument();
  // fireEvent.click(exitModalClick);
});

test("render arabic version", () => {
  renderComponentAR();
});
