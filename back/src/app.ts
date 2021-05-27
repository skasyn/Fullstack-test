import express from 'express';
import * as currencyController from "@controllers/currency";

export const PORT = 8000;

const app = express();

app.get('/healthcheck', (req, res) => res.status(200));
app.get('/currencies', currencyController.getAllCurrency);

export default app;