import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WriteAReview from "./index";
import ContextProvider, { AppContext } from "lib/context";

const productData = {
  itemId: "281",
  sku: "234kkm7u-ksa",
  "Image URL": "/dummy.png",
  "Title": "Title",
};

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const isOpened = true;
const renderComponent = () => {
  render(
    <ContextProvider>
      <WriteAReview
        isOpened={isOpened}
        onClose={jest.fn()}
        productData={productData}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <WriteAReview
        isOpened={isOpened}
        onClose={jest.fn()}
        productData={productData}
      />
    </AppContext.Provider>
  );
};

test("Write a Review section Testing", async () => {
  await waitFor(() => {
    renderComponent();
  });
  expect(isOpened).toBe(true);
});

test("Write a Review section Arabic Version", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
