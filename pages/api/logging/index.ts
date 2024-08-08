import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const logBody = req.body || {};
    // console.log(
    //   `Logging Service -> Log Time: ${new Date().toISOString()}`,
    //   "Log Body: ",
    //   logBody
    // );
    res.status(200).json({
      message: "Log posted to Elastic-Kabana service.",
    });
  } catch (error: any) {
    console.log("Logging Service -> Logging Error: ", error?.message);
    res.status(500).send({
      message: "Failed to post log to Elastic-Kabana service. ",
      body: req.body,
      error: error?.message,
    });
  }
}
