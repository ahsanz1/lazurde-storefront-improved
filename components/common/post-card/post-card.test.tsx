import React from "react";
import PostCard from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <PostCard />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <PostCard />
    </AppContext.Provider>
  );
};

describe("PostCard TESTING", () => {
  test("PostCard testing", () => {
    renderComponent();
  });

  test("PostCard arabic testing", () => {
    renderComponentAR();
  });
});
