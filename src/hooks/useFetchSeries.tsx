import { useEffect, useState } from "react";

import api from "../services/api";

interface UseFetchTvSeriesProps {
  query: string;
}

interface FetchTvSeries {
  data: TVShowInfo[] | null;
  loading: boolean;
  error: string | null;
}

function useFetchTvSeries({ query }: UseFetchTvSeriesProps): FetchTvSeries {
  const [data, setData] = useState<TVShowInfo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `search/shows?q=${query}`;
      try {
        const response = await api.get<TVShowInfo[]>(url);
        setData(response.data);
      } catch (err) {
        // setError(err.message);
        setError("en error has ocurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}

export default useFetchTvSeries;
