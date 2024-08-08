import React from "react";
import EmailSubscription from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <EmailSubscription />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <EmailSubscription />
    </AppContext.Provider>
  );
};

describe("EmailSubscription TESTING", () => {
  test("EmailSubscription testing", () => {
    renderComponent();
  });

  test("EmailSubscription arabic testing", () => {
    renderComponentAR();
  });
});
