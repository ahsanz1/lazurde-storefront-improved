import { productSearchApi } from "lib/api/search";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const body = JSON.parse(req.body);
        const response = await productSearchApi({ ...body?.params });
        res.send(response);
        
    } catch (error) {
       throw error
    }
}
