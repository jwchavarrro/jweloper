import { render, screen } from "@testing-library/react";
import { Section03 } from "../index";

describe("Section03", () => {
  it("should render the Section03 component", () => {
    render(<Section03 />);
    const title = screen.getByText(/Proyectos destacados/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main title", () => {
    render(<Section03 />);
    const title = screen.getByText(/Proyectos destacados/i);
    expect(title).toBeInTheDocument();
  });

  it("should render within a SnapPage component", () => {
    const { container } = render(<Section03 />);
    const section = container.querySelector("section.snap-start");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with three columns", () => {
    const { container } = render(<Section03 />);
    // Verificar que hay un grid con tres columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-3");
    expect(grid).toBeInTheDocument();
  });
});
