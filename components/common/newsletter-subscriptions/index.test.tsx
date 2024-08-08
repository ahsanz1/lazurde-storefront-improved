import { render, screen } from "@testing-library/react";
import ContextProvider from "lib/context";
import React from "react";
import NewsSubscriptions from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <NewsSubscriptions />
      </ContextProvider>
    </QueryClientProvider>
  );
};

describe("NewsSubscriptions", () => {
  test("NewsSubscriptions props", () => {
    renderComponent();
  });
});
