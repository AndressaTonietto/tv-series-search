import { useState } from 'react';
import api from '../../services/api';

const Search = ({
  setShows,
}: {
  setShows: React.Dispatch<React.SetStateAction<[TVShowInfo] | []>>;
}) => {
  const [search, setSearch] = useState('');

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = `search/shows?q=${search}`;
      const res = await api.get(url);
      setShows(res.data);
    } catch (e) {
      console.log(e);
    }
    clearInput();
  };

  function clearInput() {
    setSearch('');
  }

  return (
    <form onSubmit={event => handleSearch(event)}>
      <input
        type="text"
        id="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
