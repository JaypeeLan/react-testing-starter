import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("group", () => {
  const jaypee = {
    id: 5,
    name: "laniran",
    isAdmin: false,
  };

  it("should render name if user is passed", () => {
    render(<UserAccount user={jaypee} />);

    expect(screen.getByText(jaypee.name)).toBeInTheDocument();
  });

  //   it("should render button if user is admin", () => {
  //     render(<UserAccount user={jaypee} />);

  //     const btn = screen.getByRole("button");
  //     expect(btn).toBeInTheDocument();
  //     expect(btn).toHaveTextContent(/edit/i);
  //   });

  it("should render button if user is not admin", () => {
    render(<UserAccount user={jaypee} />);

    const btn = screen.queryByRole("button");
    // expect(btn).toBeNull();
    expect(btn).not.toBeInTheDocument();
  });
});
