import { Request, Response } from "express";
import { getCurrencies, getConversion } from "@services/converterApi";
import { getFromCache, addToCache } from "@services/cache";

export const getAllCurrency = async (req: Request, res: Response) => {
  const currencies = getFromCache("currencies") ?? addToCache("currencies", (await getCurrencies()).data.results);

  res.status(200).json(currencies);
}

interface GetConversionRateInterface {
  conversion: string;
}

export const getConversionRate = async (req: Request<unknown, unknown, unknown, GetConversionRateInterface>, res: Response) => {
  const { query } = req;

  if (!query.conversion) {
    res.status(400).send({ message: "Missing conversion"});
    return;
  }
  const conversionRate = getFromCache(query.conversion) ?? addToCache(query.conversion, (await getConversion(query.conversion)).data);

  res.status(200).json(conversionRate);
}