import React from "react";
import ArchiveData from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <ArchiveData />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ArchiveData />
    </AppContext.Provider>
  );
};

describe("ArchiveData TESTING", () => {
  test("ArchiveData testing", () => {
    renderComponent();
  });

  test("ArchiveData arabic testing", () => {
    renderComponentAR();
  });
});
