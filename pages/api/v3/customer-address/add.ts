import { addNewAddress } from "lib/utils/addresses";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await addNewAddress(body?.payload, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
