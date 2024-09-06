import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("product image gallery", () => {
  it("render with an empty array and ensure the DOM is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    // const ulElement = screen.queryByRole("list");
    // expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it("render a list of urls and, images with the right src attr", () => {
    const imgs = ["img1", "img2"];
    render(<ProductImageGallery imageUrls={imgs} />);
    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
    imgs.forEach((imgUrl, index) => {
      expect(images[index]).toHaveAttribute("src", imgUrl);
    });
  });
});
