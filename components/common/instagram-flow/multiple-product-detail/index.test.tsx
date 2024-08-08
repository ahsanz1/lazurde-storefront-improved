/* eslint-disable react/display-name */
import * as React from "react";
import MultipleProductsDetail from "./index";
import { render, screen, act, waitFor } from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";

jest.mock("axios");
const mockChildComponent = jest.fn();
jest.mock("./single-product-card", () => (props: any) => {
  mockChildComponent(props);
  return <div />;
});

const fetchProductsByItemIdPayload: any = {
  pageSize: 1,
  totalSize: 1,
  pages: 1,
  products: [
    {
      _id: "627e2722d3b2af071d40bef4",
      sku: "21047140018-ksa",
      itemId: 233,
      children: [],
      type: "ITEM",
      status: true,
      bundleItems: [],
      categories: [
        {
          id: "626103bfaab0128347415575",
          name: "Bracelets",
          breadcrumbs: [
            {
              id: "621eb491b76704034b82e600",
              name: "PRIMARY",
              attributes: [],
            },
            {
              id: "621f26d3c13c506d0c875232",
              name: "L'azurde",
              attributes: [],
            },
          ],
        },
      ],
      attributes: [
        {
          id: "621dcb3408cf020009caf6dc",
          name: "Title",
          description: "",
          mapping: "title",
          type: "TEXT",
          value: "Rotating Flower Bracelet, in 18K Yellow Gold",
        },
        {
          id: "621dcaa308cf020009caf6ca",
          name: "Image URL",
          description: "",
          mapping: "image",
          type: "TEXT",
          value:
            "https://cdn.lazurde.com/media/catalog/product/1/1/111304180048_1.jpg",
        },
        {
          id: "621dcb8508cf020009caf6e5",
          name: "Variant",
          description: "",
          mapping: "isVariant",
          type: "DECIMAL",
          value: "0",
        },
        {
          id: "625dcafe091c56000935ad61",
          name: "isAnklet",
          description: "description",
          type: "BOOLEAN",
          value: "false",
        },
        {
          id: "625dcafe091c56000935ad5f",
          name: "Anklet Size",
          description: "description",
          type: "TEXT",
          value: "None",
        },
        {
          id: "625dcafe091c56000935ad5d",
          name: "Bracelet Size",
          description: "description",
          type: "TEXT",
          value: "14",
        },
        {
          id: "625dcafd091c56000935ad22",
          name: "isBracelet",
          description: "description",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "625dcafd091c56000935ad12",
          name: "Chain Length",
          description: "description",
          type: "TEXT",
          value: "21",
        },
        {
          id: "625dcafd091c56000935ad10",
          name: "isCharm",
          description: "description",
          type: "BOOLEAN",
          value: "false",
        },
        {
          id: "625dcafd091c56000935ad14",
          name: "Charm Size",
          description: "description",
          type: "TEXT",
          value: "None",
        },
        {
          id: "625dcafd091c56000935ad0a",
          name: "Bracelets and Anklets",
          description: "description",
          type: "TEXT",
          value: "Bracelets",
        },
        {
          id: "622b498b8e7b2900099e0806",
          name: "Type",
          description: "description",
          type: "TEXT",
          value: "Enamel",
        },
        {
          id: "621dca6708cf020009caf6b4",
          name: "Stone Carat",
          description: "description",
          type: "TEXT",
          value: "18k L'azurde Gold",
        },
        {
          id: "625dcaf8091c56000935ac98",
          name: "Stone Cut",
          description: "description",
          type: "TEXT",
          value: "Refined",
        },
        {
          id: "625dcaf8091c56000935ac9a",
          name: "hasColoredGemstone",
          description: "description",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "625dcaf9091c56000935aca3",
          name: "Last Chance",
          description: "description",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "625dcaf9091c56000935aca1",
          name: "Online Exclusive",
          description: "description",
          type: "BOOLEAN",
          value: "false",
        },
        {
          id: "625dcaf9091c56000935ac9f",
          name: "New In",
          description: "description",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "625dcaf8091c56000935ac9d",
          name: "Best Seller",
          description: "description",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "622b4a3c8e7b2900099e083c",
          name: "Stone",
          description: "",
          type: "TEXT",
          value: "Pearl",
        },
        {
          id: "622b49ff8e7b2900099e082a",
          name: "Diamond Cut",
          description: "",
          type: "TEXT",
          value: "None",
        },
        {
          id: "622b4a2a8e7b2900099e0833",
          name: "Diamond Carat",
          description: "",
          type: "TEXT",
          value: "0.2",
        },
        {
          id: "622b49e58e7b2900099e0821",
          name: "Collection",
          description: "",
          type: "TEXT",
          value: "La'zurde",
        },
        {
          id: "622b49ac8e7b2900099e0818",
          name: "Gemstone",
          description: "",
          type: "TEXT",
          value: "Yes",
        },
        {
          id: "622b499a8e7b2900099e080f",
          name: "Metal",
          description: "",
          type: "TEXT",
          value: "Silver",
        },
        {
          id: "622b49308e7b2900099e07e5",
          name: "Brand",
          description: "",
          type: "TEXT",
          value: "L'azurde",
        },
        {
          id: "621dca8908cf020009caf6c1",
          name: "Weight",
          description: "",
          type: "DECIMAL",
          value: "2.26",
        },
        {
          id: "621dcac008cf020009caf6d3",
          name: "Description",
          description: "",
          type: "TEXT",
          value: "There is none.",
        },
        {
          id: "621dcb9c08cf020009caf6ee",
          name: "Active",
          description: "",
          mapping: "active",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "628b604dc869c20009b801fc",
          name: "isLazurde",
          description: "",
          type: "BOOLEAN",
          value: "true",
        },
        {
          id: "628b605ec869c20009b8021e",
          name: "isMissL",
          description: "",
          type: "BOOLEAN",
          value: "false",
        },
        {
          id: "628b606bc869c20009b80227",
          name: "isWaves",
          description: "",
          type: "BOOLEAN",
          value: "false",
        },
        {
          id: "628f3564cbaa46000945233b",
          name: "Tax Code",
          description: "",
          type: "TEXT",
          value: "FR20000",
        },
      ],
      variants: [],
      dependents: [],
      createdOn: "2022-05-13T09:38:42.614Z",
      modifiedOn: "2022-06-09T07:10:05.606Z",
    },
  ],
};

jest.mock("lib/utils/product", () => ({
  ...jest.requireActual("lib/utils/product") as object,
  fetchProductsByItemId: jest.fn().mockImplementation(() =>
    Promise.resolve({
      data: fetchProductsByItemIdPayload,
      status: 200,
    })
  ),
  fetchProductPriceByItemId: jest.fn().mockImplementation(() =>
    Promise.resolve({
      data: [
        {
          priceList: "100000",
          itemId: 233,
          lineId: null,
          offers: {
            price: {
              sale: null,
              base: 649,
              finalPrice: 649,
              currency: "SAR",
              totalPrice: 584.1,
            },
            kind: "BASE",
            channel: 12,
            discounts: [
              {
                amount: 64.9,
                value: 10,
                groupId: "62eb8162e235a30009a41cbd",
                promotionId: "62eb8162e235a30009a41cbd",
                priority: 1,
                stackable: true,
                title: "new promo",
                itemKey: "233",
                lineId: 0,
                quantity: 1,
                promotionType: "PRODUCT",
                discountType: "PERCENTAGE",
                cartShipping: false,
              },
            ],
            additionalAttributes: null,
          },
        },
      ],
      status: 200,
    })
  ),
}));

const multipleProducts = [
  {
    itemId: "231",
    Title: "productTtle",
  },
  {
    itemId: "231",
    Title: "productTtle",
  },
];

const renderComponent = async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <MultipleProductsDetail multipleProducts={multipleProducts} />
      </ContextProvider>
    );
  });
};

const renderComponentAR = async () => {
  await act(async () => {
    render(
      <AppContext.Provider value={{ appState: { lang: "ar" } }}>
        <MultipleProductsDetail multipleProducts={multipleProducts} />
      </AppContext.Provider>
    );
  });
};

test("istagram multiple product modal testing", async () => {
  await waitFor(() => {
    renderComponent();
  });
});

test("istagram multiple product modal arabic testing", async () => {
  await waitFor(() => {
    renderComponentAR();
  });
});
