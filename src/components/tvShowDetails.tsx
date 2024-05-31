import useFetchTvSeriesDetails from "../hooks/useFetchTvSeriesDetails";
import { useParams } from "react-router-dom";

const TvShowDetails = () => {
  const { tvShowId } = useParams();
  const { data, loading, error } = useFetchTvSeriesDetails({
    id: tvShowId || "",
  });

  console.log("error", error);

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>{error} please reload the page or go to our home page</p>;

  return <>{data?.name}</>;
};

export default TvShowDetails;
