import {render, screen} from "@testing-library/react";
import {Greet} from "./greet";

test("greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("greet render correctly with name", () => {
  render(<Greet name="world" />);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
