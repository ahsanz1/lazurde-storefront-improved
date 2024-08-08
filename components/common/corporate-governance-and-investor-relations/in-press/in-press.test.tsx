import React from "react";
import InPress from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <InPress />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <InPress />
    </AppContext.Provider>
  );
};

describe("InPress TESTING", () => {
  test("InPress testing", () => {
    renderComponent();
  });

  test("InPress arabic testing", () => {
    renderComponentAR();
  });
});
