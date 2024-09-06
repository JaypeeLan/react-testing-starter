import { render, screen } from "@testing-library/react"; //itr
import Greet from "../../src/components/Greet";

// d
describe("It should render login button when the name is not provided", () => {
  it("should", () => {
    //it
    render(<Greet />);

    //qt, qr
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
