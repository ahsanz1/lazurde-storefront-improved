import axios from "axios";

export const payTabs_Payment = async (payload: any) => {
    try {
        const response = await axios.post(
            `https://secure-egypt.paytabs.com/payment/request`,
            {
                ...payload,
            },
            {
                headers: { Authorization: `S2JNJ9NHGL-JHBM6J6KDK-Z9DG9WHDNZ`},
            }
        );
        return {
            hasError: false,
            response: response?.data,
            error: {},
        };
    } catch (error: any) {
        return {
            hasError: true,
            response: {error, message: error.message},
            error: error,
        };
    }
};