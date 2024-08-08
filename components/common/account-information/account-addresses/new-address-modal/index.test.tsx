import React from "react";
import {
  screen,
  render,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import NewAddressModal from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const addressesData: any = {
  type: "M",
  addressLine1: "address street lane something",
  city: "city",
  state: "31324",
  country: "Saudi Arabia",
  postalCode: "11111",
  isDefault: "false",
  additionalAttributes: {
    nickName: "test nick name",
    title: "Mr",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234545678",
  },
};

const setIsOpen = jest.fn();
const updateAddress = jest.fn();
const createAddressPayload = jest.fn();
const deleteAddress = jest.fn();
window.HTMLElement.prototype.scrollIntoView = function () {};
const queryClient = new QueryClient();

test("test with props", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={false}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </ContextProvider>
      </QueryClientProvider>
    );
  });
});

test("add button event test", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ appState: { lang: "en" } }}>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={false}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </AppContext.Provider>
      </QueryClientProvider>
    );

    // const addButton = await screen.findByText("Add");
    // expect(addButton).toBeInTheDocument();
    // fireEvent.click(addButton);
  });
});

test("delete form button event test", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={false}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </ContextProvider>
      </QueryClientProvider>
    );

    // const deleteButton = screen.getByText("Delete");
    // expect(deleteButton).toBeInTheDocument();
    // fireEvent.click(deleteButton);
    // const cancelButton = screen.getByText("Cancel");
    // expect(cancelButton).toBeInTheDocument();
    // fireEvent.click(cancelButton);
  });
});

test("edit form button event test", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={true}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </ContextProvider>
      </QueryClientProvider>
    );

    // const deleteButton = screen.getAllByText("Delete")[0];
    // expect(deleteButton).toBeInTheDocument();
    // fireEvent.click(deleteButton);
    // const cancelButton = screen.getByText("Save");
    // expect(cancelButton).toBeInTheDocument();
    // fireEvent.click(cancelButton);
  });
});

test("render arabic version", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ appState: { lang: "ar" } }}>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={false}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });
});

test("render arabic version", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ appState: { lang: "ar" } }}>
          <NewAddressModal
            addressMainData={addressesData}
            isOpen={true}
            setIsOpen={setIsOpen}
            isEditAddress={true}
            createAddressPayload={createAddressPayload}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });
});
