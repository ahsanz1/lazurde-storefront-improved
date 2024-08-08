import React from "react";
import { render, screen } from "@testing-library/react";
import FooterLinks from "./index";

test("footer links unit testing", () => {
  const heading = "testing heading props";
  const testingData = [
    {
      text: "/",
      textLink: "alt",
      externalTextLink: '',
      newTab: false,
    },
    {
      textLink: "/",
      text: "alt",
      externalTextLink: '',
      newTab: false,
    },
  ];
  render(<FooterLinks heading={heading} links={testingData} index={0} />);
  expect(screen.getByText(heading)).toBeInTheDocument();
});
