import { useNavigate } from 'react-router-dom';
import { cardWidth } from '../../config';
import Image from '../Image';
import { Favorite, Footer, ImageContainer, StyledCard } from './styles';
import { FaHeart } from 'react-icons/fa';

const Card = ({ tvShow, updateFavorites, isFavorite }: CardProps) => {
  const navigate = useNavigate();

  const handleClickFavorite = (e: any) => {
    e.stopPropagation();
    updateFavorites(tvShow);
  };

  const handleClickCard = (e: any) => {
    navigate(`/details/${tvShow.show.id}`, { replace: true });
  };

  return (
    <StyledCard onClick={e => handleClickCard(e)}>
      <ImageContainer>
        <Image
          alt={`${tvShow.show.name} poster`}
          src={tvShow.show.image?.original}
          width={cardWidth}
        />
        <Favorite
          isFavorite={isFavorite}
          onClick={(e: any) => handleClickFavorite(e)}
        >
          <FaHeart />
        </Favorite>
      </ImageContainer>
      <Footer>
        <p>{tvShow.show.name}</p>
        <p>{tvShow.show.rating.average}</p>
      </Footer>
    </StyledCard>
  );
};

export default Card;
