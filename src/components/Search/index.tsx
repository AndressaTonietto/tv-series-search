import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import api from '../../services/api';
import { StyledInput } from './styles';

const Search = ({
  setShows,
}: {
  setShows: React.Dispatch<React.SetStateAction<[TVShowInfo] | []>>;
}) => {
  const [filter, setFilter] = useState('');
  const debouncedValue = useDebounce<string>(filter, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    search();
  }, [debouncedValue]);

  const search = async () => {
    try {
      const url = `search/shows?q=${filter}`;
      const res = await api.get(url);
      setShows(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledInput
      type="text"
      id="search"
      value={filter}
      onChange={handleChange}
      autoComplete="off"
      placeholder="Type to search"
    />
  );
};

export default Search;
