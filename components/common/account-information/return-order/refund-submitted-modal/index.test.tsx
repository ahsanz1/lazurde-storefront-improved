import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import RefundSubmittedModal from "./index";
import ContextProvider, { AppContext } from "lib/context";

const heading = "heading goes here";
const isOpen = true;
const onClose = jest.fn();
const content = "modal content";
const modalHeight = "900px";
jest.mock("axios")

const renderComponent = () => {
  render(
    <ContextProvider>
      <RefundSubmittedModal
        isOpen={isOpen}
        onClose={onClose}
        modalHeight={modalHeight}
        modalClassName={"modalClassName"}
        heading={heading}
        content={content}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <RefundSubmittedModal />
    </AppContext.Provider>
  );
};

test("Refund Submitted Modal Test", () => {
  renderComponent();
  // expect(heading).toBe("heading goes here");
  // expect(isOpen).toBe(true);
  // const headingH = screen.getByTestId("heading");
  // expect(headingH).toBeInTheDocument();
  // const content = screen.getByRole("content");
  // expect(content).toBeInTheDocument();

  // const closeModalBtn = screen.getByTestId("close-modal-btn");
  // expect(closeModalBtn).toBeInTheDocument();
  // fireEvent.click(closeModalBtn);
});
test("render arabic version", () => {
  renderComponentAR();
});
