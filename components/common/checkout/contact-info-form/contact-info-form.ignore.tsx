import React from "react";
import ContactInfoForm from "./index";
import { screen, render } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const renderComponent = () => {
  render(
    <ContextProvider>
      <ContactInfoForm />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ContactInfoForm />
    </AppContext.Provider>
  );
};

test("Contact Info Form Testing", () => {
  renderComponent();
});

test("", () => {
  renderComponentAR();
});
