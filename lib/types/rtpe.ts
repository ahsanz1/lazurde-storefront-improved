export type Price = {
  currency: string;
  amount: number | string;
  sale?: number | string;
  discount?: object;
};
