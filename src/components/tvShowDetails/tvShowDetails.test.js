import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import TvShowDetails from "./tvShowDetails";
import renderer from "react-test-renderer";
import useFetchTvSeriesDetails from "../../hooks/useFetchTvSeriesDetails";

jest.mock("../../hooks/useFetchTvSeriesDetails");

const testShow = {
  id: 1,
  name: "The IT Crowd",
  rating: { average: 8.7 },
  image: { original: "test-image-url" },
  genres: ["Drama", "Thriller"],
  language: "English",
  summary: "<p>Test summary</p>",
};
describe("TvShowDetails", () => {
  beforeEach(() => {
    useFetchTvSeriesDetails.mockReturnValue({
      data: testShow,
      loading: false,
      error: null,
    });
  });

  it("renders correctly", async () => {
    const tree = renderer
      .create(
        <Router>
          <TvShowDetails />
        </Router>
      )
      .toJSON();
    await waitFor(() => expect(tree).toMatchSnapshot());
  });

  it("renders the show details correctly", async () => {
    render(
      <Router>
        <TvShowDetails />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(testShow.name)).toBeInTheDocument();
      expect(
        screen.getByText(testShow.rating.average.toString())
      ).toBeInTheDocument();
      expect(screen.getByAltText(`${testShow.name} poster`)).toHaveAttribute(
        "src",
        testShow.image.original
      );
      expect(screen.getByText("Test summary")).toBeInTheDocument();
      expect(screen.getByText("Language:")).toBeInTheDocument();
      expect(screen.getByText(testShow.language)).toBeInTheDocument();
      testShow.genres.forEach((genre) => {
        expect(screen.getByText(genre)).toBeInTheDocument();
      });
      expect(screen.getByText("Go back")).toBeInTheDocument();
    });
  });
});
