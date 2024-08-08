import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CourierCollection from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock("axios")
const renderComponent = () => {
  render(
    <ContextProvider>
      <CourierCollection />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <CourierCollection />
    </AppContext.Provider>
  );
};

test("courier collection Modal Test", () => {
  renderComponent();

  // const courierInput = screen.getByRole("courier-input");
  // fireEvent.change(courierInput, {
  //   target: { value: "John" },
  // });
});
test("render arabic version", () => {
  renderComponentAR();
});
