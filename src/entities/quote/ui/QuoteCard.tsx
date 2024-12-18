import { Quote } from "../model";

import "./styles.css";

export interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard = ({ quote }: QuoteCardProps) => (
  <div className="quoteCard">
    <div>Id {quote.id}</div>
    <div>NumCode {quote.numCode}</div>
    <div>CharCode {quote.charCode}</div>
    <div>Nominal {quote.nominal}</div>
    <div>N1ame {quote.name}</div>
    <div>Value {quote.value}</div>
    <div>Previous value {quote.previous}</div>
  </div>
);
