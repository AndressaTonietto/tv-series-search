interface TVShowInfo {
  show: {
    id: number;
    name: string;
    image?: { medium: string; original: string; };
    rating: { average: number }
  }
}

interface CardProps {
  tvShow: TVShowInfo
  updateFavorites:(tvShow: TVShowInfo) => void;
  isFavorite: boolean;
}

interface LinkProps {
  to: string;
  children: any;
}

interface TVShowDetails {
  genres: Array<string>;
  name: string;
  averageRuntime: number;
  rating: {average: number};
  status: string;
  summary;
  url: string;
  image: { medium: string, original: string }
}

interface ImageProps {
  alt: string;
  src?: string;
  width: number;
}
