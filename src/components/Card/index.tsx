import Link from '../Link';
import { Footer, StyledCard } from './styles';

const Card = ({ id, name, image, rating }: CardProps) => {
  return (
    <StyledCard>
      <Link to={`/details/${id}`}>
        <img alt={`${name} poster`} src={image} width={180} />
      </Link>
      <Footer>
        <p>{name}</p>
        <p>{rating}</p>
      </Footer>
    </StyledCard>
  );
};

export default Card;
