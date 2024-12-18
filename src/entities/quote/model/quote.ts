export interface QuoteResponse {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: string;
  Name: string;
  Value: number;
  Previous: number;
}

export interface Quote {
  id: string;
  numCode: string;
  charCode: string;
  nominal: string;
  name: string;
  value: number;
  previous: number;
}
