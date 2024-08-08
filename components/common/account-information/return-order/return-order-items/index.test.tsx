import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import React from "react";
import ReturningItems from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

jest.mock("axios");
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

const renderComponent = () => {
  render(
    <ContextProvider>
      <ReturningItems
        // orderItems={orderData?.orders[1]?.items}
        isAllOrderSelected={false}
        setSelectedOrderData={jest.fn()}
        selectedOrderData={selectedOrderData}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ReturningItems />
    </AppContext.Provider>
  );
};

test("return order item Test", async () => {
  await waitFor(async () => {
    renderComponent();
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();

    const returnAllBtn = screen.getByTestId("return-all-btn");
    expect(returnAllBtn).toBeInTheDocument();
    fireEvent.click(returnAllBtn);
  });
});

test("render arabic version", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
