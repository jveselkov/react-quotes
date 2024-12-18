import { QuoteCard } from "@/entities/quote";

import { Quotes } from "@/entities/quotesList";

import "./styles.css";

export interface QuotesListProps {
  quotes: Quotes;
  onClickPrevious: (url: string) => void;
}

export const QuotesList = ({ quotes, onClickPrevious }: QuotesListProps) => {
  const handleClickPrevious = () => {
    onClickPrevious(quotes.previousURL);
  };

  return (
    <div className="container">
      <div>{quotes.date}</div>

      <button onClick={handleClickPrevious}>
        previous - {quotes.previousDate}
      </button>

      <div className="quotesList">
        {quotes.valutes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};
