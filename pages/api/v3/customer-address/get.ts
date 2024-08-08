import { getAddressByCustomerId } from "lib/utils/addresses";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await getAddressByCustomerId(body?.id, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
