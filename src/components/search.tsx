import ErrorMessage from "./errorMessage/errorMessage";
import Loading from "./loading/loading";
import TvShowCard from "./tvShowCard";
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

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="flex flex-col gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          id="search"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {data && data?.length === 0 && (
        <div className="toast toast-center min-w-full">
          <div className="alert alert-warning text-wrap">
            No tv shows matching your query were found
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {data?.map(({ show }) => (
          <TvShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Search;
