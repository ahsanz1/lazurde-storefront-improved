import React from "react";
import IRHomePage from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <IRHomePage />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <IRHomePage />
    </AppContext.Provider>
  );
};

describe("IRHomePage TESTING", () => {
  test("IRHomePage testing", () => {
    renderComponent();
  });

  test("IRHomePage arabic testing", () => {
    renderComponentAR();
  });
});
