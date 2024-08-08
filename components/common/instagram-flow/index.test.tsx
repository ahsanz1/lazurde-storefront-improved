/* eslint-disable react/display-name */
import * as React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

import Instagram from "./index";

const mockChildComponent = jest.fn();
jest.mock(
  "./multiple-product-detail/single-product-card",
  () => (props: any) => {
    mockChildComponent(props);
    return <div />;
  }
);

const heading = "insta heading";
const description = "insta description";
const hashTags = "# tags goes here";
const instaFollowerText = "insta Follower Text";
const facebookLikeText = "facebook Like Text";
const arabicFacebookLikeText = "arabic Facebook Like Text";
const arabicInstaFollowerText = "arabic Insta Follower Text";
const authToken = "auth token goes here";
const instaSocialLinks = [
  {
    icon: {
      url: "/icons/insta.svg",
      altText: "instagram",
    },
    link: "/",
    width: 20,
    mobileWidth: 24,
    height: 23,
    mobileHeight: 23,
  },
  {
    icon: {
      url: "/icons/insta.svg",
      altText: "instagram",
    },
    link: "/",
    width: 30,
    mobileWidth: 34,
    height: 33,
    mobileHeight: 33,
  },
];

const testData = [
  {
    id: "23",
    media_url: "/url",
    caption: "caption goes here",
  },
  {
    id: "33",
    media_url: "/url",
    caption: "caption goes here",
  },
];

const renderComponent = () => {
  render(
    <ContextProvider>
      <Instagram
        heading={heading}
        description={description}
        hashTags={hashTags}
        instaFollowerText={instaFollowerText}
        facebookLikeText={facebookLikeText}
        arabicFacebookLikeText={arabicFacebookLikeText}
        arabicInstaFollowerText={arabicInstaFollowerText}
        instaSocialLinks={instaSocialLinks}
        authToken={authToken}
        dummyDataForUnitTest={testData}
      />
    </ContextProvider>
  );
};

test("testing instagram component", async () => {
  await act(async () => {
    renderComponent();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    const description = screen.getByRole("description");
    expect(description).toBeInTheDocument();
    const facebookBtn = screen.getByRole("facebook-btn");
    expect(facebookBtn).toBeInTheDocument();
    // fireEvent.click(facebookBtn)
    const instaBtn = screen.getByRole("insta-btn");
    expect(instaBtn).toBeInTheDocument();
    // fireEvent.click(instaBtn)

    const instaPostDiv = screen.getAllByRole("insta-post");
    expect(instaPostDiv[0]).toBeInTheDocument();
    fireEvent.click(instaPostDiv[0]);

    const instaHoverLabel = screen.getAllByRole("insta-hover-label");
    expect(instaHoverLabel[0]).toBeInTheDocument();
  });
});

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <Instagram />
    </AppContext.Provider>
  );
};

test("istagram multiple product modal arabic testing", () => {
  renderComponentAR();
});
