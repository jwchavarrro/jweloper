import { render, screen } from "@testing-library/react";
import { Section03 } from "../index";

// Mock del carrusel de shadcn (embla no funciona en jsdom)
jest.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel">{children}</div>
  ),
  CarouselContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  CarouselItem: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
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

  it("should render within a section", () => {
    const { container } = render(<Section03 />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should render the projects in the carousel", () => {
    render(<Section03 />);
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    expect(screen.getByText("RiskHub")).toBeInTheDocument();
  });
});
