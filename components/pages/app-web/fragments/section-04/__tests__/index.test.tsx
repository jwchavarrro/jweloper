import { render, screen } from "@testing-library/react";
import { Section04 } from "../index";

describe("Section04", () => {
  it("should render the Section04 component", () => {
    render(<Section04 />);
    const title = screen.getByText(/Contacto/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main title", () => {
    render(<Section04 />);
    const title = screen.getByText(/Contacto/i);
    expect(title).toBeInTheDocument();
  });

  it("should render within a SnapPage component", () => {
    const { container } = render(<Section04 />);
    const section = container.querySelector("section.snap-start");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with three columns", () => {
    const { container } = render(<Section04 />);
    // Verificar que hay un grid con tres columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-3");
    expect(grid).toBeInTheDocument();
  });
});
