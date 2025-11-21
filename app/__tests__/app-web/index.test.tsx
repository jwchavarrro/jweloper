import { render, screen } from "@testing-library/react";
import AppWeb from "../../app-web/page";

describe("AppWeb Page", () => {
  it("should render the AppWeb page", () => {
    render(<AppWeb />);
    const heading = screen.getByRole("heading", { name: /appweb/i });
    expect(heading).toBeInTheDocument();
  });

  it("should render h1 element with AppWeb text", () => {
    render(<AppWeb />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("AppWeb");
  });

  it("should render within a div container", () => {
    const { container } = render(<AppWeb />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });
});
