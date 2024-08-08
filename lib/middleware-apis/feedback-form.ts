import { getCurrentDomain } from "general-config";

interface FormValues {
  username: string;
  email: string;
  message: string;
  phoneNumber: string;
  subject: string;
}

export const feedBackForm = async (formValues: FormValues) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/feedback-form`, {
        method: "post",
        body: JSON.stringify({ formValues }),
      })
    ).json();
  } catch (error) {
    throw error as Error;
  }
};
