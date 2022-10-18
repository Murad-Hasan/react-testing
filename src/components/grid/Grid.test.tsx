import { render, screen } from "@testing-library/react";
import Grid from "./grid";

// * Test driven development
test.skip("renders correctly", () => {
  render(<Grid />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test.skip("renders with a name", () => {
  render(<Grid name="John" />);
  const textElement = screen.getByText("Hello John");
  expect(textElement).toBeInTheDocument();
});

/*
 * grouping tests using describe
 */

describe.only("Grid", () => {
  test("renders correctly", () => {
    render(<Grid />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  // * nested describe
  describe("nested", () => {
    test("renders with a name", () => {
      render(<Grid name="John" />);
      const textElement = screen.getByText("Hello John");
      expect(textElement).toBeInTheDocument();
    });
  });
});
