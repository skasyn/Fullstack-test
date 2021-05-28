import express from 'express';
import cors from "cors";
import * as currencyController from "@controllers/currency";

export const PORT = 8000;

const app = express();

app.use(cors());

app.get('/healthcheck', (req, res) => res.status(200));
app.get('/currencies', currencyController.getAllCurrency);
app.get('/convert', currencyController.getConversionRate);

export default app;