import { Request, Response } from "express";
import { getCurrencies, getConversion } from "@services/converterApi";
import { getFromCache, addToCache } from "@services/cache";

export const getAllCurrency = async (req: Request, res: Response) => {
  const currencies = getFromCache("currencies") ?? addToCache("currencies", (await getCurrencies()).data.results);

  res.status(200).json(currencies);
}

export const getConversionRate = async (req: Request, res: Response) => {
  const conversionRate = getFromCache("USD_GBP") ?? addToCache("USD_GBP", (await getConversion("USD_GBP")).data);

  res.status(200).json(conversionRate);
}