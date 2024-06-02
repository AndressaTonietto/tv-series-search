import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import TvShowCard from "./tvShowCard";
import renderer from "react-test-renderer";

const testShow = {
  id: 1,
  name: "The IT Crowd",
  rating: { average: 8.7 },
  image: { medium: "test-image-url" },
  officialSite: "https://guthib.com/",
};

describe("TvShowCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <TvShowCard show={testShow} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the tv show general info and watch button correctly", () => {
    render(
      <Router>
        <TvShowCard show={testShow} />
      </Router>
    );

    expect(screen.getByText(testShow.name)).toBeInTheDocument();
    expect(
      screen.getByText(testShow.rating.average.toString())
    ).toBeInTheDocument();
    expect(screen.getByAltText(`${testShow.name} poster`)).toHaveAttribute(
      "src",
      testShow.image.medium
    );
    expect(screen.getByText("Watch")).toHaveAttribute(
      "href",
      testShow.officialSite
    );
  });
});
