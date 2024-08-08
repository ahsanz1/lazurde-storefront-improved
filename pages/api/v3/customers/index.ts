import { createCustomerApi } from "lib/identity/cutomer";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await createCustomerApi(body?.payload, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
    // throw new Error("Error while adding customer");
  }
}
