interface ImageProps {
  alt: string;
  src: string | undefined;
  className?: string;
}

const Image = ({ alt, src, className }: ImageProps) => {
  if (src)
    return <img alt={alt} src={src} width="auto" className={className} />;
  return <label>No image available</label>;
};

export default Image;
