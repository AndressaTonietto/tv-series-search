import { useState } from 'react';
import Card from '../../components/Card';
import Link from '../../components/Link';
import Search from '../../components/Search';

const Home = () => {
  const [shows, setShows] = useState<[TVShowInfo] | []>([]);

  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          display: 'flex',
        }}
      >
        <Link to="/">TV Series Search</Link>
        <Search setShows={setShows} />
      </nav>
      <div>
        {shows?.map(show => (
          <Card
            key={show.show.id}
            id={show.show.id}
            name={show.show.name}
            image={show.show.image?.original}
            rating={show.show.rating.average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
