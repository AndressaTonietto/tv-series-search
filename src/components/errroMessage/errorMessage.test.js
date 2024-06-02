import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ErrorMessage from "./errorMessage";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

const testErrorMessage = "test error message";
describe("ErrorMessage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <ErrorMessage error={testErrorMessage} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the error message and the link to home page correctly", () => {
    render(
      <Router>
        <ErrorMessage error={testErrorMessage} />
      </Router>
    );

    expect(
      screen.getByText((content, element) => content.includes(testErrorMessage))
    ).toBeInTheDocument();
    expect(screen.getByTestId("home-page-link")).toHaveAttribute("href", "/");
  });
});
