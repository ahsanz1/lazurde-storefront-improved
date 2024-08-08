import { render, screen } from "@testing-library/react";
import ContextProvider from "lib/context";
import React from "react";
import NewsletterSignup from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const imageProps = {
  url: "/",
  altText: "image",
};
const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <NewsletterSignup
        backgroundImage={imageProps}
        bannerBodyText={"Banner Body Text"}
        bannerText={"Banner Text"}
        heading={"Heading"}
        upperText={"Upper Text"}
        lowerText={"Lower Text"}
      />
    </ContextProvider>
    </QueryClientProvider>
  );
};

describe("Newsletter Signup ", () => {
  test("Newsletter Banner input props", () => {
    renderComponent();
  });
});
