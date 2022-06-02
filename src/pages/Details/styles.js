import styled from 'styled-components';

export const DetailsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
