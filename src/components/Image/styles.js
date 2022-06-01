import styled from 'styled-components';
import { cardWidth } from '../../config';

export const ImageFallback = styled.div`
  width: ${cardWidth}px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  border-radius: 6px;
`;
