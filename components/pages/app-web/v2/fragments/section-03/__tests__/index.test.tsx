import { render, screen } from "@testing-library/react";
import { Section03 } from "../index";

// Mock del Carousel para evitar errores con embla-carousel
jest.mock("@/components/atomic-design/organism/carousel", () => ({
  Carousel: ({ items }: { items: Array<{ content: React.ReactNode }> }) => (
    <div data-testid="carousel">
      {items.map((item, idx) => (
        <div key={idx}>{item.content}</div>
      ))}
    </div>
  ),
}));

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
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with three columns", () => {
    const { container } = render(<Section03 />);
    // Verificar que hay un grid con tres columnas en lg
    const grid = container.querySelector(".lg\\:grid-cols-3");
    expect(grid).toBeInTheDocument();
  });
});
