import { Link, useParams } from "react-router-dom";

import Image from "./image";
import useFetchTvSeriesDetails from "../hooks/useFetchTvSeriesDetails";

const TvShowDetails = () => {
  const { tvShowId } = useParams();
  const {
    data: tvShow,
    loading,
    error,
  } = useFetchTvSeriesDetails({
    id: tvShowId || "",
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>{error} please reload the page or go to our home page</p>;

  return (
    <div>
      <Link to="/">go back</Link>
      <p>{tvShow?.name}</p>
      <p>{tvShow?.rating.average}</p>
      <Image alt={`${tvShow?.name} poster`} src={tvShow?.image?.original} />
      summary: {tvShow?.summary}
      genres:
      {tvShow?.genres.map((genre) => (
        <p key={genre}>{genre}</p>
      ))}
      <p>Language: {tvShow?.language}</p>
    </div>
  );
};

export default TvShowDetails;
