import { render, screen } from "@testing-library/react";
import Grid from "./grid";
test("Great render correctly", () => {
  render(<Grid />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
