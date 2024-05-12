import {fireEvent, render, screen} from "@testing-library/react";
import {Greet} from "./greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    screen.debug();
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "World"}});
    screen.debug();
  });

});
