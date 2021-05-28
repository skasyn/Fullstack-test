export interface Currencies {
  currencyName: string,
  currencySymbol?: string;
  id: string;
}

export interface CurrenciesBody {
  [key: string]: Currencies
} 