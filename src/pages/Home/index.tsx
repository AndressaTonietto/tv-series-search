import { useState } from 'react';
import Card from '../../components/Card';
import Label from '../../components/Label';
import Search from '../../components/Search';
import { SearchContainer, TVShowsContainer } from './styles';

const Home = () => {
  const [shows, setShows] = useState<[TVShowInfo] | []>([]);

  return (
    <div>
      <SearchContainer>
        <Label>Shows</Label>
        <Search setShows={setShows} />
      </SearchContainer>
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
