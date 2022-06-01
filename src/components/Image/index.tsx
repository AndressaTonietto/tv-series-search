import { cardWidth } from '../../config';
import { ImageFallback, StyledImg } from './styles';

const Image = ({ alt, src, width = cardWidth }: ImageProps) => {
  if (src) return <StyledImg alt={alt} src={src} width={width} />;
  return <ImageFallback>No image available</ImageFallback>;
};

export default Image;
