import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("user list", () => {
  it("should not render user if the user array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should  render users if the user array is not empty", () => {
    const users = [
      { id: 2, name: "hello" },
      { id: 1, name: "world" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
