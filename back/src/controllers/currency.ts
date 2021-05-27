import { Request, Response } from "express";
import { getCurrencies } from "@services/converterApi";
import { getFromCache, addToCache } from "@services/cache";

export const getAllCurrency = async (req: Request, res: Response) => {
  const currencies = getFromCache("currencies") ?? addToCache("currencies", await getCurrencies());

  res.status(200).json(currencies.data.symbols);
}