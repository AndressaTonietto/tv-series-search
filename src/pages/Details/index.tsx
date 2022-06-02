import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Label, SubTitle, Text } from '../../styles/typography';
import { DetailsContainer, TextContainer } from './styles';
import { HiCursorClick } from 'react-icons/hi';

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
    <>
      <SubTitle>{details?.name}</SubTitle>
      <DetailsContainer>
        {details?.image?.medium && (
          <img
            alt={`${details?.name} poster`}
            src={details?.image?.medium}
            width={250}
          />
        )}
        <div>
          <TextContainer>
            <div>
              <Label>Genres: </Label>
              <Text>
                {details?.genres.map((genre: string) => genre).join(', ')}
              </Text>
            </div>
            <div>
              <Label>Average Runtime: </Label>
              <Text>{details?.averageRuntime} min</Text>
            </div>
            <div>
              <Label>Rating: </Label>
              <Text>{details?.rating.average}</Text>
            </div>
            <div>
              <Label>Status: </Label>
              <Text>{details?.status}</Text>
            </div>
          </TextContainer>
          <div>
            <div dangerouslySetInnerHTML={{ __html: details?.summary }} />
            <Text>
              <a href={`${details?.url}`}>
                View web page <HiCursorClick />
              </a>
            </Text>
          </div>
        </div>
      </DetailsContainer>
    </>
  );
};

export default Details;
