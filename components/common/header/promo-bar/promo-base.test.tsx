import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import PromoBar from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <PromoBar />
      </ContextProvider>
    </QueryClientProvider>
  );
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{
          appState: { lang: "ar" },
          setSearchWrapperPosition: jest.fn(),
        }}
      >
        <PromoBar />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

describe("Promo Bar Tests", () => {
  test("prop test: title", () => {
    renderComponent();

    // const title = screen.getByText(/Promo Bar Title/i);
    // expect(title).toBeInTheDocument();
  });

  test("prop test: link text", () => {
    renderComponent();

    // const title = screen.getByText(/Promo Link Text/i);
    // expect(title).toBeInTheDocument();
  });

  test("prop test: link", () => {
    renderComponent();

    // expect(document.querySelector("a").getAttribute("href")).toBe(
    //   "/page-change"
    // );
  });

  // test("button test", () => {
  //   renderComponent();
  //   const promobar = screen.getByTestId("promo-div");
  //   // expect(promobar).toHaveAttribute("data-visible", "false");

  //   const button = screen.getByRole("button");
  //   fireEvent.click(button);

  //   // expect(promobar).toHaveAttribute("data-visible", "true");
  // });

  test("resize test", () => {
    act(() => {
      renderComponent();
      resizeWindow(375, 600);
      // const title = screen.getByText(/mobile text/i);
      // expect(title).toBeInTheDocument();
    });
  });

  test("render arabic version", () => {
    renderComponentAR();
  });
});
