import React from "react";
import Checkout from "./index";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const accessToken = {
  token_type: "Bearer",
  expires_in: 3600,
  access_token:
    "eyJraWQiOiJYbkZOc1ZiTWp4cUo5bHV6UWotWkdidWNxdGxTX0V6aTNKaXdzd0VJd0JzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm5sWk1RU3daNXBSM0pyRm90Q1pUd3Z2WGZ3Z0JsWURnZmphai00Njl4YmMub2FyNnJyaDJjaFRxQnNiUTc2OTYiLCJpc3MiOiJodHRwczovL2Rldi1zZWN1cmUubGF6dXJkZS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjYwMjQwMzUxLCJleHAiOjE2NjAyNDM5NTEsImNpZCI6IjBvYXI5NTBteU9YZnFKVFZDNjk2IiwidWlkIjoiMDB1MWdwanZ6bWNVMW1Tang2OTciLCJzY3AiOlsiZW1haWwiLCJvZmZsaW5lX2FjY2VzcyIsIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNjYwMjQwMzQ3LCJmYWJyaWNVc2VySWQiOiJkZDIxNmQ2MC05NmNkLTRkMTEtYmY1Yy1kNmI5NWViODdkM2UiLCJzdWIiOiJzd2FzaDk5QGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiY3VzdG9tZXIiLCJhY2NvdW50cyI6IntcIjYxYTUxMGZhMzdiYjY0MDAwOWFjZjU1ZVwiOntcInJvbGVzXCI6W10sXCJpZFwiOlwiNjFhNTEwZmEzN2JiNjQwMDA5YWNmNTVlXCIsXCJuYW1lXCI6XCJsYXp1cmRlIHN0b3JlZnJvbnRcIixcInRlbmFudElkXCI6XCI2MWE1MTBmYTM3YmI2NDAwMDlhY2Y1NWVcIixcImxvZ29VcmxcIjpudWxsfX0iLCJpZGVudGl0eVZlcnNpb24iOiJ2MiJ9.GV3wTE82GujXcTpfEGeggMKLd8bTxqplq0b-MowMyrG06xfLDLRAuwbxo7Wq7gq-rLqstsmo1TEy0GlQ8jmavCScLi_t-FIIkegBdS1zpA47ie--T2kdE9RYnstLBFKSznLALZS6bHpc08nn8z0la9lUz717jXORgyALsAp9_ewaxTVVTgO9z2naZsdzFh8CjDMazdaz6MBUv1oKIRx2QweIhrFQpZ1XOVMmvBzO7IU56h8RduWlKHO1DbF3cgOaa-x5scEXIWPpG3D0EChl5uWsY4dz-87ARUh0HdBOABWuchhJZ95siBReiXlRIGaJI1cb6GsXtpNkvA2Q4Gq01A",
  scope: "email offline_access openid profile",
  refresh_token: "QRtTAq4PHpI-jO3rpq1vgHdafkx56dS33W5mlx77yT4",
  id_token:
    "eyJraWQiOiJYbkZOc1ZiTWp4cUo5bHV6UWotWkdidWNxdGxTX0V6aTNKaXdzd0VJd0JzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxZ3BqdnptY1UxbVNqeDY5NyIsIm5hbWUiOiJ3YXNpZiBodXNzYWluIiwiZW1haWwiOiJzd2FzaDk5QGdtYWlsLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtc2VjdXJlLmxhenVyZGUuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hcjk1MG15T1hmcUpUVkM2OTYiLCJpYXQiOjE2NjAyNDAzNTEsImV4cCI6MTY2MDI0Mzk1MSwianRpIjoiSUQueXJKU0pKWjVFNmlCVm9EZDItT2pWNW1Gckx3bEZnemFfZGdvbVRhTG1layIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBva3VlZGc4aVhONzAyUGM2OTYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzd2FzaDk5QGdtYWlsLmNvbSIsImF1dGhfdGltZSI6MTY2MDI0MDM0NywiYXRfaGFzaCI6InFNSGxoYUloMkY5bG84alJ6b0RyWlEifQ.z4k2AO36_ebSAq1SmixYvM9jevCLtOzvBZLJJcxilaDtlfCtfvGW0WqONo_ueGB2e5R_gqULs956pjXGEtYWiU1rIwmvdFUxrdiuLySAAxIEUwF7EivCslxIQS04HKeyHo5mOof7pnjzqY7CEp8x-Q7tDqvHT2of4qFym5oi-WM_RwfMhsjC4PqZDZa4dgY6Q5OEfmVuSpCuxU1Ir6Tifd67WVCVbvDCvscddiHqC-VFizhGH2mbhfl8Yi7mUUSOQbaAd3soEiLp7cQEFz_QQ9bAsOzvFbc-U0Ltd7dFHKiOq9XOt9DDddlf1Xnivb9huei2eWMxg8w8HQDVTeLUpA",
};

localStorage.setItem("auth_tokens", JSON.stringify(accessToken));

jest.mock("lib/api/payment", () => ({
  getCheckoutCustomerDetails: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
  createNewCheckoutCustomer: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
  getCheckoutPaymentToken: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
  createCheckoutPaymentInstrument: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce({ error_codes: ["error"] }),
  updateCheckoutPaymentInstrument: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce({ error_codes: ["error"] }),
  removeCheckoutPaymentInstrument: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

jest.mock("lib/utils/addresses", () => ({
  getAllAddresses: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

jest.mock("lib/utils/cart", () => ({
  __esModule: true,
  useCart: () => {
    return {
      getCartByCartId: jest
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false),

      removeItemFromCart: jest
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false),
    };
  },
}));

jest.mock("lib/api/inventory", () => ({
  getInventoryAuth: jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ data: { accessToken: "token123" } })
    ),
  getInventoryByIds: jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ data: { inventory: [{ locationNum: 100 }] } })
    ),
}));

document.documentElement.scrollTo = jest.fn();

const customerDetails = [
  {
    name: "ali",
    expiryMonth: "12",
  },
  {
    name: "ali",
    expiryMonth: "12",
  },
  {
    name: "ali",
    expiryMonth: "12",
  },
];

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

const renderComponent = () => {
    render(
      <AppContext.Provider value={{ appState: { lang: "en" } }}>
        <ContextProvider>
          <Checkout isLoginUserTest={true} dummyData={customerDetails} />
        </ContextProvider>
      </AppContext.Provider>
    );
};

const renderComponentAR = () => {
    render(
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <Checkout isLoginUserTest={true} dummyData={customerDetails} />
      </AppContext.Provider>
    );
};

test("Checkout Testing", async () => {
  renderComponent();
  const backBtn = screen.getByRole("backBtn");
  expect(backBtn).toBeInTheDocument();
  fireEvent.click(backBtn);
  const backArrow = screen.getByRole("backArrow");
  expect(backArrow).toBeInTheDocument();
  const bagHeading = screen.getByRole("bag-heading");
  expect(bagHeading).toBeInTheDocument();
  const tabs = screen.getByRole("tabs");
  expect(tabs).toBeInTheDocument();
  const mainHeadings = screen.getByRole("main-headings");
  expect(mainHeadings).toBeInTheDocument();
  const continueText = screen.getByRole("continueText");
  expect(continueText).toBeInTheDocument();
  const continueTexts = screen.getByRole("continueTexts");
  expect(continueTexts).toBeInTheDocument();

  const appleBtn = screen.getByRole("appleBtn");
  expect(appleBtn).toBeInTheDocument();
  fireEvent.click(appleBtn);

  const paypalBtn = screen.getByRole("paypalBtn");
  expect(paypalBtn).toBeInTheDocument();
  fireEvent.click(paypalBtn);

  await waitFor(async () => {
    const creditLabel = screen.getByRole("creditLabel");
    expect(creditLabel).toBeInTheDocument();
    fireEvent.click(creditLabel);
    const paymentModal = screen.getByRole("paymentModal");
    expect(paymentModal).toBeInTheDocument();
    fireEvent.click(paymentModal);
    const tabbyLabel = screen.getByRole("tabbyLabel");
    expect(tabbyLabel).toBeInTheDocument();
    fireEvent.click(tabbyLabel);
    const valuLabel = screen.getByRole("valuLabel");
    expect(valuLabel).toBeInTheDocument();
    fireEvent.click(valuLabel);
    const cashLabel = screen.getByRole("cashLabel");
    expect(cashLabel).toBeInTheDocument();
    fireEvent.click(cashLabel);
  });

  const giftCodes = screen.getByRole("giftCodes");
  expect(giftCodes).toBeInTheDocument();
  const contactHeading = screen.getByRole("contactheading");
  expect(contactHeading).toBeInTheDocument();
  const checkoutBtn = screen.getByRole("checkoutBtn");
  expect(checkoutBtn).toBeInTheDocument();
  fireEvent.click(checkoutBtn);

  const contactUsBtn = screen.getByRole("contactUsBtn");
  expect(contactUsBtn).toBeInTheDocument();
  fireEvent.click(contactUsBtn);
});

test("checkout resize test", () => {
  renderComponent();
  resizeWindow(375, 1023);

  const summaryHeading = screen.getByRole("summaryHeading");
  expect(summaryHeading).toBeInTheDocument();
  const showSummary = screen.getByRole("showSummary");
  expect(showSummary).toBeInTheDocument();
  fireEvent.click(showSummary);
  const summaryCard = screen.getByRole("summaryCard");
  expect(summaryCard).toBeInTheDocument();

  const mobileBackBtn = screen.getByRole("mobileBackBtn");
  expect(mobileBackBtn).toBeInTheDocument();
  fireEvent.click(mobileBackBtn);

  const mobileBackArrow = screen.getByRole("mobileBackArrow");
  expect(mobileBackArrow).toBeInTheDocument();

  const needHelp = screen.getByRole("needHelp");
  expect(needHelp).toBeInTheDocument();
  const helpCenterLink = screen.getByRole("helpCenterLink");
  expect(helpCenterLink).toBeInTheDocument();

  const points = screen.getAllByRole("points");
  expect(points[0]).toBeInTheDocument();
});

test("Checkout Testing Arabic", () => {
  renderComponentAR();
});
