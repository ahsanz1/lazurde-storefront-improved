import { NextApiRequest, NextApiResponse } from "next";
import { deleteExistingCartApi } from "lib/utils/cart";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const body = JSON.parse(req.body);
        const response = await deleteExistingCartApi(
            body?.cartId,
            body?.region,
        );
        res.send(response);
    } catch (error) {
        // res.status(400).json({
        //   message: (error as ErrorEvent).message,
        // });
        throw error;
    }
}
