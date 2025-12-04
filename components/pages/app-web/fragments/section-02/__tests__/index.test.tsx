import { render, screen } from "@testing-library/react";
import { Section02 } from "../index";

describe("Section02", () => {
  it("should render the Section02 component", () => {
    render(<Section02 />);
    const title = screen.getByText(/Experiencia Pro/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main title", () => {
    render(<Section02 />);
    const title = screen.getByText(/Experiencia Pro/i);
    expect(title).toBeInTheDocument();
  });

  it("should render within a SnapPage component", () => {
    const { container } = render(<Section02 />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with three columns", () => {
    const { container } = render(<Section02 />);
    // Verificar que hay un grid con tres columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-3");
    expect(grid).toBeInTheDocument();
  });
});
