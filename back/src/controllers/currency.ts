import { Request, Response } from "express";
import { getCurrencies } from "@services/converterApi";

export const getAllCurrency = async (req: Request, res: Response) => {
  const currencies = await getCurrencies();

  res.status(200).json(currencies.data.results);
}