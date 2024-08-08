import React from "react";
import ContactIR from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <ContactIR />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ContactIR />
    </AppContext.Provider>
  );
};

describe("ContactIR TESTING", () => {
  test("ContactIR testing", () => {
    renderComponent();
  });

  test("ContactIR arabic testing", () => {
    renderComponentAR();
  });
});
