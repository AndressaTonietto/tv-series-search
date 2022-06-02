import { Title } from '../../styles/typography';
import { StyledLink } from './styles';

const Link = ({ to, children }: LinkProps) => {
  return (
    <Title>
      <StyledLink to={to}>{children}</StyledLink>
    </Title>
  );
};

export default Link;
