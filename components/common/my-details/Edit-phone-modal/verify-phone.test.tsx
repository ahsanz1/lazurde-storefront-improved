import React from "react";
import { screen, render, fireEvent, act } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import VerifyPhoneDetails from "./verify-phone-modal";

const closeModalPhone = jest.fn();

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const renderComponent = async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <VerifyPhoneDetails editPhoneModal={true} />
      </ContextProvider>
    );
  });
};

test("Mydetailphone", async () => {
  renderComponent();
  // const saveButtonn = screen.getByTestId("continue");
  // expect(saveButtonn).toBeInTheDocument();
  // fireEvent.click(saveButtonn);
  // const crossBtn = screen.getByRole("crossBtn");
  // expect(crossBtn).toBeInTheDocument();
  // fireEvent.click(crossBtn);
  // const heading = screen.getByRole("Heading");
  // expect(heading).toBeInTheDocument();
});

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <VerifyPhoneDetails editPhoneModal={true} />
    </AppContext.Provider>
  );
};

describe("Mydetailphone", () => {
  test("Mydetailphone props", () => {
    renderComponentAR();
    // const saveButtonn = screen.getByTestId("continue");
    // expect(saveButtonn).toBeInTheDocument();
    // fireEvent.click(saveButtonn);
    // const crossBtn = screen.getByRole("crossBtn");
    // expect(crossBtn).toBeInTheDocument();
    // fireEvent.click(crossBtn);
    // const heading = screen.getByRole("Heading");
    // expect(heading).toBeInTheDocument();
  });
});
