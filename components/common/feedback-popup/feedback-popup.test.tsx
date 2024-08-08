import React from "react";
import FeedbackPopUp from "./index";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

const heading = "Send Feedback";

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const renderComponent = () => {
  render(
    <ContextProvider>
      <FeedbackPopUp
        open={true}
        heading={heading}
        onClose={() => {
          true;
        }}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <FeedbackPopUp open={true} heading={heading} onClose={jest.fn()} />
    </AppContext.Provider>
  );
};

test("feedback pop up testing", async () => {
  waitFor(() => {
    renderComponent();
    expect(heading).toBe("Send Feedback");
    const firstName = screen.getByRole("firstName");
    const lastName = screen.getByRole("lastName");
    const email = screen.getByRole("email");
    const phoneNumber = screen.getByRole("phoneNumber");

    fireEvent.change(firstName, {
      target: { value: "John" },
    });
    fireEvent.change(lastName, {
      target: { value: "Deee" },
    });
    fireEvent.change(email, {
      target: { value: "john@gmail.com" },
    });
    fireEvent.change(phoneNumber, {
      target: { value: "03098788778" },
    });

    const submitBtn = screen.getByTestId("submit-btn");
    expect(submitBtn).toBeInTheDocument();
    fireEvent.click(submitBtn);
  });
});

test("render arabic version", async () => {
  waitFor(() => {
    renderComponentAR();
  });
});
