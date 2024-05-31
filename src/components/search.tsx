import useDebounce from "../hooks/useDebounce";
import useFetchTvSeries from "../hooks/useFetchSeries";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce<string>(query);
  const { data, loading, error } = useFetchTvSeries({
    query: debouncedQuery,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Type to search"
      />
      {data?.map(({ show }) => (
        <p key={show.id}>{show.name}</p>
      ))}
    </>
  );
};

export default Search;
