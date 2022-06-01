import { useState } from 'react';
import Card from '../../components/Card';
import Link from '../../components/Link';
import Search from '../../components/Search';
import { Label, Nav, TVShowsContainer } from './styles';

const Home = () => {
  const [shows, setShows] = useState<[TVShowInfo] | []>([]);

  return (
    <div>
      <Nav>
        <Link to="/">TV Series Search</Link>
        <Search setShows={setShows} />
      </Nav>
      <Label>Shows</Label>
      <TVShowsContainer>
        {shows?.map(show => (
          <Card
            key={show.show.id}
            id={show.show.id}
            name={show.show.name}
            image={show.show.image?.original}
            rating={show.show.rating.average}
          />
        ))}
      </TVShowsContainer>
    </div>
  );
};

export default Home;
