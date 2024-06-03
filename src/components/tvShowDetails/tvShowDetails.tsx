import { useNavigate, useParams } from "react-router-dom";

import DOMPurify from "dompurify";
import ErrorMessage from "../errorMessage/errorMessage";
import Image from "../image/image";
import Loading from "../loading/loading";
import useFetchTvSeriesDetails from "../../hooks/useFetchTvSeriesDetails";

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
      <div className="md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="flex flex-col mt-4 gap-4 md:mx-10">
          <label className="text-xl">{tvShow?.name}</label>
          {tvShow?.rating.average && (
            <div className="flex items-center gap-2">
              <label>Rating:</label>
              <div className="badge badge-success">
                {tvShow?.rating.average}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 md:block">
            <Image
              alt={`${tvShow?.name} poster`}
              src={tvShow?.image?.original}
              className="md:float-right"
            />
            <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
            <div className="flex items-center gap-2 md:mt-4">
              <div className="badge badge-accent">{tvShow?.language}</div>
              {tvShow?.genres.map((genre) => (
                <div key={genre} className="badge badge-secondary">
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShowDetails;
