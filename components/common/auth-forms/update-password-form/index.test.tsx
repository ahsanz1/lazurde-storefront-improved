/* eslint-disable react/display-name */
import * as React from "react";
import {
  act,
  render,
  waitFor,
  fireEvent,
  screen,
} from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import UpdatePasswordForm from "./index";

jest.mock("axios");

const renderComponent = async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <UpdatePasswordForm />
      </ContextProvider>
    );
  });
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <UpdatePasswordForm />
    </AppContext.Provider>
  );
};

test("update password form testing", async () => {
  await waitFor(() => {
    renderComponent();

    fireEvent.change(screen.getByRole(/old-password/i), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByRole(/new-password/i), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByRole(/confirm-password/i), {
      target: { value: "12345678" },
    });
  });
});

test("update password form Arabic testing", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
