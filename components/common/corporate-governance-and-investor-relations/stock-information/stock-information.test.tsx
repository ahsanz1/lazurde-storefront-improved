import React from "react";
import StockInformation from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <StockInformation />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <StockInformation />
    </AppContext.Provider>
  );
};

describe("StockInformation TESTING", () => {
  test("StockInformation testing", () => {
    renderComponent();
  });

  test("StockInformation arabic testing", () => {
    renderComponentAR();
  });
});
