import { useState } from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { SubTitle } from '../../styles/typography';
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
        <SubTitle>Shows</SubTitle>
        <Search setShows={setShows} />
      </SearchContainer>
      <TVShowsContainer>
        {shows?.map(show => (
          <Card
            key={show.show.id}
            tvShow={show}
            updateFavorites={updateFavorites}
            isFavorite={isTvShowFavorite(show.show.id)}
          />
        ))}
      </TVShowsContainer>
      {favoriteTvShows.length > 0 && (
        <>
          <SubTitle>Favorites</SubTitle>
          <TVShowsContainer>
            {favoriteTvShows?.map(tvShow => (
              <Card
                key={tvShow.show.id}
                tvShow={tvShow}
                updateFavorites={updateFavorites}
                isFavorite={true}
              />
            ))}
          </TVShowsContainer>
        </>
      )}
    </div>
  );
};

export default Home;
