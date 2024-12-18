import { Quote, QuoteResponse } from "../quote";

export const mapQuoteFromResponse = (quote: QuoteResponse): Quote => ({
  id: quote.ID,
  numCode: quote.NumCode,
  charCode: quote.CharCode,
  nominal: quote.Nominal,
  name: quote.Name,
  value: quote.Value,
  previous: quote.Previous,
});
