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
import SignInForm from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

jest.mock("axios");

const renderComponent = async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <SignInForm
            className={"class-name"}
            inputDivClass={"input-class-name"}
            isCheckout={false}
          />
        </ContextProvider>
      </QueryClientProvider>
    );
  });
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <SignInForm
          className={"class-name"}
          inputDivClass={"input-class-name"}
          isCheckout={false}
        />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

test("signin form testing", async () => {
  await waitFor(() => {
    renderComponent();

    fireEvent.change(screen.getByRole(/email/i), {
      target: { value: "ali@gmail.com" },
    });
    fireEvent.change(screen.getByRole("password"), {
      target: { value: "12345678" },
    });

    const passwordIcon = screen.getByRole("show-password-icon");
    expect(passwordIcon).toBeInTheDocument();
    fireEvent.click(passwordIcon);

    const forgetPassword = screen.getByTestId("forget-password");
    expect(forgetPassword).toBeInTheDocument();
    fireEvent.click(forgetPassword);
  });
});

test("signin form Arabic testing", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
