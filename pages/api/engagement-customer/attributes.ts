import { engagementCustomerAttributes } from "lib/api/engagement";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await engagementCustomerAttributes(body?.payload, body?.region);
    res.setHeader('Cache-Control', 's-maxage=86400')
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}
