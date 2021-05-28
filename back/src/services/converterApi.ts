import axios from 'axios';

const API_KEY = 'eb341f6008f59d506ed4';

const apiKeyParam = `apiKey=${API_KEY}`;
const baseUrl = 'https://free.currconv.com/api/v7';

const routes = {
  currencies: '/currencies',
  conversion: '/convert',
};

export const getCurrencies = () => axios.get(`${baseUrl}${routes.currencies}?${apiKeyParam}`);

export const getConversion = (conversion: string) =>
  axios.get(`${baseUrl}${routes.conversion}?${apiKeyParam}&q=${conversion}&compact=ultra`);
