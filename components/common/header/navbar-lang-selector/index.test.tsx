import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import ContextProvider from "lib/context";
import React from "react";
import LangSelector from "./index";
const queryClient = new QueryClient();

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <LangSelector />
      </ContextProvider>
    </QueryClientProvider>
  );
};

describe("testing header", () => {
  test("testing language selector component", () => {
    renderComponent();
  });
});
