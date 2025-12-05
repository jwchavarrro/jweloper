import { render, screen } from "@testing-library/react";
import AppWeb from "../../app-web/page";

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

describe("AppWeb Page", () => {
  it("should render the AppWeb page", () => {
    render(<AppWeb />);
    const sections = screen.getAllByRole("generic");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should render sections", () => {
    const { container } = render(<AppWeb />);
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should render within a div container with scroll styles", () => {
    const { container } = render(<AppWeb />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    // Verificar que tiene estilos de scroll
    expect(div).toHaveStyle({ overflowY: "scroll" });
  });
});
