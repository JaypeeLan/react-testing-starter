import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable text component", () => {
  it("should render full text if the text is less than 255 characters", () => {
    const shortText = "Hello world!";
    render(<ExpandableText text={shortText} />);

    const fullText = screen.getByRole("article");
    const btn = screen.queryByRole("button");
    expect(fullText).toHaveTextContent(shortText);
    expect(btn).not.toBeInTheDocument();
  });

  it("should not render full text if the text is less than 255 characters and is not expanded", async () => {
    const longText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, molestias quo soluta accusantium consectetur quia expedita similique inventore, rem saepe ipsa. Tempore adipisci minima quasi delectus voluptatibus aut asperiores magni commodi, consectetur omnis, deleniti soluta laboriosam id inventore sequi earum quis explicabo voluptate? Cumque fugit consequuntur molestiae laborum, repellendus rerum inventore debitis dolorum possimus, suscipit numquam eos itaque, asperiores adipisci facere repudiandae. Totam mollitia reprehenderit nulla quas blanditiis autem atque sit beatae eum iusto, error sequi similique delectus suscipit quod doloribus? Modi, quo vel dignissimos facilis repudiandae consectetur nobis fugiat molestiae delectus assumenda earum provident. Incidunt eos asperiores reprehenderit illo?";

    render(<ExpandableText text={longText} />);
    const btn = screen.getByRole("button");

    // text should not be completely rendered by default
    expect(screen.queryByText(longText)).not.toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/Show More/i);

    // text should not be completely rendered by when isExpanded is true
    const user = userEvent.setup();
    await user.click(btn);
    expect(btn).toHaveTextContent(/Show Less/i);
    expect(screen.queryByText(longText)).toBeInTheDocument();

    // expect(fullText).toHaveTextContent(/.../i);
  });
});
