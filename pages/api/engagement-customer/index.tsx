import { engagementCustomer } from "lib/api/engagement";


export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await engagementCustomer(body?.payload, body?.region);
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}
