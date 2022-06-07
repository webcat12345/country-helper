export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

// TODO: There are many other properties, but just adding important fields only
export interface Country {
  name: string;
  capital: string;
  currencies: Currency[];
  population: number;
  flag: string; // URL
}
