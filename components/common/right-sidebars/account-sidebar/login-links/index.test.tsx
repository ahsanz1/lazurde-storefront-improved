import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoggedInlinks from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const userName = "john";
const arabicUserName = "name in arabic";
const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <LoggedInlinks userName={userName} arabicUserName={arabicUserName} />
      </ContextProvider>
    </QueryClientProvider>
  );
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <LoggedInlinks userName={userName} arabicUserName={arabicUserName} />
    </AppContext.Provider>
    </QueryClientProvider>
  );
};

test("account sidebar inner sec Testing", () => {
  renderComponent();
  const username = screen.getByTestId("username");
  expect(username).toBeInTheDocument();
});

test("account sidebar inner sec arabic version Testing", () => {
  renderComponentAR();
});
