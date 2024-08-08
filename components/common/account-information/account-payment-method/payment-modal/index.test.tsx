import React from "react";
import { screen, render, fireEvent, act } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import PaymentModal from "./index";

const paymentData = {
  title: "test title",
  name: "New Payment",
  cardNumber: "4242424242424242",
  firstName: "John",
  lastName: "Doe",
  expDate: "05/2044",
  expiry_month: "05",
  expiry_year: "2044",
  cvv: "100",
  isDefault: false,
};

const setIsOpen = jest.fn();
const updateAddress = jest.fn();
const createAddressPayload = jest.fn();
const deleteAddress = jest.fn();

test("test with props", () => {
  render(
    <ContextProvider>
      <PaymentModal
        paymentMethod={paymentData}
        isOpen={false}
        setIsOpen={setIsOpen}
        isEditAddress={false}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        hideDefaultDelete={false}
      />
    </ContextProvider>
  );
});

test("add button event test", async () => {
  await act(async () => {
    render(
      <AppContext.Provider value={{ appState: { lang: "en" } }}>
        <PaymentModal
          paymentMethod={paymentData}
          isOpen={true}
          setIsOpen={setIsOpen}
          isEditAddress={false}
          createAddressPayload={createAddressPayload}
          updateAddress={updateAddress}
          deleteAddress={deleteAddress}
          hideDefaultDelete={false}
        />
      </AppContext.Provider>
    );

    // const addButton = await screen.findByText("Add");
    // expect(addButton).toBeInTheDocument();
    // fireEvent.click(addButton);
  });
});

test("delete form button event test", () => {
  render(
    <ContextProvider>
      <PaymentModal
        paymentMethod={paymentData}
        isOpen={true}
        setIsOpen={setIsOpen}
        isEditAddress={false}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        hideDefaultDelete={false}
      />
    </ContextProvider>
  );

  // const deleteButton = screen.getByText("Delete");
  // expect(deleteButton).toBeInTheDocument();
  // fireEvent.click(deleteButton);
  // const cancelButton = screen.getByText("Cancel");
  // expect(cancelButton).toBeInTheDocument();
  // fireEvent.click(cancelButton);
});

test("edit form button event test", async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <PaymentModal
          paymentMethod={paymentData}
          isOpen={true}
          setIsOpen={setIsOpen}
          isEditAddress={true}
          createAddressPayload={createAddressPayload}
          updateAddress={updateAddress}
          deleteAddress={deleteAddress}
          hideDefaultDelete={false}
        />
      </ContextProvider>
    );

    // const deleteButton = screen.getAllByText("Delete")[0];
    // expect(deleteButton).toBeInTheDocument();
    // fireEvent.click(deleteButton);
    // const cancelButton = screen.getByText("Save");
    // expect(cancelButton).toBeInTheDocument();
    // fireEvent.click(cancelButton);
  });
});

test("render arabic version", () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <PaymentModal
        paymentMethod={paymentData}
        isOpen={true}
        setIsOpen={setIsOpen}
        isEditAddress={false}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        hideDefaultDelete={false}
      />
    </AppContext.Provider>
  );
});

test("render arabic version", () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <PaymentModal
        paymentMethod={paymentData}
        isOpen={true}
        setIsOpen={setIsOpen}
        isEditAddress={true}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        hideDefaultDelete={false}
      />
    </AppContext.Provider>
  );
});
