interface ImageProps {
  alt: string;
  src: string | undefined;
  className?: string;
}

const Image = ({ alt, src, className }: ImageProps) => {
  if (src)
    return <img alt={alt} src={src} className={`max-w-52 ${className}`} />;
  return (
    <div className="aspect-[2/3] justify-center max-w-52 flex items-center px-2 badge-neutral">
      No image available
    </div>
  );
};

export default Image;
