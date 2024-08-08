export async function jewelryExists(jewelryId: string) {
  /**
   * NOTE: Edited this function to prevent "failed to fetch" errors being reported to sentry.
   * This API was returning 404 for most SKUs. Trillion feature is not live yet, no need
   * to report API failure messages to sentry for now.
   */
  try {
    const response = await fetch(
      `https://dashboard.trillion.jewelry/api/trillionwebapp/publication-status/${jewelryId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.isPublishedWebSDK;
  } catch (error) {}
  return false;
}
