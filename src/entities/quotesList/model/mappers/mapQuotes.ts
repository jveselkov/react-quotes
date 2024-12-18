import { mapQuoteFromResponse } from "@/entities/quote";
import { Quotes, QuotesResponse } from "../quotes";

export const mapQuotesFromResponse = (quotes: QuotesResponse): Quotes => ({
  date: quotes.Date,
  previousDate: quotes.PreviousDate,
  previousURL: quotes.PreviousURL,
  timestamp: quotes.Timestamp,
  valutes: Object.values(quotes.Valute).map(mapQuoteFromResponse),
});
