import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageUploader from "components/common/reviews/write-review/image-uploader/image-uploader";
import ContextProvider, { AppContext } from "lib/context";

const fileNames = ["/url", "/url2"];

jest.mock('react', () => ({
  ...jest.requireActual('react') as object,
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const renderComponent = () => {
  render(
    <ContextProvider>
      <ImageUploader
        file={fileNames}
        setFileUpload={jest.fn()}
        setFileName={jest.fn()}
        uploadedFiles={fileNames}
      />
    </ContextProvider>
  );
};

const renderComponentAR = () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ImageUploader />
    </AppContext.Provider>
  );
};

test("review image uploade section Testing", () => {
  renderComponent();
  const fileInput = screen.getByRole("file-upload-input");
  expect(fileInput).toBeInTheDocument();
  const crossBtn = screen.getAllByRole("cross-btn");
  expect(crossBtn[0]).toBeInTheDocument();
  fireEvent.click(crossBtn[0]);
});

test("review image uploade section Arabic Version", () => {
  renderComponentAR();
});
