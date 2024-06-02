import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Image from "./image";
import renderer from "react-test-renderer";

const testAlt = "test alt text";
const testSrc = "test-src.jpg";

describe("Image", () => {
  it("renders correctly with src", () => {
    const tree = renderer
      .create(<Image alt={testAlt} src={testSrc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without src", () => {
    const tree = renderer
      .create(<Image alt={testAlt} src={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the image and the alt text correctly when src is provided", () => {
    render(<Image alt={testAlt} src={testSrc} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", testSrc);
    expect(imgElement).toHaveAttribute("alt", testAlt);
  });

  it("renders 'No image available' when src is not provided", () => {
    render(<Image alt={testAlt} src={undefined} />);

    expect(screen.getByText("No image available")).toBeInTheDocument();
  });
});
