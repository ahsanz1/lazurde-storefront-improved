import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import ReturnOrderStaticModals from "./index";
import ContextProvider, { AppContext } from "lib/context";

const setIsModalOpen = jest.fn();
const isStaticContentModal = {
  isCourierCollection: false,
  isStoreDropOff: false,
  isGiftCard: false,
  isTabbyModal: false,
  isPaypalModal: false,
  isCodModal: false,
};
const setIsStaticContentModal = jest.fn();
const setMyReturnComponentActive = jest.fn();
jest.mock("axios");

const renderComponent = () => {
  render(
    <ContextProvider>
      <ReturnOrderStaticModals
        setIsModalOpen={setIsModalOpen}
        isStaticContentModal={isStaticContentModal}
        setIsStaticContentModal={setIsStaticContentModal}
        setMyReturnComponentActive={setMyReturnComponentActive}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ReturnOrderStaticModals />
    </AppContext.Provider>
  );
};

test("return order static Modal Test", async () => {
  await waitFor(async () => {
    renderComponent();

    // const isStoreDropOffonCloseModal = screen.getAllByRole(
    //   "isStoreDropOffonCloseModal"
    // );
    // expect(isStoreDropOffonCloseModal[0]).toBeInTheDocument();
    // fireEvent.click(isStoreDropOffonCloseModal[0]);
  });
});
test("render arabic version", async () => {
  await waitFor(async () => {
    renderComponentAR();
  });
});
