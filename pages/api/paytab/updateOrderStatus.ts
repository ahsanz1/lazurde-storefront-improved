import { NextApiRequest, NextApiResponse } from "next";
import { corsMiddleware } from '../../../middleware/cors'
import { getAnOrder, updateBigCommerceOrder } from "lib/api/orders";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    await corsMiddleware(req, res)
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Next.js should automatically parse JSON bodies
        const payload = req.body;

        if (!payload) {
            return res.status(400).json({ message: 'Payload is required' });
        }

        const response = await updateBigCommerceOrder(payload?.orderId, "eg", payload?.payload);

        res.status(200).json({
            hasError: false,
            response: response,
            error: {},
        });
    } catch (error) {
        console.error('Error in /api/order:', error);
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
}


