import { render, screen } from "@testing-library/react";
import Grid from "./grid";
// test("Great render correctly", () => {
//   render(<Grid />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });


// * Test driven development

test('Grid renders correctly', () => {
  render (<Grid />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});



test('Grid renders with a name', () => {
  render (<Grid name="John" />);
  const textElement = screen.getByText('Hello John');
  expect(textElement).toBeInTheDocument();
})     