import React from "react";
import CreditCardModal from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const paymentMethod = {
  title: "string",
  name: "string",
  cardNumber: "45415454545454",
  firstName: "string",
  lastName: "string",
  expDate: "string",
  expiry_month: "string",
  expiry_year: "string",
  cvv: "string",
  isDefault: true,
};

const setIsOpen = jest.fn();
const customerDetails = {
  instruments: [
    {
      id: "src_5w7lkdpw6fsu3jy7xpmvkp5j4m",
      type: "card",
      fingerprint:
        "d46b6fba292b711d0a0e0b2f43e1fca3958aebc4a7e6e00bfcba78842b05cbba",
      expiry_month: 2,
      expiry_year: 2025,
      name: "Wasif Hussain",
      scheme: "Visa",
      last4: "4242",
      bin: "424242",
      card_type: "Credit",
      card_category: "Consumer",
      issuer_country: "GB",
      product_id: "F",
      product_type: "Visa Classic",
    },
  ],
};
const defaultId = {
  current: "src",
};

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ae" } }}>
      <ContextProvider>
        <CreditCardModal
          paymentMethod={paymentMethod}
          isOpen={true}
          setIsOpen={setIsOpen}
          hideDefaultDelete={true}
          customerDetails={customerDetails}
          defaultId={defaultId}
        />
      </ContextProvider>
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <CreditCardModal
        paymentMethod={paymentMethod}
        isOpen={true}
        setIsOpen={setIsOpen}
        hideDefaultDelete={true}
        customerDetails={customerDetails}
        defaultId={defaultId}
      />
    </AppContext.Provider>
  );
};

test("Credit Card Modal Testing", () => {
  renderComponent();

  const addresses = screen.getAllByRole("addresses");
  expect(addresses[0]).toBeInTheDocument();

  const editButton = screen.getAllByTestId("edit-button");
  expect(editButton[0]).toBeInTheDocument();
  fireEvent.click(editButton[0]);

  const addBtn = screen.getByRole("addBtn");
  expect(addBtn).toBeInTheDocument();
  fireEvent.click(addBtn);

  const saveBtn = screen.getByRole("saveBtn");
  expect(saveBtn).toBeInTheDocument();
  fireEvent.click(saveBtn);
});

test("Credit Card Modal Testing Arabic", () => {
  renderComponentAR();
});
