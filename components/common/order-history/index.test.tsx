import * as React from "react";
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import OrderHistory from "./index";

jest.mock("@react-pdf/renderer", () => ({
  __esModule: true,
  BlobProvider: () => {
    return <div></div>;
  },
}));
jest.mock("components/common/order-invoice", () => ({
  __esModule: true,
  default: (): null => {
    return null;
  },
}));
// jest.mock("../order-invoice", () => ({
//   OrderInvoice: () => {
//     return <div></div>;
//   },
// }));

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

document.documentElement.scrollTo = jest.fn();
jest.mock("axios");
const orderDetail = {
  orderId: "677-078889-0987",
  items: [
    {
      itemId: "233",
      "Title": "title goes here",
    },
    {
      itemId: "234",
      "Title": "title goes here",
    },
    {
      itemId: "235",
      "Title": "title goes here",
    },
  ],
};

const selectedOrderData = {
  181: {
    id: "244",
    imageSrc: "/dummy.png",
    brand: "missL",
    orderLineItemId: "11",
    returnQuantity: "23",
    reasonCode: "",
    subReasonCode: "",
    policyOveride: false,
    returnAmount: "1100",
  },
  182: {
    id: "243",
    imageSrc: "/dummy.png",
    brand: "Waves",
    orderLineItemId: "1",
    returnQuantity: "2",
    reasonCode: "",
    subReasonCode: "",
    policyOveride: false,
    returnAmount: "1100",
  },
};

const isStaticContentModal = {
  isCourierCollection: false,
  isStoreDropOff: false,
  isGiftCard: false,
  isTabbyModal: false,
  isPaypalModal: false,
  isCodModal: false,
};

const renderComponent = () => {
  render(
    <ContextProvider>
      <OrderHistory
        order={orderDetail}
        setIsReturnOrderActive={jest.fn()}
        isReturnItems={false}
        setCurrentCompActive={jest.fn()}
        isStaticContentModal={isStaticContentModal}
        setIsStaticContentModal={jest.fn()}
        setMyReturnComponentActive={jest.fn()}
        setSelectedOrderData={jest.fn()}
        selectedOrderData={selectedOrderData}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <OrderHistory />
    </AppContext.Provider>
  );
};

test("order history testing", async () => {
  waitFor(() => {
    renderComponent();
  });
});

test("order history testing arabic testing", async () => {
  waitFor(() => {
    renderComponentAR();
  });
});
