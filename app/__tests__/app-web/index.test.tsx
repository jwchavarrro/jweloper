import { render, screen } from "@testing-library/react";
import AppWeb from "../../app-web/page";

describe("AppWeb Page", () => {
  it("should render the AppWeb page", () => {
    render(<AppWeb />);
    const sections = screen.getAllByRole("generic");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should render sections with snap-start class", () => {
    const { container } = render(<AppWeb />);
    const sections = container.querySelectorAll("section.snap-start");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should render within a div container with scroll classes", () => {
    const { container } = render(<AppWeb />);
    const div = container.querySelector("div.snap-y");
    expect(div).toBeInTheDocument();
  });
});
