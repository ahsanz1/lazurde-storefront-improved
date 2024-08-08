import React from "react";
import AccountSuccess from "./index";
import { screen, fireEvent, render } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const renderComponent = () => {
  render(<AccountSuccess />);
};

const renderComponentAR = () => {
  render(<AccountSuccess />);
};
test("Account Success Testing", () => {
  renderComponent();
  const addNewBtn = screen.getByTestId("addNewBtn")
  fireEvent.click(addNewBtn);
  fireEvent.click(screen.getByTestId("addAccBtn"));
});

test("", () => {
  renderComponentAR();
});
