import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import api from '../../services/api';

const Search = ({
  setShows,
}: {
  setShows: React.Dispatch<React.SetStateAction<[TVShowInfo] | []>>;
}) => {
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce<string>(search, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedValue]);

  const handleSearch = async () => {
    try {
      const url = `search/shows?q=${search}`;
      const res = await api.get(url);
      setShows(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <input
      type="text"
      id="search"
      value={search}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};

export default Search;
