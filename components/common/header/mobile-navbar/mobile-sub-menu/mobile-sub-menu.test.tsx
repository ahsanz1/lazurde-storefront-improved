import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileSubMenu from "./mobile-sub-menu";
import ContextProvider, { AppContext } from "lib/context";

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const active = false;

const subMenuDataMobile: any = {
  dropdownData: [
    {
      title: "Shop By Category",
      getName: () => "asfas",
      catArr: [
        {
          title: "Diamond Necklaces & Pendants",
          url: "/",
          isBold: false,
          getName: () => "asfas",
        },
        {
          title: "Diamond Rings",
          url: "",
          isBold: false,
          getName: () => "asfas",
        },
      ],
    },
    {
      title: "Curated Shops",
      getName: () => "asfas",
      catArr: [
        {
          title: "Best Selling Diamonds",
          url: "",
          isBold: false,
          getName: () => "asfas",
        },
        {
          title: "New Diamonds",
          url: "",
          isBold: false,
          getName: () => "asfas",
        },
      ],
    },
  ],
};

const closeMenu = jest.fn();
const closeSubMenu = jest.fn();

test("Mobile Sub Menu testing", () => {
  render(
    <ContextProvider>
      <MobileSubMenu
        active={true}
        menuTitle={"menu title"}
        subMenuData={subMenuDataMobile}
        closeSubMenu={closeSubMenu}
        closeMenu={closeMenu}
      />
    </ContextProvider>
  );

  expect(active).toBe(false);
  expect(screen.getByText("menu title")).toBeInTheDocument();
  expect(screen.getByTestId("submenu")).toBeInTheDocument();
  expect(screen.getByTestId("close-sub-menu")).toBeInTheDocument();
  // fireEvent.click(screen.getByTestId("close-sub-menu"));
  // expect(closeSubMenu).toBeCalled();
  expect(screen.getByTestId("sub-links")).toBeInTheDocument();
  expect(screen.getByTestId("cross-btn")).toBeInTheDocument();
  // fireEvent.click(screen.getByTestId("cross-btn"));
  // expect(closeMenu).toBeCalled();

  const lists = screen.getAllByRole("listitem");
  expect(lists[0]).toBeInTheDocument();
  fireEvent.click(lists[0]);
  // expect(closeMenu).toBeCalled();
});

test("mobile sub menu arabic", () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <MobileSubMenu
        active={true}
        menuTitle={"menu title"}
        subMenuData={subMenuDataMobile}
        closeSubMenu={closeSubMenu}
        closeMenu={closeMenu}
      />
    </AppContext.Provider>
  );
});
