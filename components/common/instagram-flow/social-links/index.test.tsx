import * as React from "react";
import { render, screen } from "@testing-library/react";
import SocialIconLinks from "./index";

test("insta social icon testing", () => {
  const testingData = [
    {
      link: "/",
      icon: {
        url: "/",
        altText: "alt",
      },
      width: 20,
      mobileWidth: 20,
      height: 20,
      mobileHeight: 20,
    },
    {
      link: "/",
      icon: {
        url: "/",
        altText: "alt",
      },
      width: 30,
      mobileWidth: 30,
      height: 30,
      mobileHeight: 30,
    },
  ];

  const iconSize = [
    {
      width: 20,
      mobileWidth: 20,
    },
    {
      width: 20,
      mobileWidth: 20,
    },
  ];
  render(
    <SocialIconLinks
      iconSize={iconSize}
      iconsList={testingData}
      className="test classname"
      role="role"
    />
  );
});
