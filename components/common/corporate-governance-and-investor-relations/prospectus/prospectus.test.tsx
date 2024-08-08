import React from "react";
import Prospectus from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <Prospectus />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <Prospectus />
    </AppContext.Provider>
  );
};

describe("Prospectus TESTING", () => {
  test("Prospectus testing", () => {
    renderComponent();
  });

  test("Prospectus arabic testing", () => {
    renderComponentAR();
  });
});
