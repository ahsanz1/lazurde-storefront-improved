import { getCurrentDomain } from "general-config";

export const getReviewsApi = async (id: number | string, region: string) => {
  try {
    return await (
      await fetch(`${getCurrentDomain()}/reviews/get-review`, {
        method: "post",
        body: JSON.stringify({ id: id, region: region }),
      })
    ).json();
  } catch (error) {
    throw error as Error;
  }
};
