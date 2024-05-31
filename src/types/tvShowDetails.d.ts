interface TvShowDetails {
  genres: string[];
  id: number;
  name: string;
  image?: { medium: string; original: string };
  rating: { average: number };
  genres: string[];
  language: string;
  summary: string;
}
