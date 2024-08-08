import React from "react";
import GiftCodes from "./index";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

jest.mock("lib/utils/promo-code", () => ({
  addPromo: jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false),
  removePromo: jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false),
}));

const cardDetails = {
  allPromosApplied: [
    {
      promoId: "6227197f0e573700098ea3e2",
      promoCode: "test",
      value: 10,
      unit: "%OFF",
    },
  ],
  status: "",
  items: [{}],
  cartId: "",
  subTotal: 0.0,
  totalAmount: 0.0,
};

const setPromoDiscount = jest.fn();

const cartDetail = {
  status: "",
  items: [{}],
  cartId: "",
  subTotal: 0.0,
  totalAmount: 0.0,
};

const renderComponent = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <ContextProvider>
        <GiftCodes setPromoDiscount={setPromoDiscount} cartData={cardDetails} />
      </ContextProvider>
    </AppContext.Provider>
  );
};

const renderComponentRep = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "en" } }}>
      <ContextProvider>
        <GiftCodes setPromoDiscount={setPromoDiscount} cartData={cartDetail} />
      </ContextProvider>
    </AppContext.Provider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <GiftCodes setPromoDiscount={setPromoDiscount} cartData={cardDetails} />
    </AppContext.Provider>
  );
};

test("Gift Codes Testing", () => {
  renderComponent();
  const mainHeading = screen.getByRole("main-heading");
  expect(mainHeading).toBeInTheDocument();

  const linkBox = screen.getByRole("linkBox");
  expect(linkBox).toBeInTheDocument();
  fireEvent.click(linkBox);

  const typeValue = screen.getAllByRole("typeValue");
  expect(typeValue[0]).toBeInTheDocument();

  const codeRemoveBtn = screen.getAllByTestId("codeRemoveBtn");
  expect(codeRemoveBtn[0]).toBeInTheDocument();
  fireEvent.click(codeRemoveBtn[0]);

  const textInput = screen.getByRole("textInput");
  expect(textInput).toBeInTheDocument();
  fireEvent.blur(textInput);

  const applyBtn = screen.getByTestId("applyBtn");
  expect(applyBtn).toBeInTheDocument();
  fireEvent.click(applyBtn);

  fireEvent.change(textInput, {
    target: { value: "test" },
  });
});

test("Gift Codes Testing Rep", () => {
  renderComponentRep();
  const mainHeading = screen.getByRole("main-heading");
  expect(mainHeading).toBeInTheDocument();

  const linkBox = screen.getByRole("linkBox");
  expect(linkBox).toBeInTheDocument();
  fireEvent.click(linkBox);

  const textInput = screen.getByRole("textInput");
  expect(textInput).toBeInTheDocument();
  fireEvent.blur(textInput);

  const applyBtn = screen.getByTestId("applyBtn");
  expect(applyBtn).toBeInTheDocument();
  fireEvent.click(applyBtn);

  fireEvent.change(textInput, {
    target: { value: "" },
  });
});

test("Gift Codes Testing Arabic", () => {
  renderComponentAR();
});
