import React from "react";
import SummaryItem from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const removeItem = jest.fn();

const item = "";
const image = {
  src: { url: "/" },
  alt: "alt",
  width: 100,
  height: 100,
};

const renderComponent = () => {
  render(
    <ContextProvider>
      <SummaryItem removeItem={removeItem} item={item} />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <SummaryItem removeItem={removeItem} item={item} />
    </AppContext.Provider>
  );
};

test("Summary Item Testing", () => {
  renderComponent();
  const removeBtn = screen.getByRole("removebtn");
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
});

test("", () => {
  renderComponentAR();
});
