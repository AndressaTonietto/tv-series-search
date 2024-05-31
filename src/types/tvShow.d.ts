interface TVShow {
  show: {
    id: number;
    name: string;
    image?: { medium: string; original: string };
    rating: { average: number };
  };
}
