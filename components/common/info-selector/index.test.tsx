import * as React from "react";
import { render, act } from "@testing-library/react";
import InfoSelector from "./index";
import ContextProvider, { AppContext } from "lib/context";

const renderComponentAR = async () => {
  await act(async () => {
    render(
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <InfoSelector
          className="className"
          mainWrapperClass="main-wrapper-class"
          optionClassName="optionClassName"
          setValue={jest.fn()}
          currentObject="currentObject"
          scriptId={jest.fn()}
        />
      </AppContext.Provider>
    );
  });
};

test("info selector testing", () => {
  render(
    <ContextProvider>
      <InfoSelector
        className="className"
        mainWrapperClass="main-wrapper-class"
        optionClassName="optionClassName"
        setValue={jest.fn()}
        currentObject="currentObject"
        scriptId={jest.fn()}
      />
    </ContextProvider>
  );
});

test("info selector arabic testing", () => {
  renderComponentAR();
});
