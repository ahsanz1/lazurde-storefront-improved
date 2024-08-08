/* eslint-disable react/display-name */
import * as React from "react";
import UserReviews from "./index";
import { render, screen, waitFor } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

document.documentElement.scrollTo = jest.fn();
jest.mock("axios");
const mockChildComponent = jest.fn();
jest.mock("./product-without-reviews", () => (props: any) => {
  mockChildComponent(props);
  return <div />;
});

const renderComponent = () => {
  render(
    <ContextProvider>
      <UserReviews />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <UserReviews />
    </AppContext.Provider>
  );
};

test("term condition testing", () => {
  waitFor(() => {
    renderComponent();
  });
});

test("term condition arabic testing", () => {
  waitFor(() => {
    renderComponentAR();
  });
});
