import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const body = JSON.parse(req.body);
    res.status(200).send(req.body);
  } catch (error) {
    // res.status(400).json({
    //   message: (error as ErrorEvent).message,
    // });
    throw error;
  }
}
