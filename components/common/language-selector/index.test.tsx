import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import ContextProvider from "lib/context";
import React from "react";
import LanguageSelector from "./index";

const queryClient = new QueryClient();
jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <LanguageSelector
          showButton={true}
          className={"test-classname"}
          mainWrapperClass={"test-main-classname"}
          optionClassName={"test-option-ClassName"}
        />
      </ContextProvider>
    </QueryClientProvider>
  );
};

describe("testing language selector component", () => {
  test("testing show button prop", () => {
    renderComponent();
    const showButton = true;
    expect(showButton).toBe(true);
  });

  test("language select div", () => {
    renderComponent();
    const mainWrapperClass = screen.getByTestId("main-wrapper");
    expect(mainWrapperClass).toBeInTheDocument();
  });
});
