import { getReviews } from "lib/utils/reviews";

export default async function handler(req: any, res: any) {
  try {
    const body = JSON.parse(req.body);
    const response = await getReviews(body?.id, body?.region);
    res.send(response);
  } catch (error) {
    throw error;
  }
}
