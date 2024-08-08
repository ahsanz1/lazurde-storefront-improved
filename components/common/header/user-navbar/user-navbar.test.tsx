import * as React from "react";
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import UserNavBar from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { StoreLocatorXMProps } from "lib/types/common";

jest.mock("react", () => ({
  ...jest.requireActual("react") as object,
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

jest.mock("axios");
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("", () => {
  const object = {
    mainImg: {
      url: "/",
      altText: "altText",
    },
    mainTitle: "mainTitle",
    logoArr: [
      {
        width: "232",
        mobileWidth: "2323",
        logoImg: {
          url: "/",
          altText: "altText",
        },
      },
    ],
    brandArr: [
      {
        url: "/",
        altText: "altText",
        label: "main label",
        labelUrl: "",
        brandImg: {
          url: "/",
          altText: "",
        },
      },
    ],
  };

  const objectEmpty = {
    mainImg: {
      url: "",
      altText: "",
    },
    mainTitle: "",
    logoArr: [
      {
        width: "",
        mobileWidth: "",
        logoImg: {
          url: "",
          altText: "",
        },
      },
    ],
    brandArr: [
      {
        url: "",
        altText: "",
        label: "",
        labelUrl: "",
        brandImg: {
          url: "",
          altText: "",
        },
      },
    ],
  };

  const storeLocatorData: StoreLocatorXMProps = {
    lazurdeStoresArray: [],
    misslStoresArray: [],
    wavesStoresArray: [],
    brandName: "",
  };

  const resizeWindow = (x: number, y: number) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event("resize"));
  };

  const renderComponentAR = async (object: any) => {
    await waitFor(async () => {
      render(
        <AppContext.Provider
          value={{ appState: { lang: "ar" }, allWishListProducts: [100, 200] }}
        >
          <UserNavBar
            brandSideBar={object}
            storeLocatorData={storeLocatorData}
          />
        </AppContext.Provider>
      );
    });
  };

  test("links", async () => {
    await waitFor(() => {
      renderComponentAR(object);
    });
  });
  test("links", async () => {
    await waitFor(() => {
      renderComponentAR(objectEmpty);
    });
  });
});
