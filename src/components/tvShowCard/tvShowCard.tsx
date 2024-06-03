import { Link, useNavigate } from "react-router-dom";

import Image from "../image/image";

const TvShowCard = ({ show }: TVShow) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tvShow/${show.id}`);
  };

  return (
    <div
      className="card card-compact min-h-56 card-side bg-base-100 shadow-xl cursor-pointer md:w-1/2 lg:w-1/3 xl:w-1/4"
      onClick={handleClick}
    >
      <figure>
        <Image alt={`${show.name} poster`} src={show.image?.medium} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{show.name}</h2>
        <p>{show.rating.average}</p>
        <div
          className="card-actions justify-end"
          onClick={(e) => e.stopPropagation()}
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
  );
};

export default TvShowCard;
