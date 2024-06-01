import { useEffect, useState } from "react";

import api from "../services/api";

interface UseFetchTvSeriesProps {
  query: string;
}

interface FetchTvSeries {
  data: TVShow[] | null;
  loading: boolean;
  error: string | null;
}

function useFetchTvSeries({ query }: UseFetchTvSeriesProps): FetchTvSeries {
  const [data, setData] = useState<TVShow[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `search/shows?q=${query}`;
      try {
        const response = await api.get<TVShow[]>(url);
        setData(response.data);
      } catch (err) {
        const error =
          (err as Error)?.message ||
          (err as { statusText?: string })?.statusText ||
          "An error has occurred";
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}

export default useFetchTvSeries;
