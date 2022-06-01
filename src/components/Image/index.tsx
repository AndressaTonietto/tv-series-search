import { cardWidth } from '../../config';
import { ImageFallback } from './styles';

const Image = ({ alt, src, width = cardWidth }: ImageProps) => {
  if (src) return <img alt={alt} src={src} width={width} />;
  return <ImageFallback>No image available</ImageFallback>;
};

export default Image;
