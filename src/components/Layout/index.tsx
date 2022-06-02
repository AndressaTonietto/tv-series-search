import Link from '../Link';
import { Main, Nav, Separator } from './styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav>
        <Link to="/">TV Series Search</Link>
      </Nav>
      <Separator />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
