import { NextApiRequest, NextApiResponse } from "next";
import { payTabs_Payment } from "lib/utils/payments";
import { corsMiddleware } from '../../middleware/cors'

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
        const payload = req.body.payload;

        if (!payload) {
            return res.status(400).json({ message: 'Payload is required' });
        }

        const response = await payTabs_Payment(payload);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error in /api/paytabs:', error);
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
}
