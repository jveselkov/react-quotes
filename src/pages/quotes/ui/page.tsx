import { QuotesList, useQuotes } from "@/entities/quotesList";

export const Page = () => {
  const { quotes, isLoading, error, updateUrl } = useQuotes();

  const handleClickPrevious = (url: string) => {
    updateUrl(url);
  };

  return (
    <>
      {isLoading && "loading"}

      {quotes && (
        <QuotesList quotes={quotes} onClickPrevious={handleClickPrevious} />
      )}

      {error && <span>{error}</span>}
    </>
  );
};
