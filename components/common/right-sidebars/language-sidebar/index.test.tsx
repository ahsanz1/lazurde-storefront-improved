import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSideBar from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <LanguageSideBar />
      </ContextProvider>
    </QueryClientProvider>
  );
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{ appState: { lang: "ar" }, saveAppState: jest.fn() }}
      >
        <LanguageSideBar />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

test("account sidebar Testing", () => {
  renderComponent();
});

test("account sidebar arabic version Testing", () => {
  renderComponentAR();
});
