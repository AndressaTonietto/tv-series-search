import { useEffect, useState } from "react";

import api from "../services/api";

interface UseFetchTvSeriesProps {
  id: string;
}

interface FetchTvSeries {
  data: TvShowDetails | null;
  loading: boolean;
  error: string | null;
}

function useFetchTvSeriesDetails({ id }: UseFetchTvSeriesProps): FetchTvSeries {
  const [data, setData] = useState<TvShowDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `shows/${id}`;
      try {
        const response = await api.get<TvShowDetails>(url);
        setData(response.data);
      } catch (err) {
        // setError(err.message);
        setError("en error has ocurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
}

export default useFetchTvSeriesDetails;
