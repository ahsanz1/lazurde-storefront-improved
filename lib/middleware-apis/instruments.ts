import { getCurrentDomain } from "general-config";
import { InstrumentProps, UpdateInstrumentProps } from "lib/types/common";

export const createCheckoutPaymentInstrument = async (
  payload: InstrumentProps
) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/payments/createInstrument`, {
        method: "post",
        body: JSON.stringify({ payload }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const updateCheckoutPaymentInstrument = async (
  instrumentId: string,
  payload: UpdateInstrumentProps
) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/payments/updateInstrument`, {
        method: "put",
        body: JSON.stringify({ instrumentId, payload }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};

export const removeCheckoutPaymentInstrument = async (instrumentId: string) => {
  try {
    return (
      await fetch(`${getCurrentDomain()}/payments/deleteInstrument`, {
        method: "delete",
        body: JSON.stringify({ instrumentId }),
      })
    ).json();
  } catch (error) {
    throw error;
  }
};
