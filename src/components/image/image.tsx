interface ImageProps {
  alt: string;
  src: string | undefined;
}

const Image = ({ alt, src }: ImageProps) => {
  if (src) return <img alt={alt} src={src} className="max-w-52" />;
  return (
    <div className="aspect-[2/3] justify-center max-w-52 flex items-center px-2 badge-neutral">
      No image available
    </div>
  );
};

export default Image;
