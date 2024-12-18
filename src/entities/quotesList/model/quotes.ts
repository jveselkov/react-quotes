import { Quote, QuoteResponse } from "@/entities/quote";

export interface QuotesResponse {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: Record<string, QuoteResponse>;
}

export interface Quotes {
  date: string;
  previousDate: string;
  previousURL: string;
  timestamp: string;
  valutes: Quote[];
}
