import { render, screen } from "@testing-library/react";
import Darklight from "../../components/Darklight";

describe("<Darklight />", () => {
  test("should render the component", () => {
    render(<Darklight />);
    expect(screen.getByTitle(/theme switcher/i)).toBeInTheDocument();
  });
});
