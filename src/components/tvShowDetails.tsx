import { useNavigate, useParams } from "react-router-dom";

import DOMPurify from "dompurify";
import ErrorMessage from "./errorMessage";
import Image from "./image";
import Loading from "./loading";
import useFetchTvSeriesDetails from "../hooks/useFetchTvSeriesDetails";

const TvShowDetails = () => {
  const { tvShowId } = useParams();
  const navigate = useNavigate();
  const {
    data: tvShow,
    loading,
    error,
  } = useFetchTvSeriesDetails({
    id: tvShowId || "",
  });
  const sanitizedSummary = DOMPurify.sanitize(tvShow?.summary || "");

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <button
        className="btn btn-neutral btn-sm mt-2"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
      <div className="divider"></div>
      <div className="flex flex-col mt-4 gap-4">
        <label className="text-xl">{tvShow?.name}</label>
        {tvShow?.rating.average && (
          <div className="flex items-center gap-2">
            <label>Rating:</label>
            <div className="badge badge-success">{tvShow?.rating.average}</div>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <Image alt={`${tvShow?.name} poster`} src={tvShow?.image?.original} />
          <div className="flex gap-2 flex-wrap">
            {tvShow?.genres.map((genre) => (
              <div className="badge badge-secondary">{genre}</div>
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
        </div>
        <div className="flex items-center gap-2">
          <label>Language:</label>
          <div className="badge badge-accent">{tvShow?.language}</div>
        </div>
      </div>
    </>
  );
};

export default TvShowDetails;
