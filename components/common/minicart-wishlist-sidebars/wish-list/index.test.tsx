import * as React from "react";
import {
  render,
  act,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import WishListSidebar from "./index";
import ContextProvider, { AppContext } from "lib/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryclient = new QueryClient();

const accessToken = {
  token_type: "Bearer",
  expires_in: 3600,
  access_token:
    "eyJraWQiOiJYbkZOc1ZiTWp4cUo5bHV6UWotWkdidWNxdGxTX0V6aTNKaXdzd0VJd0JzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm5sWk1RU3daNXBSM0pyRm90Q1pUd3Z2WGZ3Z0JsWURnZmphai00Njl4YmMub2FyNnJyaDJjaFRxQnNiUTc2OTYiLCJpc3MiOiJodHRwczovL2Rldi1zZWN1cmUubGF6dXJkZS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjYwMjQwMzUxLCJleHAiOjE2NjAyNDM5NTEsImNpZCI6IjBvYXI5NTBteU9YZnFKVFZDNjk2IiwidWlkIjoiMDB1MWdwanZ6bWNVMW1Tang2OTciLCJzY3AiOlsiZW1haWwiLCJvZmZsaW5lX2FjY2VzcyIsIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNjYwMjQwMzQ3LCJmYWJyaWNVc2VySWQiOiJkZDIxNmQ2MC05NmNkLTRkMTEtYmY1Yy1kNmI5NWViODdkM2UiLCJzdWIiOiJzd2FzaDk5QGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiY3VzdG9tZXIiLCJhY2NvdW50cyI6IntcIjYxYTUxMGZhMzdiYjY0MDAwOWFjZjU1ZVwiOntcInJvbGVzXCI6W10sXCJpZFwiOlwiNjFhNTEwZmEzN2JiNjQwMDA5YWNmNTVlXCIsXCJuYW1lXCI6XCJsYXp1cmRlIHN0b3JlZnJvbnRcIixcInRlbmFudElkXCI6XCI2MWE1MTBmYTM3YmI2NDAwMDlhY2Y1NWVcIixcImxvZ29VcmxcIjpudWxsfX0iLCJpZGVudGl0eVZlcnNpb24iOiJ2MiJ9.GV3wTE82GujXcTpfEGeggMKLd8bTxqplq0b-MowMyrG06xfLDLRAuwbxo7Wq7gq-rLqstsmo1TEy0GlQ8jmavCScLi_t-FIIkegBdS1zpA47ie--T2kdE9RYnstLBFKSznLALZS6bHpc08nn8z0la9lUz717jXORgyALsAp9_ewaxTVVTgO9z2naZsdzFh8CjDMazdaz6MBUv1oKIRx2QweIhrFQpZ1XOVMmvBzO7IU56h8RduWlKHO1DbF3cgOaa-x5scEXIWPpG3D0EChl5uWsY4dz-87ARUh0HdBOABWuchhJZ95siBReiXlRIGaJI1cb6GsXtpNkvA2Q4Gq01A",
  scope: "email offline_access openid profile",
  refresh_token: "QRtTAq4PHpI-jO3rpq1vgHdafkx56dS33W5mlx77yT4",
  id_token:
    "eyJraWQiOiJYbkZOc1ZiTWp4cUo5bHV6UWotWkdidWNxdGxTX0V6aTNKaXdzd0VJd0JzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxZ3BqdnptY1UxbVNqeDY5NyIsIm5hbWUiOiJ3YXNpZiBodXNzYWluIiwiZW1haWwiOiJzd2FzaDk5QGdtYWlsLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtc2VjdXJlLmxhenVyZGUuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hcjk1MG15T1hmcUpUVkM2OTYiLCJpYXQiOjE2NjAyNDAzNTEsImV4cCI6MTY2MDI0Mzk1MSwianRpIjoiSUQueXJKU0pKWjVFNmlCVm9EZDItT2pWNW1Gckx3bEZnemFfZGdvbVRhTG1layIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBva3VlZGc4aVhONzAyUGM2OTYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzd2FzaDk5QGdtYWlsLmNvbSIsImF1dGhfdGltZSI6MTY2MDI0MDM0NywiYXRfaGFzaCI6InFNSGxoYUloMkY5bG84alJ6b0RyWlEifQ.z4k2AO36_ebSAq1SmixYvM9jevCLtOzvBZLJJcxilaDtlfCtfvGW0WqONo_ueGB2e5R_gqULs956pjXGEtYWiU1rIwmvdFUxrdiuLySAAxIEUwF7EivCslxIQS04HKeyHo5mOof7pnjzqY7CEp8x-Q7tDqvHT2of4qFym5oi-WM_RwfMhsjC4PqZDZa4dgY6Q5OEfmVuSpCuxU1Ir6Tifd67WVCVbvDCvscddiHqC-VFizhGH2mbhfl8Yi7mUUSOQbaAd3soEiLp7cQEFz_QQ9bAsOzvFbc-U0Ltd7dFHKiOq9XOt9DDddlf1Xnivb9huei2eWMxg8w8HQDVTeLUpA",
};
localStorage.setItem("auth_tokens", JSON.stringify(accessToken));

jest.mock("lib/identity", () => ({
  loginUser: jest.fn().mockImplementation(() => true),
  logoutUser: jest.fn().mockImplementation(() => true),
  signUpUser: jest.fn().mockImplementation(() => true),
}));

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
  ...(jest.requireActual("lib/utils/product") as object),
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

const renderComponent = async () => {
  await waitFor(async () => {
    render(
      <AppContext.Provider
        value={{
          allWishListProducts: [{ itemId: "233" }, { itemId: "243" }],
          setHandleAuthModal: jest.fn(),
        }}
      >
        <WishListSidebar />
      </AppContext.Provider>
    );
  });
};

const renderComponentAR = async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryclient}>
        <AppContext.Provider value={{ appState: { lang: "ar" } }}>
          <WishListSidebar />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });
};

test("wish list Test", async () => {
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryclient}>
        <AppContext.Provider
          value={{
            appState: { lang: "en" },
            allWishListProducts: [{ itemId: "233" }, { itemId: "243" }],
          }}
        >
          <WishListSidebar />
        </AppContext.Provider>
      </QueryClientProvider>
    );
  });

  // const addBtn = screen.getByRole("addtocart");
  // expect(addBtn).toBeInTheDocument();
  // fireEvent.click(addBtn);
  // const wishlistRemoveBtn = screen.getByRole("wishlistRemoveBtn");
  // expect(wishlistRemoveBtn).toBeInTheDocument();
  // fireEvent.click(wishlistRemoveBtn);
});

// test("wish list test signout", async () => {
//   await waitFor(async () => {
//     render(
//       <QueryClientProvider client={queryclient}>
//       <AppContext.Provider
//         value={{
//           appState: { lang: "en" },
//           allWishListProducts: [{ itemId: "233" }, { itemId: "243" }],
//           setHandleAuthModal: jest.fn(),
//         }}
//       >
//         <WishListSidebar />
//       </AppContext.Provider>
//       </QueryClientProvider>
//     );
//   });

//   const signOut = screen.getByText(/sign out/i);
//   expect(signOut).toBeInTheDocument();
//   fireEvent.click(signOut);
// });

// test("wish list test sign in/sign up", async () => {
//   localStorage.setItem("auth_tokens", JSON.stringify(""));

//   await waitFor(async () => {
//     render(
//       <QueryClientProvider client={queryclient}>
//       <AppContext.Provider
//         value={{
//           appState: { lang: "en" },
//           allWishListProducts: [{ itemId: "233" }, { itemId: "243" }],
//           setHandleAuthModal: jest.fn(),
//         }}
//       >
//         <WishListSidebar />
//       </AppContext.Provider>
//       </QueryClientProvider>
//     );
//   });

//   const signIn = screen.getByText(/Sign in/i);
//   expect(signIn).toBeInTheDocument();
//   fireEvent.click(signIn);
//   const signUp = screen.getByText(/Sign up/i);
//   expect(signUp).toBeInTheDocument();
//   fireEvent.click(signUp);
// });

// test("wish list arabic version", async () => {
//   renderComponentAR();
// });
