import React from "react";
import ConfirmOrder from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <ContextProvider>
      <ConfirmOrder loginUser={true} />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ConfirmOrder />
    </AppContext.Provider>
  );
};

test("Confirm Order Testing", () => {
  renderComponent();
  const homePageBtn = screen.getByTestId("homePageBtn");
  fireEvent.click(homePageBtn);
  const accPageBtn = screen.getByTestId("accPageBtn");
  fireEvent.click(accPageBtn);
});

test("", () => {
  renderComponentAR();
});
