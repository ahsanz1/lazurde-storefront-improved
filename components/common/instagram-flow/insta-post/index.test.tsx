import * as React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import ContextProvider from "lib/context";
import InstagramSinglePost from "./index";

const renderComponent = () => {
  render(
    <ContextProvider>
      <InstagramSinglePost />
    </ContextProvider>
  );
};

test("testing insta post component", () => {
  renderComponent();
  const image = screen.getByAltText("instagram post image");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("alt", "instagram post image");
});
