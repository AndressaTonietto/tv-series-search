import { StyledLink } from './styles';

const Link = ({ to, children }: LinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
