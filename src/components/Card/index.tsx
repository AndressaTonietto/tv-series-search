import { cardWidth } from '../../config';
import Image from '../Image';
import Link from '../Link';
import { Footer, StyledCard } from './styles';

const Card = ({ id, name, image, rating }: CardProps) => {
  return (
    <StyledCard>
      <Link to={`/details/${id}`}>
        <Image alt={`${name} poster`} src={image} width={cardWidth} />
      </Link>
      <Footer>
        <p>{name}</p>
        <p>{rating}</p>
      </Footer>
    </StyledCard>
  );
};

export default Card;
