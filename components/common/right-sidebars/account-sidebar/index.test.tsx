import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AccountSidebar from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <AccountSidebar />
      </ContextProvider>
    </QueryClientProvider>
  );
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <AccountSidebar />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

test("account sidebar Testing", () => {
  renderComponent();
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
  const subheading = screen.getByTestId("subheading");
  expect(subheading).toBeInTheDocument();
});

test("account sidebar arabic version Testing", () => {
  renderComponentAR();
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
  const subheading = screen.getByTestId("subheading");
  expect(subheading).toBeInTheDocument();
});
