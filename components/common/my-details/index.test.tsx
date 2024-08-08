import React from "react";
import {
  screen,
  render,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import ContextProvider, { AppContext } from "lib/context";
import MyDetails from "./index";
// import mockData from "mock-data/live-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

jest.mock("react", () => ({
  ...(jest.requireActual("react") as object),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const UserMockData: any = {
  additionalAttributes: {
    city: "Lahore",
    country: "UAE",
    fabricBirthDate: "2002-01-29",
    fabricCustomerTitle: "Mrs.",
    governorate: "Dubai",
    postalCode: 321,
    primaryPhone: "0345552585",
    createdAt: "2022-08-12T06:08:31.075Z",
    isActive: true,
    isDeleted: false,
    partyType: "P",
    updatedAt: "2022-08-12T06:40:48.275Z",
    __v: 0,
    _id: "62f5ee5f53775c0010e9f294",
  },
  name: "BILAL KHAN",
  email: "grecroihabifra-1252@yopmail.com",
};

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



jest.mock("lib/identity", () => ({
  fetchCustomerProfile: jest.fn(),
}));

const renderComponent = async () => {
  localStorage.setItem("individualInfo", JSON.stringify(UserMockData));
  localStorage.setItem("auth_tokens", JSON.stringify(accessToken));
  await waitFor(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <MyDetails myDetailsData={UserMockData} />
        </ContextProvider>
      </QueryClientProvider>
    );
  });
};

test("Mydetails", async () => {
  localStorage.setItem("individualInfo", JSON.stringify(UserMockData));
  localStorage.setItem("auth_tokens", JSON.stringify(accessToken));
  waitFor(async () => {
    await renderComponent();
    const saveButton = screen.getByTestId("save");
    expect(saveButton).toBeInTheDocument();
    fireEvent.click(saveButton);
    const editpassword = screen.getByRole("editpassword");
    expect(editpassword).toBeInTheDocument();
    fireEvent.click(editpassword);
    const editfirstname = screen.getByRole("editfirstname");
    expect(editfirstname).toBeInTheDocument();
    fireEvent.click(editfirstname);
    const editlastname = screen.getByRole("editlastname");
    expect(editlastname).toBeInTheDocument();
    fireEvent.click(editlastname);
    const editphone = screen.getByRole("editphone");
    expect(editphone).toBeInTheDocument();
    fireEvent.click(editphone);
    const editdob = screen.getByRole("editdob");
    expect(editdob).toBeInTheDocument();
    fireEvent.click(editdob);
    const editpostalcode = screen.getByRole("editpostalcode");
    expect(editpostalcode).toBeInTheDocument();
    fireEvent.click(editpostalcode);

    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    //   screen.debug()
    const detailicon = screen.getByRole("detailicon");
    expect(detailicon).toBeInTheDocument();
    const titlelabel = screen.getByLabelText("titlelabel");
    expect(titlelabel).toBeInTheDocument();
    const emaillabel = screen.getByLabelText("emaillabel");
    expect(emaillabel).toBeInTheDocument();
    const fnamelabel = screen.getByLabelText("fnamelabel");
    expect(fnamelabel).toBeInTheDocument();
    const lnamelabel = screen.getByLabelText("lnamelabel");
    expect(lnamelabel).toBeInTheDocument();
    const passwordlabell = screen.getByLabelText("passwordlabell");
    expect(passwordlabell).toBeInTheDocument();
    const phonelabel = screen.getByLabelText("phonelabel");
    expect(phonelabel).toBeInTheDocument();
    const doblabel = screen.getByLabelText("doblabel");
    expect(doblabel).toBeInTheDocument();
    const citylabel = screen.getByLabelText("citylabel");
    expect(citylabel).toBeInTheDocument();
    const Governoratelabel = screen.getByLabelText("Governoratelabel");
    expect(Governoratelabel).toBeInTheDocument();
    const countrylabel = screen.getByLabelText("countrylabel");
    expect(countrylabel).toBeInTheDocument();
    const Postallabel = screen.getByLabelText("Postallabel");
    expect(Postallabel).toBeInTheDocument();

    const email = "email@gmail.com";
    const emailinput = screen.getByRole("email");
    expect(emailinput).toBeInTheDocument();
    expect(emailinput).toHaveAttribute("type", "email");
    expect(emailinput).toHaveAttribute("placeholder", "");

    fireEvent.change(screen.getByRole("email"), {
      target: { value: email },
    });
    const fname = "Bilal";
    const fnameinput = screen.getByRole("fname");
    expect(fnameinput).toBeInTheDocument();
    expect(fnameinput).toHaveAttribute("type", "text");
    expect(fnameinput).toHaveAttribute("placeholder", "");
    fireEvent.change(screen.getByRole("fname"), {
      target: { value: fname },
    });
    const lname = "khan";
    const lnameinput = screen.getByRole("lname");
    expect(lnameinput).toBeInTheDocument();
    expect(lnameinput).toHaveAttribute("type", "text");
    expect(lnameinput).toHaveAttribute("placeholder", "");

    fireEvent.change(screen.getByRole("lname"), {
      target: { value: lname },
    });
    const password = "12345";
    const passwordinput = screen.getByRole("password");
    expect(passwordinput).toBeInTheDocument();
    expect(passwordinput).toHaveAttribute("type", "password");
    expect(passwordinput).toHaveAttribute("placeholder", "........");
    fireEvent.change(screen.getByRole("password"), {
      target: { value: password },
    });
    const phone = "124538533";

    const phoneinput = screen.getByRole("phone");
    expect(phoneinput).toBeInTheDocument();
    expect(phoneinput).toHaveAttribute("type", "tel");
    fireEvent.change(screen.getByRole("phone"), {
      target: { value: phone },
    });
    const dob = "12/5/2022";
    const dobinput = screen.getByRole("dob");
    expect(dobinput).toBeInTheDocument();
    expect(dobinput).toHaveAttribute("type", "date");
    expect(dobinput).toHaveAttribute("placeholder", "");
    fireEvent.change(screen.getByRole("dob"), {
      target: { value: dob },
    });
    const postal = "123";
    const postalinput = screen.getByRole("postal");
    expect(postalinput).toBeInTheDocument();
    expect(postalinput).toHaveAttribute("type", "number");
    expect(postalinput).toHaveAttribute("placeholder", "");
    fireEvent.change(screen.getByRole("postal"), {
      target: { value: postal },
    });

    const title = screen.getAllByRole("title")[0];
    fireEvent.click(title);
    const governorate = screen.getAllByRole("governorate")[0];
    fireEvent.click(governorate);
    const country = screen.getAllByRole("country")[0];
    fireEvent.click(country);
    const city = screen.getAllByRole("city")[0];
    fireEvent.click(city);
  });
});

test("Mydetails arabic version", async () => {
  // localStorage.setItem("individualInfo", JSON.stringify(UserMockData));
  // localStorage.setItem("auth_tokens", JSON.stringify(accessToken));
  // await waitFor(async () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <AppContext.Provider value={{ appState: { lang: "ar" } }}>
  //         <MyDetails myDetailsData={mockData} />
  //       </AppContext.Provider>
  //     </QueryClientProvider>
  //   );
  // });
});
