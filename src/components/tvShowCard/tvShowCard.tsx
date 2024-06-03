import { Link, useNavigate } from "react-router-dom";

import Image from "../image/image";

const TvShowCard = ({ show }: TVShow) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tvShow/${show.id}`);
  };

  return (
    <div
      className="card card-compact min-h-72 md:card-side bg-base-100 shadow-xl w-full cursor-pointer md:w-fit lg:w-1/3 xl:w-1/4"
      onClick={handleClick}
    >
      <Image
        alt={`${show.name} poster`}
        src={show.image?.medium}
        className="self-center"
      />
      <div className="card-body justify-between">
        <h2 className="card-title">{show.name}</h2>
        <div
          className="card-actions items-center justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <span>{show.rating.average}</span>
          <div
            className={`${!show.officialSite && "tooltip"}`}
            data-tip="not available"
          >
            <Link
              to={show.officialSite}
              target="_blank"
              className={`btn btn-primary ${
                !show.officialSite && "btn-disabled"
              }`}
            >
              Watch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;
