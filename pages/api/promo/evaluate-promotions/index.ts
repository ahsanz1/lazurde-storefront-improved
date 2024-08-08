
export default async function handler(req: any, res: any) {
  try {
    // res.send(pdpMockData?.evaluatePromo);
  } catch (error) {
    console.log("Error fetching price: ", error);
    res.status(400).json({
      message: (error as any).message,
    });
  }
}
