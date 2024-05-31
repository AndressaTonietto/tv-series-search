import { cardWidth } from "../constants";

interface ImageProps {
  alt: string;
  src: string | undefined;
  width?: number;
}

const Image = ({ alt, src, width = cardWidth }: ImageProps) => {
  if (src) return <img alt={alt} src={src} width={width} />;
  return <label>No image available</label>;
};

export default Image;
