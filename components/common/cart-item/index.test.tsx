import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CartItem from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { CartItemObject } from "lib/types/common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const itemObj: CartItemObject = {
  name: "title",
  image_url: "/imageurl.png",
  brand: "brand",
  quantity: 12,
  id: "itemId",
  product_id: 100,
  coupon_amount: 0,
  coupons: [],
  discount_amount: 0,
  discounts: [],
  extended_list_price: 10,
  extended_sale_price: 10,
};
const inventoryToken = "inventoryToken";

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <CartItem
          item={itemObj}
          handleChange={jest.fn()}
          updatingCartItem={false}
          removeItem={jest.fn()}
          getCartData={jest.fn()}
          inventoryToken={inventoryToken}
          wishListItem={true}
          className="classname"
          productImgWidth="38px"
          productImgHeight="38px"
          miniCartItem={false}
          wishListSideBarItem={false}
        />
      </ContextProvider>
    </QueryClientProvider>
  );
};

const renderComponentAR = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <CartItem
          item={itemObj}
          handleChange={jest.fn()}
          updatingCartItem={false}
          removeItem={jest.fn()}
          getCartData={jest.fn()}
          inventoryToken={inventoryToken}
          wishListItem={true}
          className="classname"
          productImgWidth="38px"
          productImgHeight="38px"
          miniCartItem={false}
          wishListSideBarItem={false}
        />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

describe("Cart page ", () => {
  test("cart item prop test", async () => {
    await waitFor(() => {
      renderComponent();
    });
  });

  test("cart item testing", async () => {
    await waitFor(() => {
      render(
        <QueryClientProvider client={queryClient}>
          <AppContext.Provider value={{ appState: { lang: "ar" } }}>
            <CartItem
              item={itemObj}
              handleChange={jest.fn()}
              updatingCartItem={false}
              removeItem={jest.fn()}
              getCartData={jest.fn()}
              inventoryToken={inventoryToken}
              wishListItem={true}
              className="classname"
              productImgWidth="38px"
              productImgHeight="38px"
              miniCartItem={false}
              wishListSideBarItem={false}
            />
          </AppContext.Provider>
        </QueryClientProvider>
      );
    });
  });

  test("cart item arabic version", async () => {
    await waitFor(() => {
      renderComponentAR();
    });
  });
});
