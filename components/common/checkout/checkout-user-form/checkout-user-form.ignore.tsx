import React from "react";
import CheckoutUserForm from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const paymentMethod = {
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  anniversaryDate: "",
};

const setIsOpen = jest.fn();
const createAddressPayload = jest.fn();
const updateAddress = jest.fn();

const renderComponent = () => {
  render(
    <ContextProvider>
      <CheckoutUserForm
        isOpen={true}
        paymentMethod={paymentMethod}
        setIsOpen={setIsOpen}
        isEditAddress={true}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <CheckoutUserForm
        isOpen={true}
        paymentMethod={paymentMethod}
        setIsOpen={setIsOpen}
        isEditAddress={true}
        createAddressPayload={createAddressPayload}
        updateAddress={updateAddress}
      />
    </AppContext.Provider>
  );
};

test("Checkout User Form Testing", () => {
  renderComponent();
  const password = screen.getByRole("password");
  expect(password).toBeInTheDocument();
  fireEvent.blur(password);

  const confirmPassword = screen.getByRole("confirmPassword");
  expect(confirmPassword).toBeInTheDocument();
  fireEvent.blur(confirmPassword);

  const dateOfBirth = screen.getByRole("dateOfBirth");
  expect(dateOfBirth).toBeInTheDocument();
  fireEvent.blur(dateOfBirth);

  const anniversaryDate = screen.getByRole("anniversaryDate");
  expect(anniversaryDate).toBeInTheDocument();
  fireEvent.blur(anniversaryDate);

  const anniversaryNotice = screen.getByRole("anniversaryNotice");
  expect(anniversaryNotice).toBeInTheDocument();

  fireEvent.change(password, {
    target: { value: "1215154sdfdsvd" },
  });
  fireEvent.change(confirmPassword, {
    target: { value: "1215154sdfdsvd" },
  });
  fireEvent.change(dateOfBirth, {
    target: { value: "02/02/2000" },
  });
  fireEvent.change(anniversaryDate, {
    target: { value: "02/02/2022" },
  });
});

test("Checkout User Form Testing AR", () => {
  renderComponentAR();
});
