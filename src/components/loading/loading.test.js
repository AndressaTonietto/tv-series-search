import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Loading from "./loading";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

describe("Loading Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Loading />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders loading spinner", () => {
    render(<Loading />);
    const spinnerElement = screen.getByTestId("loading-spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
