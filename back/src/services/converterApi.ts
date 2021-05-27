import axios from "axios";

const API_KEY = "465a51a780cf7c917625fb76f91e9289";

const apiKeyParam = `access_key=${API_KEY}`;
const baseUrl = "http://api.exchangeratesapi.io/v1/";

const routes = {
  currencies: "/symbols",
};

export const getCurrencies = () => axios.get(`${baseUrl}${routes.currencies}?${apiKeyParam}`);