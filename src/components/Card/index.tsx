import { useNavigate } from 'react-router-dom';
import { cardWidth } from '../../config';
import Image from '../Image';
import { Favorite, Footer, ImageContainer, StyledCard } from './styles';

const Card = ({ tvShow, updateFavorites }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.stopPropagation();
    updateFavorites(tvShow);
  };

  const handleClickImage = (e: any) => {
    navigate(`/details/${tvShow.show.id}`, { replace: true });
  };

  return (
    <StyledCard>
      <ImageContainer onClick={e => handleClickImage(e)}>
        <Image
          alt={`${tvShow.show.name} poster`}
          src={tvShow.show.image?.original}
          width={cardWidth}
        />
        <Favorite onClick={(e: any) => handleClick(e)}>🎨</Favorite>
      </ImageContainer>
      <Footer>
        <p>{tvShow.show.name}</p>
        <p>{tvShow.show.rating.average}</p>
      </Footer>
    </StyledCard>
  );
};

export default Card;
