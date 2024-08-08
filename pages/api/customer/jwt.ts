const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
import { tokens } from "general-config";
import type { NextApiRequest, NextApiResponse } from "next";

function getLoginUrl(
  customerId: number,
  storeHash: string,
  storeUrl: string,
  clientId: string,
  clientSecret: string,
  channelId: number,
  redirectUrl: string
) {
  const dateCreated = Math.round(new Date().getTime() / 1000);

  const payload = {
    iss: clientId,
    iat: dateCreated,
    jti: uuidv4(),
    operation: "customer_login",
    store_hash: storeHash,
    customer_id: customerId,
    channel_id: channelId,
    redirect_to: redirectUrl
  };

  let token = jwt.sign(payload, clientSecret, { algorithm: "HS256" });
  return { data: `${storeUrl}/login/token/${token}` };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token: any = tokens
  const body = JSON.parse(req.body)
  const region = body?.region
  const clientId = token[region].BC_CLIENT_ID;
  const clientSecret = token[region].BC_CLIENT_SECRET;
  const customerId = body?.customerId;
  const storeHash = token[region].BC_STORE_HASH;
  const storeUrl = token[region].BC_STORE_URL;
  const channelId = token[region].BC_CHANNEL_ID
  const redirectUrl = body?.data

  const loginUrl = getLoginUrl(
    customerId,
    storeHash,
    storeUrl,
    clientId,
    clientSecret,
    channelId,
    redirectUrl
  );

  res.json(loginUrl);
}
