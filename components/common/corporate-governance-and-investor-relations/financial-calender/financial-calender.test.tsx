import React from "react";
import FinancialCalender from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <FinancialCalender />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <FinancialCalender />
    </AppContext.Provider>
  );
};

describe("FinancialCalender TESTING", () => {
  test("FinancialCalender testing", () => {
    renderComponent();
  });

  test("FinancialCalender arabic testing", () => {
    renderComponentAR();
  });
});
