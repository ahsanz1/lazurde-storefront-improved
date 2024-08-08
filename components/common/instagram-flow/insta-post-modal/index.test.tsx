/* eslint-disable react/display-name */
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InstaPostModal from "./index";
import ContextProvider, { AppContext } from "lib/context";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

jest.mock("axios");
const mockChildComponent = jest.fn();
jest.mock(
  "../multiple-product-detail/single-product-card",
  () => (props: any) => {
    mockChildComponent(props);
    return <div />;
  }
);

const isOpened = false;
const isLoading = false;
const postData = {
  id: "id",
  caption: "caption goes here",
  media_type: "media type",
  media_url: "/media url",
  timestamp: "timestamp",
  username: "username",
};

const multipleProducts = [
  {
    itemId: "231",
    "Title": "productTtle",
  },
  {
    itemId: "231",
    "Title": "productTtle",
  },
];

const socialLinks = [
  {
    link: "/",
    icon: {
      url: "/",
      altText: "alt",
    },
  },
  {
    link: "/test",
    icon: {
      url: "/",
      altText: "alttext",
    },
  },
];

test("instagram post modal testing", () => {
  render(
    <ContextProvider>
      <InstaPostModal
        isOpen={isOpened}
        onClose={jest.fn()}
        postData={postData}
        isLoading={isLoading}
        multipleProducts={multipleProducts}
        socialLinks={socialLinks}
      />
    </ContextProvider>
  );

  // const modalClose = screen.getByRole("modal-close-btn");
  // expect(modalClose).toBeInTheDocument();
  // fireEvent.click(modalClose);
});

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <InstaPostModal />
    </AppContext.Provider>
  );
};

test("instagram post modal arabic testing", () => {
  renderComponentAR();
});
