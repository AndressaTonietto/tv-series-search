import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import Search from "./search";
import renderer from "react-test-renderer";
import useDebounce from "../../hooks/useDebounce";
import useFetchTvSeries from "../../hooks/useFetchSeries";

jest.mock("../../hooks/useDebounce");
jest.mock("../../hooks/useFetchSeries");

const testErrorMessage = "test error message";

describe("Search", () => {
  it("renders correctly", () => {
    useDebounce.mockReturnValue("");
    useFetchTvSeries.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    const tree = renderer
      .create(
        <Router>
          <Search />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays loading state", () => {
    useDebounce.mockReturnValue("");
    useFetchTvSeries.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <Router>
        <Search />
      </Router>
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("displays error state", () => {
    useDebounce.mockReturnValue("");
    useFetchTvSeries.mockReturnValue({
      data: null,
      loading: false,
      error: testErrorMessage,
    });

    render(
      <Router>
        <Search />
      </Router>
    );
    expect(
      screen.getByText((content, element) => content.includes(testErrorMessage))
    ).toBeInTheDocument();
  });

  it("displays no results state", () => {
    const noTvShowsMessage = "No tv shows matching your query were found";
    useDebounce.mockReturnValue("query");
    useFetchTvSeries.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <Router>
        <Search />
      </Router>
    );
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "query" } });
    expect(
      screen.getByText((content, element) => content.includes(noTvShowsMessage))
    ).toBeInTheDocument();
  });
});
