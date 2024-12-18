import { useEffect, useState } from "react";

import { mapQuotesFromResponse, Quotes } from "@/entities/quotesList";

import { INITIAL_API_URL } from "@/shared";

export const useQuotes = () => {
  const [url, updateUrl] = useState(INITIAL_API_URL);

  const [isLoading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quotes | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setQuotes(null);
    setError(null);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setQuotes(mapQuotesFromResponse(response));
        setLoading(false);
      })
      .catch((error) => {
        setError(String(error));
        setLoading(false);
      });
  }, [url]);

  return {
    isLoading,
    quotes,
    error,
    updateUrl,
  };
};
