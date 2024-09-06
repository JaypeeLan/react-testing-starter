import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms and conditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("Render correctly with the initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    // i don't need to filter the button tho
    // const btn = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeDisabled();
  });

  it("button should be enabled when checkbox is checked ", async () => {
    const { button, checkbox } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
