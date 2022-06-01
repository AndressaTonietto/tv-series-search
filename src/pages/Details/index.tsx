import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Link from '../../components/Link';
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
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">TV Series Search</Link>
      </nav>
      <div>
        <img
          alt={`${details?.name} poster`}
          src={details?.image.medium}
          width={250}
        />
        <p>Genres: {details?.genres.map((genre: any) => genre).join(', ')}</p>
        <p>Name: {details?.name}</p>
        <p>Average Runtime: {details?.averageRuntime} min</p>
        <p>Rating: {details?.rating.average}</p>
        <p>Status: {details?.status}</p>
        <p>Summary: {details?.summary}</p>
        <a href={`${details?.url}`}>URL: {details?.url}</a>
      </div>
    </div>
  );
};

export default Details;
