/* eslint-disable react/display-name */
import * as React from "react";
import { render, screen, act, fireEvent, waitFor } from "@testing-library/react";
import ContextProvider from "lib/context";
import InstaTokenFlow from "./index";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const renderComponent = async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <InstaTokenFlow />
      </ContextProvider>
    );
  });
};

test("testing insta token flow", async () => {
  await waitFor(() => {
    renderComponent();
    const note = screen.getByRole("note");
    expect(note).toBeInTheDocument();
    const noteTwo = screen.getByRole("roleTwo");
    expect(noteTwo).toBeInTheDocument();

    const inputValue = "12";
    fireEvent.change(screen.getByRole(/textInput/i), {
      target: { value: inputValue },
    });
    fireEvent.click(screen.getByText(/generate token/i));
    const copyBtn = screen.getByTestId("copy-btn");
    expect(copyBtn).toBeInTheDocument();
  });
});
