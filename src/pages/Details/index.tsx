import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<TVShowDetails>();

  useEffect(() => {
    const getTVShowDetails = async () => {
      try {
        const res = await api.get(`shows/${id}`);
        setDetails(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getTVShowDetails();
  }, [id]);

  return (
    <div>
      <img
        alt={`${details?.name} poster`}
        src={details?.image.medium}
        width={250}
      />
      <p>Genres: {details?.genres.map((genre: string) => genre).join(', ')}</p>
      <p>Name: {details?.name}</p>
      <p>Average Runtime: {details?.averageRuntime} min</p>
      <p>Rating: {details?.rating.average}</p>
      <p>Status: {details?.status}</p>
      <p>Summary: {details?.summary}</p>
      <a href={`${details?.url}`}>URL: {details?.url}</a>
    </div>
  );
};

export default Details;
