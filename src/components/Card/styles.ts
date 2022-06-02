import styled, { css } from 'styled-components';
import { cardWidth } from '../../config';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${cardWidth}px;
  background-color: #161b22;
  border-radius: 6px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

export const Favorite = styled.div<{
  isFavorite: boolean;
}>`


${({ isFavorite }) => css`
position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: #c3c3c3;

  ${isFavorite &&
    css`
      color: #8d0000;
    `}
  `}
`;

export const ImageContainer = styled.div`
  height: 100%;
  position: relative;
`;
