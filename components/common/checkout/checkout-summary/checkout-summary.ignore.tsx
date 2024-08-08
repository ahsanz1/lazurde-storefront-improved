import React from "react";
import CheckoutSummary from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <ContextProvider>
      <CheckoutSummary />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <CheckoutSummary />
    </AppContext.Provider>
  );
};

test("Checkout Summary Testing", () => {
  renderComponent();
  const summeryHeading = screen.getByRole("summary-heading");
  expect(summeryHeading).toBeInTheDocument();
  const subHeading = screen.getByRole("subHeading");
  expect(subHeading).toBeInTheDocument();
  const shppingText = screen.getByRole("shpping-text");
  expect(shppingText).toBeInTheDocument();
  const tax = screen.getByRole("tax");
  expect(tax).toBeInTheDocument();
  const totalPay = screen.getByRole("totalPay");
  expect(totalPay).toBeInTheDocument();
  const needHelp = screen.getByRole("needhelp");
  expect(needHelp).toBeInTheDocument();
});

test("Checkout Summary Testing Arabic", () => {
  renderComponentAR();
});
