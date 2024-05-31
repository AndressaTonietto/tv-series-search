import { Link, useParams } from "react-router-dom";

import DOMPurify from "dompurify";
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
  const sanitizedSummary = DOMPurify.sanitize(tvShow?.summary || "");

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>{error} please reload the page or go to our home page</p>;

  return (
    <div className="flex flex-col">
      <Link to="/">go back</Link>
      <div>
        <h2>Title</h2>
        {tvShow?.name}
      </div>
      <div>
        <h2>Rating</h2>
        {tvShow?.rating.average}
      </div>
      <Image alt={`${tvShow?.name} poster`} src={tvShow?.image?.original} />
      <div>
        <h2>Summary</h2>
        <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
      </div>
      <div>
        <h2>Genre</h2>
        {tvShow?.genres.map((genre) => genre).join(" | ")}
      </div>
      <div>
        <h2>Language</h2>
        {tvShow?.language}
      </div>
    </div>
  );
};

export default TvShowDetails;
