import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import StoreDropOff from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

jest.mock("axios")
const renderComponent = () => {
  render(
    <ContextProvider>
      <StoreDropOff />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <StoreDropOff />
    </AppContext.Provider>
  );
};

test("store dropOff Modal Test", () => {
  renderComponent();

  // const storeLocatorInput = screen.getByRole("store-locator-input");
  // fireEvent.change(storeLocatorInput, {
  //   target: { value: "store-locator" },
  // });
  // const dropoffInput = screen.getByRole("dropoff-input");
  // fireEvent.change(dropoffInput, {
  //   target: { value: "store-locator" },
  // });
});
test("render arabic version", () => {
  renderComponentAR();
});
