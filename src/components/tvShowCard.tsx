import Image from "./image";
import { useNavigate } from "react-router-dom";

const TvShowCard = ({ show }: TVShow) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tvShow/${show.id}`);
  };

  return (
    <div onClick={handleClick}>
      <Image alt={`${show.name} poster`} src={show.image?.medium} />
      <div>
        <p>{show.name}</p>
        <p>{show.rating.average}</p>
      </div>
    </div>
  );
};

export default TvShowCard;
