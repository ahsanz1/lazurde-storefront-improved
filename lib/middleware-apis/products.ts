import { getCurrentDomain } from "general-config";

export const getSelectedProducts = async (params: any) => {
  const response = await fetch(
    `${getCurrentDomain()}/product/getSelectedProducts`,
    {
      method: "post",
      body: JSON.stringify({ params }),
    }
  );
  return await response.json();
};