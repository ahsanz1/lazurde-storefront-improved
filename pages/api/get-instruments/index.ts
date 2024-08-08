import { getStoredInstruments } from "lib/identity/cutomer";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await getStoredInstruments(body?.customerId, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
