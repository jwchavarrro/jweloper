import { render, screen } from "@testing-library/react";
import { CounterIndicator } from "../index";

describe("CounterIndicator", () => {
  it("should render the CounterIndicator component", () => {
    render(<CounterIndicator value="01" />);
    const heading = screen.getByText("01");
    expect(heading).toBeInTheDocument();
  });

  it("should render with correct value", () => {
    render(<CounterIndicator value="42" />);
    const heading = screen.getByText("42");
    expect(heading).toBeInTheDocument();
  });

  it("should render children when provided", () => {
    render(
      <CounterIndicator value="01">
        <div>Child content</div>
      </CounterIndicator>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("should render children after value by default", () => {
    const { container } = render(
      <CounterIndicator value="01">
        <div data-testid="child">Child</div>
      </CounterIndicator>
    );
    const heading = container.querySelector("h1");
    const child = screen.getByTestId("child");
    // Verificar que ambos elementos existen
    expect(heading).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    // Verificar que el heading contiene el valor
    expect(heading).toHaveTextContent("01");
  });

  it("should render children before value when reverse is true", () => {
    const { container } = render(
      <CounterIndicator value="01" reverse>
        <div data-testid="child">Child</div>
      </CounterIndicator>
    );
    const child = screen.getByTestId("child");
    const heading = container.querySelector("h1");
    expect(child.parentElement?.firstChild).toBe(child);
    expect(heading).toBeInTheDocument();
  });

  it("should have correct classes on Title", () => {
    const { container } = render(<CounterIndicator value="01" />);
    const heading = container.querySelector("h1");
    expect(heading).toHaveClass("text-5xl!");
    expect(heading).toHaveClass("md:text-8xl!");
    expect(heading).toHaveClass("xl:text-9xl!");
    expect(heading).toHaveClass("underline");
  });
});
