import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentDomain } from "general-config";
import { AddressPayload, UpdateAddressPayload } from "lib/types/address";
import { useCustomer } from "./customers";
import { AppContext } from "lib/context";
import { useContext } from "react";

const addCustomerAddress = async (
  payload: [AddressPayload],
  region: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/customer-address/add`, {
        method: "post",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error) {
    throw error as Error;
  }
};

export const getCustomerAddress = async (id: number, region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/customer-address/get`, {
        method: "post",
        body: JSON.stringify({ id, region }),
      })
    ).json();
  } catch (error) {
    throw error as Error;
  }
};

const updateCustomerAddress = async (
  payload: [UpdateAddressPayload],
  region: string
) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/v3/customer-address/update`, {
        method: "put",
        body: JSON.stringify({ payload, region }),
      })
    ).json();
  } catch (error) {
    throw error as Error;
  }
};

const deleteCustomerAddress = async (addressId: number, region: string) => {
  try {
    return await fetch(`${getCurrentDomain()}/v3/customer-address/delete`, {
      method: "post",
      body: JSON.stringify({ addressId, region }),
    });
  } catch (error) {
    throw error as Error;
  }
};

export const useCustomerAddresses = () => {
  const { appState } = useContext(AppContext);
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const addCustomerAddressMutation = useMutation((values: [AddressPayload]) =>
    addCustomerAddress(values, appState?.region)
  );
  const updateCustomerAddressMutation = useMutation(
    (values: [UpdateAddressPayload]) =>
      updateCustomerAddress(values, appState?.region)
  );
  const deleteCustomerAddressMutation = useMutation((values: number) =>
    deleteCustomerAddress(values, appState?.region)
  );

  const getCustomerAddresses = async () => {
    if (!customerData?.entityId) return;
    const customerAddress = await getCustomerAddress(
      customerData?.entityId,
      appState?.region
    );
    return customerAddress;
  };

  return {
    getCustomerAddresses,
    addCustomerAddressMutation,
    updateCustomerAddressMutation,
    deleteCustomerAddressMutation,
  };
};
