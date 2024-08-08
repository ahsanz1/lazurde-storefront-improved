import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductDetail from "./index";
import ContextProvider, { AppContext } from "lib/context";

const testproductDetail = {
  Brand: "Lazurde",
  Title: "testing title",
};

test("testing product feature", () => {
  render(
    <ContextProvider>
      <ProductDetail productData={testproductDetail} />
    </ContextProvider>
  );
});

test("testing product feature arabic feature", () => {
  render(
    <AppContext.Provider value={{ appState: { lang: "ar" } }}>
      <ProductDetail productData={testproductDetail} />
    </AppContext.Provider>
  );
});
