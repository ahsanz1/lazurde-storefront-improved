import axios from "axios";
import { tokens } from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import HEADERS from "lib/api/headers";
import { APITokensObj } from "lib/types/common";
import { NextApiRequest, NextApiResponse } from "next";

const token: APITokensObj = tokens;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { itemId, region } = req.query as any;
    const response = await axios.get(
      `${
        token[region].BC_API_DOMAIN
      }${ENDPOINTS.BOPIS.GET_PRODUCT_INVENTORY_ACROSS_ALL_LOCATIONS(itemId)}`,
      {
        headers: {
          ...HEADERS.bcRestApis,
          "X-Auth-Token": token[region].BC_API_ACCESS_TOKEN,
        },
      }
    );
    res.status(200).json({ ...response.data });
  } catch (error) {
    console.log(
      "Error fetching product inventory across all locations: ",
      error
    );
    res.status(400).json({
      message: (error as ErrorEvent).message,
    });
  }
}
