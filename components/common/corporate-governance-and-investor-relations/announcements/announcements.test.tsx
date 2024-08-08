import React from "react";
import Announcements from "./index";
import { render } from "@testing-library/react";
import { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <Announcements />
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <Announcements />
    </AppContext.Provider>
  );
};

describe("Announcements TESTING", () => {
  test("Announcementstesting", () => {
    renderComponent();
  });

  test("Announcements arabic testing", () => {
    renderComponentAR();
  });
});
