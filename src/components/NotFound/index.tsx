import { Link } from 'react-router-dom';
import { Label } from '../../styles/typography';
import { Container } from './styles';

const NotFound = () => (
  <Container>
    <Label>404 - Not Found!</Label>
    <Link to="/">Go Home</Link>
  </Container>
);

export default NotFound;
