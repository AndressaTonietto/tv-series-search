import { useState } from 'react';
import Card from '../../components/Card';
import Label from '../../components/Label';
import Search from '../../components/Search';
import { SearchContainer, TVShowsContainer } from './styles';

const Home = () => {
  const [shows, setShows] = useState<[TVShowInfo] | []>([]);
  const [favoriteTvShows, setFavoriteTvShows] = useState<[TVShowInfo] | []>([]);

  const updateFavorites = (tvShow: TVShowInfo) => {
    if (favoriteTvShows.find(show => show === tvShow))
      setFavoriteTvShows(
        prevState =>
          [...prevState.filter(show => show !== tvShow)] as [TVShowInfo] | []
      );
    else
      setFavoriteTvShows(
        prevState => [...prevState, tvShow] as [TVShowInfo] | []
      );
  };

  const isTvShowFavorite = (tvShowId: number) =>
    favoriteTvShows.some(show => show.show.id === tvShowId);

  return (
    <div>
      <SearchContainer>
        <Label>Shows</Label>
        <Search setShows={setShows} />
      </SearchContainer>
      <TVShowsContainer>
        {shows?.map(show => (
          <Card
            tvShow={show}
            updateFavorites={updateFavorites}
            isFavorite={isTvShowFavorite(show.show.id)}
          />
        ))}
      </TVShowsContainer>
      <Label>Favorites</Label>
      {favoriteTvShows && (
        <TVShowsContainer>
          {favoriteTvShows?.map(tvShow => (
            <Card
              tvShow={tvShow}
              updateFavorites={updateFavorites}
              isFavorite={true}
            />
          ))}
        </TVShowsContainer>
      )}
    </div>
  );
};

export default Home;
