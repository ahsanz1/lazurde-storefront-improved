import React from "react";
import CheckoutPostalAddress from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const setIsLoading = jest.fn();
const renderSpinner = jest.fn();
const getAddressData = jest.fn();

const contentArr = [
  {
    isDefault: true,
  },
];

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <ContextProvider>
        <CheckoutPostalAddress
          contentArr={contentArr}
          getAddressData={getAddressData}
          renderSpinner={renderSpinner}
          isLoading={false}
          setIsLoading={setIsLoading}
        />
      </ContextProvider>
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <CheckoutPostalAddress
        contentArr={contentArr}
        getAddressData={getAddressData}
        renderSpinner={renderSpinner}
        isLoading={false}
        setIsLoading={setIsLoading}
      />
    </AppContext.Provider>
  );
};

// test("Checkout Postal Address Testing", () => {
//   renderComponent();

//   // const addHeading = screen.getAllByRole("addHeading");
//   // expect(addHeading[0]).toBeInTheDocument();

//   const editBtn = screen.getAllByRole("editBtn");
//   expect(editBtn[0]).toBeInTheDocument();
//   fireEvent.click(editBtn[0]);
// });

test("Checkout Postal Address AR Testing", () => {
  renderComponentAR();
});
