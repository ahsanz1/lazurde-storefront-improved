import * as React from "react";
import { render, act, screen, waitFor } from "@testing-library/react";
import MiniCart from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
jest.mock("axios");
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

const renderComponent = async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <MiniCart />
        </ContextProvider>
      </QueryClientProvider>
    );
  });
};

const renderComponentAR = async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ appState: { lang: "ar" } }}>
          <MiniCart />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });
};

test("Mini Cart Test", async () => {
  await waitFor(() => {
    renderComponent();
  });
});

test("Mini Cart Test arabic version", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
