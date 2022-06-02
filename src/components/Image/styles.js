import styled from 'styled-components';
import { cardWidth } from '../../config';
import { Label } from '../../styles/typography';

export const ImageFallback = styled(Label)`
  width: ${cardWidth}px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  border-radius: 6px;
`;
