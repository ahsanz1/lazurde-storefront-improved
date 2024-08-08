import React from "react";
import FactSheet from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <FactSheet />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <FactSheet />
    </AppContext.Provider>
  );
};

describe("FactSheet TESTING", () => {
  test("FactSheet testing", () => {
    renderComponent();
  });

  test("FactSheet arabic testing", () => {
    renderComponentAR();
  });
});
